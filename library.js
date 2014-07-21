    (function(module) {
        "use strict";
        var Beatport = {},
            embedtrack = '<iframe class="beatport" src="http://embed.beatport.com/player?id=$2&type=track&auto=0"></iframe>',
            embedmix = '<iframe class="beatport" src="http://embed.beatport.com/player?id=$2&type=mix&auto=0"></iframe>';

        Beatport.parse = function(postContent, callback) {
            var	track = /<a href="(?:http?:\/\/)?(?:www\.)?(?:beatport\.com)\/track\/([\w\-_]+)\/([\w\-_]+)">.+<\/a>/g;
            var	mix = /<a href="(?:http?:\/\/)?(?:www\.)?(?:beatport\.com)\/mix\/([\w\-_]+)\/([\w\-_]+)">.+<\/a>/g;

            if (postContent.match(track)) {
                postContent = postContent.replace(track, embedtrack);
            }
            if (postContent.match(mix)) {
                postContent = postContent.replace(mix, embed);
            }

            callback(null, postContent);
        };

        module.exports = Beatport;
    }(module));



