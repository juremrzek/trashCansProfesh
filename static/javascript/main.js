class MainClass {
    constructor() {}

    generateTrash() {
        random_category = Trash.category_options[Math.floor(Math.random() * Trash.category_options.length)];
        return new Trash(category);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    number_of_cans = 2;
    required_score = 4;
    level = new Level(required_score);
    player = new Player("Professional gamer");

    current_trash = this.generateTrash();
    possible_can_categories = [...Trash.category_options]
    //Remove current trash category from possible can categories
    possible_can_categories = possible_can_categories.filter(can => can !== current_trash.category);
    possible_can_categories = shuffleArray(possible_can_categories);
    selectedCans = possible_can_categories.slice(0, number_of_cans-1);
    
    playGame() {
        if (this.current_trash.category == current_can.category) {
            player.score += 1;
            current_trash = generateTrash()
            if (player.score >= level.required_score) {
                level.complete();
                level = new Level(level.required_score+3);
            }
        }
        else {
            if (player.score > player.record){
                player.record = player.score;
            }
        }
    }
}