import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, TextField} from "@mui/material";
import {login} from "../../services/apiService.js";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ email, password });
            localStorage.setItem('token', response.token);
            navigate('/homepage');
        } catch (error) {
            console.error('Request failed:', error)
            alert('Login failed! Please check your credentials.');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h1 className="login-title">Login</h1>
                <TextField
                    margin="normal"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    fullWidth
                    className="login-input"
                />
                <TextField
                    margin="dense"
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    fullWidth
                    className="login-input"
                />
                <Button
                    margin="normal"
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="login-button"
                >
                    Login
                </Button>
            </form>
        </div>
    );
};

export default Login;
