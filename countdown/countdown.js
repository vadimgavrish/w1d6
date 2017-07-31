var countdownGenerator = function (x) {
    counter = x + 1;
    return function(){
        counter -= 1;
        if (counter > 0) {
            return console.log("T-Minus " + counter + "...");
        } else if (counter === 0) {
            return console.log("Blast Off!");
        } else {
            return console.log("Rockets already gone, bub!");
        }
    }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!