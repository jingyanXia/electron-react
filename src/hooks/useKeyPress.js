import { useEffect, useState } from 'react'

const useKeyPress = (targetKeyCode) => {
    const [keyPressed, setKeyPressed] = useState(false)
    const keyDownHander = ({ keyCode }) => {
        if (keyCode === targetKeyCode) {
            console.log('按下');
            setKeyPressed(true)
        }

    }

    const keyUpHander = ({ keyCode }) => {
        if (keyCode === targetKeyCode) {
            console.log('松开');
            setKeyPressed(false)
        }

    }
    useEffect(() => {
        document.addEventListener('keydown', keyDownHander)
        document.addEventListener('keyup', keyUpHander)
        return () => {
            document.removeEventListener('keyup', keyUpHander)
            document.removeEventListener('keydown', keyDownHander)
        }
    }, [])

    return keyPressed
}

export default useKeyPress