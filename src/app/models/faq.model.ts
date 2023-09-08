export class Faq {
    question: string;
    answer: string;
    isOpen: boolean;

    constructor(question: string, answer: string, isOpen: boolean = false) {
        this.question = question;
        this.answer = answer;
        this.isOpen = isOpen;
    }
}
