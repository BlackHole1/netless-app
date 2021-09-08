import styles from "./style.scss?inline";

import type { NetlessApp } from "@netless/window-manager";
import { Doc } from "yjs";
import { editor as monacoEditor } from "monaco-editor";
import type { NetlessAppMonacoAttributes } from "./typings";
import { NetlessAppAttributesProvider } from "./y-app-attributes";
import { YMonaco } from "./y-monaco";

export type { NetlessAppMonacoAttributes } from "./typings";

const NetlessAppMonaco: NetlessApp<NetlessAppMonacoAttributes> = {
  kind: "Monaco",
  setup(context) {
    const box = context.getBox();

    let attrs = context.getAttributes();
    if (!attrs) {
      context.setAttributes({ cursors: {}, selections: {} });
      attrs = context.getAttributes();
    }
    if (!attrs) {
      throw new Error("[NetlessAppMonaco] No attributes");
    }
    if (!attrs.cursors) {
      context.updateAttributes(["cursors"], {});
    }
    if (!attrs.selections) {
      context.updateAttributes(["selections"], {});
    }

    box.mountStyles(styles);

    const yDoc = new Doc();
    const provider = new NetlessAppAttributesProvider(context, attrs, yDoc);

    const editor = monacoEditor.create(box.$content as HTMLElement, {
      value: "",
      automaticLayout: true,
    });

    if (import.meta.env.DEV) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).monacoEditor = editor;
    }

    const monacoBinding = new YMonaco(context, attrs, box, editor, provider.doc, provider.yText);

    context.emitter.on("destroy", () => {
      provider.destroy();
      monacoBinding.destroy();
    });
  },
};

export default NetlessAppMonaco;