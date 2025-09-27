import type { Config } from "tailwindcss"

export default {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		container: { center: true, padding: "1rem" },
		extend: {
			colors: {
				brand: {
					50: "#f0f7ff",
					100: "#e1effe",
					200: "#c3defd",
					300: "#a6cdfa",
					400: "#78b2f7",
					500: "#3a91f2",
					600: "#1f78d8",
					700: "#175ea9",
					800: "#123f73",
					900: "#0c2a4d",
				},
			},
		},
	},
	plugins: [],
} satisfies Config