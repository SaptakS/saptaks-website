var $introStroke = $('#asimov .stroke');
var $introH1 = $('#asimov h1');
var $introH2 = $('#asimov h2');
	

	// anim intro
var animIntroduction = window.animIntroduction = function(){
    $introH1.delay(
        250
        ).queue(function(){
            $introH1.shuffleLetters({
                "text": $(this).attr("data-title"),
                "type": "symbol",
                "step": 20,
                "fps": 40
            });
            $introStroke.addClass('anim');
    });

    $introH2.delay(
        1000
        ).queue(function(next){
            $introH2.shuffleLetters({
                "text": $(this).attr("data-title"),
                "type": "symbol",
                "step": 30,
                "fps": 40
            });

            
    });
};

//responsive nav
function responsiveNav(){
    var nav = $('nav');
    var li = nav.find('li');
    var li_a = li.find('a');
    var ctrl = $('nav a.responsive_ctrl');
    
    function resize_nav(){
        if($(window).width() <= 700){
            li_a.css('line-height', $(window).height() / li.length +'px' );
        }else{
            li_a.attr('style','');
        } 
    }
    resize_nav();
    
    
    ctrl.click(function(){  nav.toggleClass('opened');  });
    li_a.click(function(){  if($(window).width() <= 700) nav.toggleClass('opened');    });
    li.filter('.closeNav').click(function(e){ e.preventDefault(); });
    
    $(window).resize( resize_nav );
}