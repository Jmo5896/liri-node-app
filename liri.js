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

inquirer.prompt([
    {
        type: 'list',
        name: 'command',
        message: 'What do you want to do?',
        choices: ['my-tweets', 'spotify-this-song', 'movie-this', 'do-what-it-says']
    }
]).then(function(inquirerResponse) {
    //  console.log('you chose ' + inquirerResponse.command);
    
    if (inquirerResponse.command === 'my-tweets') { //npm install twitter
        console.log('welcome to ' + inquirerResponse.command);
        var params = {screen_name: 'nodejs'};
        client.get('favorites/list', function(error, tweets, response) {
            if(error) throw error;
            console.log(tweets);  // The favorites.
            console.log(response);  // Raw response object.
        });
    } else if (inquirerResponse.command === 'spotify-this-song') { //npm install node-spotify-api
        console.log('welcome to ' + inquirerResponse.command);
    } else if (inquirerResponse.command === 'movie-this') { //npm install request & npm install 
        console.log('welcome to ' + inquirerResponse.command);
    } else if (inquirerResponse.command === 'do-what-it-says') {
        console.log('welcome to ' + inquirerResponse.command);        
    }
});




