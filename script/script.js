$('.busy').parallax({imageSrc: './img/parallax/build-background.jpg',
speed: 0.1});
$('.about-items > div').on('click', function(){
    $(this).children('.about-icon').toggleClass('active');
    $(this).parent('.about-items').toggleClass('toggleBg');
    $(this).next('p').slideToggle(400);
})
$('.customers__content-items-flex').on('click', function(){
    $(this).parent('.customers__content-items').toggleClass('customers__content-items-toggle');
    $(this).children('.customers__content-item-title').toggleClass('customers__content-item-title-toggle');
    $(this).children('.customers__content-svg').children('path').toggleClass('customers__content-blue-img');
    $(this).next('p').slideToggle(400);
})
$('.modal').on('click', function(e){
    if($(e.target).closest('.form-modal').length==0){
        $(this).fadeOut();
    }
})
$('.form-modal-close').on('click', function(){
    $(this).parents('.modal').fadeOut();
})
$('#button-modal').on('click', function(){
    $('.modal').fadeIn();
})
$('.carrousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    pauseOnHover: true,
    adaptiveHeight: true,
})
$(window).scroll(function(){
    if($(this).scrollTop() > 500){
        $('#button-up').fadeIn();
    }else{
        $('#button-up').fadeOut();
    }
})
$('#button-up').on('click', function(){
    $('html, body').animate({scrollTop: 0}, 1000);
})
$('#home').on('click', function(e){
    e.preventDefault();
    let headerHeight = $('.header').height();
    $('html, body').animate({scrollTop: $('#manage').offset().top-headerHeight}, 500);
    document.getElementById("checkbox").checked=false;
})
$('#stories').on('click', function(e){
    e.preventDefault();
    let headerHeight = $('.header').height();
    $('html, body').animate({scrollTop: $('#understand').offset().top-headerHeight}, 500);
    document.getElementById("checkbox").checked=false;
})
$('.understand-grid-items-setting').on('click', function(e){
    e.preventDefault();
})
$('#form-modal-button').on('click', function(e){
    e.preventDefault();
    let firstName = $('#first-name-input').val().trim();
    let lastName = $('#last-name-input').val().trim();
    let email = $('#email-input').val().trim();
    let date = $('#date-input').val().trim();
    if(firstName == ""){
        $('#first-name-input-error').text('Please enter your first name correctly!');
        return false
    }else if(lastName == ""){
        $('#last-name-input-error').text('Please enter your last name correctly!');
        return false
    } else if (email == ""){
        $('#email-input-error').text('Please enter your e-mail correctly!');
        return false
    } else if (date == ""){
        $('#date-input-error').text('Please enter your birth date correctly!');
        return false
    }
    $.ajax({
        url: 'ajax/telegram.php',
        type: 'POST',
        cache: false,
        data: {'firstName': firstName, 'lastName': lastName, 'email': email, 'date': date}, 
        dataType: 'html',
        beforeSend: function(){
            $('#form-modal-button').prop('disabled', true)
        },
        success: function(){
            $('.modal-registration').fadeIn();
            $('#first-name-input').val('');
            $('#last-name-input').val('');
            $('#email-input').val('');
            $('#date-input').val('');
            $('#first-name-input-error').text('');
            $('#last-name-input-error').text('');
            $('#email-input-error').text('');
            $('#date-input-error').text('');
            $('#form-modal-button').prop('disabled', false)
        }
    })
})
$('.modal-registration-close').on('click', function(){
    $(this).parents('.modal-registration').fadeOut();
})