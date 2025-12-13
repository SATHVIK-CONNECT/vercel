const fileInput = document.getElementById("file-input");
const imageContainer = document.getElementById("image-container");

fileInput.addEventListener("change", (e) => {
  const files = fileInput.files;
  for (const file of files) {
    if (file.type.startsWith("src/images/")) {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      imageContainer.appendChild(img);
    }
  }
});
