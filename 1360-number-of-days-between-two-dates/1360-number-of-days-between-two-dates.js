/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    return d1< d2 ? (d2-d1)/86400000 : (d1-d2)/86400000
};