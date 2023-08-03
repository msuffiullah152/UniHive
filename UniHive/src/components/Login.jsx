import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";

function Login() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    // Here you can handle the login logic with the email and password
    console.log("Email:", email);
    console.log("Password:", password);
    handleClose(); // Close the modal after login logic
  };

  return (
    <>
      <Button
        variant="outlined"
        sx={{
          my: 10,
          borderWidth: "2px",
          marginRight: 10,
          color: "#FBCB1C",
          borderColor: "#FBCB1C",
          "&:hover": {
            color: "white",
            borderColor: "#FBCB1C",
            // backgroundColor: "gray",
            borderWidth: "2px",
          },
        }}
        onClick={handleOpen}
      >
        Log in
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xs"
        sx={{ "& .MuiDialog-paper": { backgroundColor: "#1B1D21" } }}
      >
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          {/* Add your input fields here */}
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="outlined"
            sx={{
              my: 5,
              borderWidth: "2px",
              color: "white",
              borderColor: "gray",
              borderWidth: "1px",
              "&:hover": {
                color: "black",
                borderColor: "black",
                backgroundColor: "#FBCB1C",
                borderWidth: "1px",
              },
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Login;

