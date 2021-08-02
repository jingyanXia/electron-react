import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

import useKeyPress from './../hooks/useKeyPress'

const FileSerch = ({ title, onFileSearch }) => {

    const [inputActive, setInputActive] = useState(false);
    const [value, setValue] = useState('')

    //回车与esc按键
    const enterPressed = useKeyPress(13)
    const escPressed = useKeyPress(27)
    let node = useRef(null)
    const closeSearch = () => {
        setInputActive(false)
        setValue('')
    }

    useEffect(() => {
        console.log(enterPressed, '---', inputActive);
        if (enterPressed && inputActive) {

            onFileSearch(value)
        }
        if (escPressed && inputActive) {
            closeSearch()
        }

        // const handleInputEvent = (event) => {
        //     console.log(event);

        //     const { keyCode } = event
        //     if (keyCode === 13 && inputActive) {
        //         onFileSearch(value)
        //     }
        //     if (keyCode === 27 && inputActive) {
        //         closeSearch(event)
        //     }
        // }
        // document.addEventListener('keyup', handleInputEvent)
        // return () => {
        //     document.removeEventListener('keyup', handleInputEvent)
        // }

    })

    useEffect(() => {
        console.log(node);
        if (inputActive) {
            node.current.focus()
        }
    }, [inputActive])

    return (
        <div className="alert alert-primary container d-flex justify-content-between align-items-center">
            {!inputActive &&
                <>
                    <span>{title}</span>
                    <button
                        type="button"
                        className="icon-button"
                        onClick={() => { setInputActive(true) }}
                    >
                        <FontAwesomeIcon
                            icon={faSearch}
                            size="lg"
                            title={'搜索'}

                        />
                    </button>
                </>
            }
            {inputActive &&
                <>
                    <input
                        className="form-control p-0 m-0 "
                        ref={node}
                        value={value}
                        onChange={(text) => { setValue(text.target.value) }}
                    />

                    <button
                        type="button"
                        className="icon-button ms-2"

                        onClick={closeSearch}
                    >
                        <FontAwesomeIcon
                            icon={faTimes}
                            size="lg"
                            title="关闭"


                        />
                    </button>


                </>

            }
        </div>

    )
}

FileSerch.propTypes = {
    title: PropTypes.string,
    onFileSearch: PropTypes.func.isRequired
}
FileSerch.defaultProps = {
    title: '我的云文档'
}

export default FileSerch