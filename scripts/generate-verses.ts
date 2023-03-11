import { writeFileSync } from "fs";
import { resolve } from "path";
import consola from "consola";

export interface Book {
  book_id: string;
  name: string;
  abbreviation: string;
  chapters: number;
  testament: string;
}

export interface Chapter {
  book: Book;
  chapter: number;
  verses_size: number;
}

export interface Verse {
  bible_version: string;
  reference: string;
  book: Book;
  chapter: Chapter;
  text: string;
  number: number;
}

/**
 * Generate Verses
 */
function generateVerses() {
  writeFileSync(resolve(__dirname, "./out/verses.json"), JSON.stringify([]));
  return [];
}

try {
  const bibles = generateVerses();
  consola.success("Verses generated successfully", bibles);
} catch (error) {
  consola.error(error);
}
