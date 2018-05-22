# liri-node-app
 LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.
    parameter choices are: my-tweets, spotify-this-song, movie-this, and do-what-it-says
    also keeps a log of te information fetched

    You will need to create a .env file to store your keys, it should be formated as so:

        * Spotify API keys

        SPOTIFY_ID=your-spotify-id
        SPOTIFY_SECRET=your-spotify-secret

        * Twitter API keys

        TWITTER_CONSUMER_KEY=your-twitter-consumer-key
        TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
        TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
        TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret
    
[`you will need to get these spotify and twitter keys yourself`](https://apps.twitter.com/app/new)
[`and`](https://beta.developer.spotify.com/dashboard/login)
    you will also need to put in your screen name on line 65

##NPM Install
    make sure to 'npm install' these packages:
        * dotenv
        * node-spotify-api
        * twitter
        * inquirer
        * request
    ex: npm install twitter


## File
* [`Pictures of Liri in action`](images/01-pic.png)
    * [`my-tweets`](images/02-pic_my-tweets.png)
    * [`spotify-this-song if you don't enter anything`](images/03-pic_spotify-this-song-blank.png)
    * [`spotify-this-song`](images/03-pic_spotify-this-song.png)
    * [`movie-this if you don't enter anything`](images/04-pic_movie-this-blank.png)
    * [`movie-this`](images/04-pic_movie-this.png)
    * [`do-what-it-says`](images/05-pic_do-what-it-says.png)
    * [`**bonus** log.txt`](images/06-pic_log.png)
    

