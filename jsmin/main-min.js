function showMenu(){document.querySelector(".hiddenSidebar").classList.toggle("active")}function showRightSidebar(){document.querySelector(".adaptiveSidebar").classList.toggle("visible")}function toggleSidebar(){document.querySelector(".sidebar").classList.toggle("sidebar-open")}$(document).ready(function(){$(".itemsList").slick({infinite:!0,slidesToShow:5,slidesToScroll:5,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0,dots:!0}},{breakpoint:900,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".all-collections__cards").slick({infinite:!0,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:800,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:2}}]})});