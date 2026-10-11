// ===== EDIT THESE (leave "" to hide a link) =====
const CONFIG = {
  resume: "",        // e.g. "assets/Sanvir-Singh-Resume.pdf"
  letter: "",        // e.g. "assets/NASA-HUNCH-Recommendation.pdf"
  linkedin: "",      // full URL
  github: ""         // full URL
};
// ================================================
const show = (id, url) => { const a = document.getElementById(id); if (a && url) { a.href = url; a.hidden = false; } };
show("resume-link", CONFIG.resume); show("letter-link", CONFIG.letter);
show("linkedin-link", CONFIG.linkedin); show("github-link", CONFIG.github);

// Show the labeled placeholder until a real image loads
document.querySelectorAll("[data-img]").forEach(fig => {
  const img = fig.querySelector("img");
  const miss = () => fig.classList.add("empty");
  if (img.complete && img.naturalWidth === 0) miss();
  img.addEventListener("error", miss);
});

// Mobile menu
const btn = document.querySelector(".menu"), nav = document.getElementById("links");
btn.addEventListener("click", () => btn.setAttribute("aria-expanded", nav.classList.toggle("open")));
nav.addEventListener("click", e => { if (e.target.tagName === "A") { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); } });
document.getElementById("year").textContent = new Date().getFullYear();
