function rollDice() {
    const textbox = document.getElementById("textbox").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages"); 

    // Clear out the current dice images
    diceImages.innerHTML = '';
    
    const values = [];
    const images = [];

    for (let i = 0; i < textbox; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);

        const imagePath = `dice_images/${value}.jpeg`;
        // console.log("Image path:", imagePath); 
        images.push(`<img src="${imagePath}" alt="img_dice">`);
    }

    diceResult.textContent = `Dice : ${values.join(", ")}`;
    diceImages.innerHTML = images.join(''); // Ensure diceImages is not null
}
