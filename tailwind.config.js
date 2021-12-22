module.exports = {
	important: true,
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			minWidth: {
				'1/2': '50%',
				xs: '10rem',
				sm: '14rem',
				md: '18rem',
				lg: '22rem',
				xl: '26rem',
				'2xl': '32rem',
				'6xl': '62rem',
			},
		},
	},
	plugins: [],
}
