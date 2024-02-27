window.addEventListener('resize', function() {
    var rectangle = document.querySelector('.title-rectangle');
    var title = document.querySelector('.title-text');
    var subtitle = document.querySelector('.subtitle-text');
    var viewportWidth = window.innerWidth;
    var img = document.querySelector('.picture-wrapper img');

    if (rectangle !== null) {
        if (viewportWidth >= 620) {
            rectangle.style.top = (viewportWidth * 0.16) + 'px';
        } else {
            rectangle.style.top = viewportWidth * 0.14 + 'px';
        }
        rectangle.style.height = (viewportWidth / 16) + 'px';
    }

    if (img !== null) {
        img.style.borderRadius = (viewportWidth * 0.02) + 'px';
    }

    if (title !== null) {
        title.style.fontSize = (viewportWidth * 0.08) + 'px';
    }

    if (subtitle !== null) {
        subtitle.style.fontSize = 16 + viewportWidth * 0.01 + 'px';
    }

});

// Initial positioning when the page loads
window.dispatchEvent(new Event('resize'));
