/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./*{js, jsx, tsx, ts}",
	],
	theme: {
		extend: {
			fontFamily: {
				borel: ["Borel", "cursive"],
			},
		},
	},
	plugins: [],
};
