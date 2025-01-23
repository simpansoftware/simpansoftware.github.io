var hasTouchScreen = false;

var UA = navigator.userAgent;
hasTouchScreen = (
    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
    /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
);

if (hasTouchScreen) {
    var elements = document.querySelectorAll('.rectangle, .rectangle2');
    elements.forEach(function(element) {
        element.style.width = '90%'; 
    });
}
