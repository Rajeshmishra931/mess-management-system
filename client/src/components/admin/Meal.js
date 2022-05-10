import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import HeaderAdmin from "./Header";
const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/api/meal")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.meal));
  }, []);
  console.log(blogs);
  return (
    <>
      <HeaderAdmin></HeaderAdmin>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Enrollment number</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Breakfast</TableCell>
              <TableCell align="right">Lunch</TableCell>
              <TableCell align="right">Dinner</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs &&
              blogs.map((blog, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {blog.enroll}
                  </TableCell>
                  <TableCell align="right">{blog.date}</TableCell>
                  <TableCell align="right">{blog.breakfast ? 1 : 0}</TableCell>
                  <TableCell align="right">{blog.lunch ? 1 : 0}</TableCell>
                  <TableCell align="right">{blog.dinner ? 1 : 0}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Blogs;
