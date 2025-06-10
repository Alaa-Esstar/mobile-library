// themes.ts
import { vars } from 'nativewind';

export const themes = {
    light: vars({
        '--color-primary': '104 73 167',
        '--color-warning': '204 71 90',

        '--color-text': '98 95 114',
        '--color-title': '32 30 43',
        '--color-background': '224 223 232',
        '--color-navBackground': '232 231 239',
        '--color-iconColor': '104 100 119',
        '--color-iconColorFocused': '32 30 43',
        '--color-uiBackground': '214 213 225',
    }),
    dark: vars({
        '--color-primary': '104 73 167',
        '--color-warning': '204 71 90',

        '--color-text': '212 212 212',
        '--color-title': '255 255 255',
        '--color-background': '37 34 49',
        '--color-navBackground': '32 30 43',
        '--color-iconColor': '149 145 165',
        '--color-iconColorFocused': '255 255 255',
        '--color-uiBackground': '47 43 61',
    }),
};


export const Colors = {
    primary: "#6849a7",
    warning: "#cc475a",

    dark: {
        text: "#d4d4d4",
        title: "#fff",
        background: "#252231",
        navBackground: "#201e2b",
        iconColor: "#9591a5",
        iconColorFocused: "#fff",
        uiBackground: "#2f2b3d",
    },
    light: {
        text: "#625f72",
        title: "#201e2b",
        background: "#e0dfe8",
        navBackground: "#e8e7ef",
        iconColor: "#686477",
        iconColorFocused: "#201e2b",
        uiBackground: "#d6d5e1",
    },
}