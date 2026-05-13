// NAvbar active class script
const links = document.querySelectorAll(".nav-link");
const currentPath = window.location.pathname;

links.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
        link.classList.add("active", "font-semibold", "text-green-900", "bg-green-200", "px-3", "py-2", "rounded-md");
    } else {
        link.classList.remove("active");
    }
});

// Dark mode toggle script
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const html = document.documentElement;

const sunIcon = `
<svg xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">

    <path stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`

const moonIcon = `
<svg xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5"
    viewBox="0 0 16 16"
    fill="currentColor">

    <path d="M14.438 10.148c.19-.425-.321-.787-.748-.601A5.5 5.5 0 0 1 6.453 2.31c.186-.427-.176-.938-.6-.748a6.501 6.501 0 1 0 8.585 8.586Z"/>
</svg>`

if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark')
    themeIcon.innerHTML = moonIcon
} else {
    themeIcon.innerHTML = sunIcon
}

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark')

    if(html.classList.contains('dark')){
        localStorage.setItem('theme', 'dark')
        themeIcon.innerHTML = moonIcon
    } else {
        localStorage.setItem('theme', 'light')
        themeIcon.innerHTML = sunIcon
    }
})