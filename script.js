// === script.js — 动态标题、主题切换 ===
document.addEventListener('DOMContentLoaded', () => {
    const pageNameMeta = document.querySelector('meta[name="page-name"]');
    const baseTitleMeta = document.querySelector('meta[name="base-title"]');
    
    const pageName = pageNameMeta ? pageNameMeta.content : 'PAGE';
    const baseTitle = baseTitleMeta ? baseTitleMeta.content : 'WEBSITE';
    
    const updateTitle = (section = '') => {
        let title = `${baseTitle} · ${pageName}`;
        if (section) title += ` | ${section}`;
        document.title = title;
    };
    
    const sections = document.querySelectorAll('.content-section');
    if (sections.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const heading = entry.target.querySelector('h2');
                    const sectionName = heading ? heading.dataset.section || '' : '';
                    updateTitle(sectionName);
                }
            });
        }, { threshold: 0.4 });
        
        sections.forEach(section => observer.observe(section));
    }
    
    updateTitle('');

    const themeToggle = document.querySelector('.theme-toggle-btn');
    const savedTheme = localStorage.getItem('neon-theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const applyTheme = (theme) => {
        const targetTheme = theme || (systemDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', targetTheme);
        if (themeToggle) {
            themeToggle.textContent = targetTheme === 'dark' ? '🌞' : '🌛';
        }
    };
    
    applyTheme(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('neon-theme', newTheme);
            applyTheme(newTheme);
        });
    }
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('neon-theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
});