$(document).ready(function(){
    $("#sameAddress").change(function(){
        if($(this).prop('checked')){
            $("#home").val($("#bill").val());
            $("#home").prop("disabled",true);
        }
        else{
            $("#home").val("");
            $("#home").prop("disabled",false);
        }
    });

});