import { writeFileSync } from "fs";
import { resolve } from "path";
import consola from "consola";
import { snakeCase, keysIn } from "lodash-es";

import kjv from "../data/kjv.json";
import ot from "../data/ot.json";
import aliases from "../data/aliases.json";

export interface Book {
  book_id: string;
  name: string;
  chapters: number;
  testament: string;
}

const sorted = aliases.map((a) => a.name);
consola.log("sorted", sorted);
function sortBooks(books: Book[], _sorted = sorted) {
  const result: Book[] = [];
  books.forEach((element) => {
    const index = _sorted.indexOf(element.name);
    if (index > -1) {
      result[index] = element;
    }
  });
  return result;
}

/**
 * Generate Books
 */
function generateBooks() {
  const bookNames = keysIn(kjv);

  const books: Book[] = bookNames.map((bookName) => {
    const bookData = (kjv as any)[bookName];
    const book = {
      book_id: snakeCase(bookName),
      name: bookName,
      chapters: Object.keys(bookData).length,
      testament: ot.find((book) => book.name === bookName) ? "ot" : "nt",
    };

    return book;
  });

  const sorted = sortBooks(books);
  writeFileSync(resolve(__dirname, "./out/books.json"), JSON.stringify(sorted));
  return sorted;
}
try {
  const bibles = generateBooks();
  consola.success("Books generated successfully", bibles);
} catch (error) {
  consola.error(error);
}
