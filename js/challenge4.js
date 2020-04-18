$('document').ready(function(){
    $('#challenge4_form').on('submit',function(){
        var validInput = true;
        var name = $("#name");
        var address = $("#addr");

        if (name.val()==""){
            $("#nameError").css("display","block");
            validInput = false;
        } else {
            $("#nameError").css("display","none");
        }

        if (address.val()==""){
            $("#addrError").css("display","block");
            validInput = false;
        } else {
            $("#addrError").css("display","none");
        }

        return validInput;
    });
});