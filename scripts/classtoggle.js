"use strict";
$(function(){
    $('[data-toggle="class-set"]').each(function(){
        var ele = $(this);
        var classtoset = ele.attr('data-class-value');
        var classtoremove = ele.attr('data-class-remove');
        var target = ele.attr('data-target');
        ele.on('click', function(e){
            e.preventDefault();
            $(target).removeClass(classtoremove);
            $(target).addClass(classtoset);

        })
    })

    $('[data-toggle="class-toggle"]').each(function(){
        var ele = $(this);
        var classtotoggle = ele.attr('data-class-value');
        var target = ele.attr('data-target');
        ele.on('click', function(e){
            console.log('hi');
            e.preventDefault();
            $(target).toggleClass(classtotoggle);
        })
    });

    $('.dropdown-menu.no-click-exit').on('click', function(e) {
        e.stopPropagation();
    });


})
