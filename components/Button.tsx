import { Pressable, PressableProps } from 'react-native'

const Button = ({ ...props }: PressableProps) => {
    return (
        <Pressable className='bg-primary p-4 rounded-md active:opacity-80' {...props} />
    )
}

export default Button