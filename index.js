/*stack overflow saved my ass if this works*/

var hasTouchScreen = false;

if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
} 

if (hasTouchScreen) {
    var elements = document.querySelectorAll('.rectangle, .rectangle2');
    elements.forEach(function(element) {
        element.style.width = '90%'; 
    });
}
