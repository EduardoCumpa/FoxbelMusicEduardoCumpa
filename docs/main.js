(self["webpackChunkfoxbel_music_eduardo_cumpa"] = self["webpackChunkfoxbel_music_eduardo_cumpa"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class AppComponent {
    constructor() {
        this.title = 'FoxbelMusicEduardoCumpa';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components.module */ 5642);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.module */ 8950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);



/*Components*/



class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__.PagesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__.PagesModule] }); })();


/***/ }),

/***/ 1869:
/*!***************************************************************!*\
  !*** ./src/app/components/album-info/album-info.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlbumInfoComponent": () => (/* binding */ AlbumInfoComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_search_music_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/search-music.service */ 3812);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);





function AlbumInfoComponent_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Reproduciendo ahora...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlbumInfoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlbumInfoComponent_div_2_Template_fa_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onPlayPause(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("background-image: url(", ctx_r1._searchMusicService.infoSong == null ? null : ctx_r1._searchMusicService.infoSong.artist == null ? null : ctx_r1._searchMusicService.infoSong.artist.picture_xl, "); background-size:100%; background-position: center");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r1._searchMusicService.infoSong == null ? null : ctx_r1._searchMusicService.infoSong.album == null ? null : ctx_r1._searchMusicService.infoSong.album.cover_medium, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", !ctx_r1._searchMusicService.isPlayingAudio == true ? ctx_r1.playIcon : ctx_r1.pauseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("T\u00EDtulo: ", ctx_r1._searchMusicService.infoSong == null ? null : ctx_r1._searchMusicService.infoSong.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00C1lbum: ", ctx_r1._searchMusicService.infoSong == null ? null : ctx_r1._searchMusicService.infoSong.album == null ? null : ctx_r1._searchMusicService.infoSong.album.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Artista: ", ctx_r1._searchMusicService.infoSong == null ? null : ctx_r1._searchMusicService.infoSong.artist == null ? null : ctx_r1._searchMusicService.infoSong.artist.name, "");
} }
class AlbumInfoComponent {
    constructor(_searchMusicService) {
        this._searchMusicService = _searchMusicService;
        this.playIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faPlay;
        this.pauseIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faPause;
    }
    ngOnInit() {
    }
    //Función que activa/pausa la reproducción del audio
    onPlayPause() {
        var _a;
        if (((_a = this._searchMusicService.infoSong) === null || _a === void 0 ? void 0 : _a.preview) != null) {
            if (!this._searchMusicService.isPlayingAudio) {
                this._searchMusicService.reproducir.play();
                this._searchMusicService.isPlayingAudio = true;
            }
            else {
                this._searchMusicService.reproducir.pause();
                this._searchMusicService.isPlayingAudio = false;
            }
        }
        else {
            alert("Selecciona una canción");
        }
    }
}
AlbumInfoComponent.ɵfac = function AlbumInfoComponent_Factory(t) { return new (t || AlbumInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_search_music_service__WEBPACK_IMPORTED_MODULE_0__.SearchMusicService)); };
AlbumInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AlbumInfoComponent, selectors: [["app-album-info"]], decls: 3, vars: 2, consts: [[1, "container-album"], ["class", "labelResultados", 4, "ngIf"], ["class", "row background", 3, "style", 4, "ngIf"], [1, "labelResultados"], [1, "row", "background"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "col-xs-12", "col-12", "thumbnail-wrapper"], ["alt", "album_photo", 1, "photo", 3, "src"], [1, "faIcon", 3, "icon", "click"], [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12", "col-xs-12", "col-12", "info"], [1, "title"], [1, "album"], [1, "artist"]], template: function AlbumInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlbumInfoComponent_h3_1_Template, 2, 0, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AlbumInfoComponent_div_2_Template, 11, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx._searchMusicService.infoSong == null ? null : ctx._searchMusicService.infoSong.preview) != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx._searchMusicService.infoSong == null ? null : ctx._searchMusicService.infoSong.preview) != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent], styles: [".container-album[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.background[_ngcontent-%COMP%] {\r\n    background: #A70000B2;\r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n    align-self: center;\r\n    padding: 10px;\r\n}\r\n\r\n.photo[_ngcontent-%COMP%] {\r\n    width: -webkit-fill-available;\r\n    max-width: 250px;\r\n    max-height: 250px;\r\n    min-height: 160px;\r\n    min-width: 160px;\r\n}\r\n\r\n.thumbnail-wrapper[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.thumbnail-wrapper[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate3d(-50%, -50%, 0);\r\n}\r\n\r\n.faIcon[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: clamp(1rem, 0.8846rem + 0.5128vw, 1.5rem);\r\n}\r\n\r\n.faIcon[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.labelResultados[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    color: #E86060;\r\n    font-size: clamp(1rem, 0.8846rem + 0.5128vw, 1.5rem);\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.photo[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    color: #FFFFFF;\r\n    font-size: clamp(1rem, 0.8846rem + 0.5128vw, 1.5rem);\r\n    font-weight: bold;\r\n}\r\n\r\n.album[_ngcontent-%COMP%] {\r\n    color: #FFFFFF;\r\n    font-size: clamp(1rem, 0.8846rem + 0.5128vw, 1.5rem);\r\n}\r\n\r\n.artist[_ngcontent-%COMP%] {\r\n    color: #FFFFFF;\r\n    font-size: clamp(1rem, 0.8846rem + 0.5128vw, 1.5rem);\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .container-album[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYnVtLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFHVCxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsb0RBQW9EO0lBQ3BELG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxvREFBb0Q7SUFDcEQsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJhbGJ1bS1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWFsYnVtIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQTcwMDAwQjI7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5waG90byB7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDE2MHB4O1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxufVxyXG5cclxuLnRodW1ibmFpbC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aHVtYm5haWwtd3JhcHBlciBmYS1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcclxufVxyXG5cclxuLmZhSWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDAuODg0NnJlbSArIDAuNTEyOHZ3LCAxLjVyZW0pO1xyXG59XHJcblxyXG4uZmFJY29uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxhYmVsUmVzdWx0YWRvcyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjRTg2MDYwO1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAwLjg4NDZyZW0gKyAwLjUxMjh2dywgMS41cmVtKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5waG90byB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmluZm8ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMC44ODQ2cmVtICsgMC41MTI4dncsIDEuNXJlbSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmFsYnVtIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAwLjg4NDZyZW0gKyAwLjUxMjh2dywgMS41cmVtKTtcclxufVxyXG5cclxuLmFydGlzdCB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMC44ODQ2cmVtICsgMC41MTI4dncsIDEuNXJlbSk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbnRhaW5lci1hbGJ1bSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _display_music_display_music_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-music/display-music.component */ 1377);
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ 4774);
/* harmony import */ var _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music-player/music-player.component */ 997);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-bar/search-bar.component */ 2082);
/* harmony import */ var _album_info_album_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./album-info/album-info.component */ 1869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);









