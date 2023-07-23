import { Game } from "./game"

export type GameFilters = Pick<Game, "title" | "genre" | "platform">;
