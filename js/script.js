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
  optTitleListSelector = '.titles',
  optTagsSelector = '.post-tags .list';

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

function generateTags(){
  /* find all articles */
  // const tagsList = document.querySelector(optMovieSelector);
  // tagsList.innerHTML = '';
  const movies = document.querySelectorAll(optMovieSelector);
  
  /* START LOOP: for every article: */
  for (let movie of movies) {
    /* find tags wrapper */
    let tagsWrapper = movie.querySelector(optTagsSelector); 
    
    /* make html variable with empty string */
    let html = '';
  /* get tags from data-tags attribute */
    const tagData = movie.getAttribute('data-tags');
    /* split tags into array */
    const tagsArray = tagData.split(' ');
    
    /* START LOOP: for each tag */
    for (let tag of tagsArray) {
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#' + tag + '" >' + tag +' &nbsp</a></li>' 
      
      /* add generated code to html variable */
      html = html + linkHTML;
      // console.log(html);
    }
    /* END LOOP: for each tag */
    
    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;
  /* END LOOP: for every article: */
  }
}

generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */

  /* make new constant named "clickedElement" and give it the value of "this" */

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  /* make a new constant "tag" and extract tag from the "href" constant */

  /* find all tag links with class active */

  /* START LOOP: for each active tag link */

    /* remove class active */

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */

    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();