var CatalogItem = require('./CatalogItem');
var CatalogGroup = require('./CatalogGroup');

var boots = new CatalogItem('Boots', 43.55);
var socks = new CatalogItem('socks', 16.55);
var hats = new CatalogItem('hats', 53.55);
var ties = new CatalogItem('ties', 13.55);

var groupOne = new CatalogGroup('Group 1', [boots, boots, socks]);
var groupTwo = new CatalogGroup('Group 2', [ties, hats, socks]);

[
    groupOne,
    groupTwo
].map(g => {
});


var root = new CatalogGroup('Root', [groupOne, groupTwo]);

root.print()
console.log(`\nTotal: ${root.total}`)