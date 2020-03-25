import React, {useState} from 'react';
import styled from 'styled-components';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import logo from './innova-logo.png';
import _PasswordInput from '../PasswordInput';
import validatePassword from './validatePassword';

const PasswordInput = styled(_PasswordInput)`
  height: 1.5rem;
`;

const Div = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Form = styled.div`
  border: solid 1px red;
  font-size: 1.5rem;
  min-width: 300px;
  height: 300px;
  text-align: center;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`;

const Logo = styled.img`
  width: 206px;
  height: 64px;
`;

const Ol = styled.ol`
  color: red;
  text-align: left;
  font-size: 14px;
`;

const SuccessMsg = styled.div`
  color: green;
`;

const PASSWORD_ID = "password";

function getDisabled({password=""}){
    return password === "";
}

function App() {
    const [password, setPassword] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMessages, setErrorMessages] = useState([]);
    const disabled = getDisabled({password});

    function onValidate(){
        validatePassword({password}).then(() => {
            setSuccessMsg("Passed!");
            setPassword("");
            setErrorMessages([]);
        }).catch(({response})=>{
            setSuccessMsg("");
            setPassword("");
            setErrorMessages(response.data.map(e=>e.msg));
        });
    }

    return (
        <Div>
            <Form>
                <div>
                    <Logo src={logo} alt="logo"/>
                    <div>
                        <label htmlFor={PASSWORD_ID}>Password:</label>
                        <PasswordInput
                            id={PASSWORD_ID}
                            value={password}
                            onChange={setPassword}
                            onEnter={()=>{
                                if(!disabled){
                                    onValidate();
                                }
                            }}
                        />
                    </div>
                    {successMsg!=="" && <SuccessMsg>{successMsg}</SuccessMsg>}
                    {
                        errorMessages.length!==0 && <Ol>
                            {errorMessages.map(e=>{
                                return <li>{e}</li>
                            })}
                        </Ol>
                    }
                    <div style={{marginTop: '2rem'}}>
                        <AwesomeButton disabled={disabled} type="primary" onPress={onValidate}>Validate</AwesomeButton>
                    </div>
                </div>
            </Form>
        </Div>
    );
}

export default App;
