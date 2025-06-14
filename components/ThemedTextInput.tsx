import { View, Text, TextInput, TextInputProps } from 'react-native'
import React from 'react'

const ThemedTextInput = ({ className, ...props }: TextInputProps) => {
    return (
        <TextInput
            {...props}
            className={`bg-uiBackground text-text placeholder:text-text border border-uiBackground rounded-md p-5 ${className}`}
        />
    )
}

export default ThemedTextInput