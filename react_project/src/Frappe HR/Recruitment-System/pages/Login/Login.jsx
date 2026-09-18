import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginHR } from "../../apis/loginApi";
import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const res = await loginHR(form);

            if (res.data.success) {

                localStorage.setItem("isLoggedIn", "true");

                localStorage.setItem(
                    "hrUser",
                    JSON.stringify(res.data.user)
                );

                alert("Login Successful");

                navigate("/dashboard");

            }

        }

        catch (error) {

            alert(
                error.response?.data?.message ||
                "Login Failed"
            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="login-container">

            <form
                className="login-box"
                onSubmit={handleSubmit}
            >

                <h2>HR Login</h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Logging..." : "Login"}
                </button>

            </form>

        </div>

    );

}

export default Login;