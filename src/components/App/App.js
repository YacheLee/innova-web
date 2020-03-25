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
  width: 300px;
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

const PASSWORD_ID = "password";

function getDisabled({password=""}){
    return password === "";
}

function App() {
    const [password, setPassword] = useState('');
    const disabled = getDisabled({password});

    function onValidate(){
        validatePassword({password}).then(() => {
            window.alert("Passed!");
            setPassword("");
        }).catch(()=>{
            window.alert("NO!");
            setPassword("");
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
                    <div style={{marginTop: '2rem'}}>
                        <AwesomeButton disabled={disabled} type="primary" onPress={onValidate}>Validate</AwesomeButton>
                    </div>
                </div>
            </Form>
        </Div>
    );
}

export default App;
