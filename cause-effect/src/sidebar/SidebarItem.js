import React from "react";

function SidebarItem({item, animalClickFunc}) {
    return (
      <>
        <li className="nav-link">
          <span onClick={animalClickFunc}>{item.name} - {item.title}</span>
        </li>
      </>
    );
  }
  
  export default SidebarItem;
  