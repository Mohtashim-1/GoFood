import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
let navigate = useNavigate()
const Login = () => {

  const [credentials, setcredentials] = useState({
    email: "",
    password: "",

  });
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:4000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      })

    })
    const json = await response.json()
    console.log(json)
    if (json.success) {
      alert('Good')
    }
    else if (!json.success) {
      alert('Enter Valid Credentials')
    }
    if (json.success) {
      navigate('/')
    }
  }

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }



  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>


        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} />
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <Link to="/createuser" className='btn btn-danger m-3'>I'm a new User</Link>
      </form>
    </div>
  )
}

export default Login