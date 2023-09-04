(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else if (typeof exports === 'object')
        exports["quickpayments"] = factory();
    else
        root["quickpayments"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
    return /******/ (function(modules) { // webpackBootstrap
            /******/ // The module cache
            /******/
            var installedModules = {};
            /******/
            /******/ // The require function
            /******/
            function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/
                if (installedModules[moduleId]) {
                    /******/
                    return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/
                var module = installedModules[moduleId] = {
                    /******/
                    i: moduleId,
                    /******/
                    l: false,
                    /******/
                    exports: {}
                    /******/
                };
                /******/
                /******/ // Execute the module function
                /******/
                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/
                module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/
                return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/
            __webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/
            __webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/
            __webpack_require__.d = function(exports, name, getter) {
                /******/
                if (!__webpack_require__.o(exports, name)) {
                    /******/
                    Object.defineProperty(exports, name, { enumerable: true, get: getter });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // define __esModule on exports
            /******/
            __webpack_require__.r = function(exports) {
                /******/
                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/
                    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                    /******/
                }
                /******/
                Object.defineProperty(exports, '__esModule', { value: true });
                /******/
            };
            /******/
            /******/ // create a fake namespace object
            /******/ // mode & 1: value is a module id, require it
            /******/ // mode & 2: merge all properties of value into the ns
            /******/ // mode & 4: return value when already ns object
            /******/ // mode & 8|1: behave like require
            /******/
            __webpack_require__.t = function(value, mode) {
                /******/
                if (mode & 1) value = __webpack_require__(value);
                /******/
                if (mode & 8) return value;
                /******/
                if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
                /******/
                var ns = Object.create(null);
                /******/
                __webpack_require__.r(ns);
                /******/
                Object.defineProperty(ns, 'default', { enumerable: true, value: value });
                /******/
                if (mode & 2 && typeof value != 'string')
                    for (var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
                /******/
                return ns;
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/
            __webpack_require__.n = function(module) {
                /******/
                var getter = module && module.__esModule ?
                    /******/
                    function getDefault() { return module['default']; } :
                    /******/
                    function getModuleExports() { return module; };
                /******/
                __webpack_require__.d(getter, 'a', getter);
                /******/
                return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/
            __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
            /******/
            /******/ // __webpack_public_path__
            /******/
            __webpack_require__.p = "";
            /******/
            /******/
            /******/ // Load entry module and return exports
            /******/
            return __webpack_require__(__webpack_require__.s = "fb15");
            /******/
        })
        /************************************************************************/
        /******/
        ({

            /***/
            "83b8":
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                /* harmony import */
                var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickPayInput_vue_vue_type_style_index_0_id_ab1b1e06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f96e");
                /* harmony import */
                var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickPayInput_vue_vue_type_style_index_0_id_ab1b1e06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickPayInput_vue_vue_type_style_index_0_id_ab1b1e06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
                /* unused harmony reexport * */
                /* unused harmony default export */
                var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickPayInput_vue_vue_type_style_index_0_id_ab1b1e06_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a);

                /***/
            }),

            /***/
            "b25d":
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                /* harmony import */
                var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_0_id_95b5103a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f839");
                /* harmony import */
                var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_0_id_95b5103a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_0_id_95b5103a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
                /* unused harmony reexport * */
                /* unused harmony default export */
                var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_0_id_95b5103a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a);

                /***/
            }),

            /***/
            "c417":
            /***/
                (function(module, exports, __webpack_require__) {

                // extracted by mini-css-extract-plugin

                /***/
            }),

            /***/
            "ead8":
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                /* harmony import */
                var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentModal_vue_vue_type_style_index_0_id_3d86e099_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c417");
                /* harmony import */
                var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentModal_vue_vue_type_style_index_0_id_3d86e099_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentModal_vue_vue_type_style_index_0_id_3d86e099_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
                /* unused harmony reexport * */
                /* unused harmony default export */
                var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentModal_vue_vue_type_style_index_0_id_3d86e099_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a);

                /***/
            }),

            /***/
            "f839":
            /***/
                (function(module, exports, __webpack_require__) {

                // extracted by mini-css-extract-plugin

                /***/
            }),

            /***/
            "f96e":
            /***/
                (function(module, exports, __webpack_require__) {

                // extracted by mini-css-extract-plugin

                /***/
            }),

            /***/
            "fb15":
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);

                // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
                // This file is imported into lib/wc client bundles.

                if (typeof window !== 'undefined') {
                    var i
                    if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
                        __webpack_require__.p = i[1] // eslint-disable-line
                    }
                }

                // Indicate to webpack that this file can be concatenated
                /* harmony default export */
                var setPublicPath = (null);

                // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cb29a978-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PaymentModal.vue?vue&type=template&id=3d86e099&scoped=true&
                var render = function() { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('div', [_c('button', { class: _vm.btnClass, attrs: { "type": "button" }, on: { "click": _vm.show } }, [_vm._v(_vm._s(_vm.btnTitle))]), (!_vm.is_hidden) ? _c('div', { attrs: { "id": "modal1___BV_modal_outer_" } }, [_c('transition', { attrs: { "name": "quickpay-modal-fade" }, on: { "before-enter": _vm.onBeforeEnter, "enter": _vm.onEnter, "after-enter": _vm.onAfterEnter, "before-leave": _vm.onBeforeLeave, "leave": _vm.onLeave, "after-leave": _vm.onAfterLeave } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: (_vm.is_visible), expression: "is_visible" }], class: _vm.modalClasses, attrs: { "id": "modal1", "role": "dialog", "aria-hidden": _vm.is_visible }, on: { "click": _vm.onClickOut, "keydown": _vm.onEsc } }, [_c('div', { class: _vm.dialogClasses }, [_c('div', { staticClass: "modal-content", attrs: { "tabindex": "-1", "role": "document", "aria-labelledby": "modal1___BV_modal_header_", "aria-describedby": "modal1___BV_modal_body_" } }, [(!_vm.hideHeader) ? _c('header', { class: _vm.headerClasses, attrs: { "id": "modal1___BV_modal_header_" } }, [_c('h5', { class: _vm.titleClass }, [_vm._v(_vm._s(_vm.title))]), (!_vm.hideHeaderClose) ? _c('button', { staticClass: "close", attrs: { "type": "button", "aria-label": _vm.headerCloseLabel } }, [_vm._v("×")]) : _vm._e()]) : _vm._e(), _c('div', { class: _vm.bodyClasses, attrs: { "id": "modal1___BV_modal_body_" } }, [_c('Payment', { attrs: { "api-key": _vm.apiKey, "icon-color": _vm.iconColor, "accept-cards": _vm.acceptCards, "capture-name": _vm.captureName, "expiry-dropdowns": _vm.expiryDropdowns, "total-amount": _vm.totalAmount, "cc-icon": _vm.ccIcon, "name-icon": _vm.nameIcon, "cvv-icon": _vm.cvvIcon, "card-placeholder": _vm.cardPlaceholder, "name-placeholder": _vm.namePlaceholder, "expiry-icon": _vm.expiryIcon, "expiry-placeholder": _vm.expiryPlaceholder, "cvv-placeholder": _vm.cvvPlaceholder, "cc-zip-icon": _vm.ccZipIcon, "cc-zip-placeholder": _vm.ccZipPlaceholder, "address-placeholder": _vm.addressPlaceholder, "address2-placeholder": _vm.address2Placeholder, "city-placeholder": _vm.cityPlaceholder, "zip-icon": _vm.zipIcon, "zip-placeholder": _vm.zipPlaceholder, "card-btn-title": _vm.cardBtnTitle, "check-btn-title": _vm.checkBtnTitle, "pay-btn-title": _vm.payBtnTitle, "next-btn-title": _vm.nextBtnTitle, "prev-btn-title": _vm.prevBtnTitle, "accept-checks": _vm.acceptChecks, "routing-icon": _vm.routingIcon, "routing-placeholder": _vm.routingPlaceholder, "account-icon": _vm.accountIcon, "account-placeholder": _vm.accountPlaceholder, "check-name-placeholder": _vm.checkNamePlaceholder, "visa-icon": _vm.visaIcon, "mc-icon": _vm.mcIcon, "amex-icon": _vm.amexIcon, "discover-icon": _vm.discoverIcon, "diners-icon": _vm.dinersIcon, "jcb-icon": _vm.jcbIcon, "unknown-card-icon": _vm.unknownCardIcon, "gateway-custom-fields": _vm.gatewayCustomFields, "test": _vm.test, "post-url": _vm.postUrl, "capture-zip": _vm.captureZip, "billing-address": _vm.billingAddress, "shipping-address": _vm.shippingAddress, "add-page": _vm.addPage, "pay-page-title": _vm.payPageTitle, "bill-page-title": _vm.billPageTitle, "ship-page-title": _vm.shipPageTitle } })], 1), (!_vm.hideFooter) ? _c('footer', { class: _vm.footerClasses, attrs: { "id": "modal1___BV_modal_footer_" } }, [_vm._t("modal-footer")], 2) : _vm._e()])])])]), (_vm.is_visible || this.is_transitioning) ? _c('div', { class: _vm.backdropClasses, attrs: { "id": "modal1___BV_modal_backdrop_" }, on: { "keydown": _vm.onEsc } }) : _vm._e()], 1) : _vm._e()]) }
                var staticRenderFns = []


                // CONCATENATED MODULE: ./src/components/PaymentModal.vue?vue&type=template&id=3d86e099&scoped=true&

                // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cb29a978-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Payment.vue?vue&type=template&id=95b5103a&scoped=true&
                var Paymentvue_type_template_id_95b5103a_scoped_true_render = function() {
                    var _vm = this;
                    var _h = _vm.$createElement;
                    var _c = _vm._self._c || _h;
                    return _c('form', { staticClass: "quick-pay", attrs: { "name": "quickpayform", "id": "quickpayform" } }, [(!_vm.showResult) ? _c('div', { staticClass: "pane-wrapper" }, [(_vm.mountErrors) ? _c('div', { staticClass: "alert alert-danger", attrs: { "role": "alert" } }, [(_vm.mountErrors.length === 1) ? _c('span', [_vm._v("Error: " + _vm._s(_vm.mountErrors[0]))]) : _c('div', [_vm._v("\n                Errors:"), _c('br'), _vm._l((_vm.mountErrors), function(err, i) { return _c('span', { key: i }, [_vm._v("    • " + _vm._s(err)), _c('br')]) })], 2)]) : _vm._e(), (_vm.pages.length > 1) ? _c('div', [_c('div', { staticClass: "text-primary quickpay-page-title" }, [_vm._v(_vm._s(_vm.pages[_vm.page - 1]))]), _c('div', { staticClass: "progress quickpay-progress" }, [_c('div', { staticClass: "progress-bar", style: ('width: ' + (100 * _vm.page / (_vm.pages.length || 1)) + '%;'), attrs: { "role": "progressbar", "aria-valuenow": _vm.page, "aria-valuemin": "0", "aria-valuemax": "pages.length" } })])]) : _vm._e(), (_vm.restError) ? _c('div', { staticClass: "error-wrapper", attrs: { "role": "alert" } }, [_vm._t("qp-error", [_c('div', { staticClass: "alert alert-danger" }, [_c('span', [_vm._v(_vm._s(_vm.restError))])])], { error: _vm.restError })], 2) : _vm._e(), _c('div', [_c('div', { directives: [{ name: "show", rawName: "v-show", value: (_vm.page === 1), expression: "page === 1" }], key: "payment", staticClass: "pane-content", attrs: { "page": "pay" } }, [(_vm.acceptCards && _vm.acceptChecks) ? _c('div', { staticClass: "btn-group quickpay-payment-btns", attrs: { "role": "group", "aria-label": "Payment Method" } }, [_c('button', {
                        class: ['btn', _vm.transType === 'card' ? 'btn-primary' : 'btn-secondary'],
                        attrs: { "type": "button" },
                        on: {
                            "click": function($event) {
                                _vm.transType = 'card';
                                _vm.verifyForm();
                            }
                        }
                    }, [_c('i', { staticClass: "fas fa-credit-card" }), _vm._v(" " + _vm._s(_vm.cardBtnTitle))]), _c('button', {
                        class: ['btn', _vm.transType === 'check' ? 'btn-primary' : 'btn-secondary'],
                        attrs: { "type": "button" },
                        on: {
                            "click": function($event) {
                                _vm.transType = 'check';
                                _vm.verifyForm();
                            }
                        }
                    }, [_c('i', { staticClass: "fas fa-money-check-alt" }), _vm._v(" " + _vm._s(_vm.checkBtnTitle))])]) : _vm._e(), _c('div', { directives: [{ name: "show", rawName: "v-show", value: (_vm.transType === 'card'), expression: "transType === 'card'" }], attrs: { "trans": "card" } }, [_c('qp-input', { ref: "ccNumber", staticClass: "card-number-wrapper", attrs: { "prepend-icon": _vm.ccIcon, "icon-color": _vm.iconColor, "append-icon": _vm.ccTypeIcon, "input-class": "card-number", "type": "tel", "placeholder": _vm.cardPlaceholder, "mask": _vm.ccNumberMask, "name": "cardnumber", "title": "Card", "required": "1", "autocompletetype": "cc-number", "verify": _vm.verifyCardNumber, "formatter": _vm.setCardTypeFromNumber } }), (_vm.captureName) ? _c('qp-input', { ref: "cardName", staticClass: "card-name-wrapper", attrs: { "prepend-icon": _vm.nameIcon, "icon-color": _vm.iconColor, "input-class": "card-holder", "type": "text", "placeholder": _vm.namePlaceholder, "maxlength": 128, "name": "cardholder", "title": "Name", "required": "1", "autocompletetype": "cc-name" } }) : _vm._e(), _c('div', { staticClass: "form-row" }, [_c('qp-input', { staticClass: "expiry-wrapper col", attrs: { "prepend-icon": _vm.expiryIcon, "icon-color": _vm.iconColor, "input-class": "expiry", "type": "tel", "placeholder": _vm.expiryPlaceholder, "verify": _vm.verifyExpiry, "mask": _vm.expiryMask, "formatter": _vm.formatExpiry, "name": "expiry", "title": "Expiration", "required": "1", "numbers-only": "true", "autocompletetype": "cc-expiry" } }), _c('qp-input', { ref: "cvv", staticClass: "cvv-wrapper col", attrs: { "prepend-icon": _vm.cvvIcon, "icon-color": _vm.iconColor, "input-class": "cvv", "type": "tel", "placeholder": _vm.cvvPlaceholder, "mask": _vm.cvvMask, "name": "cvv", "title": "CVV", "required": "1", "numbers-only": "true", "autocompletetype": "cc-cvv" } }), (_vm.captureZip && !_vm.billingAddress) ? _c('qp-input', { ref: "ccBillZip", staticClass: "zip-wrapper col", attrs: { "prepend-icon": _vm.ccZipIcon, "icon-color": _vm.iconColor, "input-class": "zip", "type": "tel", "verify": _vm.verifyZip, "placeholder": _vm.ccZipPlaceholder, "maxlength": 9, "name": "billZip", "title": "Zip", "required": "1", "autocompletetype": "bill-zip" } }) : _vm._e()], 1), _vm._t("add-to-card")], 2), _c('div', { directives: [{ name: "show", rawName: "v-show", value: (_vm.transType === 'check'), expression: "transType === 'check'" }], attrs: { "trans": "check" } }, [_c('div', { staticClass: "form-row" }, [_c('qp-input', { staticClass: "routing-wrapper col", attrs: { "prepend-icon": _vm.routingIcon, "icon-color": _vm.iconColor, "input-class": "routing-number", "type": "tel", "placeholder": _vm.routingPlaceholder, "mask": "XXXXXXXXX", "name": "routing", "title": "Routing", "required": "1", "autocompletetype": "check-routing", "numbers-only": "true", "verify": _vm.verifyRouting } }), _c('qp-input', { ref: "checkAccount", staticClass: "account-wrapper col", attrs: { "prepend-icon": _vm.accountIcon, "icon-color": _vm.iconColor, "input-class": "account-number", "type": "tel", "placeholder": _vm.accountPlaceholder, "minlength": 4, "maxlength": 17, "name": "account", "title": "Account", "required": "1", "autocompletetype": "check-account", "numbers-only": "true" } })], 1), _c('qp-input', { ref: "checkName", staticClass: "check-name-wrapper", attrs: { "prepend-icon": _vm.nameIcon, "icon-color": _vm.iconColor, "input-class": "check-name", "type": "text", "placeholder": _vm.checkNamePlaceholder, "name": "checkname", "title": "Name", "required": "1", "autocompletetype": "check-name" } }), _vm._t("add-to-check")], 2)]), _c('div', { directives: [{ name: "show", rawName: "v-show", value: (_vm.pageKeys[_vm.page - 1] === 'bill'), expression: "pageKeys[page - 1] === 'bill'" }], key: "billing", staticClass: "pane-content", attrs: { "page": "bill" } }, [_c('qp-input', { ref: "billAddress", staticClass: "bill-address-wrapper", attrs: { "input-class": "bill-address", "type": "text", "placeholder": _vm.addressPlaceholder, "name": "billAddress", "title": "Address", "required": _vm.reqBilling, "autocompletetype": "address" } }), _c('qp-input', { staticClass: "bill-address2-wrapper", attrs: { "input-class": "bill-address2", "type": "text", "placeholder": _vm.address2Placeholder, "name": "billAddress2", "title": "Address2", "autocompletetype": "address2" } }), _c('div', { staticClass: "form-row" }, [_c('qp-input', { staticClass: "bill-city-wrapper col", attrs: { "input-class": "bill-city", "type": "text", "placeholder": _vm.cityPlaceholder, "name": "billCity", "title": "City", "autocompletetype": "city", "required": _vm.reqBilling } }), _c('select', { staticClass: "form-control bill-state-select col", attrs: { "name": "billState" } }, [_c('option', { attrs: { "value": "", "disabled": "", "selected": "" } }, [_vm._v("Choose State")]), _vm._l((_vm.states), function(state) { return _c('option', { key: state.value, domProps: { "value": state.value } }, [_vm._v(_vm._s(state.name))]) })], 2), _c('qp-input', { ref: "billZip", staticClass: "zip-wrapper col", attrs: { "prepend-icon": _vm.zipIcon, "icon-color": _vm.iconColor, "input-class": "bill-zip", "type": "tel", "placeholder": _vm.zipPlaceholder, "maxlength": 9, "verify": _vm.verifyZip, "name": "billZip", "title": "Zip", "autocompletetype": "bill-zip", "required": _vm.reqBillingZip } })], 1), _vm._t("add-to-billing")], 2), _c('div', { directives: [{ name: "show", rawName: "v-show", value: (_vm.pageKeys[_vm.page - 1] === 'ship'), expression: "pageKeys[page - 1] === 'ship'" }], key: "shipping", staticClass: "pane-content", attrs: { "page": "ship" } }, [_c('qp-input', { staticClass: "ship-address-wrapper", attrs: { "input-class": "ship-address", "type": "text", "placeholder": _vm.addressPlaceholder, "name": "shipAddress", "title": "Address", "required": _vm.reqShipping, "autocompletetype": "address" } }), _c('qp-input', { staticClass: "ship-address2-wrapper", attrs: { "input-class": "ship-address2", "type": "text", "placeholder": _vm.address2Placeholder, "name": "shipAddress2", "title": "Address2", "autocompletetype": "address2" } }), _c('div', { staticClass: "form-row" }, [_c('qp-input', { staticClass: "ship-city-wrapper col", attrs: { "input-class": "ship-city", "type": "text", "placeholder": _vm.cityPlaceholder, "name": "shipCity", "title": "City", "autocompletetype": "city", "required": _vm.reqShipping } }), _c('select', { staticClass: "form-control ship-state-select col", attrs: { "name": "shipState" } }, [_c('option', { attrs: { "value": "", "disabled": "", "selected": "" } }, [_vm._v("Choose State")]), _vm._l((_vm.states), function(state) { return _c('option', { key: state.value, domProps: { "value": state.value } }, [_vm._v(_vm._s(state.name))]) })], 2), _c('qp-input', { staticClass: "zip-wrapper col", attrs: { "prepend-icon": _vm.zipIcon, "icon-color": _vm.iconColor, "input-class": "ship-zip", "type": "tel", "placeholder": _vm.zipPlaceholder, "verify": _vm.verifyZip, "maxlength": 9, "name": "shipZip", "title": "Zip", "autocompletetype": "ship-zip" } })], 1), _vm._t("add-to-shipping")], 2), _c('div', { directives: [{ name: "show", rawName: "v-show", value: (_vm.pageKeys[_vm.page - 1] === 'custom'), expression: "pageKeys[page - 1] === 'custom'" }], key: "custom", staticClass: "pane-content", attrs: { "page": "add" } }, [_vm._t("additional-page")], 2)]), (_vm.page > 1) ? _c('button', { staticClass: "btn btn-secondary prev-btn float-left", attrs: { "type": "button" }, on: { "click": _vm.prevPage } }, [_vm._v(_vm._s(_vm.prevBtnTitle))]) : _vm._e(), (_vm.page === _vm.pages.length) ? _c('button', { staticClass: "btn btn-primary pay-btn float-right", attrs: { "type": "button", "disabled": !_vm.valid || _vm.fetching }, on: { "click": _vm.fetchToken } }, [(_vm.fetching) ? _c('i', { staticClass: "fas fa-spinner fa-pulse" }) : _vm._e(), _vm._v(" " + _vm._s(_vm.payNowBtnTitle))]) : _vm._e(), (_vm.page < _vm.pages.length) ? _c('button', { staticClass: "btn btn-info next-btn float-right", attrs: { "type": "button", "disabled": !_vm.pageValid || _vm.fetching }, on: { "click": _vm.nextPage } }, [_vm._v(_vm._s(_vm.nextBtnTitle))]) : _vm._e(), _vm._m(0)]) : _vm._e(), (_vm.showResult) ? _c('div', { staticClass: "qp-result-wrapper" }, [_vm._t("transaction-success", [_vm._m(1)])], 2) : _vm._e()])
                }
                var Paymentvue_type_template_id_95b5103a_scoped_true_staticRenderFns = [function() { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('div', { staticClass: "float-none" }, [_vm._v(" "), _c('br'), _vm._v(" ")]) }, function() { var _vm = this; var _h = _vm.$createElement; var _c = _vm._self._c || _h; return _c('h3', { staticClass: "text-success" }, [_c('i', { staticClass: "far fa-check-circle" }), _vm._v(" Success!")]) }]


                // CONCATENATED MODULE: ./src/components/Payment.vue?vue&type=template&id=95b5103a&scoped=true&

                // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cb29a978-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/QuickPayInput.vue?vue&type=template&id=ab1b1e06&scoped=true&
                var QuickPayInputvue_type_template_id_ab1b1e06_scoped_true_render = function() {
                    var _vm = this;
                    var _h = _vm.$createElement;
                    var _c = _vm._self._c || _h;
                    return _c('div', { staticClass: "input-group quickpay-input-wrapper" }, [(_vm.prependIcon) ? _c('div', { staticClass: "input-group-prepend quickpay-input-prepend" }, [_c('span', { staticClass: "input-group-text" }, [_c('i', { class: _vm.prependIcon, style: ({ color: _vm.iconColor }) })])]) : _vm._e(), ((_vm.type) === 'checkbox') ? _c('input', {
                        directives: [{ name: "model", rawName: "v-model", value: (_vm.model), expression: "model" }],
                        class: [_vm.inputClass, 'form-control', _vm.error === '' ? '' : (_vm.error ? 'is-invalid' : 'is-valid')],
                        attrs: { "placeholder": _vm.placeholder, "maxlength": _vm.maxlength, "name": _vm.name, "x-autocompletetype": _vm.autocompletetype || _vm.name, "autocompletetype": _vm.autocompletetype || _vm.name, "autocorrect": "off", "spellcheck": "off", "autocapitalize": "off", "aria-label": _vm.placeholder, "required": "", "id": _vm.name, "type": "checkbox" },
                        domProps: { "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, null) > -1 : (_vm.model) },
                        on: {
                            "keydown": _vm.handleKeyDown,
                            "keyup": _vm.handleKeyUp,
                            "change": [function($event) {
                                var $$a = _vm.model,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? (true) : (false);
                                if (Array.isArray($$a)) {
                                    var $$v = null,
                                        $$i = _vm._i($$a, $$v);
                                    if ($$el.checked) { $$i < 0 && (_vm.model = $$a.concat([$$v])) } else { $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1))) }
                                } else { _vm.model = $$c }
                            }, _vm.verifyInput]
                        }
                    }) : ((_vm.type) === 'radio') ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: (_vm.model), expression: "model" }], class: [_vm.inputClass, 'form-control', _vm.error === '' ? '' : (_vm.error ? 'is-invalid' : 'is-valid')], attrs: { "placeholder": _vm.placeholder, "maxlength": _vm.maxlength, "name": _vm.name, "x-autocompletetype": _vm.autocompletetype || _vm.name, "autocompletetype": _vm.autocompletetype || _vm.name, "autocorrect": "off", "spellcheck": "off", "autocapitalize": "off", "aria-label": _vm.placeholder, "required": "", "id": _vm.name, "type": "radio" }, domProps: { "checked": _vm._q(_vm.model, null) }, on: { "keydown": _vm.handleKeyDown, "keyup": _vm.handleKeyUp, "change": [function($event) { _vm.model = null }, _vm.verifyInput] } }) : _c('input', {
                        directives: [{ name: "model", rawName: "v-model", value: (_vm.model), expression: "model" }],
                        class: [_vm.inputClass, 'form-control', _vm.error === '' ? '' : (_vm.error ? 'is-invalid' : 'is-valid')],
                        attrs: { "placeholder": _vm.placeholder, "maxlength": _vm.maxlength, "name": _vm.name, "x-autocompletetype": _vm.autocompletetype || _vm.name, "autocompletetype": _vm.autocompletetype || _vm.name, "autocorrect": "off", "spellcheck": "off", "autocapitalize": "off", "aria-label": _vm.placeholder, "required": "", "id": _vm.name, "type": _vm.type },
                        domProps: { "value": (_vm.model) },
                        on: {
                            "keydown": _vm.handleKeyDown,
                            "keyup": _vm.handleKeyUp,
                            "change": _vm.verifyInput,
                            "input": function($event) {
                                if ($event.target.composing) { return; }
                                _vm.model = $event.target.value
                            }
                        }
                    }), (_vm.appendIcon) ? _c('div', { staticClass: "input-group-append quickpay-input-append" }, [_c('span', { staticClass: "input-group-text" }, [_c('i', { class: _vm.appendIcon, style: ({ color: _vm.iconColor }) })])]) : _vm._e()])
                }
                var QuickPayInputvue_type_template_id_ab1b1e06_scoped_true_staticRenderFns = []


                // CONCATENATED MODULE: ./src/components/QuickPayInput.vue?vue&type=template&id=ab1b1e06&scoped=true&

                // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/QuickPayInput.vue?vue&type=script&lang=js&
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //

                const KEYS = {
                    "0": 48,
                    "9": 57,
                    "NUMPAD_0": 96,
                    "NUMPAD_9": 105,
                    "DELETE": 46,
                    "BACKSPACE": 8,
                    "ARROW_LEFT": 37,
                    "ARROW_RIGHT": 39,
                    "ARROW_UP": 38,
                    "ARROW_DOWN": 40,
                    "HOME": 36,
                    "END": 35,
                    "TAB": 9,
                    "A": 65,
                    "X": 88,
                    "C": 67,
                    "V": 86
                };

                /* harmony default export */
                var QuickPayInputvue_type_script_lang_js_ = ({
                    name: "QuickPayInput",
                    props: {
                        prependIcon: String,
                        appendIcon: String,
                        iconColor: {
                            type: String,
                            default: 'inherit'
                        },
                        autocompletetype: String,
                        inputClass: String,
                        formatter: {
                            validator: function(value) {
                                return (!value || typeof value === 'function');
                            }
                        },
                        mask: {
                            type: String
                        },
                        maxlength: {
                            type: Number,
                            default: 256
                        },
                        minlength: {
                            type: Number,
                            default: 0
                        },
                        initValue: {
                            type: [String, Number],
                            //required: true
                        },
                        name: String,
                        numbersOnly: {
                            type: [String, Boolean],
                            default: 'false'
                        },
                        placeholder: String,
                        required: {
                            type: [String, Boolean],
                            default: 'false'
                        },
                        title: String,
                        type: {
                            type: String,
                            default: 'text'
                        },
                        verify: {
                            validator: function(value) {
                                return (!value || typeof value === 'function');
                            }
                        }
                    },
                    computed: {
                        forceNumbersOnly() {
                            if (this.numbersOnly === 'true' || this.numbersOnly === '1') return true;
                            if (this.numbersOnly === 'false' || this.numbersOnly === '0') return false;
                            return !!this.numbersOnly;
                        },
                        isRequired() {
                            if (this.required === 'true' || this.required === '1') return true;
                            if (this.required === 'false' || this.required === '0') return false;
                            return !!this.required;
                        }
                    },
                    data() {
                        return {
                            error: null,
                            model: this.initValue || '',
                            page: 0,
                            parent: null,
                            forTrans: null
                        }
                    },
                    mounted() {
                        this.verifyInput(null);
                        this.findParent();
                        // verify input made sure that the form validates as false at the start but we don't want all the inputs to be shown as an error at the start - but only on the main payment page later pages should show the required fields as red immediately.
                        if (this.page === 'pay' || this.error === null) this.error = '';
                    },
                    methods: {
                        findParent() {
                            this.parent = this.$parent;
                            while (this.parent && this.parent.$el && this.parent.$el.className !== 'quick-pay') {
                                this.parent = this.parent.$parent;
                            }
                            if (!this.parent) {
                                console.log("Missing quick payments top level object!");
                            }
                            let elParent = this.$el.parentElement;
                            while (elParent && elParent.className !== 'pane-content') {
                                if (elParent.attributes && elParent.attributes.trans) this.forTrans = elParent.attributes.trans.nodeValue;
                                elParent = elParent.parentElement;
                            }
                            if (elParent) this.page = elParent.attributes.page && elParent.attributes.page.nodeValue;
                            //console.log('(Remove in production) ' + this.name + ' is on page ' + this.page + ' for ' + (this.forTrans || 'all'));
                        },
                        handleKeyDown(e) {
                            if (this.mask) this.model = this.handleMaskedNumberInputKey(e);
                            else if (this.forceNumbersOnly) this.filterNumberOnlyKey(e);
                        },
                        handleKeyUp(e) {
                            if (this.formatter) {
                                this.model = this.formatter(e && e.target && e.target.value);
                                if (this.mask) {
                                    this.model = this.applyFormatMask(this.numbersOnlyString(this.model), this.mask);
                                }
                            }
                            this.verifyInput(e);
                        },
                        verifyInput(e) {
                            this.error = null;
                            if (this.isRequired && !this.model) this.error = (this.title || this.name) + ' is required.';
                            if (!this.error && this.mask && this.mask.length !== this.model.length) this.error = 'Invalid ' + (this.title || this.name) + '.';
                            if (!this.error && this.maxlength && typeof this.model === 'string' && this.model.length > this.maxlength) this.error = (this.title || this.name) + ' is limited to ' + this.maxlength + ' characters.';
                            if (!this.error && this.minlength && typeof this.model === 'string' && this.model.length < this.minlength) this.error = (this.title || this.name) + ' must be at least ' + this.minlength + ' characters.';
                            if (!this.error && this.verify) this.error = this.verify(e, this.model);
                            if (!this.parent) this.findParent();
                            if (this.parent && this.parent.setError) this.parent.setError(this.name, this.error, this.page, this.forTrans);
                            else console.log('Missing $parent.setError!?');
                        },
                        filterNumberOnlyKey(e) {
                            const keyCode = e.which || e.keyCode,
                                isNumber = this.keyIsNumber(keyCode),
                                isDeletion = keyCode === KEYS.DELETE || keyCode === KEYS.BACKSPACE,
                                isArrow = this.keyIsArrow(keyCode),
                                isNavigation = this.keyIsNavigation(keyCode),
                                isKeyboardCommand = this.keyIsKeyboardShortcut(e, keyCode),
                                isTab = keyCode === KEYS.TAB;

                            if (!isNumber && !isDeletion && !isArrow && !isNavigation && !isKeyboardCommand && !isTab) {
                                console.log('e: ' + JSON.stringify(e));
                                if (e) e.preventDefault();
                            }
                        },
                        keyIsNumber(keyCode) {
                            if (keyCode >= KEYS['0'] && keyCode <= KEYS['9']) return true;
                            return keyCode >= KEYS.NUMPAD_0 && keyCode <= KEYS.NUMPAD_9;
                        },
                        keyIsArrow(keyCode) {
                            return keyCode >= KEYS.ARROW_LEFT && keyCode <= KEYS.ARROW_DOWN;
                        },
                        keyIsNavigation(keyCode) {
                            return keyCode === KEYS.HOME || keyCode === KEYS.END;
                        },
                        keyIsKeyboardShortcut(e, keyCode) {
                            const commandKey = e.ctrlKey || e.metaKey;
                            return commandKey && (keyCode === KEYS.A || keyCode === KEYS.X || keyCode === KEYS.C || keyCode === KEYS.V);
                        },
                        handleMaskedNumberInputKey(e) {
                            this.filterNumberOnlyKey(e);
                            const keyCode = e.which || e.keyCode,
                                element = e.target,
                                caretStart = this.caretStartPosition(element),
                                caretEnd = this.caretEndPosition(element),
                                normalizedStartCaretPosition = this.normalizeCaretPosition(this.mask, caretStart),
                                normalizedEndCaretPosition = this.normalizeCaretPosition(this.mask, caretEnd),
                                isNumber = this.keyIsNumber(keyCode),
                                isDelete = keyCode === KEYS.DELETE,
                                isBackspace = keyCode === KEYS.BACKSPACE;
                            let newCaretPosition = caretStart;

                            if (isNumber || isDelete || isBackspace) {
                                e.preventDefault();
                                var rawText = element.value || "",
                                    numbersOnly = this.numbersOnlyString(rawText),
                                    digit = this.digitFromKeyCode(keyCode),
                                    rangeHighlighted = normalizedEndCaretPosition > normalizedStartCaretPosition;

                                // Remove values highlighted (if highlighted)
                                if (rangeHighlighted) {
                                    numbersOnly = (numbersOnly.slice(0, normalizedStartCaretPosition) + numbersOnly.slice(normalizedEndCaretPosition));
                                }

                                if (caretStart !== this.mask.length) {
                                    // Insert number digit
                                    if (isNumber && rawText.length <= this.mask.length) {
                                        numbersOnly = (numbersOnly.slice(0, normalizedStartCaretPosition) + digit + numbersOnly.slice(normalizedStartCaretPosition));
                                        newCaretPosition = Math.max(
                                            this.denormalizeCaretPosition(this.mask, normalizedStartCaretPosition + 1),
                                            this.denormalizeCaretPosition(this.mask, normalizedStartCaretPosition + 2) - 1
                                        );
                                    }
                                    if (isDelete) {
                                        numbersOnly = (numbersOnly.slice(0, normalizedStartCaretPosition) + numbersOnly.slice(normalizedStartCaretPosition + 1));
                                    }
                                }

                                if (caretStart !== 0) {
                                    if (isBackspace && !rangeHighlighted) {
                                        numbersOnly = (numbersOnly.slice(0, normalizedStartCaretPosition - 1) + numbersOnly.slice(normalizedStartCaretPosition));
                                        newCaretPosition = this.denormalizeCaretPosition(this.mask, normalizedStartCaretPosition - 1);
                                    }
                                }
                                //element.value = this.applyFormatMask(numbersOnly, this.mask);
                                this.setCaretPosition(element, newCaretPosition);
                                return this.applyFormatMask(numbersOnly, this.mask);
                            }
                            return element.value;
                        },
                        caretStartPosition(element) {
                            if (typeof element.selectionStart === "number") {
                                return element.selectionStart;
                            }
                            return false;
                        },
                        caretEndPosition(element) {
                            if (typeof element.selectionEnd === "number") {
                                return element.selectionEnd;
                            }
                            return false;
                        },
                        normalizeCaretPosition(mask, caretPosition) {
                            let numberPos = 0;
                            if (caretPosition < 0 || caretPosition > mask.length) return 0;
                            for (let i = 0; i < mask.length; i++) {
                                if (i === caretPosition) return numberPos;
                                if (mask[i] === "X") numberPos++;
                            }
                            return numberPos;
                        },
                        denormalizeCaretPosition(mask, caretPosition) {
                            let numberPos = 0;
                            if (caretPosition < 0 || caretPosition > mask.length) return 0;
                            for (let i = 0; i < mask.length; i++) {
                                if (numberPos === caretPosition) return i;
                                if (mask[i] === "X") numberPos++;
                            }
                            return mask.length;
                        },
                        numbersOnlyString(string) {
                            if (!string) return '';
                            let numbersOnlyString = '';
                            for (let i = 0; i < string.length; i++) {
                                let currentChar = string.charAt(i);
                                if (!isNaN(parseInt(currentChar))) numbersOnlyString += currentChar;
                            }
                            return numbersOnlyString;
                        },
                        digitFromKeyCode(keyCode) {
                            if (keyCode >= KEYS["0"] && keyCode <= KEYS["9"]) {
                                return keyCode - KEYS["0"];
                            }
                            if (keyCode >= KEYS.NUMPAD_0 && keyCode <= KEYS.NUMPAD_9) {
                                return keyCode - KEYS.NUMPAD_0;
                            }
                            return null;
                        },
                        applyFormatMask(string, mask) {
                            let formattedString = "",
                                numberPos = 0;
                            for (let i = 0; i < mask.length; i++) {
                                let currentMaskChar = mask[i];
                                if (currentMaskChar === "X") {
                                    let digit = string.charAt(numberPos);
                                    if (!digit) break;
                                    formattedString += string.charAt(numberPos);
                                    numberPos++;
                                } else {
                                    formattedString += currentMaskChar;
                                }
                            }
                            return formattedString;
                        },
                        setCaretPosition(element, caretPos) {
                            if (element) {
                                if (element.createTextRange) {
                                    let range = element.createTextRange();
                                    range.move('character', caretPos);
                                    range.select();
                                } else {
                                    if (element.selectionStart) {
                                        element.focus();
                                        element.setSelectionRange(caretPos, caretPos);
                                    } else {
                                        element.focus();
                                    }
                                }
                            }
                        },
                        getValue(numbersOnly) {
                            return numbersOnly ? this.numbersOnlyString(this.model) : this.model;
                        }
                    }
                });

                // CONCATENATED MODULE: ./src/components/QuickPayInput.vue?vue&type=script&lang=js&
                /* harmony default export */
                var components_QuickPayInputvue_type_script_lang_js_ = (QuickPayInputvue_type_script_lang_js_);
                // EXTERNAL MODULE: ./src/components/QuickPayInput.vue?vue&type=style&index=0&id=ab1b1e06&scoped=true&lang=css&
                var QuickPayInputvue_type_style_index_0_id_ab1b1e06_scoped_true_lang_css_ = __webpack_require__("83b8");

                // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
                /* globals __VUE_SSR_CONTEXT__ */

                // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
                // This module is a runtime utility for cleaner component module output and will
                // be included in the final webpack user bundle.

                function normalizeComponent(
                    scriptExports,
                    render,
                    staticRenderFns,
                    functionalTemplate,
                    injectStyles,
                    scopeId,
                    moduleIdentifier, /* server only */
                    shadowMode /* vue-cli only */
                ) {
                    // Vue.extend constructor export interop
                    var options = typeof scriptExports === 'function' ?
                        scriptExports.options :
                        scriptExports

                    // render functions
                    if (render) {
                        options.render = render
                        options.staticRenderFns = staticRenderFns
                        options._compiled = true
                    }

                    // functional template
                    if (functionalTemplate) {
                        options.functional = true
                    }

                    // scopedId
                    if (scopeId) {
                        options._scopeId = 'data-v-' + scopeId
                    }

                    var hook
                    if (moduleIdentifier) { // server build
                        hook = function(context) {
                                // 2.3 injection
                                context =
                                    context || // cached call
                                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
                                    // 2.2 with runInNewContext: true
                                if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                                    context = __VUE_SSR_CONTEXT__
                                }
                                // inject component styles
                                if (injectStyles) {
                                    injectStyles.call(this, context)
                                }
                                // register component module identifier for async chunk inferrence
                                if (context && context._registeredComponents) {
                                    context._registeredComponents.add(moduleIdentifier)
                                }
                            }
                            // used by ssr in case component is cached and beforeCreate
                            // never gets called
                        options._ssrRegister = hook
                    } else if (injectStyles) {
                        hook = shadowMode ?

                            function() { injectStyles.call(this, this.$root.$options.shadowRoot) } :
                            injectStyles
                    }

                    if (hook) {
                        if (options.functional) {
                            // for template-only hot-reload because in that case the render fn doesn't
                            // go through the normalizer
                            options._injectStyles = hook
                                // register for functioal component in vue file
                            var originalRender = options.render
                            options.render = function renderWithStyleInjection(h, context) {
                                hook.call(context)
                                return originalRender(h, context)
                            }
                        } else {
                            // inject component registration as beforeCreate hook
                            var existing = options.beforeCreate
                            options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
                        }
                    }

                    return {
                        exports: scriptExports,
                        options: options
                    }
                }

                // CONCATENATED MODULE: ./src/components/QuickPayInput.vue






                /* normalize component */

                var component = normalizeComponent(
                    components_QuickPayInputvue_type_script_lang_js_,
                    QuickPayInputvue_type_template_id_ab1b1e06_scoped_true_render,
                    QuickPayInputvue_type_template_id_ab1b1e06_scoped_true_staticRenderFns,
                    false,
                    null,
                    "ab1b1e06",
                    null

                )

                component.options.__file = "QuickPayInput.vue"
                    /* harmony default export */
                var QuickPayInput = (component.exports);
                // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Payment.vue?vue&type=script&lang=js&
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //



                const pmn = {
                        CREDIT_CARD_NUMBER_DEFAULT_MASK: 'XXXX XXXX XXXX XXXX',
                        CREDIT_CARD_NUMBER_VISA_MASK: 'XXXX XXXX XXXX XXXX',
                        CREDIT_CARD_NUMBER_MASTERCARD_MASK: 'XXXX XXXX XXXX XXXX',
                        CREDIT_CARD_NUMBER_DISCOVER_MASK: 'XXXX XXXX XXXX XXXX',
                        CREDIT_CARD_NUMBER_JCB_MASK: 'XXXX XXXX XXXX XXXX',
                        CREDIT_CARD_NUMBER_AMEX_MASK: 'XXXX XXXXXX XXXXX',
                        CREDIT_CARD_NUMBER_DINERS_MASK: 'XXXX XXXX XXXX XX',
                        EXPIRY_MASK: 'XX / XX',
                        CVV_MASK_3: 'XXX',
                        CVV_MASK_4: 'XXXX',
                        EXPIRY_NUMBER_OF_YEARS: 10,
                        QPTOKEN_API_URL: '', // Add QuickPay Token URL between Quotes EX. (GateWayURL/api/quickpayments/qp-tokens)
                        KEYS: {
                            "0": 48,
                            "9": 57,
                            "NUMPAD_0": 96,
                            "NUMPAD_9": 105,
                            "DELETE": 46,
                            "BACKSPACE": 8,
                            "ARROW_LEFT": 37,
                            "ARROW_RIGHT": 39,
                            "ARROW_UP": 38,
                            "ARROW_DOWN": 40,
                            "HOME": 36,
                            "END": 35,
                            "TAB": 9,
                            "A": 65,
                            "X": 88,
                            "C": 67,
                            "V": 86
                        }
                    },
                    STATES = [
                        { name: 'Alabama', value: 'AL' },
                        { name: 'Alaska', value: 'AK' },
                        { name: 'Arizona', value: 'AZ' },
                        { name: 'Arkansas', value: 'AR' },
                        { name: 'California', value: 'CA' },
                        { name: 'Colorado', value: 'CO' },
                        { name: 'Connecticut', value: 'CT' },
                        { name: 'Delaware', value: 'DE' },
                        { name: 'Florida', value: 'FL' },
                        { name: 'Georgia', value: 'GA' },
                        { name: 'Hawaii', value: 'HI' },
                        { name: 'Idaho', value: 'ID' },
                        { name: 'Illinois', value: 'IL' },
                        { name: 'Indiana', value: 'IN' },
                        { name: 'Iowa', value: 'IA' },
                        { name: 'Kansas', value: 'KS' },
                        { name: 'Kentucky', value: 'KY' },
                        { name: 'Louisiana', value: 'LA' },
                        { name: 'Maine', value: 'ME' },
                        { name: 'Maryland', value: 'MD' },
                        { name: 'Massachusetts', value: 'MA' },
                        { name: 'Michigan', value: 'MI' },
                        { name: 'Minnesota', value: 'MN' },
                        { name: 'Mississippi', value: 'MS' },
                        { name: 'Missouri', value: 'MO' },
                        { name: 'Montana', value: 'MT' },
                        { name: 'Nebraska', value: 'NE' },
                        { name: 'Nevada', value: 'NV' },
                        { name: 'New Hampshire', value: 'NH' },
                        { name: 'New Jersey', value: 'NJ' },
                        { name: 'New Mexico', value: 'NM' },
                        { name: 'New York', value: 'NY' },
                        { name: 'North Carolina', value: 'NC' },
                        { name: 'North Dakota', value: 'ND' },
                        { name: 'Ohio', value: 'OH' },
                        { name: 'Oklahoma', value: 'OK' },
                        { name: 'Oregon', value: 'OR' },
                        { name: 'Pennsylvania', value: 'PA' },
                        { name: 'Rhode Island', value: 'RI' },
                        { name: 'South Carolina', value: 'SC' },
                        { name: 'South Dakota', value: 'SD' },
                        { name: 'Tennessee', value: 'TN' },
                        { name: 'Texas', value: 'TX' },
                        { name: 'Utah', value: 'UT' },
                        { name: 'Vermont', value: 'VT' },
                        { name: 'Virginia', value: 'VA' },
                        { name: 'Washington', value: 'WA' },
                        { name: 'West Virginia', value: 'WV' },
                        { name: 'Wisconsin', value: 'WI' },
                        { name: 'Wyoming', value: 'WY' },
                    ];

                /* harmony default export */
                var Paymentvue_type_script_lang_js_ = ({
                    name: 'Payment',
                    quickPaymentsInput: QuickPayInput,
                    components: {
                        QpInput: QuickPayInput
                    },
                    props: {
                        apiKey: {
                            type: String,
                            required: true
                        },
                        iconColor: {
                            type: String,
                            default: 'inherit'
                        },
                        acceptCards: {
                            type: Boolean,
                            default: true
                        },
                        acceptChecks: {
                            type: Boolean,
                            default: false
                        },
                        captureName: {
                            type: Boolean,
                            default: true
                        },
                        expiryDropdowns: {
                            type: Boolean,
                            default: false
                        },
                        totalAmount: [String, Number],
                        ccIcon: {
                            type: String,
                            default: 'far fa-credit-card'
                        },
                        nameIcon: {
                            type: String,
                            default: 'fas fa-user'
                        },
                        cvvIcon: {
                            type: String,
                            default: 'fas fa-lock'
                        },
                        cardPlaceholder: {
                            type: String,
                            default: 'Card number'
                        },
                        namePlaceholder: {
                            type: String,
                            default: 'Name on card'
                        },
                        expiryIcon: {
                            type: String,
                            default: 'far fa-calendar-alt'
                        },
                        expiryPlaceholder: {
                            type: String,
                            default: 'MM / YY'
                        },
                        cvvPlaceholder: {
                            type: String,
                            default: 'CVV'
                        },
                        ccZipIcon: {
                            type: String,
                            default: 'far fa-address-card'
                        },
                        ccZipPlaceholder: {
                            type: String,
                            default: 'Postal code'
                        },
                        addressPlaceholder: {
                            type: String,
                            default: 'Street address'
                        },
                        address2Placeholder: {
                            type: String,
                            default: 'Street address'
                        },
                        cityPlaceholder: {
                            type: String,
                            default: 'City'
                        },
                        zipIcon: String,
                        zipPlaceholder: {
                            type: String,
                            default: 'Postal code'
                        },
                        cardBtnTitle: {
                            type: String,
                            default: 'Card'
                        },
                        checkBtnTitle: {
                            type: String,
                            default: 'Check'
                        },
                        payBtnTitle: {
                            type: String,
                            default: 'Pay Now'
                        },
                        nextBtnTitle: {
                            type: String,
                            default: 'Next'
                        },
                        prevBtnTitle: {
                            type: String,
                            default: 'Prev'
                        },
                        routingIcon: {
                            type: String,
                            default: 'fas fa-money-check'
                        },
                        routingPlaceholder: {
                            type: String,
                            default: 'Bank routing number'
                        },
                        accountIcon: {
                            type: String,
                            default: 'fas fa-hashtag'
                        },
                        accountPlaceholder: {
                            type: String,
                            default: 'Account number'
                        },
                        checkNamePlaceholder: {
                            type: String,
                            default: 'Name on check'
                        },
                        visaIcon: {
                            type: String,
                            default: 'fab fa-cc-visa fa-lg'
                        },
                        mcIcon: {
                            type: String,
                            default: 'fab fa-cc-mastercard fa-lg'
                        },
                        amexIcon: {
                            type: String,
                            default: 'fab fa-cc-amex fa-lg'
                        },
                        discoverIcon: {
                            type: String,
                            default: 'fab fa-cc-discover fa-lg'
                        },
                        dinersIcon: {
                            type: String,
                            default: 'fab fa-cc-diners-club fa-lg'
                        },
                        jcbIcon: {
                            type: String,
                            default: 'fab fa-cc-jcb fa-lg'
                        },
                        unknownCardIcon: {
                            type: String,
                            default: 'fas fa-credit-card fa-lg'
                        },
                        gatewayCustomFields: String,
                        test: String,
                        postUrl: {
                            type: String,
                            required: true
                        },
                        captureZip: {
                            type: Boolean,
                            default: false
                        },
                        billingAddress: [Boolean, String],
                        shippingAddress: [Boolean, String],
                        addPage: String,
                        payPageTitle: String,
                        billPageTitle: String,
                        shipPageTitle: String
                    },
                    data() {
                        return {
                            ccExpiryMonth: '',
                            ccExpiryYear: '',
                            //ccMax: pmn.CREDIT_CARD_NUMBER_DEFAULT_MASK.length,
                            ccNumberMask: pmn.CREDIT_CARD_NUMBER_DEFAULT_MASK,
                            ccType: '',
                            ccTypeIcon: this.unknownCardIcon,
                            cvvMask: pmn.CVV_MASK_3,
                            checkRouting: null,
                            fetching: false,
                            mountErrors: null,
                            errors: {},
                            expiryMask: pmn.EXPIRY_MASK,
                            pages: ['Payment'],
                            pageKeys: ['pay'],
                            page: 1, // 1 based
                            pageValid: false,
                            restError: null,
                            showResult: 0,
                            states: STATES,
                            transType: 'card',
                            transClass: 'quickpay-next-animation',
                            valid: false
                        };
                    },
                    computed: {
                        showBilling() {
                            return !(!this.billingAddress || this.billingAddress === 'false' || this.billingAddress === '0');
                        },
                        reqBilling() {
                            return (this.billingAddress === 'req' || this.billingAddress === 'required' || this.billingAddress === '2' || this.billingAddress === 2);
                        },
                        reqBillingZip() {
                            return (this.reqBilling || this.captureZip);
                        },
                        showShipping() {
                            return !(!this.shippingAddress || this.shippingAddress === 'false' || this.shippingAddress === '0');
                        },
                        reqShipping() {
                            return (this.shippingAddress === 'req' || this.shippingAddress === 'required' || this.shippingAddress === '2' || this.shippingAddress === 2);
                        },
                        payNowBtnTitle() {
                            const amt = typeof this.totalAmount === 'string' ? Number.parseFloat(this.totalAmount) : this.totalAmount;
                            if (!amt) return this.payBtnTitle;
                            return this.payBtnTitle.replace('%$', '$' + amt.toFixed(2));
                        }
                    },
                    mounted() {
                        if (!this.apiKey) {
                            this.mountErrors = ['Missing your api-key.'];
                        }
                        if (!this.postUrl) {
                            if (!this.mountErrors) this.mountErrors = [];
                            this.mountErrors.push('Missing the post-url to post the transaction to your server.');
                        }
                        if (!this.totalAmount || (typeof this.totalAmount === 'string' && Number.parseFloat(this.totalAmount) < 0) || (typeof this.totalAmount === 'number' && this.totalAmount < 0)) {
                            this.mountErrors = ['Missing your payment amount.'];
                        }
                        if (!this.acceptCards && !this.acceptChecks) {
                            if (!this.mountErrors) this.mountErrors = [];
                            this.mountErrors.push('Must allow at least one payment type: card or check');
                        } else {
                            this.transType = this.acceptCards ? 'card' : 'check';
                        }
                        this.pages = [this.payPageTitle || 'Payment'];
                        if (this.showBilling) {
                            this.pages.push(this.billPageTitle || 'Billing Address');
                            this.pageKeys.push('bill');
                        }
                        if (this.showShipping) {
                            this.pages.push(this.shipPageTitle || 'Shipping Address');
                            this.pageKeys.push('ship');
                        }
                        if (this.addPage) {
                            this.pages.push(this.addPage);
                            this.pageKeys.push('custom');
                        }
                        if (this.test === 'error') this.restError = 'Network Error: Sample gateway error.';
                        if (this.test === 'success') this.showResult = true;
                        this.$root.setQpError = this.setError;
                    },
                    methods: {
                        nextPage() {
                            this.transClass = 'quickpay-next-animation';
                            this.page++;
                            this.verifyForm();
                        },
                        prevPage() {
                            this.transClass = 'quickpay-prev-animation';
                            this.page--;
                            this.verifyForm();
                        },
                        formatExpiry(val) {
                            if (val.length === 1 && parseInt(val) > 1) {
                                val = '0' + val;
                            }
                            return val;
                        },
                        setCardTypeFromNumber(string) {
                            const number = this.numbersOnlyString(string),
                                type = this.cardTypeFromNumber(number);
                            if (type === this.ccType) return string;
                            this.ccType = type;
                            switch (type) {
                                case 'Visa Electron':
                                case 'Visa':
                                    this.ccTypeIcon = this.visaIcon;
                                    this.setCardMask(pmn.CREDIT_CARD_NUMBER_VISA_MASK);
                                    this.setCvvMask(pmn.CVV_MASK_3);
                                    break;
                                case 'Mastercard':
                                    this.ccTypeIcon = this.mcIcon;
                                    this.setCardMask(pmn.CREDIT_CARD_NUMBER_MASTERCARD_MASK);
                                    this.setCvvMask(pmn.CVV_MASK_3);
                                    break;
                                case 'AMEX':
                                    this.ccTypeIcon = this.amexIcon;
                                    this.setCardMask(pmn.CREDIT_CARD_NUMBER_AMEX_MASK);
                                    this.setCvvMask(pmn.CVV_MASK_4);
                                    break;
                                case 'Discover':
                                    this.ccTypeIcon = this.discoverIcon;
                                    this.setCardMask(pmn.CREDIT_CARD_NUMBER_DISCOVER_MASK);
                                    this.setCvvMask(pmn.CVV_MASK_3);
                                    break;
                                case 'Diners - Carte Blanche':
                                case 'Diners':
                                    this.ccTypeIcon = this.dinersIcon;
                                    this.setCardMask(pmn.CREDIT_CARD_NUMBER_DINERS_MASK);
                                    this.setCvvMask(pmn.CVV_MASK_3);
                                    break;
                                case 'JCB':
                                    this.ccTypeIcon = this.jcbIcon;
                                    this.setCardMask(pmn.CREDIT_CARD_NUMBER_JCB_MASK);
                                    this.setCvvMask(pmn.CVV_MASK_3);
                                    break;
                                default:
                                    this.ccTypeIcon = this.unknownCardIcon;
                                    this.setCardMask(pmn.CREDIT_CARD_NUMBER_DEFAULT_MASK);
                                    this.setCvvMask(pmn.CVV_MASK_3);
                                    break;
                            }
                            return string;
                        },
                        setCardMask(cardMask) {
                            this.ccNumberMask = cardMask;
                            //this.ccMax = cardMask.length;
                            //this.verifyCardNumber();
                        },
                        setCvvMask(cvvMask) {
                            //this.cvvMax = cvvMask.length;
                            this.cvvMask = cvvMask;
                            //this.verifyCvv();
                        },
                        verifyCardNumber(e, ccNum) {
                            if (!this.verifyMod10(ccNum)) {
                                return 'Invalid Card Number';
                            }
                            return null;
                        },
                        verifyExpiry(e, dateStr) {
                            var expiryMonth, expiryYear, currentYear, currentMonth;
                            if (this.expiryDropdowns) {
                                /*expiryMonth = parseInt(this.expiryMonthInput.value);
                                expiryYear = parseInt(this.expiryYearInput.value);
                                currentYear = parseInt(((new Date().getFullYear()).toString()).substring(2, 4));
                                currentMonth = new Date().getMonth() + 1;   // convert from 0 based months to 1 based
                                if (!expiryMonth || (expiryYear === currentYear && expiryMonth < currentMonth)) {
                                    this.expiryMonthInput.className = 'expiry form-control is-invalid';
                                } else {
                                    this.expiryMonthInput.className = 'expiry form-control is-valid';
                                }
                                if (!expiryYear || expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
                                    this.expiryYearInput.className = 'expiry form-control is-invalid';
                                } else {
                                    this.expiryYearInput.className = 'expiry form-control is-valid';
                                }*/
                            } else {
                                if (dateStr && dateStr.length === pmn.EXPIRY_MASK.length) {
                                    expiryMonth = parseInt(dateStr.slice(0, 2));
                                    expiryYear = parseInt(dateStr.slice(-2));
                                    currentYear = parseInt(((new Date().getFullYear()).toString()).substring(2, 4));
                                    currentMonth = new Date().getMonth() + 1; // convert from 0 based months to 1 based
                                }
                                if (!expiryMonth || !expiryYear || expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
                                    return 'Card is expired.';
                                }
                            }
                            if (expiryMonth < 1 || expiryMonth > 12) return 'Invalid Date.';
                            this.ccExpiryMonth = dateStr.slice(0, 2);
                            this.ccExpiryYear = dateStr.slice(-2);
                            return null;
                        },
                        setError(name, error, page, transType) {
                            if (page !== 'pay' && page !== 'bill' && page !== 'ship' && page !== 'custom') {
                                console.log('Bad page name: ' + page + '. This can break the page form validation.')
                            }
                            if (!this.errors[name]) {
                                this.errors[name] = {
                                    page: page,
                                    error: null
                                };
                                if (transType) this.errors[name].forTrans = transType;
                            }
                            //if (this.errors[name].error !== error) console.log('(Remove in Production!) ' + name + ': ' + error);  // for testing only!
                            this.errors[name].error = error;
                            this.verifyForm();
                        },
                        verifyZip(e, zip) {
                            if (zip && !zip.match(/^(\d{5}(-\d{4})?|[A-CEGHJ-NPRSTVXY]\d[A-CEGHJ-NPRSTV-Z] ?\d[A-CEGHJ-NPRSTV-Z]\d)$/)) return 'Invalid Postal Code';
                            return null;
                        },
                        verifyRouting(e, routing) {
                            if (routing) {
                                let n = 0;
                                for (let i = 0; i < 9; i += 3) {
                                    n += parseInt(routing.charAt(i)) * 3 + parseInt(routing.charAt(i + 1)) * 7 + parseInt(routing.charAt(i + 2));
                                }
                                if (n === 0 || n % 10 !== 0) return "Invalid routing number";
                            }
                            this.checkRouting = routing;
                            return null;
                        },
                        verifyForm() {
                            let valid = true,
                                pageValid = true;
                            for (const prop in this.errors) {
                                if (!this.errors.hasOwnProperty(prop)) continue;
                                if (this.errors[prop].error && (!this.errors[prop].forTrans || this.errors[prop].forTrans === this.transType)) {
                                    valid = false;
                                    if (this.errors[prop].page === this.pageKeys[this.page - 1]) pageValid = false;
                                }
                                if (!valid) break;
                            }
                            //console.log('(Remove in Production) Verify Form: ' + valid + ' ' + this.transType + '. ' + JSON.stringify(this.errors));
                            this.valid = valid;
                            this.pageValid = pageValid;
                        },
                        keyIsNumber(keyCode) {
                            if (keyCode >= pmn.KEYS['0'] && keyCode <= pmn.KEYS['9']) return true;
                            return keyCode >= pmn.KEYS.NUMPAD_0 && keyCode <= pmn.KEYS.NUMPAD_9;
                        },
                        keyIsArrow(keyCode) {
                            return keyCode >= pmn.KEYS.ARROW_LEFT && keyCode <= pmn.KEYS.ARROW_DOWN;
                        },
                        keyIsNavigation(keyCode) {
                            return keyCode === pmn.KEYS.HOME || keyCode === pmn.KEYS.END;
                        },
                        keyIsKeyboardShortcut(e, keyCode) {
                            const commandKey = e.ctrlKey || e.metaKey;
                            return commandKey && (keyCode === pmn.KEYS.A || keyCode === pmn.KEYS.X || keyCode === pmn.KEYS.C || keyCode === pmn.KEYS.V);
                        },
                        caretStartPosition(element) {
                            if (typeof element.selectionStart === "number") {
                                return element.selectionStart;
                            }
                            return false;
                        },
                        caretEndPosition(element) {
                            if (typeof element.selectionEnd === "number") {
                                return element.selectionEnd;
                            }
                            return false;
                        },
                        normalizeCaretPosition(mask, caretPosition) {
                            let numberPos = 0;
                            if (caretPosition < 0 || caretPosition > mask.length) return 0;
                            for (let i = 0; i < mask.length; i++) {
                                if (i === caretPosition) return numberPos;
                                if (mask[i] === "X") numberPos++;
                            }
                            return numberPos;
                        },
                        denormalizeCaretPosition(mask, caretPosition) {
                            let numberPos = 0;
                            if (caretPosition < 0 || caretPosition > mask.length) return 0;
                            for (let i = 0; i < mask.length; i++) {
                                if (numberPos === caretPosition) return i;
                                if (mask[i] === "X") numberPos++;
                            }
                            return mask.length;
                        },
                        numbersOnlyString(string) {
                            if (!string) return '';
                            let numbersOnlyString = '';
                            for (let i = 0; i < string.length; i++) {
                                let currentChar = string.charAt(i);
                                if (!isNaN(parseInt(currentChar))) numbersOnlyString += currentChar;
                            }
                            return numbersOnlyString;
                        },
                        digitFromKeyCode(keyCode) {
                            if (keyCode >= pmn.KEYS["0"] && keyCode <= pmn.KEYS["9"]) {
                                return keyCode - pmn.KEYS["0"];
                            }
                            if (keyCode >= pmn.KEYS.NUMPAD_0 && keyCode <= pmn.KEYS.NUMPAD_9) {
                                return keyCode - pmn.KEYS.NUMPAD_0;
                            }
                            return null;
                        },
                        applyFormatMask(string, mask) {
                            let formattedString = "",
                                numberPos = 0;
                            for (let i = 0; i < mask.length; i++) {
                                let currentMaskChar = mask[i];
                                if (currentMaskChar === "X") {
                                    let digit = string.charAt(numberPos);
                                    if (!digit) break;
                                    formattedString += string.charAt(numberPos);
                                    numberPos++;
                                } else {
                                    formattedString += currentMaskChar;
                                }
                            }
                            return formattedString;
                        },
                        setCaretPosition(element, caretPos) {
                            if (element) {
                                if (element.createTextRange) {
                                    let range = element.createTextRange();
                                    range.move('character', caretPos);
                                    range.select();
                                } else {
                                    if (element.selectionStart) {
                                        element.focus();
                                        element.setSelectionRange(caretPos, caretPos);
                                    } else {
                                        element.focus();
                                    }
                                }
                            }
                        },
                        verifyMod10(string) { // Luhn Checksum
                            let digits = this.numbersOnlyString(string),
                                map = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
                                sum = 0;
                            // Proceed right to left. Even and odd digit positions are handled differently.
                            let n = digits.length,
                                odd = true;
                            while (n--) {
                                let d = parseInt(digits.charAt(n), 10);
                                if (odd) {
                                    // Odd digits used as is
                                    sum += d;
                                } else {
                                    // Even digits mapped
                                    sum += map[d];
                                }
                                odd = !odd;
                            }
                            return sum % 10 === 0 && sum > 0;
                        },
                        cardTypeFromNumber(number) {
                            // Diners starts with 300 - 305 or 36 and 14 digits long OR 54 and 16 digits: 30[0-5][0-9]{11}|36[0-9]{12}|54[0-9]{14}
                            let rx = new RegExp('^30[0-5]');
                            if (number.match(rx)) return 'Diners - Carte Blanche';

                            rx = new RegExp('^(30[6-9]|36|38)');
                            if (number.match(rx)) return 'Diners';

                            // JCB starts with 3528 - 3589 and is 16 - 19 digits long: 35(?:2[89]|[3-8][0-9])[0-9]{12,15}
                            rx = new RegExp('^35(2[89]|[3-8][0-9])');
                            if (number.match(rx)) return 'JCB';

                            // American Express starts with 34 or 37, and is 15 digits long. 3[4|7][0-9]{13}
                            rx = new RegExp('^3[47]');
                            if (number.match(rx)) return 'AMEX';

                            rx = new RegExp('^(4026|417500|4508|4844|491(3|7))');
                            if (number.match(rx)) return 'Visa Electron';

                            // Visa begins with 4 and may vary from 13 to 19 total digits. 16 digits is most common. 4[0-9]{12,18}
                            rx = new RegExp("^4");
                            if (number.match(rx)) return 'Visa';

                            // MasterCard starts with 51-55, and is 16 digits long. 5[1-5][0-9]{14}
                            rx = new RegExp('^5[1-5]');
                            if (number.match(rx)) return 'Mastercard';

                            // discover starts with 6, and is 16 digits long.   6[0-9]{15}
                            //rx = new RegExp('^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5])|64[4-9]|65)');
                            rx = new RegExp('^6');
                            if (number.match(rx)) return 'Discover';

                            return '';
                        },
                        fetchToken(e) {
                            let body = {
                                quickPaymentsKey: this.apiKey
                                    //transactionType: "Sale"
                                    //forceDuplicate: true
                            };
                            if (this.transType === 'card') {
                                body.cardData = {
                                    cardNumber: this.$refs.ccNumber.getValue(true),
                                    expirationDate: this.ccExpiryMonth + this.ccExpiryYear,
                                    cvv: this.$refs.cvv.getValue(true)
                                };
                                if (this.captureName) body.cardData.nameOnCard = this.$refs.cardName.getValue();
                                if (this.captureZip && !this.billingAddress) body.cardData.postalCode = this.$refs.ccBillZip.getValue();
                                else if (this.billingAddress) {
                                    body.cardData.streetAddress = this.$refs.billAddress.getValue();
                                    body.cardData.postalCode = this.$refs.billZip.getValue();
                                }
                            } else {
                                body.checkData = {
                                    routingNumber: this.checkRouting,
                                    accountNumber: this.$refs.checkAccount.getValue(true),
                                    nameOnCheck: this.$refs.checkName.getValue(),
                                    accountType: 'Checking',
                                    checkType: 'Personal'
                                };
                            }
                            this.fetching = true;
                            if (this.test === 'log') {
                                console.log('(FOR TESTING ONLY) Posting the following to: ' + pmn.QPTOKEN_API_URL);
                                console.log(JSON.stringify(body));
                            }
                            if (this.test === 'demo') {
                                console.log('(DEMO MODE) Would be posting the following to: ' + pmn.QPTOKEN_API_URL);
                                console.log(JSON.stringify(body));
                                setTimeout(() => {
                                    this.handleTokenResult({ token: 'tok_sahue8gl8#khshasuga8Fa0-9_0eauer' });
                                }, 1500);
                                return;
                            }
                            let serverError = false;
                            fetch(pmn.QPTOKEN_API_URL, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json; charset=utf-8'
                                },
                                body: JSON.stringify(body)
                            }).then(res => {
                                /* if !res.ok we could just throw an error: e.g.:
                                        if(res.ok) return res.json();
                                        throw new Error('Network response was not ok.');
                                */
                                // but if we want to show the server error message (which is in the body) we don't have access to that
                                // until the next 'then', but we only have access to res.ok in this 'then' so let's set a flag - cheesy.
                                // this does allows us to treat networking errors and server errors differently however.
                                if (!res.ok) serverError = true;
                                return res.json();
                            }).then(body => {
                                if (serverError) {
                                    this.restError = body.Message || 'Unknown error. Sorry for the inconvenience.';
                                    this.fetching = false;
                                } else {
                                    if (this.test === 'log') console.log('Success:', JSON.stringify(body));
                                    this.handleTokenResult(body && body.QuickPaymentsToken);
                                }
                            }).catch(error => {
                                if (this.test === 'log') console.error('Error:', error);
                                this.restError = error || 'Network error. Sorry for the inconvenience.';
                                this.fetching = false;
                            });
                        },
                        handleTokenResult(token) {
                            if (this.test === 'log') {
                                console.log('(FOR TESTING ONLY) Response back from: ' + pmn.QPTOKEN_API_URL);
                                console.log(JSON.stringify(token));
                                console.log('(FOR TESTING ONLY) Send token to: ' + this.postUrl);
                            }
                            const form = document.getElementById('quickpayform');
                            //console.log(form ? 'Found form: ' + form.className : 'Missing Form!');
                            const data = new FormData(form);
                            //console.log('has cardnumber key: ' + data.has('cardnumber') ? 'yes' : 'no');
                            let body = {};
                            for (var pair of data.entries()) {
                                body[pair[0]] = pair[1];
                            }
                            body.token = token;
                            body.quickPaymentsKey = this.apiKey;
                            body.transType = this.transType;
                            body.totalAmount = this.totalAmount;
                            body.gatewayCustomFields = this.gatewayCustomFields;
                            delete body.cardnumber;
                            delete body.expiry;
                            delete body.cvv;
                            delete body.routing;
                            delete body.account;
                            if (this.test === 'log') {
                                console.log('(FOR TESTING ONLY) ' + JSON.stringify(body));
                            } else if (this.test === 'demo') {
                                console.log('(DEMO MODE) Would POST the following: ' + JSON.stringify(body));
                                setTimeout(() => {
                                    this.showResult = true;
                                }, 3500);
                                return;
                            }
                            let serverError = false;
                            fetch(this.postUrl, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json; charset=utf-8'
                                        //"Content-Type": "application/x-www-form-urlencoded"
                                },
                                body: JSON.stringify(body)
                            }).then(res => {
                                /* if !res.ok we could just throw an error: e.g.:
                                        if(res.ok) return res.json();
                                        throw new Error('Network response was not ok.');
                                */
                                // but if we want to show the server error message (which is in the body) we don't have access to that
                                // until the next 'then', but we only have access to res.ok in this 'then' so let's set a flag - cheesy.
                                // this does allows us to treat networking errors and server errors differently however.
                                if (!res.ok) serverError = true;
                                return res.json();
                            }).then((body) => {
                                if (serverError) {
                                    this.restError = body.Message || 'Unknown error. Sorry for the inconvenience.';
                                } else {
                                    if (this.test === 'log') {
                                        console.log('(FOR TESTING ONLY) Response back from: ' + this.postUrl);
                                        console.log(JSON.stringify(body));
                                    }
                                    this.showResult = true;
                                }
                                this.fetching = false;
                            }).catch((error) => {
                                if (this.test === 'log') console.error('Error:', error);
                                this.restError = error || 'Network error. Sorry for the inconvenience.';
                                this.fetching = false;
                            });
                        }
                    }
                });

                // CONCATENATED MODULE: ./src/components/Payment.vue?vue&type=script&lang=js&
                /* harmony default export */
                var components_Paymentvue_type_script_lang_js_ = (Paymentvue_type_script_lang_js_);
                // EXTERNAL MODULE: ./src/components/Payment.vue?vue&type=style&index=0&id=95b5103a&scoped=true&lang=css&
                var Paymentvue_type_style_index_0_id_95b5103a_scoped_true_lang_css_ = __webpack_require__("b25d");

                // CONCATENATED MODULE: ./src/components/Payment.vue






                /* normalize component */

                var Payment_component = normalizeComponent(
                    components_Paymentvue_type_script_lang_js_,
                    Paymentvue_type_template_id_95b5103a_scoped_true_render,
                    Paymentvue_type_template_id_95b5103a_scoped_true_staticRenderFns,
                    false,
                    null,
                    "95b5103a",
                    null

                )

                Payment_component.options.__file = "Payment.vue"
                    /* harmony default export */
                var Payment = (Payment_component.exports);
                // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PaymentModal.vue?vue&type=script&lang=js&
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //



                /* harmony default export */
                var PaymentModalvue_type_script_lang_js_ = ({
                    name: "PaymentModal",
                    payment: Payment,
                    quickPaymentsInput: Payment.quickPaymentsInput,
                    components: {
                        Payment: Payment
                    },
                    props: {
                        btnClass: {
                            type: String,
                            default: "btn btn-primary"
                        },
                        btnTitle: {
                            type: String,
                            default: "Buy Now"
                        },
                        title: {
                            type: String,
                            default: 'Checkout'
                        },
                        titleClass: {
                            type: String,
                            default: 'modal-title'
                        },
                        size: {
                            type: String,
                            default: 'lg'
                        },
                        centered: {
                            type: Boolean,
                            default: false
                        },
                        noFade: {
                            type: Boolean,
                            default: false
                        },
                        noCloseOnBackdrop: {
                            type: Boolean,
                            default: false
                        },
                        noCloseOnEsc: {
                            type: Boolean,
                            default: false
                        },
                        noEnforceFocus: {
                            type: Boolean,
                            default: false
                        },
                        headerBgVariant: {
                            type: String,
                            default: null
                        },
                        headerBorderVariant: {
                            type: String,
                            default: null
                        },
                        headerTextVariant: {
                            type: String,
                            default: null
                        },
                        headerClass: {
                            type: [String, Array],
                            default: null
                        },
                        bodyBgVariant: {
                            type: String,
                            default: null
                        },
                        bodyTextVariant: {
                            type: String,
                            default: null
                        },
                        modalClass: {
                            type: [String, Array],
                            default: ''
                        },
                        contentClass: {
                            type: [String, Array],
                            default: null
                        },
                        bodyClass: {
                            type: [String, Array],
                            default: null
                        },
                        footerBgVariant: {
                            type: String,
                            default: null
                        },
                        footerBorderVariant: {
                            type: String,
                            default: null
                        },
                        footerTextVariant: {
                            type: String,
                            default: null
                        },
                        footerClass: {
                            type: [String, Array],
                            default: null
                        },
                        hideHeader: {
                            type: Boolean,
                            default: false
                        },
                        hideFooter: {
                            type: Boolean,
                            default: false
                        },
                        hideHeaderClose: {
                            type: Boolean,
                            default: false
                        },
                        visible: {
                            type: Boolean,
                            default: false
                        },
                        returnFocus: {
                            default: null
                        },
                        headerCloseLabel: {
                            type: String,
                            default: 'Close'
                        },
                        lazy: {
                            type: Boolean,
                            default: false
                        },
                        // props for the base Payment component
                        apiKey: {
                            type: String,
                            required: true
                        },
                        iconColor: {
                            type: String,
                            default: 'inherit'
                        },
                        acceptCards: {
                            type: Boolean,
                            default: true
                        },
                        acceptChecks: {
                            type: Boolean,
                            default: false
                        },
                        captureName: {
                            type: Boolean,
                            default: true
                        },
                        expiryDropdowns: {
                            type: Boolean,
                            default: false
                        },
                        totalAmount: [String, Number],
                        ccIcon: {
                            type: String,
                            default: 'far fa-credit-card'
                        },
                        nameIcon: {
                            type: String,
                            default: 'fas fa-user'
                        },
                        cvvIcon: {
                            type: String,
                            default: 'fas fa-lock'
                        },
                        cardPlaceholder: {
                            type: String,
                            default: 'Card number'
                        },
                        namePlaceholder: {
                            type: String,
                            default: 'Name on card'
                        },
                        expiryIcon: {
                            type: String,
                            default: 'far fa-calendar-alt'
                        },
                        expiryPlaceholder: {
                            type: String,
                            default: 'MM / YY'
                        },
                        cvvPlaceholder: {
                            type: String,
                            default: 'CVV'
                        },
                        ccZipIcon: {
                            type: String,
                            default: 'far fa-address-card'
                        },
                        ccZipPlaceholder: {
                            type: String,
                            default: 'Postal code'
                        },
                        addressPlaceholder: {
                            type: String,
                            default: 'Street address'
                        },
                        address2Placeholder: {
                            type: String,
                            default: 'Street address'
                        },
                        cityPlaceholder: {
                            type: String,
                            default: 'City'
                        },
                        zipIcon: String,
                        zipPlaceholder: {
                            type: String,
                            default: 'Postal code'
                        },
                        cardBtnTitle: {
                            type: String,
                            default: 'Card'
                        },
                        checkBtnTitle: {
                            type: String,
                            default: 'Check'
                        },
                        payBtnTitle: {
                            type: String,
                            default: 'Pay Now'
                        },
                        nextBtnTitle: {
                            type: String,
                            default: 'Next'
                        },
                        prevBtnTitle: {
                            type: String,
                            default: 'Prev'
                        },
                        routingIcon: {
                            type: String,
                            default: 'fas fa-money-check'
                        },
                        routingPlaceholder: {
                            type: String,
                            default: 'Bank routing number'
                        },
                        accountIcon: {
                            type: String,
                            default: 'fas fa-hashtag'
                        },
                        accountPlaceholder: {
                            type: String,
                            default: 'Account number'
                        },
                        checkNamePlaceholder: {
                            type: String,
                            default: 'Name on check'
                        },
                        visaIcon: {
                            type: String,
                            default: 'fab fa-cc-visa fa-lg'
                        },
                        mcIcon: {
                            type: String,
                            default: 'fab fa-cc-mastercard fa-lg'
                        },
                        amexIcon: {
                            type: String,
                            default: 'fab fa-cc-amex fa-lg'
                        },
                        discoverIcon: {
                            type: String,
                            default: 'fab fa-cc-discover fa-lg'
                        },
                        dinersIcon: {
                            type: String,
                            default: 'fab fa-cc-diners-club fa-lg'
                        },
                        jcbIcon: {
                            type: String,
                            default: 'fab fa-cc-jcb fa-lg'
                        },
                        unknownCardIcon: {
                            type: String,
                            default: 'fas fa-credit-card fa-lg'
                        },
                        gatewayCustomFields: String,
                        test: String,
                        postUrl: {
                            type: String,
                            required: true
                        },
                        captureZip: {
                            type: Boolean,
                            default: false
                        },
                        billingAddress: [Boolean, String],
                        shippingAddress: [Boolean, String],
                        addPage: String,
                        payPageTitle: String,
                        billPageTitle: String,
                        shipPageTitle: String
                    },
                    computed: {
                        contentClasses() {
                            return [
                                'modal-content',
                                this.contentClass
                            ]
                        },
                        modalClasses() {
                            return [
                                'modal',
                                {
                                    fade: !this.noFade,
                                    show: this.is_show,
                                    'd-block': this.is_block
                                },
                                this.modalClass
                            ]
                        },
                        dialogClasses() {
                            return [
                                'modal-dialog',
                                {
                                    [`modal-${this.size}`]: Boolean(this.size),
                                    'modal-dialog-centered': this.centered
                                }
                            ]
                        },
                        backdropClasses() {
                            return [
                                'modal-backdrop',
                                {
                                    fade: !this.noFade,
                                    show: this.is_show || this.noFade
                                }
                            ]
                        },
                        headerClasses() {
                            return [
                                'modal-header',
                                {
                                    [`bg-${this.headerBgVariant}`]: Boolean(this.headerBgVariant),
                                    [`text-${this.headerTextVariant}`]: Boolean(this.headerTextVariant),
                                    [`border-${this.headerBorderVariant}`]: Boolean(
                                        this.headerBorderVariant
                                    )
                                },
                                this.headerClass
                            ]
                        },
                        bodyClasses() {
                            return [
                                'modal-body',
                                {
                                    [`bg-${this.bodyBgVariant}`]: Boolean(this.bodyBgVariant),
                                    [`text-${this.bodyTextVariant}`]: Boolean(this.bodyTextVariant)
                                },
                                this.bodyClass
                            ]
                        },
                        footerClasses() {
                            return [
                                'modal-footer',
                                {
                                    [`bg-${this.footerBgVariant}`]: Boolean(this.footerBgVariant),
                                    [`text-${this.footerTextVariant}`]: Boolean(this.footerTextVariant),
                                    [`border-${this.footerBorderVariant}`]: Boolean(
                                        this.footerBorderVariant
                                    )
                                },
                                this.footerClass
                            ]
                        }
                    },
                    data() {
                        return {
                            is_hidden: this.lazy || false,
                            is_visible: false,
                            is_transitioning: false,
                            is_show: false,
                            is_block: false,
                            scrollbarWidth: 0,
                            isBodyOverflowing: false,
                            return_focus: this.returnFocus || null
                        };
                    },
                    methods: {
                        show() {
                            if (this.is_visible) {
                                return
                            }
                            const showEvt = new BvEvent('show', {
                                cancelable: true,
                                vueTarget: this,
                                target: this.$refs.modal,
                                relatedTarget: null
                            })
                            this.emitEvent(showEvt)
                            if (showEvt.defaultPrevented || this.is_visible) {
                                // Don't show if canceled
                                return
                            }
                            if (this.hasClass(document.body, 'modal-open')) {
                                // If another modal is already open, wait for it to close
                                this.$root.$once('bv::modal::hidden', this.doShow)
                            } else {
                                // Show the modal
                                this.doShow()
                            }
                        },
                        hide(trigger) {
                            if (!this.is_visible) {
                                return
                            }
                            const hideEvt = new BvEvent('hide', {
                                cancelable: true,
                                vueTarget: this,
                                target: this.$refs.modal,
                                // this could be the trigger element/component reference
                                relatedTarget: null,
                                isOK: trigger || null,
                                trigger: trigger || null,
                                cancel() {
                                    // Backwards compatibility
                                    warn(
                                        'b-modal: evt.cancel() is deprecated. Please use evt.preventDefault().'
                                    )
                                    this.preventDefault()
                                }
                            })
                            if (trigger === 'ok') {
                                this.$emit('ok', hideEvt)
                            } else if (trigger === 'cancel') {
                                this.$emit('cancel', hideEvt)
                            }
                            this.emitEvent(hideEvt)
                                // Hide if not canceled
                            if (hideEvt.defaultPrevented || !this.is_visible) {
                                return
                            }
                            // stop observing for content changes
                            if (this._observer) {
                                this._observer.disconnect()
                                this._observer = null
                            }
                            this.is_visible = false
                            this.$emit('change', false)
                        },
                        // Private method to finish showing modal
                        doShow() {
                            // Place modal in DOM if lazy
                            this.is_hidden = false
                            this.$nextTick(() => {
                                // We do this in nextTick to ensure the modal is in DOM first before we show it
                                this.is_visible = true
                                this.$emit('change', true)
                                    // Observe changes in modal content and adjust if necessary
                                    /*this._observer = this.observeDom(
                                        this.$refs.content,
                                        this.adjustDialog.bind(this),
                                        {
                                            subtree: true,
                                            childList: true,
                                            characterData: true,
                                            attributes: true,
                                            attributeFilter: ['style', 'class']
                                        }
                                    )*/
                            })
                        },
                        observeDOM(el, callback, opts) {
                            const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
                            const eventListenerSupported = window.addEventListener

                            // Handle case where we might be passed a vue instance
                            el = el ? (el.$el || el) : null
                                /* istanbul ignore next: dificult to test in JSDOM */
                            if (!isElement(el)) {
                                // We can't observe somthing that isn't an element
                                return null
                            }

                            let obs = null

                            /* istanbul ignore next: difficult to test in JSDOM */
                            if (MutationObserver) {
                                // Define a new observer
                                obs = new MutationObserver(mutations => {
                                    let changed = false
                                        // A Mutation can contain several change records, so we loop through them to see what has changed.
                                        // We break out of the loop early if any "significant" change has been detected
                                    for (let i = 0; i < mutations.length && !changed; i++) {
                                        // The muttion record
                                        const mutation = mutations[i]
                                            // Mutation Type
                                        const type = mutation.type
                                            // DOM Node (could be any DOM Node type - HTMLElement, Text, comment, etc)
                                        const target = mutation.target
                                        if (type === 'characterData' && target.nodeType === Node.TEXT_NODE) {
                                            // We ignore nodes that are not TEXt (i.e. comments, etc) as they don't change layout
                                            changed = true
                                        } else if (type === 'attributes') {
                                            changed = true
                                        } else if (type === 'childList' && (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0)) {
                                            // This includes HTMLElement and Text Nodes being added/removed/re-arranged
                                            changed = true
                                        }
                                    }
                                    if (changed) {
                                        // We only call the callback if a change that could affect layout/size truely happened.
                                        callback()
                                    }
                                })

                                // Have the observer observe foo for changes in children, etc
                                obs.observe(el, assign({ childList: true, subtree: true }, opts))
                            } else if (eventListenerSupported) {
                                // Legacy interface. most likely not used in modern browsers
                                el.addEventListener('DOMNodeInserted', callback, false)
                                el.addEventListener('DOMNodeRemoved', callback, false)
                            }

                            // We return a reference to the observer so that obs.disconnect() can be called if necessary
                            // To reduce overhead when the root element is hiiden
                            return obs
                        },
                        // Transition Handlers
                        onBeforeEnter() {
                            this.is_transitioning = true
                            this.checkScrollbar()
                            this.setScrollbar()
                            this.adjustDialog()
                            this.addClass(document.body, 'modal-open')
                            this.setResizeEvent(true)
                        },
                        onEnter() {
                            this.is_block = true
                                //this.$refs.modal.scrollTop = 0
                        },
                        onAfterEnter() {
                            this.is_show = true
                            this.is_transitioning = false
                            this.$nextTick(() => {
                                this.focusFirst()
                                const shownEvt = new BvEvent('shown', {
                                    cancelable: false,
                                    vueTarget: this,
                                    target: this.$refs.modal,
                                    relatedTarget: null
                                })
                                this.emitEvent(shownEvt)
                            })
                        },
                        onBeforeLeave() {
                            this.is_transitioning = true;
                            this.setResizeEvent(false)
                        },
                        onLeave() {
                            // Remove the 'show' class
                            this.is_show = false
                        },
                        onAfterLeave() {
                            this.is_block = false;
                            this.resetAdjustments();
                            this.resetScrollbar();
                            this.is_transitioning = false;
                            this.removeClass(document.body, 'modal-open');
                            this.$nextTick(() => {
                                this.is_hidden = this.lazy || false;
                                this.returnFocusTo();
                                const hiddenEvt = new BvEvent('hidden', {
                                    cancelable: false,
                                    vueTarget: this,
                                    target: this.lazy ? null : this.$refs.modal,
                                    relatedTarget: null
                                });
                                this.emitEvent(hiddenEvt);
                            });
                        },
                        isElement(el) {
                            return el && el.nodeType === Node.ELEMENT_NODE;
                        },
                        hasClass(el, className) {
                            if (className && this.isElement(el)) {
                                return el.classList.contains(className)
                            }
                            return false
                        },
                        addClass(el, className) {
                            if (className && this.isElement(el)) {
                                el.classList.add(className)
                            }
                        },
                        removeClass(el, className) {
                            if (className && this.isElement(el)) {
                                el.classList.remove(className)
                            }
                        },
                        // Event emitter
                        emitEvent(bvEvt) {
                            const type = bvEvt.type;
                            this.$emit(type, bvEvt);
                            this.$root.$emit(`bv::modal::${type}`, bvEvt)
                        },
                        // UI Event Handlers
                        onClickOut(evt) {
                            const isBackdrop = evt && evt.target && evt.target.role === 'dialog';
                            const isCloseButton = evt && evt.target && evt.target.tagName === 'BUTTON' && evt.target.className === 'close';
                            // If backdrop clicked, hide modal
                            if (this.is_visible && !this.noCloseOnBackdrop && (isBackdrop || isCloseButton)) {
                                this.hide('backdrop')
                            }
                        },
                        onEsc(evt) {
                            // If ESC pressed, hide modal
                            if (
                                evt.keyCode === 27 && // ESC
                                this.is_visible &&
                                !this.noCloseOnEsc
                            ) {
                                this.hide('esc')
                            }
                        },
                        onFocusout(evt) {
                            // If focus leaves modal, bring it back
                            // 'focusout' Event Listener bound on content
                            const content = this.$refs.content
                            if (!this.noEnforceFocus &&
                                this.is_visible &&
                                content &&
                                !content.contains(evt.relatedTarget)
                            ) {
                                content.focus({ preventScroll: true })
                            }
                        },
                        // Resize Listener
                        setResizeEvent(on) {;
                            ['resize', 'orientationchange'].forEach(evtName => {
                                if (on) {
                                    //eventOn(window, evtName, this.adjustDialog)
                                } else {
                                    //eventOff(window, evtName, this.adjustDialog)
                                }
                            })
                        },
                        // Root Listener handlers
                        showHandler(id, triggerEl) {
                            if (id === this.id) {
                                this.return_focus = triggerEl || null
                                this.show()
                            }
                        },
                        hideHandler(id) {
                            if (id === this.id) {
                                this.hide()
                            }
                        },
                        modalListener(bvEvt) {
                            // If another modal opens, close this one
                            if (bvEvt.vueTarget !== this) {
                                this.hide()
                            }
                        },
                        // Focus control handlers
                        focusFirst() {
                            // Don't try and focus if we are SSR
                            if (typeof document === 'undefined') {
                                return
                            }
                            const content = this.$refs.content
                            const modal = this.$refs.modal
                            const activeElement = document.activeElement
                            if (activeElement && content && content.contains(activeElement)) {
                                // If activeElement is child of content, no need to change focus
                            } else if (content) {
                                if (modal) {
                                    modal.scrollTop = 0
                                }
                                // Focus the modal content wrapper
                                content.focus()
                            }
                        },
                        returnFocusTo() {
                            // Prefer returnFocus prop over event specified return_focus value
                            let el = this.returnFocus || this.return_focus || null
                            if (typeof el === 'string') {
                                // CSS Selector
                                el = select(el)
                            }
                            if (el) {
                                el = el.$el || el
                                if (isVisible(el)) {
                                    el.focus()
                                }
                            }
                        },
                        // Utility methods
                        getScrollbarWidth() {
                            const scrollDiv = document.createElement('div')
                            scrollDiv.className = 'modal-scrollbar-measure'
                            document.body.appendChild(scrollDiv)
                            this.scrollbarWidth =
                                scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth
                            document.body.removeChild(scrollDiv)
                        },
                        adjustDialog() {
                            if (!this.is_visible) {
                                return
                            }
                            const modal = this.$refs.modal;
                            if (!modal) return;
                            const isModalOverflowing =
                                modal.scrollHeight > document.documentElement.clientHeight
                            if (!this.isBodyOverflowing && isModalOverflowing) {
                                modal.style.paddingLeft = `${this.scrollbarWidth}px`
                            }
                            if (this.isBodyOverflowing && !isModalOverflowing) {
                                modal.style.paddingRight = `${this.scrollbarWidth}px`
                            }
                        },
                        resetAdjustments() {
                            const modal = this.$refs.modal
                            if (modal) {
                                modal.style.paddingLeft = ''
                                modal.style.paddingRight = ''
                            }
                        },
                        checkScrollbar() {
                            const rect = this.getBCR(document.body);
                            this.isBodyOverflowing = rect.left + rect.right < window.innerWidth
                        },
                        getBCR(el) {
                            return this.isElement(el) ? el.getBoundingClientRect() : null
                        },
                        setScrollbar() {
                            /*            if (this.isBodyOverflowing) {
                                            // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
                                            //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
                                            const computedStyle = window.getComputedStyle
                                            const body = document.body
                                            const scrollbarWidth = this.scrollbarWidth
                                            this._marginChangedForScroll = []
                                            this._paddingChangedForScroll = []
                                            // Adjust fixed content padding
                                            selectAll(Selector.FIXED_CONTENT).forEach(el => {
                                                const actualPadding = el.style.paddingRight
                                                const calculatedPadding = computedStyle(el).paddingRight || 0
                                                setAttr(el, 'data-padding-right', actualPadding)
                                                el.style.paddingRight = `${parseFloat(calculatedPadding) +
                                                scrollbarWidth}px`
                                                this._paddingChangedForScroll.push(el)
                                            })
                                            // Adjust sticky content margin
                                            selectAll(Selector.STICKY_CONTENT).forEach(el => {
                                                const actualMargin = el.style.marginRight
                                                const calculatedMargin = computedStyle(el).marginRight || 0
                                                setAttr(el, 'data-margin-right', actualMargin)
                                                el.style.marginRight = `${parseFloat(calculatedMargin) -
                                                scrollbarWidth}px`
                                                this._marginChangedForScroll.push(el)
                                            })
                                            // Adjust navbar-toggler margin
                                            selectAll(Selector.NAVBAR_TOGGLER).forEach(el => {
                                                const actualMargin = el.style.marginRight
                                                const calculatedMargin = computedStyle(el).marginRight || 0
                                                setAttr(el, 'data-margin-right', actualMargin)
                                                el.style.marginRight = `${parseFloat(calculatedMargin) +
                                                scrollbarWidth}px`
                                                this._marginChangedForScroll.push(el)
                                            })
                                            // Adjust body padding
                                            const actualPadding = body.style.paddingRight
                                            const calculatedPadding = computedStyle(body).paddingRight
                                            setAttr(body, 'data-padding-right', actualPadding)
                                            body.style.paddingRight = `${parseFloat(calculatedPadding) +
                                            scrollbarWidth}px`
                                        } */
                        },
                        resetScrollbar() {
                            if (this._marginChangedForScroll && this._paddingChangedForScroll) {
                                // Restore fixed content padding
                                this._paddingChangedForScroll.forEach(el => {
                                        if (hasAttr(el, 'data-padding-right')) {
                                            el.style.paddingRight = getAttr(el, 'data-padding-right') || ''
                                            removeAttr(el, 'data-padding-right')
                                        }
                                    })
                                    // Restore sticky content and navbar-toggler margin
                                this._marginChangedForScroll.forEach(el => {
                                    if (hasAttr(el, 'data-margin-right')) {
                                        el.style.marginRight = getAttr(el, 'data-margin-right') || ''
                                        removeAttr(el, 'data-margin-right')
                                    }
                                })
                                this._paddingChangedForScroll = null
                                this._marginChangedForScroll = null
                                    // Restore body padding
                                const body = document.body
                                if (hasAttr(body, 'data-padding-right')) {
                                    body.style.paddingRight = getAttr(body, 'data-padding-right') || ''
                                    removeAttr(body, 'data-padding-right')
                                }
                            }
                        },
                        listenOnRoot(event, callback) {
                            const BVRL = '__BV_root_listeners__';
                            if (!this[BVRL] || Array.isArray(this[BVRL])) {
                                this[BVRL] = []
                            }
                            this[BVRL].push({ event, callback });
                            this.$root.$on(event, callback);
                            return this
                        }
                    },
                    created() {
                        // create non-reactive property
                        this._observer = null
                    },
                    mounted() {
                        // Measure scrollbar
                        this.getScrollbarWidth()
                            // Listen for events from others to either open or close ourselves
                        this.listenOnRoot('bv::show::modal', this.showHandler)
                        this.listenOnRoot('bv::hide::modal', this.hideHandler)
                            // Listen for bv:modal::show events, and close ourselves if the opening modal not us
                        this.listenOnRoot('bv::modal::show', this.modalListener)
                            // Initially show modal?
                        if (this.visible === true) {
                            this.show()
                        }
                    },
                    beforeDestroy() {
                        // Ensure everything is back to normal
                        if (this._observer) {
                            this._observer.disconnect()
                            this._observer = null
                        }
                        this.setResizeEvent(false)
                            // Re-adjust body/navbar/fixed padding/margins (if needed)
                        this.removeClass(document.body, 'modal-open')
                        this.resetAdjustments()
                        this.resetScrollbar()
                    }
                });

                class BvEvent {
                    constructor(type, eventInit = {}) {
                        // Start by emulating native Event constructor.
                        if (!type) {
                            throw new TypeError(
                                `Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`
                            )
                        }
                        // Assign defaults first, the eventInit,
                        // and the type last so it can't be overwritten.
                        Object.assign(this, BvEvent.defaults(), eventInit, { type });
                        // Freeze some props as readonly, but leave them enumerable.
                        Object.defineProperties(this, {
                            type: { enumerable: true, configurable: false, writable: false }, //readonlyDescriptor(),
                            cancelable: { enumerable: true, configurable: false, writable: false }, //readonlyDescriptor(),
                            nativeEvent: { enumerable: true, configurable: false, writable: false }, //readonlyDescriptor(),
                            target: { enumerable: true, configurable: false, writable: false }, //readonlyDescriptor(),
                            relatedTarget: { enumerable: true, configurable: false, writable: false }, //readonlyDescriptor(),
                            vueTarget: { enumerable: true, configurable: false, writable: false }, //readonlyDescriptor()
                        });
                        // Create a private variable using closure scoping.
                        let defaultPrevented = false
                            // Recreate preventDefault method. One way setter.
                        this.preventDefault = function preventDefault() {
                                if (this.cancelable) {
                                    defaultPrevented = true
                                }
                            }
                            // Create 'defaultPrevented' publicly accessible prop
                            // that can only be altered by the preventDefault method.
                        Object.defineProperty(this, 'defaultPrevented', {
                            enumerable: true,
                            get() {
                                return defaultPrevented
                            }
                        })
                    }

                    static defaults() {
                        return {
                            type: '',
                            cancelable: true,
                            nativeEvent: null,
                            target: null,
                            relatedTarget: null,
                            vueTarget: null
                        }
                    }
                }

                // CONCATENATED MODULE: ./src/components/PaymentModal.vue?vue&type=script&lang=js&
                /* harmony default export */
                var components_PaymentModalvue_type_script_lang_js_ = (PaymentModalvue_type_script_lang_js_);
                // EXTERNAL MODULE: ./src/components/PaymentModal.vue?vue&type=style&index=0&id=3d86e099&scoped=true&lang=css&
                var PaymentModalvue_type_style_index_0_id_3d86e099_scoped_true_lang_css_ = __webpack_require__("ead8");

                // CONCATENATED MODULE: ./src/components/PaymentModal.vue






                /* normalize component */

                var PaymentModal_component = normalizeComponent(
                    components_PaymentModalvue_type_script_lang_js_,
                    render,
                    staticRenderFns,
                    false,
                    null,
                    "3d86e099",
                    null

                )

                PaymentModal_component.options.__file = "PaymentModal.vue"
                    /* harmony default export */
                var PaymentModal = (PaymentModal_component.exports);
                // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


                /* harmony default export */
                var entry_lib = __webpack_exports__["default"] = (PaymentModal);



                /***/
            })

            /******/
        })["default"];
});
//# sourceMappingURL=quickpayments.umd.js.map