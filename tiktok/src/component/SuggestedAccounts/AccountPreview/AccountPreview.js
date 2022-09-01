import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as ProperWrapper } from '~/component/Proper';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (  
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img 
                    className={cx('avatar')} 
                    src='https://nld.mediacdn.vn/291774122806476800/2021/7/2/2053835213504146864519152888693582231458181n-1625203527853810258524.jpg'
                />
                
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>lanngoc</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Ninh Duong Lan Ngoc</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.9M </strong>
                    <span className={cx('label')}>Followers </span>

                    <strong className={cx('value')}>8.9M </strong>
                    <span className={cx('label')}>Likes </span>
                </p>
            </div>

        </div>
    );
}

export default AccountPreview;