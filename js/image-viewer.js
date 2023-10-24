//get a DOM reference to the main image
let heroImage = document.getElementById("hero-image");

// reference to the text links so we get the user intereacting with them
//get a DOM ref to the collection of menu items
let links = document.getElementsByClassName("menu-item");
console.log(links)

// start with a selected index - we got 5 so it goes from '0 to 4' not '1 to 5'
//set inital selection index
let selectedIndex = 4;

//load the initial image into heroimage
heroImage.src = links[selectedIndex].dataset.image;
//listen to the transition end
heroImage.ontransitionend = onTransitionEnd; //part 2 end of transition

//0 is the first in the list so u are selecting first in the list however I am now changing it to 4 as I want to show the rabbit.

//must be 0 \/
//loop through all of the menu items
for (let i = 0; i < links.length; i++) {
    //assign the click handler for each
    links[i].onclick = handleClick;
}
//click handler \/
//find the index of the item that had just been clicked
function handleClick(event) {
    //get the index of the clicked item
    let newIndex = returnItemIndex(links, event.currentTarget)
    //if the index is different from the existing selection
    if(newIndex !=selectedIndex){
        //update the index selection
    selectedIndex = newIndex;
    //fade out the heroimage (require css transition)
    heroImage.style.opacity = 0;
    }
    //complexity of events

    //'this' referes to the current scope - her ethis refers to the whole document.
    // heroImage.src = this.dataset.image; (in some contexts 'this' doesn't work)

    //get rid of this \/ so that I can create a fade out effect.
    // heroImage.src = event.currentTarget.dataset.image;
}
//handle of end of transition
//part 1 ending transition
function onTransitionEnd(){
    //update the heroimage with the newly selected image
    //dataset.image is how we acces the custom HTML attribute 'data-image'
    //to get that data we put data set - links access the div
    heroImage.src = links[selectedIndex].dataset.image;
    //revert the opacity of the heroImage to make it visible
    heroImage.style.opacity =1;

}
//find the index of an item in given collection.
 //fade out effect
function returnItemIndex(collection, item){
    //loop through the collection
    for(let i = 0; i < collection.length; i++){
        //if the current item == the item we are looking for, a match was found!
        //the loop will only run until the index is found
        if(collection[i]== item){
            //pass back the index of the found item
            return i;
        }
    }
    //if the item was not found, this error message will execute.
    console.error("ERROR: Cannot find item in collection")
}
