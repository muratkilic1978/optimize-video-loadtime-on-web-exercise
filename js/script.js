//initialized a new rellax object
const rellax = new Rellax('.rellax');

// function that is enabled on scrolling
window.onscroll = function() {
var audIst = document.getElementById("audioIstanbul");
var audFir = document.getElementById("audioFirenze");
var audPa = document.getElementById("audioParis");

var istanbulArea = document.getElementById("istanbul");
var parisArea = document.getElementById("paris");
var firenzeArea = document.getElementById("firenze");
    
var videoIst = document.getElementById("videoIstanbul");
var offsetTop = videoIst.getBoundingClientRect().top;
var offsetBottom = videoIst.getBoundingClientRect().bottom;
    

    if( offsetTop <= 840 && offsetTop > -240) {
        videoIst.play();
    } else if ( offsetBottom < 250 || offsetBottom > 1390) {
        videoIst.pause();
    }
    
    if ( parisArea.getBoundingClientRect().top > 585 || parisArea.getBoundingClientRect().bottom < 58 )
    {
        audPa.pause();
    } else
    {
        audPa.play();
    }
    
    if ( istanbulArea.getBoundingClientRect().top > 685 || istanbulArea.getBoundingClientRect().bottom < 58 )
    {
        audIst.pause();
    } else
    {
        audIst.play();
    }
    
    if ( firenzeArea.getBoundingClientRect().top > 585 || firenzeArea.getBoundingClientRect().bottom < 58 )
    {
        audFir.pause();
    } else
    {
        audFir.play();
    }
      
}


/** Scroll to top button implementation in vanilla JavaScript (ES6 - ECMAScript 6) **/

let intervalId = 0; // Needed to cancel the scrolling when we're at the top of the page
const $scrollButton = document.querySelector('.scroll'); // Reference to our scroll button

function scrollStep() {
    // Check if we're at the top already. If so, stop scrolling by clearing the interval
    if (window === 0) {
        clearInterval(intervalId);
    }
    window.scroll(0, window - 50);
}

function scrollToTop() {
    // Call the function scrollStep() every 16.66 millisecons
    intervalId = setInterval(scrollStep, 41.66);
}

// When the DOM is loaded, this click handler is added to our scroll button
$scrollButton.addEventListener('click', scrollToTop);