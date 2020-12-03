 /*jslint browser: true*/
 /*global $, jQuery, alert*/

 $(document).ready(function () {

     "use strict";

     var body = $("body");

     /* ===== Theme Settings ===== */

     $(".open-close").on("click", function () {
         body.toggleClass("show-sidebar").toggleClass("hide-sidebar");
         $(".sidebar-head .open-close i").toggleClass("ti-menu");
     });
     /* ===== Tooltip Initialization ===== */
     $(function () {
         $('[data-toggle="tooltip"]').tooltip();
     });
      $(".select2").select2({
          allowClear: false
      });
     $('.DataTB').DataTable();
 });

function ShowChildNav(e) {
  
    if ($(e).hasClass("active")) {
        $("#side-menu li a.waves-effect").removeClass("active");
        $("#side-menu li .ChildNav").slideUp();
    }
    else {
        $("#side-menu li a.waves-effect").removeClass("active");
        $(e).addClass("active");
        $("#side-menu li .ChildNav").slideUp();
        $(e).siblings(".ChildNav").slideDown();
    }
   
}

function NormalSearch() {
    $(".NormalSearch").slideDown();
    $(".AdvancedSearch").slideUp();
}
function AdvancedSearch() {
    $(".NormalSearch").slideUp();
    $(".AdvancedSearch").slideDown();
}

