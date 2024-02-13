import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, SetUsername] = React.useState('');
    const [Password, SetPassword] = React.useState('');

    const {setUser} = useContext(UserContext);
    //yha hum context hook ka use kr rhe

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, Password});
        //yha hum bhej rhe data ko
    }
    



  return (
    <div>
    <h2>Login Here</h2>
    <input
    type="text"
    value={username} // kuch bhi value aayega to wo username state se aayega
    onChange={SetUsername} // kuch bhi agar change hua to wo Setusername se hoga
    placeholder='Enter Your Username'
    />
    {" "}


    <input
    type='text'
    value={Password}
    onChange={SetPassword}
    placeholder='Enter your Password'
    />

    <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}


export default Login