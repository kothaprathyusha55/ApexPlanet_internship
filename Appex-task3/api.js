function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => response.json())
      .then(data => {
        document.getElementById("joke").innerText = `${data.setup} — ${data.punchline}`;
      })
      .catch(error => {
        document.getElementById("joke").innerText = "Failed to fetch joke.";
        console.error("Error fetching joke:", error);
      });
  }
  