$(function(){
    $('[data-toggle="class-set"]').each(function(){
        var ele = $(this);
        var classtoset = ele.attr('data-class-value');
        var classtoremove = ele.attr('data-class-remove');
        var target = ele.attr('data-target');
        ele.click(function(e){
            e.preventDefault();
            $(target).removeClass(classtoremove);
            $(target).addClass(classtoset);

        })
    })

    $('.dropdown-menu.no-click-exit').click(function(e) {
        e.stopPropagation();
    });


})
