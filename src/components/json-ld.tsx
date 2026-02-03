"use client"

import { siteConfig } from "@/lib/data"

export default function JsonLd() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        email: siteConfig.email,
        jobTitle: siteConfig.role,
        address: {
            "@type": "PostalAddress",
            addressLocality: siteConfig.location,
        },
        sameAs: [
            siteConfig.social.github,
            siteConfig.social.linkedin,
            siteConfig.social.twitter,
        ],
        knowsAbout: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Full-Stack Development",
            "Web Development",
        ],
    }

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        description: siteConfig.description,
        author: {
            "@type": "Person",
            name: siteConfig.name,
        },
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    )
}
