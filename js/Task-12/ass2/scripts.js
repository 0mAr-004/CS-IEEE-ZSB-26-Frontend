let request = new XMLHttpRequest();

request.open("GET", "articles.json");
request.send();

request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(JSON.parse(this.responseText));
  }
};

request.onloadend = function () {
  console.log("Data Loaded");
};
//////

let request2 = new XMLHttpRequest();

request2.open("GET", "articles.json");
request2.send();

request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {

    let mainData = JSON.parse(this.responseText);

    mainData.forEach((article) => {
      article.category = "All";
    });
    console.log(mainData);

    let updatedData = JSON.stringify(mainData);

    console.log(updatedData);
  }
};