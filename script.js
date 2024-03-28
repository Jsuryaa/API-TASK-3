

async function fetchJoke() {
  const apiUrl = 'https://api.chucknorris.io/jokes/random';
  
  try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
          throw new Error('Failed to fetch joke');
      }
      const data = await response.json();
      displayJoke(data.value);
  } catch (error) {
      displayError(error.message);
  }
}

function displayJoke(joke) {
  const jokeTextElement = document.getElementById('joke-text');
  jokeTextElement.textContent = joke;
}

function displayError(errorMessage) {
  const jokeTextElement = document.getElementById('joke-text');
  jokeTextElement.textContent = `Error: ${errorMessage}`;
}
