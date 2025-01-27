import { log } from "./log";

export const $ = document.querySelector.bind(document);
export const store = sessionStorage;
export const persistStore = localStorage;

export interface RoomInfo {
  uuid: string;
  roomToken: string;
}

export const env = import.meta.env;

export const post = <T>(path: string, body: unknown): Promise<T> =>
  fetch(`https://api.netless.link/v5/${path}`, {
    method: "POST",
    headers: {
      token: env.VITE_TOKEN,
      region: "cn-hz",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(r => r.json());

export async function createRoom(): Promise<RoomInfo> {
  const { uuid } = await post<{ uuid: string }>("rooms", { limit: 0, isRecord: false });
  log(`uuid = %O`, uuid);
  const roomToken = await post<string>(`tokens/rooms/${uuid}`, { lifespan: 0, role: "admin" });
  log(`roomToken = %O`, roomToken);
  const rooms = JSON.parse(persistStore.getItem("rooms") || "[]") as RoomInfo[];
  const room = { uuid, roomToken };
  rooms.unshift(room);
  persistStore.setItem("rooms", JSON.stringify(rooms));
  return room;
}

export function share(query: URLSearchParams | string | RoomInfo): string {
  if (typeof query === "object" && query !== null && "uuid" in query) {
    query = `uuid=${query.uuid}&roomToken=${query.roomToken}`;
  }
  return location.origin + location.pathname + "?" + query.toString();
}

export function clearQueryString(): void {
  replaceURL(location.origin + location.pathname);
}

export function replaceURL(url: string): void {
  url ||= location.origin + location.pathname;
  history.replaceState({ url }, "", url);
}
