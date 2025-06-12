import { Image, ImageProps } from 'react-native'
import { useTheme } from '../context/ThemeContext';
import DarkLogo from '../assets/img/logo_dark.png';
import LightLogo from '../assets/img/logo_light.png';

const Logo = ({ ...props } : ImageProps) => {
    const { theme } = useTheme();
    const logoSource = theme === 'dark' ? DarkLogo : LightLogo;
    return (
        <Image source={logoSource} {...props} />
    )
}

export default Logo