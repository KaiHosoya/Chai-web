import { Button, FormControl, Select, TextField, MenuItem, Modal, Box } from "@mui/material";
import React, { useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CastModel = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ genre, setGenre ] = useState('');
  const [ goods, setGoods ] = useState('');
  const [ comments, setComments ] = useState('');

  const changeGenre = (event) => {
    setGenre(event.target.value);
  }

  const changeGoods = (event) => {
    setGoods(event.target.value);
  }

  const openModel = () => {
    setIsModalOpen(true);
  }

  const closeModel = () => {
    setIsModalOpen(false);
  }

  const handleSubmit = () => {
    const data = {
      'comment': comments,
      'genre': genre,
      'goods': goods
    }
    console.log('submit')
    setIsModalOpen(false);
  }

  return (
    <div className="grid justify-items-center">
      <Button variant="contained" onClick={openModel} >Cast</Button>

      {isModalOpen &&
        <div>
          <Modal open={isModalOpen} onClose={closeModel}>
            <Box sx={style}>
              <TextField placeholder="What's on your mind?" onChange={(e) => {setComments(e.target.value)}} />
              <FormControl variant="standard">
                <Select value={genre} lavel="Genre" onChange={changeGenre} sx={{ minWidth: 100 }}>
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='Podcast'>Podcast</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard">
                <Select value={goods} lavel="Goods" onChange={changeGoods} sx={{ minWidth:100 }}>
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='Rebuild'>Rebuild</MenuItem>
                  <MenuItem value='Chai'>Chai</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" onClick={handleSubmit}>Post</Button>
            </Box>
          </Modal>
        </div>
      }
    </div>
  )
}

export default CastModel;