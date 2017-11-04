Based off Ionic blank starter.

### Error when opening modal:

```
core.es5.js:1020 ERROR Error: Uncaught (in promise): Error: No component factory found for MyTestComponent. Did you add it to @NgModule.entryComponents?
Error: No component factory found for MyTestComponent. Did you add it to @NgModule.entryComponents?
    at noComponentFactoryError (core.es5.js:3202)
    at CodegenComponentFactoryResolver.resolveComponentFactory (core.es5.js:3267)
    at ModalCmp.ionViewPreLoad (modal-component.js:54)
    at ModalImpl.ViewController._lifecycle (view-controller.js:577)
    at ModalImpl.ViewController._preLoad (view-controller.js:425)
    at OverlayPortal.NavControllerBase._preLoad (nav-controller-base.js:930)
    at OverlayPortal.NavControllerBase._viewInit (nav-controller-base.js:566)
    at nav-controller-base.js:356
    at t.invoke (polyfills.js:3)
    at Object.onInvoke (core.es5.js:3890)
    at noComponentFactoryError (core.es5.js:3202)
    at CodegenComponentFactoryResolver.resolveComponentFactory (core.es5.js:3267)
    at ModalCmp.ionViewPreLoad (modal-component.js:54)
    at ModalImpl.ViewController._lifecycle (view-controller.js:577)
    at ModalImpl.ViewController._preLoad (view-controller.js:425)
    at OverlayPortal.NavControllerBase._preLoad (nav-controller-base.js:930)
    at OverlayPortal.NavControllerBase._viewInit (nav-controller-base.js:566)
    at nav-controller-base.js:356
    at t.invoke (polyfills.js:3)
    at Object.onInvoke (core.es5.js:3890)
    at c (polyfills.js:3)
    at Object.reject (polyfills.js:3)
    at OverlayPortal.NavControllerBase._fireError (nav-controller-base.js:322)
    at OverlayPortal.NavControllerBase._failed (nav-controller-base.js:310)
    at nav-controller-base.js:365
    at t.invoke (polyfills.js:3)
    at Object.onInvoke (core.es5.js:3890)
    at t.invoke (polyfills.js:3)
    at r.run (polyfills.js:3)
    at polyfills.js:3
```
