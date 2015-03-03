## app-router change log

#### v2.1.0
- Added data binding to `<template>` tags when Polymer (`TemplateBinding.js`) is present.
- Added `bindRouter` attribute to pass the router to the `app-route`'s page.
- Added `before-data-binding` event to add properties to a model before it's bound to the route's custom element or template.
- Fixed a `core-animated-pages` bug where multiple URLs matched the same `app-route` (ex: `path="/page/:num"` and paths `/page/1`, `/page/2`).

#### v2.0.4
- The move from `platform.js` to `webcomponents.js` removed the `URL()` constructor polyfill. The v2.0.3 fix created a bug in Safari when parsing the URL. This fixes Safari.

#### v2.0.3
- The move from `platform.js` to `webcomponents.js` removed the `URL()` constructor polyfill https://github.com/Polymer/webcomponentsjs/issues/53. IE doesn't support the `URL()` constructor yet so this fix is adding URL parse support for IE.

#### v2.0.2
- Fixing [issue 19](https://github.com/erikringsmuth/app-router/issues/19) using best effort approach. Use `template.createInstance()` if Polymer is loaded, otherwise use `document.importNode()`.

#### v2.0.1
- Fixing bug where multiple `<app-route>`s had an `active` attribute.

#### v2.0.0
New features

- Added support for `<core-animated-pages>`. Example: set up the router like `<app-router core-animated-pages transitions="hero-transition cross-fade">` then include the `hero` and `cross-fade` attributes on the elements you want transitioned.

Breaking changes

- Previously the active route's content was under an `<active-route>` element. Now the content for the route is under it's `<app-route>` element. This changed to support `<core-animated-pages>`.
- The `<active-route>` element and `router.activeRouteContent` have been removed.
- Removed the `shadow` attribute from the `<app-router>`. This was applied to the `<active-route>` element which no longer exists.

#### v1.0.0
Breaking changes

- `pathType="auto|hash|regular"` has been replaced with `mode="auto|hash|pushstate"` for redirects, `router.go(path, options)`, and testing routes.

New features

- Added support for redirects with `<app-route path="..." redirect="/other/path"></app-route>`.
- Added `router.go(path, options)`. Example: `document.querySelector('app-router').go('/home', {replace: true})`.
- Note: If you're using redirects or `go()` you should specify the mode with `<app-router mode="pushstate|hash"></app-router>`. Leaving the mode as `auto` (the default) will change the hash, even if you wanted it to change the real path with pushstate.

#### v0.9.0
- Refactor `parseUrl()` to use the native `URL()` constructor and return additional information about the hash path.
- Cleaned up `testRoute()` and `routeArguments()` with additional information from `parseUrl()`.
- Moved utility functions to `AppRouter.util`.

#### v0.8.1
- Fixed bug where the regular path was being used when `pathType="hash"` was set on the router.

#### v0.8.0
- `template` no longer required on inline template routes.
- Only use `app-route`s that are direct children of the router by replacing `querySelector()` with `firstElementChild` and iterating with `nextSibling`.
- Took internal functions off the public API and simplified parameters.

#### v0.7.0
- Added the `pathType` attribute to the router. The options are `auto`, `hash`, and `regular`.
