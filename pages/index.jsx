import Head from 'next/head';
import Layout from '../components/redesign/Layout';
import Header from '../components/redesign/Header';
import Present from '../components/redesign/sections/Present';
import Experience from '../components/redesign/sections/Experience';
import Projects from '../components/redesign/sections/Projects';
import Skills from '../components/redesign/sections/Skills';
import Contact from '../components/redesign/sections/Contact';

import portfolioData from '../content/redesign/portfolio.json';
import projectsData from '../content/projects/featured.json';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Kyle Zhang | Developer & Designer</title>
        <meta name="description" content="Entrepreneurial UPenn M&T graduate building meaningful experiences in gaming and healthcare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Kyle Zhang | Developer & Designer" />
        <meta property="og:description" content="Entrepreneurial UPenn M&T graduate building meaningful experiences" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kyle Zhang | Developer & Designer" />
        <meta name="twitter:description" content="Entrepreneurial UPenn M&T graduate building meaningful experiences" />
      </Head>
      
      <Layout>
        <Header 
          name={portfolioData.header.name}
          tagline={portfolioData.header.tagline}
          profileImage={portfolioData.header.profileImage}
          email={portfolioData.header.email}
        />
        
        <Present data={portfolioData.present} />
        
        <Experience data={portfolioData.experience} />
        
        <Projects data={projectsData} />
        
        <Skills data={portfolioData.skills} />
        
        <Contact data={portfolioData.contact} />
      </Layout>
    </>
  );
}
