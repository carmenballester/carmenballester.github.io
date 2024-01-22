window.addEventListener('scroll', function() {

    headers = document.querySelectorAll('.header_content');
    headers.forEach(function(header) {
        if (window.scrollY > 0) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });

    buttons = document.querySelectorAll('.menu_button');
    buttons.forEach(function(button) {
        if (window.scrollY > 0) {
            button.classList.add('shrink');
        } else {
            button.classList.remove('shrink');
        }
    });

    texts = document.querySelectorAll('.menu_button a');
    texts.forEach(function(text) {
        if (window.scrollY > 0) {
            text.classList.add('shrink');
        } else {
            text.classList.remove('shrink');
        }
    });

});