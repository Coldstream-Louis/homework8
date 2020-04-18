$('document').ready(function(){
    $('#ch3form').on('submit', function(){
        if (($('input[name = "gradDate"]:checked').val() == null) && ($('input[name="standing"]:checked').val() == null)) {
            alert("You must pick a standing and a graduation date!");
            return false;
        }
        if (($('input[name = "gradDate"]:checked').val() == null) && ($('input[name="standing"]:checked').val() != null)) {
            alert("You must pick a graduation data as well!");
            return false;
        }
        if (($('input[name = "gradDate"]:checked').val() != null) && ($('input[name="standing"]:checked').val() == null)) {
            alert("You must pick a standing as well!");
            return false;
        }
        else{
            return true;
        }
    });

});