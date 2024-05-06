import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© copyright {new Date().getFullYear()} - Selim-DM</p>
      <Link to="/about" className="footer__about">About me</Link>
      <a href="mailto:selimhammoumi@gmail.com" className="footer__contact">Contact me</a>
    </footer>
  )
}