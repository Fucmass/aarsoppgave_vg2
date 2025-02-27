import { useState } from 'react'


function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    alert(`Logging in with Email: ${email}`)
  }
 
  return (
    <>
      <div className="loginContainer">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
          type="password" 
          placeholder="Enter your password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  )
}

export default LoginPage;