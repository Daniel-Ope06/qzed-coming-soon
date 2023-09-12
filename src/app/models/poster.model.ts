export class Poster {
    imgUrl: string;
    author: string;
    caption: string;

    constructor(imgUrl: string, author: string, caption: string) {
        this.imgUrl = imgUrl;
        this.author = author;
        this.caption = caption;
    }
}
