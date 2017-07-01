/* Theme Name: Techtiq - Responsive One Page Template
   Author: Themesdesign
   Version: 1.0.0
   Created: May 2017
   File Description: Main JS file of the template
*/

!function(t){"use strict";function e(){t(".show-image").magnificPopup({type:"image"})}function o(){t(document).ready(function(){t("#mySkill1").circliful(),t("#mySkill2").circliful(),t("#mySkill3").circliful(),t("#mySkill4").circliful()})}function n(){t(".element").each(function(){var e=t(this);e.typed({strings:e.attr("data-elements").split(","),typeSpeed:100,backDelay:3e3})})}function i(){t(window).scroll(function(){t(this).scrollTop()>100?t(".back-to-top").fadeIn():t(".back-to-top").fadeOut()}),t(".back-to-top").click(function(){return t("html, body").animate({scrollTop:0},1e3),!1})}function l(){t(window).scroll(function(){t("nav").offset().top>1?t("nav").addClass("small"):t("nav").removeClass("small")})}function a(){t(window).load(function(){t(".loader").delay(300).fadeOut(),t(".animationload").delay(600).fadeOut("slow")})}function c(){t(function(){t(".navbar a").bind("click",function(e){var o=t(this);t("html, body").stop().animate({scrollTop:t(o.attr("href")).offset().top-50},1500,"easeInOutExpo"),e.preventDefault()})})}function u(){t("#testi-carousel").owlCarousel({items:1,itemsCustom:!1,itemsDesktop:[1199,1],itemsDesktopSmall:[980,1],itemsTablet:[768,1],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,startDragging:!0,autoPlay:!0})}function s(){t("#counter-pro").counterUp({delay:50,time:1e4}),t("#counter-client").counterUp({delay:50,time:5e3}),t("#counter-works").counterUp({delay:50,time:7e3}),t("#counter-award").counterUp({delay:50,time:12e3})}function r(){e(),o(),n(),i(),l(),a(),c(),u(),s()}r()}(jQuery);

