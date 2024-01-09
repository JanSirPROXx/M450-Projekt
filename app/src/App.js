import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
//Screens
import Home from './screens/home/Home.js';
import Create from './screens/create/Create.js';
import Fillin from './screens/fillIn/Fillin.js';
import MeineUmfragen from './screens/meineUmfragen/MeineUmfragen.js';


//current paths
let umfragenPaths = ['1234', '1222', '2323'];
let newUmfragenPaths = [];

async function getPaths() {
  const response = await fetch('http://localhost:3003/api/ids');
  const data = await response.json();
  console.log(data, "Response")
  data.map((id) => {
   
  });
  return await data;
  
}



function App() {
  [umfragenPaths, SetUmfragePaths] = useState([]);
  
  useEffect(() => {
    //fetch all paths from database
    //umfragenPaths = ['1234', '1222', '2323'];
    getPaths().then((data) => {
      data.map((id) => {
        newUmfragenPaths.push(id);
      }
      );
    });
    
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/meineumfragen" element={<MeineUmfragen />} />
          {newUmfragenPaths.map((path) => {
            console.log(path, "Added path");
            return <Route path={'/'+path} element={<Fillin pathNr={path} />} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
