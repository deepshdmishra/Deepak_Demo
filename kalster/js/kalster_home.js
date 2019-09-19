//$(document).ready(function(){
function left_img()
{
var total_width = $(document).width();
if (total_width <= 600)
{
//$('.section_graphic').css('overflow','scroll');
//$('.section_graphic').scrollLeft('120');
        var left = $(document).width()/3.1;
$('.section_graphic').css('overflow','scroll');
$('.section_graphic').scrollLeft(left);
}
}

function show_bar()
{
$('.mobile_menu_bar').show('slide', {direction: 'right'}, 'slow');
//alert('activated');
// stopping scroll
$('body').css('overflow','hidden');
}

function hide_bar()
{
$('.mobile_menu_bar').hide('slide', {direction: 'right'}, 'slow');
//alert('activated');
$('body').css('overflow','scroll');
}

function mobile_contact()
{
$('.mobile_menu_bar').css('display','none');
$('body').css('overflow','scroll');
    $('html,body').animate({
        scrollTop: $("#sec_3.section_subtext").offset().top},
        2000);
}
