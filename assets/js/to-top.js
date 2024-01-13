$(document).ready(function(){
    // Mostrar/ocultar botão conforme a posição de rolagem
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1) {
            $('#back-to-top-btn').fadeIn();
        } else {
            $('#back-to-top-btn').fadeOut();
        }
    });

    // Rolar suavemente ao topo
    $('#back-to-top-btn').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});