function estimate(text, options) {
    options = options || {};
    /* Define words per minute to use to calculate reading time'*/
    options.averageWordsPerMinute = options.averageWordsPerMinute || 200;
    /* Options of 'minute'/'hour'/'second'*/
    options.round = options.round || 'minute';
    var readingTime = {minutes: 0, seconds: 0},
        timeDecimal = 0,
        decimalPortion = 0,
        wordCount = 0,
        textParts = [],
        part = null;
    /* Only get frequency if input is string with content */
    if((typeof text === 'string') && (text.length > 0)){
        /* Returns text with HTML, tabs, new lines, punctuation, and extra spaces removed */
        function stripText(text) {
            return text.replace(/<[^>]+>|[!.?,;:'"-]/g,'').replace(/\r?\n|\r|\s+|\t/g, ' ').trim();
        }
        /* Get words in text */
        textParts = stripText(text).split(' ');
        /* Get Word Count */
        wordCount = textParts.length;
        /* Calculate initial minutes */
        timeDecimal = wordCount / options.averageWordsPerMinute;
        readingTime.minutes = Math.floor(timeDecimal);
        /* Calculate decimal portion as seconds */
        decimalPortion = parseFloat('0.' + timeDecimal.toString().split('.')[1]);
        decimalPortion = (decimalPortion * 0.60).toFixed(2);
        readingTime.seconds = parseInt(decimalPortion.toString().split('.')[1]);
    }
    return {readingTime: readingTime, wordCount: wordCount};   
}
module.exports = estimate;