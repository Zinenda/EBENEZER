$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    $('.tabs').tabs();
    $('.materialboxed').materialbox();
    $('.fixed-action-btn').floatingActionButton({
        hoverEnabled: false
    });
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