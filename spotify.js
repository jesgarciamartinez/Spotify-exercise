$('#search').submit(function() {
    var term = $('#song').val();
    var url = 'https://api.spotify.com/v1/search?type=track&query=' + term;
    $.get(url, function(result) {
        console.log(result);
        var artistName = result.tracks.items[0].artists[0].name;
        var songTitle = result.tracks.items[0].name;
        var imageUrl;
        console.log(result.tracks.items[0].album.images[0].url)
        if (result.tracks.items[0].album.images.length) {
            var imageUrl = result.tracks.items[0].album.images[0].url;
        }
        console.log(imageUrl)
        console.log(artistName)
        console.log(songTitle)
        $('p.title').text(songTitle);
        $('p.author').text(artistName);
        $('img').prop('src', imageUrl);
        });
});








function getHandler(id) {
    return function() {
        console.log('looking for ' + id);
        var url = 'https://api.spotify.com/v1/artists/' + id + '/albums'
        $.get(url, function(result) {
            $('.albums').empty();
            result.items.forEach(function(album) {
                var imageUrl = '';
                if (album.images.length) {
                    imageUrl = album.images[0].url;
                }
                var code = '<li>' + album.name + ' <img src="' + imageUrl + '" width="50" height="50"></li>'
                $('#s' + id).append(code);
            });
        });
    }
}