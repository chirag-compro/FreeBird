"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var auth_guard_1 = require('./_guards/auth.guard');
var appRoutes = [
    { path: '', loadChildren: './home/home.module#HomeModule', canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app-routing.module.js.map