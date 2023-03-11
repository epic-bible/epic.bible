import { Database } from "./db";

export type IBook = Database["public"]["Tables"]["Books"]["Row"];
export type IBibles = Database["public"]["Tables"]["Bibles"]["Row"];
export type IVerses = Database["public"]["Tables"]["Verses"]["Row"];
export type IChapters = Database["public"]["Tables"]["Chapters"]["Row"];
