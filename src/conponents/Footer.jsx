const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__copyright">© copyright {new Date().getFullYear()} - Selim Hammoumi</p>
      <a href="mailto:selimhammoumi@gmail.com" className="footer__contact">Contactez moi ✉️</a>
    </div>
  )
}
export default Footer;