require('dotenv').config(); //npm install dotenv

//import keys.js
var myKeys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
//access key information
var spotify = new Spotify(myKeys.spotify); //npm install node-spotify-api
var client = new Twitter(myKeys.twitter); //npm install twitter

//choose a command:
var inquirer = require('inquirer');  //npm install inquirer
var fs = require('fs');
var request = require('request'); //npm install request

inquirer.prompt([
    {
        type: 'list',
        name: 'command',
        message: 'What do you want to do?',
        choices: ['my-tweets', 'spotify-this-song', 'movie-this', 'do-what-it-says']
    }
]).then(function(inquirerResponse) {
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
    var params = {screen_name: 'SCREEN NAME GOES HERE'};//change to your screen name
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
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
    spotify.search({ type: 'track', query: songName }, function(error, data) {
        if (error) {
          return console.log('Error occurred: ' + error);
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
        if (error) {
            return console.log('Error occurred: ' + error);
        }
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
        if (error) {
            return console.log('Error occurred: ' + error);
        }
        var randomArr = data.split(', ');
        getSpotify(randomArr[1]);
    });
}
function log(data) {
    fs.appendFile('./log.txt', JSON.stringify(data) + '\n', function() {
        console.log('data was logged');
    });
}