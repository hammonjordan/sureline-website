const hamburger = document.getElementById('hnd04') as HTMLElement | null;
const hamburgerComponents = document.querySelectorAll<HTMLElement>('.hhline'); // Corrected selector
const sliderNav = document.getElementById('sliderNavbar') as HTMLElement | null;
const mainDiv = document.getElementById('main') as HTMLElement | null;

if (hamburger && sliderNav && mainDiv) {
    // Event listener for hamburger click
    hamburger.addEventListener("click", () => {
        // Toggle 'active' class for each component
        hamburgerComponents.forEach((component: HTMLElement) => {
            component.classList.toggle('active');
        });

        // Update anyActive after toggle
        let anyActive = Array.from(hamburgerComponents).some((component: HTMLElement) => component.classList.contains('active'));

        // Update sliderNav class
        if (anyActive) {
            sliderNav.classList.replace('sliderInActive', 'sliderActive');
        } else {
            sliderNav.classList.replace('sliderActive', 'sliderInActive');
        }
    });

    // Event listener for main div click
    mainDiv.addEventListener("click", () => {
        // Check if sliderNav has 'sliderActive' class
        let anyActive = Array.from(hamburgerComponents).some((component: HTMLElement) => component.classList.contains('active'));
        if (anyActive) {
            hamburgerComponents.forEach((component: HTMLElement) => {
                component.classList.remove('active');
            });
            sliderNav.classList.replace('sliderActive', 'sliderInActive');
        }
    });
} else {
    console.error("Couldn't find components.");
}
