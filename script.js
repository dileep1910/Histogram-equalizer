const upload = document.getElementById('upload');
const originalCanvas = document.getElementById('originalCanvas');
const equalizedCanvas = document.getElementById('equalizedCanvas');
const originalCtx = originalCanvas.getContext('2d');
const equalizedCtx = equalizedCanvas.getContext('2d');

upload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const img = new Image();
  const reader = new FileReader();

  reader.onload = function (e) {
    img.src = e.target.result;
  };

  img.onload = function () {
    originalCanvas.width = equalizedCanvas.width = img.width;
    originalCanvas.height = equalizedCanvas.height = img.height;

    originalCtx.drawImage(img, 0, 0);
    const imageData = originalCtx.getImageData(0, 0, img.width, img.height);
    const grayData = toGrayscale(imageData);
    const equalizedData = histogramEqualization(grayData);
    equalizedCtx.putImageData(equalizedData, 0, 0);
  };

  if (file) reader.readAsDataURL(file);
});

function toGrayscale(imageData) {
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const avg = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    data[i] = data[i + 1] = data[i + 2] = avg;
  }
  return imageData;
}

function histogramEqualization(imageData) {
  const data = imageData.data;
  const histogram = new Array(256).fill(0);
  const cdf = new Array(256).fill(0);

  for (let i = 0; i < data.length; i += 4) histogram[data[i]]++;
  cdf[0] = histogram[0];
  for (let i = 1; i < 256; i++) cdf[i] = cdf[i - 1] + histogram[i];

  const cdfMin = cdf.find(v => v > 0);
  const totalPixels = imageData.width * imageData.height;
  const equalizedLUT = cdf.map(v => Math.round((v - cdfMin) / (totalPixels - cdfMin) * 255));

  for (let i = 0; i < data.length; i += 4) {
    const newVal = equalizedLUT[data[i]];
    data[i] = data[i + 1] = data[i + 2] = newVal;
  }

  return imageData;
}
