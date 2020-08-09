class InventoryItem {

    constructor(name, price=0) {
        this.name = name;
        this.price = price;
    }

    print() {
        console.log(`${this.name} - $${this.price}`);
    }
}

class GoldenInventoryItem {

    constructor(baseItem) {
        this.name = `Golden ${baseItem.name}`;
        this.price = 1000 + baseItem.price;
    }
}

class DiamondInventoryItem {

    constructor(baseItem) {
        this.name = `Diamond ${baseItem.name}`;
        this.price = 1500 + baseItem.price;
    }

    print() {
        console.log(`${this.name} costs a lot of money.`);
    }
}

module.exports = {
    InventoryItem,
    GoldenInventoryItem,
    DiamondInventoryItem
}