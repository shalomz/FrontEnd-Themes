// SETTINGS PANEL
$('.btn-settings').on('click', function() {
    $(this).parent().toggleClass('active');
});

$('.switch-handle').on('click', function() {
    $(this).toggleClass('active');
    $('body').toggleClass('boxed');
});

$('.color-list div').on('click', function() {
    if ($(this).hasClass('active')) return false;
    $('link.color-scheme-link').remove();
    $(this).addClass('active').siblings().removeClass('active');
    var src = $(this).attr('data-src'),
        colorScheme = $('<link class="color-scheme-link" rel="stylesheet" />');
    colorScheme
        .attr('href', src)
        .appendTo('head');
});

$('.reset').on('click', function() {
    $(".bg-list div").removeClass('active');
    $(".switch-handle").removeClass('active');
    $(".color-list div").removeClass('active');
    $("body").removeClass('boxed');
    if ($(this).hasClass('active')) return false;
    $('link.color-scheme-link').remove();
    var src = $(this).attr('data-src'),
        colorScheme = $('<link class="color-scheme-link" rel="stylesheet" />');
    colorScheme
        .attr('href', src)
        .appendTo('head');
});

