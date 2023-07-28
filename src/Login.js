import React from 'react'


const Login=()=>{
	return(
	<div className='App-header'>
        <div className="box">
        <h1><u>Login Page</u></h1>
            <br/>
            <h3>Email</h3>
            <br/>
            <input type='email' placeholder='Enter your email address' />
            <br/>
            <br/>
            <h3>Password</h3>
            <br/>
            <input type='password' placeholder='Enter your password' />
            <br/>
            <br/>
            <button className="btn btn-primary">Submit</button>
        </div>
	</div>
	)
}

export default Login  