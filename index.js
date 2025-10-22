const loadButton = document.querySelector("#load-data");
const display = document.querySelector("#cat-display");
const dataTypeSelect = document.querySelector("#data-type");

// Fetch data depending on selection (image or fact)
async function fetchCatData() {
  const selectedType = dataTypeSelect.value;
  display.innerHTML = "<p>Loading...</p>";

  try {
    let data;

    if (selectedType === "image") {
      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      if (!response.ok) throw new Error("Image fetch failed");
      data = await response.json();

      display.innerHTML = `
        <img src="${data[0].url}" alt="A random cat">
        <p><strong>Cat ID:</strong> ${data[0].id}</p>
      `;

    } else if (selectedType === "fact") {
      const response = await fetch("https://meowfacts.herokuapp.com/");
      if (!response.ok) throw new Error("Fact fetch failed");
      data = await response.json();

      display.innerHTML = `<p><strong>Cat Fact:</strong> ${data.data[0]}</p>`;
    }
  } catch (error) {
    console.error("Fetch error:", error);
    display.innerHTML = `<p style="color:red;">Failed to load data. Try again later.</p>`;
  }
}

// Event listener for load button
loadButton.addEventListener("click", fetchCatData);