const API_KEY = "EmrqUgGfVz0H1duyHhAFWxLJOwlmB9rXXNfiRXBk";
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

const title = document.getElementById("title");
const explanation = document.getElementById("explanation");
const mediaContainer = document.getElementById("media-container");
const date = document.getElementById("date");
const loading = document.getElementById("loading");
const content = document.getElementById("content");
const error = document.getElementById("error");
const refreshBtn = document.getElementById("refreshBtn");

async function getAPOD() {
  loading.classList.remove("hidden");
  content.classList.add("hidden");
  error.classList.add("hidden");
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    title.textContent = data.title;
    explanation.textContent = data.explanation;
    date.textContent = `📅 ${data.date}`;
    if (data.media_type === "image") {
      mediaContainer.innerHTML = `<img src="${data.url}" />`;
    } else {
      mediaContainer.innerHTML = `<iframe src="${data.url}" allowfullscreen></iframe>`;
    }
    loading.classList.add("hidden");
    content.classList.remove("hidden");
  } catch (err) {
    error.classList.remove("hidden");
    loading.classList.add("hidden");
  }
}
refreshBtn.addEventListener("click", () => {
  refreshBtn.style.transform = "scale(0.95)";
  setTimeout(() => refreshBtn.style.transform = "scale(1)", 150);
  getAPOD();
});
getAPOD();