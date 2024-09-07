import React from "react";

function Profile({selectedDog}) {
    console.log(selectedDog)
    return (
      <>
        <div>
           {selectedDog} 
        </div>
      </>
    );
  }
  
  export default Profile;
  