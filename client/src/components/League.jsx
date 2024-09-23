import React, { useEffect, useState } from 'react';

const League = () => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            leagues {
              leagueName
              season
            }
          }
        `,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const filteredLeagues = data.data.leagues.filter(
          (league) => league.season === 2022
        );
        setLeagues(filteredLeagues); 
      })
      .catch((error) => {
        console.error('Error fetching leagues:', error);
      });
  }, []); 

  return (
    <div>
      <h1>Leagues from 2022</h1>
      <ul>
        {leagues.map((league, index) => (
          <li key={index}>{league.leagueName}</li>
        ))}
      </ul>
    </div>
  );
};

export default League;
