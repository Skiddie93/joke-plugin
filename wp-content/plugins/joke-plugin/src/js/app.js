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
  if (response["type"] == "twopart") {
    let jokeInfo = {
      "jokeday": date.getDay(),
      "print": response["setup"] + '<br>' + response["delivery"]
    }
    localStorage.setItem("joke", JSON.stringify(jokeInfo))
  } else {
    let jokeInfo = {
      "jokeday": date.getDay(),
      "print": response["joke"]
    }
    localStorage.setItem("joke", JSON.stringify(jokeInfo))
  }
}
