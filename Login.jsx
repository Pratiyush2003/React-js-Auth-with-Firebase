import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { auth } from '../Firebase'
import { signInWithEmailAndPassword, GoogleAuthProvider , signInWithPopup} from 'firebase/auth'


const Login = () => {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const navigate = useNavigate('/')

    const handleSubmit = async (e) => {
            e.preventDefault();
            try{
                const user = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                )
                console.log(user)
                navigate('/home')
            }catch(error){
                console.log(error)
            }
    }

    const googleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider)
            navigate('/home')
        } catch (error) {
            
        }
    }
 
    return (
        <>
            <div className="container " style={{width : '60%'}}>
                <h1 className='text-center'>Firebase Authentication</h1>
                <div className="container my-5" >
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                            value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" 
                            value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-md"
                        onClick={handleSubmit}>Login</button>
                            <Link to={'/register'}><p className='pt-3'>Register New User</p></Link> 
                        </div>
                    </form>
                    <div className="container text-center btn-lg">
                        <button onClick={googleClick}
                         className='btn d-flex align-items-center justify-content-center'>
                            <div style={{width: '18%'}}>
                                <img src="https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png" 
                                alt="..." width={50} height={50}/>
                            </div>
                            <div className='mx-2'>
                               <h4>Login With Google</h4> 
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login
