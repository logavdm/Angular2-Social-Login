webpackJsonp([1,4],{

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthendicateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthendicateService = (function () {
    function AuthendicateService(router) {
        this.router = router;
    }
    AuthendicateService.prototype.isLogged = function () {
        if (localStorage.getItem('currentUser') === null)
            return false;
        else
            return true;
    };
    AuthendicateService.prototype.Login = function (user) {
        if (user.email != "logavdm@gmail.com" && user.password != "123456") {
            return false;
        }
        else {
            localStorage.setItem('currentUser', JSON.stringify(user));
            return true;
        }
    };
    AuthendicateService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.router.navigate(['login']);
    };
    AuthendicateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], AuthendicateService);
    return AuthendicateService;
    var _a;
}());
//# sourceMappingURL=authendicate.service.js.map

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 317;


/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(440);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_authendicate_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DataModels_user_datamodel__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_social_login__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_social_login__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(auth, router, auth1) {
        this.auth = auth;
        this.router = router;
        this.auth1 = auth1;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__DataModels_user_datamodel__["a" /* User */]('', '');
    }
    LoginComponent.prototype.signIn = function (provider) {
        this.auth1.login(provider).subscribe(function (data) {
            console.log(data);
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(497),
            providers: [__WEBPACK_IMPORTED_MODULE_1__Service_authendicate_service__["a" /* AuthendicateService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Service_authendicate_service__["a" /* AuthendicateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Service_authendicate_service__["a" /* AuthendicateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_social_login__["AuthService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_social_login__["AuthService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: '<h2>Page not found</h2>'
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_authendicate_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Service_canActivate__ = __webpack_require__(437);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        if (!this.auth.isLogged()) {
            console.log("User Not Logged in");
            this.router.navigate(['login']);
        }
        else {
            this.user = JSON.parse(localStorage.getItem('currentUser'));
        }
    }
    ProfileComponent.prototype.logout = function () {
        this.auth.logout();
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(499),
            providers: [__WEBPACK_IMPORTED_MODULE_2__Service_authendicate_service__["a" /* AuthendicateService */], __WEBPACK_IMPORTED_MODULE_3__Service_canActivate__["a" /* LoggedInGuard */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Service_authendicate_service__["a" /* AuthendicateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__Service_authendicate_service__["a" /* AuthendicateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(500)
        }), 
        __metadata('design:paramtypes', [])
    ], RegisterComponent);
    return RegisterComponent;
}());
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(email, password) {
        this.email = email;
        this.password = password;
    }
    return User;
}());
//# sourceMappingURL=user.datamodel.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authendicate_service__ = __webpack_require__(181);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggedInGuard = (function () {
    function LoggedInGuard(auth) {
        this.auth = auth;
    }
    LoggedInGuard.prototype.canActivate = function () {
        return this.auth.isLogged();
    };
    LoggedInGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authendicate_service__["a" /* AuthendicateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__authendicate_service__["a" /* AuthendicateService */]) === 'function' && _a) || Object])
    ], LoggedInGuard);
    return LoggedInGuard;
    var _a;
}());
//# sourceMappingURL=canActivate.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-app',
            template: __webpack_require__(498),
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_social_login__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_login_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_register_component__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_profile_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_not_found_component__ = __webpack_require__(433);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__Components_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__Components_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_8__Components_profile_component__["a" /* ProfileComponent */] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__Components_not_found_component__["a" /* PageNotFoundComponent */] }
];
var providers = {
    "google": {
        "clientId": "997653921331-ofp42lq90csu4jrs4255ulpds8818qtc.apps.googleusercontent.com"
    }
};
var AppModule = (function () {
    function AppModule() {
        __WEBPACK_IMPORTED_MODULE_4_angular2_social_login__["Angular2SocialLoginModule"].initWithProviders(providers);
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__Components_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__Components_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__Components_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_9__Components_not_found_component__["a" /* PageNotFoundComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4_angular2_social_login__["AuthService"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 497:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:5%;\">\r\n\r\n<div class=\"col-md-4 col-md-offset-3\">\r\n\r\n  <div class=\"panel-group\">\r\n      <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">Login</div>\r\n      <div class=\"panel-body\">\r\n\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email:</label>\r\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"user.email\" name=\"email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"pwd\">Password:</label>\r\n      <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" [(ngModel)]=\"user.password\" name=\"password\">\r\n    </div>\r\n    \r\n    <button type=\"submit\" class=\"btn btn-default\" (click)=\"login()\" >Submit</button>\r\n  </form>\r\n\r\n\r\n  <div class=\"panel panel-primary\" style=\"margin-left:-15px;margin-right:-15px;margin-bottom:-15px;\">\r\n      <div class=\"panel-heading text-center\">Login With</div>\r\n</div>\r\n\r\n  \r\n\r\n    <div class=\"row\" style=\"margin-top:50px; margin-left:20px;\">\r\n\r\n \r\n          \r\n          <div class=\"col-sm-4\">\r\n            <div class=\"btn-group\">\r\n           <button (click)=\"signIn('google')\">google</button>\r\n            </div>\r\n          </div>\r\n         \r\n        </div>  \r\n   \r\n\r\n    \r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n       <div class=\"panel-footer text-right\">Angular2</div>\r\n    </div>\r\n\r\n    \r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n</div>"

/***/ }),

/***/ 498:
/***/ (function(module, exports) {

module.exports = "\r\n    <router-outlet></router-outlet>"

/***/ }),

/***/ 499:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n      <div class=\"row\" >\r\n      \r\n        <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad\" style=\"margin-top:5%;\">\r\n   \r\n   \r\n          <div class=\"panel panel-info\">\r\n            <div class=\"panel-heading\">\r\n              <h3 class=\"panel-title\">Loganathan Dhandapani</h3>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-3 col-lg-3 \" align=\"center\"> \r\n\r\n                  <img alt=\"User Pic\" src=\"https://image.freepik.com/free-vector/logo-with-abstract-human-form_1032-23.jpg\" class=\"img-circle img-responsive\"> \r\n\r\n                </div>\r\n                \r\n               \r\n                <div class=\" col-md-9 col-lg-9 \"> \r\n                  <table class=\"table table-user-information\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <td>User ID :</td>\r\n                        <td>2323232</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>User Name:</td>\r\n                        <td>loganathan</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Provider :</td>\r\n                        <td>google</td>\r\n                      </tr>\r\n                   \r\n                         <tr>\r\n                             <tr>\r\n                        <td>Email ID :</td>\r\n                        <td>{{user.email}}</td>\r\n                      </tr>\r\n                     \r\n                      \r\n                     \r\n                    </tbody>\r\n                  </table>\r\n                  \r\n                  <a href=\"#\" class=\"btn btn-primary\">My Sales Performance</a>\r\n                  <a href=\"#\" class=\"btn btn-primary\">Team Sales Performance</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n                 <div class=\"panel-footer\">\r\n                        <a data-original-title=\"Broadcast Message\" data-toggle=\"tooltip\" type=\"button\" class=\"btn btn-sm btn-primary\"><i class=\"glyphicon glyphicon-envelope\"></i></a>\r\n                        <span class=\"pull-right\">\r\n                            <a href=\"edit.html\" data-original-title=\"Edit this user\" data-toggle=\"tooltip\" type=\"button\" class=\"btn btn-sm btn-warning\"><i class=\"glyphicon glyphicon-edit\"></i></a>\r\n                            <a data-original-title=\"Remove this user\" data-toggle=\"tooltip\" type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"logout()\"><i class=\"glyphicon glyphicon-remove\"></i>Logout</a>\r\n                        </span>\r\n                    </div>\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ 500:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:5%;\">\r\n\r\n<div class=\"col-md-4 col-md-offset-3\">\r\n\r\n  <div class=\"panel-group\">\r\n      <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\">Login</div>\r\n      <div class=\"panel-body\">\r\n\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email:</label>\r\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"pwd\">Password:</label>\r\n      <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\">\r\n    </div>\r\n    \r\n    <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n  </form>\r\n\r\n\r\n  <!-- <div class=\"panel panel-primary\" style=\"margin-left:-15px;margin-right:-15px;margin-bottom:-15px;\">\r\n      <div class=\"panel-heading text-center\">Login With</div>\r\n</div>\r\n\r\n  \r\n\r\n    <div class=\"row\" style=\"margin-top:50px; margin-left:20px;\">\r\n\r\n \r\n          \r\n          <div class=\"col-sm-4\">\r\n            <div class=\"btn-group\">\r\n              <button g-login type=\"button\" class=\"btn btn-danger\"><i class=\"fa fa-google-plus\"></i>Sign in with GooglePlus</button>\r\n            </div>\r\n          </div>\r\n         \r\n        </div>  \r\n   \r\n\r\n    \r\n\r\n\r\n    </div> -->\r\n\r\n\r\n      </div>\r\n       <div class=\"panel-footer text-right\">Angular2</div>\r\n    </div>\r\n\r\n    \r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n</div>"

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(318);


/***/ })

},[518]);
//# sourceMappingURL=main.bundle.js.map