import { useState } from "react";
import './login.css';

function Login({setLogin,logined}) {
   const [inputs, setInputs] = useState({
    username: '',
    password: '',}
   );
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(prevalue => ({...prevalue, [name]: value}));
  };
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    });
     if(response.status == 200) {
      setLogin(true);
      const data = await response.json()
      localStorage.setItem('token', data.token);
    }
     else setLogin(false);
     } catch (error) {
    console.error(error);
    setLogin(false);
  }
}
  

  return (
    <>
    <h1>LOGIN FORM</h1>
    <form onSubmit={handleSubmit} className="login-form">
      <label>Username:
      <input 
        type="text" 
        name="username" 
        value={inputs.username} 
        onChange={handleChange}
        placeholder="Nhập username"
      />
      </label>
      <label>Password:
        <input 
          type={showPassword ? "text" : "password"}
          name="password" 
          value={inputs.password} 
          onChange={handleChange}
          placeholder="Nhập Password"
        />
        <button 
              type="button"
              id="show-password"
              onClick={toggleShowPassword}
            >{showPassword ? "Hide password" : "Show password"}</button>
        </label>
        <button type='submit' className="button-submit">Enter</button>
    </form>
    {logined === true ? <p className='login-success'>Login successful</p> : logined === false ? <p className='login-failed'>Incorrect Username or password</p> : null}
    
    </>
  )
}

export default Login;