$(function(){
    $('.panel .panel-collapse-toggle').click(function(e){

        var panels = $(this).parents('.panel');
        var panel = $(panels[0]);
        e.preventDefault();
        if(panel.hasClass('panel-collapsed')) {
            panel.removeClass('panel-collapsed');
        } else {
            panel.addClass('panel-collapsed');
        }
    })
    $('.panel .panel-action-fullscreen').click(function(e){

        var panels = $(this).parents('.panel');
        var panel = $(panels[0]);
        e.preventDefault();
        if(panel.hasClass('panel-fullscreen')) {
            panel.removeClass('panel-fullscreen');
        } else {
            panel.addClass('panel-fullscreen');
        }
    })
})
