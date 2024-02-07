window.addEventListener('resize', function() {
    var rectangle = document.querySelector('.title-rectangle');
    var text = document.querySelector('.title-text');
    var viewportWidth = window.innerWidth;

    if (viewportWidth >= 620) {
        rectangle.style.top = (viewportWidth*0.16) + 'px';
        rectangle.style.height = (viewportWidth/16) + 'px';

        text.style.fontSize = (viewportWidth*0.08) + 'px';
    }

    else {
        rectangle.style.top = (viewportWidth*0.105) + 'px';
        rectangle.style.height = (viewportWidth/16) + 'px';

        text.style.fontSize = (viewportWidth*0.08) + 'px';
    }

  });

// Initial positioning when the page loads
window.dispatchEvent(new Event('resize'));