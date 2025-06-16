import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { useUser } from '../../context/UserContext'
import { ActivityIndicator } from 'react-native'

const AuthLayout = () => {
    const { user, isLoading } = useUser()

    if (isLoading) return <ActivityIndicator size="large" className="flex-1 bg-background text-text" />
    if (user) return <Redirect href="/profile" />

    return (
        <Stack screenOptions={{ headerShown: false, animation: 'none' }} />
    )
}

export default AuthLayout