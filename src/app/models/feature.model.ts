export class Feature {
    title: string;
    isCompleted: boolean;
    details: string[];
    launchDate?: string;

    constructor(title: string, isCompleted: boolean, details: string[], launchDate?: string) {
        this.title = title;
        this.isCompleted = isCompleted;
        this.details = details;
        this.launchDate = launchDate;
    }
}
