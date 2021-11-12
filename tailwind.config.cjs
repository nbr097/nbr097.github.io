const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'montserrat': ['Montserrat', 'san-serif'],
				'bebas' : ['"Bebas Neue"', 'cursive']
			},
		}
	},

	plugins: []
};

module.exports = config;
