export interface BibleAbbreviation {
    pt: string;
    en: string;
}

export interface BibleBook {
    abbrev: BibleAbbreviation;
    name: string;
    author: string;
    group: string;
    version: string;
}

export interface VerseDTO {
    book: BibleBook;
    chapter: number;
    number: number;
    text: string;
}