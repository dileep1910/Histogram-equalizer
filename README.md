# Histogram-equalizer
This web-based project enhances the contrast of grayscale images using **Histogram Equalization**, implemented with HTML, CSS, and JavaScript.

---

## 🌟 Features

- Upload any image file
- Convert the image to grayscale
- Apply histogram equalization to improve contrast
- View both the original and enhanced images side-by-side
- Fully responsive and styled with modern UI using CSS

---

## 📁 Project Structure

/your-project-folder
│
├── index.html         # Main HTML structure
├── style.css          # Modern colorful styling
├── script.js          # Image processing logic
├── README.md          # Project documentation
└── test_grayscale_image.png  # Sample grayscale image

---

## 🧠 How It Works

1. Image is loaded and displayed on a `<canvas>`.
2. JavaScript converts it to grayscale.
3. A histogram is computed based on pixel intensity.
4. A cumulative distribution function (CDF) is built.
5. The grayscale values are mapped to a new range using the normalized CDF.
6. The equalized image is displayed beside the original.

---

## 🚀 Getting Started

1. Clone or download the project files.
2. Open `index.html` in a web browser.
3. Upload an image using the file input.
4. View both the original and equalized images.

---

## 🖼️ Test Image

Included: `test_grayscale_image.png`  
Or you can upload any image to see the enhancement results.

---

## 📌 Technologies Used

- HTML5
- CSS3 (with enhanced UI)
- JavaScript (vanilla)
- Canvas API for image rendering

---

## 📜 License

This project is free to use for learning and experimentation.