class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_display_music_display_music_component__WEBPACK_IMPORTED_MODULE_0__.DisplayMusicComponent,
        _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__.NavMenuComponent,
        _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_2__.MusicPlayerComponent,
        _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__.SearchBarComponent,
        _album_info_album_info_component__WEBPACK_IMPORTED_MODULE_4__.AlbumInfoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule], exports: [_display_music_display_music_component__WEBPACK_IMPORTED_MODULE_0__.DisplayMusicComponent,
        _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__.NavMenuComponent,
        _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_2__.MusicPlayerComponent,
        _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__.SearchBarComponent,
        _album_info_album_info_component__WEBPACK_IMPORTED_MODULE_4__.AlbumInfoComponent] }); })();


/***/ }),

/***/ 1377:
/*!*********************************************************************!*\
  !*** ./src/app/components/display-music/display-music.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayMusicComponent": () => (/* binding */ DisplayMusicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_search_music_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/search-music.service */ 3812);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



function DisplayMusicComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No hay resultados para mostrar, pruebe buscando un t\u00EDtulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DisplayMusicComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DisplayMusicComponent_div_3_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const song_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.onSendSong(song_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", song_r3.album.cover_medium, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", song_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", song_r3.artist.name, " ");
} }
function DisplayMusicComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DisplayMusicComponent_div_3_div_1_Template, 8, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1._searchMusicService == null ? null : ctx_r1._searchMusicService.listResults);
} }
class DisplayMusicComponent {
    constructor(_searchMusicService) {
        this._searchMusicService = _searchMusicService;
        this.scrolling = false;
    }
    ngOnInit() {
    }
    //Transfiere la información de la canción al servicio
    onSendSong(song) {
        this._searchMusicService.infoSong = song;
        this.onPlay();
    }
    //Función que activa/pausa la reproducción del audio
    onPlay() {
        var _a;
        this._searchMusicService.isPlayingAudio = true;
        this._searchMusicService.reproducir.src = (_a = this._searchMusicService.infoSong) === null || _a === void 0 ? void 0 : _a.preview;
        this._searchMusicService.reproducir.play();
    }
}
DisplayMusicComponent.ɵfac = function DisplayMusicComponent_Factory(t) { return new (t || DisplayMusicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_search_music_service__WEBPACK_IMPORTED_MODULE_0__.SearchMusicService)); };
DisplayMusicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DisplayMusicComponent, selectors: [["app-display-music"]], decls: 4, vars: 2, consts: [[1, "labelResultados"], [4, "ngIf"], ["class", "grid-container", 4, "ngIf"], [1, "grid-container"], ["class", "card song", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "song", 3, "click"], ["alt", "album_photo", 1, "card-img-top", "album_photo", 3, "src"], [1, "card-body"], [1, "title"], [1, "artist"]], template: function DisplayMusicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Resultados");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DisplayMusicComponent_span_2_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DisplayMusicComponent_div_3_Template, 2, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx._searchMusicService == null ? null : ctx._searchMusicService.listResults) == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx._searchMusicService == null ? null : ctx._searchMusicService.listResults) != undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".grid-container[_ngcontent-%COMP%] {\r\n    --minimumColumnWidth: 160px;\r\n    grid-gap: 24px;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(var(--minimumColumnWidth), 1fr));\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    border:white;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n    padding: 0.5rem 0rem;\r\n}\r\n\r\n.labelResultados[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    color: #E86060;\r\n    font-size: clamp(1rem, 0.8846rem + 0.5128vw, 1.5rem);\r\n}\r\n\r\n.song[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\n.album_photo[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    color: #555555;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n}\r\n\r\n.artist[_ngcontent-%COMP%] {\r\n    color: #828282;\r\n    font-size: 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXktbXVzaWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0ZBQWdGO0FBQ3BGOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkIiLCJmaWxlIjoiZGlzcGxheS1tdXNpYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gICAgLS1taW5pbXVtQ29sdW1uV2lkdGg6IDE2MHB4O1xyXG4gICAgZ3JpZC1nYXA6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgodmFyKC0tbWluaW11bUNvbHVtbldpZHRoKSwgMWZyKSk7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgYm9yZGVyOndoaXRlO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDByZW07XHJcbn1cclxuXHJcbi5sYWJlbFJlc3VsdGFkb3Mge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI0U4NjA2MDtcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMC44ODQ2cmVtICsgMC41MTI4dncsIDEuNXJlbSk7XHJcbn1cclxuXHJcbi5zb25nOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYWxidW1fcGhvdG8ge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgY29sb3I6ICM1NTU1NTU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmFydGlzdCB7XHJcbiAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 997:
/*!*******************************************************************!*\
  !*** ./src/app/components/music-player/music-player.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicPlayerComponent": () => (/* binding */ MusicPlayerComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_search_music_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/search-music.service */ 3812);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);





function MusicPlayerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0._searchMusicService.infoSong == null ? null : ctx_r0._searchMusicService.infoSong.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0._searchMusicService.infoSong == null ? null : ctx_r0._searchMusicService.infoSong.artist == null ? null : ctx_r0._searchMusicService.infoSong.artist.name);
} }
class MusicPlayerComponent {
    constructor(_searchMusicService) {
        this._searchMusicService = _searchMusicService;
        //Icons
        this.playIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faPlay;
        this.pauseIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faPause;
        this.stepBackwardIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faStepBackward;
        this.stepForwardIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faStepForward;
        this.volumeUpIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faVolumeUp;
        this.volumeMuteIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faVolumeMute;
        this.currentVolume = 50;
    }
    ngOnInit() {
    }
    //Función que activa/pausa la reproducción del audio
    onPlayPause() {
        var _a;
        if (((_a = this._searchMusicService.infoSong) === null || _a === void 0 ? void 0 : _a.preview) != null) {
            if (!this._searchMusicService.isPlayingAudio) {
                this._searchMusicService.reproducir.play();
                this._searchMusicService.isPlayingAudio = true;
            }
            else {
                this._searchMusicService.reproducir.pause();
                this._searchMusicService.isPlayingAudio = false;
            }
        }
        else {
            alert("Selecciona una canción");
        }
    }
    valueChanged(event) {
        console.log('e', event.target.value);
        this.currentVolume = event.target.value;
        this._searchMusicService.reproducir.volume = this.currentVolume / 100;
    }
    onMuteAudio() {
        if (!this._searchMusicService.isMute) {
            this._searchMusicService.isMute = true;
            this._searchMusicService.reproducir.muted = true;
        }
        else {
            this._searchMusicService.isMute = false;
            this._searchMusicService.reproducir.muted = false;
        }
    }
}
MusicPlayerComponent.ɵfac = function MusicPlayerComponent_Factory(t) { return new (t || MusicPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_search_music_service__WEBPACK_IMPORTED_MODULE_0__.SearchMusicService)); };
MusicPlayerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MusicPlayerComponent, selectors: [["app-music-player"]], decls: 18, vars: 7, consts: [[1, "player-container"], [1, "first-section"], [1, "album"], ["alt", "album_photo", 1, "album-photo", 3, "src"], ["class", "info", 4, "ngIf"], [1, "second-section"], [1, "player-controls"], [1, "back"], [1, "faIcon", "iconBack", 3, "icon"], [1, "play"], [1, "faIcon", "circle-icon", 3, "icon", "click"], [1, "for"], [1, "faIcon", "iconFor", 3, "icon"], [1, "third-section"], [1, "control-volume"], ["type", "range", "min", "0", "max", "100", 3, "value", "input"], [1, "volume"], [1, "faIcon", 3, "icon", "click"], [1, "info"], [1, "songTitle"], [1, "songDescription"]], template: function MusicPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MusicPlayerComponent_div_4_Template, 5, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "fa-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "fa-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MusicPlayerComponent_Template_fa_icon_click_10_listener() { return ctx.onPlayPause(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function MusicPlayerComponent_Template_input_input_15_listener($event) { return ctx.valueChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "fa-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MusicPlayerComponent_Template_fa_icon_click_17_listener() { return ctx.onMuteAudio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", (ctx._searchMusicService.infoSong == null ? null : ctx._searchMusicService.infoSong.album == null ? null : ctx._searchMusicService.infoSong.album.cover_medium) != undefined ? ctx._searchMusicService.infoSong == null ? null : ctx._searchMusicService.infoSong.album == null ? null : ctx._searchMusicService.infoSong.album.cover_medium : ctx._searchMusicService.albumCover, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx._searchMusicService.infoSong == null ? null : ctx._searchMusicService.infoSong.preview) != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.stepBackwardIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", !ctx._searchMusicService.isPlayingAudio ? ctx.playIcon : ctx.pauseIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.stepForwardIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.currentVolume);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx._searchMusicService.isMute ? ctx.volumeMuteIcon : ctx.volumeUpIcon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent], styles: [".player-container[_ngcontent-%COMP%] {\r\n    background: #EB5757;\r\n    display: grid;\r\n    grid-template-areas: \"first second second second third\"\r\n}\r\n\r\n.first-section[_ngcontent-%COMP%] {\r\n    grid-area: first;\r\n    display: grid;\r\n    grid-template-areas: \"album info info info info info info info info info info\"\r\n}\r\n\r\n.album[_ngcontent-%COMP%] {\r\n    grid-area: album;\r\n}\r\n\r\n.album-photo[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n    grid-area: info;\r\n    align-self: center;\r\n}\r\n\r\n.second-section[_ngcontent-%COMP%] {\r\n    align-self: center;\r\n    grid-area: second;\r\n}\r\n\r\n.player-controls[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-areas: \"back back play for for\"\r\n}\r\n\r\n.back[_ngcontent-%COMP%] {\r\n    align-self: center;\r\n    grid-area: back;\r\n}\r\n\r\n.iconBack[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.play[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    grid-area: play;\r\n}\r\n\r\n.for[_ngcontent-%COMP%] {\r\n    grid-area: for;\r\n    align-self: center;\r\n}\r\n\r\n.iconFor[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n\r\n.third-section[_ngcontent-%COMP%] {\r\n    grid-area: third;\r\n    display: grid;\r\n    grid-template-areas: \"control volume\";\r\n    align-self: center;\r\n}\r\n\r\n.control-volume[_ngcontent-%COMP%] {\r\n    grid-area: control;\r\n    align-self: center;\r\n}\r\n\r\n.volume[_ngcontent-%COMP%] {\r\n    grid-area: volume;\r\n    align-self: center;\r\n}\r\n\r\n.faIcon[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: clamp(1rem, 0.8846rem + 0.5128vw, 1.5rem);\r\n}\r\n\r\n.faIcon[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.circle-icon[_ngcontent-%COMP%] {\r\n    background: #FF7676;\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    line-height: 60px;\r\n    vertical-align: middle;\r\n    padding: 20px;\r\n}\r\n\r\n.songTitle[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    color: #ffffff;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.songDescription[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: #ffffff;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .player-container[_ngcontent-%COMP%] {\r\n        grid-template-areas: \"first first\" \"second third\"\r\n    }\r\n    .first-section[_ngcontent-%COMP%] {\r\n       \r\n        grid-template-areas: \"album info info info\"\r\n    }\r\n    .album-photo[_ngcontent-%COMP%]{\r\n        width: 50px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11c2ljLXBsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtJQUNBOztRQUVJO0lBQ0o7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6Im11c2ljLXBsYXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXllci1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI0VCNTc1NztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImZpcnN0IHNlY29uZCBzZWNvbmQgc2Vjb25kIHRoaXJkXCJcclxufVxyXG5cclxuLmZpcnN0LXNlY3Rpb24ge1xyXG4gICAgZ3JpZC1hcmVhOiBmaXJzdDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImFsYnVtIGluZm8gaW5mbyBpbmZvIGluZm8gaW5mbyBpbmZvIGluZm8gaW5mbyBpbmZvIGluZm9cIlxyXG59XHJcblxyXG4uYWxidW0ge1xyXG4gICAgZ3JpZC1hcmVhOiBhbGJ1bTtcclxufVxyXG5cclxuLmFsYnVtLXBob3Rve1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgICBncmlkLWFyZWE6IGluZm87XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWNvbmQtc2VjdGlvbiB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBncmlkLWFyZWE6IHNlY29uZDtcclxufVxyXG5cclxuLnBsYXllci1jb250cm9scyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJiYWNrIGJhY2sgcGxheSBmb3IgZm9yXCJcclxufVxyXG5cclxuLmJhY2sge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZ3JpZC1hcmVhOiBiYWNrO1xyXG59XHJcblxyXG4uaWNvbkJhY2sge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ucGxheSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBncmlkLWFyZWE6IHBsYXk7XHJcbn1cclxuXHJcbi5mb3Ige1xyXG4gICAgZ3JpZC1hcmVhOiBmb3I7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pY29uRm9yIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4udGhpcmQtc2VjdGlvbiB7XHJcbiAgICBncmlkLWFyZWE6IHRoaXJkO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiY29udHJvbCB2b2x1bWVcIjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRyb2wtdm9sdW1lIHtcclxuICAgIGdyaWQtYXJlYTogY29udHJvbDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLnZvbHVtZSB7XHJcbiAgICBncmlkLWFyZWE6IHZvbHVtZTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmZhSWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDAuODg0NnJlbSArIDAuNTEyOHZ3LCAxLjVyZW0pO1xyXG59XHJcblxyXG4uZmFJY29uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNpcmNsZS1pY29uIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRjc2NzY7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5zb25nVGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLnNvbmdEZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAucGxheWVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJmaXJzdCBmaXJzdFwiIFwic2Vjb25kIHRoaXJkXCJcclxuICAgIH1cclxuICAgIC5maXJzdC1zZWN0aW9uIHtcclxuICAgICAgIFxyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYWxidW0gaW5mbyBpbmZvIGluZm9cIlxyXG4gICAgfVxyXG4gICAgLmFsYnVtLXBob3Rve1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 4774:
/*!***********************************************************!*\
  !*** ./src/app/components/nav-menu/nav-menu.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavMenuComponent": () => (/* binding */ NavMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_search_music_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/search-music.service */ 3812);


class NavMenuComponent {
    constructor(_searchMusicService) {
        this._searchMusicService = _searchMusicService;
    }
    ngOnInit() {
    }
}
NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) { return new (t || NavMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_search_music_service__WEBPACK_IMPORTED_MODULE_0__.SearchMusicService)); };
NavMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavMenuComponent, selectors: [["app-nav-menu"]], decls: 35, vars: 1, consts: [[1, "media", "d-flex", "align-items-center"], ["alt", "foxbelmusic_logo", "width", "100%", 3, "src"], [1, "px-3", "small", "pb-2", "mb-0"], [1, "nav", "flex-column", "mb-0"], [1, "nav-item"], ["href", "#", 1, "nav-link", "active"], ["href", "#", 1, "nav-link"], [1, "px-3", "small", "py-2", "mb-0"]], template: function NavMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Mi librer\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Recientes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Artistas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " \u00C1lbums ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Canciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Estaciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Metal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Para bailar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Rock 90s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Baladas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx._searchMusicService.logo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, styles: ["p[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    margin-bottom: 0;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #FFFFFF;\r\n    font-size: 16px;\r\n}\r\n\r\na.active[_ngcontent-%COMP%] {\r\n    border-left: 5px solid #E86060;\r\n    color: #E86060;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6Im5hdi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5hLmFjdGl2ZSB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNFODYwNjA7XHJcbiAgICBjb2xvcjogI0U4NjA2MDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */"] });


/***/ }),

