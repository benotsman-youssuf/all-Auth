export const  HomeHandler = (req, res)=>{
  if (!req.session.userid) {
    return res.redirect('/login');
  }

  res.setHeader('Content-Type', 'text/html')
  res.send(`
    <style>
      body {
        font-family: Arial, sans-serif;
      }
      h1 {
        font-size: 2em;
        text-align: center;
      }
      a {
        display: block;
        text-align: center;
        text-decoration: none;
        color: #4CAF50;
        padding: 10px;
        margin: 10px 0;
      }
    </style>
    <h1>Welcome back ${req.session.userid}</h1>
    <a href="/logout">Logout</a>
  `);

}