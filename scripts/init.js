"use strict";
var sidebar;
$(function(){

    //Initialize icheck

    $(".icheck").each(function(){

        var boxcolor = 'grey';

        if($(this).hasClass('icheck-green')) {
            boxcolor = 'green';
        }
        if($(this).hasClass('icheck-red')) {
            boxcolor = 'red';
        }
        if($(this).hasClass('icheck-blue')) {
            boxcolor = 'blue';
        }
        if($(this).hasClass('icheck-aero')) {
            boxcolor = 'aero';
        }

        if($(this).hasClass('icheck-orange')) {
            boxcolor = 'orange';
        }
        if($(this).hasClass('icheck-yellow')) {
            boxcolor = 'yellow';
        }
        if($(this).hasClass('icheck-pink')) {
            boxcolor = 'pink';
        }
        if($(this).hasClass('icheck-purple')) {
            boxcolor = 'purple';
        }
        if($(this).hasClass('icheck-grey')) {
            boxcolor = 'grey';
        }

        $(this).iCheck({
            checkboxClass: 'icheckbox_square-'+boxcolor,
            radioClass: 'iradio_square-'+boxcolor,

        });
    });
    // Adjust Form

    $('.md-form-group').each(function(){
        $(this).find('input').on('focus',function(){
            $(this).siblings('label').addClass('small');
        })
        $(this).find('input').blur(function(){
            if($(this).val()==""){
               $(this).siblings('label').removeClass('small');
             }

        })
    })


    // Initialize Ripple EFfect

    $('.btn, .main-nav > li > a, .navbar-nav > li > a').on('click', function (event) {

      var $div = $('<div/>');
      var offset = $(this).offset();
      var xPos = event.pageX - offset.left;
      var yPos = event.pageY - offset.top;



      $div.addClass('ripple-effect');
      var ripple = $(".ripple-effect");

      ripple.css("height", $(this).height());
      ripple.css("width", $(this).height());
      $div
        .css({
          top: yPos - (ripple.height()/2),
          left: xPos - (ripple.width()/2),
          background: $(this).data("ripple-color")
        })
        .appendTo($(this));

      window.setTimeout(function(){
        $div.remove();
      }, 2000);

    });


    // Initialize Bootstrap Switch

    $(".bootstrap-switch").bootstrapSwitch();



    // Initialize Scrolling

    $('.chat-messages').slimScroll({
        height: '100%',
        color: '#bbb',
        position: 'right',
        distance: '0px',
        start: 'bottom',
    });
    $(".slimScrollBar").hide()
    $('.conversations').slimScroll({
        height: '100%',
        color: '#bbb',
        position: 'right',
        distance: '0px',
        start: 'top',
    });
    $(".slimScrollBar").hide()

    // Initialize Sidebar and Topbar Fixed States

    $('.fixed-sidebar-toggle').attr('checked',true);
    $('.fixed-sidebar-toggle').bootstrapSwitch('state',true,true);
    $('.fixed-topbar-toggle').attr('checked',true);
    $('.fixed-topbar-toggle').bootstrapSwitch('state',true,true);

    $('.fixed-topbar-toggle').on('switchChange.bootstrapSwitch',function(e) {
        var ele = $(this);

        if(ele.is(':checked')) {
            $('#topbar').addClass('navbar-fixed-top');
            $('body').addClass('fixed-navbar-top');
            $('.fixed-sidebar-toggle').attr('disabled',false);
            $('.fixed-sidebar-toggle').bootstrapSwitch('disabled',false);

        } else {
            $('.fixed-sidebar-toggle').attr('checked',false);
            $('.fixed-sidebar-toggle').bootstrapSwitch('state',false);
            $('.fixed-sidebar-toggle').attr('disabled',true);
            $('.fixed-sidebar-toggle').bootstrapSwitch('disabled',true);
            $('#topbar').removeClass('navbar-fixed-top');
            $('body').removeClass('fixed-navbar-top');
            $('.page-wrapper').removeClass('fixed-navbar-top');
        }
    });

    $('.fixed-sidebar-toggle').on('switchChange.bootstrapSwitch',function(e) {
        var ele = $(this);

        if(ele.is(':checked')) {
            $('#sidebar').addClass('sidebar-fixed');
            sidebar.enableScrolling();
        } else {
            $('#sidebar').removeClass('sidebar-fixed');
            sidebar.disableScrolling();
        }
    })

    //
})
