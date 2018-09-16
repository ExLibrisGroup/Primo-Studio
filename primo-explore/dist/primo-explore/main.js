(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./www/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./www/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./www/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./www/app.module.ts":
/*!***************************!*\
  !*** ./www/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-formly/core */ "./node_modules/@ngx-formly/core/fesm5/ngx-formly-core.js");
/* harmony import */ var _ngx_formly_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-formly/material */ "./node_modules/@ngx-formly/material/fesm5/ngx-formly-material.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angulartics2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angulartics2 */ "./node_modules/angulartics2/fesm5/angulartics2.js");
/* harmony import */ var angulartics2_ga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angulartics2/ga */ "./node_modules/angulartics2/ga/fesm5/angulartics2-ga.js");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app/app.component */ "./www/app/app.component.ts");
/* harmony import */ var _utils_configuration_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/configuration.service */ "./www/utils/configuration.service.ts");
/* harmony import */ var _utils_file_uploader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/file-uploader.service */ "./www/utils/file-uploader.service.ts");
/* harmony import */ var _utils_iframe_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/iframe.service */ "./www/utils/iframe.service.ts");
/* harmony import */ var _utils_features_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/features.service */ "./www/utils/features.service.ts");
/* harmony import */ var _server_server_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./server/server.component */ "./www/server/server.component.ts");
/* harmony import */ var _configuration_form_configuration_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./configuration-form/configuration-form.component */ "./www/configuration-form/configuration-form.component.ts");
/* harmony import */ var _utils_one_time_binding_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/one-time-binding.directive */ "./www/utils/one-time-binding.directive.ts");
/* harmony import */ var _color_theme_color_theme_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./color-theme/color-theme.component */ "./www/color-theme/color-theme.component.ts");
/* harmony import */ var _busy_spinner_busy_spinner_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./busy-spinner/busy-spinner.component */ "./www/busy-spinner/busy-spinner.component.ts");
/* harmony import */ var _edit_images_edit_images_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./edit-images/edit-images.component */ "./www/edit-images/edit-images.component.ts");
/* harmony import */ var _features_list_features_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./features-list/features-list.component */ "./www/features-list/features-list.component.ts");
/* harmony import */ var _feature_configuration_form_feature_configuration_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./feature-configuration-form/feature-configuration-form.component */ "./www/feature-configuration-form/feature-configuration-form.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _editor_tab_editor_tab_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./editor-tab/editor-tab.component */ "./www/editor-tab/editor-tab.component.ts");
/* harmony import */ var _editor_tab_editor_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./editor-tab/editor.service */ "./www/editor-tab/editor.service.ts");
/* harmony import */ var ng2_codemirror__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng2-codemirror */ "./node_modules/ng2-codemirror/lib/index.js");
/* harmony import */ var ng2_codemirror__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(ng2_codemirror__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./code-editor/code-editor.component */ "./www/code-editor/code-editor.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _download_package_download_package_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./download-package/download-package.component */ "./www/download-package/download-package.component.ts");
/* harmony import */ var _upload_package_upload_package_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./upload-package/upload-package.component */ "./www/upload-package/upload-package.component.ts");
/* harmony import */ var _file_tree_file_tree_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./file-tree/file-tree.component */ "./www/file-tree/file-tree.component.ts");
/* harmony import */ var _file_tree_split_path_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./file-tree/split-path.pipe */ "./www/file-tree/split-path.pipe.ts");
/* harmony import */ var _file_tree_slice_customization_path_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./file-tree/slice-customization-path.pipe */ "./www/file-tree/slice-customization-path.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var appRoutes = [
    { path: '', component: _server_server_component__WEBPACK_IMPORTED_MODULE_15__["ServerComponent"], pathMatch: 'full' },
    { path: '*', redirectTo: '' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _server_server_component__WEBPACK_IMPORTED_MODULE_15__["ServerComponent"],
                _configuration_form_configuration_form_component__WEBPACK_IMPORTED_MODULE_16__["ConfigurationFormComponent"],
                _utils_one_time_binding_directive__WEBPACK_IMPORTED_MODULE_17__["OneTimeBindingDirective"],
                _color_theme_color_theme_component__WEBPACK_IMPORTED_MODULE_18__["ColorThemeComponent"],
                _busy_spinner_busy_spinner_component__WEBPACK_IMPORTED_MODULE_19__["BusySpinnerComponent"],
                _edit_images_edit_images_component__WEBPACK_IMPORTED_MODULE_20__["EditImagesComponent"],
                _features_list_features_list_component__WEBPACK_IMPORTED_MODULE_21__["FeaturesListComponent"],
                _feature_configuration_form_feature_configuration_form_component__WEBPACK_IMPORTED_MODULE_22__["FeatureConfigurationFormComponent"],
                _editor_tab_editor_tab_component__WEBPACK_IMPORTED_MODULE_24__["EditorTabComponent"],
                _code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_27__["CodeEditorComponent"],
                _download_package_download_package_component__WEBPACK_IMPORTED_MODULE_29__["DownloadPackageComponent"],
                _upload_package_upload_package_component__WEBPACK_IMPORTED_MODULE_30__["UploadPackageComponent"],
                _file_tree_file_tree_component__WEBPACK_IMPORTED_MODULE_31__["FileTreeComponent"],
                _file_tree_split_path_pipe__WEBPACK_IMPORTED_MODULE_32__["SplitPathPipe"],
                _file_tree_slice_customization_path_pipe__WEBPACK_IMPORTED_MODULE_33__["SliceCustomizationPathPipe"]
            ],
            entryComponents: [
                _feature_configuration_form_feature_configuration_form_component__WEBPACK_IMPORTED_MODULE_22__["FeatureConfigurationFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"],
                angulartics2__WEBPACK_IMPORTED_MODULE_8__["Angulartics2Module"].forRoot([angulartics2_ga__WEBPACK_IMPORTED_MODULE_9__["Angulartics2GoogleAnalytics"]], {
                    pageTracking: {
                        clearQueryParams: false
                    }
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__["FormlyModule"].forRoot(),
                _ngx_formly_material__WEBPACK_IMPORTED_MODULE_6__["FormlyMaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                ng2_codemirror__WEBPACK_IMPORTED_MODULE_26__["CodemirrorModule"]
            ],
            providers: [
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
                _utils_configuration_service__WEBPACK_IMPORTED_MODULE_11__["ConfigurationService"],
                _utils_file_uploader_service__WEBPACK_IMPORTED_MODULE_12__["FileUploaderService"],
                _utils_iframe_service__WEBPACK_IMPORTED_MODULE_13__["IframeService"],
                _utils_features_service__WEBPACK_IMPORTED_MODULE_14__["FeaturesService"],
                angulartics2__WEBPACK_IMPORTED_MODULE_8__["RouterlessTracking"],
                _editor_tab_editor_service__WEBPACK_IMPORTED_MODULE_25__["EditorService"]
            ],
            bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./www/app/app.component.html":
/*!************************************!*\
  !*** ./www/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./www/app/app.component.scss":
/*!************************************!*\
  !*** ./www/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./www/app/app.component.ts":
/*!**********************************!*\
  !*** ./www/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angulartics2_ga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angulartics2/ga */ "./node_modules/angulartics2/ga/fesm5/angulartics2-ga.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(analytics) {
        this.analytics = analytics;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./www/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./www/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [angulartics2_ga__WEBPACK_IMPORTED_MODULE_1__["Angulartics2GoogleAnalytics"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./www/busy-spinner/busy-spinner.component.html":
/*!******************************************************!*\
  !*** ./www/busy-spinner/busy-spinner.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"40px\" height=\"40px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\" xml:space=\"preserve\">\n        <path opacity=\"0.2\" fill=\"#000\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n        s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n        c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\">\n\n        </path>\n        <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n        C22.32,8.481,24.301,9.057,26.013,10.047z\" transform=\"rotate(252 20 20)\">\n            <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 20 20\" to=\"360 20 20\" dur=\"0.5s\" repeatCount=\"indefinite\"></animateTransform>\n        </path>\n</svg>\n"

/***/ }),

/***/ "./www/busy-spinner/busy-spinner.component.scss":
/*!******************************************************!*\
  !*** ./www/busy-spinner/busy-spinner.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "prm-busy-spinner svg {\n  height: inherit;\n  width: inherit; }\n"

/***/ }),

/***/ "./www/busy-spinner/busy-spinner.component.ts":
/*!****************************************************!*\
  !*** ./www/busy-spinner/busy-spinner.component.ts ***!
  \****************************************************/
/*! exports provided: BusySpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusySpinnerComponent", function() { return BusySpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BusySpinnerComponent = /** @class */ (function () {
    function BusySpinnerComponent() {
    }
    BusySpinnerComponent.prototype.ngOnInit = function () {
    };
    BusySpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prm-busy-spinner',
            template: __webpack_require__(/*! ./busy-spinner.component.html */ "./www/busy-spinner/busy-spinner.component.html"),
            styles: [__webpack_require__(/*! ./busy-spinner.component.scss */ "./www/busy-spinner/busy-spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BusySpinnerComponent);
    return BusySpinnerComponent;
}());



/***/ }),

/***/ "./www/classes/addon.ts":
/*!******************************!*\
  !*** ./www/classes/addon.ts ***!
  \******************************/
/*! exports provided: Addon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addon", function() { return Addon; });
var Addon = /** @class */ (function () {
    function Addon(npmid, version, hook, face, linkGit, notes, who, what, config, systemExclusive) {
        this.npmid = npmid;
        this.version = version;
        this.hook = hook;
        this.face = face;
        this.linkGit = linkGit;
        this.notes = notes;
        this.who = who;
        this.what = what;
        this.config = config;
        this.systemExclusive = systemExclusive;
    }
    return Addon;
}());



/***/ }),

/***/ "./www/classes/code-file.ts":
/*!**********************************!*\
  !*** ./www/classes/code-file.ts ***!
  \**********************************/
/*! exports provided: CodeFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeFile", function() { return CodeFile; });
var CodeFile = /** @class */ (function () {
    function CodeFile(type, data, file_path, version) {
        this.type = type;
        this.data = data;
        this.file_path = file_path;
        this.version = version;
    }
    return CodeFile;
}());



/***/ }),

/***/ "./www/classes/file-tree.ts":
/*!**********************************!*\
  !*** ./www/classes/file-tree.ts ***!
  \**********************************/
/*! exports provided: FileTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTree", function() { return FileTree; });
/* harmony import */ var _code_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-file */ "./www/classes/code-file.ts");

var FileTree = /** @class */ (function () {
    function FileTree() {
    }
    FileTree.toCodeFile = function (file, userId) {
        return new _code_file__WEBPACK_IMPORTED_MODULE_0__["CodeFile"](FileTree.parseExtension(file), '', file.path.split(userId)[1], 0);
    };
    FileTree.parseExtension = function (file) {
        switch (file.extension) {
            case '.js':
            case '.ts':
                return 'javascript';
            case '.css':
                return 'css';
            case '.html':
            case '.htm':
                return 'htmlembedded';
            case '.svg':
                return 'xml';
            default:
                return '';
        }
    };
    return FileTree;
}());



/***/ }),

/***/ "./www/code-editor/code-editor.component.html":
/*!****************************************************!*\
  !*** ./www/code-editor/code-editor.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"codeMirror__container\">\r\n    <codemirror #editor [class.CodeMirror-readOnly]=\"readOnly\" [(ngModel)]=\"model.data\" [config]=\"codemirrorOptions\"></codemirror>\r\n</div>\r\n"

/***/ }),

