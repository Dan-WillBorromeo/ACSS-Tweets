var object, DBparameters, xHttp, newObject, item, text = "";

object = { table: tweets, limit: 20 };
DBparameters = JSON.stringify(object);
xHttp = new XMLHttpRequest();

xHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        newObject = JSON.parse(this.responseText);

        text += "<table border='1'>"
        for (item in newObject) {
            text += "<tr><td>" + newObject[item].created_at + "<br>" + newObject[item].id + "<br>" + newObject[item].text + "<br>" + newObject[item].entities + "<td><tr>";
        }
        text += "</table>"

        document.getElementById("placeHolder").innerHTML = text;
    }
};

xHttp.open("POST", "./tweets.json", true);
xHttp.setRequestHeader("Content-type", "application/x-ww-form-urlencoded");
xHttp.send("item= " + DBparameters)