import React, { useState } from "react";
import SidebarItem from "./SidebarItem";


function Sidebar({animalClickFunc}) {
    const dogs = [
        {
          name: 'Chanel',
          title: 'barking rat'
        },
        {
          name: 'Jubilee',
          title: 'floofy protector'
        }
      ]

    return (
      <>
      <ul className="nav nav-pills flex-column">
        {dogs.map((dog) => {
            return (
              <SidebarItem
                key={dog.name}
                item={dog}
                animalClickFunc={animalClickFunc}
              />
            )
          })}
      </ul>
      </>
    );
  }
  
  export default Sidebar;
  