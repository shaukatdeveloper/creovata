"use client"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

const nav = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{
		label: "Services",
		href: "/services",
		children: [
			{ label: "Web Development", href: "/services/web-development" },
			{ label: "Mobile Apps", href: "/services/mobile-apps" },
			{ label: "AI & Automation", href: "/services/ai-automation" },
		],
	},
	{ label: "Internships", href: "/internships" },
	{ label: "Portfolio", href: "/portfolio" },
	{ label: "B2B Meetings", href: "/b2b-meetings" },
	{ label: "Blog", href: "/blog" },
	{ label: "Contact", href: "/contact" },
]

export function Navbar() {
	const [open, setOpen] = useState(false)
	return (
		<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
			<div className="container flex h-16 items-center justify-between">
				<Link href="/" className="font-bold text-brand-700">Creovata</Link>
				<nav className="hidden md:flex gap-6">
					{nav.map((item) =>
						item.children ? (
							<div key={item.label} className="relative group">
								<Link href={item.href} className="hover:text-brand-700">{item.label}</Link>
								<motion.div initial={{ opacity: 0, y: -6 }} whileHover={{ opacity: 1, y: 0 }}
									className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-2">
									{item.children.map((c) => (
										<Link key={c.href} href={c.href} className="block px-3 py-2 rounded hover:bg-brand-50">{c.label}</Link>
									))}
								</motion.div>
							</div>
						) : (
							<Link key={item.href} href={item.href} className="hover:text-brand-700">{item.label}</Link>
						)
					)}
				</nav>
				<button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
			</div>
			{open && (
				<div className="md:hidden border-t bg-white">
					<div className="container py-3 grid gap-2">
						{nav.flatMap((i) => i.children ? [i, ...i.children] : [i]).map((i) => (
							<Link key={i.href} href={i.href} className="py-2">{i.label}</Link>
						))}
					</div>
				</div>
			)}
		</header>
	)
}
