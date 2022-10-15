const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
        "bridge-bg": "var(--bridge-bg)",
        "bridge-sidebar": "var(--bridge-sidebar)", 
        "bridge-text": "var(--bridge-text)", 
			},
			screens: {
				'xs': '540px', // min-width
			},
		},
	},

	plugins: []
};

module.exports = config;