/***/ "./www/code-editor/code-editor.component.scss":
/*!****************************************************!*\
  !*** ./www/code-editor/code-editor.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n\n.CodeMirror-linenumbers {}\n\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n\n/* Shown when moving in bi-directional text */\n\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: -20px;\n  overflow: hidden;\n}\n\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n\n.cm-s-default .cm-quote {color: #090;}\n\n.cm-negative {color: #d44;}\n\n.cm-positive {color: #292;}\n\n.cm-header, .cm-strong {font-weight: bold;}\n\n.cm-em {font-style: italic;}\n\n.cm-link {text-decoration: underline;}\n\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n\n.cm-s-default .cm-atom {color: #219;}\n\n.cm-s-default .cm-number {color: #164;}\n\n.cm-s-default .cm-def {color: #00f;}\n\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n\n.cm-s-default .cm-variable-2 {color: #05a;}\n\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n\n.cm-s-default .cm-comment {color: #a50;}\n\n.cm-s-default .cm-string {color: #a11;}\n\n.cm-s-default .cm-string-2 {color: #f50;}\n\n.cm-s-default .cm-meta {color: #555;}\n\n.cm-s-default .cm-qualifier {color: #555;}\n\n.cm-s-default .cm-builtin {color: #30a;}\n\n.cm-s-default .cm-bracket {color: #997;}\n\n.cm-s-default .cm-tag {color: #170;}\n\n.cm-s-default .cm-attribute {color: #00c;}\n\n.cm-s-default .cm-hr {color: #999;}\n\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\n\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n}\n\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */ border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\n\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n\n.CodeMirror-crosshair { cursor: crosshair; }\n\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\n\nspan.CodeMirror-selectedtext { background: none; }\n\n.CodeMirror-hints {\n  position: absolute;\n  z-index: 10;\n  overflow: hidden;\n  list-style: none;\n\n  margin: 0;\n  padding: 2px;\n  box-shadow: 2px 3px 5px rgba(0,0,0,.2);\n  border-radius: 3px;\n  border: 1px solid silver;\n\n  background: white;\n  font-size: 90%;\n  font-family: monospace;\n\n  max-height: 20em;\n  overflow-y: auto;\n}\n\n.CodeMirror-hint {\n  margin: 0;\n  padding: 0 4px;\n  border-radius: 2px;\n  white-space: pre;\n  color: black;\n  cursor: pointer;\n}\n\nli.CodeMirror-hint-active {\n  background: #08f;\n  color: white;\n}\n\nprm-code-editor .CodeMirror-readOnly .CodeMirror {\n  background: #474747;\n  color: #d4d4d4; }\n\nprm-code-editor .CodeMirror-readOnly ::-webkit-scrollbar {\n  color: #474747; }\n\nprm-code-editor .CodeMirror-readOnly ::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(82, 85, 87, 0.74); }\n\nprm-code-editor .CodeMirror-readOnly ::-webkit-scrollbar-thumb {\n  background-color: #434445;\n  -webkit-box-shadow: inset 0 0 6px rgba(110, 110, 110, 0.74); }\n\nprm-code-editor .CodeMirror-readOnly div.CodeMirror-selected {\n  background: #3b4a3b !important; }\n\nprm-code-editor .CodeMirror-readOnly .CodeMirror-gutters {\n  background: #3b3e40; }\n\nprm-code-editor .CodeMirror-readOnly .CodeMirror-linenumber {\n  color: #6d7073; }\n\nprm-code-editor .CodeMirror {\n  background: #303030;\n  color: #c9c9c9;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n\nprm-code-editor .CodeMirror-wrap {\n  min-width: 273px;\n  max-width: 273px; }\n\nprm-code-editor .CodeMirror-scroll {\n  padding-bottom: 20px; }\n\nprm-code-editor ::-webkit-scrollbar {\n  color: #303030;\n  width: 12px; }\n\nprm-code-editor ::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(66, 68, 70, 0.74);\n  border-radius: 10px; }\n\nprm-code-editor ::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #3b3c3d;\n  -webkit-box-shadow: inset 0 0 6px rgba(97, 97, 97, 0.74); }\n\nprm-code-editor div.CodeMirror-selected {\n  background: #344134 !important; }\n\nprm-code-editor .CodeMirror-gutters {\n  background: #313335;\n  border-right: 0px; }\n\nprm-code-editor .CodeMirror-linenumber {\n  color: #606366; }\n\nprm-code-editor .CodeMirror-cursor {\n  border-left: 1px solid #9b8b8e !important; }\n\nprm-code-editor span.cm-comment {\n  color: #bb934f; }\n\nprm-code-editor span.cm-atom {\n  color: #41dcb9; }\n\nprm-code-editor span.cm-number {\n  color: #56bfd6; }\n\nprm-code-editor span.cm-property, prm-code-editor span.cm-attribute {\n  color: #e0cd96; }\n\nprm-code-editor span.cm-keyword {\n  color: #a5c261; }\n\nprm-code-editor span.cm-string {\n  color: #69864a; }\n\nprm-code-editor span.cm-variable {\n  color: #e8bf6a; }\n\nprm-code-editor span.cm-variable-2 {\n  color: #6699cc; }\n\nprm-code-editor span.cm-def {\n  color: #f99157; }\n\nprm-code-editor span.cm-bracket {\n  color: #a6a6a6; }\n\nprm-code-editor span.cm-tag {\n  color: #c98c32; }\n\nprm-code-editor span.cm-link {\n  color: #a16a94; }\n\nprm-code-editor span.cm-error {\n  background: #fb9f9f;\n  color: #8e3836; }\n\nprm-code-editor .CodeMirror-activeline-background {\n  background: #343600 !important; }\n\nprm-code-editor .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: #ffee34 !important; }\n\n.is-tab-expanded * > prm-code-editor .CodeMirror-wrap {\n  min-width: 810px;\n  max-width: 810px; }\n\n.CodeMirror-hints.primo-studio {\n  padding: 0;\n  background-color: #3d3d3d; }\n\n.CodeMirror-hints.primo-studio .CodeMirror-hint {\n    color: #bfbfbf; }\n\n.CodeMirror-hints.primo-studio .CodeMirror-hint-active {\n    background-color: #004e9b; }\n\n.CodeMirror-hints::-webkit-scrollbar {\n  color: #3d3d3d;\n  width: 10px; }\n\n.CodeMirror-hints::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(82, 85, 87, 0.74);\n  border-radius: 10px; }\n\n.CodeMirror-hints::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: #404142;\n  -webkit-box-shadow: inset 0 0 6px rgba(107, 107, 107, 0.74); }\n"

/***/ }),

/***/ "./www/code-editor/code-editor.component.ts":
/*!**************************************************!*\
  !*** ./www/code-editor/code-editor.component.ts ***!
  \**************************************************/
/*! exports provided: CodeEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeEditorComponent", function() { return CodeEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_code_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/code-file */ "./www/classes/code-file.ts");
/* harmony import */ var codemirror_lib_codemirror_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror/lib/codemirror.js */ "./node_modules/codemirror/lib/codemirror.js");
/* harmony import */ var codemirror_lib_codemirror_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror_addon_edit_matchbrackets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror/addon/edit/matchbrackets.js */ "./node_modules/codemirror/addon/edit/matchbrackets.js");
/* harmony import */ var codemirror_addon_edit_matchbrackets_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_matchbrackets_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var codemirror_addon_edit_closebrackets_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror/addon/edit/closebrackets.js */ "./node_modules/codemirror/addon/edit/closebrackets.js");
/* harmony import */ var codemirror_addon_edit_closebrackets_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_closebrackets_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var codemirror_addon_hint_show_hint_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! codemirror/addon/hint/show-hint.js */ "./node_modules/codemirror/addon/hint/show-hint.js");
/* harmony import */ var codemirror_addon_hint_show_hint_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_show_hint_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var codemirror_addon_hint_css_hint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codemirror/addon/hint/css-hint */ "./node_modules/codemirror/addon/hint/css-hint.js");
/* harmony import */ var codemirror_addon_hint_css_hint__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_css_hint__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var codemirror_addon_hint_javascript_hint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! codemirror/addon/hint/javascript-hint */ "./node_modules/codemirror/addon/hint/javascript-hint.js");
/* harmony import */ var codemirror_addon_hint_javascript_hint__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_javascript_hint__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var codemirror_addon_hint_html_hint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! codemirror/addon/hint/html-hint */ "./node_modules/codemirror/addon/hint/html-hint.js");
/* harmony import */ var codemirror_addon_hint_html_hint__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_html_hint__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! codemirror/mode/css/css.js */ "./node_modules/codemirror/mode/css/css.js");
/* harmony import */ var codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! codemirror/mode/javascript/javascript.js */ "./node_modules/codemirror/mode/javascript/javascript.js");
/* harmony import */ var codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var codemirror_mode_htmlmixed_htmlmixed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! codemirror/mode/htmlmixed/htmlmixed */ "./node_modules/codemirror/mode/htmlmixed/htmlmixed.js");
/* harmony import */ var codemirror_mode_htmlmixed_htmlmixed__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_htmlmixed_htmlmixed__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var codemirror_mode_htmlembedded_htmlembedded__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! codemirror/mode/htmlembedded/htmlembedded */ "./node_modules/codemirror/mode/htmlembedded/htmlembedded.js");
/* harmony import */ var codemirror_mode_htmlembedded_htmlembedded__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_htmlembedded_htmlembedded__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! codemirror/mode/xml/xml */ "./node_modules/codemirror/mode/xml/xml.js");
/* harmony import */ var codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ng2_codemirror__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-codemirror */ "./node_modules/ng2-codemirror/lib/index.js");
/* harmony import */ var ng2_codemirror__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ng2_codemirror__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _editor_tab_editor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../editor-tab/editor.service */ "./www/editor-tab/editor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var CodeEditorComponent = /** @class */ (function () {
    function CodeEditorComponent(editorService) {
        this.editorService = editorService;
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.readOnly = false;
    }
    CodeEditorComponent.prototype.ngOnInit = function () {
        this.data = this.model.data;
        this.codemirrorOptions = {
            lineNumbers: true,
            lineWrapping: true,
            matchBrackets: true,
            autoCloseBrackets: true,
            mode: this.model.type,
            value: this.data || '',
            theme: 'primo-studio',
            extraKeys: {
                "Ctrl-Space": "autocomplete",
                "Cmd-Space": "autocomplete"
            }
        };
    };
    CodeEditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.editor.instance.onSave = function () {
            _this.save.emit(_this.model);
        };
    };
    Object.defineProperty(CodeEditorComponent.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            if (value !== this._model) {
                if (this._model) {
                    if (this._model.type !== value.type) {
                        this.editor.instance.setOption('mode', value.type);
                    }
                    if (this._model.file_path != value.file_path) {
                        this.readOnly = this.editorService.readonlyFilesRegex.test(value.file_path);
                        if (this.readOnly) {
                            this.editor.instance.setOption('readOnly', 'nocursor');
                        }
                        else {
                            this.editor.instance.setOption('readOnly', false);
                        }
                    }
                    else if (this._model.version !== value.version) {
                        this.data = value.data;
                        this.editor.instance.setValue(this.data);
                    }
                }
                this._model = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CodeEditorComponent.prototype, "save", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editor'),
        __metadata("design:type", ng2_codemirror__WEBPACK_IMPORTED_MODULE_14__["CodemirrorComponent"])
    ], CodeEditorComponent.prototype, "editor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _classes_code_file__WEBPACK_IMPORTED_MODULE_1__["CodeFile"]),
        __metadata("design:paramtypes", [_classes_code_file__WEBPACK_IMPORTED_MODULE_1__["CodeFile"]])
    ], CodeEditorComponent.prototype, "model", null);
    CodeEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prm-code-editor',
            template: __webpack_require__(/*! ./code-editor.component.html */ "./www/code-editor/code-editor.component.html"),
            styles: [__webpack_require__(/*! ./code-editor.component.scss */ "./www/code-editor/code-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [_editor_tab_editor_service__WEBPACK_IMPORTED_MODULE_15__["EditorService"]])
    ], CodeEditorComponent);
    return CodeEditorComponent;
}());



/***/ }),

/***/ "./www/color-theme/color-theme.component.html":
/*!****************************************************!*\
  !*** ./www/color-theme/color-theme.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Theme</h2>\n<p class=\"italics\">\n  Change Primo's entire color theme with granular control over base colors\n</p>\n<div class=\"content\">\n\n  <div class=\"content-row input-wrapper\" *ngFor=\"let key of keys(colors)\">\n    <label for=\"{{key}}\">\n      <span *ngIf=\"key !== 'backgroundColor'\">{{key}}</span>\n      <span *ngIf=\"key == 'backgroundColor'\">background</span>\n    </label>\n    <input #txt id=\"{{key}}\" type=\"text\" [value]=\"colors[key]\" (keyup)=\"setColor(key, txt.value)\">\n    <input #clr type=\"color\" (change)=\"setColor(key, clr.value)\" [value]=\"colors[key]\">\n  </div>\n\n</div>\n\n<button (click)=\"createTheme()\" [disabled]=\"inProgress\">\n  <i *ngIf=\"!inProgress\" class=\"icon-refresh\"></i>\n  <prm-busy-spinner *ngIf=\"inProgress\"></prm-busy-spinner>\n  Update Theme\n</button>\n"

/***/ }),

/***/ "./www/color-theme/color-theme.component.scss":
/*!****************************************************!*\
  !*** ./www/color-theme/color-theme.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "prm-color-theme {\n  padding: 2rem;\n  display: block; }\n  prm-color-theme label {\n    margin-right: 1rem; }\n  prm-color-theme input[type=\"text\"] {\n    flex: none !important;\n    width: 90px;\n    text-align: center;\n    margin-right: 1rem; }\n  prm-color-theme input[type=\"color\"] {\n    flex-shrink: 0; }\n"

/***/ }),

/***/ "./www/color-theme/color-theme.component.ts":
/*!**************************************************!*\
  !*** ./www/color-theme/color-theme.component.ts ***!
  \**************************************************/
/*! exports provided: ColorThemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorThemeComponent", function() { return ColorThemeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-theme.service */ "./www/color-theme/color-theme.service.ts");
/* harmony import */ var _utils_iframe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/iframe.service */ "./www/utils/iframe.service.ts");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/keys */ "./node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angulartics2_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angulartics2/ga */ "./node_modules/angulartics2/ga/fesm5/angulartics2-ga.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ColorThemeComponent = /** @class */ (function () {
    function ColorThemeComponent(colorThemeService, iframeService, analytics) {
        this.colorThemeService = colorThemeService;
        this.iframeService = iframeService;
        this.analytics = analytics;
        this.analytics.pageTrack('/');
        this.inProgress = false;
    }
    Object.defineProperty(ColorThemeComponent.prototype, "colors", {
        get: function () {
            return this.colorThemeService.colors;
        },
        enumerable: true,
        configurable: true
    });
    ColorThemeComponent.prototype.keys = function (object) {
        return lodash_keys__WEBPACK_IMPORTED_MODULE_3__(object);
    };
    ColorThemeComponent.prototype.createTheme = function () {
        var _this = this;
        this.inProgress = true;
        this.colorThemeService.createTheme().subscribe(function (resp) {
            if (+resp.status === 200) {
                console.log('theme created');
                _this.iframeService.refreshNuiIFrame();
            }
        }, function (err) {
            console.log(err);
        }).add(function () {
            _this.inProgress = false;
        });
        this.analytics.eventTrack('createTheme', { category: 'colorTheme', label: 'all_colors' });
    };
    ColorThemeComponent.prototype.setColor = function (key, newValue) {
        this.colors[key] = newValue;
    };
    ColorThemeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prm-color-theme',
            template: __webpack_require__(/*! ./color-theme.component.html */ "./www/color-theme/color-theme.component.html"),
            styles: [__webpack_require__(/*! ./color-theme.component.scss */ "./www/color-theme/color-theme.component.scss")]
        }),
        __metadata("design:paramtypes", [_color_theme_service__WEBPACK_IMPORTED_MODULE_1__["ColorThemeService"],
            _utils_iframe_service__WEBPACK_IMPORTED_MODULE_2__["IframeService"],
            angulartics2_ga__WEBPACK_IMPORTED_MODULE_4__["Angulartics2GoogleAnalytics"]])
    ], ColorThemeComponent);
    return ColorThemeComponent;
}());



