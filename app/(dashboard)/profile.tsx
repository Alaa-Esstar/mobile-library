import { View, Text } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View className='bg-background flex-1 items-center justify-center'>
      <Text className='text-title text-lg mb-8 font-bold'>Your Email</Text>
      <Text className='text-text'>Time to start reading some books...</Text>
    </View>
  )
}

export default Profile