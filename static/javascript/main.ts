import { Player, Level, Trash, Can } from "./classes";

class MainClass {

    constructor() {}

    generateTrash() {
        let random_category = Trash.categories[Math.floor(Math.random() * Trash.categories.length)];
        return new Trash(random_category);
    }

    generateCans(number_of_cans: number){
        let can_categories = [...Trash.categories]
        can_categories = can_categories.filter(can => can !== this.current_trash.category);
        can_categories = this.shuffleArray(can_categories);
        can_categories = can_categories.slice(0, number_of_cans-1);
        let cans: Can[] = [];
        for(let i=0; i<can_categories.length; i++){
            cans.push(new Can(can_categories[i]));
        }
        return cans;
    }

    shuffleArray(array: any[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    number_of_cans = 2;
    required_score = 4;
    level = new Level(this.required_score);
    player = new Player("Professional gamer");

    current_trash = this.generateTrash();
    cans = this.generateCans(this.number_of_cans);
    
    throwTrash(player:Player, level:Level, trash:Trash, can:Can) {
        if (trash.category == can.category) {
            player.score += 1;
            trash = this.generateTrash()
            if (player.score >= level.required_score) {
                level.complete();
                this.required_score += 3
                level = new Level(this.required_score);
            }
        }
        else {
            if (player.score > player.record){
                player.record = player.score;
            }
        }
    }
}