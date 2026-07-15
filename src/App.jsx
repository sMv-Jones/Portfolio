import { useState, useEffect, useRef } from 'react';
import './App.css';
import { Theme, Hero, About, Contact, Project, Resume, Skill, Education } from "./components/index";

export default function App() {
    const [activeSection, setActiveSection] = useState('about');
    const sectionsRef = useRef({});

    const setSectionRef = (el) => {
        if (el) {
            sectionsRef.current[el.id] = el;
        } else {
            delete sectionsRef.current[el?.id];
        }
    };

    useEffect(() => {
        const options = {
            root: null,
            // Enhanced viewport balance checks to match the tightened section margins
            rootMargin: '-30% 0px -50% 0px', 
            threshold: 0
        };

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        
        Object.values(sectionsRef.current).forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = sectionsRef.current[id];
        if (element) {
            // Refined padding offset adjustments for accurate jump landings
            const offsetPosition = element.offsetTop - (window.innerWidth <= 1024 ? 80 : 48);
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const formatTitle = (id) => {
        if (id === 'project') return 'Featured Projects';
        return id.charAt(0).toUpperCase() + id.slice(1);
    };

    return (
        <div className="app-container">
            <div className="mobile-section-header">
                <div className="mobile-header-content">
                    <h2 className="mobile-title">{formatTitle(activeSection)}</h2>
                </div>
            </div>

            <header className="left-panel">
                <div className="left-content">
                    <Hero />
                    <nav className="side-nav" aria-label="Main Navigation Shortcuts">
                        {['about', 'project', 'education', 'skill', 'resume', 'contact'].map((id) => (
                            <a 
                                key={id}
                                href={`#${id}`} 
                                onClick={(e) => scrollToSection(e, id)}
                                className={`nav-link ${activeSection === id ? 'active-section' : ''}`}
                            >
                                {id === 'project' ? 'Projects' : id.charAt(0).toUpperCase() + id.slice(1)}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="desktop-theme-wrapper">
                    <Theme />
                </div>
            </header>

            <main className="right-panel">
                <section id="about" ref={setSectionRef}>
                    <About />
                </section>
                <section id="project" ref={setSectionRef}>
                    <Project />
                </section>
                <section id="education" ref={setSectionRef}>
                    <Education />
                </section>
                <section id="skill" ref={setSectionRef}>
                    <Skill />
                </section>
                <section id="resume" ref={setSectionRef}>
                    <Resume />
                </section>
                <section id="contact" ref={setSectionRef}>
                    <Contact />
                </section>
            </main>
        </div>
    );
}