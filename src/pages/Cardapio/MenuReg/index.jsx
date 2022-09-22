import { StyledMenuReg } from "./style";
import { Box, Tabs, Tab } from "@mui/material";
import React from 'react';

const MenuReg = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <StyledMenuReg>
        <section className="testeReg">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <div
      role="tabpanel"
      hidden={value !== 0}
      id={`simple-tabpanel-${0}`}
      aria-labelledby={`simple-tab-${0}`}
    ><p>oi</p>
        </div>
      <div
      role="tabpanel"
      hidden={value !== 1}
      id={`simple-tabpanel-${1}`}
      aria-labelledby={`simple-tab-${1}`}
    ><p>socorro</p>
        </div>
      <div
      role="tabpanel"
      hidden={value !== 2}
      id={`simple-tabpanel-${2}`}
      aria-labelledby={`simple-tab-${2}`}
    ><p>alo</p>
        </div>
    </section>
    </StyledMenuReg>
  );
};

export default MenuReg;

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }