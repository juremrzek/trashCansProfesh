class Level{
    completed: boolean;
    constructor(){
        this.completed = false;
    }
}
class Player{
    username: string;
    score: number;
    record: number;
    constructor(username: string){
        this.username = username;
        this.score = 0;
        this.record = 0;
    }
}
class Trash{
    static options = ["paper", "plastic", "mixed"] //itd
    name: string;
    category: string;
    constructor(name: string, category: string){
        this.name = name;
        this.category = category;
    }
}
class Can{
    category: string;
    constructor(category: string){
        this.category = category;
    }
}