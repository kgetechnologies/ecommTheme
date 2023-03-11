document.documentElement.className =
document.documentElement.className + " yes-js js_active js";

function setREVStartSize(e) {
  //window.requestAnimationFrame(function() {
  window.RSIW =
    window.RSIW === undefined ? window.innerWidth : window.RSIW;
  window.RSIH =
    window.RSIH === undefined ? window.innerHeight : window.RSIH;
  try {
    var pw = document.getElementById(e.c).parentNode.offsetWidth,
      newh;
    pw = pw === 0 || isNaN(pw) ? window.RSIW : pw;
    e.tabw = e.tabw === undefined ? 0 : parseInt(e.tabw);
    e.thumbw = e.thumbw === undefined ? 0 : parseInt(e.thumbw);
    e.tabh = e.tabh === undefined ? 0 : parseInt(e.tabh);
    e.thumbh = e.thumbh === undefined ? 0 : parseInt(e.thumbh);
    e.tabhide = e.tabhide === undefined ? 0 : parseInt(e.tabhide);
    e.thumbhide = e.thumbhide === undefined ? 0 : parseInt(e.thumbhide);
    e.mh =
      e.mh === undefined || e.mh == "" || e.mh === "auto"
        ? 0
        : parseInt(e.mh, 0);
    if (e.layout === "fullscreen" || e.l === "fullscreen")
      newh = Math.max(e.mh, window.RSIH);
    else {
      e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
      for (var i in e.rl)
        if (e.gw[i] === undefined || e.gw[i] === 0) e.gw[i] = e.gw[i - 1];
      e.gh =
        e.el === undefined ||
        e.el === "" ||
        (Array.isArray(e.el) && e.el.length == 0)
          ? e.gh
          : e.el;
      e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
      for (var i in e.rl)
        if (e.gh[i] === undefined || e.gh[i] === 0) e.gh[i] = e.gh[i - 1];

      var nl = new Array(e.rl.length),
        ix = 0,
        sl;
      e.tabw = e.tabhide >= pw ? 0 : e.tabw;
      e.thumbw = e.thumbhide >= pw ? 0 : e.thumbw;
      e.tabh = e.tabhide >= pw ? 0 : e.tabh;
      e.thumbh = e.thumbhide >= pw ? 0 : e.thumbh;
      for (var i in e.rl) nl[i] = e.rl[i] < window.RSIW ? 0 : e.rl[i];
      sl = nl[0];
      for (var i in nl)
        if (sl > nl[i] && nl[i] > 0) {
          sl = nl[i];
          ix = i;
        }
      var m =
        pw > e.gw[ix] + e.tabw + e.thumbw
          ? 1
          : (pw - (e.tabw + e.thumbw)) / e.gw[ix];
      newh = e.gh[ix] * m + (e.tabh + e.thumbh);
    }
    var el = document.getElementById(e.c);
    if (el !== null && el) el.style.height = newh + "px";
    el = document.getElementById(e.c + "_wrapper");
    if (el !== null && el) {
      el.style.height = newh + "px";
      el.style.display = "block";
    }
  } catch (e) {
    console.log("Failure at Presize of Slider:" + e);
  }
  //});
}

(function () {
  window.mc4wp = window.mc4wp || {
    listeners: [],
    forms: {
      on: function (evt, cb) {
        window.mc4wp.listeners.push({
          event: evt,
          callback: cb,
        });
      },
    },
  };
})();

window.RS_MODULES = window.RS_MODULES || {};
window.RS_MODULES.modules = window.RS_MODULES.modules || {};
window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
window.RS_MODULES.defered = true;
window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
window.RS_MODULES.type = "compiled";

