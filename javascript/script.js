//javascript, jQuery
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=N3CI0neky6WXR0qvwv4SykuGWuQFL650=5");
xhr.done(function(data) { console.log("success got data", data); });