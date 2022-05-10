import React, { useState } from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HeaderAdmin from "./Header";
const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
const AddStudent = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    enroll: "",
    name: "",
    year: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/students/add", {
        name: inputs.name,
        enroll: inputs.enroll,
        year: inputs.year,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    // console.log(data);
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/meal"));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <HeaderAdmin></HeaderAdmin>
        <Box
          border={3}
          borderColor="black"
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={"auto"}
          marginTop={3}
          display="flex"
          flexDirection={"column"}
          width={"80%"}
        >
          <Typography
            fontWeight={"bold"}
            padding={3}
            color="grey"
            varient="h2"
            textAlign={"center"}
          >
            Add Student Details
          </Typography>
          <InputLabel sx={labelStyles}>Enroll</InputLabel>
          <TextField
            name="enroll"
            value={inputs.enroll}
            onChange={handleChange}
            margin="auto"
            varient="outlined"
          ></TextField>
          <InputLabel sx={labelStyles}>Name</InputLabel>
          <TextField
            name="name"
            value={inputs.name}
            onChange={handleChange}
            margin="auto"
            varient="outlined"
          ></TextField>
          <InputLabel sx={labelStyles}>Year</InputLabel>
          <TextField
            name="year"
            value={inputs.year}
            onChange={handleChange}
            margin="auto"
            varient="outlined"
          ></TextField>
          <Button
            sx={{ mt: 2, borderRadius: 4 }}
            variant="contained"
            color="warning"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddStudent;
