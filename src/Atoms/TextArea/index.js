import './style.scss'

import { useState } from "react"

const TextArea = ({ height, width, pattern = 'Your', regex, inputHelp, onChange }) => {
    const [text, setText] = useState('')
    const [isCorrectRegex, setIsCorrectRegex] = useState(true)

    const handleInputChange = (event) => {
        let text = event.target.value

        const re = regex || /.{1,}/

        if (re.test(text)) {
            setIsCorrectRegex(true)
            if (typeof onChange === 'function')
                onChange(text);
        } else {
            setIsCorrectRegex(false)
            onChange('');
        }
    }

    return (
        <>
            <div className='text-area' style={{ borderColor: isCorrectRegex ? '#777' : '#f02020', height: height, width: width }}>
                <div className='text-box__pattern'>{pattern}</div>
                <textarea onChange={handleInputChange}></textarea>
            </div>

            {!isCorrectRegex
                ? <label className='text-box__inputHelp'>{inputHelp}</label>
                : <></>}
        </>
    )
}

export default TextArea