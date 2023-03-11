export interface Bible {
  name: string;
  abbreviation: string;
  short_version: string;
  version_id: string;
}

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
  bible_version: Bible["abbreviation"];
  reference: string;
  book: Book;
  chapter: Chapter;
  text: string;
  number: number;
}

export type BookReference = `${Bible["abbreviation"]}:${Book["abbreviation"]}`;
export type ChapterReference =
  `${Bible["abbreviation"]}:${Book["abbreviation"]}:${Chapter["chapter"]}`;
export type FullVerseReference =
  `${Bible["abbreviation"]}:${Book["abbreviation"]}:${Chapter["chapter"]}:${Verse["number"]}`;