/***/ }),

/***/ "./www/color-theme/color-theme.service.ts":
/*!************************************************!*\
  !*** ./www/color-theme/color-theme.service.ts ***!
  \************************************************/
/*! exports provided: ColorThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorThemeService", function() { return ColorThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/configuration.service */ "./www/utils/configuration.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ColorThemeService = /** @class */ (function () {
    function ColorThemeService(configurationService, $http) {
        var _this = this;
        this.configurationService = configurationService;
        this.$http = $http;
        this._colors = {
            "primary": "#53738C",
            "secondary": "#A9CDD6",
            "backgroundColor": "#ffffff",
            "links": "#5C92BD",
            "warning": "#ff6347",
            "positive": "#0f7d00",
            "negative": "#808080",
            "notice": "#e08303"
        };
        this.$http.get('/colors').subscribe(function (response) {
            _this._colors = response;
        }, function (err) {
            console.log('failed to get colors JSON from server, using default colors');
        });
    }
    Object.defineProperty(ColorThemeService.prototype, "config", {
        get: function () {
            return this.configurationService.config;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorThemeService.prototype, "colors", {
        get: function () {
            return this._colors;
        },
        enumerable: true,
        configurable: true
    });
    ColorThemeService.prototype.createTheme = function () {
        var config = {
            data: {
                colors: this.colors,
                conf: this.config
            }
        };
        return this.$http.post('/colors', config);
    };
    ColorThemeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_utils_configuration_service__WEBPACK_IMPORTED_MODULE_1__["ConfigurationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ColorThemeService);
    return ColorThemeService;
}());



/***/ }),

/***/ "./www/configuration-form/configuration-form.component.html":
/*!******************************************************************!*\
  !*** ./www/configuration-form/configuration-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form inner-wrapper\" *ngIf=\"!isUp()\">\n  <header>\n    <h1>Primo Studio Configuration</h1>\n    <p class=\"italics\">Enter Primo UI base url and view that you would like to use for preview the customization on.</p>\n  </header>\n  <section class=\"content\">\n\n    <div class=\"content-row input-wrapper\">\n      <label for=\"primo-url\">Primo URL</label>\n      <input #primoUrl id=\"primo-url\" type=\"text\" [value]=\"config.url\" (keyup)=\"setUrl(primoUrl.value)\">\n    </div>\n\n    <div class=\"content-row input-wrapper\">\n      <label for=\"primo-view\">Primo View</label>\n      <input #primoView id=\"primo-view\"  type=\"text\" [value]=\"config.view\" (keyup)=\"setView(primoView.value)\" placeholder=\"Primo View Identifier (vid)\">\n    </div>\n\n    <div class=\"content-row input-wrapper checkbox-wrapper\">\n      <label for=\"primo-ve\">\n        <input #primoVe id=\"primo-ve\" type=\"checkbox\" [value]=\"configurationService.isVe\" (change)=\"setVe(primoVe.checked)\">\n        Primo VE\n      </label>\n    </div>\n\n    <div class=\"content-row input-wrapper checkbox-wrapper\">\n      <label for=\"central-package\">\n        <input #centralPackage id=\"central-package\" type=\"checkbox\" [value]=\"configurationService.isUsingCentralPackage\" (change)=\"setCentralPackage(centralPackage.checked)\">\n        Use Central Package\n      </label>\n    </div>\n\n\n  </section>\n  <footer>\n    <button  class=\"accent\" (click)=\"start()\">\n      <i class=\"icon-play_arrow\"></i>\n      <span>Start your studio with the above details</span>\n    </button>\n  </footer>\n\n</div>\n\n<div class=\"status inner-wrapper\" *ngIf=\"isUp()\">\n  <span class=\"server-on\"></span>\n  <span>Preview is running</span>\n  <button  (click)=\"stop()\">\n    <i class=\"icon-stop\"></i>\n    <span>Back to Configuration</span>\n  </button>\n</div>\n"

/***/ }),

/***/ "./www/configuration-form/configuration-form.component.scss":
/*!******************************************************************!*\
  !*** ./www/configuration-form/configuration-form.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".server-on {\n  display: inline-flex; }\n  .server-on:before, .server-on:after {\n    border-radius: 50%; }\n  .server-on:before {\n    content: '';\n    width: 10px;\n    height: 10px;\n    background-color: #50922d; }\n  .server-on:after {\n    content: '';\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    background-color: #74a70b;\n    opacity: 0;\n    -webkit-animation: pulsate 2s 1s cubic-bezier(0.23, 1, 0.32, 1) infinite;\n            animation: pulsate 2s 1s cubic-bezier(0.23, 1, 0.32, 1) infinite; }\n  @-webkit-keyframes pulsate {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(2.5);\n            transform: scale(2.5);\n    opacity: 0; } }\n  @keyframes pulsate {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(2.5);\n            transform: scale(2.5);\n    opacity: 0; } }\n  .fade-in-out-animation.ng-enter {\n  opacity: 0;\n  transition: opacity .3s ease; }\n  .fade-in-out-animation.ng-enter.ng-enter-active {\n    opacity: 1; }\n  .fade-in-out-animation.ng-leave {\n  opacity: 1;\n  transition: opacity .15s ease; }\n  .fade-in-out-animation.ng-leave.ng-leave-active {\n    opacity: 0; }\n  prm-configuration-form {\n  width: 600px;\n  height: 385px;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 4;\n  border-radius: 10px;\n  transition: width 0.4s cubic-bezier(0.86, 0, 0.07, 1), height 0.4s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 0.6s cubic-bezier(0.86, 0, 0.07, 1);\n  transition: transform 0.6s cubic-bezier(0.86, 0, 0.07, 1), width 0.4s cubic-bezier(0.86, 0, 0.07, 1), height 0.4s cubic-bezier(0.86, 0, 0.07, 1);\n  transition: transform 0.6s cubic-bezier(0.86, 0, 0.07, 1), width 0.4s cubic-bezier(0.86, 0, 0.07, 1), height 0.4s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 0.6s cubic-bezier(0.86, 0, 0.07, 1);\n  -webkit-transform: translate(calc(50vw - 300px), calc(-50vh + 192.5px));\n          transform: translate(calc(50vw - 300px), calc(-50vh + 192.5px)); }\n  @media only screen and (max-width: 768px) {\n    prm-configuration-form {\n      height: 440px;\n      width: 300px;\n      left: 40%; } }\n  prm-configuration-form:before {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: white;\n    z-index: -1;\n    border-radius: 10px;\n    transition: opacity .4s ease;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 3px 8px rgba(0, 0, 0, 0.1); }\n  prm-configuration-form:after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: #f5f5f5;\n    z-index: -1;\n    opacity: 0;\n    transition: opacity .4s ease;\n    box-shadow: 0 -1px 0 0px #dcdbdb; }\n  prm-configuration-form header {\n    padding: 2rem 2rem 0 2rem; }\n  prm-configuration-form .content {\n    padding: 0 2rem 2rem 2rem; }\n  prm-configuration-form footer {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px; }\n  prm-configuration-form footer button {\n      height: 100%;\n      width: 100%;\n      justify-content: center;\n      border-bottom-left-radius: 10px;\n      border-bottom-right-radius: 10px; }\n  prm-configuration-form .form.ng-enter {\n    opacity: 0;\n    transition: opacity .3s ease; }\n  prm-configuration-form .form.ng-enter.ng-enter-active {\n      opacity: 1; }\n  prm-configuration-form .form.ng-leave {\n    opacity: 1;\n    transition: opacity .3s ease; }\n  prm-configuration-form .form.ng-leave.ng-leave-active {\n      opacity: 0; }\n  prm-configuration-form .status {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    padding: 1.5rem;\n    justify-content: center;\n    width: 100%; }\n  prm-configuration-form .status.ng-enter {\n      opacity: 0;\n      transition: opacity .3s ease; }\n  prm-configuration-form .status.ng-enter.ng-enter-active {\n        opacity: 1; }\n  prm-configuration-form .status.ng-leave {\n      opacity: 1;\n      transition: opacity .3s ease; }\n  prm-configuration-form .status.ng-leave.ng-leave-active {\n        opacity: 0; }\n  prm-configuration-form .status > span {\n      margin-right: .5rem; }\n  prm-configuration-form.is-running {\n    height: 80px;\n    width: 400px;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n  @media screen and (min-width: 1280px) {\n      prm-configuration-form.is-running {\n        width: 515px; } }\n  prm-configuration-form.is-running:before {\n      opacity: 0; }\n  prm-configuration-form.is-running:after {\n      opacity: 1;\n      transition-delay: .3s; }\n  prm-configuration-form.is-floating {\n    -webkit-transform: translate(1rem, -1rem);\n            transform: translate(1rem, -1rem);\n    width: 340px;\n    height: 70px;\n    box-shadow: 0 3px 15px -1px rgba(0, 0, 0, 0.2);\n    transition: width 0.6s cubic-bezier(0.23, 1, 0.32, 1), height 0.6s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), width 0.6s cubic-bezier(0.23, 1, 0.32, 1), height 0.6s cubic-bezier(0.23, 1, 0.32, 1);\n    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), width 0.6s cubic-bezier(0.23, 1, 0.32, 1), height 0.6s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.4s cubic-bezier(0.23, 1, 0.32, 1); }\n  prm-configuration-form .inner-wrapper {\n    overflow: hidden;\n    height: 100%;\n    box-sizing: border-box; }\n"

/***/ }),

/***/ "./www/configuration-form/configuration-form.component.ts":
/*!****************************************************************!*\
  !*** ./www/configuration-form/configuration-form.component.ts ***!
  \****************************************************************/
/*! exports provided: ConfigurationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationFormComponent", function() { return ConfigurationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_iframe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/iframe.service */ "./www/utils/iframe.service.ts");
/* harmony import */ var _utils_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/configuration.service */ "./www/utils/configuration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigurationFormComponent = /** @class */ (function () {
    function ConfigurationFormComponent(iframeService, configurationService, route) {
        this.iframeService = iframeService;
        this.configurationService = configurationService;
        this.route = route;
    }
    ConfigurationFormComponent.prototype.ngOnInit = function () {
        var params = this.route.snapshot.queryParams;
        if (params['url'] && params['vid']) {
            this.start();
        }
    };
    Object.defineProperty(ConfigurationFormComponent.prototype, "config", {
        get: function () {
            return this.configurationService.config;
        },
        enumerable: true,
        configurable: true
    });
    ConfigurationFormComponent.prototype.start = function () {
        var _this = this;
        this.configurationService.start().subscribe(function () {
            _this.iframeService.up = true;
        });
    };
    ConfigurationFormComponent.prototype.stop = function () {
        this.iframeService.up = false;
    };
    ConfigurationFormComponent.prototype.isUp = function () {
        return this.iframeService.isUp();
    };
    ConfigurationFormComponent.prototype.setUrl = function (url) {
        this.config.url = url;
    };
    ConfigurationFormComponent.prototype.setView = function (view) {
        this.config.view = view;
    };
    ConfigurationFormComponent.prototype.setVe = function (ve) {
        this.config.ve = ve.toString();
    };
    ConfigurationFormComponent.prototype.setCentralPackage = function (central) {
        this.config.useCentral = central.toString();
    };
    ConfigurationFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prm-configuration-form',
            template: __webpack_require__(/*! ./configuration-form.component.html */ "./www/configuration-form/configuration-form.component.html"),
            styles: [__webpack_require__(/*! ./configuration-form.component.scss */ "./www/configuration-form/configuration-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_utils_iframe_service__WEBPACK_IMPORTED_MODULE_1__["IframeService"],
            _utils_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ConfigurationFormComponent);
    return ConfigurationFormComponent;
}());



/***/ }),

/***/ "./www/download-package/download-package.component.html":
/*!**************************************************************!*\
  !*** ./www/download-package/download-package.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Download Package</h2>\r\n<p class=\"italics\">Download the entire customization package</p>\r\n<div class=\"content\">\r\n    <button (click)=\"downloadPackage()\">\r\n        <i class=\"icon-cloud_download\"></i>\r\n        <span>Download</span>\r\n    </button>\r\n</div>\r\n"

/***/ }),

/***/ "./www/download-package/download-package.component.scss":
/*!**************************************************************!*\
  !*** ./www/download-package/download-package.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./www/download-package/download-package.component.ts":
/*!************************************************************!*\
  !*** ./www/download-package/download-package.component.ts ***!
  \************************************************************/
