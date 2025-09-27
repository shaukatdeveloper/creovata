import { DefaultSeoProps } from "next-seo"

export const defaultSEO: DefaultSeoProps = {
	titleTemplate: "%s | Creovata",
	openGraph: {
		type: "website",
		siteName: "Creovata",
		url: "https://www.creovata.com",
		images: [{ url: "https://www.creovata.com/og.jpg", width: 1200, height: 630, alt: "Creovata" }],
	},
	twitter: { cardType: "summary_large_image" },
	additionalMetaTags: [{ name: "theme-color", content: "#1f78d8" }],
}