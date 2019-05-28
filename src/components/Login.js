import React from 'react'
import { connect } from 'react-redux'
import { login } from '../store/user'
import { Link } from 'react-router-dom'
import {browserHistory} from "react-router";

const usernameRef = React.createRef()
const passwordRef = React.createRef()

const submitForm = (e, login) => {
    e.preventDefault()
    console.log(usernameRef.current.value)
    console.log(passwordRef.current.value)

    const username = usernameRef.current.value
    const password = passwordRef.current.value

    if (username === 'hactiv8' && password === '1234') {
        login(username)
        window.location = "/logged";

    } else {
        alert('username dan password salah')
    }
}

export const Login = (props) => {
    return (
        <div className='container mt-2'>
            <div className='row'>
                <div className='col-4'>
                
                </div>
                <div className='col-4'>
                    <div className='well'>
                        <form onSubmit={e => submitForm(e, props.login)}>
                            <div className='form-group'>
                                <input type='text' 
                                    className='form-control' 
                                    name='username' 
                                    placeholder='username'
                                    ref={usernameRef} />
                            </div>
                            <div className='form-group'>
                                <input 
                                    type='password' 
                                    className='form-control' 
                                    name='password' 
                                    placeholder='password'
                                    ref={passwordRef} />
                            </div>
                            <div className="form-group">
                                </div>
                            <div className='form-group'>
                                Hint: hactiv8 - 1234<br/>
                                <button className="btn btn-info" type='submit'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-4'>
                
                </div>

            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(login())
    }
}
// export default Login;
export default connect(null, mapDispatchToProps)(Login)