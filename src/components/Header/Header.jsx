import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiAccountCircleLine } from 'react-icons/ri';
import { useState } from 'react';
import classNames from 'classnames';

import './header.scss';
import './../../utils/styles/menu.scss';

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    return (
        <header className={'header'}>
            <div className='header__mobile'>
                <button className={'header__button'} onClick={handleMenu}>
                    <GiHamburgerMenu className={'header__svg'} />
                </button>
                <div className='header__logo'>
                    <Link to={'/'}>Digital Shop</Link>
                </div>
                <Link to={'/cabinet'} className={'header__button'}>
                    <RiAccountCircleLine className={'header__svg'} />
                </Link>
            </div>
            <nav
                className={classNames('header__menu', {
                    'header__menu--close': !menuIsOpen,
                })}
            >
                <ul className={'menu'} onClick={handleMenu}>
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
            </nav>
        </header>
    );
};

export default Header;
