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
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("API error");
    }
    const data = await response.json();
    title.textContent = data.title;
    explanation.textContent = data.explanation;
    date.textContent = `${data.date}`;
    if (data.media_type === "image") {
      mediaContainer.innerHTML = `
        <img src="${data.url}" alt="${data.title}">
      `;
    } else {
      mediaContainer.innerHTML = `
        <iframe
          src="${data.url}"
          frameborder="0"
          allowfullscreen>
        </iframe>
      `;
    }
    loading.classList.add("hidden");
    content.classList.remove("hidden");
  } catch (err) {
    loading.classList.add("hidden");
    error.classList.remove("hidden");
    console.error(err);
  }
}
refreshBtn.addEventListener("click", getAPOD);
getAPOD();