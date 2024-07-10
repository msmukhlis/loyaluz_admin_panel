import { useState } from "react";
import styles from "../LoginPage/LoginPage.module.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const token = localStorage.getItem("accesstoken");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://api.dezinfeksiyatashkent.uz/api/auth/signin', {
            method: 'POST',
            body: JSON.stringify({
                phone_number: number,
                password: password
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
             .then((response) => response.json())
             .then((data) => { 
                if(data?.success === true) {
                    toast.success("Successfully");
                    localStorage.setItem("accesstoken", data?.data?.tokens?.accessToken?.token);
                    navigate("/home");
                } else {
                    toast.error("Error");
                }
             })
             .catch((err) => {
                console.log(err.message);
             });
    };

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h2 className={styles.title}>Login</h2>
                <div className={styles.row}>
                    <label className={styles.label}>Phone number</label>
                    <input 
                        onChange={(e) => setNumber(e?.target?.value)} 
                        className={styles.input} 
                        type="text" 
                    />
                </div>
                <div className={styles.row}>
                    <label className={styles.label}>Password</label>
                    <input 
                        onChange={(e) => setPassword(e?.target?.value)} 
                        className={styles.input} 
                        type="password" 
                    />
                </div>
                <button onClick={handleSubmit} className={styles.btn}>
                    Log in
                </button>
            </form>
        </div>
    );
};

