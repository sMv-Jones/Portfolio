import { useState, useEffect, useRef } from 'react';
import './App.css';
import { Theme, Hero, About, Contact, Project, Resume, Skill, Education } from "./components/index";

export default function App() {
    const [activeSection, setActiveSection] = useState('hero');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const sectionsRef = useRef({});
    const mobileNavRef = useRef(null);

    const setSectionRef = (el) => {
        if (el) {
            sectionsRef.current[el.id] = el;
        } else {
            delete sectionsRef.current[el?.id];
        }
    };

    useEffect(() => {
        const urls = [
            'https://smvblog-0ptu.onrender.com/ping',
            'https://ai-enabled-ats-ngmw.onrender.com/ping',
            'https://ai-multi-model-summarizer-dlfh.onrender.com/ping'
        ];
        const wakeUpServers = async () => {
            try {
                await Promise.all(urls.map(url => fetch(url)));
                console.log('Servers woken up');
            } catch (error) {
                console.error('Error waking up servers:', error);
            }
        };

        wakeUpServers();
    }, []);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '-60px 0px -60% 0px',
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

    useEffect(() => {
        if (!isMobileMenuOpen) return;

        function handleEvents(e) {
            if (e.type === 'keydown' && e.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
            if (e.type === 'mousedown' && mobileNavRef.current && !mobileNavRef.current.contains(e.target)) {
                setIsMobileMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleEvents);
        document.addEventListener('keydown', handleEvents);

        return () => {
            document.removeEventListener('mousedown', handleEvents);
            document.removeEventListener('keydown', handleEvents);
        };
    }, [isMobileMenuOpen]);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = sectionsRef.current[id];
        if (element) {
            const offsetPosition = element.offsetTop - (window.innerWidth <= 1024 ? 70 : 48);
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const formatTitle = (id) => {
        if (id === 'hero') return 'Portfolio';
        if (id === 'project') return 'Projects';
        return id.charAt(0).toUpperCase() + id.slice(1);
    };

    const navItems = ['about', 'project', 'education', 'skill', 'resume', 'contact'];

    return (
        <div className="app-container" data-active-section={activeSection}>
            <header className="mobile-section-header" ref={mobileNavRef}>
                <div className="mobile-header-content">
                    <h2 className="mobile-title">{formatTitle(activeSection)}</h2>

                    <button
                        type="button"
                        className={`mobile-menu-btn ${isMobileMenuOpen ? 'is-active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <svg className="menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {isMobileMenuOpen ? (
                                <path d="M18 6 6 18M6 6l12 12" />
                            ) : (
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            )}
                        </svg>
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <nav className="mobile-nav-drawer" aria-label="Mobile Navigation Menu">
                        <div className="mobile-nav-links">
                            {navItems.map((id) => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    onClick={(e) => scrollToSection(e, id)}
                                    className={`mobile-nav-link ${activeSection === id ? 'active-section' : ''}`}
                                >
                                    {id === 'project' ? 'Projects' : id.charAt(0).toUpperCase() + id.slice(1)}
                                </a>
                            ))}
                        </div>

                        <div className="mobile-theme-inside-dropdown">
                            <Theme />
                        </div>
                    </nav>
                )}
            </header>

            <aside className="left-panel">
                <div className="left-content">
                    <div id="hero" ref={setSectionRef}>
                        <Hero />
                    </div>
                    <nav className="side-nav" aria-label="Main Navigation Shortcuts">
                        {navItems.map((id) => (
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
            </aside>

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