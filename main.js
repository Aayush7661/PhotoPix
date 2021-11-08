 $('.portfolio-item').isotope({
     itemSelectore: '.item',
     layoutMode: 'fitRows'
 });
 $('.portfolio-menu ul li').click(function() {
     $('.portfolio-menu ul li').removeClass('active');
     $(this).addClass('active');

     var selectore = $(this).attr('data-filter');
     $('.portfolio-item').isotope({
         filter: selectore
     });
     return false;
 });