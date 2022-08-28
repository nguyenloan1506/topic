import classNames from 'classnames/bind';
import styles from './Header.module.scss';

// tra ve 1 method/ function de dung class => viet duoc class name co dau -
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
