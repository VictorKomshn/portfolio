import Education from '../components/Education/Education'
import Experience from '../components/Experience/Experience'
import Header from '../components/Header/Header'
import HomeHero from '../components/HomeHero/HomeHero'
import HomeStats from '../components/HomeStats/HomeStats'
import Languages from '../components/Languages/Languages'
import Publications from '../components/Publications/Publications'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import Skills from '../components/Skills/Skills'

function Home() {
  return (
    <div className="apple-container">

      <Header />

      <HomeHero/>

      <HomeStats />

      <SectionHeader 
        title="Career Path." 
        subtitle="A journey through engineering, design, and professional growth." 
      />
      <Experience/>

      <SectionHeader 
        title="Core Competencies." 
        subtitle="Technologies I use to build robust and beautiful digital experiences." 
      />
      <Skills/>

      <SectionHeader 
        title="Education." 
        subtitle="Academic background and fundamental knowledge." 
      />
      <Education />

      <SectionHeader 
        title="Research & Talks." 
        subtitle="Academic publications and public speaking engagements." 
      />
      <Publications/>
      
       {/* Переделать, просто в стиле we can talk in ... */}
      <SectionHeader 
        title="Languages." 
        subtitle="Linguistic proficiency and communication skills." 
      />
      <Languages/>
    </div>
  )
}

export default Home