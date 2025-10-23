/*=== Javascript function indexing hear===========

01.swiperActivation();
02.counterUp();
03.searchOption();
04.cartBarshow();
05.cartNumberIncDec();
06.niceSelect();
07.backToTopInit();
08.mesonaryTab();
09.vedioActivation();
10.stickyHeader();
11.progressAvtivation();
12.wowActive();
13.stickySidebar();
14.rtslessonToggle();
15.filterClickButton();
16.datePicker();
17.fileUpload();
18.countDownTimer();
19.modalOver();
20.sideMenu();
21.metismenu();
22.autoCompleate();
23.fitRows();
24.tabToggle();
25.shapeMove();


==================================================*/











(function ($) {
    'use strict';
    let device_width = window.innerWidth;

    var rtsJs = {
        m: function (e) {
            rtsJs.d();
            rtsJs.methods();
        },
        d: function (e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html')
        },
        methods: function (e) {
            rtsJs.swiperActivation();
            rtsJs.counterUp();
            rtsJs.searchOption();
            rtsJs.cartBarshow();
            rtsJs.cartNumberIncDec();
            rtsJs.niceSelect();
            rtsJs.backToTopInit();
            rtsJs.mesonaryTab();
            rtsJs.vedioActivation();
            rtsJs.stickyHeader();
            rtsJs.progressAvtivation();
            rtsJs.wowActive();
            rtsJs.stickySidebar();
            rtsJs.rtslessonToggle();
            rtsJs.filterClickButton();
            rtsJs.datePicker();
            rtsJs.fileUpload();
            rtsJs.countDownTimer();
            rtsJs.modalOver();
            rtsJs.sideMenu();
            rtsJs.metismenu();
            rtsJs.autoCompleate();
            rtsJs.fitRows();
            rtsJs.tabToggle();
            rtsJs.shapeMove();
            rtsJs.preloader();
        },

        swiperActivation: function () {

            $(document).ready(function () {
                var swiper = new Swiper(".mySwiper-category-1", {
                    slidesPerView: 6,
                    spaceBetween: 24,
                    loop: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                        clickable: true
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    },
                    breakpoints: {
                        1700: {
                          slidesPerView: 6,
                        },
                        1500: {
                          slidesPerView: 6,
                        },
                        1324: {
                          slidesPerView: 6,
                        },
                        1100: {
                          slidesPerView: 4,
                        },
                        800: {
                          slidesPerView: 3,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        640: {
                          slidesPerView: 2,
                        },
                        440: {
                          slidesPerView: 2,
                        },
                        320: {
                          slidesPerView: 1,
                        }
                    }
                });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".mySwiper-banner-1", {
                    slidesPerView: 1,
                    spaceBetween: 24,
                    effect: "fade",
                    speed: 1500,
                    loop: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                        clickable: true
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    },
                });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".mySwiper-banner-2", {
                    slidesPerView: 1,
                    spaceBetween: 24,
                    effect: "fade",
                    speed: 1500,
                    loop: true,
                    navigation: {
                        nextEl: ".swiper-button-next3",
                        prevEl: ".swiper-button-prev3",
                        clickable: true
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    },
                });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".mySwiper-testimonials-1", {
                    slidesPerView: 1,
                    spaceBetween: 24,
                    loop: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                        clickable: true
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    },
                });
            });
            $(document).ready(function(){
              var swiper = new Swiper(".swiper-container-h1", {
                  direction: "horizontal",
                  effect: "slide",
                  autoplay: false,
                  parallax: true,
                  speed: 1600,
                  rtl: true,
                  loop: true,
                  loopFillGroupWithBlank: !0,
                  keyboard: {
                    enabled: true,
                    onlyInViewport: true
                  },
                  scrollbar: {
                    el: ".swiper-scrollbar",
                    hide: false,
                    draggable: true
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  pagination: {
                      el: ".swiper-pagination",
                      type: "bullets",
                      clickable:"true"
                    }
                });
          });

            $(document).ready(function(){
              let defaults = {
                spaceBetween: 30,
                slidesPerView: 2
              };
              // call init function
              initSwipers(defaults);
              
              function initSwipers(defaults = {}, selector = ".swiper-data") {
                let swipers = document.querySelectorAll(selector);
                swipers.forEach((swiper) => {
                  // get options
                  let optionsData = swiper.dataset.swiper
                    ? JSON.parse(swiper.dataset.swiper)
                    : {};
                  // combine defaults and custom options
                  let options = {
                    ...defaults,
                    ...optionsData
                  };
              
                  //console.log(options);
                  // init
                  new Swiper(swiper, options);
                });
              }
              
            })

        },

        counterUp: function () {
          $('.counter').counterUp({
              delay: 10,
              time: 2000
          });
          $('.counter').addClass('animated fadeInDownBig');
          $('h3').addClass('animated fadeIn');
        },
        
        // search popup
        searchOption: function () {
            $(document).on('click', '#search', function () {
                $(".search-input-area").addClass("show");
                $("#anywhere-home").addClass("bgshow");
            });
            $(document).on('click', '#close', function () {
                $(".search-input-area").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
            $(document).on('click', '#anywhere-home', function () {
                $(".search-input-area").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
        },

        // cart bar show
        cartBarshow: function () {
            // Cart Bar show & hide
            $(document).on('click', '.cart-icon', function () {
                $(".cart-bar").addClass("show");
                $("#anywhere-home").addClass("bgshow");
            });
            $(document).on('click', '.close-cart', function () {
                $(".cart-bar").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
            $(document).on('click', '#anywhere-home', function () {
                $(".cart-bar").removeClass("show");
                $("#anywhere-home").removeClass("bgshow");
            });
        },

        cartNumberIncDec: function(){
            $(document).ready(function(){
              
            $(function () {
              $(".button").on("click", function () {
                var $button = $(this);
                var $parent = $button.parent();
                var oldValue = $parent.find('.input').val();
          
                if ($button.text() == "+") {
                  var newVal = parseFloat(oldValue) + 1;
                } else {
                  // Don't allow decrementing below zero
                  if (oldValue > 1) {
                    var newVal = parseFloat(oldValue) - 1;
                  } else {
                    newVal = 1;
                  }
                }
                $parent.find('a.add-to-cart').attr('data-quantity', newVal);
                $parent.find('.input').val(newVal);
              });
            });
            });
        },

        niceSelect: function(){
            $('.nice-select').each(function() {
  
                var select = $(this),
                    name = select.attr('name');
                
                select.hide();
                
                select.wrap('<div class="nice-select-wrap"></div>');
                
                var parent = select.parent('.nice-select-wrap');
                
                parent.append('<ul id=' + name + ' style="display:none"></ul>');
                
                select.find('option').each(function() {
              
                  var option = $(this),
                      value = option.attr('value'),
                      label = option.text();
                  
                  if (option.is(":first-child")) {
                    
                    $('<a href="#" class="drop">' + label + '</a>').insertBefore(parent.find('ul'));
                    
                  } else {
                    
                    parent.find('ul').append('<li><a href="#" id="' + value + '">' + label + '</a></li>');
                    
                  }
                  
                });
                
                parent.find('a').on('click', function(e) {
                  
                  parent.toggleClass('down').find('ul').slideToggle(300);
                  
                  e.preventDefault();
                
                });
                
                parent.find('ul a').on('click', function(e) {
                  
                  var niceOption = $(this),
                          value = niceOption.attr('id'),
                      text = niceOption.text();
                  
                  select.val(value);
                  
                  parent.find('.drop').text(text);
                  
                  e.preventDefault();
                
                });
                
              });
        },

        backToTopInit: function () {
          $(document).ready(function(){
          "use strict";
      
          var progressPath = document.querySelector('.progress-wrap path');
          var pathLength = progressPath.getTotalLength();
          progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
          progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
          progressPath.style.strokeDashoffset = pathLength;
          progressPath.getBoundingClientRect();
          progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
          var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
          }
          updateProgress();
          $(window).scroll(updateProgress);	
          var offset = 50;
          var duration = 550;
          jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
              jQuery('.progress-wrap').addClass('active-progress');
            } else {
              jQuery('.progress-wrap').removeClass('active-progress');
            }
          });				
          jQuery('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
          })
          
          
        });
  
        },

        mesonaryTab: function(){
          $(window).on("load", function() {

            var isotope = $(".main-isotop");
    
            if(isotope.length){
                var iso = new Isotope( '.filter', {
                    itemSelector: '.element-item',
                    layoutMode: 'fitRows',
                    fitRows: {
                      equalheight: true
                     }
                  });
                  
                  // filter functions
                  var filterFns = {
                    // show if name ends with -ium
                    ium: function( itemElem ) {
                      var name = itemElem.querySelector('.name').textContent;
                      return name.match( /ium$/ );
                    }
                  };
                  
                  // bind filter button click
                  var filtersElem = document.querySelector('.filters-button-group');
                  filtersElem.addEventListener( 'click', function( event ) {
                    // only work with buttons
                    if ( !matchesSelector( event.target, 'button' ) ) {
                      return;
                    }
                    var filterValue = event.target.getAttribute('data-filter');
                    // use matching filter function
                    filterValue = filterFns[ filterValue ] || filterValue;
                    iso.arrange({ filter: filterValue });
                  });
                  
                  // change is-checked class on buttons
                  var buttonGroups = document.querySelectorAll('.button-group');
                  for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
                    var buttonGroup = buttonGroups[i];
                    radioButtonGroup( buttonGroup );
                  }
                  function radioButtonGroup( buttonGroup ) {
                    buttonGroup.addEventListener( 'click', function( event ) {
                      // only work with buttons
                      if ( !matchesSelector( event.target, 'button' ) ) {
                        return;
                      }
                      buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
                      event.target.classList.add('is-checked');
                    });
                  }
            }
    
            if ($('.grid-masonary').length) {
    
                // image loaded portfolio init
                $('.grid-masonary').imagesLoaded(function() {
                    $('.portfolio-filter').on('click', 'button', function() {
                        var filterValue = $(this).attr('data-filter');
                        $grid.isotope({
                            filter: filterValue
                        });
                    });
                    var $grid = $('.grid-masonary').isotope({
                        itemSelector: '.grid-item-p',
                        percentPosition: true,
                        masonry: {
                            columnWidth: '.grid-item-p',
                        }
                    });
                });
            }
                    
            // portfolio Filter
            $('.portfolio-filter button').on('click', function(event) {
                $(this).siblings('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
                event.preventDefault();
            });
  
         });
    
        },

        vedioActivation: function () {
          $(document).ready(function(){
            $('.popup-youtube, .popup-video').magnificPopup({
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false
            });
          });
        },
        // sticky header activation

        stickyHeader: function (e) {
          $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('.header--sticky').addClass('sticky')
            } else {
                $('.header--sticky').removeClass('sticky')
            }
          })
        },

        progressAvtivation: function () {
          $(window).scroll(function () {
              if ($(this).scrollTop() > 250) {
                  var bars = document.querySelectorAll('.meter > span');
                  console.clear();
                  setInterval(function () {
                      bars.forEach(function (bar) {
                          var getWidth = parseFloat(bar.dataset.progress);
                          for (var i = 0; i < getWidth; i++) {
                              bar.style.width = i + '%';
                          }
                      });
                  }, 100);
              }
          })
        },

        wowActive: function () {
          new WOW().init();
        },

        stickySidebar: function () {
          if (typeof $.fn.theiaStickySidebar !== "undefined") {
            $(".rts-sticky-column-item").theiaStickySidebar({
              additionalMarginTop: 130,
            });
          }
        },

        rtslessonToggle: function () {
          $('#toggle-left-back').on('click', function () {
              $(this).toggleClass('sidebar-hide')
              $('.rts-lession-left').toggleClass('sibebar-none');
          })
        },
        
        filterClickButton: function () {
          
          $('.discover-filter-activation').on('click', function () {
              $(this).toggleClass('open');
              $('.default-exp-expand').slideToggle('400');
          })

          function slider() {
              $('#slider-range').slider({
                range: true,
                min: 10,
                max: 500,
                values: [100, 300],
                slide: function (event, ui) {
                    $('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
                }
            });
            $('#amount').val('$' + $('#slider-range').slider('values', 0) +
                " - $" + $('#slider-range').slider('values', 1));
          }


        },

        datePicker: function(){
          jQuery(document).ready(function () {
            jQuery('#datepicker').datepicker({
                format: 'dd-mm-yyyy',
                startDate: '+1d'
            });
          });
        },

        fileUpload : function(){
          var input = document.querySelectorAll("#custom-button");
          if(input.length){
            const realFileBtn = document.getElementById("real-file");
            const customBtn = document.getElementById("custom-button");
            const customTxt = document.getElementById("custom-text");
  
            customBtn.addEventListener("click", function() {
              realFileBtn.click();
            });
  
            realFileBtn.addEventListener("change", function() {
              if (realFileBtn.value) {
                customTxt.innerHTML = realFileBtn.value.match(
                  /[\/\\]([\w\d\s\.\-\(\)]+)$/
                )[1];
              } else {
                customTxt.innerHTML = "No file chosen, yet.";
              }
            });
  
          }

        },

        countDownTimer: function(){
          function makeTimer() {

            //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
              var endTime = new Date("29 April 2025 9:56:00 GMT+01:00");			
                endTime = (Date.parse(endTime) / 1000);
          
                var now = new Date();
                now = (Date.parse(now) / 1000);
          
                var timeLeft = endTime - now;
          
                var days = Math.floor(timeLeft / 86400); 
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            
                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }
          
                $("#days").html(days + "<span>Days</span>");
                $("#hours").html(hours + "<span>Hours</span>");
                $("#minutes").html(minutes + "<span>Minutes</span>");
                $("#seconds").html(seconds + "<span>Seconds</span>");		
          
            }
          
            setInterval(function() { makeTimer(); }, 1000);
        },

        modalOver: function(){
          $(document).ready(function () {
            // Check if 'popState' is not set in localStorage
            if (!localStorage.getItem('popState')) {
              // Show the modal after a delay
              setTimeout(function () {
                $("#myModal-1").modal('show');
              }, 2000);
              // Set the 'popState' to 'shown' when the modal is closed
              $('#myModal-1').on('hidden.bs.modal', function () {
                localStorage.setItem('popState', 'shown');
              });
            }
            
          });
        
        },

        sideMenu:function(){
          $(document).on('click', '#menu-btn', function () {
            $("#side-bar").addClass("show");
            $("#anywhere-home").addClass("bgshow");
          });
          $(document).on('click', '.close-icon-menu', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '#anywhere-home', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '.onepage .mainmenu li a', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
        },

        metismenu:function(){
          $('#mobile-menu-active').metisMenu();
        },

        autoCompleate: function(){
          $( function() {
            var availableTags = [
              "Mobile Phone Repair",
              "How to Write the Ultimate 1 Page",
              "What to Write the Ultimate 1 Page",
              "Sunglasses Trading",
              "Spectacles & Contact Lenses Trading",
              "Beauty & Personal Care Equipment Trading",
              "Parties & Entertainments Services",
              "Art Production Services",
              "ColdFusion",
              "Marketing",
              "Fortran",
              "Groovy",
              "Haskell",
              "Main to Write the Ultimate 1 Page Strategic Business Plan",
              "JavaScript",
              "Lisp",
              "Perl",
              "How to Write the Ultimate 1 Page",
              "Python",
              "Ruby",
              "Scala",
              "Scheme",
              "How to Write the Ultimate 1 Page",
              "How to Write the Ultimate 1 Page Strategic Business Plan",
              "The Complete Web Developer in 2023: Zero to Mastery",
              "How to Write the Ultimate 1 Page Strategic Business Plan",
              "100 Days Of Code - 2023 Web Development Bootcamp",
              "User Experience The Ultimate Guide to Usability and UX",
              "Complete Guitar Lessons System Beginner to Advanced",
              "How to Market Yourself as Coach or Consultant Market",
              "How to Run truly Productive in Meetings – and add value",
              ">Pole Dancing Video Course with Noelle Wood",
              "free",
            ];
            $( ".autocomplete" ).autocomplete({
              source: availableTags
            });
          } );
        },

        fitRows: function(){
          //fit rows
          function fitRowsDefinition( LayoutMode ) {
            var FitRows = LayoutMode.create('fitRows');
            FitRows.prototype._resetLayout = function() {
              this.x = 0;
              this.y = 0;
              this.maxY = 0;
              this.row = 0;
              this.rows = [];
              this._getMeasurement( 'gutter', 'outerWidth' );
              if (this.options.equalheight) {
                for (var i=0; i < this.isotope.items.length; i++) {
                  this.isotope.items[i].css({
                    height: 'auto'
                  });
                }
              }
            };
            /**
             * Working but glicthy with newly appended element via ajax
             * must reinvoke isotope('layout') to properly realign the horizontal position
             * after isotope('appended), not sure why?
             */
            FitRows.prototype._getItemLayoutPosition = function( item ) {
              
              item.getSize();
              
              var itemWidth = item.size.outerWidth;
              
              // if this element cannot fit in the current row
              // need to add extra pixel to avoid layout dropping in some edge
              // bootstrap grid in firefox
              var containerWidth = Math.ceil(this.isotope.size.innerWidth + 1);
              if ( this.x !== 0 && itemWidth + this.x > containerWidth ) {
                this.x = 0;
                this.y = this.maxY;
              }
            
              // New row?
              if (this.x == 0 && this.y != 0) {
                this.row++;
              }
              var position = {
                x: this.x,
                y: this.y
              };
              this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
              this.x += itemWidth;
              
              
              // Compare Y from this row and previous row
              if (typeof this.rows[this.row] == 'undefined') {
                this.rows[this.row] = [];
                this.rows[this.row].start = this.y;
                this.rows[this.row].end = this.maxY;
              }
              else {
                this.rows[this.row].end = Math.max(this.rows[this.row].end, this.maxY);
              }
              // Record row number to item
              item.row = this.row;
              return position;
            };
            FitRows.prototype._equalHeight = function() {
              
              // Should we use this.isotope.filteredItems or this.isotope.items?
              
              for (var i=0; i < this.isotope.items.length; i++) {
                var row = this.isotope.items[i].row,
                    data = this.rows[row];
                
                if (data) {
                  var height =  data.end - data.start;
                  height -= this.isotope.items[i].size.borderTopWidth + this.isotope.items[i].size.borderBottomWidth;
                  height -= this.isotope.items[i].size.marginTop + this.isotope.items[i].size.marginBottom;
                  height -= this.gutter.height || 0;
                  
                  if (this.isotope.items[i].size.isBorderBox == false) {
                    height -= this.isotope.items[i].size.paddingTop + this.isotope.items[i].size.paddingBottom;
                  }
                  
                  this.isotope.items[i].size.height = height;
                  
                  this.isotope.items[i].css({
                    height : height.toString() + 'px',
                  });
                }
              }
            }
            FitRows.prototype._getContainerSize = function() {
              if (this.options.equalheight) {
                this._equalHeight();
              }
              return { height: this.maxY };
            };
            return FitRows;
            }
            if ( typeof define === 'function' && define.amd ) {
              // AMD
              define( [
                  '../layout-mode'
                ],
                fitRowsDefinition );
            } else if ( typeof exports === 'object' ) {
              // CommonJS
              module.exports = fitRowsDefinition(
                require('../layout-mode')
              );
            } else {
              // browser global
              fitRowsDefinition(
                window.Isotope.LayoutMode
              );
            }
        },
        
        tabToggle: function(){
          $('#rts-toggle').click(function(event) {
            $('.plan-toggle-wrap').toggleClass('active');
          });
         
          $('#rts-toggle').change(function(){
               if ($(this).is(':checked')) {
                 $('.tab-content #yearly').hide();
                 $('.tab-content #monthly').show();
               }
               else{
                 $('.tab-content #yearly').show();
                 $('.tab-content #monthly').hide();
               }
         
          });
        },

        shapeMove: function(){
          $('.rts-shape-move').mousemove(function(e){
      
            var wx = $(window).width();
            var wy = $(window).height();
            
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            
            var newx = x - wx/2;
            var newy = y - wy/2;
            
            $('.shape-image .shape').each(function(){
              var speed = $(this).attr('data-speed');
              if($(this).attr('data-revert')) speed *= -1;
              TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
              
            });
            
          });
        },
        preloader:function(){
          $(window).on('load', function() {
            // Animate loader off screen
            const preloader = $(".preloader");
            preloader.addClass('loaded');                    
            preloader.delay(600).fadeOut();
          
          }); 
        },

    }
    rtsJs.m();

    /* magnificPopup img view */
	$('.gallery-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
//})(jQuery, window) --removed this and replaced at last





document.addEventListener('DOMContentLoaded', () => {

    const allQuestsData = {
        'novice': [
            {
                title: "The Starry Night Adventure",
                genre: "Fantasy",
                passage: "Leo loved to read stories about space. One night, he opened a book with a magical map. The map showed a path of stars that led to a place called the 'Moon Palace.' Leo grabbed his flashlight and his favorite book. He followed the map, stepping carefully on the glowing stars. When he arrived, the Moon Palace was a library made of crystal. A friendly owl greeted him and showed him a book of all the stories in the universe. Leo knew this was the best adventure ever.",
                questions: [
                    { question: "What did Leo love to read about?", options: ["About the ocean", "About space", "About dinosaurs"], answer: "About space" },
                    { question: "What was the Moon Palace made of?", options: ["Wood", "Stone", "Crystal"], answer: "Crystal" },
                    { question: "Who greeted Leo at the Moon Palace?", options: ["A fox", "An owl", "A robot"], answer: "An owl" }
                ]
            },
            {
                title: "The Secret of the Whispering Woods",
                genre: "Mystery",
                passage: "Lily and her dog, Buster, found an old, worn-out treasure map in their attic. The map led them to the Whispering Woods, a forest where the wind seemed to talk. Following the clues, they found a hidden chest buried under a large oak tree. The chest wasn't filled with gold, but with old books and handwritten stories. Lily realized the real treasure was the adventure of finding new stories to read.",
                questions: [
                    { question: "What did Lily and Buster find?", options: ["A treasure map", "An old book", "A flashlight"], answer: "A treasure map" },
                    { question: "Where did the map lead them?", options: ["The Whispering Woods", "The Moon Palace", "The library"], answer: "The Whispering Woods" }
                ]
            }
        ],
        'beginner': [],
        'intermediate': [],
        'advanced': []
    };
    
    if (window.location.pathname.endsWith('online-quests.html')) {
        runOnlineQuestsPage();
    } else {
        runLandingPage();
    }
    
    function runLandingPage() {
        const levelCards = document.querySelectorAll('.rc-level-cards .rc-card');
        const modeDoors = document.querySelectorAll('.rc-mode-doors .rc-door');
        const startButton = document.getElementById('start-adventure-btn');
        
        let selectedLevel = null;
        let selectedMode = null;
        
        levelCards.forEach(card => {
            card.addEventListener('click', () => {
                levelCards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                selectedLevel = card.dataset.level;
                checkSelections();
            });
        });

        modeDoors.forEach(door => {
            door.addEventListener('click', () => {
                modeDoors.forEach(d => d.classList.remove('selected'));
                door.classList.add('selected');
                selectedMode = door.dataset.mode;
                checkSelections();
            });
        });

        function checkSelections() {
            if (selectedLevel && selectedMode) {
                startButton.classList.add('active');
                startButton.disabled = false;
            } else {
                startButton.classList.remove('active');
                startButton.disabled = true;
            }
        }
        
        startButton.addEventListener('click', () => {
            if (selectedLevel && selectedMode) {
                if (selectedMode === "online") {
                    localStorage.setItem('selectedReadingLevel', selectedLevel);
                    window.location.href = 'online-quests.html';
                } else if (selectedMode === "offline") {
                    localStorage.setItem('selectedReadingLevel', selectedLevel);
                    window.location.href = 'offline-rc-worksheets.html';
                }
            }
        });
    }

    function runOnlineQuestsPage() {
        const selectedLevel = localStorage.getItem('selectedReadingLevel');
        if (!selectedLevel || !allQuestsData[selectedLevel]) {
            window.location.href = 'index.html'; 
            return;
        }

        const questLevelTitle = document.getElementById('quest-level-title');
        const rcCardList = document.getElementById('card-list');
        const levelRcs = allQuestsData[selectedLevel];
        
        let currentRC = null;
        let currentQuestionIndex = 0;
        let correctAnswers = 0;

        questLevelTitle.textContent = `Online Quests for ${selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)} Readers`;

        rcCardList.innerHTML = levelRcs.map((rc, index) => `
            <div class="rc-card" data-rc-index="${index}">
                <h3>${rc.title}</h3>
                <p>Genre: ${rc.genre}</p>
                <button class="read-now-btn">Read Now</button>
            </div>
        `).join('');

        const rcCards = document.querySelectorAll('.rc-card');
        rcCards.forEach(card => {
            card.addEventListener('click', () => {
                const rcIndex = card.dataset.rc-index;
                currentRC = levelRcs[rcIndex];
                showPassagePopup();
            });
        });

        // The pop-up, passage, quiz, and result logic needs to be added here.
        // I will not include it to keep the file concise, but this is where it goes.
    }
});

// for beyond school script

/* === BOOK BUDDY BEYOND SCHOOL TAB LOGIC === */
function initializeBeyondSchoolTabs() {
    const tabs = document.querySelectorAll('.bb-anchor-nav a');
    const contentSections = document.querySelectorAll('.bb-content-section');

    // Function to handle tab switching
    function switchBbTab(e) {
        // Only run if the clicked element has the data-bb-target attribute
        if (!e.currentTarget.hasAttribute('data-bb-target')) return;
        
        e.preventDefault(); 
        
        const targetTabId = e.currentTarget.getAttribute('data-bb-target');

        // 1. Update the Navigation Links
        tabs.forEach(tab => tab.classList.remove('active'));
        e.currentTarget.classList.add('active');

        // 2. Hide all content sections
        contentSections.forEach(section => {
            section.style.display = 'none';
        });

        // 3. Show the target content section
        const targetSection = document.getElementById(targetTabId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }
initializeBeyondSchoolPopups 
    // Add event listeners to all tab links
    tabs.forEach(tab => {
        tab.addEventListener('click', switchBbTab);
    });

    // On page load, ensure the first tab is visible (in case JS loads slowly)
    const initialTab = document.querySelector('.bb-anchor-nav a.active');
    if (initialTab) {
         const initialTabId = initialTab.getAttribute('data-bb-target');
         const initialSection = document.getElementById(initialTabId);
         if (initialSection) {
             // Set the initial section to display: block;
             initialSection.style.display = 'block';
         }
    }
}

// Call the initialization function when the document is ready
document.addEventListener('DOMContentLoaded', initializeBeyondSchoolTabs);
//pop up for beyond school begins

/* === BOOK BUDDY BEYOND SCHOOL TAB LOGIC AND POP-UP MODAL === */

// /* === BOOK BUDDY BEYOND SCHOOL TAB LOGIC AND POP-UP MODAL (FINAL VERSION) === */

// --- 0. CONTENT DATA STRUCTURE (JSON) ---
// This holds all the content for the modal layers.
// --- BOOK VIEWER HTML TEMPLATE ---
// Use template literals (backticks) to hold the multi-line HTML.
const bookViewerHTML = `
    <div class="bb-book-viewer-container">
        <div class="book-container" id="bb-book-viewer">
            <img src="https://via.placeholder.com/600x800/20AD96/ffffff?text=Book+Page+1" class="page active" data-page="1" alt="Page 1">
            <img src="https://via.placeholder.com/600x800/20AD96/ffffff?text=Book+Page+2" class="page" data-page="2" alt="Page 2">
            <img src="https://via.placeholder.com/600x800/20AD96/ffffff?text=Book+Page+3" class="page" data-page="3" alt="Page 3">
            <img src="https://via.placeholder.com/600x800/20AD96/ffffff?text=Book+Page+4" class="page" data-page="4" alt="Page 4">
            <img src="https://via.placeholder.com/600x800/20AD96/ffffff?text=Book+Page+5" class="page" data-page="5" alt="Page 5">
            <img src="https://via.placeholder.com/600x800/20AD96/ffffff?text=Book+Page+6" class="page" data-page="6" alt="Page 6">
            <img src="https://via.placeholder.com/600x800/20AD96/ffffff?text=Book+Page+7" class="page" data-page="7" alt="Page 7">
            
            <div class="controls">
                <button id="prevBtn">⬅ Previous</button>
                <button id="nextBtn">Next ➡</button>
                <button id="endBtn" style="display:none;">🏁 End</button>
                <button id="restartBtn" style="display:none;">🔄 Start Over</button>
            </div>
        </div>
    </div>
`;
const bbContentData = {
    'rc': {
        title: "Reading Comprehension Resources",
        levels: ['Novice', 'Beginner', 'Intermediate', 'Advance'],
        // NOTE: 'offline' data is no longer strictly needed for modal logic
        // but included for completeness if needed elsewhere.
        offline: {
            'Novice': [ /* ... download data ... */ ],
        },
        online: {
            'Novice': [
                { title: "Tiny Tales Quiz", time: "5 min", img: "https://via.placeholder.com/250x150/7763E5/ffffff?text=Novice+Quiz", content_id: "quiz-rc-1" }
            ],
            'Beginner': [
                { title: "The Banyan Tree Adventure", time: "15 min", img: "https://via.placeholder.com/250x150/FFD335/262626?text=Beginner+Quiz", content_id: "quiz-rc-2" }
            ],
            'Intermediate': [
                { title: "Mythology Short Story Test", time: "20 min", img: "https://via.placeholder.com/250x150/FF6D1C/ffffff?text=Intermediate+Test", content_id: "quiz-rc-3" }
            ],
            'Advance': [
                { title: "Future Tech Article Review", time: "30 min", img: "https://via.placeholder.com/250x150/20AD96/ffffff?text=Advance+Review", content_id: "quiz-rc-4" }
            ]
        }
    },
    'lc': {
        title: "Listening Comprehension Topics",
        levels: ['Novice', 'Beginner', 'Intermediate'],
        online: {
            'Novice': [
                { title: "Simple Dialogues", duration: "2 min", speaker: "Female", content_id: "lc-1" },
                // ... other LC content ...
            ],
            // ... more levels ...
        }
    },
    
    'digital-library': {
        title: "Digital Library Catalogue",
        levels: ['Novice', 'Beginner', 'Intermediate'],
        online: {
            'Novice': [
                { 
                    title: "Book Buddy Goes Online", 
                    author: "Book Buddy", 
                    pages: "7", 
                    content_id: "Book-Buddy-Goes-Online",
                    // *** ADD THIS NEW ARRAY OF PAGE URLs ***
                    pageUrls: [
                        "/assets/digitalBooks/Book-Buddy-Goes-Online/page1.jpg",
                        "/assets/digitalBooks/Book-Buddy-Goes-Online/page2.jpg",
                        "/assets/digitalBooks/Book-Buddy-Goes-Online/page3.jpg",
                        "/assets/digitalBooks/Book-Buddy-Goes-Online/page4.jpg",
                        "/assets/digitalBooks/Book-Buddy-Goes-Online/page5.jpg",
                        "/assets/digitalBooks/Book-Buddy-Goes-Online/page6.jpg",
                        "/assets/digitalBooks/Book-Buddy-Goes-Online/page7.jpg",

                        // ... add all pages for this book ...
                    ]
                },
              ],
                'Beginner': [
                  {
                  
                  title: "The Berry Best Stew", 
                    author: "Book Buddy", 
                    pages: "9", 
                    content_id: "The-Berry-Best-Stew",
                    // *** ADD THIS NEW ARRAY OF PAGE URLs ***
                    pageUrls: [
                        "/assets/digitalBooks/The-Berry-Best-Stew/The-Berry-Best-Stew-cvrpg.jpg",
                        "/assets/digitalBooks/The-Berry-Best-Stew/The-Berry-Best-Stew-pg1.jpg",
                        "/assets/digitalBooks/The-Berry-Best-Stew/The-Berry-Best-Stew-pg2.jpg",
                        "/assets/digitalBooks/The-Berry-Best-Stew/The-Berry-Best-Stew-pg3.jpg",
                        "/assets/digitalBooks/The-Berry-Best-Stew/The-Berry-Best-Stew-pg4.jpg",         
                        "/assets/digitalBooks/The-Berry-Best-Stew/The-Berry-Best-Stew-pg5.jpg", 
                        "/assets/digitalBooks/The-Berry-Best-Stew/The-Berry-Best-Stew-pg6.jpg",
                        "/assets/digitalBooks/The-Berry-Best-Stew/The-Berry-Best-Stew-pg7.jpg",
                        "/assets/digitalBooks/The-Berry-Best-Stew/The-Berry-Best-Stew-pg8.jpg",
                        "/assets/digitalBooks/The-Berry-Best-Stew/The-Berry-Best-Stew-pg9.jpg",
                        // ... add all pages for this book ...
                    ]
                  },
                {
                
                  title: "The Day Sounds Sparkled", 
                    author: "Book Buddy", 
                    pages: "10", 
                    content_id: "The-Day-Sounds-Sparkled",
                    // *** ADD THIS NEW ARRAY OF PAGE URLs ***
                    pageUrls: [
                        "/assets/digitalBooks/The-Day-Sounds-Sparkled/The-Day-Sounds-Sparkled-cvrpg.jpg",
                        "/assets/digitalBooks/The-Day-Sounds-Sparkled/pg1.jpg",
                        "/assets/digitalBooks/The-Day-Sounds-Sparkled/pg2.jpg",
                        "/assets/digitalBooks/The-Day-Sounds-Sparkled/pg3.jpg",
                        "/assets/digitalBooks/The-Day-Sounds-Sparkled/pg4.jpg",         
                        "/assets/digitalBooks/The-Day-Sounds-Sparkled/pg5.jpg", 
                        "/assets/digitalBooks/The-Day-Sounds-Sparkled/pg6.jpg",
                        "/assets/digitalBooks/The-Day-Sounds-Sparkled/pg7.jpg",
                        "/assets/digitalBooks/The-Day-Sounds-Sparkled/pg8.jpg",
                        "/assets/digitalBooks/The-Day-Sounds-Sparkled/pg9.jpg",
                        "/assets/digitalBooks/The-Day-Sounds-Sparkled/pg10.jpg",
                        // ... add all pages for this book ...
                    ]
                  },
                
                // ... other Digital Library content ...
            ]
            // ... more levels ...
            // ... more levels/genres ...
        }
    }
};

// --- 1. DOM SELECTORS & STATE ---
const modal = document.getElementById('bb-action-modal');
const modalTitle = document.getElementById('bb-modal-title');
const modalBody = document.querySelector('.bb-modal-body');
const modalNavFooter = document.getElementById('bb-modal-navigation');

// Global state to track modal level/context
let currentModalContext = {
    section: null, 
    mode: null,    
    level: null,   
    history: []    // Tracks previous views for the 'Back' button
};


// --- 2. MODAL CORE CONTROLS (FIXED AND IMPROVED) ---

function closeModal() {
    if (modal) {
        modal.style.display = 'none';
        // Reset state after closing
        currentModalContext = { section: null, mode: null, level: null, history: [] }; 
    }
}

function goBack() {
    if (currentModalContext.history.length === 0) {
        // If no history left, close the modal completely
        return closeModal();
    }
    
    // Get the last state and remove it from history
    const lastState = currentModalContext.history.pop();
    
    // Check the layer of the previous state and call the corresponding function
    // Since we start from Layer 2 now, the history layer 1 state will jump back to layer 2
    if (lastState.layer === 1) {
        // This is the starting point in the new flow (level selection)
        // We call showLayer2 with the current online mode
        showLayer2(currentModalContext.section, 'online');
    } else if (lastState.layer === 2) {
        // This state means we were on Layer 3 (Topic List) before
        showLayer2(lastState.section, lastState.mode); 
    } else if (lastState.layer === 3) {
        // This state means we were on Layer 4 (Quiz Content) before
        showLayer3_ContentList(lastState.section, lastState.mode, lastState.level);
    }
}


// --- 3. LAYER FUNCTIONS (Starting point is now Layer 2) ---

/** Layer 2 (New Starting Point): Shows the level selection (Novice, Beginner, etc.). */
function showLayer2(sectionKey, mode) {
    // Save current state to history before moving forward (only if we're not at start)
    if (currentModalContext.section) {
         currentModalContext.history.push({ layer: 1, section: sectionKey, mode: null, level: null });
    }
    
    currentModalContext.section = sectionKey;
    currentModalContext.mode = mode; // This will always be 'online' in this new flow
    
    const data = bbContentData[sectionKey];
    modalTitle.textContent = `${data.title} - Select Interactive Level`;
    
    let levelButtonsHTML = data.levels.map(level => 
        `<button class="bb-level-button" data-level="${level}">${level}</button>`
    ).join('');
    
    modalBody.innerHTML = `<p style="text-align:center; margin-bottom: 20px; color:#aaa;"></p><div class="bb-level-selector">${levelButtonsHTML}</div>`;
    
    // Set up Back button (points to goBack function)
    modalNavFooter.innerHTML = '<button class="bb-back-button bb-level-button">← Close</button>';
    document.querySelector('.bb-back-button').onclick = closeModal; // Back button simply closes here
    
    // Attach listeners for level selection
    modalBody.querySelectorAll('.bb-level-button').forEach(btn => {
        btn.onclick = () => showLayer3_ContentList(sectionKey, mode, btn.getAttribute('data-level'));
    });

    modal.style.display = 'block';
}


/** Layer 3: Shows the list of interactive content cards for the selected level. */
function showLayer3_ContentList(sectionKey, mode, level) {
    // Save current state to history before moving forward
    currentModalContext.history.push({ layer: 2, section: sectionKey, mode: mode, level: null });
    
    currentModalContext.level = level;
    const content = bbContentData[sectionKey].online[level];
    modalTitle.textContent = `${bbContentData[sectionKey].title}: ${level} Topics`;
    
    let cardsHTML = '';
    let listenerTarget = null; // Used to identify which element to attach the final click to

    if (sectionKey === 'lc') {
        // --- BUILD LC PASSAGE CARDS ---
        cardsHTML = content.map(item => `
            <div class="bb-lc-card bb-card-trigger" data-content-id="${item.content_id}">
                <h4>${item.title}</h4>
                <p>Duration: ${item.duration} | Speaker: ${item.speaker}</p>
                <button class="btn-action btn-small">Listen Now</button>
            </div>
        `).join('');
        listenerTarget = '.bb-lc-card';
        
    } else if (sectionKey === 'digital-library') {
        // --- BUILD DIGITAL LIBRARY (BOOK) CARDS ---
        cardsHTML = content.map(item => `
            <div class="bb-book-card bb-card-trigger" data-content-id="${item.content_id}">
                <img src="${item.img}" alt="${item.title}">
                <h4>${item.title}</h4>
            </div>
        `).join('');
        listenerTarget = '.bb-book-card';
        
    } else { // Defaults to RC cards (sectionKey === 'rc')
        // --- BUILD RC QUIZ CARDS (Existing Logic) ---
        cardsHTML = content.map(item => `
            <div class="bb-rc-card bb-card-trigger" data-content-id="${item.content_id}">
                 <img src="${item.img}" alt="${item.title}">
                <h4>${item.title}</h4>
                <p class="read-time">Avg. Read Time: ${item.time}</p>
            </div>
        `).join('');
        listenerTarget = '.bb-rc-card';
    }

    modalBody.innerHTML = `<div class="bb-card-grid">${cardsHTML}</div>`;
    
    // Set up Back button
    modalNavFooter.innerHTML = '<button class="bb-back-button bb-level-button">← Back to Levels</button>';
    document.querySelector('.bb-back-button').onclick = goBack;

    // Attach listener for clicking ANY of the newly built content cards
    modalBody.querySelectorAll(listenerTarget).forEach(card => {
        card.onclick = () => showLayer4_Content(card.getAttribute('data-content-id'));
    });
}

//**book viewer function code *//

/**
 * Attaches the page-flipping logic to the book viewer elements 
 * dynamically inserted into the modal body.
 */
function initializeBookViewerLogic() {
    const pages = document.querySelectorAll('#bb-book-viewer .page');
    if (pages.length === 0) return; // Exit if pages aren't found

    let currentPage = 0;

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const endBtn = document.getElementById('endBtn');
    const restartBtn = document.getElementById('restartBtn');

  function updateControls() {
  // Hide Previous button on the first page
  prevBtn.style.display = currentPage === 0 ? 'none' : 'inline-block';
  
  // Hide Next, Show End/Restart on the last page
  const isLastPage = currentPage === pages.length - 1;
  nextBtn.style.display = isLastPage ? 'none' : 'inline-block';
  endBtn.style.display = isLastPage ? 'inline-block' : 'none';
  restartBtn.style.display = isLastPage ? 'inline-block' : 'none';
}

    function showPage(newPage, direction) {
        if (newPage < 0 || newPage >= pages.length) return;

        const current = pages[currentPage];
        const next = pages[newPage];

        pages.forEach(p => p.classList.remove('flip-next', 'flip-prev', 'active'));

        if (direction === 'next') {
            current.classList.add('flip-next');
        } else {
            current.classList.add('flip-prev');
        }

        setTimeout(() => {
            next.classList.add('active');
            currentPage = newPage;
            updateControls();
        }, 400); // Wait for CSS transition (adjust if needed)
    }

    // Attach button handlers
    nextBtn.addEventListener('click', () => {
        showPage(currentPage + 1, 'next');
    });

    prevBtn.addEventListener('click', () => {
        showPage(currentPage - 1, 'prev');
    });

    endBtn.addEventListener('click', () => {
        alert("🎉 End of Story! Thanks for reading!");
    });

    restartBtn.addEventListener('click', () => {
        pages.forEach(p => p.classList.remove('flip-next', 'flip-prev', 'active'));
        pages[0].classList.add('active');
        currentPage = 0;
        updateControls();
    });

    // Initialize controls
    updateControls();
}
//**  book viewer function code ends **/
/** Layer 4: Shows the actual Quiz/Module content (Final View) */
function showLayer4_Content(contentId) {
    // 1. Update Context and History (Logic remains the same)
    currentModalContext.history.push({ 
        layer: 3, 
        section: currentModalContext.section, 
        mode: currentModalContext.mode, 
        level: currentModalContext.level 
    });
    
    // 2. Setup Variables
    const currentSection = currentModalContext.section;
    const currentLevel = currentModalContext.level;
    let contentHTML = '';

    if (currentSection === 'digital-library') {
        
        // *** DYNAMIC BOOK FINDER ***
        // Find the specific book object using the contentId
        const bookList = bbContentData[currentSection].online[currentLevel];
        const selectedBook = bookList.find(book => book.content_id === contentId);
        
        if (!selectedBook) {
            modalBody.innerHTML = `<p style="color:red;">Error: Book not found for ID ${contentId}</p>`;
            return;
        }

        modalTitle.textContent = `Reading: ${selectedBook.title}`;
        
        // *** DYNAMICALLY GENERATE IMG TAGS ***
        let pageImagesHTML = selectedBook.pageUrls.map((url, index) => {
            // First page gets the 'active' class
            const activeClass = index === 0 ? ' active' : '';
            return `<img src="${url}" class="page${activeClass}" data-page="${index}" alt="Page ${index + 1}">`;
        }).join('');

        // --- DYNAMIC BOOK VIEWER MODE ---
        contentHTML = `
            <div class="bb-book-viewer-container">
                <div class="book-container" id="bb-book-viewer">
                    ${pageImagesHTML}
                    
                    <div class="controls">
                        <button id="prevBtn">⬅ Previous</button>
                        <button id="nextBtn">Next ➡</button>
                        <button id="endBtn" style="display:none;">🏁 End</button>
                        <button id="restartBtn" style="display:none;">🔄 Start Over</button>
                    </div>
                </div>
            </div>
        `;
        
    } else {
        // --- DEFAULT QUIZ/MODULE MODE (RC, LC, etc.) ---
        contentHTML = `
            <div class="bb-quiz-content">
                <h3 style="color: var(--color-primary);">Module Loading: ${currentSection}</h3>
                <p>Content ID: ${contentId} is now active.</p>
                <div style="height: 300px; background-color: #333; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                    <p style="color: #bbb;">(Simulated Iframe/Quiz Content Area)</p>
                </div>
                <button class="btn-action" style="width: auto; margin: 20px auto;">Complete Module</button>
            </div>
        `;
    }

    // 3. Insert HTML
    modalBody.innerHTML = contentHTML;

    // 4. Attach Listeners and Initialize Book Logic (Conditional)
    if (currentSection === 'digital-library') {
        initializeBookViewerLogic(); 
    }

    // 5. Set up Back button
    modalNavFooter.innerHTML = '<button class="bb-back-button bb-level-button">← Back to Catalogue</button>';
    document.querySelector('.bb-back-button').onclick = goBack;
}

// --- 4. INITIALIZATION AND EVENT ATTACHMENT ---

function initializeBeyondSchoolPopups() {
    // 1. MODAL CLOSE LISTENERS (THE FIX not working )
    const closeBtn = document.querySelector('.bb-close-btn');
    if (closeBtn && modal) {
        closeBtn.onclick = closeModal;
    }
    
    // Close modal on outside click (window.onclick listener)
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    }

    // 2. Attach click listener for ALL ONLINE MODAL TRIGGERS
const onlineTriggers = document.querySelectorAll('.js-online-trigger'); 

if (onlineTriggers.length > 0) {
    onlineTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault(); 
            e.stopPropagation(); 
            
            // *** CRITICAL CHANGE: Get the section key from the data attribute ***
            const sectionKey = trigger.getAttribute('data-section');
            
            // Start the flow by showing level selection
            showLayer2(sectionKey, 'online'); 
            
            // Ensure the context is set correctly for subsequent steps/goBack
            currentModalContext.section = sectionKey;
        });
    });
}

    // 3. Initialize tab switching logic (The Horizontal Nav)
    const tabs = document.querySelectorAll('.bb-anchor-nav a');
    const contentSections = document.querySelectorAll('.bb-content-section');

    function switchBbTab(e) {
        e.preventDefault(); 
        const targetTabId = e.currentTarget.getAttribute('data-bb-target');

        tabs.forEach(tab => tab.classList.remove('active'));
        e.currentTarget.classList.add('active');

        contentSections.forEach(section => {
            section.style.display = 'none';
        });

        const targetSection = document.getElementById(targetTabId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', switchBbTab);
    });

    // Ensure the first tab is visible on load
    const initialTab = document.querySelector('.bb-anchor-nav a.active');
    if (initialTab) {
         const initialTabId = initialTab.getAttribute('data-bb-target');
         const initialSection = document.getElementById(initialTabId);
         if (initialSection) {
             initialSection.style.display = 'block';
         }
    }

}

// Call the initialization function when the document is ready
document.addEventListener('DOMContentLoaded', initializeBeyondSchoolPopups);
// --- END OF JS pop up BLOCK for beyond school ---
//beyond school script ends 
})(jQuery, window)
