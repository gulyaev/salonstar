import { useState, useCallback, useEffect } from 'react'

const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [userEmail, setUserEmail] = useState('asdf@gmail.com')
    const [userLogin, setUserLogin] = useState(null)
    const [ready, setReady] = useState(false)

    const login = useCallback((jwtToken, id, email, login) => {
        setToken(jwtToken)
        setUserId(id)
        setUserEmail(email)
        setUserLogin(login)
        //console.log('from auth.hook.js id ' + userId)
        //console.log('from auth.hook.js ' + userEmail)
        //console.log('from auth.hook.js ' + userLogin)
        localStorage.setItem(storageName, JSON.stringify({
            userId: id, 
            token: jwtToken, 
            userEmail: email, 
            userLogin: login
        }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login(data.token, data.userId, data.userEmail, data.userLogin)
        }
        setReady(true);
    }, [login])


    return { login, logout, token, userId, userEmail, userLogin, ready }
}