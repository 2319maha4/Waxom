// burger-menu
document.getElementById("trigger").onclick = function() { open() };
function open() {
    document.getElementById("menu").classList.toggle("show");
}

// dropdown search
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-search')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-search");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      // if (openDropdown.classList.contains('show')) {
      //   openDropdown.classList.remove('show');
      // }
    }
  }
}

// scroll
$(document).ready(function() {
  $(".btn-down").on("click", "a", function(event) {
      event.preventDefault();
      var id = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1500);
  });
});

// filters
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filter");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("btn-filters");
var btns = btnContainer.getElementsByClassName("btn-filter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Popup with video
$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});

// counter
var Animation = function() {
  var hFrom = $(window).scrollTop();
  var hTo = $(window).scrollTop() + ($(window).height() / 3);
  if ($(".int-fact-counters").offset().top > hFrom && $(".int-fact-counters").offset().top < hTo){
      $('.fct-count').delay(500).spincrement({
          thousandSeparator: "",
          duration: 3000
      });
  }
};
$(window).scroll(function() {
  Animation();
});
Animation();

// blog-posts
$('.blog-posts').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false
});

function changeCarousel(){
  let btnPrev = document.querySelector(".slick-prev").innerHTML = "";
  let btnNext = document.querySelector(".slick-next").innerHTML = "";
};
changeCarousel()

// logo-carousel
$('.partners-logo-carousel').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: false
});