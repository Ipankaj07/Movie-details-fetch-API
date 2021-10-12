// search Movies

let movie_div = document.getElementById("movies");

var timerId;

async function searchMovies(movie_name) {
  try {
    let res = await fetch(
      `http://www.omdbapi.com/?apikey=d806bd70&s=${movie_name}`
    );

    let data = await res.json();

    // console.log(`data:`, data);
    return data;
  } catch (err) {
    console.log(`Error:`, err);
  }
}

// searchMovies("inception");

function appendMovies(movies) {
  if (movies == undefined) {
    return false;
  }

  movie_div.innerHTML = null;

  movies.forEach(function (movie) {
    let img_div = document.createElement("div");
    let title_div = document.createElement("div");

    let year = document.createElement("p");
    year.innerText = movie.Year;

    let p = document.createElement("p");
    p.innerText = movie.Title + " ( " + year.innerText + " )" + "\n";

    let poster = document.createElement("img");
    poster.src = movie.Poster;

    img_div.appendChild(poster);
    title_div.appendChild(p);

    movie_div.append(img_div, title_div);
  });
}

// main function

async function main() {
  let name = document.getElementById("movie1").value;

  // get search Movies

  if (name.length < 3) {
    return false;
  }

  let res = await searchMovies(name);

  let movie_data = res.Search;

  appendMovies(movie_data);

  // console.log(`res:`, res);
}

function debounce(func, delay) {
  // lets talk about A
  //func  = main()

  //ave -- setTimeout -- fun -- main() -- searchMovies("ave")
  //aven -- clear the prev timeout -- setTimeout -- func() -- main() -- searchMovies("aven")

  if (timerId) {
    clearTimeout(timerId);
  }

  timerId = setTimeout(function () {
    func();
  }, delay);
}
