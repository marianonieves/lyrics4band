# lyrics4band
twitter app lyrics4band 
<pre>
Open the KUDU console 
  https://lyrics4band.scm.azurewebsites.net/DebugConsole
and go to the root of your function
  C:\home\site\wwwroot\HttpTrigger1>
run the command
  npm install twitter-api-v2

The Environment VARIABLES
    client = new TwitterApi({
        appKey: process.env.twitter_consumer_key,
        appSecret: process.env.twitter_consumer_secret,
        accessToken: process.env.twitter_access_token,
        accessSecret: process.env.twitter_access_token_secret,
    });
Are set in the AZURE PORTAL
go to the Path:
  Home > Lyrics4Bands > Settings > Configuration (where you can finde the FUNCTION_EXTENSION_VERSION also)
And add
  twitter_consumer_key
  twitter_consumer_secret
  twitter_access_token
  twitter_access_token_secret

based on the article: https://dev.to/codesphere/using-the-twitter-api-with-nodejs-4p3c
</pre>