/*! exports provided: DownloadPackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadPackageComponent", function() { return DownloadPackageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angulartics2_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angulartics2/ga */ "./node_modules/angulartics2/ga/fesm5/angulartics2-ga.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DownloadPackageComponent = /** @class */ (function () {
    function DownloadPackageComponent($http, analytics) {
        this.$http = $http;
        this.analytics = analytics;
        this.analytics.pageTrack('/');
    }
    DownloadPackageComponent.prototype.downloadPackage = function () {
        var _this = this;
        this.$http.get('/package', {
            headers: {
                'Content-Type': 'application/zip',
                'Accept': 'application/zip'
            },
            responseType: 'arraybuffer'
        }).subscribe(function (data) {
            var url = URL.createObjectURL(new Blob([data]));
            var a = document.createElement('a');
            a.href = url;
            a.download = 'package.zip';
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 100);
            _this.analytics.eventTrack('download', { category: 'downloadPackage', label: 'package' });
        });
    };
    DownloadPackageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prm-download-package',
            template: __webpack_require__(/*! ./download-package.component.html */ "./www/download-package/download-package.component.html"),
            styles: [__webpack_require__(/*! ./download-package.component.scss */ "./www/download-package/download-package.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            angulartics2_ga__WEBPACK_IMPORTED_MODULE_2__["Angulartics2GoogleAnalytics"]])
    ], DownloadPackageComponent);
    return DownloadPackageComponent;
}());



/***/ }),

/***/ "./www/edit-images/edit-images.component.html":
/*!****************************************************!*\
  !*** ./www/edit-images/edit-images.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Images</h2>\n<p class=\"italics\">Upload image files to replace Primo's logo and favicon</p>\n\n<div class=\"content\">\n\n  <div class=\"content-row-column\">\n    <span class=\"top-label\">Library Logo:</span>\n    <input  type=\"file\"\n            name=\"library-logo\"\n            id=\"library-logo\"\n            class=\"inputfile\"\n            (change)=\"setImage('library-logo', $event.target.files)\"\n            accept=\"image/png\"/>\n    <label for=\"library-logo\" id=\"label-for-library-logo\">\n      <span>{{logoFileLabel}}</span>\n    </label>\n  </div>\n  <div class=\"content-row-column\">\n    <span class=\"top-label\">Library Favicon:</span>\n    <input  type=\"file\"\n            name=\"favicon\"\n            id=\"favicon\"\n            class=\"inputfile\"\n            (change)=\"setImage('favicon', $event.target.files)\"\n            accept=\".ico\"/>\n    <label for=\"favicon\" id=\"label-for-favicon\">\n      <span>{{faviconFileLabel}}</span>\n    </label>\n  </div>\n  <div class=\"content-row-column\" style=\"display: none\">\n    <span class=\"top-label\">Library Icons Svg:</span>\n    <input  type=\"file\"\n            name=\"svg\"\n            id=\"svg\"\n            class=\"inputfile\"\n            (change)=\"setImage('custom-ui', $event.target.files)\"\n            accept=\"image/svg+xml\"/>\n    <label for=\"svg\" id=\"label-for-custom-ui\">\n      <span>{{svgFileLabel}}</span>\n    </label>\n  </div>\n\n  <div class=\"content-row-column\">\n    <span class=\"top-label\">Resource icons:</span>\n    <input\n      type=\"file\"\n      multiple\n      name=\"resource-icons\"\n      id=\"resource-icons\"\n      class=\"inputfile\"\n      (change)=\"setImage('resource-icons', $event.target.files)\"\n      accept=\"image/png\"/>\n    <label for=\"resource-icons\" id=\"label-for-resource-icons\">\n      <span>{{resourceFilesLabel}}</span>\n    </label>\n  </div>\n\n  <button id=\"button-upload\"\n          class=\"accent content-row\"\n          (click)=\"uploadImages()\"\n          [disabled]=\"uploadDisabled\">\n    <i class=\"icon-cloud_upload\"></i>\n    <span>Upload images</span>\n  </button>\n\n  <button id=\"button-revert\"\n          (click)=\"removeImages()\">\n    <span>Revert image changes</span>\n  </button>\n\n</div>\n"

/***/ }),

/***/ "./www/edit-images/edit-images.component.scss":
/*!****************************************************!*\
  !*** ./www/edit-images/edit-images.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "prm-edit-images .top-label {\n  font-weight: 600;\n  margin-bottom: .5rem; }\n\nprm-edit-images #button-upload {\n  margin-top: 2rem; }\n"

/***/ }),

/***/ "./www/edit-images/edit-images.component.ts":
/*!**************************************************!*\
  !*** ./www/edit-images/edit-images.component.ts ***!
  \**************************************************/
/*! exports provided: EditImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditImagesComponent", function() { return EditImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_file_uploader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/file-uploader.service */ "./www/utils/file-uploader.service.ts");
/* harmony import */ var _utils_iframe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/iframe.service */ "./www/utils/iframe.service.ts");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular */ "../node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angulartics2_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angulartics2/ga */ "./node_modules/angulartics2/ga/fesm5/angulartics2-ga.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditImagesComponent = /** @class */ (function () {
    function EditImagesComponent(fileUploaderService, iframeService, analytics) {
        this.fileUploaderService = fileUploaderService;
        this.iframeService = iframeService;
        this.analytics = analytics;
        this.images = {};
        this.analytics.pageTrack('/');
        this.logoFileLabel = 'Choose logo file';
        this.faviconFileLabel = 'Choose favicon';
        this.svgFileLabel = 'Choose icons svg';
        this.resourceFilesLabel = 'Choose resource type icons';
        this.uploadDisabled = true;
    }
    EditImagesComponent.prototype.setImage = function (name, files) {
        this.images[name] = files;
        if (files.length > 1) {
            Object(angular__WEBPACK_IMPORTED_MODULE_3__["element"])(document.querySelector('#label-for-' + name + '')).text(files.length + ' files selected').addClass('is-touched');
        }
        else {
            Object(angular__WEBPACK_IMPORTED_MODULE_3__["element"])(document.querySelector('#label-for-' + name + '')).text(files[0].name).addClass('is-touched');
        }
        if (files.length > 0) {
            this.uploadDisabled = false;
        }
        this.analytics.eventTrack('setImage', { category: 'Images', label: name + " - " + files[0].name });
    };
    EditImagesComponent.prototype.uploadImages = function () {
        var _this = this;
        this.fileUploaderService.uploadFiles('/images', this.images).subscribe(function () {
            console.log('images uploaded successfully');
            _this.iframeService.refreshNuiIFrame();
        }, function (err) {
            console.log('failed to upload images: ' + err.stack);
        });
        this.analytics.eventTrack('uploadImages', { category: 'Images', label: this.images.toLocaleString() });
    };
    EditImagesComponent.prototype.removeImages = function () {
        var _this = this;
        this.fileUploaderService.removeFiles('/images').subscribe(function () {
            console.log('images removed successfully');
            _this.iframeService.refreshNuiIFrame();
        }, function (err) {
            console.log('failed to remove images: ' + err.toString());
        });
        this.analytics.eventTrack('removeImages', { category: 'Images', label: 'all' });
    };
    EditImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prm-edit-images',
            template: __webpack_require__(/*! ./edit-images.component.html */ "./www/edit-images/edit-images.component.html"),
            styles: [__webpack_require__(/*! ./edit-images.component.scss */ "./www/edit-images/edit-images.component.scss")]
        }),
        __metadata("design:paramtypes", [_utils_file_uploader_service__WEBPACK_IMPORTED_MODULE_1__["FileUploaderService"],
            _utils_iframe_service__WEBPACK_IMPORTED_MODULE_2__["IframeService"],
            angulartics2_ga__WEBPACK_IMPORTED_MODULE_4__["Angulartics2GoogleAnalytics"]])
    ], EditImagesComponent);
    return EditImagesComponent;
}());



/***/ }),

/***/ "./www/editor-tab/editor-tab.component.html":
/*!**************************************************!*\
  !*** ./www/editor-tab/editor-tab.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>CSS editor</h2>\r\n<button class=\"menu-button float-right\" (click)=\"toggleTab()\">\r\n    <i class=\"icon-chevrons-left\" [class.is-rotated]=\"!expanded\"></i>\r\n</button>\r\n<p class=\"italics\">\r\n    Change Primo's customization package contents to manage Primo's view\r\n</p>\r\n<prm-file-tree [baseDir]=\"editorService.files\" (fileSelected)=\"selectFile($event)\"></prm-file-tree>\r\n<div class=\"content\">\r\n\r\n    <div *ngIf=\"codeFile\" class=\"input-wrapper content-row-column\">\r\n        <span class=\"content-row\">Your Current {{codeFile.file_path.split('\\\\').pop().split('/').pop()}}:</span>\r\n        <prm-code-editor class=\"content-row\" [model]=\"codeFile\" (save)=\"onSave($event)\"></prm-code-editor>\r\n    </div>\r\n\r\n</div>\r\n\r\n<button (click)=\"createTheme()\" [disabled]=\"inProgress\">\r\n    <i *ngIf=\"!inProgress\">\r\n       <!--class=\"icon-save\">-->\r\n    </i>\r\n    <prm-busy-spinner *ngIf=\"inProgress\"></prm-busy-spinner>\r\n    Apply Changes\r\n</button>\r\n"

/***/ }),

/***/ "./www/editor-tab/editor-tab.component.scss":
/*!**************************************************!*\
  !*** ./www/editor-tab/editor-tab.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "prm-editor .float-right {\n  float: right; }\n\nprm-editor button {\n  margin-bottom: 7px; }\n\nprm-editor .content, prm-editor .content-row-column {\n  margin-bottom: 11px; }\n"

/***/ }),

/***/ "./www/editor-tab/editor-tab.component.ts":
/*!************************************************!*\
  !*** ./www/editor-tab/editor-tab.component.ts ***!
  \************************************************/
/*! exports provided: EditorTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorTabComponent", function() { return EditorTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.service */ "./www/editor-tab/editor.service.ts");
/* harmony import */ var _utils_iframe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/iframe.service */ "./www/utils/iframe.service.ts");
/* harmony import */ var angulartics2_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angulartics2/ga */ "./node_modules/angulartics2/ga/fesm5/angulartics2-ga.js");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror */ "./node_modules/codemirror/lib/codemirror.js");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _classes_file_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../classes/file-tree */ "./www/classes/file-tree.ts");
/* harmony import */ var _utils_configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/configuration.service */ "./www/utils/configuration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditorTabComponent = /** @class */ (function () {
    function EditorTabComponent(editorService, iframeService, analytics, configurationService) {
        this.editorService = editorService;
        this.iframeService = iframeService;
        this.analytics = analytics;
        this.configurationService = configurationService;
        this.expandTab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.analytics.pageTrack('/');
        this.inProgress = false;
        this.expanded = true;
        this.toggleTab();
        this.editorService.getFiles();
        this.codeFile = this.editorService.getDefaultCodeFile();
        this.editorService.initCode(this.codeFile);
    }
    EditorTabComponent.prototype.ngOnInit = function () {
        codemirror__WEBPACK_IMPORTED_MODULE_4__["commands"].save = function (instance) {
            instance.onSave();
        };
    };
    EditorTabComponent.prototype.onSave = function (data) {
        var _this = this;
        this.inProgress = true;
        this.editorService.saveFile(data).subscribe(function (resp) {
            if (+resp.status === 200) {
                console.log('file "' + data.file_path + '" was saved');
                _this.iframeService.refreshNuiIFrame();
            }
        }, function (err) {
            console.log(err);
        }).add(function () {
            _this.inProgress = false;
        });
        this.analytics.eventTrack('save', { category: 'codeEditor', label: 'single_file: ' + data.file_path });
    };
    Object.defineProperty(EditorTabComponent.prototype, "codeFiles", {
        get: function () {
            return this.editorService.codeFiles;
        },
        set: function (newArr) {
            this.editorService.codeFiles = newArr;
        },
        enumerable: true,
        configurable: true
    });
    EditorTabComponent.prototype.toggleTab = function () {
        this.expanded = !this.expanded;
        this.expandTab.emit(this.expanded);
        this.analytics.eventTrack('expandTab', { category: 'codeEditor', label: this.expanded });
    };
    EditorTabComponent.prototype.createTheme = function () {
        var _this = this;
        this.inProgress = true;
        this.editorService.createTheme().subscribe(function (resp) {
            if (+resp.status === 200) {
                console.log('all files were saved');
                _this.iframeService.refreshNuiIFrame();
            }
        }, function (err) {
            console.log(err);
        }).add(function () {
            _this.inProgress = false;
        });
        this.analytics.eventTrack('save', { category: 'codeEditor', label: 'all_files' });
    };
    EditorTabComponent.prototype.selectFile = function (file) {
        var codeFile = _classes_file_tree__WEBPACK_IMPORTED_MODULE_5__["FileTree"].toCodeFile(file, this.configurationService.config.dirName);
        if (this.editorService.codeFiles.has(codeFile.file_path)) {
            codeFile = this.editorService.codeFiles.get(codeFile.file_path);
        }
        else {
            this.editorService.initCode(codeFile);
            this.editorService.codeFiles.set(codeFile.file_path, codeFile);
        }
        this.codeFile = codeFile;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EditorTabComponent.prototype, "expandTab", void 0);
    EditorTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prm-editor',
            template: __webpack_require__(/*! ./editor-tab.component.html */ "./www/editor-tab/editor-tab.component.html"),
            styles: [__webpack_require__(/*! ./editor-tab.component.scss */ "./www/editor-tab/editor-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [_editor_service__WEBPACK_IMPORTED_MODULE_1__["EditorService"],
            _utils_iframe_service__WEBPACK_IMPORTED_MODULE_2__["IframeService"],
            angulartics2_ga__WEBPACK_IMPORTED_MODULE_3__["Angulartics2GoogleAnalytics"],
            _utils_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"]])
    ], EditorTabComponent);
    return EditorTabComponent;
}());



/***/ }),

/***/ "./www/editor-tab/editor.service.ts":
/*!******************************************!*\
  !*** ./www/editor-tab/editor.service.ts ***!
  \******************************************/
