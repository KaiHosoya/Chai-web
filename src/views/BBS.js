import React from "react";
import Timeline from "../components/Timeline";

const BBS = ( {
  isOpen,
  search = false,
  genre = '',
  goods = ''
} ) => {
  return (
    <div>
      {isOpen &&
        <div>
          <Timeline 
            search={search}
            genre={genre}
            goods={goods}
          />
        </div>
      }
    </div>
  );
}

export default BBS;