(function () {
  function maybePrefixUrlField() {
    if (this.value.trim() !== "" && this.value.indexOf("http") !== 0) {
      this.value = "http://" + this.value;
    }
  }

  var urlFields = document.querySelectorAll(
    '.mc4wp-form input[type="url"]'
  );
  if (urlFields) {
    for (var j = 0; j < urlFields.length; j++) {
      urlFields[j].addEventListener("blur", maybePrefixUrlField);
    }
  }
})();



   /* <![CDATA[ */
   var yith_wcwl_l10n = {
    ajax_url: "\/mydecor\/wp-admin\/admin-ajax.php",
    redirect_to_cart: "no",
    multi_wishlist: "",
    hide_add_button: "1",
    enable_ajax_loading: "",
    ajax_loader_url:
      "https:\/\/demo.theme-sky.com\/mydecor\/wp-content\/plugins\/yith-woocommerce-wishlist\/assets\/images\/ajax-loader-alt.svg",
    remove_from_wishlist_after_add_to_cart: "1",
    is_wishlist_responsive: "1",
    time_to_close_prettyphoto: "3000",
    fragments_index_glue: ".",
    reload_on_found_variation: "1",
    mobile_media_query: "768",
    labels: {
      cookie_disabled:
        "We are sorry, but this feature is available only if cookies on your browser are enabled.",
      added_to_cart_message:
        '<div class="woocommerce-notices-wrapper"><div class="woocommerce-message" role="alert">Product added to cart successfully<\/div><\/div>',
    },
    actions: {
      add_to_wishlist_action: "add_to_wishlist",
      remove_from_wishlist_action: "remove_from_wishlist",
      reload_wishlist_and_adding_elem_action:
        "reload_wishlist_and_adding_elem",
      load_mobile_action: "load_mobile",
      delete_item_action: "delete_item",
      save_title_action: "save_title",
      save_privacy_action: "save_privacy",
      load_fragments: "load_fragments",
    },
    nonce: {
      add_to_wishlist_nonce: "bbae7b03ad",
      remove_from_wishlist_nonce: "350533c78c",
      reload_wishlist_and_adding_elem_nonce: "f8b7efda4a",
      load_mobile_nonce: "4c21b7e8bf",
      delete_item_nonce: "e45a79b8d1",
      save_title_nonce: "9005b52362",
      save_privacy_nonce: "f63066d067",
      load_fragments_nonce: "c340c7757c",
    },
  };
  /* ]]> */

   /* <![CDATA[ */
   var themesky_params = {
    ajax_uri: "\/mydecor\/wp-admin\/admin-ajax.php",
  };
  /* ]]> */

    /* <![CDATA[ */
    var wc_add_to_cart_params = {
        ajax_url: "\/mydecor\/wp-admin\/admin-ajax.php",
        wc_ajax_url: "\/mydecor\/?wc-ajax=%%endpoint%%",
        i18n_view_cart: "View cart",
        cart_url: "https:\/\/demo.theme-sky.com\/mydecor\/cart\/",
        is_cart: "",
        cart_redirect_after_add: "no",
      };
      /* ]]> */

        /* <![CDATA[ */
        var woocommerce_params = {
            ajax_url: "\/mydecor\/wp-admin\/admin-ajax.php",
            wc_ajax_url: "\/mydecor\/?wc-ajax=%%endpoint%%",
          };
          /* ]]> */

          /* <![CDATA[ */
      var wc_cart_fragments_params = {
        ajax_url: "\/mydecor\/wp-admin\/admin-ajax.php",
        wc_ajax_url: "\/mydecor\/?wc-ajax=%%endpoint%%",
        cart_hash_key: "wc_cart_hash_4487ef826b88a215be0f56debebba1e8",
        fragment_name: "wc_fragments_4487ef826b88a215be0f56debebba1e8",
        request_timeout: "5000",
      };
      /* ]]> */

         /* <![CDATA[ */
         var yith_woocompare = {
            ajaxurl: "\/mydecor\/?wc-ajax=%%endpoint%%",
            actionadd: "yith-woocompare-add-product",
            actionremove: "yith-woocompare-remove-product",
            actionview: "yith-woocompare-view-table",
            actionreload: "yith-woocompare-reload-product",
            added_label: "Added",
            table_title: "Product Comparison",
            auto_open: "yes",
            loader:
              "https:\/\/demo.theme-sky.com\/mydecor\/wp-content\/plugins\/yith-woocommerce-compare\/assets\/images\/loader.gif",
            button_text: '<span class="ts-tooltip button-tooltip">Compare<\/span>',
            cookie_name: "yith_woocompare_list",
            close_label: "Close",
          };
          /* ]]> */

           /* <![CDATA[ */
      var mydecor_params = {
        ajax_url: "\/mydecor\/wp-admin\/admin-ajax.php",
        sticky_header: "1",
        ajax_search: "1",
        show_cart_after_adding: "0",
        ajax_add_to_cart: "1",
        add_to_cart_effect: "fly_to_cart",
        shop_loading_type: "load-more-button",
        flexslider: {
          rtl: false,
          animation: "slide",
          smoothHeight: true,
          directionNav: false,
          controlNav: "thumbnails",
          slideshow: false,
          animationSpeed: 500,
          animationLoop: false,
          allowOneSlide: false,
        },
        zoom_options: [],
        product_name_min_height: "1",
      };
      /* ]]> */

       /* <![CDATA[ */
       var _wpUtilSettings = {
        ajax: {
          url: "\/mydecor\/wp-admin\/admin-ajax.php",
        },
      };
      /* ]]> */

      /* <![CDATA[ */
      var wc_add_to_cart_variation_params = {
        wc_ajax_url: "\/mydecor\/?wc-ajax=%%endpoint%%",
        i18n_no_matching_variations_text:
          "Sorry, no products matched your selection. Please choose a different combination.",
        i18n_make_a_selection_text:
          "Please select some product options before adding this product to your cart.",
        i18n_unavailable_text:
          "Sorry, this product is unavailable. Please choose a different combination.",
      };
      /* ]]> */

      var elementorFrontendConfig = {
        environmentMode: {
          edit: false,
          wpPreview: false,
          isScriptDebug: false,
        },
        i18n: {
          shareOnFacebook: "Share on Facebook",
          shareOnTwitter: "Share on Twitter",
          pinIt: "Pin it",
          download: "Download",
          downloadImage: "Download image",
          fullscreen: "Fullscreen",
          zoom: "Zoom",
          share: "Share",
          playVideo: "Play Video",
          previous: "Previous",
          next: "Next",
          close: "Close",
        },
        is_rtl: false,
        breakpoints: {
          xs: 0,
          sm: 480,
          md: 768,
          lg: 1025,
          xl: 1440,
          xxl: 1600,
        },
        responsive: {
          breakpoints: {
            mobile: {
              label: "Mobile",
              value: 767,
              default_value: 767,
              direction: "max",
              is_enabled: true,
            },
            mobile_extra: {
              label: "Mobile Extra",
              value: 880,
              default_value: 880,
              direction: "max",
              is_enabled: false,
            },
            tablet: {
              label: "Tablet",
              value: 1024,
              default_value: 1024,
              direction: "max",
              is_enabled: true,
            },
            tablet_extra: {
              label: "Tablet Extra",
              value: 1200,
              default_value: 1200,
              direction: "max",
              is_enabled: false,
            },
            laptop: {
              label: "Laptop",
              value: 1366,
              default_value: 1366,
              direction: "max",
              is_enabled: false,
            },
            widescreen: {
              label: "Widescreen",
              value: 2400,
              default_value: 2400,
              direction: "min",
              is_enabled: false,
            },
          },
        },
        version: "3.5.5",
        is_static: false,
        experimentalFeatures: {
          e_optimized_assets_loading: true,
          e_import_export: true,
          e_hidden_wordpress_widgets: true,
          "landing-pages": true,
          "elements-color-picker": true,
          "favorite-widgets": true,
          "admin-top-bar": true,
        },
        urls: {
          assets:
            "https:\/\/demo.theme-sky.com\/mydecor\/wp-content\/plugins\/elementor\/assets\/",
        },
        settings: {
          page: [],
          editorPreferences: [],
        },
        kit: {
          stretched_section_container: "#main",
          body_background_background: "classic",
          active_breakpoints: ["viewport_mobile", "viewport_tablet"],
          global_image_lightbox: "yes",
          lightbox_enable_counter: "yes",
          lightbox_enable_fullscreen: "yes",
          lightbox_enable_zoom: "yes",
          lightbox_enable_share: "yes",
          lightbox_title_src: "title",
          lightbox_description_src: "description",
        },
        post: {
          id: 16479,
          title:
            "MyDecor%20%E2%80%93%20Elementor%20Furniture%20WooCommerce%20Theme",
          excerpt: "",
          featuredImage: false,
        },
      };