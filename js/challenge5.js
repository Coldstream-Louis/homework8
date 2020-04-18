$('document').ready(function(){
    let msg = "Hover over an image below.";
    $('img').mouseover(function(){
        $('#display').css("background-image","url('"+$(this).attr('src')+"')");
        $('#display').html($(this).attr('alt'));
    });

    $('img').mouseleave(function(){
        $('#display').css("background-image","url('')");
        $('#display').html(msg);
    });

    $('img').on('focus',function(){
        $('#display').css("background-image","url('"+$(this).attr('src')+"')");
        $('#display').html($(this).attr('alt'));
    });

    $('img').on('blur',function(){
        $('#display').css("background-image","url('')");
        $('#display').html(msg);
    });
});