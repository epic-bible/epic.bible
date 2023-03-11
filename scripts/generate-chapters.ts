import { writeFileSync } from "fs";
import { resolve } from "path";
import consola from "consola";
import kjv from "../data/kjv.json";
import books from "./out/books.json";

export interface Book {
  book_id: string;
  name: string;
  chapters: number;
  testament: string;
}

export interface Chapter {
  book: Book;
  chapter: number;
  chapter_name: string;
  verses_size: number;
  summary?: string;
}

/**
 * Generate Books
 */
function generateChapters() {
  const totalChaptersInBook = books.reduce(
    (acc, curr) => acc + curr!.chapters,
    0
  );
  const allChapters = books
    .filter((b) => !!b)
    .reduce((acc, curr) => {
      const chapters = Array.from({ length: curr!.chapters }, (_, i) => i + 1);
      chapters.forEach((chapter) => {
        const kjvChapter = (kjv as any)[curr!.name][chapter];
        const chapterName = `${curr!.name} ${chapter}`;
        const chapterData = {
          summary: undefined,
          chapter,
          chapter_name: chapterName,
          verses_size: Object.keys(kjvChapter).length,
        };
        // @ts-ignore
        acc.push(chapterData);
      });
      return acc;
    }, [] as Chapter[]);

  writeFileSync(
    resolve(__dirname, "./out/chapters.json"),
    JSON.stringify(allChapters)
  );

  consola.info("Expected: ", totalChaptersInBook);
  return allChapters;
}

try {
  const bibles = generateChapters();
  consola.success("Chapters generated successfully. Count:", bibles.length);
} catch (error) {
  consola.error(error);
}
