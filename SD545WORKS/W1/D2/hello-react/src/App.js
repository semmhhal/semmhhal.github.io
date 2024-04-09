
import './App.css';

function App() {
  const locations = ['Fairfield', 'Ottumwa', 'Iowa City'];
  const lis = locations.map(loc => <li>{loc}</li>);
  return (
    <ul>{lis}</ul>
  );
}

export default App;
