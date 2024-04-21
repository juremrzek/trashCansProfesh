import { Player, Level, Trash, Can } from "./classes";

class MainClass {

    constructor() {}

    generateRandomTrash(categories: string[]) {
        let random_category = categories[Math.floor(Math.random() * categories.length)];
        return new Trash(random_category);
    }

    generateRandomCans(number_of_cans: number){
        let can_categories = [...Trash.categories]
        can_categories = can_categories.filter(can => can !== this.current_trash.category);
        can_categories = this.shuffleArray(can_categories);
        console.log(can_categories)
        let cans: Can[] = [];
        cans.push(new Can(this.current_trash.category));
        for(let i=1; i<number_of_cans; i++){
            cans.push(new Can(can_categories[i]));
        }
        return cans;
    }

    generateTrash(level_number: number) {
        switch(level_number) {
            case 1: return this.generateRandomTrash(["plastic"])
            case 2: return this.generateRandomTrash(["plastic", "bio"])
            case 3: return this.generateRandomTrash(["fabric", "bio", "dangerous"])
            default: return this.generateRandomTrash(["plastic", "paper", "bio"])
        }
    }

    shuffleArray(array: any[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    current_trash: Trash;
    current_level_index = 1;
    player = new Player("Professional gamer");
    cans: Can[];
    
    throwTrash(player:Player, level:Level, trash:Trash, can:Can) {
        if (trash.category == can.category) {
            player.score += 1;
            player.streak += 1;
            trash = this.generateTrash(this.current_level_index)
            if (player.score >= level.required_score) {
                level.complete();
            }
        }
        else {
            if (player.streak > player.maxStreak){
                player.maxStreak = player.score;
            }
            player.streak = 0;
            player.fails += 1;
        }
    }
}
let c = new MainClass();
console.log(c.generateCans(2))
c.throwTrash(c.player, c.level, c.current_trash, c.cans[0])

//level1