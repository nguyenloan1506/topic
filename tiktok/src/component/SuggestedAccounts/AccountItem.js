import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as ProperWrapper } from '~/component/Proper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <ProperWrapper>
                    <AccountPreview />
                </ProperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy 
                interactive 
                delay={[800, 0]} 
                offset={[-10, 0]}
                placement="bottom" 
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        src="https://media.viezone.vn/prod/2022/1/17/245977575_5117580221590635_3255014030729810652_n_81858caf39_5cfd3a67c4.jpg"
                        alt=""
                        className={cx('avatar')}
                    />

                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>lanngoc</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Ninh Duong Lan Ngoc</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

// AccountItem.propTypes = {

// }

export default AccountItem;
