import { Avatar, Card, Chip, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Cast = ({imageUrl, useName, content, program, episode, genre}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log('navigate')
    navigate('/', {state: { goods: program, genre: genre, search: true }})
  }

  return (
    <Card>
      <Avatar variant="rounded" src={imageUrl} />
      <Typography variant="h5">{useName}</Typography>
      <Typography variant="h6">{content}</Typography>
      <Chip label={program} onClick={handleClick}/>
      <Chip label={episode} variant="outlined" />
    </Card>
  )
}

export default Cast;