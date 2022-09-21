import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md'

export default function Select({ children }) {

    const [valueSelect, setValueSelect] = useState('Choose')
    const [isOption, setIsOption] = useState(false)
    const activeClass = isOption ? 'active' : ''

    const sellectTag = useRef()

    useEffect(() => {

        const handleClick = e => {
            if (!sellectTag.current.contains(e.target)) {
                return setIsOption(false)
            }
        }

        window.addEventListener('click', handleClick)

        return () => window.removeEventListener('click', handleClick)

    }, [])

    const handleChangeValue = e => {
        setValueSelect(e.target.dataset.value)
        setIsOption(false)
    }
    return (
        <>
            <div className={`select ${activeClass}`} onClick={() => setIsOption(!isOption)} ref={sellectTag}>
                <MdArrowDropDown className='icon' />
                <div>{valueSelect}</div>
            </div>
            {isOption && <div className='option'>
                {/* <Option value='1' onClick={handleChangeValue}>1</Option>
                <Option value='2' onClick={handleChangeValue}>2</Option>
                <Option value='3' onClick={handleChangeValue}>3</Option> */}
                {children}
            </div>}
        </>
    )
}
export const Option = ({ children, value, onClick }) => {
    return <div className='option__item' data-value={value} onClick={onClick}>{children}</div>
}
