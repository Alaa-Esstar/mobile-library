import { View, ViewProps } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SafeView = ({ ...props }: ViewProps) => {
    const insets = useSafeAreaInsets();

    return (
        <View {...props} style={{ paddingTop: insets.top, paddingBottom: insets.bottom }} />
    )
}

export default SafeView