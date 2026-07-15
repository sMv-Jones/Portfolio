import { useState, useEffect, useRef } from 'react';
import './theme.css';

const THEMES = [
    { id: 'midnight', name: 'Midnight', colors: ['#0B0F19', '#6366F1', '#A855F7', '#F43F5E'] },
    { id: 'slate', name: 'Slate', colors: ['#0F172A', '#0EA5E9', '#2DD4BF', '#38BDF8'] },
    { id: 'forest', name: 'Forest', colors: ['#060D0A', '#10B981', '#84CC16', '#22C55E'] },
    { id: 'light', name: 'Light (Teal)', colors: ['#FAFAFA', '#0F766E', '#0891B2', '#16A34A'] },
    { id: 'nordic-light', name: 'Nordic Light', colors: ['#F0F4F8', '#243B53', '#3B82F6', '#48BB78'] },
    { id: 'sand', name: 'Sand (Warm)', colors: ['#FDFBF7', '#C2410C', '#B45309', '#15803D'] },
];

export default function ThemeSelector() {
    const [isOpen, setIsOpen] = useState(false);

    const [activeThemeId, setActiveThemeId] = useState(() => {
        return localStorage.getItem('app-theme') || 'midnight';
    });

    const dropdownRef = useRef(null);

    // Find current theme information early
    const currentTheme = THEMES.find(t => t.id === activeThemeId) || THEMES[0];

    useEffect(() => {
        // 1. Sync data attribute for standard CSS selectors
        document.documentElement.setAttribute('data-theme', activeThemeId);
        
        // 2. Persist selection
        localStorage.setItem('app-theme', activeThemeId);
        
        // 3. Keep the inline style in sync with the current theme's base color
        // This ensures the inline style from the Vite FOUC script updates seamlessly during manual changes
        if (currentTheme && currentTheme.colors) {
            document.documentElement.style.backgroundColor = currentTheme.colors[0]; 
        }
    }, [activeThemeId, currentTheme]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const getGradientStr = (colors) =>
        `linear-gradient(to right, ${colors[0]} 20%, ${colors[1]} 40%, ${colors[2]} 70%, ${colors[3]} 100%)`;

    return (
        <div className="dropdown-container" ref={dropdownRef}>
            <label className="dropdown-label">Theme</label>

            <button
                type="button"
                className={`dropdown-trigger ${isOpen ? 'is-open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span className="trigger-text">{currentTheme.name}</span>
                <div className="trigger-right">
                    <div className="color-bar" style={{ background: getGradientStr(currentTheme.colors) }} />
                    <svg className="chevron-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </div>
            </button>

            {isOpen && (
                <ul className="dropdown-menu" role="listbox">
                    {THEMES.map((theme) => (
                        <li key={theme.id} role="option" aria-selected={activeThemeId === theme.id}>
                            <button
                                type="button"
                                className={`dropdown-item ${activeThemeId === theme.id ? 'is-active' : ''}`}
                                onClick={() => {
                                    setActiveThemeId(theme.id);
                                    setIsOpen(false);
                                }}
                            >
                                <span className="item-name">{theme.name}</span>
                                <div className="color-bar" style={{ background: getGradientStr(theme.colors) }} />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}