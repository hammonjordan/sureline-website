document.addEventListener('DOMContentLoaded', () => {
    const mainDiv = document.getElementById('main');

    if (!mainDiv) {
        console.error('Main div not found in the document.');
        return;
    }

    async function updateContent(url: string) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const content = await response.text();
            mainDiv!.innerHTML = content;

            window.scrollTo({ top: 0, behavior: 'auto' });
        } catch (error) {
            console.error('Error fetching content:', error);
        }
    }

    const homeLink: HTMLElement[] = [
        document.getElementById('hnd02') as HTMLElement,
        document.getElementById('fns01') as HTMLElement
    ];

    const contactLink: HTMLElement[] = [
        document.getElementById('contact-link') as HTMLElement,
        document.getElementById('footer-contact-link') as HTMLElement
    ];

    const aboutLink: HTMLElement[] = [
        document.getElementById('about-link') as HTMLElement,
        document.getElementById('footer-about-link') as HTMLElement
    ];

    homeLink.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            updateContent('../pages/home-page/home.html');
            history.pushState({}, '', '/');
        });
    });

    contactLink.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            updateContent('../pages/contact-page/contact.html');
            history.pushState({}, '', '/contactus');
        });
    });

    aboutLink.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            updateContent('../pages/about-page/about.html');
            history.pushState({}, '', '/aboutus');
        });
    });

    const currentPath = window.location.pathname;
    switch (currentPath) {
        case '/':
            updateContent('../pages/home-page/home.html');
            break;
        case '/contactus':
            updateContent('../pages/contact-page/contact.html');
            break; 
        case '/aboutus':
            updateContent('../pages/about-page/about.html');
            break;    
        default:
            updateContent('../pages/home-page/home.html');
            break;
    }
});
