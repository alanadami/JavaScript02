import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import { useState } from 'react'
import "./Login.css"

const Login = () => {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Envio");
        console.log(username, password);
    }

  return (
  <div className="container">
        <form onSubmit={handleSubmit} id='iform'>
            <h1>Acesse o sistema</h1>
            <div className='input-field'>
            <input id='iemail'
            type="email" 
            placeholder='Digite o seu e-mail'
            onChange={(e) => setUserName(e.target.value)}
            />
            <FaUser className='icon' />
            </div>
            <div className='input-field'>
            <input 
            type="password" 
            placeholder='Digite a sua senha'
            onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className='icon' />
            </div>
            <div className="recall-forget">
                <label>
                    <input type="checkbox"/>
                    Lembrar de mim
                </label>
                <a href="#">Esqueci a senha!</a>
            </div>

            <button>Entrar</button>

            <div className="signup-link">
                <p>
                    Não tem cadastro? <a href="#">Registrar</a>
                </p>
            </div>
        </form>
  </div>
  )
}

export default Login
