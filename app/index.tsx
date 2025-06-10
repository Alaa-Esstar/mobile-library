import { Image, Text, View } from 'react-native'
import React from 'react'
import "./global.css"

import Logo from '../assets/img/logo_light.png';

const index = () => {
    return (
        <View className='flex-1 items-center justify-center'>
            <Image source={Logo} className='mx-20' />
            <Text className='font-bold text-lg'>Home</Text>
            <Text className='mt-10 mb-32'>Reading list app</Text>
        </View>
    )
}

export default index
