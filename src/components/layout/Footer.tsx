 
import Link from "next/link"

export function Footer() {
	return (
		<footer className="border-t bg-white">
			<div className="container py-10 grid gap-6 md:grid-cols-4">
				<div>
					<div className="font-bold text-brand-800">Creovata</div>
					<p className="text-sm text-gray-600 mt-2">Innovate. Build. Grow.</p>
				</div>
				<div>
					<div className="font-semibold mb-2">Company</div>
					<ul className="space-y-2">
						<li><Link href="/about">About</Link></li>
						<li><Link href="/blog">Blog</Link></li>
					</ul>
				</div>
				<div>
					<div className="font-semibold mb-2">Services</div>
					<ul className="space-y-2">
						<li><Link href="/services">All Services</Link></li>
						<li><Link href="/b2b-meetings">B2B Meetings</Link></li>
					</ul>
				</div>
				<div>
					<div className="font-semibold mb-2">Contact</div>
					<ul className="space-y-2">
						<li>hello@creovata.com</li>
						<li>+1 (000) 000-0000</li>
						<li className="flex gap-3">
							<a href="https://twitter.com/creovata" target="_blank" rel="noreferrer">Twitter</a>
							<a href="https://linkedin.com/company/creovata" target="_blank" rel="noreferrer">LinkedIn</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="border-t py-4 text-center text-sm text-gray-600">© {new Date().getFullYear()} Creovata</div>
		</footer>
	)
}
