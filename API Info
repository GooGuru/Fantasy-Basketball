// fetch("https://v3.football.api-sports.io/players?id=276&season=2019", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "v3.football.api-sports.io",
// 		"x-rapidapi-key": "28fb5b56deb9822911fc30b14c38aeeb"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "28fb5b56deb9822911fc30b14c38aeeb");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v3.football.api-sports.io/players?league=39&season=2022", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//   PC0WpomrJdWkqtrmSWnxz6IyILQftoNyfLNzFerSdayCk1RRQVgAzfzYvjpK