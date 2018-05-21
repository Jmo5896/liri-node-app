require('dotenv').config(); //npm install dotenv

//import keys.js
var myKeys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
//access key information
var spotify = new Spotify(myKeys.spotify);
var client = new Twitter(myKeys.twitter);

//================================================================
// Make it so liri.js can take in one of the following commands:
    // * `my-tweets`
    // * `spotify-this-song`
    // * `movie-this`
    // * `do-what-it-says`
//What each command should do:
    // node liri.js my-tweets
        // This will show your last 20 tweets and when they were created at in your terminal/bash window.
    // node liri.js spotify-this-song '<song name here>'
        // This will show the following information about the song in your terminal/bash window:
            // Artist(s)
            // The song's name
            // A preview link of the song from Spotify
            // The album that the song is from
        // If no song is provided then your program will default to "The Sign" by Ace of Base.
    // node liri.js movie-this '<movie name here>'
        // This will output the following information to your terminal/bash window:
            // * Title of the movie.
            // * Year the movie came out.
            // * IMDB Rating of the movie.
            // * Rotten Tomatoes Rating of the movie.
            // * Country where the movie was produced.
            // * Language of the movie.
            // * Plot of the movie.
            // * Actors in the movie.
        // If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
    // node liri.js do-what-it-says
        // Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
        // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
        // Feel free to change the text in that document to test out the feature for other commands.
//================================================================

//choose a command:
var inquirer = require('inquirer');  //npm install inquirer
var fs = require('fs');
var request = require('request');

inquirer.prompt([
    {
        type: 'list',
        name: 'command',
        message: 'What do you want to do?',
        choices: ['my-tweets', 'spotify-this-song', 'movie-this', 'do-what-it-says']
    }
]).then(function(inquirerResponse) {
    //  console.log('you chose ' + inquirerResponse.command);
    makeDecision(inquirerResponse.command);

});

function makeDecision(command) {
    switch (command) {
        case 'my-tweets':
            getTweets();
            break;
        
        case 'do-what-it-says':
            getRandom();
            break; 
        default:
        promptSearchTerm(command);
    }
}

function promptSearchTerm (command) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'searchTerm',
            message: 'What do you want to search?'
            
        }
    ]).then(function(inquirerResponse) {
        var searchTerm = inquirerResponse.searchTerm;
        switch (command) {
        case 'spotify-this-song':
            getSpotify(searchTerm);
            break;
        case 'movie-this':
            getMovie(searchTerm);
            break;
        }
    });
}

function getTweets () {
    var params = {screen_name: 'Jmo5896'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log(tweets[0]);
            var myTweets = [];
            for (var i = 0; i < tweets.length; i++) {
                var myTweet = {
                    text: tweets[i].text,
                    created: tweets[i].created_at
                }
                myTweets.push(myTweet);
            }
            console.log(myTweets);
            log(myTweets);
        } 
    });
}
function getSpotify(songName) {
    if (songName === '' || !songName) {
        songName = 'The Sign Ace of Base';
    }
    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
        var songData = data.tracks.items[0];
        var song = {
            artists: songData.artists[0].name,
            track: songData.name,
            album: songData.album.name,
            link: songData.preview_url
        }
        console.log(song); 
        log(song);
    });  
}
function getMovie(movieName) {
    if (movieName === '' || !movieName) {
        movieName = 'Mr. Nobody.';
    }
    request('http://www.omdbapi.com/?apikey=trilogy&t=' + movieName + '&y=&plot=full&tomatoes=true', function (error, response, body) {
        var movieData = JSON.parse(body);
        var movie = {
            title: movieData.Title,
            rated: movieData.Rated,
            released: movieData.Year,
            country: movieData.Country,
            language: movieData.Language,
            tomatoes: movieData.Ratings[1].Value,
            plot: movieData.Plot,
            actors: movieData.Actors,
            imdbRating: movieData.imdbRating
        }
        console.log(movie);
        log(movie);
    });   
}
function getRandom () {

    fs.readFile('./random.txt', 'utf8', function(error, data) {
        var randomArr = data.split(', ');
        getSpotify(randomArr[1]);
    });
}
function log(data) {
    fs.appendFile('./log.txt', JSON.stringify(data) + '\n', function(err) {
        console.log('data was logged');

    });
}


