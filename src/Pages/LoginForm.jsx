import React, { useState } from "react";
import { Form, Button,FormGroup,Alert } from "reactstrap";
import Input_ctrl from "../Reusable_Component/Input_ctrl";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
const LoginForm = () => {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [age, setage] = useState();
  const [email, setemail] = useState();
  const [successID, setsuccessID] = useState(0);
  const [verifyAddedUser, setverifyAddedUser] = useState(0);
  const handleChange = (name, inputValue) => {
    switch (name) {
      case 'firstName': {
        setfirstName( inputValue );
        break;
      }
      case 'lastName': {
        setlastName( inputValue );
        break;
      }
      case 'age': {
        setage(inputValue);
        break;
      }
      case 'email': {
        setemail(inputValue );
        break;
      }
    }
  };

  const SubmitEvent = () => {
    const body = { ...firstName, ...lastName, ...email, ...age };
    const url = 'https://mockend.com/AdamClements/coding-test/users';
    axios.post(url, body).then((res) => {
      console.log(res);
      setsuccessID(res?.data?.id);
      axios.get(`https://mockend.com/AdamClements/coding-test/users/${firstName}`).then((res) => {
debugger;
      });
    }).catch((error) => { 
      console.log(error);
    });
  }

  return (
    <div>
    <Form style={{padding:'5rem',marginBottom:'9px'}}>
      <FormGroup row>
      <Input_ctrl
        type="text"
        name="firstName"
        value={firstName?.inputValue}
        placeholder="Enter First Name"
        label="First Name"
        onChange={handleChange}
      />
      <Input_ctrl
        type="text"
        name="lastName"
        value={lastName?.inputValue}
        placeholder="Enter Last Name"
        label="Last Name"
        onChange={handleChange}
      />
      <Input_ctrl
        type="number"
        name="ge"
        value={age?.inputValue}
        placeholder="Enter age"
        label="Age"
        onChange={handleChange}
      />
      <Input_ctrl
        type="email"
        name="email"
        value={email?.inputValue}
        placeholder="Enter email"
        label="Email Id"
        onChange={handleChange}
      />
       </FormGroup>
      <Button color="primary" onClick={()=>SubmitEvent()}>Add</Button>{" "}
     {successID>0? <div className="successMessage" >
  <Alert>
    <h4 className="alert-heading">
      Data has been saved with id= {successID  }
    </h4>
    <p>
      Aww yeah, Welcome {firstName} {lastName}. you successfully registerd.
    </p>
  </Alert>
</div>:"" }
    </Form>
    </div>
  );
};

export default LoginForm;