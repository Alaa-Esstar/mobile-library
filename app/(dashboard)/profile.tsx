import { Text } from 'react-native'
import SafeView from '../../components/SafeView'
import { useUser } from '../../context/UserContext'
import Button from '../../components/Button'

const Profile = () => {
  const { logout, user } = useUser()

  return (
    <SafeView className='items-center justify-center'>
      <Text className='text-title text-lg mb-8 font-bold'>{user?.email}</Text>
      <Text className='text-text mb-8'>Time to start reading some books...</Text>
      <Button onPress={logout}>
        <Text className='text-[#f2f2f2]'>Logout</Text>
      </Button>
    </SafeView>
  )
}

export default Profile