/*
function showMatchModal(){

}

$(document).ready(function () {
    var foodImage = $("#foodImage");
    foodImage.click(){
        showMatch
    }
    $("#foodImage").bind('click', function () {
        showMatchModal();
    })
});*/
$(document).ready(function(){
    $("#modal-trigger").click(function(){
        $("#match-modal").modal("show");
    });
});