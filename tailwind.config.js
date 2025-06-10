module.exports = {
  darkMode: 'class',
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',

        text: 'rgb(var(--color-text) / <alpha-value>)',
        title: 'rgb(var(--color-title) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        navBackground: 'rgb(var(--color-navBackground) / <alpha-value>)',
        iconColor: 'rgb(var(--color-iconColor) / <alpha-value>)',
        iconColorFocused: 'rgb(var(--color-iconColorFocused) / <alpha-value>)',
        uiBackground: 'rgb(var(--color-uiBackground) / <alpha-value>)',
      },
    },
  },
  plugins: [
    ({ addBase }) =>
      addBase({
        ':root': {
          '--color-primary': '104 73 167',
          '--color-warning': '204 71 90',

          '--color-text': '98 95 114',
          '--color-title': '32 30 43',
          '--color-background': '224 223 232',
          '--color-navBackground': '232 231 239',
          '--color-iconColor': '104 100 119',
          '--color-iconColorFocused': '32 30 43',
          '--color-uiBackground': '214 213 225',
        },
        '.dark': {
          '--color-text': '212 212 212',
          '--color-title': '255 255 255',
          '--color-background': '37 34 49',
          '--color-navBackground': '32 30 43',
          '--color-iconColor': '149 145 165',
          '--color-iconColorFocused': '255 255 255',
          '--color-uiBackground': '47 43 61',
        },
      }),
  ],
};
