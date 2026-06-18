import React from 'react'

const Register = () => {
  return (
    <div>
      <h1>Register</h1>

      <form>
        <div>
            <label>Name</label>
            <br />
            <input type="text" placeholder="Enter name" />
        </div>

        <br />

        <div>
            <label>Email</label>
            <br />
            <input type="email" placeholder="Enter email" />
        </div>

        <br />

        <div>
            <label>Password</label>
            <br />
            <input type="password" placeholder="Enter password" />
        </div>

        <br />

        <button type="submit">Register</button>

      </form>
    </div>
  );
};

export default Register;
