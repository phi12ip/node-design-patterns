var Shopper = require('./Shopper');
var {
    InventoryItem,
    GoldenInventoryItem,
    DiamondInventoryItem
} = require('./InventoryItem');


var jessie = new Shopper("Jessie <3", 1232000.00);

var car = new InventoryItem("Dodge Ram", 40000.00);
var computer = new InventoryItem("Macbook Pro", 1400.00);

var diamond_macbook = new DiamondInventoryItem(computer);

jessie.purchase(car);
jessie.purchase(diamond_macbook);

jessie.printStatus();