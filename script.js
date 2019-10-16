//Techdegree Project 3
//Interactive Form JS

const $theme = $('#design');
const $color = $('#color option');

//Used jQuery to set focus to first text field
$('#name').focus();


$('#other-title').attr("hidden", true);

$('#design option:first-child').attr("hidden", true);

$('label[for="color"]').text("Please select a T-shirt theme:");

$color.attr("hidden", true);

$color.addClass('shirts');

$color.eq(0).attr('alt', 'js puns');
$color.eq(1).attr('alt', 'js puns');
$color.eq(2).attr('alt', 'js puns');
$color.eq(3).attr('alt', 'heart js');
$color.eq(4).attr('alt', 'heart js');
$color.eq(5).attr('alt', 'heart js');

// T-Shirt Info Section
$theme.on('change', function(event){
    $('.shirts').each(function (i, element) {
        if ($(element).attr('alt') === $(event.target).val()) {
            $(element).eq(i).attr("selected", true);
            $(element).attr("hidden", false);
        } else {
            $(element).removeAttr("selected");
            $(element).attr("hidden", true);            
        }
    });
});










