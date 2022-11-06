"use strict";
exports.__esModule = true;
exports.tweetStorm = exports.cutText = void 0;
function cutText(text, max) {
    var newText = '';
    text.length < 140 - max
        ? (newText = text.splice(0, text.length).join(''))
        : (newText = text.splice(0, max).join(''));
    return newText;
}
exports.cutText = cutText;
function tweetStorm(text) {
    var numberOfPages = Number(Math.ceil(text.length / 140).toFixed(0));
    var arrayText = text.split('');
    var tweets = [];
    for (var page = 1; page < numberOfPages + 1; page += 1) {
        var tweet = '';
        var pagination = "".concat(page, "/").concat(numberOfPages);
        tweet = cutText(arrayText, 140 - pagination.length);
        var tweetWithPagination = "".concat(tweet, " ").concat(pagination);
        tweets.push(tweetWithPagination);
    }
    return tweets;
}
exports.tweetStorm = tweetStorm;
var testing = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was in the 1960s with the release of sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like PageMaker including versions of Lorem Ipsum.";
console.log(tweetStorm(testing));
