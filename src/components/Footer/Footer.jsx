import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={'footer'}>
            <ul className={'footer__menu menu'}>
                <ul className={'menu'}>
                    <li className={'menu__item'}>
                        <Link to={'/'}>Main</Link>
                    </li>
                    <li className={'menu__item'}>
                        <Link to={'/goods'}>Goods</Link>
                    </li>
                    <li className={'menu__item'}>
                        <Link to={'/cart'}>Cart</Link>
                    </li>
                    <li className={'menu__item'}>
                        <Link to={'/account'}>Account / Log in</Link>
                    </li>
                </ul>
            </ul>
        </footer>
    );
};

export default Footer;
