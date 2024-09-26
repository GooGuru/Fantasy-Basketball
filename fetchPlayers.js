// fetchPlayers.js

const fetchPlayers = async () => {
  const myHeaders = new Headers();
  myHeaders.append("x-rapidapi-key", "28fb5b56deb9822911fc30b14c38aeeb");
  myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  try {
    const response = await fetch("https://v3.football.api-sports.io/players?league=39&season=2022", requestOptions);
    const data = await response.json();

    const playersArray = data.response.map(playerData => {
      const player = playerData.player;
      const position = playerData.statistics[0]?.games?.position || "Unknown";

      return {
        id: player.id,
        name: `${player.firstname} ${player.lastname}`,
        position: position,
      };
    });

    return playersArray;
    
  } catch (error) {
    console.error('Error fetching players:', error);
    return [];  
  }
};

export default fetchPlayers;
