var LocalStorage = require('./localStorage')

var localStorage = new LocalStorage();
console.log("localstorage length: ", localStorage.length);

var uid = localStorage.getItem("user_id");

console.log("user_id: ", uid);

if (!uid) {
    console.log("User id not found. Setting the user id and token...");
    localStorage.setItem("token", "HIUI3aUHsSGs841d9987f43twAdIHSKHGAHlkss");
    localStorage.setItem("user_id", "12345");
} else {
    console.log('User id found: ', uid);
    console.log('clearing the User ID...');
    localStorage.clear();
}