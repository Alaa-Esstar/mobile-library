import { View, ViewProps } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SafeView = ({ className, ...props }: ViewProps) => {
    const insets = useSafeAreaInsets();

    return (
        <View className={`bg-background flex-1 ${className}`} {...props} style={{ paddingTop: insets.top, paddingBottom: insets.bottom }} />
    )
}

export default SafeView