import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from "react-router-dom";

import Cast from "./Cast";
import { Tooltip } from "@mui/material";

const Timeline = (
  { search = false,
    genre = '',
    goods = ''  
  }
) => {
  const [casts, setCasts] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', {state: { goods: '', genre: '', search: false }})
  }

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        imageUrl: "https://material-ui.com/static/images/avatar/1.jpg",
        userName: "user1",
        content: "Hello World!",
        genre: 'Podcast', 
        goods: "Rebuild",
        detail: "Episode 1",
      },
      {
        id: 2,
        imageUrl: "https://material-ui.com/static/images/avatar/2.jpg",
        userName: "user2",
        content: "Hello World!",
        genre: 'Podcast',
        goods: "Chai",
        detail: "Episode 1",
      },
      {
        id: 3,
        imageUrl: "https://material-ui.com/static/images/avatar/3.jpg",
        userName: "user3",
        content: "Hello World!",
        genre: 'Podcast',
        goods: "Rebuild",
        detail: "Episode 1",
      },
    ];
    setCasts(mockData);
  }, []);

  return (
    <div>
      {search ? (
        <div>
          <Tooltip title="Back" placement="right">
            <KeyboardBackspaceIcon onClick={handleClick}/>
          </Tooltip>
          <div>
            {casts.filter(cast => cast.genre === genre && cast.goods === goods).map((cast) => (
              <Cast
                key={cast.id}
                imageUrl={cast.imageUrl}
                userName={cast.userName}
                content={cast.content}
                program={cast.goods}
                episode={cast.detail}
                genre={cast.genre}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          {casts.map((cast) => (
            <Cast
              key={cast.id}
              imageUrl={cast.imageUrl}
              userName={cast.userName}
              content={cast.content}
              program={cast.goods}
              episode={cast.detail}
              genre={cast.genre}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Timeline;