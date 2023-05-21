import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isLoggedInSelector } from '../store/authSlice'

function ProtectedRoute ({ redirectTo, children }) {
    const location = useLocation()
    const isLoggedIn = useSelector(isLoggedInSelector())
    if (!isLoggedIn) {
        return <Navigate to="/auth/login" state={{referer: redirectTo ? redirectTo : location}} />
    }
    return children
}

export default ProtectedRoute
