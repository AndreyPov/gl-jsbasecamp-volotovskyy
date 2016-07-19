(function () {
  let loader = document.getElementById('loader');
  let avatar = document.getElementById('avatar');
  let prev = document.getElementById('prev');
  let next = document.getElementById('next');
  let index = 1; // Index of the character from swapi hero base
  const TOTAL_HERO_NUM = 88; // Total characters number from swapi hero base
  const INITIAL_INDEX = 1; // Index of the character from swapi hero base for initial display

  const MAP_OF_PROPS = {
    "name": {"title": 'Name', "isVisible": true},
    "height": {"title": 'Height', "isVisible": true},
    "mass": {"title": 'Weight', "isVisible": true},
    "hair_color": {"title": 'Hair Color', "isVisible": true},
    "skin_color": {"title": 'Skin Color', "isVisible": true},
    "eye_color": {"title": 'Eye Color', "isVisible": true},
    "birth_year": {"title": 'Birth Year', "isVisible": true},
    "gender": {"title": 'Gender', "isVisible": true},
    "films": {"title": 'films', "isVisible": false}
  };
//TODO: finish buttons, fix disabled state

  document.addEventListener("DOMContentLoaded", () => {

    getHero(index);

    prev.addEventListener('click', e => {
      if (index <= 1) {
        prev.classList.add('disabled');
        return false;
      }
      if (index === 2) {
        prev.classList.add('disabled');
      }
      getHero(--index);
      if (index === TOTAL_HERO_NUM - 1) {
        next.classList.remove('disabled');
      }
    });

    next.addEventListener('click', e => {
      if (index >= TOTAL_HERO_NUM) {
        next.classList.add('disabled');
        return false;
      }
      if (index === TOTAL_HERO_NUM - 1) {
        next.classList.add('disabled');
      }
      getHero(++index);
      if (index === 2) {
        prev.classList.remove('disabled');
      }
    });
  });

  function getAvatar(){
    let avatarIndex = `./src/images/avatars/${index}.jpg`;
    avatar.setAttribute('src', avatarIndex);
  }

//TODO: refactor exception to get rid of magic numbers (for ex 88)
  function status(response) {
    console.log(response);
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
        try{
          return Promise.resolve(response);
        } catch(err){
          return Promise.reject(new Error(response.statusText));
        }
    }
  }

  function json(response) {
    return response.json()
  }

  function getHero(index) {

    loader.className = "spinner";
    getAvatar();
    let currentHero = {};
    let promises = [];

    fetch('http://swapi.co/api/people/' + index)
      .then(status)
      .then(json)
      .then(data => {

        if(data.detail) {
          console.log(data);
          // renderHero({});
          // renderFilm([]);
          // currentHero = {};
          currentHero.films = [];
          return false;
        }

        currentHero = data;
        console.log(currentHero);
        data.films.forEach((filmUrl, index) => {
          promises.push(
            fetch(filmUrl)
              .then(status)
              .then(json)
          );
        });
        return Promise.all(promises)
          .then((films) => {currentHero.films = films});
      })
      .then(() => {
        loader.className = '';
        renderHero(currentHero);
        renderFilm(currentHero.films);
      })
      .catch((err) => {
        console.log('Fetch Error', err);
        document.body.innerHTML = 'Error!';
      });
  }

  function renderHero(hero) {
    let heroInfo = document.getElementById('hero-info');
    heroInfo.innerHTML = '';

    for (var prop in MAP_OF_PROPS) {
      if (!MAP_OF_PROPS[prop].isVisible) {
        continue;
      }
      let li = document.createElement('li');
      li.textContent = `${MAP_OF_PROPS[prop].title}: ${hero[prop] || 'unknown'}`;
      heroInfo.appendChild(li);
    }
  }

  function renderFilm(films) {
    let heroFilms = document.getElementById('hero-films');
    heroFilms.innerHTML = '';
    if(!films.length) {
      heroFilms.innerHTML = 'No films!';
      return false;
    }
    heroFilms.innerHTML = films.sort((a, b) => a.episode_id - b.episode_id)
      .map((film) => `<li>Episode ${film.episode_id}: ${film.title}</li>`).join('');
  }

  getHero(INITIAL_INDEX);
})();