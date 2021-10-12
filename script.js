let container = document.getElementById("movie_data");

async function getMovie_data() {
  let movie = document.getElementById("movie").value;
  let res = await fetch(`https://www.omdbapi.com/?apikey=e58b8710&t=${movie}`);
  let data = await res.json();
  console.log(data);
  showMovie_data(data);
}

function showMovie_data(data) {
  let title = data.Title;
  if (title === undefined) {
    container.innerHTML = null;
    container.style.flexDirection = "column";
    let gif = document.createElement("img");
    gif.src = "https://media.giphy.com/media/aYpmlCXgX9dc09dbpl/giphy.gif";
    gif.style.width = "30%";
    gif.style.paddingTop = "1%";
    gif.style.margin = "auto";
    let text = document.createElement("h2");
    text.innerHTML = "movie - name not found in database";
    container.append(gif, text);
  } else {
    container.innerHTML = null;

    let img_div = document.createElement("div");
    let text_div = document.createElement("div");

    let poster = document.createElement("img");
    poster.src = data.Poster;

    let year_release = document.createElement("p");
    year_release.innerText = data.Year;

    let name = document.createElement("p");
    name.innerText = data.Title + "  (" + year_release.innerText + ")  ";

    // let rating = document.createElement("p");
    // rating.innerText = "IMDB Rating :   " + data.imdbRating;

    let rating = document.createElement("p");
    if (data.imdbRating > 8.5) {
      rating.innerHTML =
        "IMDB Rating:   " +
        data.imdbRating +
        " / 10   <span><h3>Recommended</h3></span>";
    } else {
      rating.innerHTML = "IMDB Rating:   " + data.imdbRating + " / 10";
    }

    let releaseDate = document.createElement("p");
    releaseDate.innerText = "Released :  " + data.Released;

    let runtime = document.createElement("p");
    runtime.innerText = "Runtime :  " + data.Runtime;

    let genre = document.createElement("p");
    genre.innerText = "Genre :  " + data.Genre;

    let actor = document.createElement("p");
    actor.innerText = "Actors :  " + data.Actors;

    let director = document.createElement("p");
    director.innerText = "Director: " + data.Director;

    let writer = document.createElement("p");
    writer.innerText = "Writer :  " + data.Writer;

    let awards = document.createElement("p");
    awards.innerText = "Awards :  " + data.Awards;

    let country = document.createElement("p");
    country.innerText = "Country:  " + data.Country;

    let language = document.createElement("p");
    language.innerText = "Language : " + data.Language;

    img_div.append(poster);
    text_div.append(
      name,
      // year_release,
      rating,
      releaseDate,
      runtime,
      genre,
      actor,
      director,
      writer,
      awards,
      country,
      language
    );
    container.append(img_div, text_div);
  }
}
