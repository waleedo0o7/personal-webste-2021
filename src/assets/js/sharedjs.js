
function scrollToTop() {
    window.scrollTo(0, 0)
}

function cursorEffect() {


    var cursor = $(".cursor"),
        follower = $(".cursor-follower");

    var posX = 0,
        posY = 0;

    var mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                    left: posX - 12,
                    top: posY - 12
                }
            });

            TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    $(document).on("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });


    cursor.removeClass("active");
    follower.removeClass("active");

    $("a , .link").on("mouseenter", function () {
        cursor.addClass("active");
        follower.addClass("active");
    });

    $("a, .link").on("mouseleave", function () {
        cursor.removeClass("active");
        follower.removeClass("active");
    });

}

function resetCursor(){
    $(".cursor").removeClass("active");
    $(".cursor-follower").removeClass("active");
}



var controller = new ScrollMagic.Controller();

function introAnimation(){
    
	var introtl = new TimelineLite();
    
    introtl.fromTo('.introImage , .introImage-container' , 1 , {
        width : '0%',
    } , {
        width : '100%',
        ease: Back.easeOut.config(1.7),
        delay: 1
    })

    introtl.fromTo('section.intro .image div' , 0.3 , {
        width : '0',
        height : '0',
        opacity : 0,
    } , {
        width : '80px',
        height : '80px',
        opacity : 1
    })
    
    introtl.fromTo('.title' , 0.6 , {
        opacity : '0',
    } , {
        opacity : '1',
        ease: Power4.easeOut,
    })
    
}


function pageTransition(){
	
    var tl = new TimelineLite();

    tl.fromTo('.main-site-container' , 0 , {
        opacity : 1
    } , {
        opacity : 0
    })

    tl.fromTo('.page-transition' , 0.5 , {
        height : 0
    } , {
        height : '100%',
        ease: Circ.easeOut
    })

    tl.fromTo('.main-site-container' , 0 , {
        opacity : 0
    } , {
        opacity : 1,
        ease: Circ.easeOut
    })

    tl.fromTo('.page-transition' , 0.5 , {
        top : 0,
        height : '100%',
    } , {
        top : '100%',
        height : 0,
        ease: Circ.easeOut
    })
    window.scroll(0,0)
}


function fadeInScene(){

    $('.scence-container').each(function(){

        var testScene = new ScrollMagic.Scene({
            triggerElement : this,
            triggerHook  : 0.8
        })
        
        .setClassToggle(this , 'fade-in')
        // .addIndicators({
        //     colorTrigger : '#fff'
        // })
        .addTo(controller)

    })

}


function skills() {

    
    var skillstl = new TimelineLite();

    skillstl.fromTo('#skills h1', 1, {
        scale: 3,
        opacity: 0,
    } , {
        scale: 1,
        opacity: 1,
    } , 0)

    skillstl.fromTo('#skills h1', 1, {
        y : 0
    } , {
        y:'-200px'
    } , 1)

    skillstl.fromTo('#skills .items .item' , 1 , {
        scale : 0,
        opacity : 0,
        y:'0',
    } , {
        scale : 1,
        opacity : 1,
        y:'-200px',
    } , 1)


    // Create scrollmagic scene
    var parallaxScene = new ScrollMagic.Scene({
        triggerElement: '#skills', // <-- Use this to select current element
        triggerHook: 0.3,
        duration: '100%',
    })

    .setTween(skillstl)
    .setPin("#skills", {pushFollowers: true})
    // .addIndicators({
    //     name  : 'test'
    // }) // add indicators (requires plugin)
    .addTo(controller);
}

