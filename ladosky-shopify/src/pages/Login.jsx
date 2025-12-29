import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "../styles/auth.css"

function Login(){

    const [email, setEmail] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault(e);

        login(email);
        navigate('/cart');
    }

    return(

        <div className="login">
            <form onSubmit={handleSubmit} className="login__form">
            <h2>Login</h2>

            <input 
                type="text"
                placeholder="Enter Your E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>

            <button type="submit">Login</button>

            <p>Admin Email: oladojabasit29@gmail.com</p>          
            </form>
        </div>
        
    )
}

export default Login