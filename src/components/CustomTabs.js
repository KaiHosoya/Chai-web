import React, { useState } from "react";
import { Paper, Tabs, Tab, Box } from "@mui/material";

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1
//   }
// })

const TabPanel = (props) => {
  const { children, value, index, ...other} = props

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other} >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  )
}

const CustomTabs = (props) => {
  // const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <Paper>
      {/* <Paper className={classes.root}> */}
        <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
          {props.labels.map(label => <Tab label={label}></Tab>)}
        </Tabs>
      </Paper>

      {props.children.map((child, index) =>
        <TabPanel value={value} index={index}>{child}</TabPanel>)
      }
    </div>
  )
}

export default CustomTabs