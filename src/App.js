import logo from './logo.svg';
import './App.css';
import Table from "./components/Table";

const columns = [1, 2, 3, 4, 5];
const rows = [{ columns }, { columns }, { columns }, { columns }, { columns }];

function App() {
  console.log("data", rows);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} height="200" />
        <Table rows={rows} title={'My Table'} />
      </header>
    </div>
  );
}

export default App;
