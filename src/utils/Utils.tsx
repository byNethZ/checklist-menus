export class Utils {

    constructor(){}

    capitalizeString(word: string): string {
        return word.replace(/\b\w/g, l => l.toUpperCase())
    }

}