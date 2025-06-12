import { View, ViewProps } from 'react-native'

const Card = ({ ...props }: ViewProps) => {
    return (
        <View className='rounded-md bg-uiBackground p-5' {...props} />
    )
}

export default Card