import { useState } from "react";

function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Métodos
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        alert("¡Bienvenid@!")
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
    };

    return (
        <form onSubmit={handleFormSubmit} >
            <h2>Iniciar sesión</h2>
            <label>
                Correo
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <label>
                Contraseña
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>

            <button type="submit">Iniciar sesión</button>
        </form>
    );
}

export default Login;