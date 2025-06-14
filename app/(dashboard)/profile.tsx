import { Text } from 'react-native'
import SafeView from '../../components/SafeView'

const Profile = () => {
  return (
    <SafeView className='bg-background flex-1'>
      <Text className='text-title text-lg mb-8 font-bold'>Your Email</Text>
      <Text className='text-text'>Time to start reading some books...</Text>
    </SafeView>
  )
}

export default Profile