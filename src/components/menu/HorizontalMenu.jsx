import React from "react";

function HorizontalMenu(itemMemu) {
  return (
    <ul className="menu menu-horizontal px-1">
          <li className="text-14 font-semibold">
            <a href={itemMemu.url}>{itemMemu.name}</a>
          </li>
       
        </ul>
  );
}

export default HorizontalMenu;
