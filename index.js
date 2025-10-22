// Fetch a random cat image using TheCatAPI
const button = document.querySelector("#load-cat");
const container = document.querySelector("#cat-container");

async function getCatImage() {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("API Response:", data); // view in console

    // clear the previous content
    container.innerHTML = "";

    // create and display the new image
    const img = document.createElement("img");
    img.src = data[0].url;
    img.alt = "A random cat";

    // add a second data point (cat ID)
    const info = document.createElement("p");
    info.textContent = `Cat ID: ${data[0].id}`;

    // append both to the container
    container.appendChild(img);
    container.appendChild(info);

  } catch (error) {
    console.error("Error fetching cat image:", error);
    container.innerHTML = `<p style="color: red;">Failed to load cat image. Please try again later.</p>`;
  }
}

button.addEventListener("click", getCatImage);

