import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './profile/Profile';
import Sidebar from './sidebar/Sidebar';

function App() {
  const [ selectedDog, setSelectedDog ] = useState('AA')
  function handleAnimalClick (e) {
    setSelectedDog(e.target.innerHTML)
  }

  return (
    <>
    <header className="p-3 bg-dark text-white">Available dogs</header>
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar animalClickFunc={handleAnimalClick}></Sidebar>
        </div>
        <div className="col">
          <Profile selectedDog={selectedDog}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
