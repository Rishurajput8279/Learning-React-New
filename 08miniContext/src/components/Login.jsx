
import React ,{ useState , useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const handleSubmit =(e) =>{
        e.preventDefault()
        setUser({username, password});

    }
    const [username,setUsername]= useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)


  return (
    <>
        <div>Login</div>
        <input type="text" 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder='userName'/>
        {"   "}
        <input type="text" 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>

    </>
  )
}

export default Login