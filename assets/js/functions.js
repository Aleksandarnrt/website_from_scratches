$(function(){
    smoothScrool(300);
    workAnimation();
    workLoad();
    clientStuff();
})

function smoothScrool(duration){
    $('a[href^="#"]').on('click', function(event){
        var target = $( $(this).attr('href'));
        if(target.length){
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    })
}


function workAnimation(duration){
    $('.thumb-unit').on('click',function(event){
        
            $('.work-belt').css('left','-100%')
            $('.work-container').show();
        
    });
    
    $('.work-return').on('click',function(event){
        
            $('.work-belt').css('left','0%');
            $('.work-container').hide(500);
        
    });
    
}

function workLoad(){
    $.ajaxSetup({cache: true});
    $('.thumb-unit').on('click',function(event){
        
        var $this= $(this),
            newFolder= $this.data('folder'),
            newTitle= $this.find('strong').text(),
            spinner= '<div class="loader">Loading...</div>',
            newHtml= '../work/'+ newFolder +'.html';
        
        $('.project-load').html(spinner).load(newHtml);
        $('.work-title').text(newTitle);
        
    });
    
}

function clientStuff(){
    
    $(".client-unit").first().addClass("active");
    $(".client-logo").first().addClass("active-client");
    $(".clients-mobile-nav span").first().addClass("active-client");
    $(".client-logo, .clients-mobile-nav span").on('click',function(event){
        var $this= $(this),
            $siblings= $this.parent().children(),
            position= $siblings.index($this);
    $(".client-unit").removeClass("active").eq(position).addClass("active");
    
    $siblings.removeClass("active-client");
    $this.addClass("active-client");    
       
    });
    
    $(".control-next").on('click',function(event){
        var $this= $(this),
            currentlyActiveCl= $(".clients-belt").find(".active"),
            position= $(".clients-belt").children().index(currentlyActiveCl),
            clientNum= $(".client-unit").length;
        
        
        if(position<clientNum-1){
            $(".active-client").removeClass("active-client").next().addClass("active-client").fadeIn(900);
            $(".active").removeClass("active").next().addClass("active").fadeIn(900);
        }else{
            $(".client-unit").removeClass("active").first().addClass("active");
            $(".client-logo").removeClass("active-client").first().addClass("active-client");
        }
    });
    
    
    $(".control-prev").on('click',function(event){
        var $this= $(this),
            currentlyActiveCl= $(".clients-belt").find(".active"),
            position= $(".clients-belt").children().index(currentlyActiveCl),
            clientNum= $(".client-unit").length;
        
        
        if(position=== 0){
            $(".client-unit").removeClass("active").last().addClass("active");
            $(".client-logo").removeClass("active-client").last().addClass("active-client");
        }else{
            
            $(".active-client").removeClass("active-client").prev().addClass("active-client");
            $(".active").removeClass("active").prev().addClass("active");
        }
    })
    
    
    
}

$(window).ready(function(){
    
    setTimeout(function(){
              $('.logo, nav, h1, .kicker').addClass('is-showing'); 
          },150);
    
});

$(window).scroll(function(){
    
    var wScroll= $(this).scrollTop();
    console.log(wScroll);
    
    
    if(wScroll> $('.work-belt').offset().top-($(window).height()/1.2)){
        $('.thumb-unit').each(function(i){
            
          setTimeout(function(){
              $('.thumb-unit').eq(i).addClass('is-showing'); 
          },150*(i+1));
        });
    }
    
    if(wScroll> ($('#contact').offset().top-($(window).height()/1.2)+300)){
        
            
          setTimeout(function(){
              $('.social-links, .biglink').addClass('is-showing'); 
          },150);
        
    }
    
    if(wScroll> ($('.skills-lockup').offset().top-($(window).height()/1.2))){
         $('.skill-unit').each(function(i){
            
          setTimeout(function(){
              $('.skill-unit').eq(i).addClass('is-showing'); 
          },150*(i+1));
        });
    }
    
    if(wScroll> ($('#contact-form').offset().top-($(window).height()/1.2))){
        
            
          setTimeout(function(){
              $('form').addClass('is-showing');  
          },150);
        
    }
    
    
});