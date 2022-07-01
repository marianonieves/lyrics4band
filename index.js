const SongsObject = require('./songs'); 
const  {TwitterApi} = require('twitter-api-v2');

let client = null;
let postEnabled = false;

module.exports = function (context, req) {
    context.log('>>>> Twitter test processed a request.');

    context.log('>>>> process.env.twitter_consumer_key :: ' + process.env.twitter_consumer_secret);
    context.log('>>>> process.env.twitter_consumer_secret :: ' + process.env.twitter_consumer_key);
    context.log('>>>> process.env.twitter_access_token :: ' + process.env.twitter_access_token);
    context.log('>>>> process.env.twitter_access_token_secret :: ' + process.env.twitter_access_token_secret);

    songs = new SongsObject();
    context.log('>>>> - - - - - - - - ' );
 

    client = new TwitterApi({
        appKey: process.env.twitter_consumer_key,
        appSecret: process.env.twitter_consumer_secret,
        accessToken: process.env.twitter_access_token,
        accessSecret: process.env.twitter_access_token_secret,
    });

    var messageToTweet = songs.getRandomLyric();

    context.log('>>>> hace el post ' );
    if( postEnabled ){
        client.v1.tweet( messageToTweet ).then((val) => {

            context.log(">>>> val" + val);
            context.log(">>>> success");
            context.res = {
                status: 200,
                body: ">>>> check your tweet account"
            };
            context.done();

        }).catch((err) => {

            context.log(">>>> error: " + err );
            context.res = {
                status: 400,
                body: err
            };
            context.done();            
        })
    } else {  
        context.res = {
            status: 200,
            body: ">>>> the post tweet feature is DISABLED in the app, but it would tweet : " + messageToTweet
        };
        context.done();
    }
};