/*! exports provided: EditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorService", function() { return EditorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/configuration.service */ "./www/utils/configuration.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _classes_code_file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/code-file */ "./www/classes/code-file.ts");
/* harmony import */ var _classes_file_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/file-tree */ "./www/classes/file-tree.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditorService = /** @class */ (function () {
    function EditorService(configurationService, $http) {
        this.configurationService = configurationService;
        this.$http = $http;
        this.getFiles();
        this._readonlyFilesRegex = /.*custom(?:1|\.module)?\.(?:css|js)/;
        this._css = new _classes_code_file__WEBPACK_IMPORTED_MODULE_3__["CodeFile"]('css', '', '\\css\\studio-editor.css', 0);
        this.codeFiles = new Map();
        this.codeFiles.set(this._css.file_path, this._css);
    }
    EditorService.prototype.getFiles = function () {
        var _this = this;
        this.files = new _classes_file_tree__WEBPACK_IMPORTED_MODULE_4__["FileTree"]();
        this.$http.get('/file-tree').subscribe(function (response) {
            _this.files = response;
            _this.files.children = _this.files.children.filter(function f(e) {
                if (e.type !== 'directory')
                    return true;
                if (e.name === 'js' || e.name === 'img' || e.name === 'html' || e.name === 'css')
                    return true;
                if (e.size) {
                    return (e.children = e.children.filter(f)).length;
                }
            });
        }, function () {
            console.log('failed to get all files from server');
        });
    };
    EditorService.prototype.initCode = function (fileJson) {
        var _this = this;
        this.$http.post('/code', fileJson, { responseType: 'text' }).subscribe(function (response) {
            fileJson.data = response;
            fileJson.version++;
            _this.codeFiles.set(fileJson.file_path, fileJson);
        }, function () {
            console.log('failed to get ' + fileJson.type + ' from server. file path: ' + fileJson.file_path);
        });
    };
    Object.defineProperty(EditorService.prototype, "config", {
        get: function () {
            return this.configurationService.config;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorService.prototype, "codeFiles", {
        get: function () {
            return this._codeFiles;
        },
        set: function (value) {
            this._codeFiles = value;
        },
        enumerable: true,
        configurable: true
    });
    EditorService.prototype.saveFile = function (fileJson) {
        return this.sendFilesToServer([fileJson]);
    };
    EditorService.prototype.createTheme = function () {
        return this.sendFilesToServer(Array.from(this.codeFiles.values()));
    };
    EditorService.prototype.sendFilesToServer = function (files) {
        var config = {
            data: {
                code: files
            },
            conf: this.config
        };
        return this.$http.put('/code', config);
    };
    EditorService.prototype.getDefaultCodeFile = function () {
        return this.codeFiles.get(this._css.file_path);
    };
    Object.defineProperty(EditorService.prototype, "readonlyFilesRegex", {
        get: function () {
            return this._readonlyFilesRegex;
        },
        set: function (value) {
            this._readonlyFilesRegex = value;
        },
        enumerable: true,
        configurable: true
    });
    EditorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_utils_configuration_service__WEBPACK_IMPORTED_MODULE_1__["ConfigurationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EditorService);
    return EditorService;
}());



/***/ }),

/***/ "./www/environments/environment.ts":
/*!*****************************************!*\
  !*** ./www/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    googleAnalytics: {
        domain: 'none',
        trackingId: 'UA-123598696-1'
    }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./www/feature-configuration-form/feature-configuration-form.component.html":
/*!**********************************************************************************!*\
  !*** ./www/feature-configuration-form/feature-configuration-form.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"feature-configuration-form\">\n  <mat-dialog-content>\n    <div class=\"form\" *ngFor=\"let fields of formFieldsArray; index as i\">\n      <button type=\"submit\" class=\"remove-button\" *ngIf=\"formFieldsArray.length > 1\" (click)=\"removeConfigItem(i)\">\n        <i *ngIf=\"!inProgress[addon.npmid]\" class=\"icon-remove\"></i>\n        Remove Item\n      </button>\n      <formly-form [model]=\"models[i]\" [fields]=\"fields\">\n      </formly-form>\n      <hr *ngIf=\"i+1 !== formFieldsArray.length\">\n    </div>\n  </mat-dialog-content>\n  <mat-dialog-actions class=\"content-row-column\">\n    <button class=\"content-row\" *ngIf=\"configItemCounter\" (click)=\"addConfigItem()\">\n      <i *ngIf=\"!inProgress[addon.npmid]\" class=\"icon-add\"></i>\n      Add Item\n    </button>\n    <hr *ngIf=\"configItemCounter\">\n    <span class=\"content-row\">\n      <button type=\"submit\" class=\"submit-button content-row-column\" (click)=\"submit()\">Submit</button>\n      <button class=\"content-row-column\" mat-dialog-close>Cancel</button>\n    </span>\n  </mat-dialog-actions>\n</div>\n"

/***/ }),

/***/ "./www/feature-configuration-form/feature-configuration-form.component.scss":
/*!**********************************************************************************!*\
  !*** ./www/feature-configuration-form/feature-configuration-form.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-dialog-container mat-dialog-container {\n  padding: 0;\n  background: #f0f0f0;\n  overflow: hidden; }\n\n.custom-dialog-container prm-feature-configuration-form .feature-configuration-form {\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  color: #444;\n  font-family: Helvetica, sans-serif;\n  font-size: 1.1em;\n  line-height: 1.5em;\n  margin: 0 auto;\n  padding: 1.2em 1em 1em;\n  position: relative; }\n\n.custom-dialog-container prm-feature-configuration-form .mat-form-field-wrapper {\n  padding-bottom: 0.2em; }\n\n.custom-dialog-container prm-feature-configuration-form .mat-form-field-label {\n  color: #444; }\n\n.custom-dialog-container prm-feature-configuration-form input[type=\"text\"] {\n  caret-color: currentColor;\n  font-family: Helvetica, sans-serif;\n  font-size: 1.1em;\n  line-height: 1.5em; }\n\n.custom-dialog-container prm-feature-configuration-form input[type=\"text\"]:active, .custom-dialog-container prm-feature-configuration-form input[type=\"text\"]:focus, .custom-dialog-container prm-feature-configuration-form .mat-form-field.mat-focused .mat-form-field-label {\n  background: #f0f0f0;\n  color: #444; }\n\n.custom-dialog-container prm-feature-configuration-form .mat-form-field.mat-focused .mat-form-field-ripple {\n  background: currentColor; }\n\n.custom-dialog-container prm-feature-configuration-form .mat-form-field-type-mat-select .mat-form-field-underline {\n  bottom: 15%; }\n\n.custom-dialog-container prm-feature-configuration-form .mat-form-field-subscript-wrapper {\n  position: relative; }\n\n.custom-dialog-container prm-feature-configuration-form .mat-checkbox-checked.mat-accent .mat-checkbox-background, .custom-dialog-container prm-feature-configuration-form .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background {\n  background-color: #444444; }\n\n.custom-dialog-container prm-feature-configuration-form .mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(87, 87, 87, 0.22); }\n\n.custom-dialog-container prm-feature-configuration-form mat-dialog-content {\n  max-height: 40vw;\n  margin: 0 -18px; }\n\n.custom-dialog-container prm-feature-configuration-form button {\n  display: block;\n  width: 130px;\n  margin: 0.6em 1em 1em;\n  -ms-grid-row-align: center;\n      align-self: center; }\n\n.custom-dialog-container prm-feature-configuration-form .remove-button {\n  width: 161px;\n  margin: 1em 0.5em 0.5em; }\n\n.custom-dialog-container prm-feature-configuration-form mat-dialog-actions hr {\n  width: -webkit-fill-available;\n  width: -moz-available;\n  width: strech;\n  border-color: #4441; }\n\n.custom-dialog-container prm-feature-configuration-form .content-row-column {\n  align-items: center; }\n"

/***/ }),

/***/ "./www/feature-configuration-form/feature-configuration-form.component.ts":
/*!********************************************************************************!*\
  !*** ./www/feature-configuration-form/feature-configuration-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: FeatureConfigurationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureConfigurationFormComponent", function() { return FeatureConfigurationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "../node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _classes_addon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/addon */ "./www/classes/addon.ts");
/* harmony import */ var _utils_features_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/features.service */ "./www/utils/features.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var FeatureConfigurationFormComponent = /** @class */ (function () {
    function FeatureConfigurationFormComponent(featuresService, dialogRef, addon) {
        this.featuresService = featuresService;
        this.dialogRef = dialogRef;
        this.addon = addon;
    }
    FeatureConfigurationFormComponent.prototype.ngOnInit = function () {
        this.configItemCounter = this.addon.config.multiple - 1 | 0; //we subtract 1 because of the first config item which appears by default
        this.models = [{}];
        var defaultFieldConf = {
            type: 'input',
            templateOptions: {
                type: 'text',
            }
        };
        this.formFields = this.addon.config.form.map(function (field) {
            var defaultField = Object(angular__WEBPACK_IMPORTED_MODULE_1__["copy"])(defaultFieldConf);
            defaultField.templateOptions['label'] = field['key'];
            if (field.type === 'select' && field.templateOptions && field.templateOptions.options) {
                field.templateOptions.options.forEach(function (option) {
                    option.label = option.label || option.name;
                });
            }
            return lodash_merge__WEBPACK_IMPORTED_MODULE_2__(defaultField, field); //extend default conf with field conf
        });
        this.formFieldsArray = [Object(angular__WEBPACK_IMPORTED_MODULE_1__["copy"])(this.formFields)];
    };
    FeatureConfigurationFormComponent.prototype.addConfigItem = function () {
        this.configItemCounter--;
        var newForm = Object(angular__WEBPACK_IMPORTED_MODULE_1__["copy"])(this.formFields);
        this.formFieldsArray.push(newForm);
        this.models.push({});
    };
    FeatureConfigurationFormComponent.prototype.removeConfigItem = function (formIndex) {
        this.configItemCounter++;
        this.formFieldsArray.splice(formIndex, 1);
        this.models.splice(formIndex, 1);
    };
    FeatureConfigurationFormComponent.prototype.submit = function () {
        this.dialogRef.close(this.models);
        console.log(this.models);
    };
    Object.defineProperty(FeatureConfigurationFormComponent.prototype, "inProgress", {
        get: function () {
            return this.featuresService.inProgress;
        },
        set: function (value) {
            this.featuresService.inProgress = value;
        },
        enumerable: true,
        configurable: true
    });
    FeatureConfigurationFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prm-feature-configuration-form',
            template: __webpack_require__(/*! ./feature-configuration-form.component.html */ "./www/feature-configuration-form/feature-configuration-form.component.html"),
            styles: [__webpack_require__(/*! ./feature-configuration-form.component.scss */ "./www/feature-configuration-form/feature-configuration-form.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_utils_features_service__WEBPACK_IMPORTED_MODULE_5__["FeaturesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _classes_addon__WEBPACK_IMPORTED_MODULE_4__["Addon"]])
    ], FeatureConfigurationFormComponent);
    return FeatureConfigurationFormComponent;
}());



/***/ }),

/***/ "./www/features-list/features-list.component.html":
/*!********************************************************!*\
  !*** ./www/features-list/features-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Features</h2>\n<p class=\"italics\">Add features and addons developed and maintained by the Primo community</p>\n\n<div class=\"content\">\n  <div class=\"filter-container\">\n    <input #term type=\"text\" placeholder=\"Filter Add-ons\" [value]=\"searchTerm\" (keyup)=\"setSearchTerm(term.value)\">\n    <select #filter (change)=\"setSelectedFilter(filter.value)\">\n      <option *ngFor=\"let field of filterOptions\" [value]=\"field.key\" [selected]=\"field.key === selectedFilterField\">{{field.displayName}}</option>\n    </select>\n  </div>\n\n  <div class=\"content-row content-item\" *ngFor=\"let addOn of getFilteredFeatures()\">\n\n    <div class=\"item-body\">\n      <h3 class=\"item-line\">{{addOn.what}}</h3>\n      <h4 class=\"item-line\" *ngIf=\"addOn.hook\">Hook: {{addOn.hook}}</h4>\n      <p class=\"item-line\" *ngIf=\"addOn.notes\">{{addOn.notes}}</p>\n      <div class=\"item-line\">\n        <span class=\"author-image\"><img [src]=\"addOn.face\" [alt]=\"addOn.who\" /></span>\n        <small class=\"author-name\">{{addOn.who}}</small>\n      </div>\n      <div class=\"item-actions\">\n        <small class=\"github-link\">\n          <a target=\"_blank\" [href]=\"addOn.linkGit\" title=\"see it on github\">\n            <i class=\"icon-github\"></i>\n            <span>View in Github</span>\n          </a>\n        </small>\n\n        <button class=\"is-small\" *ngIf=\"!isFeatureInstalled(addOn.npmid)\" (click)=\"selectFeature(addOn)\"\n                [disabled]=\"inProgress[addOn.npmid]\">\n          <i *ngIf=\"!inProgress[addOn.npmid]\" class=\"icon-add\"></i>\n          <prm-busy-spinner *ngIf=\"inProgress[addOn.npmid]\"></prm-busy-spinner>\n          Add\n        </button>\n        <button class=\"is-small\" *ngIf=\"isFeatureInstalled(addOn.npmid)\" (click)=\"removeFeature(addOn.npmid, addOn.hook)\"\n                [disabled]=\"inProgress[addOn.npmid]\">\n          <i *ngIf=\"!inProgress[addOn.npmid]\" class=\"icon-close\"></i>\n          <prm-busy-spinner *ngIf=\"inProgress[addOn.npmid]\"></prm-busy-spinner>\n          Remove\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./www/features-list/features-list.component.scss":
/*!********************************************************!*\
  !*** ./www/features-list/features-list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "prm-features-list img {\n  width: 50px;\n  height: 50px; }\n\nprm-features-list .filter-container {\n  padding-bottom: 20px;\n  display: flex;\n  flex-direction: row; }\n\nprm-features-list .filter-container select {\n    border-width: 0;\n    border-bottom-width: 1px;\n    border-color: #bbb;\n    padding-left: 0;\n    background: transparent;\n    border-left-width: 1px; }\n\nprm-features-list .content-row {\n  box-shadow: 0 1px 0 0 #dcdbdb, 0 3px 6px -5px rgba(0, 0, 0, 0.1);\n  padding-bottom: 1rem;\n  background-color: white;\n  padding: .65rem 1rem 1rem 1rem;\n  margin-left: -.5rem;\n  margin-right: -.5rem;\n  border-radius: 3px; }\n\nprm-features-list .content-row .item-body {\n    display: flex;\n    flex-direction: column;\n    width: 100%; }\n\nprm-features-list .content-row .item-line {\n    margin: 0;\n    display: flex;\n    align-items: center; }\n\nprm-features-list .content-row .item-actions {\n    justify-content: flex-end;\n    display: flex;\n    align-items: center; }\n\nprm-features-list .content-row .author-image {\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: .5rem; }\n\nprm-features-list .content-row .author-image img {\n      width: 100%;\n      height: auto; }\n\nprm-features-list .content-row .github-link {\n    margin-right: 1rem; }\n\nprm-features-list .content-row .github-link a {\n      color: inherit;\n      text-decoration: none; }\n"

/***/ }),

