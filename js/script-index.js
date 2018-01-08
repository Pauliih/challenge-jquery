$(document).ready( function(){

  $('.js-back').hide();

  printNews();

  //La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
  renderHighlightedRecipes(recipesArray);

  renderActivities(activities);

  // Creo 
  
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
  for (var i = 0; i < recipesArray.length; i++) {
    if (recipesArray[i].highlighted === true) {
      renderRecipe(recipesArray[i])
    } 
  }
  console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
  $('.list-recipes').append('<a class="item-recipe" href="#">' + 
  '<span class="attribution">' + 
    '<span class="title-recipe">' + recipe.title +'</span>' +
    '<span class="metadata-recipe">' +
      '<span class="author-recipe">' + recipe.source.name + '</span>' +
      '<span class="bookmarks-recipe">' +
        '<span class="icon-bookmark"></span>' + 
      '</span>' +
    '</span>' +
  '</span>' +

  '<img src="img/recipes/640x480/' + recipe.name + '.jpg" />' +
'</a>');
  console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
  var cont = 0;
  for (var i = 0; i < activitiesArray.length; i++) {
    renderActivity(activitiesArray[i]);
    cont++;
  }
  if (cont > 0) {
    $('.wrapper-message').hide();
    for (var i = 0; i < activitiesArray.length; i++) {
    $('.list-activities').append('<a href="#" class="item-activity">' +
    '<span class="attribution"><span class="avatar">' +
       '<img src="' + activities[i].userAvatar + '" class="image-avatar"></span>' +      
     '<span class="meta">' +
       '<span class="author">' + activities[i].userName + '</span> made ' +
       '<span class="recipe">' + activities[i].recipeName + '</span>: ' + activities[i].text + 
       '<span class="location">&mdash; ' + activities[i].place + '</span>' +
     '</span> </span>' +
     '<div class="bg-image" style="background-image: url(' + activities[i].image + ');"></div></a>'
    );
    }
  }
  console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
  
}

function printNews() {
  $('.callout-news p').text('NUEVAS RECETAS');
}