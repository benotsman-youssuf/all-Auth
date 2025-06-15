export const loginHnadler = (req,res) =>{
  if (req.session.userid) {
    return res.redirect('/');
  }

  res.setHeader('Content-Type', 'text/html')
  res.send(`
      <style>
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 300px;
          margin: 0 auto;
        }
        input {
          margin-bottom: 10px;
          padding: 10px;
          font-size: 16px;
        }
        button {
          background-color: #4CAF50;
          color: white;
          padding: 14px 20px;
          margin: 8px 0;
          border: none;
          cursor: pointer;
        }
      </style>
      <h1>Login</h1>
      <form method="post" action="/process-login">
        <input type="text" name="username" placeholder="Username" /> <br>
        <input type="password" name="password" placeholder="Password" /> <br>
        <button type="submit">Login</button>
      </form>
    `);

}