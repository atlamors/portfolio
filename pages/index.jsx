import Head from 'next/head';
import Layout from '../components/redesign/Layout';
import Header from '../components/redesign/Header';
import About from '../components/redesign/sections/About';
import Work from '../components/redesign/sections/Work';
import Contact from '../components/redesign/sections/Contact';

import portfolioData from '../content/redesign/portfolio.json';
import projectsData from '../content/projects/featured.json';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Kyle Zhang | Builder & Creator</title>
        <meta name="description" content="M&T graduate from UPenn, building at the intersection of gaming, AI, and human impact. Creator of LineupsValorant and Robin." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content="Kyle Zhang | Builder & Creator" />
        <meta property="og:description" content="M&T graduate from UPenn, building at the intersection of gaming, AI, and human impact." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/headshot.jpeg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kyle Zhang | Builder & Creator" />
        <meta name="twitter:description" content="M&T graduate from UPenn, building at the intersection of gaming, AI, and human impact." />
      </Head>

      <Layout>
        <Header
          name={portfolioData.header.name}
          tagline={portfolioData.header.tagline}
          description={portfolioData.header.description}
          email={portfolioData.header.email}
        />

        <About data={portfolioData.about} />

        <Work data={projectsData} />

        <Contact data={portfolioData.contact} />
      </Layout>
    </>
  );
}
