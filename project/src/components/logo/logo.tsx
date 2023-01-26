import {Link} from 'react-router-dom';
import logoImage from '../../img/logo.svg';

function Logo(): JSX.Element {
  return (
    <Link className="header__logo-link header__logo-link--active" to="/">
      <img className="header__logo" src={logoImage} alt="6 cities logo" width="81" height="41"/>
    </Link>
  );
}

export default Logo;
