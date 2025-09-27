// src/app/(site)/portfolio/[slug]/page.tsx

import { notFound } from "next/navigation"
import { getCase } from "@/content/portfolio"
import Image from "next/image" // Assuming you use Next.js Image component

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
    // 1. Fetch the case study using the slug from the URL parameters
    const caseStudy = getCase(params.slug)

    // 2. If the case study is not found, render the notFound page
    if (!caseStudy) return notFound()

    // 3. Render the case study details
    return (
        <article className="container py-16 grid gap-10">
            <header className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl font-extrabold mb-4">{caseStudy.title}</h1>
                <p className="text-xl text-brand-600 font-semibold mb-6">{caseStudy.result}</p>
                <p className="text-gray-700 text-lg">{caseStudy.description}</p>
            </header>

            {/* A section for the main image (assuming a fixed size for illustration) */}
            <div className="max-w-5xl mx-auto w-full">
                {/* Note: You would typically define 'width', 'height', and 'alt' for the Next.js Image component. 
                  This is a placeholder based on the available 'image' property.
                */}
                <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={caseStudy.image}
                        alt={`Image for ${caseStudy.title}`}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
            </div>
            
            {/* The rest of the content would typically go here */}
            <section className="max-w-3xl mx-auto prose">
                {/* This is where more detailed content about the case study would be rendered. 
                    For now, it's just a placeholder based on the available data. 
                */}
                <h2>The Project Overview</h2>
                <p>This is the detailed explanation of the project, including the problem, solution, and technology stack. The initial description was:  {caseStudy.description} .</p>
                
                <h2>The Results</h2>
                <p>We achieved a significant result: **{caseStudy.result}**. This demonstrates the impact of the solution.</p>
            </section>
        </article>
    )
}

// Note: I've added an 'Image' import and included a basic structure for a case study page, 
// assuming you'll want to display the image and other details in a more visually rich way than the blog page.