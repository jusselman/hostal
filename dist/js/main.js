$(document).ready(function() {
  $('.hamburger').on('click', function() {
    $('.nav-responsive').toggleClass('show');
  });
});



// RESERVATION SECTION //
(function($){
	function floatLabel(inputType){
		$(inputType).each(function(){
			var $this = $(this);
			// on focus add cladd active to label
			$this.focus(function(){
				$this.next().addClass("active");
			});
			//on blur check field and remove class if needed
			$this.blur(function(){
				if($this.val() === '' || $this.val() === 'blank'){
					$this.next().removeClass();
				}
			});
		});
	}
	// just add a class of "floatLabel to the input field!"
	floatLabel(".floatLabel");
})(jQuery);



// SMOOTH SCROLLING JQUERY //
//
// $(document).ready(function() {
//
//   var scrollLink = $('.scroll');
//
//   // Smooth scrolling
//   scrollLink.click(function(event) {
//     event.preventDefault();
//     $('body,html').animate({
//       scrollTop: $(this.hash).offset().top
//     }, 1250 );
//   });
//
//   // Active link switching
//   $(window).scroll(function() {
//     var scrollbarLocation = $(this).scrollTop();
//
//     scrollLink.each(function() {
//
//       var sectionOffset = $(this.hash).offset().top;
//
//       if ( sectionOffset <= scrollbarLocation ) {
//         $(this).parent().addClass('active');
//         $(this).parent().addClass('active::before');
//         $(this).parent().siblings().removeClass('active');
//         $(this).parent().siblings().removeClass('active::before');
//       }
//     })
//   })
// })


// NAVBAR CHANGE //



// SMOOTH SCROLLING JQUERY //
var $root = $('html, body');

$('a[href^="#"]').click(function() {
    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
    }, 1250, function () {
        window.location.hash = href;
    });

    return false;
});

// $(document).ready(function() {
//
//   var scrollLink = $('.scroll');
//
//   // Smooth scrolling
//   scrollLink.click(function(event) {
//     event.preventDefault();
//     $('body,html').animate({
//       scrollTop: $(this.hash).offset().top
//     }, 1250 );
//   });
//
// });
//
// // active link switch //
//
// $(window).scroll(function() {
//   var scrollbarLocation = $(this).scrollTop();
//
//   scrollLink.each(function() {
//
//     var sectionOffset = $(this.hash).offset().scrollTop
//     if (sectionOffset <= scrollbarLocation) {
//       $(this).parent().addClass('active');
//       $(this).parent().siblings().removeClass('active');
//     }
//   })
// });


// Change navbar on scroll //
$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
      if(scroll>80) {
        $('#nav').css('height', '60px');
        $('#nav').css('width', '100%');
        $('#mainNav').css('margin', "-10px auto");
      }
      else {
        $('#nav').css('height', '80px');
        $('#nav').css('width', '60%');
        $('#mainNav').css('margin', "25px auto");


      }
  })
})


// Modal for attractions sections //
var modal = document.getElementById('modalClick');
var modalContent = document.getElementById('modalContent');

modal.addEventListener('click', openModal);

window.addEventListener('click', outsideClick);


function openModal() {
  modalContent.style.display = 'block';
}

function outsideClick(e) {
  if(e.target == modal) {
  modal.style.display = 'none';
}
}
