import React, { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { AppBar, Box, CssBaseline, Divider, Drawer, List, Toolbar, Typography, ListItem, ListItemIcon, ListItemText, Button } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from '@mui/icons-material/Settings';
import FilterIcon from '@mui/icons-material/Filter';
import NewspaperIcon from '@mui/icons-material/Newspaper';
// import Diversity1Icon from '@mui/icons-material/Diversity1';

import BBS from "./BBS";
import News from "./News";
import CastModel from "../components/CastModel";

const drawerWidth = 240;

const Home = () => {
  const [ home, setHome ] = useState(true);
  const [ news, setNews ] = useState(false);
  const [ relationship, setRelationship ] = useState(false);
  const [ profile, setProfile ] = useState(false);
  const [ setting, setSetting ] = useState(false);
  const [ search, setSearch ] = useState(false);
  const [ genre, setGenre ] = useState('');
  const [ goods, setGoods ] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;


  const showHome = () => {
    setHome(true);
    setNews(false);
    setRelationship(false);
    setProfile(false);
    setSetting(false);
  }

  const showNews = () => {
    setHome(false);
    setNews(true);
    setRelationship(false);
    setProfile(false);
    setSetting(false);
  }

  const showRelationship = () => {
    setHome(false);
    setNews(false);
    setRelationship(true);
    setProfile(false);
    setSetting(false);
  }

  const showProfile = () => {
    setHome(false);
    setNews(false);
    setRelationship(false);
    setProfile(true);
    setSetting(false);
  }

  const showSetting = () => {
    setHome(false);
    setNews(false);
    setRelationship(false);
    setProfile(false);
    setSetting(true);
  }

  useEffect(() => {
    if (state) {
      setGenre(state.genre);
      setGoods(state.goods);
      console.log('state', state)
      setSearch(state.search)
    }
  }
  , [state]);

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        <Toolbar>
          <Typography variant="h6" noWrap style={{ flexGrow: 1 }}>
            Chai
          </Typography>
          <Button color="inherit" onClick={() => (navigate('/signin'))}>Sign In</Button>
        </Toolbar>
      </AppBar>
      <Drawer sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' } }} variant="permanent" anchor="left">
        <Toolbar />
        <Divider />
        <List>
          <ListItem key={"Home"} onClick={() => showHome()}>
            <ListItemIcon><FilterIcon /></ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
          <ListItem key={"News"} onClick={() => showNews()}>
            <ListItemIcon><NewspaperIcon /></ListItemIcon>
            <ListItemText primary={"News"} />
          </ListItem>
          <ListItem key={"Relationship"} onClick={() => showRelationship()}>
            <ListItemIcon><AccountBoxIcon /></ListItemIcon>
            <ListItemText primary={"Relationship"} />
          </ListItem>

        </List>
        <Divider />  
        <List>
          {['Profile', 'Setting'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <AccountBoxIcon /> : <SettingsIcon /> }</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        { home &&
          <CastModel />
        }
      </Drawer>
      <Box component={"main"} sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        <BBS 
          isOpen={home}
          search={search}
          genre={genre}
          goods={goods}
        />
        <News isOpen={news} />
      </Box>
    </Box>
  )
}

export default Home;