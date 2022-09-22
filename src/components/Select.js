import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md'


export const Select = ({ defaultValue, options, onClick }) => {

    const [valueSelect, setValueSelect] = useState(defaultValue || '')
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
        setValueSelect(() => {
            const { value } = e.target.dataset
            let newValue = ''
            if (value == 'HV') {
                newValue = 'Student'
            } else if (value == 'GV') {
                newValue = 'Teacher'
            } else (newValue = value)
            return newValue
        })
        setIsOption(false)
    }

    const handleChangeSelect = (e) => {
        console.log(e.target.dataset.value)
    }

    return (
        <>
            <div className={`select ${activeClass}`} onClick={() => setIsOption(!isOption)} ref={sellectTag}>
                <MdArrowDropDown className='icon' />
                <div>{valueSelect}</div>
            </div>
            {isOption && <div className='option' onClick={onClick}>
                {options && options.map((item, index) => {
                    return <Option key={index} value={item.value} onClick={handleChangeValue} >{item.label}</Option>
                })}
            </div>}
        </>
    )
}
export const Option = ({ children, value, onClick }) => {
    return <div className='option__item' data-value={value} onClick={onClick} >{children}</div>
}
