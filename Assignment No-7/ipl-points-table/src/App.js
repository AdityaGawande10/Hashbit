import React, { useEffect, useState } from 'react';

function App() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then(response => response.json())
      .then(data => {
        // Sort by NRR (ascending)
        const sorted = [...data].sort((a, b) => parseFloat(a.NRR) - parseFloat(b.NRR));
        setTeams(sorted);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1>IPL 2022 Points Table</h1>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'center' }}>
          <thead style={{ backgroundColor: '#f2f2f2' }}>
            <tr>
              <th>Team</th>
              <th>Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Tied</th>
              <th>No Result</th>
              <th>Points</th>
              <th>NRR</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index}>
                <td>{team.Team}</td>
                <td>{team.Matches}</td>
                <td>{team.Won}</td>
                <td>{team.Lost}</td>
                <td>{team.Tied}</td>
                <td>{team.No_Result}</td>
                <td>{team.Points}</td>
                <td>{team.NRR}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
