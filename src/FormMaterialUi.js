import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Button } from '@material-ui/core';

const FormMaterialUi = () => {
  const [user, setUser] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const validate = () => {

    if (user.length < 4) {
      setErrorMsg("your username should have more than 4 charecter");
    } else {
      setErrorMsg("");
    }
  }

  const changeHandler = (e) => {
    setUser(e.target.value)
  };
  console.log(errorMsg);
  return (
    <>
      <form style={{ margin: 20 }}>
        
        <TextField
          error = {errorMsg ? true : false}
          id="standard-error-helper-text"
          label={errorMsg ? "Error" : "Username"}
          
          helperText={errorMsg ? errorMsg : "Username"}
          onChange={changeHandler}
          value={user}
        />
      </form>
      <Button variant="contained" color="primary" onClick={validate}>
        Check
      </Button>
    </>
  );

  // return (
  //   <form noValidate autoComplete="off">
  //     <div>
  //       <TextField error id="standard-error" label="Error" defaultValue="Hello World" />
  //       <TextField
  //         error
  //         id="standard-error-helper-text"
  //         label="Error"
  //         defaultValue="Hello World"
  //         helperText="Incorrect entry."
  //       />
  //     </div>
  //     <div>
  //       <TextField
  //         error
  //         id="filled-error"
  //         label="Error"
  //         defaultValue="Hello World"
  //         variant="filled"
  //       />
  //       <TextField
  //         error
  //         id="filled-error-helper-text"
  //         label="Error"
  //         defaultValue="Hello World"
  //         helperText="Incorrect entry."
  //         variant="filled"
  //       />
  //     </div>
  //     <div>
  //       <TextField
  //         error
  //         id="outlined-error"
  //         label="Error"
  //         defaultValue="Hello World"
  //         variant="outlined"
  //       />
  //       <TextField
  //         error
  //         id="outlined-error-helper-text"
  //         label="Error"
  //         defaultValue="Hello World"
  //         helperText="Incorrect entry."
  //         variant="outlined"
  //       />
  //     </div>
  //   </form>
  // );
};

export default FormMaterialUi;
