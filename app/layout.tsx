import type { Metadata, Viewport } from 'next';
import './globals.css';

const BASE_URL = 'https://cleaning-services.templates.seojack.website';

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: 'Pristine Clean',
    description: 'Professional cleaning-company site with service checklists, instant quote calculator, trust badges, and booking form.',
    alternates: { canonical: '/' },
    openGraph: {
        title: 'Pristine Clean',
        description: 'Professional cleaning-company site with service checklists, instant quote calculator, trust badges, and booking form.',
        url: BASE_URL,
        siteName: 'Pristine Clean',
        type: 'website',
        locale: 'en_GB',
        images: [{ url: 'https://cdn.seojack.website/templates/tpl_cleaning_services.avif', width: 1600, height: 1000 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Pristine Clean',
        description: 'Professional cleaning-company site with service checklists, instant quote calculator, trust badges, and booking form.',
        images: ['https://cdn.seojack.website/templates/tpl_cleaning_services.avif'],
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#102a30' };

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pristine Clean',
    description: 'Professional cleaning-company site with service checklists, instant quote calculator, trust badges, and booking form.',
    url: BASE_URL,
    image: 'https://cdn.seojack.website/templates/tpl_cleaning_services.avif',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en-GB">
            <body>
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </body>
        </html>
    );
}