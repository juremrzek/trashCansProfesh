export class Level{
    completed: boolean;
    required_score: number;
    number_of_cans: number;
    cans: Can[];
    constructor(required_score: number, number_of_cans: number, cans: Can[]){
        this.required_score = required_score;
        this.number_of_cans = number_of_cans;
        this.cans = cans;
        this.completed = false;
        console.log("Level created")
    }
    complete(){
        this.completed = true;
        console.log("Level completed")
    }
}
export class Player{
    username: string;
    score: number;
    maxStreak: number;
    fails: number;
    streak: number;
    constructor(username: string){
        this.username = username;
        this.score = 0;
        this.streak = 0;
        this.maxStreak = 0;
        this.fails = 0;
    }
}
export class Trash{
    static categories = ["paper", "plastic", "mixed", "dangerous", "glass", "bio"] //itd
    category: string;
    constructor(category: string){
        console.log("Trash created")
        this.category = category;
    }
}
export class Can{
    category: string;
    constructor(category: string){
        console.log("Can created")
        this.category = category;
    }
}