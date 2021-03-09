let artistData;

//selected DOM elements
const $input = $('input[type="text"]')
const $artist = $('#artist');
const $label = $('#label');
const $genre = $('#genre');
const $origin = $('#origin')
const $website = $('#website');
const $facebook = $('#facebook');
const $twitter = $('#twitter');
const $bio = $('#bio');

//event listeners
$('form').on('submit', getData);

//function to get data
function getData(evt) {
    evt.preventDefault();
    const artist = $input.val();
    $.ajax("https://www.theaudiodb.com/api/v1/json/1/search.php?s=" + artist)
    .then(function(data) {
        console.log('Artist Data: ', data);
        artistData = data;
        render();
    }, (error) => {
        console.log('Error ', error);
    });
}

//function to plug in data in DOM elements
function render() {
    $artist.text(artistData.artists[0].strArtist);
    $label.text(artistData.artists[0].strLabel);
    $genre.text(artistData.artists[0].strGenre);
    $origin.text(artistData.artists[0].strCountry);
    $website.text(artistData.artists[0].strWebsite);
    $facebook.text(artistData.artists[0].strFacebook);
    $twitter.text(artistData.artists[0].strTwitter);
    $bio.text(artistData.artists[0].strBiographyEN);

    if(artistData.artists[0].strLabel === null || artistData.artists[0].strLabel === '') {
        $label.text('N/A');
    } else if(artistData.artists[0].strCountry === null || artistData.artists[0].strCountry === '') {
        $origin.text('N/A');
    } else if(artistData.artists[0].strFacebook === null || artistData.artists[0].strFacebook === '') {
        $facebook.text('N/A');
    } else if(artistData.artists[0].strTwitter === null || artistData.artists[0].strTwitter === '') {
        $twitter.text('N/A');
    } else if(artistData.artists[0].strWebsite === null || artistData.artists[0].strWebsite === '') {
        $website.text('N/A');
    } else {        
        $genre.text('N/A');
    }
};



    

