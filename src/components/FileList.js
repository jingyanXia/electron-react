import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types';

import useKeyPress from './../hooks/useKeyPress'


const FileList = ({ files, onFileClick, onSaveEdit, onFileDelete }) => {
    const [editStatus, setEditStatus] = useState(false)  //记录修改文件的id号
    const [value, setValue] = useState('')              //修改的文件名

    const enterPressed = useKeyPress(13)
    const escPressed = useKeyPress(27)

    const closeSearch = (event) => {
        event.preventDefault()
        setEditStatus(false)
        setValue('')
    }

    useEffect(() => {
        if (enterPressed && editStatus) {
            //find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。   find() 并没有改变数组的原始值。
            const editItem = files.find(file => file.id === editStatus)
            onSaveEdit(editItem.id, value)
            setEditStatus(false)
            setValue('')
        }
        if (escPressed && editStatus) {
            closeSearch()
        }
    })

    return (
        <ul className="list-group list-group-flush file-list">
            {
                files.map(file => (
                    <li
                        className="list-group-item bg-light d-flex align-items-center row"
                        key={file.id}
                    >
                        {
                            (editStatus !== file.id) &&
                            <>
                                <span className="col-2">
                                    <FontAwesomeIcon
                                        icon={faMarkdown}
                                        size="lg"
                                        title={'markdown'}

                                    />
                                </span>
                                <span className="col-8 c-link"
                                    onClick={() => { onFileClick(file.id) }}

                                >{file.title}</span>
                                <button
                                    type="button"
                                    className="icon-button col-1"
                                    onClick={(id) => {

                                        setEditStatus(file.id)
                                        setValue(file.title)
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faEdit}
                                        size="lg"
                                        title={'编辑'}

                                    />
                                </button>
                                <button
                                    type="button"
                                    className="icon-button col-1"
                                    onClick={() => { onFileDelete(file.id) }}
                                >
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        size="lg"
                                        title={'删除'}

                                    />
                                </button>

                            </>
                        }
                        {
                            (editStatus === file.id) &&
                            <>
                                <input
                                    className="form-control p-0 m-0 col"
                                    value={value}
                                    onChange={(text) => { setValue(text.target.value) }}
                                />

                                <button
                                    type="button"
                                    className="icon-button ms-2 col-1"

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

                    </li>
                ))
            }
        </ul>
    )
}
FileList.propTypes = {
    files: PropTypes.array,
    onFileClick: PropTypes.func,
    onFileDelete: PropTypes.func,
    onSaveEdit: PropTypes.func
}
export default FileList