(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _call_call_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./call/call.component */ "./src/app/call/call.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'call', component: _call_call_component__WEBPACK_IMPORTED_MODULE_2__["CallComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload', useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-container {\n\tpadding: 64px 0 0 0;\n\tmargin: 10px 10px;\n}\n.app-content {\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n}\nmat-toolbar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n}\n@media only screen and (max-width: 600px) {\n\t.app-container {\n\t\tmargin: 0 0;\n\t\tpadding: 56px 0 0 0;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQkFBbUI7Q0FDbkIsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLHNCQUFzQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7QUFDZDtBQUNBO0NBQ0M7RUFDQyxXQUFXO0VBQ1gsbUJBQW1CO0NBQ3BCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29udGFpbmVyIHtcblx0cGFkZGluZzogNjRweCAwIDAgMDtcblx0bWFyZ2luOiAxMHB4IDEwcHg7XG59XG4uYXBwLWNvbnRlbnQge1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxubWF0LXRvb2xiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXHQuYXBwLWNvbnRhaW5lciB7XG5cdFx0bWFyZ2luOiAwIDA7XG5cdFx0cGFkZGluZzogNTZweCAwIDAgMDtcblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n  <mat-toolbar color=\"primary\">\n    <span>Audio and Video Chat Application</span>\n    <button mat-icon-button (click)=\"Logout()\" style=\"position: absolute; right: 10px\">\n      <mat-icon>power_settings_new</mat-icon>\n    </button>\n  </mat-toolbar>\n  <div class=\"app-content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.Logout = function () {
        this.router.navigate(['/login']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _call_call_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./call/call.component */ "./src/app/call/call.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _call_call_component__WEBPACK_IMPORTED_MODULE_7__["CallComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/call/call.component.css":
/*!*****************************************!*\
  !*** ./src/app/call/call.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n    margin-bottom: 10px;\n  }\n  \n  mat-card {\n    border-top: 1px solid whitesmoke;\n  \n  }\n  \n  mat-card-actions {\n    margin: 5px 2px 5px 2px;\n    display: inline-block;\n  }\n  \n  mat-form-field {\n    width: 100%;\n  }\n  \n  .call-card {\n    \n  }\n  \n  .video-card {\n    width: 320px;\n    display: inline-block;\n  }\n  \n  .gap-rt {\n    margin-right: 10px;\n  }\n  \n  #remote-container {\n    background: slategrey;\n    width: 320px;\n    height: 280px;\n  }\n  \n  #local-container {\n    background: slategrey;\n    width: 320px;\n    height: 280px;\n  }\n  \n  #console {\n    background-color: darkslategrey;\n    color: white;\n    font-size: 12px;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 100px;\n    padding: 5px 5px;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsbC9jYWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQ0FBZ0M7O0VBRWxDOztFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTs7RUFFQTs7RUFFQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsK0JBQStCO0lBQy9CLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jYWxsL2NhbGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICBtYXQtY2FyZCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gIFxuICB9XG4gIG1hdC1jYXJkLWFjdGlvbnMge1xuICAgIG1hcmdpbjogNXB4IDJweCA1cHggMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgbWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuY2FsbC1jYXJkIHtcbiAgICBcbiAgfVxuICBcbiAgLnZpZGVvLWNhcmQge1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgXG4gIC5nYXAtcnQge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICBcbiAgI3JlbW90ZS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHNsYXRlZ3JleTtcbiAgICB3aWR0aDogMzIwcHg7XG4gICAgaGVpZ2h0OiAyODBweDtcbiAgfVxuICBcbiAgI2xvY2FsLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogc2xhdGVncmV5O1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICB9XG4gIFxuICAjY29uc29sZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JleTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/call/call.component.html":
/*!******************************************!*\
  !*** ./src/app/call/call.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"call-card\">\n  <mat-card-title>Make a Call</mat-card-title>\n  <mat-card-content>\n    <mat-form-field>\n      <mat-label>Enter the SIP Id</mat-label>\n      <input matInput type=\"text\" name=\"number\" id=\"number\" [(ngModel)]=\"number\" placeholder=\"sip:janedoe@somedomain.com\" required>\n      <mat-hint>e.g., sip:&lt;userId&gt;@&lt;domain&gt;</mat-hint>\n    </mat-form-field>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"makeAudioCall($event)\" color=\"primary\">Make Audio Call</button>\n    <button mat-raised-button (click)=\"makeVideoCall($event)\" color=\"primary\">Make Video Call</button>\n    <button mat-raised-button (click)=\"answerAudioCall($event)\" color=\"primary\">Answer Audio Call</button> \n    <button mat-raised-button (click)=\"answerVideoCall($event)\" color=\"primary\">Answer Video Call</button> \n    <button mat-raised-button (click)=\"rejectCall()\" color=\"primary\">Reject Call</button>\n    <button mat-raised-button (click)=\"endCall()\" color=\"primary\">End Call</button>\n  </mat-card-actions>\n</mat-card>\n\n<mat-card class=\"video-card gap-rt\">\n  <mat-card-title>Local Video</mat-card-title>\n  <mat-card-content>\n    <div id=\"local-container\"></div>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"video-card\">\n  <mat-card-title>Remote Video</mat-card-title>\n  <mat-card-content>\n    <div id=\"remote-container\"></div>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-title>Messages</mat-card-title>\n  <mat-card-content>\n    <div id=\"messages\">\n    {{ message }}\n  </div>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/call/call.component.ts":
/*!****************************************!*\
  !*** ./src/app/call/call.component.ts ***!
  \****************************************/
/*! exports provided: CallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallComponent", function() { return CallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var callIdValue;
var CallComponent = /** @class */ (function () {
    function CallComponent(router) {
        this.router = router;
        this.message = '';
        CallComponent_1.log('UsersComponent constructor');
    }
    CallComponent_1 = CallComponent;
    CallComponent.prototype.ngOnInit = function () {
        var _this = this;
        CallComponent_1.log('ngOnInit', this.message);
        // Using timeout due to https://github.com/angular/angular/issues/14748
        kandy.on('call:error', function (params) {
            CallComponent_1.log('call:error', params.error.message);
        });
        // Set listener for changes in a call's state.
        kandy.on('call:stateChange', function (params) {
            var call = kandy.call.getById(params.callId);
            if (call != 'ENundefinedDED')
                CallComponent_1.log('call:stateChange', call, call.state);
            // If the call ended, stop tracking the callId.
            if (call.state === 'ENundefinedDED') {
                this.callIdValue = null;
            }
        });
        // Set listener for incoming calls.
        kandy.on('call:receive', function (params) {
            // Keep track of the callId.
            // Retrieve call information.
            if (params) {
                callIdValue = params.callId;
            }
            kandy.call.getById(params.callId);
            CallComponent_1.log('call receive');
        });
        kandy.on('call:answered', function (params) {
            _this.renderMedia(params.callId);
        });
        kandy.on('call:accepted', function (params) {
            _this.renderMedia(params.callId);
        });
    };
    CallComponent.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var message = '&#10095; ';
        for (var i = 0; i < args.length; i++) {
            if (!!args[i] && typeof args[i] == 'object') {
                message += JSON.stringify(args[i]) + ' ';
            }
            else {
                message += args[i] + ' ';
            }
        }
        message += '<br>';
        document.getElementById('messages').innerHTML += message;
    };
    CallComponent.prototype.makeAudioCall = function (event) {
        CallComponent_1.log('Make Audio Call', event, this.number);
        var mediaConstraints = {
            audio: true,
            video: false
        };
        callIdValue = kandy.call.make(this.number, mediaConstraints);
    };
    CallComponent.prototype.makeVideoCall = function (event) {
        CallComponent_1.log('Make Video Call', event, this.number);
        var mediaConstraints = {
            audio: true,
            video: true
        };
        callIdValue = kandy.call.make(this.number, mediaConstraints);
    };
    CallComponent.prototype.answerAudioCall = function (event) {
        CallComponent_1.log('Answer Audio Call');
        var call = kandy.call.getById(callIdValue);
        var mediaConstraints = {
            audio: true,
            video: false
        };
        kandy.call.answer(callIdValue, mediaConstraints);
    };
    CallComponent.prototype.answerVideoCall = function (event) {
        CallComponent_1.log('Answer Video Call');
        var call = kandy.call.getById(callIdValue);
        var mediaConstraints = {
            audio: true,
            video: true
        };
        kandy.call.answer(callIdValue, mediaConstraints);
    };
    CallComponent.prototype.rejectCall = function () {
        CallComponent_1.log('Reject Call');
        var call = kandy.call.getById(callIdValue);
        kandy.call.reject(callIdValue);
    };
    CallComponent.prototype.endCall = function () {
        CallComponent_1.log('End Call');
        var call = kandy.call.getById(callIdValue);
        kandy.call.end(callIdValue);
    };
    CallComponent.prototype.renderMedia = function (params) {
        var call = kandy.call.getById(params);
        CallComponent_1.log('Render Media', call);
        kandy.media.renderTracks(call.localTracks, '#local-container');
        kandy.media.renderTracks(call.remoteTracks, '#remote-container');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatList"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CallComponent.prototype, "matList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListItem"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CallComponent.prototype, "matListItems", void 0);
    CallComponent = CallComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tcc-call',
            template: __webpack_require__(/*! ./call.component.html */ "./src/app/call/call.component.html"),
            styles: [__webpack_require__(/*! ./call.component.css */ "./src/app/call/call.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CallComponent);
    return CallComponent;
    var CallComponent_1;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n\tmargin-bottom: 10px;\n}\nmat-card mat-card-actions {\n\tborder-top: 1px solid whitesmoke;\n}\nmat-form-field.login-full-width {\n\twidth: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsZ0NBQWdDO0FBQ2pDO0FBQ0E7Q0FDQyxXQUFXO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxubWF0LWNhcmQgbWF0LWNhcmQtYWN0aW9ucyB7XG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xufVxubWF0LWZvcm0tZmllbGQubG9naW4tZnVsbC13aWR0aCB7XG5cdHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"login-card\">\n  <mat-card-title>Login</mat-card-title>\n  <mat-card-content>\n    <mat-form-field class=\"login-full-width\">\n      <input matInput placeholder=\"Server URL\" [(ngModel)]=\"serverurl\" [value]=\"serverurl\" name=\"serverurl\" required>\n    </mat-form-field>\n    <mat-radio-group (change)=\"onChangeLoginType($event)\" [(ngModel)]=\"loginType\">\n      <mat-radio-button style=\"padding : 8px\" value=\"passwordGrant\">Password Grant</mat-radio-button>\n      <mat-radio-button style=\"padding : 8px\" value=\"clientCredentials\">Client Credentials</mat-radio-button>\n    </mat-radio-group>\n  </mat-card-content>\n  <mat-card-content *ngIf=\"loginType == 'passwordGrant'\">\n    <mat-form-field class=\"login-full-width\">\n      <input matInput placeholder=\"Client ID\" [(ngModel)]=\"clientid\" [value]=\"clientid\" name=\"clientid\" required>\n    </mat-form-field>\n    <mat-form-field class=\"login-full-width\">\n      <input matInput placeholder=\"Username\" [(ngModel)]=\"user\" [value]=\"user\" name=\"user\" required>\n    </mat-form-field>\n    <mat-form-field class=\"login-full-width\">\n      <input matInput placeholder=\"Password\" [(ngModel)]=\"pass\" [value]=\"pass\" type=\"password\" name=\"pass\" required>\n    </mat-form-field>\n  </mat-card-content>\n  <mat-card-content *ngIf=\"loginType == 'clientCredentials'\">\n    <mat-form-field class=\"login-full-width\">\n      <input matInput placeholder=\"Private project key\" [(ngModel)]=\"privateKey\" [value]=\"privateKey\" name=\"privateKey\" required>\n    </mat-form-field>\n    <mat-form-field class=\"login-full-width\">\n      <input matInput placeholder=\"Private project secret\" [(ngModel)]=\"privateSecret\" [value]=\"privateSecret\" name=\"privateSecret\" required>\n    </mat-form-field>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"login()\" color=\"primary\" id=\"log\">Login</button>\n  </mat-card-actions>\n</mat-card>\n<mat-card class=\"log-card\">\n  <mat-card-title>Messages</mat-card-title>\n  <mat-card-content>\n    <div id=\"messages\">{{ message }}</div>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _ngZone) {
        this._router = _router;
        this._ngZone = _ngZone;
        this.clientid = '';
        this.user = '';
        this.pass = '';
        this.message = '';
        this.serverurl = '';
        this.loginType = 'passwordGrant';
        this.privateKey = '';
        this.privateSecret = '';
        window['LoginComponent'] = { component: this, zone: _ngZone };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createFormBody({ 'user': this.user, 'pass': this.pass, 'clientid': this.clientid });
        this.log(this.message);
    };
    LoginComponent.prototype.createFormBody = function (paramsObject) {
        var keyValuePairs = Object.entries(paramsObject).map(function (_a) {
            var key = _a[0], value = _a[1];
            return encodeURIComponent(key) + '=' + encodeURIComponent(value);
        });
        return keyValuePairs.join('&');
    };
    LoginComponent.prototype.onChangeLoginType = function (mrChange) {
        this.loginType = mrChange.value;
    };
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tokens, error_1, services, subscriptionType, tokens, error_2, services, subscriptionType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.loginType == 'passwordGrant')) return [3 /*break*/, 9];
                        if (!(this.user && this.pass && this.clientid)) return [3 /*break*/, 7];
                        if (!confirm('You have successfully logged in. Please click OK to subscribe.')) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.getTokensByPasswordGrant()];
                    case 2:
                        tokens = _a.sent();
                        kandy.setTokens(tokens);
                        this.log('Successfully logged in as ' + this.user);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.log('Error: Failed to get authentication tokens. Error: ' + error_1);
                        return [3 /*break*/, 4];
                    case 4:
                        services = ['call'];
                        subscriptionType = 'websocket';
                        kandy.services.subscribe(services, subscriptionType);
                        this._router.navigate(['/call']);
                        return [3 /*break*/, 6];
                    case 5:
                        this.clientid = '';
                        this.user = '';
                        this.pass = '';
                        this.log('Please login prior moving to next page!');
                        _a.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        alert('Please enter your login details first');
                        _a.label = 8;
                    case 8: return [3 /*break*/, 17];
                    case 9:
                        if (!(this.privateKey && this.privateSecret)) return [3 /*break*/, 16];
                        if (!confirm('You have successfully logged in. Please click OK to subscribe.')) return [3 /*break*/, 14];
                        _a.label = 10;
                    case 10:
                        _a.trys.push([10, 12, , 13]);
                        return [4 /*yield*/, this.getTokensByClientCredGrant()];
                    case 11:
                        tokens = _a.sent();
                        kandy.setTokens(tokens);
                        this.log('Successfully logged in with project User ' + this.privateKey);
                        return [3 /*break*/, 13];
                    case 12:
                        error_2 = _a.sent();
                        this.log('Error: Failed to get authentication tokens. Error: ' + error_2);
                        return [3 /*break*/, 13];
                    case 13:
                        services = ['call'];
                        subscriptionType = 'websocket';
                        kandy.services.subscribe(services, subscriptionType);
                        this._router.navigate(["/call"]);
                        return [3 /*break*/, 15];
                    case 14:
                        this.privateKey = '';
                        this.privateSecret = '';
                        this.log('Please login prior moving to next page!');
                        _a.label = 15;
                    case 15: return [3 /*break*/, 17];
                    case 16:
                        alert('Please enter your Client Credentials first');
                        _a.label = 17;
                    case 17: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.getTokensByPasswordGrant = function () {
        return __awaiter(this, void 0, void 0, function () {
            var formBody, fetchResult, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formBody = this.createFormBody({
                            client_id: this.clientid,
                            username: this.user,
                            password: this.pass,
                            grant_type: 'password',
                            scope: 'openid'
                        });
                        return [4 /*yield*/, fetch(this.serverurl, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                },
                                body: formBody
                            })
                            // Parse the result of the fetch as a JSON format.
                        ];
                    case 1:
                        fetchResult = _a.sent();
                        return [4 /*yield*/, fetchResult.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
                                accessToken: data.access_token,
                                idToken: data.id_token
                            }];
                }
            });
        });
    };
    LoginComponent.prototype.getTokensByClientCredGrant = function () {
        return __awaiter(this, void 0, void 0, function () {
            var formBody, fetchResult, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formBody = this.createFormBody({
                            client_id: this.privateKey,
                            client_secret: this.privateSecret,
                            grant_type: 'client_credentials',
                            scope: 'openid regular_call'
                        });
                        return [4 /*yield*/, fetch(this.serverurl, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                },
                                body: formBody
                            })
                            // Parse the result of the fetch as a JSON format.
                        ];
                    case 1:
                        fetchResult = _a.sent();
                        return [4 /*yield*/, fetchResult.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
                                accessToken: data.access_token,
                                idToken: data.id_token
                            }];
                }
            });
        });
    };
    LoginComponent.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var message = '&#10095; ';
        for (var i = 0; i < args.length; i++) {
            if (!!args[i] && typeof args[i] == 'object') {
                message += JSON.stringify(args[i]) + ' ';
            }
            else {
                message += args[i] + ' ';
            }
        }
        console.log(message);
        message += '<br>';
        document.getElementById('messages').innerHTML += message;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tcc-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/material/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            ],
            declarations: [],
            providers: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]
            ],
            exports: [
                _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]
            ],
            declarations: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/abhishekkumar/Documents/Workshop/HCL/Ribbon/HCLSampleApps/kandy-cpaas2-sample-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map