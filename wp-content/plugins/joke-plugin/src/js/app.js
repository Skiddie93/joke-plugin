//Main body of the widget
const joke = document.getElementById("joke")
const date = new Date()
const currentDay = date.getDay()

//Fetching a joke
async function jokes() {
  let data = await fetch("https://v2.jokeapi.dev/joke/Programming");
  let response = await data.json();
  handleResponse(response)
}

//processing and storing fetch response
function handleResponse(response) {
  switch (response["type"]) {
    case "twopart":
       jokeInfo = {
        "jokeday": date.getDay(),
        "print": response["setup"] + '<br>' + response["delivery"]
      }
      localStorage.setItem("joke", JSON.stringify(jokeInfo))
      break;
    case "single":
       jokeInfo = {
        "jokeday": date.getDay(),
        "print": response["joke"]
      }
      localStorage.setItem("joke", JSON.stringify(jokeInfo))
      break;
    default:
  }
}

//Rendering inside widget div and new joke fetch on a new day
(async function render() {
  if (localStorage.getItem("joke") == null) {
    await jokes()
  }
  let jokeInfo = JSON.parse(localStorage.getItem("joke"))
  joke.innerHTML = jokeInfo["print"]

  if (jokeInfo["jokeday"] != currentDay) {
    await jokes()
  }

})()