/***/ "./www/features-list/features-list.component.ts":
/*!******************************************************!*\
  !*** ./www/features-list/features-list.component.ts ***!
  \******************************************************/
/*! exports provided: FeaturesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesListComponent", function() { return FeaturesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_iframe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/iframe.service */ "./www/utils/iframe.service.ts");
/* harmony import */ var _utils_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/configuration.service */ "./www/utils/configuration.service.ts");
/* harmony import */ var _utils_features_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/features.service */ "./www/utils/features.service.ts");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _feature_configuration_form_feature_configuration_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../feature-configuration-form/feature-configuration-form.component */ "./www/feature-configuration-form/feature-configuration-form.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angulartics2_ga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angulartics2/ga */ "./node_modules/angulartics2/ga/fesm5/angulartics2-ga.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FeaturesListComponent = /** @class */ (function () {
    function FeaturesListComponent(featuresService, iframeService, ngDialog, overlay, configurationService, analytics) {
        this.featuresService = featuresService;
        this.iframeService = iframeService;
        this.ngDialog = ngDialog;
        this.overlay = overlay;
        this.configurationService = configurationService;
        this.analytics = analytics;
        this.features = [];
        this.filteredFeatures = [];
        this.analytics.pageTrack('/');
        this.selectedFilterField = 'all';
        this.searchTerm = '';
        this.filterOptions = [{ key: 'all', displayName: 'All' }, { key: 'what', displayName: 'Title' }, { key: 'hook', displayName: 'Hook' }, { key: 'who', displayName: 'Contributor' }];
    }
    FeaturesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filerPredicateBinded = this.filterPredicate.bind(this);
        this.featuresService.fetchFeaturesData().subscribe(function (data) {
            _this.features = data;
            _this.features = lodash_filter__WEBPACK_IMPORTED_MODULE_4__(_this.features, function (feature) {
                if (feature.systemExclusive) {
                    if (_this.configurationService.config.ve) {
                        return feature.systemExclusive.toLowerCase() === "ve";
                    }
                    else {
                        return feature.systemExclusive.toLowerCase() === "primo";
                    }
                }
                else {
                    return true;
                }
            });
            _this.filterFeatures();
        });
    };
    FeaturesListComponent.prototype.notifyFilterChanged = function () {
        this.filterFeatures();
        this.analytics.eventTrack('filterChange', { category: 'Addons', label: this.selectedFilterField + " - " + this.searchTerm });
    };
    FeaturesListComponent.prototype.selectFeature = function (addOn) {
        if (addOn.config) {
            var addOnConfigFromSubmitCallback_1 = this.addFeature.bind(this, addOn);
            var dialogOptions = this.ngDialog.open(_feature_configuration_form_feature_configuration_form_component__WEBPACK_IMPORTED_MODULE_5__["FeatureConfigurationFormComponent"], {
                data: addOn,
                scrollStrategy: this.overlay.scrollStrategies.reposition(),
                height: "fit-content",
                width: "450px",
                panelClass: "custom-dialog-container"
            });
            dialogOptions.afterClosed().subscribe(function (formData) {
                if (formData) {
                    addOnConfigFromSubmitCallback_1(formData);
                }
            });
        }
        else {
            this.addFeature(addOn);
        }
    };
    FeaturesListComponent.prototype.addFeature = function (addOn, featureConfigData) {
        var _this = this;
        var npmid = addOn.npmid;
        this.inProgress[npmid] = true;
        this.featuresService.addFeature(addOn, featureConfigData).subscribe(function () {
            _this.inProgress[npmid] = false;
            _this.iframeService.refreshNuiIFrame();
        }, function () {
            _this.inProgress[npmid] = false;
        });
        this.analytics.eventTrack('addFeature', { category: 'Addons', label: addOn.npmid + " - " + featureConfigData });
    };
    FeaturesListComponent.prototype.removeFeature = function (npmid, hook) {
        var _this = this;
        this.inProgress[npmid] = true;
        this.featuresService.removeFeature(npmid, hook).subscribe(function () {
            _this.inProgress[npmid] = false;
            _this.iframeService.refreshNuiIFrame();
        }, function () {
            _this.inProgress[npmid] = false;
        });
        this.analytics.eventTrack('removeFeature', { category: 'Addons', label: npmid });
    };
    FeaturesListComponent.prototype.filterFeatures = function () {
        this.filteredFeatures = this.features.filter(this.filerPredicateBinded);
    };
    FeaturesListComponent.prototype.getFilteredFeatures = function () {
        return this.filteredFeatures;
    };
    FeaturesListComponent.prototype.isFeatureInstalled = function (npmid) {
        return this.configurationService.config.installedFeatures.indexOf(npmid) > -1;
    };
    FeaturesListComponent.prototype.filterPredicate = function (value) {
        if (!this.searchTerm) {
            return true;
        }
        var filterTerm = this.searchTerm.toLowerCase();
        var fieldsToFilterBy = this.selectedFilterField === 'all' ? this.filterOptions.map(function (value) { return value.key; }) : [this.selectedFilterField];
        for (var _i = 0, fieldsToFilterBy_1 = fieldsToFilterBy; _i < fieldsToFilterBy_1.length; _i++) {
            var field = fieldsToFilterBy_1[_i];
            if (!value[field]) {
                continue;
            }
            if (value[field].toLowerCase().indexOf(filterTerm) > -1) {
                return true;
            }
        }
        return false;
    };
    FeaturesListComponent.prototype.setSearchTerm = function (value) {
        this.searchTerm = value;
        this.notifyFilterChanged();
    };
    FeaturesListComponent.prototype.setSelectedFilter = function (value) {
        this.selectedFilterField = value;
        this.notifyFilterChanged();
    };
    Object.defineProperty(FeaturesListComponent.prototype, "inProgress", {
        get: function () {
            return this.featuresService.inProgress;
        },
        set: function (value) {
            this.featuresService.inProgress = value;
        },
        enumerable: true,
        configurable: true
    });
    FeaturesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prm-features-list',
            template: __webpack_require__(/*! ./features-list.component.html */ "./www/features-list/features-list.component.html"),
            styles: [__webpack_require__(/*! ./features-list.component.scss */ "./www/features-list/features-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_utils_features_service__WEBPACK_IMPORTED_MODULE_3__["FeaturesService"],
            _utils_iframe_service__WEBPACK_IMPORTED_MODULE_1__["IframeService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Overlay"],
            _utils_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"],
            angulartics2_ga__WEBPACK_IMPORTED_MODULE_7__["Angulartics2GoogleAnalytics"]])
    ], FeaturesListComponent);
    return FeaturesListComponent;
}());



/***/ }),

/***/ "./www/file-tree/file-tree.component.html":
/*!************************************************!*\
  !*** ./www/file-tree/file-tree.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <h4>\n    <span *ngFor=\"let pathComp of (root.path | splitPath | sliceCustomizationPath)\"><a (click)=\"setRoot(pathComp)\">{{(pathComp === userId)?view:pathComp}}</a>\\</span>{{(root.name === userId)?view:root.name}}\n  </h4>\n  <div *ngFor=\"let file of root.children\">\n    <div class=\"directory-content\" *ngIf=\"isDirectory(file)\" (click)=\"openDirectory(file)\">\n      <i class=\"icon-directory\"></i>\n      {{file.name}}\\\n    </div>\n    <div class=\"file-content\" *ngIf=\"!isDirectory(file)\" (click)=\"openFile(file)\">\n      <i class=\"icon-file\"></i>\n      {{file.name}}\n      <span class=\"read-only-comment\" *ngIf=\"isReadonly(file)\">- READ ONLY</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./www/file-tree/file-tree.component.scss":
/*!************************************************!*\
  !*** ./www/file-tree/file-tree.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "prm-file-tree .content {\n  background-color: rgba(232, 232, 232, 0.74);\n  margin-bottom: 16px;\n  padding: 6px; }\n\nprm-file-tree h4 {\n  color: #006aad;\n  margin-bottom: 16px;\n  margin-top: 6px; }\n\nprm-file-tree h4 a {\n    cursor: pointer;\n    text-decoration: underline;\n    text-underline-position: under; }\n\nprm-file-tree .directory-content, prm-file-tree .file-content {\n  color: #0086d9; }\n\nprm-file-tree .directory-content:hover, prm-file-tree .file-content:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  text-underline-position: under; }\n\nprm-file-tree .read-only-comment {\n  cursor: auto;\n  color: red;\n  font-style: oblique;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./www/file-tree/file-tree.component.ts":
/*!**********************************************!*\
  !*** ./www/file-tree/file-tree.component.ts ***!
  \**********************************************/
/*! exports provided: FileTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTreeComponent", function() { return FileTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_file_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/file-tree */ "./www/classes/file-tree.ts");
/* harmony import */ var _utils_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/configuration.service */ "./www/utils/configuration.service.ts");
/* harmony import */ var _editor_tab_editor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editor-tab/editor.service */ "./www/editor-tab/editor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileTreeComponent = /** @class */ (function () {
    function FileTreeComponent(configurationService, editorService) {
        this.configurationService = configurationService;
        this.editorService = editorService;
        this.fileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.root = { path: '', name: '', size: 0, type: "directory" };
    }
    FileTreeComponent.prototype.ngOnInit = function () {
        this.root = this.baseDir;
    };
    Object.defineProperty(FileTreeComponent.prototype, "baseDir", {
        get: function () {
            return this._baseDir;
        },
        set: function (file) {
            this._baseDir = file;
            this.root = file;
        },
        enumerable: true,
        configurable: true
    });
    FileTreeComponent.prototype.isDirectory = function (file) {
        return file.type === 'directory';
    };
    FileTreeComponent.prototype.openDirectory = function (file) {
        this.root = file;
    };
    FileTreeComponent.prototype.openFile = function (file) {
        this.fileSelected.emit(file);
    };
    FileTreeComponent.prototype.setRoot = function (pathComp, root) {
        var _this = this;
        if (root === void 0) { root = this.baseDir; }
        if (root.name === pathComp) {
            this.root = root;
        }
        else {
            if (root.children && root.children.length > 0) {
                root.children.forEach(function (node) { return _this.setRoot(pathComp, node); });
            }
        }
    };
    FileTreeComponent.prototype.isReadonly = function (file) {
        return this.editorService.readonlyFilesRegex.test(file.path);
    };
    Object.defineProperty(FileTreeComponent.prototype, "userId", {
        get: function () {
            return this.configurationService.config.dirName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileTreeComponent.prototype, "view", {
        get: function () {
            return this.configurationService.config.view;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FileTreeComponent.prototype, "fileSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _classes_file_tree__WEBPACK_IMPORTED_MODULE_1__["FileTree"]),
        __metadata("design:paramtypes", [_classes_file_tree__WEBPACK_IMPORTED_MODULE_1__["FileTree"]])
    ], FileTreeComponent.prototype, "baseDir", null);
    FileTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prm-file-tree',
            template: __webpack_require__(/*! ./file-tree.component.html */ "./www/file-tree/file-tree.component.html"),
            styles: [__webpack_require__(/*! ./file-tree.component.scss */ "./www/file-tree/file-tree.component.scss")]
        }),
        __metadata("design:paramtypes", [_utils_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"],
            _editor_tab_editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"]])
    ], FileTreeComponent);
    return FileTreeComponent;
}());



/***/ }),

/***/ "./www/file-tree/slice-customization-path.pipe.ts":
/*!********************************************************!*\
  !*** ./www/file-tree/slice-customization-path.pipe.ts ***!
  \********************************************************/
/*! exports provided: SliceCustomizationPathPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliceCustomizationPathPipe", function() { return SliceCustomizationPathPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SliceCustomizationPathPipe = /** @class */ (function () {
    function SliceCustomizationPathPipe() {
    }
    SliceCustomizationPathPipe.prototype.transform = function (path) {
        if (path) {
            return path.slice(2, path.length - 1);
        }
        else {
            return null;
        }
    };
    SliceCustomizationPathPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sliceCustomizationPath'
        })
    ], SliceCustomizationPathPipe);
    return SliceCustomizationPathPipe;
}());



