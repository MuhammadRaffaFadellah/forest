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

//