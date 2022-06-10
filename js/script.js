// event listener for the entire window
window.addEventListener('keydown', function(e) {
    // select the event key which is pressed down
    const audio = document.querySelector(`audio[data-key="${e.which}"]`);
    // we want to select the actual key in the html to show the animation
    let key = document.querySelector(`div [data-key="${e.which}"]`);
    // conditional statement if no audio then retun 
    if (!audio) return;
    // rewind the time to the start
    audio.currentTime = 0;
    // play the sound already synced in html
    audio.play();
    // add the animation to the key when pressed down
    key.classList.add('playing');
});

function removeTransition(e) {
    // skip if it doesnt contain transform property
    if(e.propertyName !== 'transform') return;
    // on the button pressed remove playing when transition ends
    this.classList.remove('playing');
    console.log(e.propertyName);

}
// create a variable for all of the divs
const keys = document.querySelectorAll('.key');
// foreach loop to add the event listener to every div
keys.forEach(key => key.addEventListener('transitionend', removeTransition))