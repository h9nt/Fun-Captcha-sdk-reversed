/*Want to help? We have a bug bounty program you can join at https://www.arkoselabs.com/whitehat/ or contact us at whitehat@arkoselabs.com*/

function a(k, a) {
    var b = "~begin~float~";
    var c = "~end~float~";
    var d = null;
    Number.isInteger = Number.isInteger || function (a) {
      return typeof a === "number" && isFinite(a) && Math.floor(a) === a;
    };
    function n(b) {
      return d && a[d] === "float" && Number.isInteger(b);
    }
    function f(e, f) {
      var g = n(f);
      d &&= null;
      if (e === "key" && f in a) {
        d = f;
      }
      if (g) {
        return `${b}${f}${c}`;
      } else {
        return f;
      }
    }
    var g = JSON.stringify(k, f);
    var h = function c(a, b) {
      if (b.includes(".") || Number.isNaN(b)) {
        return b;
      } else {
        return `${b}.0`;
      }
    };
    var i = new RegExp(`"${b}(.+?)${c}"`, "g");
    return g.replace(i, h);
  }
  function b(i) {
    var $ = "";
    var _;
    var ba;
    var ca;
    var da = this;
    this.callback;
    this.loaded_callback;
    this.failed_callback;
    this.target = "funcaptcha";
    this.public_key = null;
    this.api_target = "/fc/api/";
    this.api_target_sri = "/funcaptcha_api";
    this.fc_api_server = "https://funcaptcha.com";
    this.cdn = "/cdn";
    this.language;
    this.data;
    this.siteData = {
      location: window.location
    };
    this.onload_retry = 0;
    this.fp_result = {};
    this.style_theme;
    this.cloudflare_access_client_id;
    this.cloudflare_access_client_secret;
    this.accessibilitySettings;
    this.loadedWithData = false;
    this.capiVersion = i && i.capi_version ? i.capi_version : null;
    this.capiMode = i && i.capi_mode ? i.capi_mode : null;
    this.capiSettings = i && i.capi_settings ? i.capi_settings : null;
    this.query_data;
    var f = !this.capiSettings || !this.capiSettings.hasOwnProperty("c") || this.capiSettings.c !== false;
    this.fingerprinting_enabled = {
      canvas: f
    };
    this.extended_fingerprinting_enabled = {
      canvas: f,
      device: true,
      browser: true,
      user: true,
      browserType: true,
      codecs: true,
      audio: true,
      darkMode: true,
      headless: true,
      phishing: true
    };
    this.async_fingerprints = {
      enabled: true,
      received: false
    };
    function g(a, b) {
      var c = {};
      h(c, "getFP", j, b);
      h(c, "getEnhancedFP", k, a);
      h(c, "getAsyncFPs", r);
      h(c, "x64hash128", Na);
      h(c, "getDNT", u);
      h(c, "getLANG", v);
      h(c, "getDepth", w);
      h(c, "getPixelRatio", x);
      h(c, "getScreen", y);
      h(c, "getAvailableScreen", z);
      h(c, "getTimeOffset", ea);
      h(c, "getSessionStorage", B);
      h(c, "getLocalStorage", C);
      h(c, "getIndexedDB", D);
      h(c, "getBehaviour", E);
      h(c, "getOpenDB", F);
      h(c, "getCPUClass", G);
      h(c, "getPlatformKey", H);
      h(c, "canvasFP", I);
      h(c, "webGLSupported", J);
      h(c, "getWebGLKeys", K);
      h(c, "setWebGLKeys", L);
      h(c, "getWebGLBits", M);
      h(c, "getMaxParamValues", N);
      h(c, "getWebGLUnmaskedValues", O);
      h(c, "getWebGLVSFParams", P);
      h(c, "getWebGLVSIParams", Q);
      h(c, "getWebGLFSFParams", R);
      h(c, "getWebGLFSIParams", S);
      h(c, "hasFakeResolution", T);
      h(c, "hasFakeOS", U);
      h(c, "hasFakeBrowser", V);
      h(c, "getJSFonts", W);
      h(c, "isMSIE", X);
      h(c, "getNetworkDownlink", Y);
      h(c, "getNetworkDownlinkMax", Z);
      h(c, "getNetworkRTT", fa);
      h(c, "getNetworkSaveData", ga);
      h(c, "getNetworkType", ha);
      h(c, "getPixelDepth", ia);
      h(c, "getDeviceMemory", ja);
      h(c, "getUserAgentBrands", ka);
      h(c, "getUserAgentMobile", la);
      h(c, "getLanguages", ma);
      h(c, "getInnerWidth", na);
      h(c, "getInnerHeight", oa);
      h(c, "getOuterWidth", aa);
      h(c, "getOuterHeight", pa);
      h(c, "getAudioFingerprint", qa);
      h(c, "getFirefoxBrowser", ra);
      h(c, "getBraveBrowser", sa);
      h(c, "getAudioCodecs", ta);
      h(c, "getVideoCodecs", ua);
      h(c, "getBatteryCheck", va);
      h(c, "getDarkModeCheck", wa);
      h(c, "getPhantomJS", xa);
      h(c, "getSelenium", ya);
      h(c, "getNightmareJS", za);
      h(c, "sortPlugins", Aa);
      h(c, "getPluginsKey", Ba);
      h(c, "getTouch", Ca);
      h(c, "getHardwareConcrun", Da);
      h(c, "hasSwfObj", Ea);
      h(c, "getWindowHash", Fa);
      h(c, "getWindowProtoChainHash", Ga);
      h(c, "getDocumentReferrer", m);
      h(c, "getAncestorOrigins", n);
      h(c, "getTreeIndex", o);
      h(c, "getTreeStructure", p);
      h(c, "getWindowLocationHref", q);
      return c;
    }
    function h(a, b, c, d) {
      var e;
      if (d !== undefined) {
        e = c.bind(a, d);
      } else {
        e = c.bind(a);
      }
      Object.defineProperty(a, b, {
        value: e,
        configurable: true
      });
    }
    function j(a) {
      var b = [];
      b.push({
        key: "DNT",
        value: this.getDNT()
      });
      b.push({
        key: "L",
        value: this.getLANG()
      });
      b.push({
        key: "D",
        value: this.getDepth()
      });
      b.push({
        key: "PR",
        value: this.getPixelRatio()
      });
      b.push({
        key: "S",
        value: this.getScreen()
      });
      b.push({
        key: "AS",
        value: this.getAvailableScreen()
      });
      b.push({
        key: "TO",
        value: this.getTimeOffset()
      });
      b.push({
        key: "SS",
        value: this.getSessionStorage()
      });
      b.push({
        key: "LS",
        value: this.getLocalStorage()
      });
      b.push({
        key: "IDB",
        value: this.getIndexedDB()
      });
      b.push({
        key: "B",
        value: this.getBehaviour()
      });
      b.push({
        key: "ODB",
        value: this.getOpenDB()
      });
      b.push({
        key: "CPUC",
        value: this.getCPUClass()
      });
      b.push({
        key: "PK",
        value: this.getPlatformKey()
      });
      b.push({
        key: "CFP",
        value: this.canvasFP(a && a.canvas === true)
      });
      b.push({
        key: "FR",
        value: this.hasFakeResolution()
      });
      b.push({
        key: "FOS",
        value: this.hasFakeOS()
      });
      b.push({
        key: "FB",
        value: this.hasFakeBrowser()
      });
      b.push({
        key: "JSF",
        value: this.getJSFonts()
      });
      b.push({
        key: "P",
        value: this.getPluginsKey()
      });
      b.push({
        key: "T",
        value: this.getTouch()
      });
      b.push({
        key: "H",
        value: this.getHardwareConcrun()
      });
      b.push({
        key: "SWF",
        value: this.hasSwfObj()
      });
      var c = [];
      Oa(b, function (a) {
        var b = a.value;
        if (typeof a.value.join !== "undefined") {
          b = a.value.join(";");
        }
        c.push(b);
      });
      var d = Na(c.join("~~~"), 31);
      return {
        fp: d,
        vals: b,
        window: this.getWindowHash() + "|" + this.getWindowProtoChainHash()
      };
    }
    ;
    function k(a) {
      var b = [];
      if (a && a.browser) {
        var c = this.getWebGLKeys(a && a.canvas === true);
        b.push({
          key: "webgl_extensions",
          value: c.webgl_extensions
        });
        b.push({
          key: "webgl_extensions_hash",
          value: c.webgl_extensions_hash
        });
        b.push({
          key: "webgl_renderer",
          value: c.webgl_renderer
        });
        b.push({
          key: "webgl_vendor",
          value: c.webgl_vendor
        });
        b.push({
          key: "webgl_version",
          value: c.webgl_version
        });
        b.push({
          key: "webgl_shading_language_version",
          value: c.webgl_shading_language_version
        });
        b.push({
          key: "webgl_aliased_line_width_range",
          value: c.webgl_aliased_line_width_range
        });
        b.push({
          key: "webgl_aliased_point_size_range",
          value: c.webgl_aliased_point_size_range
        });
        b.push({
          key: "webgl_antialiasing",
          value: c.webgl_antialiasing
        });
        b.push({
          key: "webgl_bits",
          value: c.webgl_bits
        });
        b.push({
          key: "webgl_max_params",
          value: c.webgl_max_params
        });
        b.push({
          key: "webgl_max_viewport_dims",
          value: c.webgl_max_viewport_dims
        });
        b.push({
          key: "webgl_unmasked_vendor",
          value: c.webgl_unmasked_vendor
        });
        b.push({
          key: "webgl_unmasked_renderer",
          value: c.webgl_unmasked_renderer
        });
        b.push({
          key: "webgl_vsf_params",
          value: c.webgl_vsf_params
        });
        b.push({
          key: "webgl_vsi_params",
          value: c.webgl_vsi_params
        });
        b.push({
          key: "webgl_fsf_params",
          value: c.webgl_fsf_params
        });
        b.push({
          key: "webgl_fsi_params",
          value: c.webgl_fsi_params
        });
        b.push({
          key: "webgl_hash_webgl",
          value: c.webgl_hash_webgl
        });
        b.push({
          key: "user_agent_data_brands",
          value: this.getUserAgentBrands()
        });
        b.push({
          key: "user_agent_data_mobile",
          value: this.getUserAgentMobile()
        });
      }
      if (a && a.device) {
        b.push({
          key: "navigator_connection_downlink",
          value: this.getNetworkDownlink()
        });
        b.push({
          key: "navigator_connection_downlink_max",
          value: this.getNetworkDownlinkMax()
        });
        b.push({
          key: "network_info_rtt",
          value: this.getNetworkRTT()
        });
        b.push({
          key: "network_info_save_data",
          value: this.getNetworkSaveData()
        });
        b.push({
          key: "network_info_rtt_type",
          value: this.getNetworkType()
        });
        b.push({
          key: "screen_pixel_depth",
          value: this.getPixelDepth()
        });
        b.push({
          key: "navigator_device_memory",
          value: this.getDeviceMemory()
        });
      }
      if (a && a.user) {
        b.push({
          key: "navigator_languages",
          value: this.getLanguages()
        });
        b.push({
          key: "window_inner_width",
          value: this.getInnerWidth()
        });
        b.push({
          key: "window_inner_height",
          value: this.getInnerHeight()
        });
        b.push({
          key: "window_outer_width",
          value: this.getOuterWidth()
        });
        b.push({
          key: "window_outer_height",
          value: this.getOuterHeight()
        });
      }
      if (a && a.browserType) {
        b.push({
          key: "browser_detection_firefox",
          value: this.getFirefoxBrowser()
        });
        b.push({
          key: "browser_detection_brave",
          value: this.getBraveBrowser()
        });
      }
      if (a && a.codecs) {
        b.push({
          key: "audio_codecs",
          value: this.getAudioCodecs()
        });
        b.push({
          key: "video_codecs",
          value: this.getVideoCodecs()
        });
      }
      if (a && a.darkMode) {
        b.push({
          key: "media_query_dark_mode",
          value: this.getDarkModeCheck()
        });
      }
      if (a && a.headless) {
        b.push({
          key: "headless_browser_phantom",
          value: this.getPhantomJS()
        });
        b.push({
          key: "headless_browser_selenium",
          value: this.getSelenium()
        });
        b.push({
          key: "headless_browser_nightmare_js",
          value: this.getNightmareJS()
        });
      }
      if (a && a.phishing) {
        b.push({
          key: "document__referrer",
          value: this.getDocumentReferrer()
        });
        b.push({
          key: "window__ancestor_origins",
          value: this.getAncestorOrigins()
        });
        b.push({
          key: "window__tree_index",
          value: this.getTreeIndex(window)
        });
        b.push({
          key: "window__tree_structure",
          value: this.getTreeStructure()
        });
        b.push({
          key: "window__location_href",
          value: this.getWindowLocationHref()
        });
      }
      return b;
    }
    function l(a) {
      if (typeof a === "number") {
        return a;
      } else {
        return null;
      }
    }
    function m() {
      return Ua(document.referrer);
    }
    function n() {
      var a = [];
      if (window.location.ancestorOrigins) {
        var a = [];
        var b = window.location.ancestorOrigins;
        for (var c = 0; c < b.length; c++) {
          a.push(b[c]);
        }
        return a;
      }
      return null;
    }
    function o(a) {
      var b = a.parent;
      if (a === b) {
        return [];
      }
      var c = o(b);
      var d = -1;
      for (var e = 0; e < b.length; e++) {
        if (a === b[e]) {
          d = e;
          break;
        }
      }
      c.push(d);
      return c;
    }
    function p() {
      var a = "";
      function b(a) {
        var c = [];
        for (var d = 0; d < a.length; d++) {
          c.push(b(a[d]));
        }
        return c;
      }
      try {
        a = JSON.stringify(b(top));
      } catch (a) {}
      return a;
    }
    function q() {
      if (window.location) {
        return Ua(window.location.href);
      }
      return null;
    }
    function r(a) {
      var b = [];
      var c = 2;
      var d = 0;
      this.getAudioFingerprint(e);
      this.getBatteryCheck(e);
      function e(e) {
        if (e) {
          b.push(e);
        }
        d++;
        if (c === d) {
          a(b);
        }
      }
    }
    function s() {
      var a = 0;
      var b;
      var c;
      if (this.length === 0) {
        return a;
      }
      for (b = 0; b < this.length; b++) {
        c = this.charCodeAt(b);
        a = (a << 5) - a + c;
        a |= 0;
      }
      return a;
    }
    function t(a) {
      if (a !== true && a !== false) {
        return true;
      } else {
        return a;
      }
    }
    function u() {
      if (navigator.doNotTrack) {
        return navigator.doNotTrack;
      } else if (navigator.msDoNotTrack) {
        return navigator.msDoNotTrack;
      } else if (window.doNotTrack) {
        return window.doNotTrack;
      } else {
        return "unknown";
      }
    }
    function v() {
      return navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || "";
    }
    function w() {
      return screen.colorDepth || -1;
    }
    function x() {
      return window.devicePixelRatio || "";
    }
    function y() {
      var a = screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height];
      if (typeof a !== "undefined") {
        return a;
      }
      return false;
    }
    function z() {
      var a;
      if (screen.availWidth && screen.availHeight) {
        a = screen.availHeight > screen.availWidth ? [screen.availHeight, screen.availWidth] : [screen.availWidth, screen.availHeight];
      }
      if (typeof a !== "undefined") {
        return a;
      }
      return false;
    }
    function ea() {
      return new Date().getTimezoneOffset();
    }
    function B() {
      try {
        return !!window.sessionStorage;
      } catch (a) {
        return true;
      }
    }
    function C() {
      try {
        return !!window.localStorage;
      } catch (a) {
        return true;
      }
    }
    function D() {
      try {
        return !!window.indexedDB;
      } catch (a) {
        return true;
      }
    }
    function E() {
      if (document.body && document.body.addBehavior) {
        return true;
      } else {
        return false;
      }
    }
    function F() {
      if (window.openDatabase) {
        return true;
      } else {
        return false;
      }
    }
    function G() {
      if (navigator.cpuClass) {
        return navigator.cpuClass;
      } else {
        return "unknown";
      }
    }
    function H() {
      if (navigator.platform) {
        return navigator.platform;
      } else {
        return "unknown";
      }
    }
    function I(a) {
      var b = t(a);
      if (!b) {
        return false;
      }
      var c = document.createElement("canvas");
      if (c.getContext) {
        try {
          var d = [];
          c.width = 2000;
          c.height = 200;
          c.style.display = "inline";
          var e = c.getContext("2d");
          if (!e) {
            return false;
          }
          e.rect(0, 0, 10, 10);
          e.rect(2, 2, 6, 6);
          d.push("canvas winding:" + (e.isPointInPath(5, 5, "evenodd") === false ? "yes" : "no"));
          e.textBaseline = "alphabetic";
          e.fillStyle = "#f60";
          e.fillRect(125, 1, 62, 20);
          e.fillStyle = "#069";
          e.font = "11pt no-real-font-123";
          e.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15);
          e.fillStyle = "rgba(102, 204, 0, 0.2)";
          e.font = "18pt Arial";
          e.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45);
          e.globalCompositeOperation = "multiply";
          e.fillStyle = "rgb(255,0,255)";
          e.beginPath();
          e.arc(50, 50, 50, 0, Math.PI * 2, true);
          e.closePath();
          e.fill();
          e.fillStyle = "rgb(0,255,255)";
          e.beginPath();
          e.arc(100, 50, 50, 0, Math.PI * 2, true);
          e.closePath();
          e.fill();
          e.fillStyle = "rgb(255,255,0)";
          e.beginPath();
          e.arc(75, 100, 50, 0, Math.PI * 2, true);
          e.closePath();
          e.fill();
          e.fillStyle = "rgb(255,0,255)";
          e.arc(75, 75, 75, 0, Math.PI * 2, true);
          e.arc(75, 75, 25, 0, Math.PI * 2, true);
          e.fill("evenodd");
          d.push("canvas fp:" + c.toDataURL());
          return d.join("~");
        } catch (a) {
          return false;
        }
      } else {
        return false;
      }
    }
    function J(a) {
      if (!a) {
        return false;
      }
      return !!window.WebGLRenderingContext && !!a.getContext;
    }
    function K(a) {
      var b = t(a);
      var c = {
        webgl_extensions: null,
        webgl_extensions_hash: null,
        webgl_renderer: null,
        webgl_vendor: null,
        webgl_version: null,
        webgl_shading_language_version: null,
        webgl_aliased_line_width_range: null,
        webgl_aliased_point_size_range: null,
        webgl_antialiasing: null,
        webgl_bits: null,
        webgl_max_params: null,
        webgl_max_viewport_dims: null,
        webgl_unmasked_vendor: null,
        webgl_unmasked_renderer: null,
        webgl_vsf_params: null,
        webgl_vsi_params: null,
        webgl_fsf_params: null,
        webgl_fsi_params: null,
        webgl_hash_webgl: null
      };
      if (!b) {
        return c;
      }
      var d = document.createElement("canvas");
      if (J(d)) {
        var e = d.getContext("webgl") || d.getContext("experimental-webgl");
        if (e) {
          try {
            this.setWebGLKeys(c, e);
          } catch (a) {
            return c;
          }
        }
      }
      return c;
    }
    function L(a, b) {
      function c(a) {
        b.clearColor(0, 0, 0, 1);
        b.enable(b.DEPTH_TEST);
        b.depthFunc(b.LEQUAL);
        b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT);
        return "[" + a[0] + ", " + a[1] + "]";
      }
      a.webgl_extensions = b.getSupportedExtensions().join(";");
      a.webgl_extensions_hash = this.x64hash128(a.webgl_extensions);
      a.webgl_renderer = b.getParameter(b.RENDERER);
      a.webgl_vendor = b.getParameter(b.VENDOR);
      a.webgl_version = b.getParameter(b.VERSION);
      a.webgl_shading_language_version = b.getParameter(b.SHADING_LANGUAGE_VERSION);
      a.webgl_aliased_line_width_range = c(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE));
      a.webgl_aliased_point_size_range = c(b.getParameter(b.ALIASED_POINT_SIZE_RANGE));
      a.webgl_antialiasing = b.getContextAttributes().antialias ? "yes" : "no";
      a.webgl_bits = M(b);
      a.webgl_max_params = this.getMaxParamValues(b);
      a.webgl_max_viewport_dims = c(b.getParameter(b.MAX_VIEWPORT_DIMS));
      var d = O(b);
      if (d) {
        a.webgl_unmasked_vendor = d[0];
        a.webgl_unmasked_renderer = d[1];
      }
      if (b.getShaderPrecisionFormat) {
        a.webgl_vsf_params = this.getWebGLVSFParams(b);
        a.webgl_vsi_params = this.getWebGLVSIParams(b);
        a.webgl_fsf_params = this.getWebGLFSFParams(b);
        a.webgl_fsi_params = this.getWebGLFSIParams(b);
      }
      a.webgl_hash_webgl = this.x64hash128(Pa(a, function (a) {
        return a;
      }).join(","));
    }
    function M(a) {
      var b = [];
      b.push(a.getParameter(a.ALPHA_BITS));
      b.push(a.getParameter(a.BLUE_BITS));
      b.push(a.getParameter(a.DEPTH_BITS));
      b.push(a.getParameter(a.GREEN_BITS));
      b.push(a.getParameter(a.RED_BITS));
      b.push(a.getParameter(a.STENCIL_BITS));
      return b.join(",");
    }
    function N(a) {
      function b(a) {
        var b;
        var c = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic");
        if (c) {
          b = a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
          if (b === 0) {
            b = 2;
          }
          return b;
        } else {
          return null;
        }
      }
      var c = [];
      c.push(b(a));
      c.push(a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
      c.push(a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE));
      c.push(a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS));
      c.push(a.getParameter(a.MAX_RENDERBUFFER_SIZE));
      c.push(a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS));
      c.push(a.getParameter(a.MAX_TEXTURE_SIZE));
      c.push(a.getParameter(a.MAX_VARYING_VECTORS));
      c.push(a.getParameter(a.MAX_VERTEX_ATTRIBS));
      c.push(a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
      c.push(a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS));
      return c.join(",");
    }
    function O(a) {
      try {
        var b = a.getExtension("WEBGL_debug_renderer_info");
        if (!b) {
          return false;
        } else {
          return [a.getParameter(b.UNMASKED_VENDOR_WEBGL), a.getParameter(b.UNMASKED_RENDERER_WEBGL)];
        }
      } catch (a) {
        return false;
      }
    }
    function P(a) {
      var b = [];
      b.push(a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision);
      b.push(a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMin);
      b.push(a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMax);
      b.push(a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision);
      b.push(a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMin);
      b.push(a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMax);
      b.push(a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).precision);
      b.push(a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMin);
      b.push(a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMax);
      return b.join(",");
    }
    function Q(a) {
      var b = [];
      b.push(a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).precision);
      b.push(a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMin);
      b.push(a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMax);
      b.push(a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).precision);
      b.push(a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMin);
      b.push(a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMax);
      b.push(a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).precision);
      b.push(a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMin);
      b.push(a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMax);
      return b.join(",");
    }
    function R(a) {
      var b = [];
      b.push(a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision);
      b.push(a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMin);
      b.push(a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMax);
      b.push(a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).precision);
      b.push(a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMin);
      b.push(a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMax);
      b.push(a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).precision);
      b.push(a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMin);
      b.push(a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMax);
      return b.join(",");
    }
    function S(a) {
      var b = [];
      b.push(a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).precision);
      b.push(a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMin);
      b.push(a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMax);
      b.push(a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).precision);
      b.push(a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMin);
      b.push(a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMax);
      b.push(a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).precision);
      b.push(a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMin);
      b.push(a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMax);
      return b.join(",");
    }
    function T() {
      var a = Math.max(screen.width, screen.height);
      var b = Math.min(screen.width, screen.height);
      var c = Math.max(screen.availWidth, screen.availHeight);
      var d = Math.min(screen.availWidth, screen.availHeight);
      if (a < c) {
        return true;
      }
      if (b < d) {
        return true;
      }
      return false;
    }
    function U() {
      var a = navigator.userAgent.toLowerCase();
      var b = navigator.oscpu;
      var c = navigator.platform.toLowerCase();
      var d;
      if (a.indexOf("android") >= 0) {
        d = "Android";
      } else if (a.indexOf("windows phone") >= 0) {
        d = "Windows Phone";
      } else if (a.indexOf("win") >= 0) {
        d = "Windows";
      } else if (a.indexOf("cros") >= 0) {
        d = "CrOS";
      } else if (a.indexOf("linux") >= 0) {
        d = "Linux";
      } else if (a.indexOf("iphone") >= 0 || a.indexOf("ipad") >= 0 || a.indexOf("ipod") >= 0) {
        d = "iOS";
      } else if (a.indexOf("mac") >= 0) {
        d = "Mac";
      } else {
        d = "Other";
      }
      if (typeof b !== "undefined") {
        b = b.toLowerCase();
        if (b.indexOf("win") >= 0 && d !== "Windows" && d !== "Windows Phone") {
          return true;
        } else if (b.indexOf("linux") >= 0 && d !== "Linux" && d !== "Android") {
          return true;
        } else if (b.indexOf("mac") >= 0 && d !== "Mac" && d !== "iOS") {
          return true;
        } else if (b.indexOf("win") === 0 && b.indexOf("linux") === 0 && b.indexOf("mac") >= 0 && d !== "other") {
          return true;
        }
      }
      if (c.indexOf("win") >= 0 && d !== "Windows" && d !== "Windows Phone") {
        if (a.indexOf("eawebkit") >= 0) {
          return false;
        }
        return true;
      } else if ((c.indexOf("linux") >= 0 || c.indexOf("android") >= 0 || c.indexOf("pike") >= 0) && d !== "Linux" && d !== "Android" && d !== "CrOS") {
        return true;
      } else if ((c.indexOf("mac") >= 0 || c.indexOf("ipad") >= 0 || c.indexOf("ipod") >= 0 || c.indexOf("iphone") >= 0) && d !== "Mac" && d !== "iOS") {
        return true;
      } else if (c.indexOf("win") === 0 && c.indexOf("linux") === 0 && c.indexOf("mac") >= 0 && d !== "other") {
        return true;
      }
      if (typeof navigator.plugins === "undefined" && d !== "Windows" && d !== "Windows Phone") {
        return true;
      }
      return false;
    }
    function V() {
      var a = navigator.userAgent.toLowerCase();
      var b = navigator.productSub;
      var c;
      if (a.indexOf("firefox") >= 0) {
        c = "Firefox";
      } else if (a.indexOf("opera") >= 0 || a.indexOf("opr") >= 0) {
        c = "Opera";
      } else if (a.indexOf("chrome") >= 0) {
        c = "Chrome";
      } else if (a.indexOf("safari") >= 0) {
        c = "Safari";
      } else if (a.indexOf("trident") >= 0) {
        c = "Internet Explorer";
      } else {
        c = "Other";
      }
      if ((c === "Chrome" || c === "Safari" || c === "Opera") && b !== "20030107") {
        return true;
      }
      var d = eval.toString().length;
      if (d === 37 && c !== "Safari" && c !== "Firefox" && c !== "Other") {
        return true;
      } else if (d === 39 && c !== "Internet Explorer" && c !== "Other") {
        return true;
      } else if (d === 33 && c !== "Chrome" && c !== "Opera" && c !== "Other") {
        return true;
      }
      var e;
      try {
        throw "a";
      } catch (a) {
        try {
          a.toSource();
          e = true;
        } catch (a) {
          e = false;
        }
      }
      if (e && c !== "Firefox" && c !== "Other") {
        return true;
      }
      return false;
    }
    function W(a) {
      var b = ["monospace", "sans-serif", "serif"];
      var c = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
      var d = "mmmmmmmmmmlli";
      var e = "72px";
      if (!document.getElementsByTagName("body")[0]) {
        return false;
      }
      var f = document.getElementsByTagName("body")[0];
      var g = document.createElement("div");
      var h = document.createElement("div");
      var i = {};
      var j = {};
      function k() {
        var a = document.createElement("span");
        a.style.position = "absolute";
        a.style.left = "-9999px";
        a.style.fontSize = e;
        a.style.lineHeight = "normal";
        a.innerHTML = d;
        return a;
      }
      function l(a, b) {
        var c = k();
        c.style.fontFamily = "'" + a + "'," + b;
        return c;
      }
      function m() {
        var a = [];
        for (var c = 0, d = b.length; c < d; c++) {
          var e = k();
          e.style.fontFamily = b[c];
          g.appendChild(e);
          a.push(e);
        }
        return a;
      }
      function n() {
        var a = {};
        for (var d = 0, e = c.length; d < e; d++) {
          var f = [];
          for (var g = 0, i = b.length; g < i; g++) {
            var j = l(c[d], b[g]);
            h.appendChild(j);
            f.push(j);
          }
          a[c[d]] = f;
        }
        return a;
      }
      function o(a) {
        var c = false;
        for (var d = 0; d < b.length; d++) {
          c = a[d].offsetWidth !== i[b[d]] || a[d].offsetHeight !== j[b[d]];
          if (c) {
            return c;
          }
        }
        return c;
      }
      var p = m();
      f.appendChild(g);
      for (var q = 0, r = b.length; q < r; q++) {
        i[b[q]] = p[q].offsetWidth;
        j[b[q]] = p[q].offsetHeight;
      }
      var s = n();
      f.appendChild(h);
      var t = [];
      for (var u = 0, v = c.length; u < v; u++) {
        if (o(s[c[u]])) {
          t.push(c[u]);
        }
      }
      f.removeChild(h);
      f.removeChild(g);
      return t;
    }
    function X() {
      if (navigator.appName === "Microsoft Internet Explorer") {
        return true;
      } else if (navigator.appName === "Netscape" && /Trident/.test(navigator.userAgent)) {
        return true;
      }
      return false;
    }
    function Y() {
      if (navigator.connection) {
        return navigator.connection.downlink || null;
      }
      return null;
    }
    function Z() {
      if (navigator.connection) {
        return navigator.connection.downlinkMax || null;
      }
      return null;
    }
    function fa() {
      if (navigator.connection) {
        return navigator.connection.rtt || null;
      }
      return null;
    }
    function ga() {
      if (navigator.connection) {
        if (navigator.connection.saveData === undefined) {
          return null;
        }
        return navigator.connection.saveData;
      }
      return null;
    }
    function ha() {
      if (navigator.connection) {
        return navigator.connection.type || null;
      }
      return null;
    }
    function ia() {
      return l(screen.pixelDepth);
    }
    function ja() {
      return l(navigator.deviceMemory);
    }
    function ka() {
      if (navigator.userAgentData) {
        if (navigator.userAgentData.brands) {
          return Pa(navigator.userAgentData.brands, function (a) {
            return a.brand;
          }).join(",");
        }
      }
      return null;
    }
    function la() {
      if (navigator.userAgentData) {
        if (navigator.userAgentData.mobile === undefined) {
          return null;
        }
        return navigator.userAgentData.mobile;
      }
      return null;
    }
    function ma() {
      if (navigator.languages && typeof navigator.languages.join === "function") {
        return navigator.languages.join(",");
      }
      return null;
    }
    function na() {
      return l(window.innerWidth);
    }
    function oa() {
      return l(window.innerHeight);
    }
    function aa() {
      return l(window.outerWidth);
    }
    function pa() {
      return l(window.outerHeight);
    }
    function qa(a) {
      try {
        var b = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 44100, 44100);
        var c = b.createOscillator();
        c.type = "triangle";
        c.frequency.value = 10000;
        var d = b.createDynamicsCompressor();
        if (d.threshold) {
          d.threshold.value = -50;
        }
        if (d.knee) {
          d.knee.value = 40;
        }
        if (d.ratio) {
          d.ratio.value = 12;
        }
        if (d.reduction) {
          d.reduction.value = -20;
        }
        if (d.attack) {
          d.attack.value = 0;
        }
        if (d.release) {
          d.release.value = 0.25;
        }
        c.connect(d);
        d.connect(b.destination);
        c.start(0);
        b.startRendering();
        b.oncomplete = function (b) {
          var c = 0;
          for (var e = 4500; e < 5000; e++) {
            c += Math.abs(b.renderedBuffer.getChannelData(0)[e]);
          }
          d.disconnect();
          a({
            key: "audio_fingerprint",
            value: c.toString()
          });
        };
      } catch (b) {
        setTimeout(a, 0);
      }
    }
    function ra() {
      if (navigator.userAgent) {
        if (navigator.userAgent.indexOf("Firefox") > 0) {
          return true;
        } else {
          return false;
        }
      }
      return null;
    }
    function sa() {
      if (navigator.brave) {
        return true;
      } else {
        return false;
      }
    }
    function ta() {
      var a = document.createElement("audio");
      var b = null;
      if (a.canPlayType) {
        b = JSON.stringify({
          ogg: a.canPlayType("audio/ogg; codecs=\"vorbis\""),
          mp3: a.canPlayType("audio/mpeg;"),
          wav: a.canPlayType("audio/wav; codecs=\"1\""),
          m4a: a.canPlayType("audio/x-m4a;"),
          aac: a.canPlayType("audio/aac;")
        });
      }
      ;
      return b;
    }
    function ua() {
      var a = document.createElement("video");
      var b = null;
      if (a.canPlayType) {
        b = JSON.stringify({
          ogg: a.canPlayType("video/ogg; codecs=\"theora\""),
          h264: a.canPlayType("video/mp4; codecs=\"avc1.42E01E\""),
          webm: a.canPlayType("video/webm; codecs=\"vp8, vorbis\""),
          mpeg4v: a.canPlayType("video/mp4; codecs=\"mp4v.20.8, mp4a.40.2\""),
          mpeg4a: a.canPlayType("video/mp4; codecs=\"mp4v.20.240, mp4a.40.2\""),
          theora: a.canPlayType("video/x-matroska; codecs=\"theora, vorbis\"")
        });
      }
      ;
      return b;
    }
    function va(a) {
      if (navigator.getBattery) {
        navigator.getBattery().then(function (b) {
          var c = b.charging;
          a({
            key: "navigator_battery_charging",
            value: c
          });
        }).catch(function (b) {
          a();
        });
      } else {
        setTimeout(a, 0);
      }
    }
    function wa() {
      return Boolean(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) || Boolean(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").msMatchesSelector);
    }
    function xa() {
      var a = ["callPhantom" in window, "_phantom" in window, "phantom" in window];
      var b = false;
      for (var c = 0; c < a.length; c++) {
        if (a[c] === true) {
          b = true;
        }
      }
      return b;
    }
    function ya() {
      try {
        var a = ["__webdriver_evaluate", "__selenium_evaluate", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__driver_evaluate", "__selenium_unwrapped", "__fxdriver_unwrapped"];
        var b = ["_selenium", "callSelenium", "_Selenium_IDE_Recorder", "webdriver"];
        for (var c in b) {
          var d = b[c];
          if (window[d]) {
            return true;
          }
          ;
        }
        ;
        for (var e in a) {
          var f = a[e];
          if (window.document[f]) {
            return true;
          }
        }
        ;
        for (var g in window.document) {
          if (g.match(/\$[a-z]dc_/) && window.document[g].cache_) {
            return true;
          }
        }
        if (window.document.documentElement.getAttribute("selenium")) {
          return true;
        }
        if (window.document.documentElement.getAttribute("webdriver")) {
          return true;
        }
        if (window.document.documentElement.getAttribute("driver")) {
          return true;
        }
        if (navigator.webdriver) {
          return true;
        }
        return false;
      } catch (a) {
        return null;
      }
    }
    function za() {
      return !!window.__nightmare;
    }
    function Aa() {
      return 1;
    }
    function Ba() {
      if (X()) {
        var a = [];
        if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
          var b = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
          a = Pa(b, function (a) {
            try {
              new ActiveXObject(a);
              return a;
            } catch (a) {
              return null;
            }
          });
        }
        return a;
      } else {
        var c = [];
        for (var d = 0, e = navigator.plugins.length; d < e; d++) {
          c.push(navigator.plugins[d]);
        }
        if (this.sortPlugins()) {
          c = c.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });
        }
        return Pa(c, function (a) {
          var b = Pa(a, function (a) {
            return [a.type, a.suffixes].join("~");
          }).join(",");
          return [a.name, a.description, b].join("::");
        }, this);
      }
    }
    function Ca() {
      var a = 0;
      var b = false;
      if (typeof navigator.maxTouchPoints !== "undefined") {
        a = navigator.maxTouchPoints;
      } else if (typeof navigator.msMaxTouchPoints !== "undefined") {
        a = navigator.msMaxTouchPoints;
      }
      if (isNaN(a)) {
        a = -999;
      }
      try {
        document.createEvent("TouchEvent");
        b = true;
      } catch (a) {}
      var c = ("ontouchstart" in window);
      return [a, b, c];
    }
    function Da() {
      if (navigator.hardwareConcurrency) {
        return navigator.hardwareConcurrency;
      }
      return "unknown";
    }
    function Ea() {
      return typeof window.swfobject !== "undefined";
    }
    function Fa() {
      if (!Object.getOwnPropertyNames) {
        return "LEGACY_ENV";
      }
      var a = /^f_.*$/;
      var b = /^arkoseLabsClientApi.*/;
      var c = Qa(Object.getOwnPropertyNames(window), function (c) {
        return !c.match(a) && !c.match(b);
      });
      return Na(c.sort().join("|"), 420);
    }
    function Ga() {
      if (!Object.getOwnPropertyNames) {
        return "LEGACY_ENV";
      }
      var a = window;
      var b = [];
      while (!!Object.getPrototypeOf(a)) {
        a = Object.getPrototypeOf(a);
        b = b.concat(Object.getOwnPropertyNames(a));
      }
      return this.x64hash128(b.join("|"), 420);
    }
    function Ha(a, b) {
      a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
      b = [b[0] >>> 16, b[0] & 65535, b[1] >>> 16, b[1] & 65535];
      var c = [0, 0, 0, 0];
      c[3] += a[3] + b[3];
      c[2] += c[3] >>> 16;
      c[3] &= 65535;
      c[2] += a[2] + b[2];
      c[1] += c[2] >>> 16;
      c[2] &= 65535;
      c[1] += a[1] + b[1];
      c[0] += c[1] >>> 16;
      c[1] &= 65535;
      c[0] += a[0] + b[0];
      c[0] &= 65535;
      return [c[0] << 16 | c[1], c[2] << 16 | c[3]];
    }
    function Ia(a, b) {
      a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
      b = [b[0] >>> 16, b[0] & 65535, b[1] >>> 16, b[1] & 65535];
      var c = [0, 0, 0, 0];
      c[3] += a[3] * b[3];
      c[2] += c[3] >>> 16;
      c[3] &= 65535;
      c[2] += a[2] * b[3];
      c[1] += c[2] >>> 16;
      c[2] &= 65535;
      c[2] += a[3] * b[2];
      c[1] += c[2] >>> 16;
      c[2] &= 65535;
      c[1] += a[1] * b[3];
      c[0] += c[1] >>> 16;
      c[1] &= 65535;
      c[1] += a[2] * b[2];
      c[0] += c[1] >>> 16;
      c[1] &= 65535;
      c[1] += a[3] * b[1];
      c[0] += c[1] >>> 16;
      c[1] &= 65535;
      c[0] += a[0] * b[3] + a[1] * b[2] + a[2] * b[1] + a[3] * b[0];
      c[0] &= 65535;
      return [c[0] << 16 | c[1], c[2] << 16 | c[3]];
    }
    function Ja(a, b) {
      b %= 64;
      if (b === 32) {
        return [a[1], a[0]];
      } else if (b < 32) {
        return [a[0] << b | a[1] >>> 32 - b, a[1] << b | a[0] >>> 32 - b];
      } else {
        b -= 32;
        return [a[1] << b | a[0] >>> 32 - b, a[0] << b | a[1] >>> 32 - b];
      }
    }
    function Ka(a, b) {
      b %= 64;
      if (b === 0) {
        return a;
      } else if (b < 32) {
        return [a[0] << b | a[1] >>> 32 - b, a[1] << b];
      } else {
        return [a[1] << b - 32, 0];
      }
    }
    function La(a, b) {
      return [a[0] ^ b[0], a[1] ^ b[1]];
    }
    function Ma(a) {
      a = La(a, [0, a[0] >>> 1]);
      a = Ia(a, [4283543511, 3981806797]);
      a = La(a, [0, a[0] >>> 1]);
      a = Ia(a, [3301882366, 444984403]);
      a = La(a, [0, a[0] >>> 1]);
      return a;
    }
    function Na(a, b) {
      a = a || "";
      b = b || 0;
      var c = a.length % 16;
      var d = a.length - c;
      var e = [0, b];
      var f = [0, b];
      var g = [0, 0];
      var h = [0, 0];
      var i = [2277735313, 289559509];
      var j = [1291169091, 658871167];
      for (var k = 0; k < d; k = k + 16) {
        g = [a.charCodeAt(k + 4) & 255 | (a.charCodeAt(k + 5) & 255) << 8 | (a.charCodeAt(k + 6) & 255) << 16 | (a.charCodeAt(k + 7) & 255) << 24, a.charCodeAt(k) & 255 | (a.charCodeAt(k + 1) & 255) << 8 | (a.charCodeAt(k + 2) & 255) << 16 | (a.charCodeAt(k + 3) & 255) << 24];
        h = [a.charCodeAt(k + 12) & 255 | (a.charCodeAt(k + 13) & 255) << 8 | (a.charCodeAt(k + 14) & 255) << 16 | (a.charCodeAt(k + 15) & 255) << 24, a.charCodeAt(k + 8) & 255 | (a.charCodeAt(k + 9) & 255) << 8 | (a.charCodeAt(k + 10) & 255) << 16 | (a.charCodeAt(k + 11) & 255) << 24];
        g = Ia(g, i);
        g = Ja(g, 31);
        g = Ia(g, j);
        e = La(e, g);
        e = Ja(e, 27);
        e = Ha(e, f);
        e = Ha(Ia(e, [0, 5]), [0, 1390208809]);
        h = Ia(h, j);
        h = Ja(h, 33);
        h = Ia(h, i);
        f = La(f, h);
        f = Ja(f, 31);
        f = Ha(f, e);
        f = Ha(Ia(f, [0, 5]), [0, 944331445]);
      }
      g = [0, 0];
      h = [0, 0];
      switch (c) {
        case 15:
          h = La(h, Ka([0, a.charCodeAt(k + 14)], 48));
        case 14:
          h = La(h, Ka([0, a.charCodeAt(k + 13)], 40));
        case 13:
          h = La(h, Ka([0, a.charCodeAt(k + 12)], 32));
        case 12:
          h = La(h, Ka([0, a.charCodeAt(k + 11)], 24));
        case 11:
          h = La(h, Ka([0, a.charCodeAt(k + 10)], 16));
        case 10:
          h = La(h, Ka([0, a.charCodeAt(k + 9)], 8));
        case 9:
          h = La(h, [0, a.charCodeAt(k + 8)]);
          h = Ia(h, j);
          h = Ja(h, 33);
          h = Ia(h, i);
          f = La(f, h);
        case 8:
          g = La(g, Ka([0, a.charCodeAt(k + 7)], 56));
        case 7:
          g = La(g, Ka([0, a.charCodeAt(k + 6)], 48));
        case 6:
          g = La(g, Ka([0, a.charCodeAt(k + 5)], 40));
        case 5:
          g = La(g, Ka([0, a.charCodeAt(k + 4)], 32));
        case 4:
          g = La(g, Ka([0, a.charCodeAt(k + 3)], 24));
        case 3:
          g = La(g, Ka([0, a.charCodeAt(k + 2)], 16));
        case 2:
          g = La(g, Ka([0, a.charCodeAt(k + 1)], 8));
        case 1:
          g = La(g, [0, a.charCodeAt(k)]);
          g = Ia(g, i);
          g = Ja(g, 31);
          g = Ia(g, j);
          e = La(e, g);
      }
      e = La(e, [0, a.length]);
      f = La(f, [0, a.length]);
      e = Ha(e, f);
      f = Ha(f, e);
      e = Ma(e);
      f = Ma(f);
      e = Ha(e, f);
      f = Ha(f, e);
      return ("00000000" + (e[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (e[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[1] >>> 0).toString(16)).slice(-8);
    }
    function Oa(a, b, c) {
      if (a === null) {
        return;
      }
      if (this.nativeForEach && a.forEach === this.nativeForEach) {
        a.forEach(b, c);
      } else if (a.length === +a.length) {
        for (var d = 0, e = a.length; d < e; d++) {
          if (b.call(c, a[d], d, a) === {}) {
            return;
          }
        }
      } else {
        for (var f in a) {
          if (a.hasOwnProperty(f)) {
            if (b.call(c, a[f], f, a) === {}) {
              return;
            }
          }
        }
      }
    }
    function Pa(a, b, c) {
      var d = [];
      if (a == null) {
        return d;
      }
      if (this.nativeMap && a.map === this.nativeMap) {
        return a.map(b, c);
      }
      Oa(a, function (a, e, f) {
        d[d.length] = b.call(c, a, e, f);
      });
      return d;
    }
    function Qa(a, b, c) {
      if (!Array.prototype.filter) {
        Array.prototype.filter = function (a, b) {
          'use strict';
  
          if (typeof a !== "Function" && typeof a !== "function" || !this) {
            throw new TypeError();
          }
          var c = this.length >>> 0;
          var d = new Array(c);
          var e = this;
          var f = 0;
          var g = -1;
          var h;
          if (b === undefined) {
            while (++g !== c) {
              if (g in this) {
                h = e[g];
                if (a(e[g], g, e)) {
                  d[f++] = h;
                }
              }
            }
          } else {
            while (++g !== c) {
              if (g in this) {
                h = e[g];
                if (a.call(b, e[g], g, e)) {
                  d[f++] = h;
                }
              }
            }
          }
          d.length = f;
          return d;
        };
      }
      return a.filter(b, c);
    }
    var Ra = {};
    Ra.encode = function (a) {
      var b = a.replace(/[\u0080-\u07ff]/g, function (a) {
        var b = a.charCodeAt(0);
        return String.fromCharCode(b >> 6 | 192, b & 63 | 128);
      });
      b = b.replace(/[\u0800-\uffff]/g, function (a) {
        var b = a.charCodeAt(0);
        return String.fromCharCode(b >> 12 | 224, b >> 6 & 63 | 128, b & 63 | 128);
      });
      return b;
    };
    var Sa = {
      code: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    };
    Sa.encode = function (a, b) {
      b = typeof b == "undefined" ? false : b;
      var c;
      var d;
      var e;
      var f;
      var g;
      var h;
      var i;
      var j;
      var k = [];
      var l = "";
      var m;
      var n;
      var o;
      var p = Sa.code;
      n = b ? Ra.encode(a) : a;
      m = n.length % 3;
      if (m > 0) {
        while (m++ < 3) {
          l += "=";
          n += "\0";
        }
      }
      for (m = 0; m < n.length; m += 3) {
        c = n.charCodeAt(m);
        d = n.charCodeAt(m + 1);
        e = n.charCodeAt(m + 2);
        f = c << 16 | d << 8 | e;
        g = f >> 18 & 63;
        h = f >> 12 & 63;
        i = f >> 6 & 63;
        j = f & 63;
        k[m / 3] = p.charAt(g) + p.charAt(h) + p.charAt(i) + p.charAt(j);
      }
      o = k.join("");
      o = o.slice(0, o.length - l.length) + l;
      return o;
    };
    Sa.decode = function (a, b) {
      b = typeof b == "undefined" ? false : b;
      var c;
      var d;
      var e;
      var f;
      var g;
      var h;
      var i;
      var j;
      var k = [];
      var l;
      var m;
      var n = Sa.code;
      m = b ? Ra.decode(a) : a;
      for (var o = 0; o < m.length; o += 4) {
        f = n.indexOf(m.charAt(o));
        g = n.indexOf(m.charAt(o + 1));
        h = n.indexOf(m.charAt(o + 2));
        i = n.indexOf(m.charAt(o + 3));
        j = f << 18 | g << 12 | h << 6 | i;
        c = j >>> 16 & 255;
        d = j >>> 8 & 255;
        e = j & 255;
        k[o / 4] = String.fromCharCode(c, d, e);
        if (i == 64) {
          k[o / 4] = String.fromCharCode(c, d);
        }
        if (h == 64) {
          k[o / 4] = String.fromCharCode(c);
        }
      }
      l = k.join("");
      if (b) {
        return Ra.decode(l);
      } else {
        return l;
      }
    };
    function Ta(a, b, c) {
      if (!window.postMessage || !window.JSON) {
        c(null, new Error("data request not supported"));
      }
      var d = false;
      window.postMessage(JSON.stringify({
        message: "data_request",
        data: b,
        key: a,
        type: "broadcast"
      }), "*");
      function e(b) {
        try {
          var f = JSON.parse(b.data);
          var g = f.data.data;
          var h = f.message;
          var i = f.key;
          if (i != a) {
            throw Error("EC/CAPI Key mismatch.");
          }
          if (h === "data_response") {
            d = true;
            decodedData = Sa.decode(g);
            parsedData = JSON.parse(decodedData);
            c(parsedData);
            window.removeEventListener("message", e);
          }
        } catch (a) {
          d = true;
          c(null, a);
          window.removeEventListener("message", e);
        }
      }
      window.addEventListener("message", e);
      setTimeout(function () {
        if (!d) {
          c(null, new Error("Data request timeout exceeded."));
          window.removeEventListener("message", e);
        }
      }, 500);
    }
    function Ua(a) {
      if (!a && typeof a !== "string") {
        return null;
      }
      var b = a.split("?");
      return b[0];
    }
    this.fc_fp = new g(this.extended_fingerprinting_enabled, this.fingerprinting_enabled);
    window.ae = window.ae || {};
    this.msie = document.documentMode;
    if (!this.msie) {
      var Va = navigator.userAgent.match(/MSIE (.*?);/);
      if (Va) {
        this.msie = Va[1];
      }
    }
    if (!Date.now) {
      Date.now = function a() {
        return new Date().getTime();
      };
    }
    try {
      var Wa = navigator.userAgent.indexOf("Android");
      if (Wa > -1) {
        this.android_ver = parseFloat(navigator.userAgent.slice(Wa + 8));
      }
    } catch (a) {}
    this.get_outer_html = function (a) {
      return a.outerHTML || function (a) {
        var b = document.createElement("div");
        var c;
        b.appendChild(a.cloneNode(true));
        c = b.innerHTML;
        b = null;
        return c;
      }(a);
    };
    this.find_onload = function () {
      fc_obj = this;
      try {
        window[$]();
      } catch (a) {
        fc_obj.onload_retry++;
        if (fc_obj.onload_retry < 20) {
          setTimeout(function () {
            fc_obj.find_onload();
          }, 500);
        }
      }
    };
    this.get_query_data = function (a) {
      var b = [];
      var c;
      var d = a.slice(a.indexOf("?") + 1).split("&");
      for (var e = 0; e < d.length; e++) {
        c = d[e].split("=");
        b.push(c[0]);
        b[c[0]] = c[1];
      }
      return b;
    };
    this.log = function (a) {
      if (window.console) {
        console.log(a);
      }
    };
    this.setAPIInput = function (a) {
      if (!a) {
        return;
      }
      if (a.target_html) {
        this.target = a.target_html;
      }
      if (a.language) {
        this.language = a.language;
      }
      if (a.styletheme) {
        this.style_theme = a.styletheme;
      }
      if (a.surl) {
        this.fc_api_server = a.surl;
      }
      if (a.data) {
        this.data = a.data;
      }
      if (a.siteData) {
        this.siteData = a.siteData;
      }
      if (a.accessibilitySettings) {
        window.ae.accessibilitySettings = a.accessibilitySettings;
      }
      if (a.isSDK) {
        this.data_request = {
          sdk: {
            default: ["all"]
          },
          received: false
        };
      }
    };
    this.setQueryDataInput = function (a) {
      if (this.query_data.public_key) {
        this.public_key = this.query_data.public_key;
      }
      if (this.query_data.target_html) {
        this.target = this.query_data.target_html;
      }
      if (this.query_data.language) {
        this.language = this.query_data.language;
      }
      if (this.query_data.styletheme) {
        this.style_theme = this.query_data.styletheme;
      }
      if (this.query_data.surl) {
        this.fc_api_server = this.query_data.surl;
      }
      if (this.query_data.data) {
        this.data = this.query_data.data;
      }
      if (this.query_data.cloudflare_access_client_id) {
        this.cloudflare_access_client_id = this.query_data.cloudflare_access_client_id;
      }
      if (this.query_data.cloudflare_access_client_secret) {
        this.cloudflare_access_client_secret = this.query_data.cloudflare_access_client_secret;
      }
    };
    var Xa = document.querySelectorAll("script[src*=arkoselabs\\.com\\/fc\\/api]");
    if (!Xa || Xa.length === 0) {
      Xa = document.querySelectorAll("script[src*=funcaptcha\\.com\\/fc\\/api]");
    }
    if (!Xa || Xa.length === 0) {
      Xa = document.querySelectorAll("script[src*=\\/fc\\/api]");
    }
    if (Xa.length === 1) {
      var Ya = Xa[0].src;
      var Za = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im;
      var $a = Za.exec(Ya)[0];
      if ($a) {
        this.fc_api_server = $a;
      }
    }
    var _a = document.querySelectorAll("script[ec-api-script='true']");
    if (_a.length === 1) {
      var Ya = _a[0].src;
      var Za = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im;
      var $a = Za.exec(Ya)[0];
      if ($a) {
        this.cdn = $a;
      }
    }
    if (!i) {
      var ab = document.querySelectorAll("script");
      for (var bb = ab.length - 1; bb >= 0; bb--) {
        var cb = this.get_outer_html(ab[bb]);
        if (cb.indexOf(this.api_target) != -1 || cb.indexOf(this.api_target_sri) != -1 && cb.indexOf("?onload=") != -1) {
          this.query_data = this.get_query_data(ab[bb].src);
          this.setQueryDataInput(this.query_data);
          $ = this.query_data.onload;
          _ = this.query_data.onsuppress;
          ba = this.query_data.onshown;
          ca = this.query_data.onerror;
          if (this.query_data.cleanup_html) {
            document.querySelectorAll("#FunCaptcha-Token")[0].remove();
          }
        }
      }
      ;
      if ($) {
        this.find_onload();
        return;
      } else {
        var db = document.getElementById(this.target);
        if (!db && document.querySelector) {
          db = document.querySelector("#" + this.target);
          if (!db) {
            db = document.querySelector("." + this.target);
          }
        }
        if (!db) {
          return;
        }
        if (!this.public_key) {
          this.public_key = db.getAttribute("data-pkey");
        }
      }
    }
    if (!this.public_key) {
      if (!i || !i.public_key) {
        this.log("Arkose Labs: No public key has been set. You can get your public key at www.arkoselabs.com. Please add this to the 'arkose_enforcement' element as an attribute called 'data-pkey'.");
        return;
      } else {
        this.public_key = i.public_key;
      }
    }
    this.setAPIInput(i);
    if (i) {
      if (i.onsuppress) {
        _ = i.onsuppress;
      }
      if (i.onshown) {
        ba = i.onshown;
      }
      if (i.onerror) {
        ca = i.onerror;
      }
    }
    window.ae.configData = {
      siteData: this.siteData
    };
    var eb = this.siteData.location;
    if (!eb.origin) {
      eb.origin = eb.protocol + "//" + eb.hostname + (eb.port ? ":" + eb.port : "");
    }
    var fb = this.siteData.location.origin;
    var gb = navigator.userAgent;
    var hb = "js";
    this.get_html = function () {
      var b = this;
      this.getFP();
      var c = b.fc_api_server + "/fc/gt2/public_key/" + b.public_key;
      var d = {};
      var e = [{
        key: "public_key",
        value: b.public_key
      }, {
        key: "site",
        value: fb
      }, {
        key: "userbrowser",
        value: gb
      }];
      if (b.capiVersion) {
        e.push({
          key: "capi_version",
          value: b.capiVersion
        });
      }
      if (b.capiMode) {
        e.push({
          key: "capi_mode",
          value: b.capiMode
        });
      }
      var f = [{
        key: "api_type",
        value: "js"
      }];
      if (b.language) {
        e.push({
          key: "language",
          value: b.language
        });
      }
      if (b.style_theme) {
        e.push({
          key: "style_theme",
          value: b.style_theme
        });
        window.ae.styleTheme = b.style_theme;
      }
      if (b.passValues) {
        Object.keys(b.passValues).forEach(function (a) {
          e.push({
            key: a,
            value: b.passValues[a]
          });
        });
      }
      if (window.JSON) {
        if (window.postMessage && typeof document.createEvent === "function" && this.canvasSupported() && !(b.msie < 9) && !(b.android_ver < 3) && this.isFPValidForSuppress() && this.siteData.location.href.indexOf("fc_nosuppress=1") == -1 && this.siteData.location.href.indexOf("ec_nosuppress=1") == -1) {
          f.push({
            key: "p",
            value: 1
          });
        }
        if (this.fp_result.fp.fp) {
          f.push({
            key: "f",
            value: this.fp_result.fp.fp
          });
          f.push({
            key: "n",
            value: Sa.encode(Math.round(Date.now() / 1000).toString())
          });
          f.push({
            key: "wh",
            value: this.fp_result.fp.window
          });
          var g = [];
          for (var h in this.fp_result.fp.vals) {
            if (!this.fp_result.fp.vals.hasOwnProperty(h)) {
              continue;
            }
            var j = this.fp_result.fp.vals[h];
            switch (j.key) {
              case "CFP":
                g.push(j.key + ":" + ib(j.value));
                break;
              case "P":
                var k = [];
                for (var l in j.value) {
                  if (!j.value.hasOwnProperty(l)) {
                    continue;
                  }
                  var m = j.value[l];
                  if (m) {
                    k.push(m.split("::")[0]);
                  }
                }
                g.push(j.key + ":" + k.join(","));
                break;
              default:
                g.push(j.key + ":" + j.value);
                break;
            }
          }
          if (this.fp_result.enhanced_fp) {
            function a(a) {
              if (a.location) {
                return {
                  key: "client_config__sitedata_location_href",
                  value: Ua(a.location.href)
                };
              }
              return {
                key: "client_config__sitedata_location_href",
                value: null
              };
            }
            this.fp_result.enhanced_fp.push(a(this.siteData));
            if (i !== undefined && i !== null) {
              this.fp_result.enhanced_fp.push({
                key: "client_config__surl",
                value: Ua(i.surl)
              });
              this.fp_result.enhanced_fp.push({
                key: "mobile_sdk__is_sdk",
                value: i.isSDK
              });
            }
            this.fp_result.enhanced_fp.push({
              key: "client_config__language",
              value: this.language || null
            });
            f.push({
              key: "enhanced_fp",
              value: this.fp_result.enhanced_fp
            });
          }
          f.push({
            key: "fe",
            value: g
          });
          f.push({
            key: "ife_hash",
            value: this.fc_fp.x64hash128(g.join(", "), 38)
          });
        }
        if (this.canvasSupported()) {
          f.push({
            key: "cs",
            value: 1
          });
        }
        if (this.fp_result.fp_vals.f_true) {
          f.push({
            key: "fb",
            value: 1
          });
        }
        var n = {};
        if (window && window.history && window.history.length) {
          n.HL = window.history.length;
        }
        if (navigator.cookieEnabled) {
          n.NCE = navigator.cookieEnabled;
        }
        n.DT = document.title;
        if (navigator) {
          var o = JSON.stringify(navigator.webdriver);
          if (navigator.webdriver === undefined) {
            o = "undefined";
            var p = Object.getOwnPropertyDescriptor(navigator, "webdriver");
            if (p) {
              o = "faked";
            }
          }
          n.NWD = o;
        }
        if (Date.now) {
          var q = Date.now();
        }
        var r = {
          navigator_connection_downlink: "float",
          navigator_connection_downlink_max: "float"
        };
        var s = function () {
          if (!this.async_fingerprints.received) {
            return;
          }
          if (this.data_request && !this.data_request.received) {
            return;
          }
          if (this.loadedWithData) {
            return;
          }
          n.DOTO = 1;
          n.DMTO = 1;
          this.loadedWithData = true;
          f.push({
            key: "jsbd",
            value: JSON.stringify(n)
          });
          var b = new Date().getTime() / 1000;
          var c = 21600;
          var e = navigator.userAgent;
          var g = Math.round(b - b % c);
          var h = a(f, r);
          var i = A.encrypt(h, e + g);
          d.bda = Sa.encode(i);
          D();
        }.bind(this);
        var t = function (a) {
          for (var b = 0; b < f.length; b++) {
            if (f[b].key === "enhanced_fp") {
              f[b].value = f[b].value.concat(a);
            }
          }
          this.async_fingerprints.received = true;
          s();
        }.bind(this);
        this.fc_fp.getAsyncFPs(t);
        if (this.data_request) {
          var u = this;
          Ta(this.public_key, this.data_request, function (a, b) {
            if (b) {
              return;
            }
            for (var c = 0; c < f.length; c++) {
              if (f[c].key === "enhanced_fp") {
                for (var d in a) {
                  f[c].value.push({
                    key: d,
                    value: a[d]
                  });
                }
              }
            }
            u.data_request.received = true;
            s();
          });
        }
        if (this.async_fingerprints.enabled) {
          var v = this.data_request ? 300 : 80;
          setTimeout(function () {
            if (!this.async_fingerprints.received) {
              this.async_fingerprints.received = true;
              s();
            }
            if (this.data_request && !this.data_request.received) {
              this.data_request.received = true;
              s();
            }
          }.bind(this), v);
        } else {
          f.push({
            key: "jsbd",
            value: JSON.stringify(n)
          });
          var w = new Date().getTime() / 1000;
          var x = 21600;
          var y = navigator.userAgent;
          var z = Math.round(w - w % x);
          var B = a(f, r);
          var C = A.encrypt(B, y + z);
          d.bda = Sa.encode(C);
          D();
        }
      } else {
        if (this.fp_result.fp.fp) {
          e.push({
            key: "f",
            value: this.fp_result.fp.fp
          });
        }
        D();
      }
      function D() {
        var a = 5000;
        var f = 20000;
        var g = 0;
        var h = 3000;
        e.push({
          key: "rnd",
          value: Math.random()
        });
        for (var i in e) {
          d[e[i].key] = e[i].value;
        }
        if (b.data) {
          if (b.data === Object(b.data)) {
            for (var j in b.data) {
              if (!b.data.hasOwnProperty(j)) {
                continue;
              }
              d["data[" + j + "]"] = b.data[j];
            }
          } else {
            d.data = b.data;
          }
        }
        var k = [];
        for (var l in d) {
          if (!d.hasOwnProperty(l)) {
            continue;
          }
          k.push(l + "=" + encodeURIComponent(d[l]));
        }
        var m = jb(g, a, q, b.construct_rebuild_button.bind(b, D));
        function n(a, b) {
          try {
            if (ca && typeof ca === "function") {
              ca({
                error: b
              });
            }
            m(a);
          } catch (a) {}
        }
        var o = null;
        function p(a) {
          q(a);
          o = setTimeout(function () {
            b.construct_loading_spinner.bind(b)();
          }, h);
        }
        function q(a) {
          var d = Date.now();
          if (this.msie && this.msie <= 9 && window.XDomainRequest) {
            var e = this.siteData.location.protocol;
            function g(a) {
              var b = a + "://";
              var d = e + "//";
              return d + c.split(b)[1];
            }
            if (c.indexOf("https://") !== -1) {
              c = g("https");
            }
            if (c.indexOf("http://") !== -1) {
              c = g("http");
            }
            var f = new XDomainRequest();
            f.onload = function () {
              clearTimeout(o);
              b.onSessionSetupResponse(f);
            };
            f.onprogress = function () {};
            f.ontimeout = function () {
              m(d);
            };
            f.onerror = function () {
              m(d);
            };
            f.open("POST", c);
            f.timeout = a;
            f.send(k.join("&"));
            return;
          }
          var f;
          if (window.XMLHttpRequest) {
            f = new XMLHttpRequest();
            f.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                clearTimeout(o);
                b.onSessionSetupResponse(f);
              } else if (this.readyState == 4) {
                f.abort();
                m(d);
              }
            };
            f.open("POST", c, true);
            f.timeout = a;
            f.ontimeout = function () {
              n(d, "API_REQUEST_TIMEOUT");
            };
            f.onerror = function () {
              n(d, "API_REQUEST_ERROR");
            };
            if (this.cloudflare_access_client_id && this.cloudflare_access_client_secret) {
              f.setRequestHeader("CF-Access-Client-Id", this.cloudflare_access_client_id);
              f.setRequestHeader("CF-Access-Client-Secret", this.cloudflare_access_client_secret);
            }
            f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            f.send(k.join("&"));
          }
        }
        p(f);
      }
    };
    this.onSessionSetupResponse = function (a) {
      var b = a.responseText;
      var c = JSON.parse(b);
      if (c) {
        if (c.token) {
          this.construct_html(c);
        } else {
          this.handleSetupSessionError(c);
        }
        if (c.mbio) {
          window.ae.mouse_biometrics = true;
        }
        if (c.tbio) {
          window.ae.touch_biometrics = true;
        }
        if (c.kbio) {
          window.ae.keyboard_biometrics = true;
        }
        window.ae.compatibility_mode_enabled = !!c.compatibility_mode_enabled;
        window.ae.force_standard_mode = !!c.force_standard_mode;
      } else {
        this.handleSetupSessionError(b);
      }
    };
    this.handleSetupSessionError = function (a, b) {
      this.log("FunCaptcha: Error returned on server setup.");
      throw b;
    };
    this.enableDirectionalInput = function (a) {
      function b(a) {
        if (typeof a === "object" && !Array.isArray(a)) {
          return Array.isArray(a.proceed) && Array.isArray(a.up) && Array.isArray(a.down) && Array.isArray(a.right) && Array.isArray(a.left);
        } else {
          return false;
        }
      }
      if (a && !b(a)) {
        console.error("Keycodes are not in the correct format. Format is: { \n \t\t\t\t\tproceed: [195, 13], \n \t\t\t\t\tup: [211, 203, 38], \n \t\t\t\t\tdown: [212, 204, 40], \n \t\t\t\t\tright: [213, 206, 39], \n \t\t\t\t\tleft: [214, 205, 37] \n \t\t\t\t}");
        return;
      }
      window.ae.enableDirectionalInput(a);
      navigator.gamepadInputEmulation = "keyboard";
    };
    this.construct_html = function (a) {
      var b = this;
      var c = "<div id='FunCaptcha'></div>";
      if (a) {
        c += "<input type='hidden' id='verification-token' name='verification-token' value='" + a.token + "'>";
        c += "<input type='hidden' id='FunCaptcha-Token' name='fc-token' value='" + a.token + "'>";
        c += "<input type='hidden' id='style-manager-styling' name='style-manager-styling' value='" + JSON.stringify({
          styles: a.styles,
          iframe_height: a.iframe_height,
          iframe_width: a.iframe_width,
          disable_default_styling: a.disable_default_styling
        }) + "'>";
        c += "<input type='hidden' id='string-table' name='string-table' value='" + JSON.stringify(a.string_table) + "'>";
      }
      var d = this.get_target();
      if (d) {
        d.innerHTML = c;
        if (a) {
          this.inject_bootstrap_script(a);
        }
      } else {
        return false;
      }
    };
    this.get_target = function () {
      var a = document.getElementById(this.target);
      if (!a && document.querySelector) {
        var a = document.querySelector("#" + this.target);
        if (!a) {
          a = document.querySelector("." + this.target);
        }
      }
      return a;
    };
    this.inject_bootstrap_script = function (a) {
      var b = document.createElement("script");
      b.id = "fc-script";
      b.type = "text/javascript";
      b.async = true;
      b.src = a.challenge_url_cdn ? a.challenge_url_cdn : da.fc_api_server + a.challenge_url;
      if (ca && typeof ca == "function") {
        b.onerror = function () {
          ca({
            error: "FC_SCRIPT_ERROR",
            source: b.src
          });
        };
      }
      window.ae.inject_script_url = a.inject_script_url;
      window.ae.inject_script_integrity = a.inject_script_integrity;
      function c() {
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(b, a);
      }
      if (a.challenge_url_cdn && /game_core_bootstrap.js/.test(a.challenge_url_cdn)) {
        try {
          var d = new XMLHttpRequest();
          d.addEventListener("load", function () {
            b.crossOrigin = "anonymous";
            b.integrity = JSON.parse(d.response)["game_core_bootstrap.js"];
            c();
          });
          d.addEventListener("error", function () {
            c();
          });
          d.open("GET", a.challenge_url_cdn.replace(/game_core_bootstrap.js/, "sri.json"), true);
          d.send();
        } catch (a) {
          c();
        }
      } else {
        if (a.challenge_url_cdn_sri) {
          b.crossOrigin = "anonymous";
          b.integrity = a.challenge_url_cdn_sri;
        }
        c();
      }
    };
    this.construct_loading_spinner = function () {
      this.construct_html();
      var a = this.get_target();
      var b = document.createElement("img");
      b.src = "data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA==";
      b.setAttribute("id", "ec-loading-spinner");
      a.appendChild(b);
    };
    this.construct_rebuild_button = function (a) {
      var b = document.createElement("iframe");
      b.style.width = "53px";
      b.style.height = "43px";
      b.style.border = 0;
      var c = document.createElement("a");
      c.setAttribute("id", "ec-should-reload");
      c.setAttribute("href", "#");
      c.style.display = "inline-block";
      c.style.border = "1px solid #ff1919";
      c.style.padding = "4px 12px";
      c.style.borderRadius = "6px";
      c.addEventListener("click", function (c) {
        c.preventDefault();
        b.remove();
        a();
      });
      c.insertAdjacentHTML("beforeend", "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"32\" viewBox=\"0 0 25 32\"><path style=\"fill:#f00;\" d=\"M12.522 3.304c0 0 0 0 0 0-0.174 0-0.174 0 0 0h-0.696v-3.304l-10.609 5.739 10.609 5.739v-4.522h0.696c0 0 0 0 0.174 0 4.87 0 8.696 4 8.696 8.696 0 1.217-0.174 2.261-0.696 3.478l-0.174 0.174 3.304 1.739 0.174-0.348c0.696-1.565 1.043-3.304 1.043-5.217-0.174-6.609-5.739-12.174-12.522-12.174zM12.87 24.522h-0.522c-2.261 0-4.522-1.043-6.087-2.609-1.565-1.739-2.609-3.826-2.609-6.087 0-1.043 0.174-1.913 0.522-2.957v-0.174l-3.304-1.739v0.174c-0.522 1.391-0.87 2.957-0.87 4.696 0 6.783 5.565 12.348 12.348 12.522h0.522v3.826l10.609-5.739-10.609-5.739v3.826z\"></path></svg>");
      var d = this.get_target();
      document.getElementById("ec-loading-spinner").remove();
      d.appendChild(b);
      function e() {
        b.contentDocument.body.appendChild(c);
        b.contentDocument.body.style.padding = 0;
        b.contentDocument.body.style.margin = 0;
        b.contentDocument.body.style.overflow = "hidden";
      }
      e();
      b.addEventListener("load", e);
    };
    this.getFP = function () {
      if (!this.fp_result.fp) {
        this.fp_result.fp = this.fc_fp.getFP();
        this.fp_result.enhanced_fp = this.fc_fp.getEnhancedFP();
        this.fp_result.fp_vals = {
          f_true: this.fc_fp.hasFakeBrowser() || this.fc_fp.hasFakeOS() || this.fc_fp.hasFakeResolution() ? true : false || (this.fc_fp.getScreen() ? false : true)
        };
      }
      return this.fp_result;
    };
    this.isFPValidForSuppress = function (a) {
      return this.fp_result.fp_vals && this.fp_result.fp && this.fp_result.fp.fp;
    };
    this.setup_callback = function (a, c, d) {
      var e = this;
      b.funcaptcha_events = function (b) {
        var f = ["https://funcaptcha.co", "https://funcaptcha.com", "https://arkoselabs.com", e.fc_api_server];
        var g = ["funcaptcha.co", "funcaptcha.com", "arkoselabs.com"];
        var h = false;
        for (var i = 0; i < g.length; i++) {
          var j = new RegExp("\\." + g[i] + "$");
          if (j.exec(b.origin)) {
            h = true;
          }
        }
        if (f.indexOf(b.origin) !== -1 || h || b.origin.replace(/^.*?\/\//, "") === e.fc_api_server.replace(/^.*?\/\//, "")) {
          var k;
          var l = b.data;
          var m;
          if (typeof l === "string" && l.charAt(0) === "{") {
            try {
              k = JSON.parse(l);
              l = k.msg;
              m = k.data;
            } catch (a) {}
          }
          if (a) {
            if (l == "complete" && !window.ae.called_complete) {
              window.ae.called_complete = true;
              a(da.getSessionToken());
            }
          }
          if (l == "session_timeout") {
            if (da.get_html) {
              da.get_html();
            }
          }
          if (d && l == "session_failed") {
            d(da.getSessionToken());
          }
          if (l == "restart") {
            e.passValues = e.passValues || {};
            e.passValues.device_list = k.deviceList;
            e.passValues.original_session_token = k.token;
            e.passValues.fallback_type = k.fallbackType;
            if (da.get_html) {
              da.get_html();
            }
          }
          if (l == "fc_hard_reload") {
            window.location.reload();
          }
          if (c) {
            if (l == "finished_loading_game" && !window.ae.loaded_called) {
              c();
            }
          }
          if (ca && l && l.type === "gfct") {
            ca({
              error: l.error
            });
          }
          if (ca && l && l.type === "error" && l.payload && l.payload.error) {
            ca(l.payload);
          }
        }
      };
      if (window.postMessage) {
        if (window.addEventListener) {
          window.addEventListener("message", b.funcaptcha_events, false);
        } else if (window.attachEvent) {
          window.attachEvent("onmessage", b.funcaptcha_events);
        }
        if (!(e.msie < 9) && !(e.android_ver < 3)) {
          window.addEventListener("fc_suppressed", function (b) {
            if (a && !window.ae.called_complete) {
              window.ae.called_complete = true;
              a(da.getSessionToken());
            }
            if (window.ae.onsuppress_called) {
              return;
            }
            window.ae.onsuppress_called = true;
            try {
              if (typeof _ === "function") {
                _();
              } else {
                window[_]();
              }
            } catch (a) {}
            ;
          });
          if (ba) {
            window.addEventListener("fc_shown", function (a) {
              if (window.ae.shown_called) {
                return;
              }
              try {
                if (typeof ba === "function") {
                  ba();
                } else {
                  window[ba]();
                }
              } catch (a) {}
              ;
            });
          }
        }
      }
    };
    this.updateTokenValue = function (a) {
      if (document.getElementById("verification-token")) {
        document.getElementById("verification-token").value = a;
      }
      if (document.getElementById("FunCaptcha-Token")) {
        document.getElementById("FunCaptcha-Token").value = a;
      }
    };
    this.canvasSupported = function () {
      if (this.fingerprinting_enabled && this.fingerprinting_enabled.canvas === false) {
        return false;
      }
      var a = document.createElement("canvas");
      try {
        return !!a.getContext && !!a.getContext("2d");
      } catch (a) {
        return false;
      }
    };
    this.getSessionToken = function () {
      var a = document.getElementById("verification-token") && document.getElementById("verification-token").value;
      var b = document.getElementById("FunCaptcha-Token") && document.getElementById("FunCaptcha-Token").value;
      return a || b || null;
    };
    function ib(a) {
      if (!a) {
        return "";
      }
      if (Array.prototype.reduce) {
        return a.split("").reduce(function (a, b) {
          a = (a << 5) - a + b.charCodeAt(0);
          return a & a;
        }, 0);
      }
      var b = 0;
      if (a.length === 0) {
        return b;
      }
      for (var c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        b = (b << 5) - b + d;
        b = b & b;
      }
      return b;
    }
    function jb(a, b, c, d) {
      var e = 1;
      var f = [];
      return function h(g) {
        if (f.includes(g)) {
          return;
        }
        f.push(g);
        var i = b + b * e;
        setTimeout(function () {
          if (e >= a) {
            return d();
          }
          c(i);
        }, i);
        e++;
      };
    }
    if (i && i.callback) {
      this.callback = i.callback;
      if (i.loaded_callback) {
        this.loaded_callback = i.loaded_callback;
      }
      if (i.failed_callback) {
        this.failed_callback = i.failed_callback;
      }
      this.setup_callback(this.callback, this.loaded_callback, this.failed_callback);
    } else {
      this.setup_callback();
    }
    this.get_html();
  }
  var c = b;
  b.prototype.clear_session = function () {
    this.loadedWithData = false;
    this.async_fingerprints.received = false;
    window.ae.called_complete = false;
    window.ae.onsuppress_called = false;
    window.ae.loaded_called = false;
    window.ae.shown_called = false;
    if (window.removeEventListener) {
      window.removeEventListener("FunCaptcha-action", window.ae.arrowKeyBind);
      window.removeEventListener("message", window.ae.receiveMessage, false);
    } else if (window.detachEvent) {
      window.detachEvent("onmessage", window.ae.receiveMessage);
    }
  };
  b.prototype.refresh_session = function () {
    this.clear_session();
    this.get_html();
  };
  (function (a, b) {
    if (document.querySelectorAll) {
      return;
    } else {
      a = document;
      b = a.createStyleSheet();
      a.querySelectorAll = function (c, d, e, f, g) {
        g = a.all;
        d = [];
        c = c.replace(/\[for\b/gi, "[htmlFor").split(",");
        for (e = c.length; e--;) {
          b.addRule(c[e], "k:v");
          for (f = g.length; f--;) {
            if (g[f].currentStyle.k) {
              d.push(g[f]);
            }
          }
          b.removeRule(0);
        }
        return d;
      };
    }
  })();
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (d) {
      var a = this.length >>> 0;
      var b = Number(arguments[1]) || 0;
      b = b < 0 ? Math.ceil(b) : Math.floor(b);
      if (b < 0) {
        b += a;
      }
      for (; b < a; b++) {
        if (b in this && this[b] === d) {
          return b;
        }
      }
      return -1;
    };
  }
  var A;
  (function () {
    A = A || function (z, a) {
      var b = Object.create || function () {
        function a() {}
        ;
        return function (b) {
          var c;
          a.prototype = b;
          c = new a();
          a.prototype = null;
          return c;
        };
      }();
      var c = {};
      var d = c.lib = {};
      var e = d.Base = function () {
        return {
          extend: function (a) {
            var c = b(this);
            if (a) {
              c.mixIn(a);
            }
            if (!c.hasOwnProperty("init") || this.init === c.init) {
              c.init = function () {
                c.$super.init.apply(this, arguments);
              };
            }
            c.init.prototype = c;
            c.$super = this;
            return c;
          },
          create: function () {
            var a = this.extend();
            a.init.apply(a, arguments);
            return a;
          },
          init: function () {},
          mixIn: function (a) {
            for (var b in a) {
              if (a.hasOwnProperty(b)) {
                this[b] = a[b];
              }
            }
            if (a.hasOwnProperty("toString")) {
              this.toString = a.toString;
            }
          },
          clone: function () {
            return this.init.prototype.extend(this);
          }
        };
      }();
      var f = d.WordArray = e.extend({
        init: function (b, c) {
          b = this.words = b || [];
          if (c != a) {
            this.sigBytes = c;
          } else {
            this.sigBytes = b.length * 4;
          }
        },
        toString: function (a) {
          return (a || h).stringify(this);
        },
        concat: function (a) {
          var b = this.words;
          var c = a.words;
          var d = this.sigBytes;
          var e = a.sigBytes;
          this.clamp();
          if (d % 4) {
            for (var f = 0; f < e; f += 1) {
              var g = c[f >>> 2] >>> 24 - f % 4 * 8 & 255;
              b[d + f >>> 2] |= g << 24 - (d + f) % 4 * 8;
            }
          } else {
            for (var f = 0; f < e; f += 4) {
              b[d + f >>> 2] = c[f >>> 2];
            }
          }
          this.sigBytes += e;
          return this;
        },
        clamp: function () {
          var a = this.words;
          var b = this.sigBytes;
          a[b >>> 2] &= 4294967295 << 32 - b % 4 * 8;
          a.length = z.ceil(b / 4);
        },
        clone: function () {
          var a = e.clone.call(this);
          a.words = this.words.slice(0);
          return a;
        },
        random: function (a) {
          var b = [];
          function c(a) {
            var a = a;
            var b = 987654321;
            var c = 4294967295;
            return function () {
              b = (b & 65535) * 36969 + (b >> 16) & c;
              a = (a & 65535) * 18000 + (a >> 16) & c;
              var d = (b << 16) + a & c;
              d /= 4294967296;
              d += 0.5;
              return d * (z.random() > 0.5 ? 1 : -1);
            };
          }
          for (var d = 0, e; d < a; d += 4) {
            var g = c((e || z.random()) * 4294967296);
            e = g() * 987654071;
            b.push(g() * 4294967296 | 0);
          }
          return new f.init(b, a);
        }
      });
      var g = c.enc = {};
      var h = g.Hex = {
        stringify: function (a) {
          var b = a.words;
          var c = a.sigBytes;
          var d = [];
          for (var e = 0; e < c; e += 1) {
            var f = b[e >>> 2] >>> 24 - e % 4 * 8 & 255;
            d.push((f >>> 4).toString(16));
            d.push((f & 15).toString(16));
          }
          return d.join("");
        },
        parse: function (a) {
          var b = a.length;
          var c = [];
          for (var d = 0; d < b; d += 2) {
            c[d >>> 3] |= parseInt(a.substr(d, 2), 16) << 24 - d % 8 * 4;
          }
          return new f.init(c, b / 2);
        }
      };
      var i = g.Latin1 = {
        stringify: function (a) {
          var b = a.words;
          var c = a.sigBytes;
          var d = [];
          for (var e = 0; e < c; e += 1) {
            var f = b[e >>> 2] >>> 24 - e % 4 * 8 & 255;
            d.push(String.fromCharCode(f));
          }
          return d.join("");
        },
        parse: function (a) {
          var b = a.length;
          var c = [];
          for (var d = 0; d < b; d += 1) {
            c[d >>> 2] |= (a.charCodeAt(d) & 255) << 24 - d % 4 * 8;
          }
          return new f.init(c, b);
        }
      };
      var j = g.Utf8 = {
        stringify: function (a) {
          try {
            return decodeURIComponent(escape(i.stringify(a)));
          } catch (a) {
            throw new Error("Malformed UTF-8 data");
          }
        },
        parse: function (a) {
          return i.parse(unescape(encodeURIComponent(a)));
        }
      };
      var k = d.BufferedBlockAlgorithm = e.extend({
        reset: function () {
          this._data = new f.init();
          this._nDataBytes = 0;
        },
        _append: function (a) {
          if (typeof a == "string") {
            a = j.parse(a);
          }
          this._data.concat(a);
          this._nDataBytes += a.sigBytes;
        },
        _process: function (a) {
          var b = this._data;
          var c = b.words;
          var d = b.sigBytes;
          var e = this.blockSize;
          var g = e * 4;
          var h = d / g;
          if (a) {
            h = z.ceil(h);
          } else {
            h = z.max((h | 0) - this._minBufferSize, 0);
          }
          var i = h * e;
          var j = z.min(i * 4, d);
          if (i) {
            for (var k = 0; k < i; k += e) {
              this._doProcessBlock(c, k);
            }
            var l = c.splice(0, i);
            b.sigBytes -= j;
          }
          return new f.init(l, j);
        },
        clone: function () {
          var a = e.clone.call(this);
          a._data = this._data.clone();
          return a;
        },
        _minBufferSize: 0
      });
      var l = d.Hasher = k.extend({
        cfg: e.extend(),
        init: function (a) {
          this.cfg = this.cfg.extend(a);
          this.reset();
        },
        reset: function () {
          k.reset.call(this);
          this._doReset();
        },
        update: function (a) {
          this._append(a);
          this._process();
          return this;
        },
        finalize: function (a) {
          if (a) {
            this._append(a);
          }
          var b = this._doFinalize();
          return b;
        },
        blockSize: 16,
        _createHelper: function (a) {
          return function (b, c) {
            return new a.init(c).finalize(b);
          };
        },
        _createHmacHelper: function (a) {
          return function (b, c) {
            return new m.HMAC.init(a, c).finalize(b);
          };
        }
      });
      var m = c.algo = {};
      return c;
    }(Math);
    (function (w) {
      var a = A;
      var b = a.lib;
      var c = b.WordArray;
      var d = b.Hasher;
      var e = a.algo;
      var f = [];
      (function () {
        for (var a = 0; a < 64; a += 1) {
          f[a] = w.abs(w.sin(a + 1)) * 4294967296 | 0;
        }
      })();
      var g = e.MD5 = d.extend({
        _doReset: function () {
          this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function (a, b) {
          for (var c = 0; c < 16; c += 1) {
            var d = b + c;
            var e = a[d];
            a[d] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
          }
          var g = this._hash.words;
          var l = a[b + 0];
          var m = a[b + 1];
          var n = a[b + 2];
          var r = a[b + 3];
          var s = a[b + 4];
          var t = a[b + 5];
          var u = a[b + 6];
          var v = a[b + 7];
          var w = a[b + 8];
          var x = a[b + 9];
          var y = a[b + 10];
          var z = a[b + 11];
          var A = a[b + 12];
          var B = a[b + 13];
          var C = a[b + 14];
          var D = a[b + 15];
          var E = g[0];
          var F = g[1];
          var G = g[2];
          var H = g[3];
          E = h(E, F, G, H, l, 7, f[0]);
          H = h(H, E, F, G, m, 12, f[1]);
          G = h(G, H, E, F, n, 17, f[2]);
          F = h(F, G, H, E, r, 22, f[3]);
          E = h(E, F, G, H, s, 7, f[4]);
          H = h(H, E, F, G, t, 12, f[5]);
          G = h(G, H, E, F, u, 17, f[6]);
          F = h(F, G, H, E, v, 22, f[7]);
          E = h(E, F, G, H, w, 7, f[8]);
          H = h(H, E, F, G, x, 12, f[9]);
          G = h(G, H, E, F, y, 17, f[10]);
          F = h(F, G, H, E, z, 22, f[11]);
          E = h(E, F, G, H, A, 7, f[12]);
          H = h(H, E, F, G, B, 12, f[13]);
          G = h(G, H, E, F, C, 17, f[14]);
          F = h(F, G, H, E, D, 22, f[15]);
          E = i(E, F, G, H, m, 5, f[16]);
          H = i(H, E, F, G, u, 9, f[17]);
          G = i(G, H, E, F, z, 14, f[18]);
          F = i(F, G, H, E, l, 20, f[19]);
          E = i(E, F, G, H, t, 5, f[20]);
          H = i(H, E, F, G, y, 9, f[21]);
          G = i(G, H, E, F, D, 14, f[22]);
          F = i(F, G, H, E, s, 20, f[23]);
          E = i(E, F, G, H, x, 5, f[24]);
          H = i(H, E, F, G, C, 9, f[25]);
          G = i(G, H, E, F, r, 14, f[26]);
          F = i(F, G, H, E, w, 20, f[27]);
          E = i(E, F, G, H, B, 5, f[28]);
          H = i(H, E, F, G, n, 9, f[29]);
          G = i(G, H, E, F, v, 14, f[30]);
          F = i(F, G, H, E, A, 20, f[31]);
          E = j(E, F, G, H, t, 4, f[32]);
          H = j(H, E, F, G, w, 11, f[33]);
          G = j(G, H, E, F, z, 16, f[34]);
          F = j(F, G, H, E, C, 23, f[35]);
          E = j(E, F, G, H, m, 4, f[36]);
          H = j(H, E, F, G, s, 11, f[37]);
          G = j(G, H, E, F, v, 16, f[38]);
          F = j(F, G, H, E, y, 23, f[39]);
          E = j(E, F, G, H, B, 4, f[40]);
          H = j(H, E, F, G, l, 11, f[41]);
          G = j(G, H, E, F, r, 16, f[42]);
          F = j(F, G, H, E, u, 23, f[43]);
          E = j(E, F, G, H, x, 4, f[44]);
          H = j(H, E, F, G, A, 11, f[45]);
          G = j(G, H, E, F, D, 16, f[46]);
          F = j(F, G, H, E, n, 23, f[47]);
          E = k(E, F, G, H, l, 6, f[48]);
          H = k(H, E, F, G, v, 10, f[49]);
          G = k(G, H, E, F, C, 15, f[50]);
          F = k(F, G, H, E, t, 21, f[51]);
          E = k(E, F, G, H, A, 6, f[52]);
          H = k(H, E, F, G, r, 10, f[53]);
          G = k(G, H, E, F, y, 15, f[54]);
          F = k(F, G, H, E, m, 21, f[55]);
          E = k(E, F, G, H, w, 6, f[56]);
          H = k(H, E, F, G, D, 10, f[57]);
          G = k(G, H, E, F, u, 15, f[58]);
          F = k(F, G, H, E, B, 21, f[59]);
          E = k(E, F, G, H, s, 6, f[60]);
          H = k(H, E, F, G, z, 10, f[61]);
          G = k(G, H, E, F, n, 15, f[62]);
          F = k(F, G, H, E, x, 21, f[63]);
          g[0] = g[0] + E | 0;
          g[1] = g[1] + F | 0;
          g[2] = g[2] + G | 0;
          g[3] = g[3] + H | 0;
        },
        _doFinalize: function () {
          var a = this._data;
          var b = a.words;
          var c = this._nDataBytes * 8;
          var d = a.sigBytes * 8;
          b[d >>> 5] |= 128 << 24 - d % 32;
          var e = w.floor(c / 4294967296);
          var f = c;
          b[(d + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
          b[(d + 64 >>> 9 << 4) + 14] = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & 4278255360;
          a.sigBytes = (b.length + 1) * 4;
          this._process();
          var g = this._hash;
          var h = g.words;
          for (var i = 0; i < 4; i += 1) {
            var j = h[i];
            h[i] = (j << 8 | j >>> 24) & 16711935 | (j << 24 | j >>> 8) & 4278255360;
          }
          return g;
        },
        clone: function () {
          var a = d.clone.call(this);
          a._hash = this._hash.clone();
          return a;
        }
      });
      function h(a, b, c, d, e, f, g) {
        var h = a + (b & c | ~b & d) + e + g;
        return (h << f | h >>> 32 - f) + b;
      }
      function i(a, b, c, d, e, f, g) {
        var h = a + (b & d | c & ~d) + e + g;
        return (h << f | h >>> 32 - f) + b;
      }
      function j(a, b, c, d, e, f, g) {
        var h = a + (b ^ c ^ d) + e + g;
        return (h << f | h >>> 32 - f) + b;
      }
      function k(a, b, c, d, e, f, g) {
        var h = a + (c ^ (b | ~d)) + e + g;
        return (h << f | h >>> 32 - f) + b;
      }
      a.MD5 = d._createHelper(g);
      a.HmacMD5 = d._createHmacHelper(g);
    })(Math);
    (function () {
      var h = A;
      var a = h.lib;
      var b = a.Base;
      var c = a.WordArray;
      var d = h.algo;
      var e = d.MD5;
      var f = d.EvpKDF = b.extend({
        cfg: b.extend({
          keySize: 4,
          hasher: e,
          iterations: 1
        }),
        init: function (a) {
          this.cfg = this.cfg.extend(a);
        },
        compute: function (a, b) {
          var d = this.cfg;
          var e = d.hasher.create();
          var f = c.create();
          var g = f.words;
          var h = d.keySize;
          var i = d.iterations;
          while (g.length < h) {
            if (j) {
              e.update(j);
            }
            var j = e.update(a).finalize(b);
            e.reset();
            for (var k = 1; k < i; k += 1) {
              j = e.finalize(j);
              e.reset();
            }
            f.concat(j);
          }
          f.sigBytes = h * 4;
          return f;
        }
      });
      h.EvpKDF = function (a, b, c) {
        return f.create(c).compute(a, b);
      };
    })();
    (function () {
      var g = A;
      var a = g.lib;
      var b = a.WordArray;
      var c = g.enc;
      var d = c.Base64 = {
        stringify: function (a) {
          var b = a.words;
          var c = a.sigBytes;
          var d = this._map;
          a.clamp();
          var e = [];
          for (var f = 0; f < c; f += 3) {
            var g = b[f >>> 2] >>> 24 - f % 4 * 8 & 255;
            var h = b[f + 1 >>> 2] >>> 24 - (f + 1) % 4 * 8 & 255;
            var i = b[f + 2 >>> 2] >>> 24 - (f + 2) % 4 * 8 & 255;
            var j = g << 16 | h << 8 | i;
            for (var k = 0; k < 4 && f + k * 0.75 < c; k += 1) {
              e.push(d.charAt(j >>> (3 - k) * 6 & 63));
            }
          }
          var l = d.charAt(64);
          if (l) {
            while (e.length % 4) {
              e.push(l);
            }
          }
          return e.join("");
        },
        parse: function (a) {
          var b = a.length;
          var c = this._map;
          var d = this._reverseMap;
          if (!d) {
            d = this._reverseMap = [];
            for (var f = 0; f < c.length; f += 1) {
              d[c.charCodeAt(f)] = f;
            }
          }
          var g = c.charAt(64);
          if (g) {
            var i = a.indexOf(g);
            if (i !== -1) {
              b = i;
            }
          }
          return e(a, b, d);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
      function e(a, c, d) {
        var e = [];
        var f = 0;
        for (var g = 0; g < c; g += 1) {
          if (g % 4) {
            var h = d[a.charCodeAt(g - 1)] << g % 4 * 2;
            var i = d[a.charCodeAt(g)] >>> 6 - g % 4 * 2;
            e[f >>> 2] |= (h | i) << 24 - f % 4 * 8;
            f += 1;
          }
        }
        return b.create(e, f);
      }
    })();
    (function () {
      if (typeof ArrayBuffer != "function") {
        return;
      }
      var f = A;
      var a = f.lib;
      var b = a.WordArray;
      var c = b.init;
      var d = b.init = function (a) {
        if (a instanceof ArrayBuffer) {
          a = new Uint8Array(a);
        }
        if (a instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && a instanceof Uint8ClampedArray || a instanceof Int16Array || a instanceof Uint16Array || a instanceof Int32Array || a instanceof Uint32Array || a instanceof Float32Array || a instanceof Float64Array) {
          a = new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
        }
        if (a instanceof Uint8Array) {
          var b = a.byteLength;
          var d = [];
          for (var e = 0; e < b; e += 1) {
            d[e >>> 2] |= a[e] << 24 - e % 4 * 8;
          }
          c.call(this, d, b);
        } else {
          c.apply(this, arguments);
        }
      };
      d.prototype = b;
    })();
    (function (k) {
      var a = A;
      var b = a.lib;
      var c = b.Base;
      var d = b.WordArray;
      var e = a.x64 = {};
      var f = e.Word = c.extend({
        init: function (a, b) {
          this.high = a;
          this.low = b;
        }
      });
      var g = e.WordArray = c.extend({
        init: function (a, b) {
          a = this.words = a || [];
          if (b != k) {
            this.sigBytes = b;
          } else {
            this.sigBytes = a.length * 8;
          }
        },
        toX32: function () {
          var a = this.words;
          var b = a.length;
          var c = [];
          for (var e = 0; e < b; e += 1) {
            var f = a[e];
            c.push(f.high);
            c.push(f.low);
          }
          return d.create(c, this.sigBytes);
        },
        clone: function () {
          var a = c.clone.call(this);
          var b = a.words = this.words.slice(0);
          var d = b.length;
          for (var e = 0; e < d; e += 1) {
            b[e] = b[e].clone();
          }
          return a;
        }
      });
    })();
    if (!A.lib.Cipher) {
      (function (B) {
        var a = A;
        var b = a.lib;
        var c = b.Base;
        var d = b.WordArray;
        var e = b.BufferedBlockAlgorithm;
        var f = a.enc;
        var g = f.Utf8;
        var h = f.Base64;
        var i = a.algo;
        var j = i.EvpKDF;
        var k = b.Cipher = e.extend({
          cfg: c.extend(),
          createEncryptor: function (a, b) {
            return this.create(this._ENC_XFORM_MODE, a, b);
          },
          createDecryptor: function (a, b) {
            return this.create(this._DEC_XFORM_MODE, a, b);
          },
          init: function (a, b, c) {
            this.cfg = this.cfg.extend(c);
            this._xformMode = a;
            this._key = b;
            this.reset();
          },
          reset: function () {
            e.reset.call(this);
            this._doReset();
          },
          process: function (a) {
            this._append(a);
            return this._process();
          },
          finalize: function (a) {
            if (a) {
              this._append(a);
            }
            var b = this._doFinalize();
            return b;
          },
          keySize: 4,
          ivSize: 4,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          _createHelper: function () {
            function a(a) {
              if (typeof a == "string") {
                return y;
              } else {
                return v;
              }
            }
            return function (b) {
              return {
                encrypt: function (c, d, e) {
                  return a(d).encrypt(b, c, d, e);
                },
                decrypt: function (c, d, e) {
                  return a(d).decrypt(b, c, d, e);
                }
              };
            };
          }()
        });
        var l = b.StreamCipher = k.extend({
          _doFinalize: function () {
            var a = this._process(!!"flush");
            return a;
          },
          blockSize: 1
        });
        var m = a.mode = {};
        var n = b.BlockCipherMode = c.extend({
          createEncryptor: function (a, b) {
            return this.Encryptor.create(a, b);
          },
          createDecryptor: function (a, b) {
            return this.Decryptor.create(a, b);
          },
          init: function (a, b) {
            this._cipher = a;
            this._iv = b;
          }
        });
        var o = m.CBC = function () {
          var a = n.extend();
          a.Encryptor = a.extend({
            processBlock: function (a, c) {
              var d = this._cipher;
              var e = d.blockSize;
              b.call(this, a, c, e);
              d.encryptBlock(a, c);
              this._prevBlock = a.slice(c, c + e);
            }
          });
          a.Decryptor = a.extend({
            processBlock: function (a, c) {
              var d = this._cipher;
              var e = d.blockSize;
              var f = a.slice(c, c + e);
              d.decryptBlock(a, c);
              b.call(this, a, c, e);
              this._prevBlock = f;
            }
          });
          function b(a, b, c) {
            var d = this._iv;
            if (d) {
              var e = d;
              this._iv = B;
            } else {
              var e = this._prevBlock;
            }
            for (var f = 0; f < c; f += 1) {
              a[b + f] ^= e[f];
            }
          }
          return a;
        }();
        var p = a.pad = {};
        var q = p.Pkcs7 = {
          pad: function (a, b) {
            var c = b * 4;
            var e = c - a.sigBytes % c;
            var f = e << 24 | e << 16 | e << 8 | e;
            var g = [];
            for (var h = 0; h < e; h += 4) {
              g.push(f);
            }
            var i = d.create(g, e);
            a.concat(i);
          },
          unpad: function (a) {
            var b = a.words[a.sigBytes - 1 >>> 2] & 255;
            a.sigBytes -= b;
          }
        };
        var r = b.BlockCipher = k.extend({
          cfg: k.cfg.extend({
            mode: o,
            padding: q
          }),
          reset: function () {
            k.reset.call(this);
            var a = this.cfg;
            var b = a.iv;
            var c = a.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              var d = c.createEncryptor;
            } else {
              var d = c.createDecryptor;
              this._minBufferSize = 1;
            }
            if (this._mode && this._mode.__creator == d) {
              this._mode.init(this, b && b.words);
            } else {
              this._mode = d.call(c, this, b && b.words);
              this._mode.__creator = d;
            }
          },
          _doProcessBlock: function (a, b) {
            this._mode.processBlock(a, b);
          },
          _doFinalize: function () {
            var a = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              a.pad(this._data, this.blockSize);
              var b = this._process(!!"flush");
            } else {
              var b = this._process(!!"flush");
              a.unpad(b);
            }
            return b;
          },
          blockSize: 4
        });
        var s = b.CipherParams = c.extend({
          init: function (a) {
            this.mixIn(a);
          },
          toString: function (a) {
            return (a || this.formatter).stringify(this);
          }
        });
        var t = a.format = {};
        var u = t.OpenSSL = {
          stringify: function (a) {
            var b = a.ciphertext;
            var c = a.salt;
            if (c) {
              var e = d.create([1398893684, 1701076831]).concat(c).concat(b);
            } else {
              var e = b;
            }
            return e.toString(h);
          },
          parse: function (a) {
            var b = h.parse(a);
            var c = b.words;
            if (c[0] == 1398893684 && c[1] == 1701076831) {
              var e = d.create(c.slice(2, 4));
              c.splice(0, 4);
              b.sigBytes -= 16;
            }
            return s.create({
              ciphertext: b,
              salt: e
            });
          }
        };
        var v = b.SerializableCipher = c.extend({
          cfg: c.extend({
            format: u
          }),
          encrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            var e = a.createEncryptor(c, d);
            var f = e.finalize(b);
            var g = e.cfg;
            return s.create({
              ciphertext: f,
              key: c,
              iv: g.iv,
              algorithm: a,
              mode: g.mode,
              padding: g.padding,
              blockSize: a.blockSize,
              formatter: d.format
            });
          },
          decrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            b = this._parse(b, d.format);
            var e = a.createDecryptor(c, d).finalize(b.ciphertext);
            return e;
          },
          _parse: function (a, b) {
            if (typeof a == "string") {
              return b.parse(a, this);
            } else {
              return a;
            }
          }
        });
        var w = a.kdf = {};
        var x = w.OpenSSL = {
          execute: function (a, b, c, e) {
            if (!e) {
              e = d.random(8);
            }
            var f = j.create({
              keySize: b + c
            }).compute(a, e);
            var g = d.create(f.words.slice(b), c * 4);
            f.sigBytes = b * 4;
            return s.create({
              key: f,
              iv: g,
              salt: e
            });
          }
        };
        var y = b.PasswordBasedCipher = v.extend({
          cfg: v.cfg.extend({
            kdf: x
          }),
          encrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            var e = d.kdf.execute(c, a.keySize, a.ivSize);
            d.iv = e.iv;
            var f = v.encrypt.call(this, a, b, e.key, d);
            f.mixIn(e);
            return f;
          },
          decrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            b = this._parse(b, d.format);
            var e = d.kdf.execute(c, a.keySize, a.ivSize, b.salt);
            d.iv = e.iv;
            var f = v.decrypt.call(this, a, b, e.key, d);
            return f;
          }
        });
      })();
    }
    A.mode.CFB = function () {
      var c = A.lib.BlockCipherMode.extend();
      c.Encryptor = c.extend({
        processBlock: function (b, c) {
          var d = this._cipher;
          var e = d.blockSize;
          a.call(this, b, c, e, d);
          this._prevBlock = b.slice(c, c + e);
        }
      });
      c.Decryptor = c.extend({
        processBlock: function (b, c) {
          var d = this._cipher;
          var e = d.blockSize;
          var f = b.slice(c, c + e);
          a.call(this, b, c, e, d);
          this._prevBlock = f;
        }
      });
      function a(a, b, c, d) {
        var e = this._iv;
        if (e) {
          var f = e.slice(0);
          this._iv = undefined;
        } else {
          var f = this._prevBlock;
        }
        d.encryptBlock(f, 0);
        for (var g = 0; g < c; g += 1) {
          a[b + g] ^= f[g];
        }
      }
      return c;
    }();
    A.mode.ECB = function () {
      var b = A.lib.BlockCipherMode.extend();
      b.Encryptor = b.extend({
        processBlock: function (a, b) {
          this._cipher.encryptBlock(a, b);
        }
      });
      b.Decryptor = b.extend({
        processBlock: function (a, b) {
          this._cipher.decryptBlock(a, b);
        }
      });
      return b;
    }();
    A.pad.AnsiX923 = {
      pad: function (g, a) {
        var b = g.sigBytes;
        var c = a * 4;
        var d = c - b % c;
        var e = b + d - 1;
        g.clamp();
        g.words[e >>> 2] |= d << 24 - e % 4 * 8;
        g.sigBytes += d;
      },
      unpad: function (c) {
        var a = c.words[c.sigBytes - 1 >>> 2] & 255;
        c.sigBytes -= a;
      }
    };
    A.pad.Iso10126 = {
      pad: function (e, a) {
        var b = a * 4;
        var c = b - e.sigBytes % b;
        e.concat(A.lib.WordArray.random(c - 1)).concat(A.lib.WordArray.create([c << 24], 1));
      },
      unpad: function (c) {
        var a = c.words[c.sigBytes - 1 >>> 2] & 255;
        c.sigBytes -= a;
      }
    };
    A.pad.Iso97971 = {
      pad: function (c, a) {
        c.concat(A.lib.WordArray.create([2147483648], 1));
        A.pad.ZeroPadding.pad(c, a);
      },
      unpad: function (b) {
        A.pad.ZeroPadding.unpad(b);
        b.sigBytes -= 1;
      }
    };
    A.mode.OFB = function () {
      var c = A.lib.BlockCipherMode.extend();
      var a = c.Encryptor = c.extend({
        processBlock: function (a, b) {
          var c = this._cipher;
          var d = c.blockSize;
          var e = this._iv;
          var f = this._keystream;
          if (e) {
            f = this._keystream = e.slice(0);
            this._iv = undefined;
          }
          c.encryptBlock(f, 0);
          for (var g = 0; g < d; g += 1) {
            a[b + g] ^= f[g];
          }
        }
      });
      c.Decryptor = a;
      return c;
    }();
    A.pad.NoPadding = {
      pad: function () {},
      unpad: function () {}
    };
    (function (i) {
      var a = A;
      var b = a.lib;
      var c = b.CipherParams;
      var d = a.enc;
      var e = d.Hex;
      var f = a.format;
      var g = f.Hex = {
        stringify: function (a) {
          return a.ciphertext.toString(e);
        },
        parse: function (a) {
          var b = e.parse(a);
          return c.create({
            ciphertext: b
          });
        }
      };
    })();
    (function () {
      var q = A;
      var a = q.lib;
      var b = a.BlockCipher;
      var c = q.algo;
      var d = [];
      var e = [];
      var f = [];
      var g = [];
      var h = [];
      var i = [];
      var j = [];
      var k = [];
      var l = [];
      var m = [];
      (function () {
        var a = [];
        for (var b = 0; b < 256; b += 1) {
          if (b < 128) {
            a[b] = b << 1;
          } else {
            a[b] = b << 1 ^ 283;
          }
        }
        var c = 0;
        var n = 0;
        for (var b = 0; b < 256; b += 1) {
          var o = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
          o = o >>> 8 ^ o & 255 ^ 99;
          d[c] = o;
          e[o] = c;
          var p = a[c];
          var q = a[p];
          var t = a[q];
          var x = a[o] * 257 ^ o * 16843008;
          f[c] = x << 24 | x >>> 8;
          g[c] = x << 16 | x >>> 16;
          h[c] = x << 8 | x >>> 24;
          i[c] = x;
          var x = t * 16843009 ^ q * 65537 ^ p * 257 ^ c * 16843008;
          j[o] = x << 24 | x >>> 8;
          k[o] = x << 16 | x >>> 16;
          l[o] = x << 8 | x >>> 24;
          m[o] = x;
          if (!c) {
            c = n = 1;
          } else {
            c = p ^ a[a[a[t ^ p]]];
            n ^= a[a[n]];
          }
        }
      })();
      var n = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
      var o = c.AES = b.extend({
        _doReset: function () {
          if (this._nRounds && this._keyPriorReset === this._key) {
            return;
          }
          var a = this._keyPriorReset = this._key;
          var b = a.words;
          var c = a.sigBytes / 4;
          var e = this._nRounds = c + 6;
          var f = (e + 1) * 4;
          var g = this._keySchedule = [];
          for (var h = 0; h < f; h += 1) {
            if (h < c) {
              g[h] = b[h];
            } else {
              var i = g[h - 1];
              if (!(h % c)) {
                i = i << 8 | i >>> 24;
                i = d[i >>> 24] << 24 | d[i >>> 16 & 255] << 16 | d[i >>> 8 & 255] << 8 | d[i & 255];
                i ^= n[h / c | 0] << 24;
              } else if (c > 6 && h % c == 4) {
                i = d[i >>> 24] << 24 | d[i >>> 16 & 255] << 16 | d[i >>> 8 & 255] << 8 | d[i & 255];
              }
              g[h] = g[h - c] ^ i;
            }
          }
          var o = this._invKeySchedule = [];
          for (var p = 0; p < f; p += 1) {
            var h = f - p;
            if (p % 4) {
              var i = g[h];
            } else {
              var i = g[h - 4];
            }
            if (p < 4 || h <= 4) {
              o[p] = i;
            } else {
              o[p] = j[d[i >>> 24]] ^ k[d[i >>> 16 & 255]] ^ l[d[i >>> 8 & 255]] ^ m[d[i & 255]];
            }
          }
        },
        encryptBlock: function (a, b) {
          this._doCryptBlock(a, b, this._keySchedule, f, g, h, i, d);
        },
        decryptBlock: function (a, b) {
          var c = a[b + 1];
          a[b + 1] = a[b + 3];
          a[b + 3] = c;
          this._doCryptBlock(a, b, this._invKeySchedule, j, k, l, m, e);
          var c = a[b + 1];
          a[b + 1] = a[b + 3];
          a[b + 3] = c;
        },
        _doCryptBlock: function (a, b, c, d, e, f, g, h) {
          var i = this._nRounds;
          var j = a[b] ^ c[0];
          var k = a[b + 1] ^ c[1];
          var l = a[b + 2] ^ c[2];
          var m = a[b + 3] ^ c[3];
          var n = 4;
          for (var o = 1; o < i; o += 1) {
            var p = d[j >>> 24] ^ e[k >>> 16 & 255] ^ f[l >>> 8 & 255] ^ g[m & 255] ^ c[n++];
            var q = d[k >>> 24] ^ e[l >>> 16 & 255] ^ f[m >>> 8 & 255] ^ g[j & 255] ^ c[n++];
            var r = d[l >>> 24] ^ e[m >>> 16 & 255] ^ f[j >>> 8 & 255] ^ g[k & 255] ^ c[n++];
            var s = d[m >>> 24] ^ e[j >>> 16 & 255] ^ f[k >>> 8 & 255] ^ g[l & 255] ^ c[n++];
            j = p;
            k = q;
            l = r;
            m = s;
          }
          var p = (h[j >>> 24] << 24 | h[k >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[m & 255]) ^ c[n++];
          var q = (h[k >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[m >>> 8 & 255] << 8 | h[j & 255]) ^ c[n++];
          var r = (h[l >>> 24] << 24 | h[m >>> 16 & 255] << 16 | h[j >>> 8 & 255] << 8 | h[k & 255]) ^ c[n++];
          var s = (h[m >>> 24] << 24 | h[j >>> 16 & 255] << 16 | h[k >>> 8 & 255] << 8 | h[l & 255]) ^ c[n++];
          a[b] = p;
          a[b + 1] = q;
          a[b + 2] = r;
          a[b + 3] = s;
        },
        keySize: 8
      });
      q.AES = b._createHelper(o);
    })();
    A.pad.ZeroPadding = {
      pad: function (d, a) {
        var b = a * 4;
        d.clamp();
        d.sigBytes += b - (d.sigBytes % b || b);
      },
      unpad: function (d) {
        var a = d.words;
        var b = d.sigBytes - 1;
        while (!(a[b >>> 2] >>> 24 - b % 4 * 8 & 255)) {
          b -= 1;
        }
        d.sigBytes = b + 1;
      }
    };
    return A;
  })();
  A.config = {
    format: {
      stringify: function (c) {
        var a = {
          ct: c.ciphertext.toString(A.enc.Base64)
        };
        if (c.iv) {
          a.iv = c.iv.toString();
        }
        if (c.salt) {
          a.s = c.salt.toString();
        }
        return JSON.stringify(a);
      },
      parse: function (d) {
        var a = JSON.parse(d);
        var b = A.lib.CipherParams.create({
          ciphertext: A.enc.Base64.parse(a.ct)
        });
        if (a.iv) {
          b.iv = A.enc.Hex.parse(a.iv);
        }
        if (a.s) {
          b.salt = A.enc.Hex.parse(a.s);
        }
        return b;
      }
    }
  };
  A.decrypt = function (d, a) {
    var b = d;
    if (typeof d === "object") {
      b = JSON.stringify(b);
    }
    return atob(A.AES.decrypt(b, a, A.config).toString(A.enc.Base64));
  };
  A.encrypt = function (c, a) {
    return A.AES.encrypt(c.toString(), a, A.config).toString();
  };
  function B() {
    if (document.readyState === "complete") {
      b();
    } else if (window.onload) {
      window.onload = function () {
        b();
      };
    } else {
      document.onreadystatechange = function () {
        if (document.readyState == "complete") {
          b();
        }
      };
    }
  }
  B();
