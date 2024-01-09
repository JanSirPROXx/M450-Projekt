import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
//Screens
import Create from './screens/create/Create.js';
import Fillin from './screens/fillIn/Fillin.js';
import MeineUmfragen from './screens/meineUmfragen/MeineUmfragen.js';
import HomeScr from './screens/homeScreen/HomeScreen.js';

//current paths
let umfragenPaths = ['1234', '1222', '2323'];
let newUmfragenPaths = [];

async function getPaths() {
  //get data from backend //http://localhost:3003/api/ids
  const response = await axios.get('http://localhost:3003/api/ids');
  console.log(response.data);
  
  return response.data;
}



function App() {
  const [paths, setPaths] = useState([]);
  
  useEffect(() => {
    getPaths().then(data => {
      setPaths(data);
    });
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomeScr />} />
          <Route path="/create" element={<Create />} />
          <Route path="/meineumfragen" element={<MeineUmfragen />} />
          {paths.map((path) => {
            console.log(path, "Added path");
            return <Route path={'/'+path} key={path + 'route'} element={<Fillin key={path} pathNr={path} />} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
