// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/meal">Show Meals</Link>
//           </li>
//           <li>
//             <Link to="/students">Show Students</Link>
//           </li>
//           <li>
//             <Link to="/add">Add Student</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Header;

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
// import { useDispatch, useSelector } from "react-redux";
// import { authActions } from "../store";
const HeaderAdmin = () => {
  //   const dispatch = useDispatch();
  //   const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState();

  return (
    <AppBar position="sticky" sx={{ background: "black", color: "white" }}>
      <Toolbar>
        <Typography variant="h4" sx={{ fontFamily: "Oleo Script Swash Caps" }}>
          Admin Portal
        </Typography>

        <Box display="flex" marginLeft={"auto"}>
          <Tabs value={value} onChange={(e, val) => setValue(val)}>
            <Tab
              LinkComponent={Link}
              to="/admin/meal"
              label="Meals"
              sx={{ color: "white" }}
            ></Tab>
            <Tab
              LinkComponent={Link}
              to="/admin/students"
              label="Students"
              sx={{ color: "white" }}
            ></Tab>
            <Tab
              LinkComponent={Link}
              to="/admin/add"
              label="Add Student"
              sx={{ color: "white" }}
            ></Tab>
          </Tabs>
          {/* {!isLoggedIn && (
            <>
              <Button
                LinkComponent={Link}
                to="/auth"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Login | Signup
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Signup
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Button
              onClick={() => dispatch(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )} */}
        </Box>

        {/* <Box disply="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              <Button
                LinkComponent={Link}
                to="/auth"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Signup
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Button
              onClick={() => dispatch(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box> */}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderAdmin;
