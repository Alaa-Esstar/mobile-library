import { View, ViewProps } from 'react-native'

const Card = ({ className, ...props }: ViewProps) => {
    return (
        <View className={`rounded-md bg-uiBackground w-[90%] mx-[5%] my-3 p-3 pl-4  ${className}`} {...props} />
    )
}

export default Card