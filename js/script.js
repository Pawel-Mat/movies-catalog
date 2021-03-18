'use strict';

const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!', event);

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  clickedElement.classList.add('active');

  console.log('clickedElement:', clickedElement);
  const activeMovies = document.querySelectorAll('.posts .active');

  for(let activeMovie of activeMovies) {
    activeMovie.classList.remove('active');
  }
  const hrefAttribute = clickedElement.getAttribute('href');

  const activeMovie = document.querySelector(hrefAttribute);

  activeMovie.classList.add('active');
}

const optMovieSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML='';
  const movies = document.querySelectorAll(optMovieSelector);
  let html = '';

  for (let movie of movies) {

    const movieId = movie.getAttribute('id');
    const movieTitle = movie.querySelector(optTitleSelector).innerHTML;
    const linkHTML = '<li><a href="#' + movieId + '"><span>' + movieTitle + '</span></a></li>';
    html = html + linkHTML;
    titleList.innerHTML = html;
  }

  const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

}

generateTitleLinks();