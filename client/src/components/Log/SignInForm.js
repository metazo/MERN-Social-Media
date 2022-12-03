import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

      const handleLogin = (e) => {

      }
    return (
      <form action="" onSubmit={handleLogin} id="sign-up-form">
        <input type="submit" value="Se connecter"/>
      </form>
    );
};

export default SignInForm;