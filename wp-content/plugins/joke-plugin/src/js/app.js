//Main body of the widget
const joke = document.getElementById("joke")

//Fetching a joke
async function jokes() {
  let data = await fetch("https://v2.jokeapi.dev/joke/Programming");
  let response = await data.json();
}
