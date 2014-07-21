    (function(module) {
        "use strict";
        var Beatport = {},
            embedtrack = '<iframe class="beatport" src="http://embed.beatport.com/player?id=$2&type=track&auto=0" width="100%" height="162" frameborder="0" scrolling="no"></iframe>',
            embedmix = '<iframe class="beatport" src="http://embed.beatport.com/player?id=$2&type=mix&auto=0" width="100%" height="162" frameborder="0" scrolling="no"></iframe>';

        Beatport.parse = function(postContent, callback) {
            var	track = /<a href="(?:http?:\/\/)?(?:www\.)?(?:beatport\.com)\/track\/([\w\-_]+)\/([\w\-_]+)">.+<\/a>/g;
            var	mix = /<a href="(?:http?:\/\/)?(?:mixes\.)?(?:beatport\.com)\/mix\/([\w\-_]+)\/([\w\-_]+)">.+<\/a>/g;

            if (postContent.match(track)) {
                postContent = postContent.replace(track, embedtrack);
            }
            if (postContent.match(mix)) {
                postContent = postContent.replace(mix, embedmix);
            }

            callback(null, postContent);
        };

        module.exports = Beatport;
    }(module));



    <iframe src="http://embed.beatport.com/player/?id=178484&type=mix" width="100%" height="162" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>