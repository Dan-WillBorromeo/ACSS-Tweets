var data = {
    "tweets": [{
        "created_at": "string",
        "id": 100,
        "text": "string",
        "entities": {}
    }]
}

var posts = JSON.parse(data);
var DBparameters = JSON.stringify(posts);
var words = "";
var item;

words += "<tbody>";
for (item in posts) {
    words += "<tr><td>" + posts[item].created_at + "<br>" + posts[item].id + "<br>" + posts[item].text + "<br>" + posts[item].entities + "</td></tr>";
}
words += "</tbody>";

document.getElementById("placeHolder").innerHTML = words;