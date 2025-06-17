import { Pressable, PressableProps } from 'react-native'

const Button = ({ className, ...props }: PressableProps) => {
    return (
        <Pressable className={`bg-primary p-4 rounded-md active:opacity-80 disabled:opacity-50 ${className}`} {...props} />
    )
}

export default Button