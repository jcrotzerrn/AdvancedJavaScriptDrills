let fruits = ['oranges', 'apples','strawberries'];

let favFruit;
let leastFav;

function printFruits() {
    let favFruit = fruits[2];
    let leastFav = fruits[1];
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
    }

    function printLeastFav() {
        console.log(leastFav);
    }
    printFavFruit();
    printLeastFav();
}

helloFunc();
function helloFunc() {
    var name = 'Julie';
    console.log('Hello' + name);
}

let sayHello = function() {
    alert('Hello there!');
};
let func = sayHello;
sayHello();

printFruits();