/***/ }),

/***/ "./www/file-tree/split-path.pipe.ts":
/*!******************************************!*\
  !*** ./www/file-tree/split-path.pipe.ts ***!
  \******************************************/
/*! exports provided: SplitPathPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitPathPipe", function() { return SplitPathPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SplitPathPipe = /** @class */ (function () {
    function SplitPathPipe() {
    }
    SplitPathPipe.prototype.transform = function (value) {
        if (value) {
            return value.split(/[\/\\]/g);
        }
        else {
            return null;
        }
    };
    SplitPathPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'splitPath'
        })
    ], SplitPathPipe);
    return SplitPathPipe;
}());



/***/ }),

/***/ "./www/main.ts":
/*!*********************!*\
  !*** ./www/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.module */ "./www/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./www/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./www/server/server.component.html":
/*!******************************************!*\
  !*** ./www/server/server.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-wrapper\">\n\n  <prm-configuration-form [class.is-running]=\"isUp()\" [class.is-floating]=\"isUp() && sidenavCollapsed\"></prm-configuration-form>\n\n  <aside class=\"app-sidenav\" *ngIf=\"isUp()\" [class.is-collapsed]=\"sidenavCollapsed\" [class.is-tab-expanded]=\"!sidenavCollapsed && expandTab\">\n    <div class=\"sidenav-title\">\n      <img src=\"../images/Exlibris_ProQuest-logo.png\" alt=\"\" *ngIf=\"!sidenavCollapsed\" >\n      <span *ngIf=\"!sidenavCollapsed\" >{{appTitle}}</span>\n      <span class=\"flex\"></span>\n      <button class=\"menu-button\" (click)=\"toggleSidenav()\">\n        <i class=\"icon-chevrons-left\" [class.is-rotated]=\"sidenavCollapsed\"></i>\n      </button>\n    </div>\n    <div class=\"sidenav-main\">\n      <div class=\"sidenav-nav\">\n        <ul>\n          <li *ngFor=\" let tab of tabs\" title=\"{{tab.name}}\" (click)=\"selectTab(tab.name)\" [class.is-selected]=\"tab.name == selectedTab\">\n            <i class=\"icon-{{tab.icon}}\"></i>\n            <span class=\"label\">{{tab.name}}</span>\n          </li>\n        </ul>\n      </div>\n      <div class=\"sidenav-content fade-in-out-animation\" *ngIf=\"!sidenavCollapsed\">\n        <prm-color-theme *ngIf=\"selectedTab == 'Theme'\" class=\"sidenav-panel\"></prm-color-theme>\n        <prm-edit-images *ngIf=\"selectedTab == 'Images'\" class=\"sidenav-panel\"></prm-edit-images>\n        <!--<prm-icons-picker *ngIf=\"selectedTab == 'Icons'\" class=\"sidenav-panel\"></prm-icons-picker>-->\n        <prm-features-list *ngIf=\"selectedTab == 'Addons'\" class=\"sidenav-panel\"></prm-features-list>\n        <prm-editor (expandTab)=\"onExpandTab($event)\" *ngIf=\"selectedTab === 'Editor'\" class=\"sidenav-panel\"></prm-editor>\n        <prm-download-package *ngIf=\"selectedTab == 'Download'\" class=\"sidenav-panel\"></prm-download-package>\n        <prm-upload-package *ngIf=\"selectedTab == 'UploadPackage'\" class=\"sidenav-panel\"></prm-upload-package>\n      </div>\n    </div>\n  </aside>\n  <main class=\"app-stage\" *ngIf=\"isUp()\">\n    <iframe id=\"primo-explore-iframe\" class=\"app-iframe\" *oneTimeBinding [src]=\"getIframeUrl()\"></iframe>\n  </main>\n\n</div>\n"

/***/ }),

/***/ "./www/server/server.component.scss":
/*!******************************************!*\
  !*** ./www/server/server.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  height: 100%;\n  background: #f5f5f5;\n  overflow: hidden; }\n\nbody {\n  margin: 0; }\n\n.app-wrapper, .app-init {\n  height: 100%;\n  display: flex; }\n\n.app-wrapper {\n  align-items: stretch;\n  justify-content: center; }\n\n.app-wrapper:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    opacity: .5;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAJUlEQVQYV2NkYGAwZoCAs1AaTDHik0BWCGeDdCADuLFES8B1AwBREgQHBcQKVAAAAABJRU5ErkJggg==); }\n\n.app-sidenav {\n  position: relative;\n  width: 400px;\n  box-shadow: -2px 0 10px 0 rgba(0, 0, 0, 0.3);\n  z-index: 3;\n  background-color: #f5f5f5;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  transition: width 0.4s cubic-bezier(0.86, 0, 0.07, 1); }\n\n@media screen and (min-width: 1280px) {\n    .app-sidenav {\n      width: 515px; } }\n\n.app-sidenav.ng-enter {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    transition: -webkit-transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.5s cubic-bezier(0.23, 1, 0.32, 1); }\n\n.app-sidenav.ng-enter.ng-enter-active {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); }\n\n.app-sidenav.ng-leave {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    transition: -webkit-transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);\n    transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);\n    transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 0.5s cubic-bezier(0.86, 0, 0.07, 1); }\n\n.app-sidenav.ng-leave.ng-leave-active {\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%); }\n\n.app-sidenav.is-collapsed {\n    width: 61px;\n    transition-duration: 0s; }\n\n.app-sidenav.is-collapsed .menu-button {\n      margin-left: -.5rem; }\n\n.app-sidenav.is-collapsed-remove.is-collapsed-remove-active {\n    transition: none; }\n\n.app-sidenav.is-tab-expanded {\n    width: 1065px; }\n\n.app-sidenav .menu-button {\n    background: none;\n    box-shadow: none;\n    margin-top: -1rem;\n    margin-bottom: -1rem; }\n\n.app-sidenav .menu-button [class^=\"icon-\"] {\n      margin: 0;\n      transition: -webkit-transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);\n      transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);\n      transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 0.5s cubic-bezier(0.86, 0, 0.07, 1); }\n\n.app-sidenav .menu-button [class^=\"icon-\"].is-rotated {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg); }\n\n.app-sidenav .sidenav-title {\n    height: 62px;\n    padding: 1rem;\n    background-color: #e8e8e8;\n    box-shadow: inset 0 -1px #dcdbdb;\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n    box-sizing: border-box; }\n\n.app-sidenav .sidenav-title span {\n      text-transform: uppercase;\n      letter-spacing: 0.15rem;\n      font-weight: 700;\n      font-size: .85rem;\n      opacity: .7;\n      white-space: nowrap; }\n\n.app-sidenav .sidenav-title img {\n      width: 65px;\n      margin-right: 1rem; }\n\n.app-sidenav .sidenav-main {\n    display: flex;\n    height: 100%; }\n\n.app-sidenav .sidenav-nav {\n    background-color: #e8e8e8;\n    border-right: 1px solid #dcdbdb; }\n\n.app-sidenav .sidenav-nav li {\n      cursor: pointer; }\n\n.app-sidenav .sidenav-content {\n    margin-bottom: 80px;\n    overflow: auto;\n    width: 100%;\n    display: block; }\n\n.app-sidenav .sidenav-panel {\n    padding: 1.5rem;\n    padding-left: 2rem;\n    box-sizing: border-box;\n    height: 100%;\n    width: 100%;\n    display: block; }\n\n.app-sidenav .sidenav-panel h2 {\n      margin-bottom: 1rem;\n      font-size: 1.5rem;\n      margin-top: -.5rem;\n      color: #469abb; }\n\n.app-sidenav .sidenav-panel h2 + p {\n        margin-top: 0;\n        margin-bottom: 1.5rem; }\n\n@media screen and (min-width: 1280px) {\n        .app-sidenav .sidenav-panel h2 {\n          display: none; } }\n\n.app-sidenav ul {\n    list-style: none; }\n\n.app-sidenav li {\n    width: 60px;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 2rem;\n    box-sizing: border-box;\n    border-bottom: 1px solid #dcdbdb; }\n\n.app-sidenav li.is-selected {\n      color: #469abb;\n      background-color: #f5f5f5;\n      box-shadow: 5px 0 0 0 #f5f5f5, inset 5px 0 0 #469abb, 0 -3px 10px -2px rgba(0, 0, 0, 0.1), 0 3px 10px -2px rgba(0, 0, 0, 0.1); }\n\n.app-sidenav li .label {\n      font-size: 1rem;\n      margin-left: 1rem;\n      font-size: 1rem;\n      display: none;\n      font-weight: 600; }\n\n@media screen and (min-width: 1280px) {\n      .app-sidenav li {\n        width: auto;\n        justify-content: flex-start;\n        font-size: 1.5rem;\n        padding-left: 1rem;\n        padding-right: 1rem; }\n        .app-sidenav li .label {\n          display: inline-flex; } }\n\n.app-sidenav.is-collapsed li.is-selected {\n    box-shadow: inset 5px 0 0 #469abb, 0 -3px 10px -2px rgba(0, 0, 0, 0.1), 0 3px 10px -2px rgba(0, 0, 0, 0.1); }\n\n@media screen and (min-width: 1280px) {\n    .app-sidenav.is-collapsed li {\n      width: 60px;\n      justify-content: center;\n      font-size: 2rem;\n      padding: 0; }\n      .app-sidenav.is-collapsed li .label {\n        display: none; } }\n\n.app-stage {\n  flex: 1;\n  align-items: stretch;\n  position: relative; }\n\n.app-stage.ng-leave {\n    opacity: 1;\n    transition: opacity .5s ease; }\n\n.app-stage.ng-leave.ng-leave-active {\n      opacity: 0; }\n\n.app-iframe {\n  border: none;\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n  position: relative; }\n\n.content {\n  margin-bottom: 2rem; }\n\n.content-row, .content-row-column {\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center; }\n\n.content-row-column {\n  flex-direction: column;\n  align-items: flex-start; }\n\n.input-wrapper {\n  display: flex;\n  align-items: center; }\n\n.input-wrapper label {\n    flex: 1 0 0;\n    font-weight: 600; }\n\n.input-wrapper input[type=\"text\"] {\n    flex: 2 1 auto; }\n\n.server-on {\n  display: inline-flex; }\n\n.server-on:before, .server-on:after {\n    border-radius: 50%; }\n\n.server-on:before {\n    content: '';\n    width: 10px;\n    height: 10px;\n    background-color: #50922d; }\n\n.server-on:after {\n    content: '';\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    background-color: #74a70b;\n    opacity: 0;\n    -webkit-animation: pulsate 2s 1s cubic-bezier(0.23, 1, 0.32, 1) infinite;\n            animation: pulsate 2s 1s cubic-bezier(0.23, 1, 0.32, 1) infinite; }\n\n@-webkit-keyframes pulsate {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(2.5);\n            transform: scale(2.5);\n    opacity: 0; } }\n\n@keyframes pulsate {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(2.5);\n            transform: scale(2.5);\n    opacity: 0; } }\n\n.fade-in-out-animation.ng-enter {\n  opacity: 0;\n  transition: opacity .3s ease; }\n\n.fade-in-out-animation.ng-enter.ng-enter-active {\n    opacity: 1; }\n\n.fade-in-out-animation.ng-leave {\n  opacity: 1;\n  transition: opacity .15s ease; }\n\n.fade-in-out-animation.ng-leave.ng-leave-active {\n    opacity: 0; }\n"

/***/ }),

/***/ "./www/server/server.component.ts":
/*!****************************************!*\
  !*** ./www/server/server.component.ts ***!
  \****************************************/
/*! exports provided: ServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerComponent", function() { return ServerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utils_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/configuration.service */ "./www/utils/configuration.service.ts");
/* harmony import */ var _utils_iframe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/iframe.service */ "./www/utils/iframe.service.ts");
/* harmony import */ var angulartics2_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angulartics2/ga */ "./node_modules/angulartics2/ga/fesm5/angulartics2-ga.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServerComponent = /** @class */ (function () {
    function ServerComponent($http, configurationService, iframeService, analytics) {
        this.$http = $http;
        this.configurationService = configurationService;
        this.iframeService = iframeService;
        this.analytics = analytics;
    }
    ServerComponent.prototype.ngOnInit = function () {
        console.log('constructor running');
        this.analytics.pageTrack(window.location.href);
        this.tabs = [
            { name: 'Theme', icon: 'palette' },
            { name: 'Images', icon: 'image' },
            // { name: 'Icons', icon: 'image' },
            { name: 'Addons', icon: 'gift' },
            { name: 'Editor', icon: 'curly_brackets' },
            { name: 'Download', icon: 'cloud_download' },
            { name: 'UploadPackage', icon: 'cloud_upload' }
        ];
        this.selectedTab = 'Theme';
        this.sidenavCollapsed = false;
        this.sidenavAnimating = false;
        this.expandTab = false;
    };
    Object.defineProperty(ServerComponent.prototype, "appTitle", {
        get: function () {
            return 'Primo Studio';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerComponent.prototype, "config", {
        get: function () {
            return this.configurationService.config;
        },
        enumerable: true,
        configurable: true
    });
    ServerComponent.prototype.isUp = function () {
        return this.iframeService.isUp();
    };
    ServerComponent.prototype.getIframeUrl = function () {
        return this.iframeService.getIframeUrl();
    };
    ServerComponent.prototype.restart = function () {
        var _this = this;
        var config = { params: this.configurationService.config };
        this.$http.get('/restart', config).subscribe(function () {
            _this.iframeService.refreshNuiIFrame();
        });
        this.analytics.pageTrack("/");
    };
    ServerComponent.prototype.selectTab = function (tab) {
        this.selectedTab = tab;
        if (this.sidenavCollapsed) {
            this.sidenavCollapsed = false;
        }
        this.analytics.eventTrack('change', { category: 'tabs', label: tab });
    };
    ServerComponent.prototype.toggleSidenav = function () {
        this.sidenavCollapsed = !this.sidenavCollapsed;
    };
    ServerComponent.prototype.onExpandTab = function ($event) {
        this.expandTab = $event;
    };
    ServerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prm-server',
            template: __webpack_require__(/*! ./server.component.html */ "./www/server/server.component.html"),
            styles: [__webpack_require__(/*! ./server.component.scss */ "./www/server/server.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _utils_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"],
            _utils_iframe_service__WEBPACK_IMPORTED_MODULE_3__["IframeService"],
            angulartics2_ga__WEBPACK_IMPORTED_MODULE_4__["Angulartics2GoogleAnalytics"]])
    ], ServerComponent);
    return ServerComponent;
}());



