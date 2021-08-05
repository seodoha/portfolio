'use strict';

$(document).ready(function(){
    
    setTimeout(function(){
        $('body').addClass('loading--hide');
        $('html, body').animate({scrollTop: 0}, 'fast');
        
        var typed = new Typed('#typed', {
            stringsElement: '#typed-strings',
            typeSpeed: 120,
            backSpeed: 90,
            startDelay: 1000,
            loop: false,
            loopCount: Infinity,
        });

        toggleLoop(typed);
        $('.hd-inner > #gnb > li').eq(0).find('a').addClass('on');
    }, 4000);
    
    $('#visual').css('height', $(window).height());
    
    $('.tab > li > a').on('click', function(e){
        e.preventDefault();
        var index = $(this).parent().index();
        
        if(!$(this).parent().is('.active')) {
            $('.tab > li').removeClass('active');
            $(this).parent().addClass('active');
            
            $('.con-tab > li').removeClass('active');
            $('.con-tab > li').eq(index).addClass('active');
        }
    });
    
    
    var posi01 = $('.arti01').offset().top - 50;
    var posi02 = $('.arti02').offset().top - 50;
    
    $('.hd-inner > #gnb > li > a').on('click', function(e){
        e.preventDefault();
        var index = $(this).parent().index();    
        
        if(index == 0) {
            $('html, body').animate({scrollTop: 0}, '7000');
        } else if (index == 1) {
            $('html, body').animate({scrollTop: $('.arti01').offset().top}, '7000');
        } else {
            $('html, body').animate({scrollTop: $('.arti02').offset().top}, '7000');
        }
        
    });
    
    $('.modal_nav > ul > li > a').on('click', function(e){
        e.preventDefault();
        var index = $(this).parent().index();    
        
        if(index == 0) {
            $('html, body').animate({scrollTop: 0}, '7000');
        } else if (index == 1) {
            $('html, body').animate({scrollTop: $('.arti01').offset().top}, '7000');
        } else {
            $('html, body').animate({scrollTop: $('.arti02').offset().top}, '7000');
        }
        
        $('.mo-mbtn').trigger('click');
    });
    
    
    
    $(window).scroll(function(e){
        var scrollTop = $(this).scrollTop();
        animateContents(scrollTop);

        if (scrollTop >= posi01) {
            $('#visual .typeing').addClass('not');
            $('header').addClass('sticky');

            $('#gnb > li > a').removeClass('on');
            $('#gnb > li').eq(1).find('a').addClass('on');

            if(scrollTop >= posi02) {
                $('#gnb > li > a').removeClass('on');
                $('#gnb > li').eq(2).find('a').addClass('on');
            } 

        } else {
            $('#visual .typeing').removeClass('not');
            $('#gnb > li > a').removeClass('on');
            $('#gnb > li').eq(0).find('a').addClass('on');
        }
    });
    
    $('.pop-btn').on('click', function(e){
        e.preventDefault();
        var index = $(this).closest('.work-box').parent().index();
        
        $('.pop-list > li').eq(index).addClass('opened');
        scrollDisable();
    });
    
    $('.pop-close').on('click', function(e){
        e.preventDefault();
        scrollAble();
        $(this).closest('li').removeClass('opened');
    });
    
    $('.guide').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: $('.arti01').offset().top}, '7000');
    });
    
    $('.mo-mbtn').on('click', function(e){
        e.preventDefault();
        
        if(!$(this).closest('header').is('.opened')) {
            $('header').addClass('opened');
            scrollDisable();
        } else {
            $('header').removeClass('opened');
            scrollAble();
        }
    });
    
});

function animateContents(scrollTop){
    if($('.arti01').offset().top-450 < scrollTop){
        $('.about-box').addClass('ani');
    } 
    if($('.arti02').offset().top-450 < scrollTop){
        $('.work-list').addClass('ani');
    } 
}


function scrollDisable() {
    $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
    });
}

function scrollAble() {
    $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
}

function toggleLoop(typed) {
    if (typed.loop) {
        typed.loop = false;
    } else {
        typed.loop = true;
    }
}