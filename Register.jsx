import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { auth } from '../Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Register = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const navigate = useNavigate('/')

    const handleSubmit = async (e) => {
            e.preventDefault();
            try{
                const user = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                )
                console.log(user)
                navigate('/')
            }catch(error){
                console.log(error)
            }
    }
  return (
    <div>
          <div className="container " style={{width : '60%'}}>
                <h1 className='text-center'>Firebase Authentication</h1>
                <div className="container my-5" >
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" 
                            aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-md" onClick={handleSubmit}>Register</button>
                        </div>
                    </form>

                </div>
            </div>
    </div>
  )
}

export default Register
