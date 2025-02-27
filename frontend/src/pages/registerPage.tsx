import { useState } from 'react'

function RegisterPage() {
    const [registerForm, setRegisterForm] = useState({
      username: "",
      email: "",
      password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target; // Get the name and value of the input field

    // Update the state with the new value for the specific field
    setRegisterForm((prev) => ({
        ...prev,
        [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch("http://localhost:3000/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({ 
                first_name: registerForm.username,
                email: registerForm.email,
                password: registerForm.password
            })
        })

        setRegisterForm({
            username: "",
            email: "",
            password: ""
        })
    } catch (error) {
        console.error(error);
    }
  }


  return (
    <>
      <div className="registerContainer">
      {registerForm.username}
        <h1>Register</h1>
                  <form onSubmit={handleSubmit}> 
                      <label htmlFor="username">Username: </label>
                      <input
                          name="username"
                          type="text"
                          value={registerForm.username}
                          onChange={handleChange}
                      />

                      <label htmlFor="email">Email: </label>
                      <input
                          name="email"
                          type="email"
                          value={registerForm.email}
                          onChange={handleChange}
                      />

                      <label htmlFor="password">Password: </label>
                      <input
                          name="password"
                          type="password"
                          value={registerForm.password}
                          onChange={handleChange}
                      />

                      <button type="submit">Submit</button>
                  </form>
          </div>
    </>
  )
}


export default RegisterPage;