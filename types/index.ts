export interface Book {
    id: string;
    title: string;
    authors: string[];
    publishedDate: string;
    description: string;
    pageCount: number;
    categories: string[];
    imageLinks: {
        thumbnail: string;
        smallThumbnail: string;
    };
    language: string;
}
