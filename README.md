# liri-node-app
        Liri-node-app is a command line based app I built 
    to help myself polish my node.js abilities.  Basically 
    I give the user several options of what they want to do
    and Liri does the rest.   

# Getting Started:
    You will need to create a .env file to store your keys, it should be formated like so:

        * Spotify API keys

        SPOTIFY_ID=your-spotify-id
        SPOTIFY_SECRET=your-spotify-secret

        * Twitter API keys

        TWITTER_CONSUMER_KEY=your-twitter-consumer-key
        TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
        TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
        TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret

    Below you'll find links for getting your own twitter and spotify keys
[`Twitter`](https://apps.twitter.com/app/new) && [`Spotify`](https://beta.developer.spotify.com/dashboard/login)
    
    you will also need to put in your screen name on line 61 of liri.js

    NPM Installs:
        here's my list of npm packages used for this project:
            * dotenv
            * node-spotify-api
            * twitter
            * inquirer
            * request
        After cloning the repo make sure to run "npm i" do download all these packages.

# How It works:
    * So after you clone the repo and get all your npm packages sorted go to your bash and run "node liri.js"
    
    * This will take you to a screen that looks like this: 
[`main menu`](images/01-pic.png)

    *We'll now walk through each option:
        1. My Tweets:
            *As long as built out your .env and got your api keys, when you select "my-tweets" you will recieve the
            last 20 tweets you have posted 
[`my-tweets`](images/02-pic_my-tweets.png)

        2. Spotify This Song:
            *If you select "spotify-this-song", this screen will pop up:
[`spotify-this-song opening menu`](images/03-pic_spotify-opening-menu.png) 

            *If you hit enter without entering a song title this will happen 
[`spotify-this-song if you don't enter anything`](images/03-pic_spotify-this-song-blank.png)

            *If you enter the title of a song, liri will fetch that information like so: 
 [`spotify-this-song after entering a song title`](images/03-pic_spotify-this-song.png)

        3. Movie This:
            *When selected you'll get a menu like this: 
[`movie-this`](images/04-pic_movie-menu.png)

            *If hit enter without entering a movie title, this will happen: 
[`movie-this if you don't enter anything`](images/04-pic_movie-this-blank.png)

            *If you enter a movie title it will pull up information on the movie like so: 
[`movie-this`](images/04-pic_movie-this.png)

        4. Do What It Says:
            *When selected, this will pop up: 
[`do-what-it-says`](images/05-pic_do-what-it-says.png)

# Built With:
    Javascript
    Node.js

# Authors
    Justin Moore