/***/ }),

/***/ "./www/upload-package/upload-package.component.html":
/*!**********************************************************!*\
  !*** ./www/upload-package/upload-package.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Upload Package</h2>\r\n<p class=\"italics\">Upload package zip file to continue working from existing package</p>\r\n\r\n<div class=\"content\">\r\n\r\n    <div class=\"content-row-column\">\r\n        <!--<span class=\"top-label\">Package:</span>-->\r\n        <input  type=\"file\"\r\n                name=\"upload-package\"\r\n                id=\"upload-package\"\r\n                class=\"inputfile\"\r\n                (change)=\"setPackage($event.target.files)\"\r\n                accept=\".zip\"/>\r\n        <label for=\"upload-package\" id=\"label-for-upload-package\">\r\n            <span>Choose package</span>\r\n        </label>\r\n    </div>\r\n\r\n    <button id=\"button-upload-package\"\r\n            class=\"accent\"\r\n            (click)=\"uploadPackage()\"\r\n            [disabled]=\"uploadDisabled\">\r\n        <i class=\"icon-cloud_upload\"></i>\r\n        <span>Upload package</span>\r\n    </button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./www/upload-package/upload-package.component.scss":
/*!**********************************************************!*\
  !*** ./www/upload-package/upload-package.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./www/upload-package/upload-package.component.ts":
/*!********************************************************!*\
  !*** ./www/upload-package/upload-package.component.ts ***!
  \********************************************************/
/*! exports provided: UploadPackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPackageComponent", function() { return UploadPackageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_file_uploader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/file-uploader.service */ "./www/utils/file-uploader.service.ts");
/* harmony import */ var _utils_iframe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/iframe.service */ "./www/utils/iframe.service.ts");
/* harmony import */ var angulartics2_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angulartics2/ga */ "./node_modules/angulartics2/ga/fesm5/angulartics2-ga.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadPackageComponent = /** @class */ (function () {
    function UploadPackageComponent(fileUploaderService, iframeService, analytics) {
        this.fileUploaderService = fileUploaderService;
        this.iframeService = iframeService;
        this.analytics = analytics;
        this.analytics.pageTrack('/');
        this.uploadDisabled = true;
    }
    UploadPackageComponent.prototype.setPackage = function (files) {
        this.package = { 'package': files };
        if (files.length > 0) {
            this.uploadDisabled = false;
            this.analytics.eventTrack('setPackage', { category: 'UploadPackage', label: files[0].name });
        }
    };
    UploadPackageComponent.prototype.uploadPackage = function () {
        var _this = this;
        this.fileUploaderService.uploadFiles('/package', this.package).subscribe(function () {
            console.log('package uploaded successfully');
            //this.iframeService.refreshNuiIFrame();
            location.reload();
            _this.uploadDisabled = true;
        }, function (err) {
            console.log('failed to upload package: ' + err.data);
        });
        this.analytics.eventTrack('uploadPackage', { category: 'UploadPackage', label: this.package['package'][0].name });
    };
    UploadPackageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prm-upload-package',
            template: __webpack_require__(/*! ./upload-package.component.html */ "./www/upload-package/upload-package.component.html"),
            styles: [__webpack_require__(/*! ./upload-package.component.scss */ "./www/upload-package/upload-package.component.scss")]
        }),
        __metadata("design:paramtypes", [_utils_file_uploader_service__WEBPACK_IMPORTED_MODULE_1__["FileUploaderService"],
            _utils_iframe_service__WEBPACK_IMPORTED_MODULE_2__["IframeService"],
            angulartics2_ga__WEBPACK_IMPORTED_MODULE_3__["Angulartics2GoogleAnalytics"]])
    ], UploadPackageComponent);
    return UploadPackageComponent;
}());



/***/ }),

/***/ "./www/utils/configuration.service.ts":
/*!********************************************!*\
  !*** ./www/utils/configuration.service.ts ***!
  \********************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js");
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConfigurationService = /** @class */ (function () {
    function ConfigurationService($http, route, router) {
        this.$http = $http;
        this.route = route;
        this.router = router;
        this.$cookies = new ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"](window.document);
        var params = this.route.snapshot.queryParams;
        var url = params['url'] || 'https://primo-demo.hosted.exlibrisgroup.com:443';
        var view = params['vid'] || 'NORTH';
        var isVe = params['ve'] || 'false';
        var useCentral = params['central'] || 'false';
        var dirName = params['dirName'];
        this._config = {
            'view': view,
            'url': url,
            'dirName': dirName,
            've': isVe,
            'useCentral': useCentral,
            installedFeatures: []
        };
    }
    ConfigurationService.prototype.start = function () {
        var _this = this;
        var config = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: this.config }) };
        this.$cookies.set('urlForProxy', this.config.url);
        this.$cookies.set('viewForProxy', this.config.view);
        this.$cookies.set('ve', this.config.ve);
        this.$cookies.set('useCentral', this.config.useCentral);
        this.$cookies.set('dirName', this.config.dirName ? this.config.dirName : '');
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
            _this.$http.get('/start', config).subscribe(function (resp) {
                if (+resp.status === 200) {
                    var dirName = resp.dirName;
                    _this.config.dirName = dirName;
                    _this.$cookies.set('dirName', dirName);
                    var searchParams_1 = Object.assign({}, _this.route.snapshot.queryParams);
                    lodash_forEach__WEBPACK_IMPORTED_MODULE_3__({
                        'dirName': dirName,
                        'url': _this.config.url,
                        'vid': _this.config.view,
                        've': _this.config.ve,
                        'central': _this.config.useCentral
                    }, function (value, key) {
                        searchParams_1[key] = value;
                    });
                    _this.router.navigate(['.'], { queryParams: searchParams_1 });
                    _this.config.installedFeatures = resp.installedFeatures;
                    console.log('created new directory: ' + _this.config.dirName);
                }
                observer.next(resp);
                observer.complete();
            });
        });
    };
    Object.defineProperty(ConfigurationService.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (config) {
            this._config = config;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigurationService.prototype, "isVe", {
        get: function () {
            return this.config.ve === 'true';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigurationService.prototype, "isUsingCentralPackage", {
        get: function () {
            return this.config.useCentral === 'true';
        },
        enumerable: true,
        configurable: true
    });
    ConfigurationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ "./www/utils/features.service.ts":
/*!***************************************!*\
  !*** ./www/utils/features.service.ts ***!
  \***************************************/
/*! exports provided: FeaturesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesService", function() { return FeaturesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration.service */ "./www/utils/configuration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeaturesService = /** @class */ (function () {
    function FeaturesService($http, configurationService, route) {
        this.$http = $http;
        this.configurationService = configurationService;
        this.route = route;
        this._inProgress = {};
        var queryParams = this.route.snapshot.queryParams;
        var featuresJSONBranch = queryParams['branch'] || 'master';
        this.featuresJsonURL = 'https://raw.githubusercontent.com/primousers/primostudio/' + featuresJSONBranch + '/features.json';
    }
    FeaturesService.prototype.fetchFeaturesData = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this.$http.get(_this.featuresJsonURL).subscribe(function (data) {
                observer.next(data);
                observer.complete();
            }, function (err) {
                console.log('oops something went wrong while fetching features data: ' + err);
            });
        });
    };
    FeaturesService.prototype.addFeature = function (addOn, featureConfigData) {
        var _this = this;
        var npmid = addOn.npmid;
        var version = addOn.version;
        var hook = addOn.hook;
        console.log('adding feature with npm id: ' + npmid);
        var config = {
            data: {
                id: npmid,
                version: version,
                hook: hook,
            }
        };
        if (featureConfigData) {
            config['data']['featureConfig'] = featureConfigData;
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this.$http.post('/feature', config).subscribe(function (resp) {
                console.log('feature installed');
                _this.configurationService.config.installedFeatures.push(npmid);
                observer.next(resp);
                observer.complete();
            }, function (err) {
                console.log('something went wrong when installing feature:' + err.message);
            });
        });
    };
    FeaturesService.prototype.removeFeature = function (npmid, hook) {
        var _this = this;
        console.log('uninstalling feature with npm id: ' + npmid);
        var config = this.configurationService.config;
        config['id'] = npmid;
        config['hook'] = hook;
        var data = { params: config };
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this.$http.get('/remove_feature', data).subscribe(function (resp) {
                console.log('feature uninstalled');
                var index = _this.configurationService.config.installedFeatures.indexOf(npmid);
                if (index !== -1) {
                    _this.configurationService.config.installedFeatures.splice(index, 1);
                }
                observer.next(resp);
                observer.complete();
            }, function (err) {
                console.log('something went wrong when uninstalling feature:' + err.message);
            });
        });
    };
    Object.defineProperty(FeaturesService.prototype, "inProgress", {
        get: function () {
            return this._inProgress;
        },
        set: function (value) {
            this._inProgress = value;
        },
        enumerable: true,
        configurable: true
    });
    FeaturesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FeaturesService);
    return FeaturesService;
}());



/***/ }),

/***/ "./www/utils/file-uploader.service.ts":
/*!********************************************!*\
  !*** ./www/utils/file-uploader.service.ts ***!
  \********************************************/
/*! exports provided: FileUploaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploaderService", function() { return FileUploaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileUploaderService = /** @class */ (function () {
    function FileUploaderService($http) {
        this.$http = $http;
    }
    FileUploaderService.prototype.uploadFiles = function (uploadUrl, filesMap) {
        var fd = new FormData();
        for (var key in filesMap) {
            for (var _i = 0, _a = filesMap[key]; _i < _a.length; _i++) {
                var file = _a[_i];
                fd.append(key, file);
            }
        }
        return this.$http.post(uploadUrl, fd, {
            withCredentials: true
        });
    };
    FileUploaderService.prototype.removeFiles = function (removeUrl) {
        return this.$http.delete(removeUrl);
    };
    FileUploaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FileUploaderService);
    return FileUploaderService;
}());



/***/ }),

/***/ "./www/utils/iframe.service.ts":
/*!*************************************!*\
  !*** ./www/utils/iframe.service.ts ***!
  \*************************************/
/*! exports provided: IframeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeService", function() { return IframeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration.service */ "./www/utils/configuration.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IframeService = /** @class */ (function () {
    function IframeService(configurationService, sanitizer) {
        this.configurationService = configurationService;
        this.sanitizer = sanitizer;
        this._up = false;
    }
    Object.defineProperty(IframeService.prototype, "config", {
        get: function () {
            return this.configurationService.config;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IframeService.prototype, "nuiIframeElement", {
        get: function () {
            if (!this._nuiIFrameElement) {
                this._nuiIFrameElement = document.getElementById('primo-explore-iframe');
            }
            return this._nuiIFrameElement;
        },
        enumerable: true,
        configurable: true
    });
    IframeService.prototype.refreshNuiIFrame = function () {
        if (!this.nuiIframeElement) {
            return;
        }
        this.nuiIframeElement.contentWindow.location.reload();
    };
    IframeService.prototype.getIframeUrl = function () {
        var ve = this.configurationService.isVe;
        var appName = ve ? 'discovery' : 'primo-explore';
        return this.sanitizer.bypassSecurityTrustResourceUrl(window.location.protocol + '//' + window.location.host + ':80/' + appName + '/search/?vid=' + this.config.view + '&dirName=' + this.config.dirName + '&url=' + this.config.url);
    };
    IframeService.prototype.isUp = function () {
        return this._up;
    };
    Object.defineProperty(IframeService.prototype, "up", {
        set: function (newVal) {
            this._up = newVal;
        },
        enumerable: true,
        configurable: true
    });
    IframeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_configuration_service__WEBPACK_IMPORTED_MODULE_1__["ConfigurationService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], IframeService);
    return IframeService;
}());



/***/ }),

/***/ "./www/utils/one-time-binding.directive.ts":
/*!*************************************************!*\
  !*** ./www/utils/one-time-binding.directive.ts ***!
  \*************************************************/
/*! exports provided: OneTimeBindingDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneTimeBindingDirective", function() { return OneTimeBindingDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OneTimeBindingDirective = /** @class */ (function () {
    function OneTimeBindingDirective(template, container, zone) {
        zone.runOutsideAngular(function () {
            var view = container.createEmbeddedView(template);
            setTimeout(function () { return view.detach(); });
        });
    }
    OneTimeBindingDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[oneTimeBinding]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], OneTimeBindingDirective);
    return OneTimeBindingDirective;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./www/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\toj\dev\Primo Studio\Primo-Studio\primo-explore\www\main.ts */"./www/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map