import './App.css';

const th = {
  border: '1px solid #ccc',
  padding: '0.5rem 1rem',
  backgroundColor: '#f0f0f0',
};

const td = {
  border: '1px solid #ccc',
  padding: '0.5rem 1rem',
};

function App() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '2rem' }}>
      <h1>SWE@235</h1>
      <p>The Stock Workout Exchange</p>
      <p>Where <strong>tickers train</strong> and <strong>workouts win</strong>.</p>

      <div style={{ marginTop: '2rem' }}>
        <h2>Listing Tiers</h2>
        <table style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={th}>Market Cap</th>
              <th style={th}>Listing Fee</th>
              <th style={th}>Service Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>Up to $1B</td>
              <td style={td}>$2,350</td>
              <td style={td}>Basic Access</td>
            </tr>
            <tr>
              <td style={td}>$1B–$10B</td>
              <td style={td}>$10,000</td>
              <td style={td}>Standard</td>
            </tr>
            <tr>
              <td style={td}>$10B–$50B</td>
              <td style={td}>$23,500</td>
              <td style={td}>Premium</td>
            </tr>
            <tr>
              <td style={td}>$50B–$235B</td>
              <td style={td}>$50,000</td>
              <td style={td}>CUBai Corner</td>
            </tr>
            <tr>
              <td style={td}>Above $235B</td>
              <td style={td}>$75,000+</td>
              <td style={td}>Custom</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#888' }}>
        Brought to you by the Financial Fitness Machine™ · WELLTHai · Texas Trade’Em · Baby CUBai
      </p>
    </div>
  );
}

export default App;