/***/ 2082:
/*!***************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchBarComponent": () => (/* binding */ SearchBarComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_search_music_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/search-music.service */ 3812);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);




class SearchBarComponent {
    constructor(_searchMusicService) {
        this._searchMusicService = _searchMusicService;
        this.text = '';
        //Icons
        this.userIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faUser;
    }
    ngOnInit() {
    }
    //Realizar request al escribir
    onKeyUp(x) {
        this.text = x.target.value;
        this._searchMusicService.getResults(this.text).subscribe(data => {
            this._searchMusicService.listResults = data.data;
            console.log(this._searchMusicService.listResults);
        }, error => {
            console.log(error);
        });
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_search_music_service__WEBPACK_IMPORTED_MODULE_0__.SearchMusicService)); };
SearchBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], decls: 7, vars: 1, consts: [[1, "row", "search"], [1, "col-xl-8", "col-lg-8", "col-md-6", "col-sm-12", "col-xs-12"], ["id", "search_bar", "type", "search", "placeholder", "Buscar", "aria-label", "Buscar", 1, "form-control", "mr-sm-2", 3, "keyup"], [1, "col-xl-4", "col-lg-4", "col-md-6", "d-none", "d-md-block", "user"], [1, "faIcon", 3, "icon"], [1, "userName"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function SearchBarComponent_Template_input_keyup_2_listener($event) { return ctx.onKeyUp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Eduardo Cumpa");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.userIcon);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent], styles: [".search[_ngcontent-%COMP%]{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#search_bar[_ngcontent-%COMP%] {\r\n    border-radius: 100px;\r\n}\r\n\r\n.user[_ngcontent-%COMP%] {\r\n    text-align: end;\r\n}\r\n\r\n.userName[_ngcontent-%COMP%] {\r\n    font-size: clamp(1rem, 0.8846rem + 0.5128vw, 1.5rem);\r\n}\r\n\r\n.faIcon[_ngcontent-%COMP%] {\r\n    padding: 12px;\r\n    color: #E86060;\r\n    font-size: clamp(1rem, 0.8846rem + 0.5128vw, 1.5rem);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG9EQUFvRDtBQUN4RCIsImZpbGUiOiJzZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuI3NlYXJjaF9iYXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn1cclxuXHJcbi51c2VyIHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuLnVzZXJOYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMC44ODQ2cmVtICsgMC41MTI4dncsIDEuNXJlbSk7XHJcbn1cclxuXHJcbi5mYUljb24ge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGNvbG9yOiAjRTg2MDYwO1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAwLjg4NDZyZW0gKyAwLjUxMjh2dywgMS41cmVtKTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/nav-menu/nav-menu.component */ 4774);
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/search-bar/search-bar.component */ 2082);
/* harmony import */ var _components_album_info_album_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/album-info/album-info.component */ 1869);
/* harmony import */ var _components_display_music_display_music_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/display-music/display-music.component */ 1377);
/* harmony import */ var _components_music_player_music_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/music-player/music-player.component */ 997);






