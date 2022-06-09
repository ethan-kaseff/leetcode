/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let arr = s.split(' ');
    let sent = [];
    
    arr.forEach(word => {
        const number = word[word.length-1];
        sent[number - 1] = word.slice(0, word.length-1);
    })
    
    return sent.join(' ');
};