function allstring(){
let strg="         RAHUL   KUMAR        "
let uptolowstrg="RAHUL KUMAR"
let lowtouptrg ="rahul kumar"
console.log(strg.trim())
console.log(uptolowstrg.toLowerCase())
console.log(lowtouptrg.toUpperCase())

}allstring();
module.exports.string=allstring;