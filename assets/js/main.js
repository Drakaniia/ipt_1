let isLoading = false;
let navSetup = false;

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('/admin/')) {
        loadComponent('header-container', 'includes/header.html');
        loadComponent('navigation-container', 'includes/navigation.html');
        loadComponent('footer-container', 'includes/footer.html');
    } else {
        setupRootThemeToggle();
    }
    applySavedTheme();
});

function loadComponent(id, path) {
    const el = document.getElementById(id);
    if (!el) return;
    
    fetch(path)
        .then(r => r.text())
        .then(html => {
            el.innerHTML = html;
            if (id === 'header-container') setupProfileDropdown();
            if (id === 'navigation-container') setupNav();
        })
        .catch(() => el.innerHTML = '<div>Error loading</div>');
}

function setupNav() {
    if (navSetup) return;
    navSetup = true;
    
    setActiveNav();
    
    document.getElementById('navigation-container').onclick = (e) => {
        const link = e.target.closest('.nav-link-custom');
        if (!link || isLoading) return;
        
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href === window.location.pathname.split('/').pop()) return;
        
        isLoading = true;
        navigate(href);
    };
}

function setActiveNav() {
    const page = window.location.pathname.split('/').pop().replace('.html', '');
    document.querySelectorAll('.nav-link-custom').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-page') === page);
    });
}

function navigate(href) {
    const hasProfile = ['dashboard.html', 'profile.html'].includes(href);
    const hero = document.querySelector('.hero-banner');
    const profile = document.querySelector('.profile-info-section');
    const profileImg = document.querySelector('.profile-overlay-container');
    
    fetch(href)
        .then(r => r.text())
        .then(html => {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const newMain = doc.querySelector('.admin-main');
            const oldMain = document.querySelector('.admin-main');
            
            if (newMain && oldMain) {
                oldMain.innerHTML = newMain.innerHTML;
                document.title = doc.querySelector('title').textContent;
                history.pushState({href}, '', href);
                setActiveNav();
                
                if (hero) hero.style.height = hasProfile ? '300px' : '120px';
                if (profile) {
                    profile.style.maxHeight = hasProfile ? '250px' : '0';
                    profile.style.opacity = hasProfile ? '1' : '0';
                }
                if (profileImg) profileImg.style.display = hasProfile ? 'block' : 'none';
            }
            isLoading = false;
        })
        .catch(() => {
            window.location.href = href;
        });
}

window.onpopstate = (e) => {
    if (e.state?.href) {
        isLoading = true;
        navigate(e.state.href);
    }
};



function setupProfileDropdown() {
    const toggle = document.getElementById('profileDropdownToggle');
    const card = document.getElementById('profileDropdownCard');
    if (!toggle || !card) return;

    toggle.onclick = (e) => {
        e.stopPropagation();
        card.classList.toggle('show');
    };
    
    document.onclick = () => card.classList.remove('show');
    setupDarkMode();
    setupLogout();
}

function setupDarkMode() {
    const btn = document.getElementById('darkModeToggle');
    if (!btn) return;
    
    btn.onclick = () => {
        const isDark = document.body.hasAttribute('data-theme');
        if (isDark) {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        applySavedTheme();
    };
}

function setupLogout() {
    const btn = document.getElementById('logoutBtn');
    if (btn) btn.onclick = () => window.location.href = '../login.html';
}

function applySavedTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
    }
}

function setupRootThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const themeText = document.getElementById('themeText');
    const themeIcon = document.getElementById('themeIcon');
    if (!toggle) return;
    
    toggle.onclick = () => {
        const isDark = document.body.hasAttribute('data-theme');
        if (isDark) {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            if (themeText) themeText.textContent = 'Light Mode';
            if (themeIcon) themeIcon.src = 'assets/img/icon-dashboard.svg';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            if (themeText) themeText.textContent = 'Dark Mode';
            if (themeIcon) themeIcon.src = 'assets/img/icon-light.svg';
        }
    };
    
    const theme = localStorage.getItem('theme') || 'light';
    if (themeText) themeText.textContent = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
    if (themeIcon) themeIcon.src = theme === 'dark' ? 'assets/img/icon-light.svg' : 'assets/img/icon-dashboard.svg';
}

