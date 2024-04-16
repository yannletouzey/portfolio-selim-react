const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__copyright">© copyright {new Date().getFullYear()} - Selim-DM</p>
      <a href="mailto:selimhammoumi@gmail.com" className="footer__contact">Contact me</a>
    </div>
  )
}
export default Footer;