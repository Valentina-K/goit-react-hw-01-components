import PropTypes from 'prop-types';
import { BsFillCircleFill } from 'react-icons/bs';
import css from './FriendListItem.module.css';
export const FriendListItem = ({avatar,name,isOnline}) => {
    return <li className={css.item}>
        <span className={isOnline ?
            css.isOnline :
            css.status}>
            <BsFillCircleFill size="40"/>
            </span>
            <img className={css.avatar} src={avatar} alt={name}  />
            <p className={css.name}>{name}</p>
        </li>
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar:PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}