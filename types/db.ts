export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Bibles: {
        Row: {
          abbreviation: string;
          created_at: string | null;
          id: string;
          language: string;
          name: string;
          version_id: string;
        };
        Insert: {
          abbreviation: string;
          created_at?: string | null;
          id?: string;
          language: string;
          name: string;
          version_id: string;
        };
        Update: {
          abbreviation?: string;
          created_at?: string | null;
          id?: string;
          language?: string;
          name?: string;
          version_id?: string;
        };
      };
      Books: {
        Row: {
          book_id: string;
          chapters: number;
          created_at: string | null;
          id: string;
          name: Database["public"]["Enums"]["valid_book_type"];
          testament: Database["public"]["Enums"]["valid_testament_type"];
        };
        Insert: {
          book_id: string;
          chapters: number;
          created_at?: string | null;
          id?: string;
          name: Database["public"]["Enums"]["valid_book_type"];
          testament: Database["public"]["Enums"]["valid_testament_type"];
        };
        Update: {
          book_id?: string;
          chapters?: number;
          created_at?: string | null;
          id?: string;
          name?: Database["public"]["Enums"]["valid_book_type"];
          testament?: Database["public"]["Enums"]["valid_testament_type"];
        };
      };
      Chapters: {
        Row: {
          book: Database["public"]["Enums"]["valid_book_type"];
          chapter: number;
          chapter_name: string;
          created_at: string | null;
          id: string;
          verses_size: number;
        };
        Insert: {
          book: Database["public"]["Enums"]["valid_book_type"];
          chapter: number;
          chapter_name: string;
          created_at?: string | null;
          id?: string;
          verses_size: number;
        };
        Update: {
          book?: Database["public"]["Enums"]["valid_book_type"];
          chapter?: number;
          chapter_name?: string;
          created_at?: string | null;
          id?: string;
          verses_size?: number;
        };
      };
      Verses: {
        Row: {
          _v: string;
          book: Database["public"]["Enums"]["valid_book_type"];
          chapter: number;
          created_at: string | null;
          id: number;
          ref: string;
          text: string;
          verse: number;
        };
        Insert: {
          _v: string;
          book: Database["public"]["Enums"]["valid_book_type"];
          chapter: number;
          created_at?: string | null;
          id?: number;
          ref: string;
          text: string;
          verse: number;
        };
        Update: {
          _v?: string;
          book?: Database["public"]["Enums"]["valid_book_type"];
          chapter?: number;
          created_at?: string | null;
          id?: number;
          ref?: string;
          text?: string;
          verse?: number;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      valid_book_type:
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
      valid_testament_type: "ot" | "nt" | "ap";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
