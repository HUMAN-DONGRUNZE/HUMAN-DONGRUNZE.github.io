document.addEventListener('DOMContentLoaded', () => {
    updateActiveNav();
    initMobileMenu();
});

function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-btn');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navGroup = document.querySelector('.nav-group');
    const bodyEl = document.body;
    
    if (mobileMenuBtn && navGroup) {
        const closeMenu = () => {
            mobileMenuBtn.classList.remove('active');
            navGroup.classList.remove('active');
            bodyEl.style.overflow = '';
            bodyEl.classList.remove('menu-open');
        };
        
        const openMenu = () => {
            mobileMenuBtn.classList.add('active');
            navGroup.classList.add('active');
            bodyEl.style.overflow = 'hidden';
            bodyEl.classList.add('menu-open');
        };
        
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (navGroup.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        
        document.querySelectorAll('.nav-btn, .login-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (window.innerWidth <= 790) {
                    closeMenu();
                }
            });
        });
        
        window.addEventListener('resize', () => {
            if (window.innerWidth > 790) {
                closeMenu();
            }
        });
    }
}