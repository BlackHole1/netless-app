import type { Event, RoomState } from "white-web-sdk";
import type { Slide, SyncEvent } from "@netless/slide";
import type { NetlessApp } from "@netless/window-manager";
import type { SlideController } from "./utils/slide";

import { SLIDE_EVENTS } from "@netless/slide";
import { ensureAttributes } from "@netless/app-shared";
import { SideEffectManager } from "side-effect-manager";
import { SlideDocsViewer } from "./SlideDocsViewer";
import { mountSlideController, syncSceneWithSlide } from "./utils/slide";
import { isObj } from "./utils/helpers";
import styles from "./style.scss?inline";

export type SlideState = Slide["slideState"];

export interface Attributes {
  /** convert task id */
  taskId: string;
  /** base url of converted resources */
  url: string;
  /** internal state of slide, do not change */
  state: SlideState | null;
}

const SlideApp: NetlessApp<Attributes> = {
  kind: "Slide",
  async setup(context) {
    const box = context.getBox();
    const view = context.getView();
    const room = context.getRoom();
    const displayer = context.getDisplayer();
    const attrs = ensureAttributes(context, {
      taskId: "",
      url: "",
      state: null,
    });

    if (!attrs.taskId) {
      throw new Error(`[Slide] no taskId`);
    }

    if (!view) {
      throw new Error(`[Slide] no view, please set scenePath on addApp()`);
    }

    box.mountStyles(styles);

    const sideEffect = new SideEffectManager();
    // 因为 view 存在，init scene path 必定存在
    const baseScenePath = context.getInitScenePath() as string;
    const showController = import.meta.env.DEV || context.getAppOptions()?.debug;
    const channel = `channel-${context.appId}`;

    let theController: SlideController | undefined;

    const onPageChanged = (page: number) => {
      console.log("[Slide] page to", page);
      if (context.getIsWritable() && room && theController) {
        syncSceneWithSlide(room, theController.slide, baseScenePath);
        docsViewer.viewer.setPageIndex(page - 1);
      }
    };

    const onTransitionStart = () => {
      docsViewer.viewer.setPlaying();
    };

    const onTransitionEnd = () => {
      docsViewer.viewer.setPaused();
    };

    const onDispatchSyncEvent = (event: SyncEvent) => {
      if (context.getIsWritable() && theController) {
        context.updateAttributes(["state"], theController.slide.slideState);
        if (room) {
          room.dispatchMagixEvent(channel, { type: SLIDE_EVENTS.syncDispatch, payload: event });
        }
      }
    };

    function registerMagixEvent() {
      sideEffect.add(() => {
        const magixEventListener = (ev: Event) => {
          if (
            theController &&
            ev.event === channel &&
            ev.authorId !== displayer.observerId &&
            isObj(ev.payload)
          ) {
            const { type, payload } = ev.payload;
            if (type === SLIDE_EVENTS.syncDispatch) {
              theController.receiveSyncEvent(payload);
            }
          }
        };
        displayer.addMagixEventListener(channel, magixEventListener);
        return () => displayer.removeMagixEventListener(channel, magixEventListener);
      });
    }

    const docsViewer = new SlideDocsViewer({
      box,
      view,
      mountSlideController: async anchor => {
        theController = await mountSlideController(
          anchor,
          attrs.taskId,
          attrs.url || "https://convertcdn.netless.link/dynamicConvert",
          showController,
          JSON.parse(JSON.stringify(attrs.state)),
          displayer.state.sceneState.index + 1,
          onPageChanged,
          onTransitionStart,
          onTransitionEnd,
          onDispatchSyncEvent
        );

        registerMagixEvent();

        return theController;
      },
      mountWhiteboard: dom => context.mountView(dom),
    });

    try {
      await docsViewer.mount();
    } catch {
      console.log("[Slide]: destroy by error");
      sideEffect.flushAll();
      docsViewer.destroy();
      return;
    }

    if (import.meta.env.DEV) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).slideDoc = docsViewer;
    }

    if (room) {
      docsViewer.toggleClickThrough(room.state.memberState.currentApplianceName);
      sideEffect.add(() => {
        const onRoomStateChanged = (e: Partial<RoomState>) => {
          if (e.memberState) {
            docsViewer.toggleClickThrough(e.memberState.currentApplianceName);
          }
        };
        room.callbacks.on("onRoomStateChanged", onRoomStateChanged);
        return () => room.callbacks.off("onRoomStateChanged", onRoomStateChanged);
      });
    }

    box.events.on("readonly", readonly => {
      docsViewer.setReadonly(readonly);
    });

    context.emitter.on("destroy", () => {
      console.log("[Slide]: destroy");
      sideEffect.flushAll();
      docsViewer.destroy();
    });
  },
};

export default SlideApp;
