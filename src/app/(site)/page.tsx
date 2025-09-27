"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HomePage() {
	return (
		<section>
			<div className="container py-20 grid gap-10">
				<div className="grid lg:grid-cols-2 gap-10 items-center">
					<div>
						<motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
							className="text-4xl md:text-6xl font-bold text-brand-900">
							Build outstanding products with Creovata
						</motion.h1>
						<p className="mt-5 text-gray-700">
							Web, Mobile, AI, and B2B solutions engineered for growth.
						</p>
						<div className="mt-8 flex gap-3">
							<Link href="/services" className="px-5 py-3 bg-brand-600 text-white rounded-md">Explore Services</Link>
							<Link href="/contact" className="px-5 py-3 border rounded-md">Contact Us</Link>
						</div>
					</div>
					<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
						className="aspect-video rounded-xl bg-gradient-to-br from-brand-100 to-white border" />
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					{["Web Development","Mobile Apps","AI & Automation"].map((t )=>(
						<motion.div key={t} whileHover={{ y: -4 }} className="p-6 border rounded-xl bg-white">
							<div className="font-semibold">{t}</div>
							<p className="text-sm text-gray-600 mt-2">Modern, scalable, and secure.</p>
						</motion.div>
					))}
				</div>

				<div className="grid md:grid-cols-2 gap-6 items-center">
					<div className="p-6 border rounded-xl bg-white">
						<div className="text-3xl font-bold">120+ projects</div>
						<p className="text-gray-600">Delivered across 15 industries</p>
					</div>
					<div className="p-6 border rounded-xl bg-white">
						<div className="text-3xl font-bold">98% satisfaction</div>
						<p className="text-gray-600">Client-first engagement</p>
					</div>
				</div>

				<div>
					<h2 className="text-2xl font-bold">What our clients say</h2>
					<div className="mt-4 grid md:grid-cols-3 gap-6">
						{Array.from({length:3}).map((_,i)=>(
							<motion.blockquote key={i} whileHover={{ scale: 1.02 }}
								className="p-6 border rounded-xl bg-white text-sm text-gray-700">
								“Creovata delivered beyond expectations.”
								<div className="mt-3 font-semibold">Client {i+1}</div>
							</motion.blockquote>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
