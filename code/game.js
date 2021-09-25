import kaboom from "kaboom";

// Kaboom!!! ///////////////////////////////////////////////////////////////////////////////////////////////////////

kaboom({
    width: 800, 
    height: 600,
    letterbox: true, 
    clearColor: [255, 255, 255]
});

// Assets //////////////////////////////////////////////////////////////////////////////////////////////////////////

loadFont("unscii", "fonts/unscii.png", 8, 8);

// Game ///////////////////////////////////////////////////////////////////////////////////////////////////////////

add([
    text("V", { size: 120, font: "unscii" }), 
    pos(width() / 3, height() / 3), 
    color(255, 0, 0), 
    origin("center")
]);
        
action(() => {
    if(keyIsPressed("v")) burp();
    if(keyIsPressed("f")) fullscreen(!fullscreen());
    if(mouseIsClicked()) window.open("https://youtu.be/dQw4w9WgXcQ", "_blank");
});