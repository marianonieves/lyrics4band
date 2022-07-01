const  {TwitterApi} = require('twitter-api-v2');
let client = null;
let postEnabled = false;

module.exports = function (context, req) {
    context.log('>>>> Twitter test processed a request.');

    client = new TwitterApi({
        appKey: process.env.twitter_consumer_key,
        appSecret: process.env.twitter_consumer_secret,
        accessToken: process.env.twitter_access_token,
        accessSecret: process.env.twitter_access_token_secret,
    });

    context.log('>>>> hace el post ' );
    if( postEnabled ){
        client.v1.tweet('This tweet was written by a bot').then((val) => {

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
    }


};

