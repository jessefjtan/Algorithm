/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let [word1, ...remain] = [...A];
    let commonChars = [];

    for(let letter of word1) {
        if( remain.every( x => x.includes(letter) ) ) {
            commonChars.push(letter);
        }
        remain = remain.map(x => x.replace(letter, ""));
    }
    return commonChars;

};

console.log( commonChars(["cool","lock","cook"]) );
