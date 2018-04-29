$(document).ready(function(){
    M.AutoInit();
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    $('.tabs').tabs({
        swipeable: true
    });
    $('.materialboxed').materialbox();
    $('.fixed-action-btn').floatingActionButton();
    $('.slider').slider();
    $('.parallax-container').parallax();
    $('.modal').modal();
    $('.tooltipped').tooltip();
    $('.collapsible').collapsible();

    var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });
});