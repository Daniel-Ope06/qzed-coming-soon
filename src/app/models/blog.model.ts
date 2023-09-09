export class Blog {
    id: string;
    title: string;
    author?: string;
    imgUrl?: string;
    readTime?: string;
    category?: string;
    date?: string;
    summary?: string;
    article?: string;

    constructor({
            id,
            title,
            author = '',
            imgUrl = '',
            readTime = '',
            category = '',
            date = '',
            summary = '',
            article = '',
          }: {
            id: string;
            title: string;
            author?: string;
            imgUrl?: string;
            readTime?: string;
            category?: string;
            date?: string;
            summary?: string;
            article?: string;
          }) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.imgUrl = imgUrl;
        this.readTime = readTime;
        this.category = category;
        this.date = date;
        this.summary = summary;
        this.article = article;
    }
}
