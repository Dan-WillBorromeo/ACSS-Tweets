var tweets = JSON.parse(data);
var words = "";
var item;

for (item in tweets) {
    words += "<tr><td>" + tweets[item].created_at + "<br>" + tweets[item].id + "<br>" + tweets[item].text + "<br>" + tweets[item].entities + "</td></tr>";
}

document.getElementById("placeHolder").innerHTML = words;