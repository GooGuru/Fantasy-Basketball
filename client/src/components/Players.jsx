import React, { useEffect, useState } from "react";

const Players = () => {
  const [playersArray, setPlayersArray] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    const myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "28fb5b56deb9822911fc30b14c38aeeb");
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch("https://v3.football.api-sports.io/players?league=39&season=2022", requestOptions);
      const data = await response.json();


      if (data.response) {
        const players = data.response.map(playerData => {
          const player = playerData.player;
          const position = playerData.statistics[0]?.games?.position || "Unknown";
          return {
            id: player.id,
            name: `${player.firstname} ${player.lastname}`,
            position: position,
          };
        });

        setPlayersArray(players);
      } else {
        console.error("No players data found in response");
      }
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };

  return (
    <div>
      <h1>Players List</h1>
      {playersArray.length > 0 ? (
        <ul>
          {playersArray.map(player => (
            <li key={player.id}>
              {player.name} - Position: {player.position}
            </li>
          ))}
        </ul>
      ) : (
        <p>No players found.</p>
      )}
    </div>
  );
};

export default Players;
