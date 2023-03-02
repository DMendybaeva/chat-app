import { Link } from 'react-router-dom';
import { AuthButton } from './AuthButton';
import { PATHS } from '../const';

export const Navbar = () => (
  <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
    <div className="container">
      <Link className="navbar-brand" to={PATHS.home}>
        Hexlet Chat
      </Link>
      <AuthButton />
    </div>
  </nav>
);
