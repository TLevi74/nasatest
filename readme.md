# NASA Astronomy Picture of the Day

A responsive web application that displays NASA's daily Astronomy Picture of the Day using NASA's APOD API.

![NASA APOD Screenshot](screenshot.png)

## Live Demo

**https://tlevi74.github.io/nasatest**

---

## Try it online

Simply open the live demo above.

## Features

- Fetches NASA's Astronomy Picture of the Day using the APOD API
- Displays the image
- Shows the title, date, and full description
- Refresh button to reload the latest APOD data
- Displays an error message if the API request fails
- Modern interface
- Animated star background and animations
- Responsive layout for desktop and mobile devices

---

## Technologies Used

- HTML
- CSS
- JavaScript
- NASA APOD API

---

## How It Works

The website uses JavaScript's `fetch()` function with NASA's APOD API to get the latest picture each time the page loads. It then updates the page with the title, image, date, and description.

The app also checks whether NASA returned an image or a video and displays it correctly. Custom CSS, animations, and a cool design give the site a modern look, while loading and error messages improve the user experience.

---

## Project Structure

```text
nasa-apod/
│
├── index.html
├── style.css
├── script.js
├── screenshot.png
└── README.md
```

---

## Credits

- NASA for the Astronomy Picture of the Day API
- Google Fonts
- Built with HTML, CSS, and JavaScript

---

## Author

Made by **TLevi74**

GitHub: https://github.com/tlevi74
