// $(document).ready(function() {
//     $('.scroll-link').on('click', function(event){
//         event.preventDefault();
//         var sectionID = $(this).attr("data-id");
//         console.log(sectionID);
//         scrollToID('#' + sectionID, 750);
//     });
//     $('.scroll-top').on('click', function(event) {
//         event.preventDefault();
//         $('html, body').animate({scrollTop:0}, 1200);       
//     });
// });

$(document).ready(function () {
    $(".scroll-link").click(function () {
        var sectionID = $(this).attr("data-id");
        $('html, body').animate({
            scrollTop: $('#' + sectionID).offset().top - 100
        }, 1000);
    });
});