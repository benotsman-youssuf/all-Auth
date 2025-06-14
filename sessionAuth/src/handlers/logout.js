export const LogoutHandler = (req, res)=>{
  req.session.destroy();
  res.redirect('/');
}