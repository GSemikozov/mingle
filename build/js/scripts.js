$(document).ready(function() {
    $('#grey').on('click', function() {
       $('#main-page').removeClass('blue-theme').addClass('grey-theme');
    });
    $('#blue').on('click', function() {
        $('#main-page').removeClass('grey-theme').addClass('blue-theme');
    });
});
