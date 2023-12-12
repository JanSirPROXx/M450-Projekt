import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Screens
import Home from './screens/home/Home.js';
import Create from './screens/create/Create.js';
import Fillin from './screens/fillIn/Fillin.js';
import MeineUmfragen from './screens/meineUmfragen/MeineUmfragen.js';


//current paths
let umfragenPaths = ['1234', '1222', '2323'];



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/meineumfragen" element={<MeineUmfragen />} />
          {umfragenPaths.map((path) => {
            return <Route path={'/'+path} element={<Fillin pathNr={path} />} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
