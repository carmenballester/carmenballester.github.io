window.addEventListener('scroll', function() {

    buttons = document.querySelectorAll('.button');
    buttons.forEach(function(button) {
        if (window.scrollY > 0) {
            button.classList.add('shrink');
        } else {
            button.classList.remove('shrink');
        }
    });

    texts = document.querySelectorAll('.button a');
    texts.forEach(function(text) {
        if (window.scrollY > 0) {
            text.classList.add('shrink');
        } else {
            text.classList.remove('shrink');
        }
    });

});