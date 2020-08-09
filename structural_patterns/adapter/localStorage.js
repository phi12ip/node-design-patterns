var { 
    writeFile,
    existsSync,
    readFileSync,
    unlink
} = require('fs');

var filename = 'localStorage.json'

class LocalStorage {
    constructor(){
        if (existsSync(filename)) {
            console.log('Loading items from localStorage.json');
            var txt = readFileSync(filename);
            this.items = JSON.parse(txt);
        } else {
            this.items = {};
        }
    }

    get length() {
        return Object.keys(this.items).length;
    }

    getItem(key) {
        return this.items[key];
    }

    setItem(key,value) {
        this.items[key] = value;
        writeFile(filename, JSON.stringify(this.items), error => {
            if (error) {
                console.error(error);
            }
        });
    }

    clear() {
        this.items = {};
        unlink('localStorage.json', () => {
            console.log('localstorage file removed');
        });
    }
}

module.exports = LocalStorage;