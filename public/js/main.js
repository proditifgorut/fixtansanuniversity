document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Mobile Menu Toggle
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', !isExpanded);
            if (mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== '0px') {
                mobileMenu.style.maxHeight = '0px';
                menuButton.innerHTML = '<i data-lucide="menu" class="h-6 w-6"></i>';
            } else {
                mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
                menuButton.innerHTML = '<i data-lucide="x" class="h-6 w-6"></i>';
            }
            lucide.createIcons();
        });
    }

    // Handle Login State in Header
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    
    const loginButtonDesktop = document.getElementById('login-button-desktop');
    const loginButtonMobile = document.getElementById('login-button-mobile');

    if (isLoggedIn) {
        if(loginButtonDesktop) {
            loginButtonDesktop.innerHTML = `<i data-lucide="user" class="h-4 w-4 mr-2"></i> Dashboard`;
            loginButtonDesktop.href = '/pages/dashboard.html';
            loginButtonDesktop.classList.remove('bg-secondary-500', 'hover:bg-secondary-600');
            loginButtonDesktop.classList.add('bg-green-500', 'hover:bg-green-600');
            lucide.createIcons({
                nodes: [loginButtonDesktop]
            });
        }
        if(loginButtonMobile) {
            loginButtonMobile.textContent = 'Dashboard';
            loginButtonMobile.href = '/pages/dashboard.html';
        }
    }

    // Active Nav Link Styling
    const currentPath = window.location.pathname;
    const navLinksDesktop = document.querySelectorAll('#desktop-nav a');
    const navLinksMobile = document.querySelectorAll('#mobile-nav a');

    const setActive = (links) => {
        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('text-secondary-500', 'font-bold');
            }
        });
    };

    setActive(navLinksDesktop);
    setActive(navLinksMobile);
});
