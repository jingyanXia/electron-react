import React, { } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BottomBtn = ({ text, colorClass, icon, onBtnClick }) => {

    return (
        <button
            type='button'
            className={`btn btn ${colorClass}`}
        >
            <FontAwesomeIcon
                icon={icon}
                size='lg'
            />
            {text}
        </button>
    )
}
BottomBtn.prototype = {
    text: PropTypes.string,
    colorClass: PropTypes.string,
    icon: PropTypes.element.isRequired,
    onBtnClick: PropTypes.fun
}
BottomBtn.defaultProps = {
    text: "新建"
}
export default BottomBtn