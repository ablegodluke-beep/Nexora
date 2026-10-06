// ===============================
// MOBILE NAVIGATION
// ===============================

function toggleMenu() {
    const nav = document.getElementById("navMenu");

    if (nav) {
        nav.classList.toggle("active");
    }
}


// ===============================
// SMOOTH SCROLLING
// ===============================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // Close mobile menu after clicking a link
        const nav = document.getElementById("navMenu");

        if (nav) {
            nav.classList.remove("active");
        }
    }
}


// ===============================
// CLOSE MOBILE MENU WHEN LINK IS CLICKED
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll("#navMenu a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {

            const nav = document.getElementById("navMenu");

            if (nav) {
                nav.classList.remove("active");
            }

        });
    });

});


// ===============================
// SIMPLE MESSAGE / TOAST
// ===============================

function showMessage(message) {

    // Remove existing toast if there is one
    const existingToast = document.querySelector(".nexora-toast");

    if (existingToast) {
        existingToast.remove();
    }

    // Create toast
    const toast = document.createElement("div");

    toast.className = "nexora-toast";
    toast.textContent = message;

    // Toast styling
    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.background = "#17132f";
    toast.style.color = "#ffffff";
    toast.style.padding = "14px 22px";
    toast.style.borderRadius = "12px";
    toast.style.fontSize = "15px";
    toast.style.fontWeight = "600";
    toast.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
    toast.style.zIndex = "9999";
    toast.style.maxWidth = "90%";
    toast.style.textAlign = "center";

    document.body.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(function () {
        toast.remove();
    }, 3000);
}
function startPayment() {

    alert(
        "Nexora payment system is being connected. Your professional CV will be unlocked after successful payment."
    );

}