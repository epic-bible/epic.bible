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

export type BookReference = `${Bible["abbreviation"]}:${Book["abbreviation"]}`;
export type ChapterReference =
  `${Bible["abbreviation"]}:${Book["abbreviation"]}:${Chapter["chapter"]}`;
export type FullVerseReference =
  `${Bible["abbreviation"]}:${Book["abbreviation"]}:${Chapter["chapter"]}:${number}`;

export interface Verse {
  bible_version: Bible["abbreviation"];
  reference: FullVerseReference;
  book: Book;
  chapter: Chapter;
  text: string;
  number: number;
}

export type BibleBooks =
  | "Genesis"
  | "Exodus"
  | "Leviticus"
  | "Numbers"
  | "Deuteronomy"
  | "Joshua"
  | "Judges"
  | "Ruth"
  | "1 Samuel"
  | "2 Samuel"
  | "1 Kings"
  | "2 Kings"
  | "1 Chronicles"
  | "2 Chronicles"
  | "Ezra"
  | "Nehemiah"
  | "Esther"
  | "Job"
  | "Psalms"
  | "Proverbs"
  | "Ecclesiastes"
  | "Song of Solomon"
  | "Isaiah"
  | "Jeremiah"
  | "Lamentations"
  | "Ezekiel"
  | "Daniel"
  | "Hosea"
  | "Joel"
  | "Amos"
  | "Obadiah"
  | "Jonah"
  | "Micah"
  | "Nahum"
  | "Habakkuk"
  | "Zephaniah"
  | "Haggai"
  | "Zechariah"
  | "Malachi"
  | "Matthew"
  | "Mark"
  | "Luke"
  | "John"
  | "Acts"
  | "Romans"
  | "1 Corinthians"
  | "2 Corinthians"
  | "Galatians"
  | "Ephesians"
  | "Philippians"
  | "Colossians"
  | "1 Thessalonians"
  | "2 Thessalonians"
  | "1 Timothy"
  | "2 Timothy"
  | "Titus"
  | "Philemon"
  | "Hebrews"
  | "James"
  | "1 Peter"
  | "2 Peter"
  | "1 John"
  | "2 John"
  | "3 John"
  | "Jude"
  | "Revelation";
