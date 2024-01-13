// No seu arquivo smooth-scroll.js

$(document).ready(function () {
    // Adicionar rolagem suave para os links de navegação
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800); // Ajuste a velocidade da animação conforme necessário
        }
    });
});
