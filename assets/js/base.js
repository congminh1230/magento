$(document).ready(function() {
    $('#bars').on('click', function() {
        $('#bars').hide();
        $('#time').show();
        $('.menu-table').fadeIn(500);
    })
    $('#time').on('click', function() {
        $('#bars').show();
        $('#time').hide();
        $('.menu-table').fadeOut(500);
    })
    // back to top
    $('#back-to-top').hide();
    $(window).on('scroll', function() {
        if($(this).scrollTop() >= 300 ) {
            $('#back-to-top').fadeIn(1000);
        }else {
            $('#back-to-top').fadeOut(1000);
        }
    })
    $('#back-to-top').on('click', function(){
        $('html,body').animate({
            "scrollTop" : 0,
        },2000)
    })
})
