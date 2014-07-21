(function(module) {
    "use strict";

    var JotForm = {},
        embed = '<iframe class="beatport" src="http://embed.beatport.com/player/?id=$3&type=$1&auto=0">$1</iframe>';


    JotForm.parse = function(postContent, callback) {
        postContent = postContent.replace(/<a href="(?:http?:\/\/)?(?:www\.beatport\.com)\/([\w\-_]+)\/([\w\-_]+)\/([\w\-_]+)">([\w\-_]+)<\/a>/g, embed);
        callback(null, postContent);
    };

    module.exports = JotForm;
}(module));
