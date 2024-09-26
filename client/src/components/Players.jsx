import React, { useEffect, useState } from "react";
import "../styles/Players.css"; 

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
            photo: player.photo 
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
    <div className="players-container">
      <h1>Players List</h1>
      <div className="cards-container">
        {playersArray.length > 0 ? (
          playersArray.map(player => (
            <div key={player.id} className="player-card">
              <img src={player.photo} alt={player.name} className="player-photo" />
              <h2>{player.name}</h2>
              <p>Position: {player.position}</p>
            </div>
          ))
        ) : (
          <p>No players found.</p>
        )}
      </div>
    </div>
  );
};

export default Players;
