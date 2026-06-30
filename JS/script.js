// ドロワーメニューの開閉
jQuery("#js-drawer-button").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-button").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

jQuery('a[href^="#"]').on("click", function (e) {
  const speed = 300;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top;
  jQuery("html,body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing",
  );
});

jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
  jQuery("#js-drawer-button").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
});
