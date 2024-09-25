var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "your-key-here");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

let playersArray = [];

fetch("https://v3.football.api-sports.io/players?league=39&season=2022", requestOptions)
  .then(response => response.json())
  .then(data => {
    data.response.forEach(playerData => {
      const player = playerData.player;
      const position = playerData.statistics[0]?.games?.position || "Unknown";

      playersArray.push({
        id: player.id,
        name: `${player.firstname} ${player.lastname}`,
        position: position
      });
    });

    console.log(playersArray);
  })
  .catch(error => console.log('error', error));
