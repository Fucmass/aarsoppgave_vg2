import { useState } from 'react'

function RegisterPage() {
    const [registerForm, setRegisterForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false); // Track loading state
    const [errorMessage, setErrorMessage] = useState(""); // Store errors

    const handleChange = (e) => {
        const { name, value } = e.target;

        setRegisterForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        try {
            const response = await fetch("http://localhost:3001/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: registerForm.username,
                    email: registerForm.email,
                    password: registerForm.password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Registration failed");
            }

            setRegisterForm({
                username: "",
                email: "",
                password: "",
            });

            alert("Registration successful!");
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="registerContainer">
            <h1>Register</h1>

            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input
                    name="username"
                    type="text"
                    value={registerForm.username}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email: </label>
                <input
                    name="email"
                    type="email"
                    value={registerForm.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password">Password: </label>
                <input
                    name="password"
                    type="password"
                    value={registerForm.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}

export default RegisterPage;
