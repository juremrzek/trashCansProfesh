//example class usage

function generateTrash() {
    random_category = Trash.category_options[Math.floor(Math.random() * Trash.category_options.length)];
    return new Trash(category);
}

const player = new Player("Professional gamer");

// začetni trash
const current_trash = new Trash("paper");

// ko se zgodi swipe event
const current_can = new Can("paper");
if (current_trash.category == current_can.category) {
    player.score += 1;
    current_trash = generateTrash()
    if (player.score >= required_score) {
        // level complete screen
    }
}
else {
    if (player.score > player.record){
        player.record = player.score;
    }
    // game over screen
}