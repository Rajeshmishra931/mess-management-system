import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
const Header = () => {
  const [value, setValue] = useState();

  return (
    <AppBar position="sticky" sx={{ background: "black", color: "white" }}>
      <Toolbar>
        <Typography variant="h4" sx={{ fontFamily: "Oleo Script Swash Caps" }}>
          Annapurna JP
        </Typography>

        <Box display="flex" marginLeft={"auto"}>
          <Tabs value={value} onChange={(e, val) => setValue(val)}>
            <Tab
              LinkComponent={Link}
              to="/admin"
              label="For Admin"
              sx={{ color: "white" }}
            ></Tab>
            <Tab
              LinkComponent={Link}
              to="/student"
              label="For Students"
              sx={{ color: "white" }}
            ></Tab>
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
