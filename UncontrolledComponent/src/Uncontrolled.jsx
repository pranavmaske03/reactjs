import React from 'react'
import { useRef } from 'react'


function Uncontrolled() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("Submitted: ",{ email, password});
    alert(`Login Attempt: ${email}`);
};

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Uncontrolled Login Form</h2>
                <div>
                    <label>
                        Email:
                    </label>
                    <input 
                        type="email" 
                        ref={emailRef}
                        defaultValue={"user@example.com"}
                    />
                </div>
                <div>
                    <label>
                        Password:
                    </label>
                    <input 
                        type="text" 
                        ref={passwordRef}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Uncontrolled