class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 9, vars: 0, consts: [[1, "menu"], [1, "content"], [1, "footer"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-nav-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-search-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-album-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-display-music");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-music-player");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } }, directives: [_components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_0__.NavMenuComponent, _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_1__.SearchBarComponent, _components_album_info_album_info_component__WEBPACK_IMPORTED_MODULE_2__.AlbumInfoComponent, _components_display_music_display_music_component__WEBPACK_IMPORTED_MODULE_3__.DisplayMusicComponent, _components_music_player_music_player_component__WEBPACK_IMPORTED_MODULE_4__.MusicPlayerComponent], styles: ["main[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  color: gray;\r\n  height: 100vh;\r\n  grid-template-columns: 200px 1fr;\r\n  grid-template-rows: 1fr 100px;\r\n  grid-template-areas: \"menu content content\" \"footer footer footer\"\r\n}\r\n\r\n.menu[_ngcontent-%COMP%] {\r\n  grid-area: menu;\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: #662323;\r\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);\r\n  transition: all 0.4s;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  grid-area: content;\r\n  overflow-y: scroll;\r\n  padding: 2rem 4rem;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  grid-area: footer;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  main[_ngcontent-%COMP%] {\r\n    grid-template-rows: 1fr 110px;\r\n    grid-template-areas: \"content content content\" \"footer footer footer\"\r\n  }\r\n  .menu[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .content[_ngcontent-%COMP%] {\r\n    padding: 1rem 1rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0I7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSw2QkFBNkI7SUFDN0I7RUFDRjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTAwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJtZW51IGNvbnRlbnQgY29udGVudFwiIFwiZm9vdGVyIGZvb3RlciBmb290ZXJcIlxyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgZ3JpZC1hcmVhOiBtZW51O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQ6ICM2NjIzMjM7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGdyaWQtYXJlYTogY29udGVudDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgcGFkZGluZzogMnJlbSA0cmVtO1xyXG59XHJcblxyXG4uY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICBtYWluIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDExMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJjb250ZW50IGNvbnRlbnQgY29udGVudFwiIFwiZm9vdGVyIGZvb3RlciBmb290ZXJcIlxyXG4gIH1cclxuICAubWVudSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW07XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 8950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5245);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components.module */ 5642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule], exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent] }); })();


/***/ }),

/***/ 3812:
/*!**************************************************!*\
  !*** ./src/app/services/search-music.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchMusicService": () => (/* binding */ SearchMusicService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



class SearchMusicService {
    constructor(http) {
        this.http = http;
        this.STATIC_URI = 'https://api.deezer.com';
        this.endpointURI = '/search';
        this.fullURL = '';
        this.isPlayingAudio = false;
        this.isMute = false;
        this.albumCover = 'assets/images/no_music100x100.png';
        this.logo = 'assets/images/foxbel-music.png';
        this.isProd = false;
        this.reproducir = new Audio();
    }
    //Obtiene la canciones con el parámetro
    getResults(q) {
        if (this.isProd) {
            this.fullURL = this.STATIC_URI + this.endpointURI;
        }
        else {
            this.fullURL = this.endpointURI;
        }
        console.log("Llamando al endpoint: " + this.fullURL);
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('q', q);
        return this.http.get(this.fullURL, { params });
    }
}
SearchMusicService.ɵfac = function SearchMusicService_Factory(t) { return new (t || SearchMusicService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
SearchMusicService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SearchMusicService, factory: SearchMusicService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map