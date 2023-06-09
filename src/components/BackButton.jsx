import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/solid'

const BackButton = ({ label, children }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(-1)
    }
    return (
        <button
            className="group flex font-semibold text-sm leading-6 text-slate-600 hover:text-slate-400 trans transition-all duration-200"
            onClick={handleClick}
        >
            <ChevronLeftIcon className='h-6' />
            {children || label}
        </button>
    )
}

export default BackButton
