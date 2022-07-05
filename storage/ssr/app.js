"use strict";
var _a;
var _ = require("lodash");
var axios = require("axios");
var vue = require("vue");
var inertiaVue3 = require("@inertiajs/inertia-vue3");
var progress = require("@inertiajs/progress");
var serverRenderer = require("vue/server-renderer");
function _interopDefaultLegacy(e2) {
  return e2 && typeof e2 === "object" && "default" in e2 ? e2 : { "default": e2 };
}
var ___default = /* @__PURE__ */ _interopDefaultLegacy(_);
var axios__default = /* @__PURE__ */ _interopDefaultLegacy(axios);
window._ = ___default["default"];
window.axios = axios__default["default"];
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var app = /* @__PURE__ */ (() => `/*
! tailwindcss v3.1.4 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: Nunito, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #2563eb;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6b7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder {
  color: #6b7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-date-and-time-value {
  min-height: 1.5em;
}

::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field {
  padding-top: 0;
  padding-bottom: 0;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
}

[multiple] {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
     color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px solid ButtonText;
  outline: 1px auto -webkit-focus-ring-color;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::-webkit-backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.inset-0 {
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.top-0 {
  top: 0px;
}
.right-0 {
  right: 0px;
}
.left-0 {
  left: 0px;
}
.z-0 {
  z-index: 0;
}
.z-50 {
  z-index: 50;
}
.z-40 {
  z-index: 40;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.ml-3 {
  margin-left: 0.75rem;
}
.-ml-px {
  margin-left: -1px;
}
.ml-1 {
  margin-left: 0.25rem;
}
.-mr-2 {
  margin-right: -0.5rem;
}
.mt-3 {
  margin-top: 0.75rem;
}
.mr-3 {
  margin-right: 0.75rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mr-2 {
  margin-right: 0.5rem;
}
.ml-2 {
  margin-left: 0.5rem;
}
.ml-4 {
  margin-left: 1rem;
}
.mt-8 {
  margin-top: 2rem;
}
.ml-12 {
  margin-left: 3rem;
}
.-mt-px {
  margin-top: -1px;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mt-1 {
  margin-top: 0.25rem;
}
.mt-6 {
  margin-top: 1.5rem;
}
.-mr-0\\.5 {
  margin-right: -0.125rem;
}
.-mr-0 {
  margin-right: -0px;
}
.block {
  display: block;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.grid {
  display: grid;
}
.hidden {
  display: none;
}
.h-5 {
  height: 1.25rem;
}
.h-16 {
  height: 4rem;
}
.h-10 {
  height: 2.5rem;
}
.h-4 {
  height: 1rem;
}
.h-6 {
  height: 1.5rem;
}
.h-8 {
  height: 2rem;
}
.h-20 {
  height: 5rem;
}
.h-9 {
  height: 2.25rem;
}
.min-h-screen {
  min-height: 100vh;
}
.w-5 {
  width: 1.25rem;
}
.w-auto {
  width: auto;
}
.w-4 {
  width: 1rem;
}
.w-6 {
  width: 1.5rem;
}
.w-8 {
  width: 2rem;
}
.w-full {
  width: 100%;
}
.w-20 {
  width: 5rem;
}
.w-48 {
  width: 12rem;
}
.max-w-7xl {
  max-width: 80rem;
}
.max-w-xl {
  max-width: 36rem;
}
.max-w-6xl {
  max-width: 72rem;
}
.flex-1 {
  flex: 1 1 0%;
}
.shrink-0 {
  flex-shrink: 0;
}
.origin-top-left {
  transform-origin: top left;
}
.origin-top {
  transform-origin: top;
}
.origin-top-right {
  transform-origin: top right;
}
.scale-95 {
  --tw-scale-x: .95;
  --tw-scale-y: .95;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.cursor-default {
  cursor: default;
}
.list-inside {
  list-style-position: inside;
}
.list-none {
  list-style-type: none;
}
.list-disc {
  list-style-type: disc;
}
.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.flex-col {
  flex-direction: column;
}
.flex-wrap {
  flex-wrap: wrap;
}
.items-center {
  align-items: center;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.justify-items-center {
  justify-items: center;
}
.space-x-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(2rem * var(--tw-space-x-reverse));
  margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.divide-gray-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-divide-opacity));
}
.self-center {
  align-self: center;
}
.overflow-hidden {
  overflow: hidden;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-l-md {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}
.rounded-r-md {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}
.border {
  border-width: 1px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-b-2 {
  border-bottom-width: 2px;
}
.border-l-4 {
  border-left-width: 4px;
}
.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}
.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}
.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}
.border-gray-400 {
  --tw-border-opacity: 1;
  border-color: rgb(156 163 175 / var(--tw-border-opacity));
}
.border-indigo-400 {
  --tw-border-opacity: 1;
  border-color: rgb(129 140 248 / var(--tw-border-opacity));
}
.border-transparent {
  border-color: transparent;
}
.border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}
.bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity));
}
.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
.bg-indigo-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(238 242 255 / var(--tw-bg-opacity));
}
.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
.fill-current {
  fill: currentColor;
}
.p-2 {
  padding: 0.5rem;
}
.p-6 {
  padding: 1.5rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.py-12 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.pt-2 {
  padding-top: 0.5rem;
}
.pb-3 {
  padding-bottom: 0.75rem;
}
.pt-4 {
  padding-top: 1rem;
}
.pb-1 {
  padding-bottom: 0.25rem;
}
.pr-4 {
  padding-right: 1rem;
}
.pl-3 {
  padding-left: 0.75rem;
}
.pt-8 {
  padding-top: 2rem;
}
.pt-1 {
  padding-top: 0.25rem;
}
.pt-6 {
  padding-top: 1.5rem;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.font-sans {
  font-family: Nunito, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.uppercase {
  text-transform: uppercase;
}
.leading-5 {
  line-height: 1.25rem;
}
.leading-7 {
  line-height: 1.75rem;
}
.leading-tight {
  line-height: 1.25;
}
.leading-4 {
  line-height: 1rem;
}
.tracking-wider {
  letter-spacing: 0.05em;
}
.tracking-widest {
  letter-spacing: 0.1em;
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}
.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}
.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}
.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(22 163 74 / var(--tw-text-opacity));
}
.text-indigo-600 {
  --tw-text-opacity: 1;
  color: rgb(79 70 229 / var(--tw-text-opacity));
}
.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity));
}
.text-indigo-700 {
  --tw-text-opacity: 1;
  color: rgb(67 56 202 / var(--tw-text-opacity));
}
.underline {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}
.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.opacity-25 {
  opacity: 0.25;
}
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-gray-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}
.ring-black {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity));
}
.ring-opacity-5 {
  --tw-ring-opacity: 0.05;
}
.transition {
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-150 {
  transition-duration: 150ms;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-75 {
  transition-duration: 75ms;
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}
.hover\\:border-gray-300:hover {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}
.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
.hover\\:bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
.hover\\:bg-gray-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}
.hover\\:text-gray-500:hover {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.hover\\:text-gray-400:hover {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
.hover\\:text-gray-700:hover {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}
.hover\\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}
.hover\\:text-gray-800:hover {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}
.focus\\:z-10:focus {
  z-index: 10;
}
.focus\\:border-blue-300:focus {
  --tw-border-opacity: 1;
  border-color: rgb(147 197 253 / var(--tw-border-opacity));
}
.focus\\:border-gray-300:focus {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}
.focus\\:border-indigo-300:focus {
  --tw-border-opacity: 1;
  border-color: rgb(165 180 252 / var(--tw-border-opacity));
}
.focus\\:border-indigo-700:focus {
  --tw-border-opacity: 1;
  border-color: rgb(67 56 202 / var(--tw-border-opacity));
}
.focus\\:border-gray-900:focus {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}
.focus\\:bg-gray-100:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
.focus\\:bg-indigo-100:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(224 231 255 / var(--tw-bg-opacity));
}
.focus\\:bg-gray-50:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
.focus\\:text-gray-700:focus {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}
.focus\\:text-gray-500:focus {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.focus\\:text-indigo-800:focus {
  --tw-text-opacity: 1;
  color: rgb(55 48 163 / var(--tw-text-opacity));
}
.focus\\:text-gray-800:focus {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}
.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.focus\\:ring:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-4:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-gray-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}
.focus\\:ring-gray-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity));
}
.focus\\:ring-indigo-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(199 210 254 / var(--tw-ring-opacity));
}
.focus\\:ring-opacity-50:focus {
  --tw-ring-opacity: 0.5;
}
.active\\:bg-gray-100:active {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
.active\\:bg-gray-900:active {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
.active\\:text-gray-700:active {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}
.active\\:text-gray-500:active {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.disabled\\:opacity-25:disabled {
  opacity: 0.25;
}
@media (prefers-color-scheme: dark) {

  .dark\\:divide-gray-600 > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-opacity: 1;
    border-color: rgb(75 85 99 / var(--tw-divide-opacity));
  }

  .dark\\:border-gray-700 {
    --tw-border-opacity: 1;
    border-color: rgb(55 65 81 / var(--tw-border-opacity));
  }

  .dark\\:bg-gray-800 {
    --tw-bg-opacity: 1;
    background-color: rgb(31 41 55 / var(--tw-bg-opacity));
  }

  .dark\\:bg-gray-700 {
    --tw-bg-opacity: 1;
    background-color: rgb(55 65 81 / var(--tw-bg-opacity));
  }

  .dark\\:bg-gray-900 {
    --tw-bg-opacity: 1;
    background-color: rgb(17 24 39 / var(--tw-bg-opacity));
  }

  .dark\\:text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  .dark\\:text-gray-400 {
    --tw-text-opacity: 1;
    color: rgb(156 163 175 / var(--tw-text-opacity));
  }

  .dark\\:text-gray-200 {
    --tw-text-opacity: 1;
    color: rgb(229 231 235 / var(--tw-text-opacity));
  }

  .dark\\:text-gray-500 {
    --tw-text-opacity: 1;
    color: rgb(107 114 128 / var(--tw-text-opacity));
  }

  .dark\\:hover\\:bg-gray-600:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(75 85 99 / var(--tw-bg-opacity));
  }

  .dark\\:hover\\:bg-gray-700:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(55 65 81 / var(--tw-bg-opacity));
  }

  .dark\\:hover\\:text-white:hover {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  .dark\\:focus\\:ring-gray-600:focus {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity));
  }
}
@media (min-width: 640px) {

  .sm\\:-my-px {
    margin-top: -1px;
    margin-bottom: -1px;
  }

  .sm\\:ml-10 {
    margin-left: 2.5rem;
  }

  .sm\\:ml-6 {
    margin-left: 1.5rem;
  }

  .sm\\:ml-0 {
    margin-left: 0px;
  }

  .sm\\:block {
    display: block;
  }

  .sm\\:flex {
    display: flex;
  }

  .sm\\:hidden {
    display: none;
  }

  .sm\\:h-9 {
    height: 2.25rem;
  }

  .sm\\:h-20 {
    height: 5rem;
  }

  .sm\\:max-w-md {
    max-width: 28rem;
  }

  .sm\\:flex-1 {
    flex: 1 1 0%;
  }

  .sm\\:items-center {
    align-items: center;
  }

  .sm\\:justify-start {
    justify-content: flex-start;
  }

  .sm\\:justify-center {
    justify-content: center;
  }

  .sm\\:justify-between {
    justify-content: space-between;
  }

  .sm\\:rounded-lg {
    border-radius: 0.5rem;
  }

  .sm\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .sm\\:px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .sm\\:pt-0 {
    padding-top: 0px;
  }

  .sm\\:text-left {
    text-align: left;
  }

  .sm\\:text-right {
    text-align: right;
  }
}
@media (min-width: 768px) {

  .md\\:order-2 {
    order: 2;
  }

  .md\\:order-1 {
    order: 1;
  }

  .md\\:mr-0 {
    margin-right: 0px;
  }

  .md\\:mt-0 {
    margin-top: 0px;
  }

  .md\\:flex {
    display: flex;
  }

  .md\\:hidden {
    display: none;
  }

  .md\\:w-auto {
    width: auto;
  }

  .md\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .md\\:flex-row {
    flex-direction: row;
  }

  .md\\:space-x-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(2rem * var(--tw-space-x-reverse));
    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\\:border-0 {
    border-width: 0px;
  }

  .md\\:border-t-0 {
    border-top-width: 0px;
  }

  .md\\:border-l {
    border-left-width: 1px;
  }

  .md\\:bg-transparent {
    background-color: transparent;
  }

  .md\\:p-0 {
    padding: 0px;
  }

  .md\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .md\\:font-medium {
    font-weight: 500;
  }

  .md\\:text-blue-700 {
    --tw-text-opacity: 1;
    color: rgb(29 78 216 / var(--tw-text-opacity));
  }

  .md\\:hover\\:bg-transparent:hover {
    background-color: transparent;
  }

  .md\\:hover\\:text-blue-700:hover {
    --tw-text-opacity: 1;
    color: rgb(29 78 216 / var(--tw-text-opacity));
  }

  @media (prefers-color-scheme: dark) {

    .md\\:dark\\:hover\\:bg-transparent:hover {
      background-color: transparent;
    }

    .md\\:dark\\:hover\\:text-white:hover {
      --tw-text-opacity: 1;
      color: rgb(255 255 255 / var(--tw-text-opacity));
    }
  }
}
@media (min-width: 1024px) {

  .lg\\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
`)();
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
function t(t4, r2) {
  for (var n2 = 0; n2 < r2.length; n2++) {
    var e2 = r2[n2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(t4, e2.key, e2);
  }
}
function r(r2, n2, e2) {
  return n2 && t(r2.prototype, n2), e2 && t(r2, e2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
}
function n() {
  return n = Object.assign || function(t4) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var n2 = arguments[r2];
      for (var e2 in n2)
        Object.prototype.hasOwnProperty.call(n2, e2) && (t4[e2] = n2[e2]);
    }
    return t4;
  }, n.apply(this, arguments);
}
function e(t4) {
  return e = Object.setPrototypeOf ? Object.getPrototypeOf : function(t5) {
    return t5.__proto__ || Object.getPrototypeOf(t5);
  }, e(t4);
}
function o(t4, r2) {
  return o = Object.setPrototypeOf || function(t5, r3) {
    return t5.__proto__ = r3, t5;
  }, o(t4, r2);
}
function i() {
  if (typeof Reflect == "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch (t4) {
    return false;
  }
}
function u(t4, r2, n2) {
  return u = i() ? Reflect.construct : function(t5, r3, n3) {
    var e2 = [null];
    e2.push.apply(e2, r3);
    var i2 = new (Function.bind.apply(t5, e2))();
    return n3 && o(i2, n3.prototype), i2;
  }, u.apply(null, arguments);
}
function f(t4) {
  var r2 = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return f = function(t5) {
    if (t5 === null || Function.toString.call(t5).indexOf("[native code]") === -1)
      return t5;
    if (typeof t5 != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (r2 !== void 0) {
      if (r2.has(t5))
        return r2.get(t5);
      r2.set(t5, n2);
    }
    function n2() {
      return u(t5, arguments, e(this).constructor);
    }
    return n2.prototype = Object.create(t5.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), o(n2, t5);
  }, f(t4);
}
var a = String.prototype.replace, c = /%20/g, l = { default: "RFC3986", formatters: { RFC1738: function(t4) {
  return a.call(t4, c, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: "RFC3986" }, s = Object.prototype.hasOwnProperty, v = Array.isArray, p = function() {
  for (var t4 = [], r2 = 0; r2 < 256; ++r2)
    t4.push("%" + ((r2 < 16 ? "0" : "") + r2.toString(16)).toUpperCase());
  return t4;
}(), y = function(t4, r2) {
  for (var n2 = r2 && r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, e2 = 0; e2 < t4.length; ++e2)
    t4[e2] !== void 0 && (n2[e2] = t4[e2]);
  return n2;
}, d = { arrayToObject: y, assign: function(t4, r2) {
  return Object.keys(r2).reduce(function(t5, n2) {
    return t5[n2] = r2[n2], t5;
  }, t4);
}, combine: function(t4, r2) {
  return [].concat(t4, r2);
}, compact: function(t4) {
  for (var r2 = [{ obj: { o: t4 }, prop: "o" }], n2 = [], e2 = 0; e2 < r2.length; ++e2)
    for (var o2 = r2[e2], i2 = o2.obj[o2.prop], u2 = Object.keys(i2), f2 = 0; f2 < u2.length; ++f2) {
      var a2 = u2[f2], c2 = i2[a2];
      typeof c2 == "object" && c2 !== null && n2.indexOf(c2) === -1 && (r2.push({ obj: i2, prop: a2 }), n2.push(c2));
    }
  return function(t5) {
    for (; t5.length > 1; ) {
      var r3 = t5.pop(), n3 = r3.obj[r3.prop];
      if (v(n3)) {
        for (var e3 = [], o3 = 0; o3 < n3.length; ++o3)
          n3[o3] !== void 0 && e3.push(n3[o3]);
        r3.obj[r3.prop] = e3;
      }
    }
  }(r2), t4;
}, decode: function(t4, r2, n2) {
  var e2 = t4.replace(/\+/g, " ");
  if (n2 === "iso-8859-1")
    return e2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(e2);
  } catch (t5) {
    return e2;
  }
}, encode: function(t4, r2, n2, e2, o2) {
  if (t4.length === 0)
    return t4;
  var i2 = t4;
  if (typeof t4 == "symbol" ? i2 = Symbol.prototype.toString.call(t4) : typeof t4 != "string" && (i2 = String(t4)), n2 === "iso-8859-1")
    return escape(i2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
      return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
    });
  for (var u2 = "", f2 = 0; f2 < i2.length; ++f2) {
    var a2 = i2.charCodeAt(f2);
    a2 === 45 || a2 === 46 || a2 === 95 || a2 === 126 || a2 >= 48 && a2 <= 57 || a2 >= 65 && a2 <= 90 || a2 >= 97 && a2 <= 122 || o2 === l.RFC1738 && (a2 === 40 || a2 === 41) ? u2 += i2.charAt(f2) : a2 < 128 ? u2 += p[a2] : a2 < 2048 ? u2 += p[192 | a2 >> 6] + p[128 | 63 & a2] : a2 < 55296 || a2 >= 57344 ? u2 += p[224 | a2 >> 12] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2] : (a2 = 65536 + ((1023 & a2) << 10 | 1023 & i2.charCodeAt(f2 += 1)), u2 += p[240 | a2 >> 18] + p[128 | a2 >> 12 & 63] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2]);
  }
  return u2;
}, isBuffer: function(t4) {
  return !(!t4 || typeof t4 != "object" || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return Object.prototype.toString.call(t4) === "[object RegExp]";
}, maybeMap: function(t4, r2) {
  if (v(t4)) {
    for (var n2 = [], e2 = 0; e2 < t4.length; e2 += 1)
      n2.push(r2(t4[e2]));
    return n2;
  }
  return r2(t4);
}, merge: function t2(r2, n2, e2) {
  if (!n2)
    return r2;
  if (typeof n2 != "object") {
    if (v(r2))
      r2.push(n2);
    else {
      if (!r2 || typeof r2 != "object")
        return [r2, n2];
      (e2 && (e2.plainObjects || e2.allowPrototypes) || !s.call(Object.prototype, n2)) && (r2[n2] = true);
    }
    return r2;
  }
  if (!r2 || typeof r2 != "object")
    return [r2].concat(n2);
  var o2 = r2;
  return v(r2) && !v(n2) && (o2 = y(r2, e2)), v(r2) && v(n2) ? (n2.forEach(function(n3, o3) {
    if (s.call(r2, o3)) {
      var i2 = r2[o3];
      i2 && typeof i2 == "object" && n3 && typeof n3 == "object" ? r2[o3] = t2(i2, n3, e2) : r2.push(n3);
    } else
      r2[o3] = n3;
  }), r2) : Object.keys(n2).reduce(function(r3, o3) {
    var i2 = n2[o3];
    return r3[o3] = s.call(r3, o3) ? t2(r3[o3], i2, e2) : i2, r3;
  }, o2);
} }, b = Object.prototype.hasOwnProperty, h = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, r2) {
  return t4 + "[" + r2 + "]";
}, repeat: function(t4) {
  return t4;
} }, m = Array.isArray, g = String.prototype.split, j = Array.prototype.push, w = function(t4, r2) {
  j.apply(t4, m(r2) ? r2 : [r2]);
}, O = Date.prototype.toISOString, E = l.default, R = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: d.encode, encodeValuesOnly: false, format: E, formatter: l.formatters[E], indices: false, serializeDate: function(t4) {
  return O.call(t4);
}, skipNulls: false, strictNullHandling: false }, S = function t3(r2, n2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2) {
  var b2, h2 = r2;
  if (typeof f2 == "function" ? h2 = f2(n2, h2) : h2 instanceof Date ? h2 = l2(h2) : e2 === "comma" && m(h2) && (h2 = d.maybeMap(h2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), h2 === null) {
    if (o2)
      return u2 && !p2 ? u2(n2, R.encoder, y2, "key", s2) : n2;
    h2 = "";
  }
  if (typeof (b2 = h2) == "string" || typeof b2 == "number" || typeof b2 == "boolean" || typeof b2 == "symbol" || typeof b2 == "bigint" || d.isBuffer(h2)) {
    if (u2) {
      var j2 = p2 ? n2 : u2(n2, R.encoder, y2, "key", s2);
      if (e2 === "comma" && p2) {
        for (var O2 = g.call(String(h2), ","), E2 = "", S2 = 0; S2 < O2.length; ++S2)
          E2 += (S2 === 0 ? "" : ",") + v2(u2(O2[S2], R.encoder, y2, "value", s2));
        return [v2(j2) + "=" + E2];
      }
      return [v2(j2) + "=" + v2(u2(h2, R.encoder, y2, "value", s2))];
    }
    return [v2(n2) + "=" + v2(String(h2))];
  }
  var k2, x2 = [];
  if (h2 === void 0)
    return x2;
  if (e2 === "comma" && m(h2))
    k2 = [{ value: h2.length > 0 ? h2.join(",") || null : void 0 }];
  else if (m(f2))
    k2 = f2;
  else {
    var C2 = Object.keys(h2);
    k2 = a2 ? C2.sort(a2) : C2;
  }
  for (var N2 = 0; N2 < k2.length; ++N2) {
    var T2 = k2[N2], F2 = typeof T2 == "object" && T2.value !== void 0 ? T2.value : h2[T2];
    if (!i2 || F2 !== null) {
      var D2 = m(h2) ? typeof e2 == "function" ? e2(n2, T2) : n2 : n2 + (c2 ? "." + T2 : "[" + T2 + "]");
      w(x2, t3(F2, D2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2));
    }
  }
  return x2;
}, k = Object.prototype.hasOwnProperty, x = Array.isArray, C = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: d.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, N = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, r2) {
    return String.fromCharCode(parseInt(r2, 10));
  });
}, T = function(t4, r2) {
  return t4 && typeof t4 == "string" && r2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, F = function(t4, r2, n2, e2) {
  if (t4) {
    var o2 = n2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = n2.depth > 0 && /(\[[^[\]]*])/.exec(o2), f2 = u2 ? o2.slice(0, u2.index) : o2, a2 = [];
    if (f2) {
      if (!n2.plainObjects && k.call(Object.prototype, f2) && !n2.allowPrototypes)
        return;
      a2.push(f2);
    }
    for (var c2 = 0; n2.depth > 0 && (u2 = i2.exec(o2)) !== null && c2 < n2.depth; ) {
      if (c2 += 1, !n2.plainObjects && k.call(Object.prototype, u2[1].slice(1, -1)) && !n2.allowPrototypes)
        return;
      a2.push(u2[1]);
    }
    return u2 && a2.push("[" + o2.slice(u2.index) + "]"), function(t5, r3, n3, e3) {
      for (var o3 = e3 ? r3 : T(r3, n3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, f3 = t5[i3];
        if (f3 === "[]" && n3.parseArrays)
          u3 = [].concat(o3);
        else {
          u3 = n3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var a3 = f3.charAt(0) === "[" && f3.charAt(f3.length - 1) === "]" ? f3.slice(1, -1) : f3, c3 = parseInt(a3, 10);
          n3.parseArrays || a3 !== "" ? !isNaN(c3) && f3 !== a3 && String(c3) === a3 && c3 >= 0 && n3.parseArrays && c3 <= n3.arrayLimit ? (u3 = [])[c3] = o3 : a3 !== "__proto__" && (u3[a3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(a2, r2, n2, e2);
  }
}, D = function(t4, r2) {
  var n2 = function(t5) {
    if (!t5)
      return C;
    if (t5.decoder != null && typeof t5.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (t5.charset !== void 0 && t5.charset !== "utf-8" && t5.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    return { allowDots: t5.allowDots === void 0 ? C.allowDots : !!t5.allowDots, allowPrototypes: typeof t5.allowPrototypes == "boolean" ? t5.allowPrototypes : C.allowPrototypes, arrayLimit: typeof t5.arrayLimit == "number" ? t5.arrayLimit : C.arrayLimit, charset: t5.charset === void 0 ? C.charset : t5.charset, charsetSentinel: typeof t5.charsetSentinel == "boolean" ? t5.charsetSentinel : C.charsetSentinel, comma: typeof t5.comma == "boolean" ? t5.comma : C.comma, decoder: typeof t5.decoder == "function" ? t5.decoder : C.decoder, delimiter: typeof t5.delimiter == "string" || d.isRegExp(t5.delimiter) ? t5.delimiter : C.delimiter, depth: typeof t5.depth == "number" || t5.depth === false ? +t5.depth : C.depth, ignoreQueryPrefix: t5.ignoreQueryPrefix === true, interpretNumericEntities: typeof t5.interpretNumericEntities == "boolean" ? t5.interpretNumericEntities : C.interpretNumericEntities, parameterLimit: typeof t5.parameterLimit == "number" ? t5.parameterLimit : C.parameterLimit, parseArrays: t5.parseArrays !== false, plainObjects: typeof t5.plainObjects == "boolean" ? t5.plainObjects : C.plainObjects, strictNullHandling: typeof t5.strictNullHandling == "boolean" ? t5.strictNullHandling : C.strictNullHandling };
  }(r2);
  if (t4 === "" || t4 == null)
    return n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var e2 = typeof t4 == "string" ? function(t5, r3) {
    var n3, e3 = {}, o3 = (r3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(r3.delimiter, r3.parameterLimit === Infinity ? void 0 : r3.parameterLimit), i3 = -1, u3 = r3.charset;
    if (r3.charsetSentinel)
      for (n3 = 0; n3 < o3.length; ++n3)
        o3[n3].indexOf("utf8=") === 0 && (o3[n3] === "utf8=%E2%9C%93" ? u3 = "utf-8" : o3[n3] === "utf8=%26%2310003%3B" && (u3 = "iso-8859-1"), i3 = n3, n3 = o3.length);
    for (n3 = 0; n3 < o3.length; ++n3)
      if (n3 !== i3) {
        var f3, a3, c2 = o3[n3], l2 = c2.indexOf("]="), s2 = l2 === -1 ? c2.indexOf("=") : l2 + 1;
        s2 === -1 ? (f3 = r3.decoder(c2, C.decoder, u3, "key"), a3 = r3.strictNullHandling ? null : "") : (f3 = r3.decoder(c2.slice(0, s2), C.decoder, u3, "key"), a3 = d.maybeMap(T(c2.slice(s2 + 1), r3), function(t6) {
          return r3.decoder(t6, C.decoder, u3, "value");
        })), a3 && r3.interpretNumericEntities && u3 === "iso-8859-1" && (a3 = N(a3)), c2.indexOf("[]=") > -1 && (a3 = x(a3) ? [a3] : a3), e3[f3] = k.call(e3, f3) ? d.combine(e3[f3], a3) : a3;
      }
    return e3;
  }(t4, n2) : t4, o2 = n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(e2), u2 = 0; u2 < i2.length; ++u2) {
    var f2 = i2[u2], a2 = F(f2, e2[f2], n2, typeof t4 == "string");
    o2 = d.merge(o2, a2, n2);
  }
  return d.compact(o2);
}, $ = /* @__PURE__ */ function() {
  function t4(t5, r2, n3) {
    var e2, o2;
    this.name = t5, this.definition = r2, this.bindings = (e2 = r2.bindings) != null ? e2 : {}, this.wheres = (o2 = r2.wheres) != null ? o2 : {}, this.config = n3;
  }
  var n2 = t4.prototype;
  return n2.matchesUrl = function(t5) {
    var r2 = this;
    if (!this.definition.methods.includes("GET"))
      return false;
    var n3 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, function(t6, n4, e3, o3) {
      var i3, u3 = "(?<" + e3 + ">" + (((i3 = r2.wheres[e3]) == null ? void 0 : i3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
      return o3 ? "(" + n4 + u3 + ")?" : "" + n4 + u3;
    }).replace(/^\w+:\/\//, ""), e2 = t5.replace(/^\w+:\/\//, "").split("?"), o2 = e2[0], i2 = e2[1], u2 = new RegExp("^" + n3 + "/?$").exec(o2);
    return !!u2 && { params: u2.groups, query: D(i2) };
  }, n2.compile = function(t5) {
    var r2 = this, n3 = this.parameterSegments;
    return n3.length ? this.template.replace(/{([^}?]+)(\??)}/g, function(e2, o2, i2) {
      var u2, f2, a2;
      if (!i2 && [null, void 0].includes(t5[o2]))
        throw new Error("Ziggy error: '" + o2 + "' parameter is required for route '" + r2.name + "'.");
      if (n3[n3.length - 1].name === o2 && r2.wheres[o2] === ".*")
        return encodeURIComponent((a2 = t5[o2]) != null ? a2 : "").replace(/%2F/g, "/");
      if (r2.wheres[o2] && !new RegExp("^" + (i2 ? "(" + r2.wheres[o2] + ")?" : r2.wheres[o2]) + "$").test((u2 = t5[o2]) != null ? u2 : ""))
        throw new Error("Ziggy error: '" + o2 + "' parameter does not match required format '" + r2.wheres[o2] + "' for route '" + r2.name + "'.");
      return encodeURIComponent((f2 = t5[o2]) != null ? f2 : "");
    }).replace(/\/+$/, "") : this.template;
  }, r(t4, [{ key: "template", get: function() {
    return ((this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "") + "/" + this.definition.uri).replace(/\/+$/, "");
  } }, { key: "parameterSegments", get: function() {
    var t5, r2;
    return (t5 = (r2 = this.template.match(/{[^}?]+\??}/g)) == null ? void 0 : r2.map(function(t6) {
      return { name: t6.replace(/{|\??}/g, ""), required: !/\?}$/.test(t6) };
    })) != null ? t5 : [];
  } }]), t4;
}(), A = /* @__PURE__ */ function(t4) {
  var e2, i2;
  function u2(r2, e3, o2, i3) {
    var u3;
    if (o2 === void 0 && (o2 = true), (u3 = t4.call(this) || this).t = i3 != null ? i3 : typeof Ziggy != "undefined" ? Ziggy : globalThis == null ? void 0 : globalThis.Ziggy, u3.t = n({}, u3.t, { absolute: o2 }), r2) {
      if (!u3.t.routes[r2])
        throw new Error("Ziggy error: route '" + r2 + "' is not in the route list.");
      u3.i = new $(r2, u3.t.routes[r2], u3.t), u3.u = u3.l(e3);
    }
    return u3;
  }
  i2 = t4, (e2 = u2).prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, o(e2, i2);
  var f2 = u2.prototype;
  return f2.toString = function() {
    var t5 = this, r2 = Object.keys(this.u).filter(function(r3) {
      return !t5.i.parameterSegments.some(function(t6) {
        return t6.name === r3;
      });
    }).filter(function(t6) {
      return t6 !== "_query";
    }).reduce(function(r3, e3) {
      var o2;
      return n({}, r3, ((o2 = {})[e3] = t5.u[e3], o2));
    }, {});
    return this.i.compile(this.u) + function(t6, r3) {
      var n2, e3 = t6, o2 = function(t7) {
        if (!t7)
          return R;
        if (t7.encoder != null && typeof t7.encoder != "function")
          throw new TypeError("Encoder has to be a function.");
        var r4 = t7.charset || R.charset;
        if (t7.charset !== void 0 && t7.charset !== "utf-8" && t7.charset !== "iso-8859-1")
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n3 = l.default;
        if (t7.format !== void 0) {
          if (!b.call(l.formatters, t7.format))
            throw new TypeError("Unknown format option provided.");
          n3 = t7.format;
        }
        var e4 = l.formatters[n3], o3 = R.filter;
        return (typeof t7.filter == "function" || m(t7.filter)) && (o3 = t7.filter), { addQueryPrefix: typeof t7.addQueryPrefix == "boolean" ? t7.addQueryPrefix : R.addQueryPrefix, allowDots: t7.allowDots === void 0 ? R.allowDots : !!t7.allowDots, charset: r4, charsetSentinel: typeof t7.charsetSentinel == "boolean" ? t7.charsetSentinel : R.charsetSentinel, delimiter: t7.delimiter === void 0 ? R.delimiter : t7.delimiter, encode: typeof t7.encode == "boolean" ? t7.encode : R.encode, encoder: typeof t7.encoder == "function" ? t7.encoder : R.encoder, encodeValuesOnly: typeof t7.encodeValuesOnly == "boolean" ? t7.encodeValuesOnly : R.encodeValuesOnly, filter: o3, format: n3, formatter: e4, serializeDate: typeof t7.serializeDate == "function" ? t7.serializeDate : R.serializeDate, skipNulls: typeof t7.skipNulls == "boolean" ? t7.skipNulls : R.skipNulls, sort: typeof t7.sort == "function" ? t7.sort : null, strictNullHandling: typeof t7.strictNullHandling == "boolean" ? t7.strictNullHandling : R.strictNullHandling };
      }(r3);
      typeof o2.filter == "function" ? e3 = (0, o2.filter)("", e3) : m(o2.filter) && (n2 = o2.filter);
      var i3 = [];
      if (typeof e3 != "object" || e3 === null)
        return "";
      var u3 = h[r3 && r3.arrayFormat in h ? r3.arrayFormat : r3 && "indices" in r3 ? r3.indices ? "indices" : "repeat" : "indices"];
      n2 || (n2 = Object.keys(e3)), o2.sort && n2.sort(o2.sort);
      for (var f3 = 0; f3 < n2.length; ++f3) {
        var a2 = n2[f3];
        o2.skipNulls && e3[a2] === null || w(i3, S(e3[a2], a2, u3, o2.strictNullHandling, o2.skipNulls, o2.encode ? o2.encoder : null, o2.filter, o2.sort, o2.allowDots, o2.serializeDate, o2.format, o2.formatter, o2.encodeValuesOnly, o2.charset));
      }
      var c2 = i3.join(o2.delimiter), s2 = o2.addQueryPrefix === true ? "?" : "";
      return o2.charsetSentinel && (s2 += o2.charset === "iso-8859-1" ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), c2.length > 0 ? s2 + c2 : "";
    }(n({}, r2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: function(t6, r3) {
      return typeof t6 == "boolean" ? Number(t6) : r3(t6);
    } });
  }, f2.v = function(t5) {
    var r2 = this;
    t5 ? this.t.absolute && t5.startsWith("/") && (t5 = this.p().host + t5) : t5 = this.h();
    var e3 = {}, o2 = Object.entries(this.t.routes).find(function(n2) {
      return e3 = new $(n2[0], n2[1], r2.t).matchesUrl(t5);
    }) || [void 0, void 0];
    return n({ name: o2[0] }, e3, { route: o2[1] });
  }, f2.h = function() {
    var t5 = this.p(), r2 = t5.pathname, n2 = t5.search;
    return (this.t.absolute ? t5.host + r2 : r2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n2;
  }, f2.current = function(t5, r2) {
    var e3 = this.v(), o2 = e3.name, i3 = e3.params, u3 = e3.query, f3 = e3.route;
    if (!t5)
      return o2;
    var a2 = new RegExp("^" + t5.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o2);
    if ([null, void 0].includes(r2) || !a2)
      return a2;
    var c2 = new $(o2, f3, this.t);
    r2 = this.l(r2, c2);
    var l2 = n({}, i3, u3);
    return !(!Object.values(r2).every(function(t6) {
      return !t6;
    }) || Object.values(l2).some(function(t6) {
      return t6 !== void 0;
    })) || Object.entries(r2).every(function(t6) {
      return l2[t6[0]] == t6[1];
    });
  }, f2.p = function() {
    var t5, r2, n2, e3, o2, i3, u3 = typeof window != "undefined" ? window.location : {}, f3 = u3.host, a2 = u3.pathname, c2 = u3.search;
    return { host: (t5 = (r2 = this.t.location) == null ? void 0 : r2.host) != null ? t5 : f3 === void 0 ? "" : f3, pathname: (n2 = (e3 = this.t.location) == null ? void 0 : e3.pathname) != null ? n2 : a2 === void 0 ? "" : a2, search: (o2 = (i3 = this.t.location) == null ? void 0 : i3.search) != null ? o2 : c2 === void 0 ? "" : c2 };
  }, f2.has = function(t5) {
    return Object.keys(this.t.routes).includes(t5);
  }, f2.l = function(t5, r2) {
    var e3 = this;
    t5 === void 0 && (t5 = {}), r2 === void 0 && (r2 = this.i), t5 = ["string", "number"].includes(typeof t5) ? [t5] : t5;
    var o2 = r2.parameterSegments.filter(function(t6) {
      return !e3.t.defaults[t6.name];
    });
    if (Array.isArray(t5))
      t5 = t5.reduce(function(t6, r3, e4) {
        var i4, u3;
        return n({}, t6, o2[e4] ? ((i4 = {})[o2[e4].name] = r3, i4) : typeof r3 == "object" ? r3 : ((u3 = {})[r3] = "", u3));
      }, {});
    else if (o2.length === 1 && !t5[o2[0].name] && (t5.hasOwnProperty(Object.values(r2.bindings)[0]) || t5.hasOwnProperty("id"))) {
      var i3;
      (i3 = {})[o2[0].name] = t5, t5 = i3;
    }
    return n({}, this.m(r2), this.g(t5, r2));
  }, f2.m = function(t5) {
    var r2 = this;
    return t5.parameterSegments.filter(function(t6) {
      return r2.t.defaults[t6.name];
    }).reduce(function(t6, e3, o2) {
      var i3, u3 = e3.name;
      return n({}, t6, ((i3 = {})[u3] = r2.t.defaults[u3], i3));
    }, {});
  }, f2.g = function(t5, r2) {
    var e3 = r2.bindings, o2 = r2.parameterSegments;
    return Object.entries(t5).reduce(function(t6, r3) {
      var i3, u3, f3 = r3[0], a2 = r3[1];
      if (!a2 || typeof a2 != "object" || Array.isArray(a2) || !o2.some(function(t7) {
        return t7.name === f3;
      }))
        return n({}, t6, ((u3 = {})[f3] = a2, u3));
      if (!a2.hasOwnProperty(e3[f3])) {
        if (!a2.hasOwnProperty("id"))
          throw new Error("Ziggy error: object passed as '" + f3 + "' parameter is missing route model binding key '" + e3[f3] + "'.");
        e3[f3] = "id";
      }
      return n({}, t6, ((i3 = {})[f3] = a2[e3[f3]], i3));
    }, {});
  }, f2.valueOf = function() {
    return this.toString();
  }, f2.check = function(t5) {
    return this.has(t5);
  }, r(u2, [{ key: "params", get: function() {
    var t5 = this.v();
    return n({}, t5.params, t5.query);
  } }]), u2;
}(/* @__PURE__ */ f(String)), I = { install: function(t4, r2) {
  var n2 = function(t5, n3, e2, o2) {
    return o2 === void 0 && (o2 = r2), function(t6, r3, n4, e3) {
      var o3 = new A(t6, r3, n4, e3);
      return t6 ? o3.toString() : o3;
    }(t5, n3, e2, o2);
  };
  t4.mixin({ methods: { route: n2 } }), parseInt(t4.version) > 2 && t4.provide("route", n2);
} };
const appName = ((_a = window.document.getElementsByTagName("title")[0]) == null ? void 0 : _a.innerText) || "Laravel";
inertiaVue3.createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, { "./Pages/Dashboard.vue": () => Promise.resolve().then(function() {
    return Dashboard;
  }), "./Pages/Welcome.vue": () => Promise.resolve().then(function() {
    return Welcome$1;
  }), "./Pages/Auth/ConfirmPassword.vue": () => Promise.resolve().then(function() {
    return ConfirmPassword;
  }), "./Pages/Auth/ForgotPassword.vue": () => Promise.resolve().then(function() {
    return ForgotPassword;
  }), "./Pages/Auth/Login.vue": () => Promise.resolve().then(function() {
    return Login;
  }), "./Pages/Auth/Register.vue": () => Promise.resolve().then(function() {
    return Register;
  }), "./Pages/Auth/ResetPassword.vue": () => Promise.resolve().then(function() {
    return ResetPassword;
  }), "./Pages/Auth/VerifyEmail.vue": () => Promise.resolve().then(function() {
    return VerifyEmail;
  }) }),
  setup({ el, app: app2, props, plugin }) {
    return vue.createApp({ render: () => vue.h(app2, props) }).use(plugin).use(I, Ziggy).mount(el);
  }
});
progress.InertiaProgress.init({ color: "#4B5563" });
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$j = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    viewBox: "0 0 316 316",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z"></path></svg>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationLogo.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var BreezeApplicationLogo = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$i = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      default: "right"
    },
    width: {
      default: "48"
    },
    contentClasses: {
      default: () => ["py-1", "bg-white"]
    }
  },
  setup(__props) {
    const props = __props;
    const closeOnEscape = (e2) => {
      if (open.value && e2.key === "Escape") {
        open.value = false;
      }
    };
    vue.onMounted(() => document.addEventListener("keydown", closeOnEscape));
    vue.onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = vue.computed(() => {
      return {
        "48": "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = vue.computed(() => {
      if (props.align === "left") {
        return "origin-top-left left-0";
      } else if (props.align === "right") {
        return "origin-top-right right-0";
      } else {
        return "origin-top";
      }
    });
    const open = vue.ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "relative" }, _attrs))}><div>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${serverRenderer.ssrRenderStyle(open.value ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${serverRenderer.ssrRenderStyle([
        open.value ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${serverRenderer.ssrRenderClass([[vue.unref(widthClass), vue.unref(alignmentClasses)], "absolute z-50 mt-2 rounded-md shadow-lg"])}"><div class="${serverRenderer.ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {
  __name: "DropdownLink",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Link), vue.mergeProps({ class: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" }, _attrs), {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: ["href", "active"],
  setup(__props) {
    const props = __props;
    const classes = vue.computed(() => props.active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition  duration-150 ease-in-out" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Link), vue.mergeProps({
        href: __props.href,
        class: vue.unref(classes)
      }, _attrs), {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "ResponsiveNavLink",
  __ssrInlineRender: true,
  props: ["href", "active"],
  setup(__props) {
    const props = __props;
    const classes = vue.computed(() => props.active ? "block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out" : "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Link), vue.mergeProps({
        href: __props.href,
        class: vue.unref(classes)
      }, _attrs), {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ResponsiveNavLink.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "Authenticated",
  __ssrInlineRender: true,
  setup(__props) {
    const showingNavigationDropdown = vue.ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><div class="min-h-screen bg-gray-100"><nav class="bg-white border-b border-gray-100"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><div class="shrink-0 flex items-center">`);
      _push(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Link), {
        href: _ctx.route("dashboard")
      }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(BreezeApplicationLogo, { class: "block h-9 w-auto" }, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(BreezeApplicationLogo, { class: "block h-9 w-auto" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              vue.createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden sm:flex sm:items-center sm:ml-6"><div class="ml-3 relative">`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$i, {
        align: "right",
        width: "48"
      }, {
        trigger: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.$page.props.auth.user.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
          } else {
            return [
              vue.createVNode("span", { class: "inline-flex rounded-md" }, [
                vue.createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                }, [
                  vue.createTextVNode(vue.toDisplayString(_ctx.$page.props.auth.user.name) + " ", 1),
                  (vue.openBlock(), vue.createBlock("svg", {
                    class: "ml-2 -mr-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    vue.createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ])
              ])
            ];
          }
        }),
        content: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$h, {
              href: _ctx.route("logout"),
              method: "post",
              as: "button"
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out `);
                } else {
                  return [
                    vue.createTextVNode(" Log Out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_sfc_main$h, {
                href: _ctx.route("logout"),
                method: "post",
                as: "button"
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" Log Out ")
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="-mr-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${serverRenderer.ssrRenderClass({ "hidden": showingNavigationDropdown.value, "inline-flex": !showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${serverRenderer.ssrRenderClass({ "hidden": !showingNavigationDropdown.value, "inline-flex": showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${serverRenderer.ssrRenderClass([{ "block": showingNavigationDropdown.value, "hidden": !showingNavigationDropdown.value }, "sm:hidden"])}"><div class="pt-2 pb-3 space-y-1">`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$f, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              vue.createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="pt-4 pb-1 border-t border-gray-200"><div class="px-4"><div class="font-medium text-base text-gray-800">${serverRenderer.ssrInterpolate(_ctx.$page.props.auth.user.name)}</div><div class="font-medium text-sm text-gray-500">${serverRenderer.ssrInterpolate(_ctx.$page.props.auth.user.email)}</div></div><div class="mt-3 space-y-1">`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$f, {
        href: _ctx.route("logout"),
        method: "post",
        as: "button"
      }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log Out `);
          } else {
            return [
              vue.createTextVNode(" Log Out ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav>`);
      if (_ctx.$slots.header) {
        _push(`<header class="bg-white shadow"><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Authenticated.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Head), { title: "Dashboard" }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$e, null, {
        header: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Dashboard </h2>`);
          } else {
            return [
              vue.createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Dashboard ")
            ];
          }
        }),
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 bg-white border-b border-gray-200"${_scopeId}> You&#39;re logged in! </div></div></div></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "py-12" }, [
                vue.createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  vue.createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    vue.createVNode("div", { class: "p-6 bg-white border-b border-gray-200" }, " You're logged in! ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var Dashboard = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$d
}, Symbol.toStringTag, { value: "Module" }));
var Welcome_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\n.bg-gray-100[data-v-20f0ef19] {\n        background-color: #f7fafc;\n        background-color: rgba(247, 250, 252, var(--tw-bg-opacity));\n}\n.border-gray-200[data-v-20f0ef19] {\n        border-color: #edf2f7;\n        border-color: rgba(237, 242, 247, var(--tw-border-opacity));\n}\n.text-gray-400[data-v-20f0ef19] {\n        color: #cbd5e0;\n        color: rgba(203, 213, 224, var(--tw-text-opacity));\n}\n.text-gray-500[data-v-20f0ef19] {\n        color: #a0aec0;\n        color: rgba(160, 174, 192, var(--tw-text-opacity));\n}\n.text-gray-600[data-v-20f0ef19] {\n        color: #718096;\n        color: rgba(113, 128, 150, var(--tw-text-opacity));\n}\n.text-gray-700[data-v-20f0ef19] {\n        color: #4a5568;\n        color: rgba(74, 85, 104, var(--tw-text-opacity));\n}\n.text-gray-900[data-v-20f0ef19] {\n        color: #1a202c;\n        color: rgba(26, 32, 44, var(--tw-text-opacity));\n}\n@media (prefers-color-scheme: dark) {\n.dark\\:bg-gray-800[data-v-20f0ef19] {\n            background-color: #2d3748;\n            background-color: rgba(45, 55, 72, var(--tw-bg-opacity));\n}\n.dark\\:bg-gray-900[data-v-20f0ef19] {\n            background-color: #1a202c;\n            background-color: rgba(26, 32, 44, var(--tw-bg-opacity));\n}\n.dark\\:border-gray-700[data-v-20f0ef19] {\n            border-color: #4a5568;\n            border-color: rgba(74, 85, 104, var(--tw-border-opacity));\n}\n.dark\\:text-white[data-v-20f0ef19] {\n            color: #fff;\n            color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.dark\\:text-gray-400[data-v-20f0ef19] {\n            color: #cbd5e0;\n            color: rgba(203, 213, 224, var(--tw-text-opacity));\n}\n}\n")();
const _sfc_main$c = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Head), { title: "Welcome" }, null, _parent));
      _push(`<div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0" data-v-20f0ef19>`);
      if (__props.canLogin) {
        _push(`<div class="hidden fixed top-0 right-0 px-6 py-4 sm:block" data-v-20f0ef19>`);
        if (_ctx.$page.props.auth.user) {
          _push(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Link), {
            href: _ctx.route("dashboard"),
            class: "text-sm text-gray-700 underline"
          }, {
            default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Dashboard `);
              } else {
                return [
                  vue.createTextVNode(" Dashboard ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!--[-->`);
          _push(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Link), {
            href: _ctx.route("login"),
            class: "text-sm text-gray-700 underline"
          }, {
            default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Log in `);
              } else {
                return [
                  vue.createTextVNode(" Log in ")
                ];
              }
            }),
            _: 1
          }, _parent));
          if (__props.canRegister) {
            _push(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Link), {
              href: _ctx.route("register"),
              class: "ml-4 text-sm text-gray-700 underline"
            }, {
              default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Register `);
                } else {
                  return [
                    vue.createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="max-w-6xl mx-auto sm:px-6 lg:px-8" data-v-20f0ef19><div class="flex justify-center pt-8 sm:justify-start sm:pt-0" data-v-20f0ef19><svg viewBox="0 0 651 192" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-16 w-auto text-gray-700 sm:h-20" data-v-20f0ef19><g clip-path="url(#clip0)" fill="#EF3B2D" data-v-20f0ef19><path d="M248.032 44.676h-16.466v100.23h47.394v-14.748h-30.928V44.676zM337.091 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.431 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162-.001 2.863-.479 5.584-1.432 8.161zM463.954 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.432 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162 0 2.863-.479 5.584-1.432 8.161zM650.772 44.676h-15.606v100.23h15.606V44.676zM365.013 144.906h15.607V93.538h26.776V78.182h-42.383v66.724zM542.133 78.182l-19.616 51.096-19.616-51.096h-15.808l25.617 66.724h19.614l25.617-66.724h-15.808zM591.98 76.466c-19.112 0-34.239 15.706-34.239 35.079 0 21.416 14.641 35.079 36.239 35.079 12.088 0 19.806-4.622 29.234-14.688l-10.544-8.158c-.006.008-7.958 10.449-19.832 10.449-13.802 0-19.612-11.127-19.612-16.884h51.777c2.72-22.043-11.772-40.877-33.023-40.877zm-18.713 29.28c.12-1.284 1.917-16.884 18.589-16.884 16.671 0 18.697 15.598 18.813 16.884h-37.402zM184.068 43.892c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002-35.648-20.524a2.971 2.971 0 00-2.964 0l-35.647 20.522-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v38.979l-29.706 17.103V24.493a3 3 0 00-.103-.776c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002L40.098 1.396a2.971 2.971 0 00-2.964 0L1.487 21.919l-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v122.09c0 1.063.568 2.044 1.489 2.575l71.293 41.045c.156.089.324.143.49.202.078.028.15.074.23.095a2.98 2.98 0 001.524 0c.069-.018.132-.059.2-.083.176-.061.354-.119.519-.214l71.293-41.045a2.971 2.971 0 001.489-2.575v-38.979l34.158-19.666a2.971 2.971 0 001.489-2.575V44.666a3.075 3.075 0 00-.106-.774zM74.255 143.167l-29.648-16.779 31.136-17.926.001-.001 34.164-19.669 29.674 17.084-21.772 12.428-43.555 24.863zm68.329-76.259v33.841l-12.475-7.182-17.231-9.92V49.806l12.475 7.182 17.231 9.92zm2.97-39.335l29.693 17.095-29.693 17.095-29.693-17.095 29.693-17.095zM54.06 114.089l-12.475 7.182V46.733l17.231-9.92 12.475-7.182v74.537l-17.231 9.921zM38.614 7.398l29.693 17.095-29.693 17.095L8.921 24.493 38.614 7.398zM5.938 29.632l12.475 7.182 17.231 9.92v79.676l.001.005-.001.006c0 .114.032.221.045.333.017.146.021.294.059.434l.002.007c.032.117.094.222.14.334.051.124.088.255.156.371a.036.036 0 00.004.009c.061.105.149.191.222.288.081.105.149.22.244.314l.008.01c.084.083.19.142.284.215.106.083.202.178.32.247l.013.005.011.008 34.139 19.321v34.175L5.939 144.867V29.632h-.001zm136.646 115.235l-65.352 37.625V148.31l48.399-27.628 16.953-9.677v33.862zm35.646-61.22l-29.706 17.102V66.908l17.231-9.92 12.475-7.182v33.841z" data-v-20f0ef19></path></g></svg></div><div class="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg" data-v-20f0ef19><div class="grid grid-cols-1 md:grid-cols-2" data-v-20f0ef19><div class="p-6" data-v-20f0ef19><div class="flex items-center" data-v-20f0ef19><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500" data-v-20f0ef19><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" data-v-20f0ef19></path></svg><div class="ml-4 text-lg leading-7 font-semibold" data-v-20f0ef19><a href="https://laravel.com/docs" class="underline text-gray-900 dark:text-white" data-v-20f0ef19>Documentation</a></div></div><div class="ml-12" data-v-20f0ef19><div class="mt-2 text-gray-600 dark:text-gray-400 text-sm" data-v-20f0ef19> Laravel has wonderful, thorough documentation covering every aspect of the framework. Whether you are new to the framework or have previous experience with Laravel, we recommend reading all of the documentation from beginning to end. </div></div></div><div class="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l" data-v-20f0ef19><div class="flex items-center" data-v-20f0ef19><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500" data-v-20f0ef19><path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" data-v-20f0ef19></path><path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" data-v-20f0ef19></path></svg><div class="ml-4 text-lg leading-7 font-semibold" data-v-20f0ef19><a href="https://laracasts.com" class="underline text-gray-900 dark:text-white" data-v-20f0ef19>Laracasts</a></div></div><div class="ml-12" data-v-20f0ef19><div class="mt-2 text-gray-600 dark:text-gray-400 text-sm" data-v-20f0ef19> Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process. </div></div></div><div class="p-6 border-t border-gray-200 dark:border-gray-700" data-v-20f0ef19><div class="flex items-center" data-v-20f0ef19><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500" data-v-20f0ef19><path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" data-v-20f0ef19></path></svg><div class="ml-4 text-lg leading-7 font-semibold" data-v-20f0ef19><a href="https://laravel-news.com/" class="underline text-gray-900 dark:text-white" data-v-20f0ef19>Laravel News</a></div></div><div class="ml-12" data-v-20f0ef19><div class="mt-2 text-gray-600 dark:text-gray-400 text-sm" data-v-20f0ef19> Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials. </div></div></div><div class="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l" data-v-20f0ef19><div class="flex items-center" data-v-20f0ef19><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500" data-v-20f0ef19><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-v-20f0ef19></path></svg><div class="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white" data-v-20f0ef19>Vibrant Ecosystem</div></div><div class="ml-12" data-v-20f0ef19><div class="mt-2 text-gray-600 dark:text-gray-400 text-sm" data-v-20f0ef19> Laravel&#39;s robust library of first-party tools and libraries, such as <a href="https://forge.laravel.com" class="underline" data-v-20f0ef19>Forge</a>, <a href="https://vapor.laravel.com" class="underline" data-v-20f0ef19>Vapor</a>, <a href="https://nova.laravel.com" class="underline" data-v-20f0ef19>Nova</a>, and <a href="https://envoyer.io" class="underline" data-v-20f0ef19>Envoyer</a> help you take your projects to the next level. Pair them with powerful open source libraries like <a href="https://laravel.com/docs/billing" class="underline" data-v-20f0ef19>Cashier</a>, <a href="https://laravel.com/docs/dusk" class="underline" data-v-20f0ef19>Dusk</a>, <a href="https://laravel.com/docs/broadcasting" class="underline" data-v-20f0ef19>Echo</a>, <a href="https://laravel.com/docs/horizon" class="underline" data-v-20f0ef19>Horizon</a>, <a href="https://laravel.com/docs/sanctum" class="underline" data-v-20f0ef19>Sanctum</a>, <a href="https://laravel.com/docs/telescope" class="underline" data-v-20f0ef19>Telescope</a>, and more. </div></div></div></div></div><div class="flex justify-center mt-4 sm:items-center sm:justify-between" data-v-20f0ef19><div class="text-center text-sm text-gray-500 sm:text-left" data-v-20f0ef19><div class="flex items-center" data-v-20f0ef19><svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="-mt-px w-5 h-5 text-gray-400" data-v-20f0ef19><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" data-v-20f0ef19></path></svg><a href="https://laravel.bigcartel.com" class="ml-1 underline" data-v-20f0ef19> Shop </a><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="ml-4 -mt-px w-5 h-5 text-gray-400" data-v-20f0ef19><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-v-20f0ef19></path></svg><a href="https://github.com/sponsors/taylorotwell" class="ml-1 underline" data-v-20f0ef19> Sponsor </a></div></div><div class="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0" data-v-20f0ef19> Laravel v${serverRenderer.ssrInterpolate(__props.laravelVersion)} (PHP v${serverRenderer.ssrInterpolate(__props.phpVersion)}) </div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var Welcome = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-20f0ef19"]]);
var Welcome$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Welcome
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "submit"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        type: __props.type,
        class: "inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Button.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "Guest",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100" }, _attrs))}><div>`);
      _push(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Link), { href: "/" }, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(BreezeApplicationLogo, { class: "w-20 h-20 fill-current text-gray-500" }, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(BreezeApplicationLogo, { class: "w-20 h-20 fill-current text-gray-500" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Guest.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "Input",
  __ssrInlineRender: true,
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(__props) {
    const input = vue.ref(null);
    vue.onMounted(() => {
      if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",
        value: __props.modelValue,
        ref_key: "input",
        ref: input
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Input.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "Label",
  __ssrInlineRender: true,
  props: ["value"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "block font-medium text-sm text-gray-700" }, _attrs))}>`);
      if (__props.value) {
        _push(`<span>${serverRenderer.ssrInterpolate(__props.value)}</span>`);
      } else {
        _push(`<span>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      }
      _push(`</label>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Label.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "ValidationErrors",
  __ssrInlineRender: true,
  setup(__props) {
    const errors = vue.computed(() => inertiaVue3.usePage().props.value.errors);
    const hasErrors = vue.computed(() => Object.keys(errors.value).length > 0);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(hasErrors)) {
        _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><div class="font-medium text-red-600">Whoops! Something went wrong.</div><ul class="mt-3 list-disc list-inside text-sm text-red-600"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(errors), (error, key) => {
          _push(`<li>${serverRenderer.ssrInterpolate(error)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ValidationErrors.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = inertiaVue3.useForm({
      password: ""
    });
    const submit = () => {
      form.post(route("password.confirm"), {
        onFinish: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, _attrs, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Head), { title: "Confirm Password" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> This is a secure area of the application. Please confirm your password before continuing. </div>`);
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$7, { class: "mb-4" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$8, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$9, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: vue.unref(form).password,
              "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
              required: "",
              autocomplete: "current-password",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$b, {
              class: ["ml-4", { "opacity-25": vue.unref(form).processing }],
              disabled: vue.unref(form).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Confirm `);
                } else {
                  return [
                    vue.createTextVNode(" Confirm ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              vue.createVNode(vue.unref(inertiaVue3.Head), { title: "Confirm Password" }),
              vue.createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " This is a secure area of the application. Please confirm your password before continuing. "),
              vue.createVNode(_sfc_main$7, { class: "mb-4" }),
              vue.createVNode("form", {
                onSubmit: vue.withModifiers(submit, ["prevent"])
              }, [
                vue.createVNode("div", null, [
                  vue.createVNode(_sfc_main$8, {
                    for: "password",
                    value: "Password"
                  }),
                  vue.createVNode(_sfc_main$9, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: vue.unref(form).password,
                    "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password",
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "flex justify-end mt-4" }, [
                  vue.createVNode(_sfc_main$b, {
                    class: ["ml-4", { "opacity-25": vue.unref(form).processing }],
                    disabled: vue.unref(form).processing
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" Confirm ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var ConfirmPassword = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: String
  },
  setup(__props) {
    const form = inertiaVue3.useForm({
      email: ""
    });
    const submit = () => {
      form.post(route("password.email"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, _attrs, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Head), { title: "Forgot Password" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. </div>`);
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${serverRenderer.ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$7, { class: "mb-4" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$8, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$9, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: vue.unref(form).email,
              "onUpdate:modelValue": ($event) => vue.unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$b, {
              class: { "opacity-25": vue.unref(form).processing },
              disabled: vue.unref(form).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Email Password Reset Link `);
                } else {
                  return [
                    vue.createTextVNode(" Email Password Reset Link ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              vue.createVNode(vue.unref(inertiaVue3.Head), { title: "Forgot Password" }),
              vue.createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. "),
              __props.status ? (vue.openBlock(), vue.createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, vue.toDisplayString(__props.status), 1)) : vue.createCommentVNode("", true),
              vue.createVNode(_sfc_main$7, { class: "mb-4" }),
              vue.createVNode("form", {
                onSubmit: vue.withModifiers(submit, ["prevent"])
              }, [
                vue.createVNode("div", null, [
                  vue.createVNode(_sfc_main$8, {
                    for: "email",
                    value: "Email"
                  }),
                  vue.createVNode(_sfc_main$9, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: vue.unref(form).email,
                    "onUpdate:modelValue": ($event) => vue.unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  vue.createVNode(_sfc_main$b, {
                    class: { "opacity-25": vue.unref(form).processing },
                    disabled: vue.unref(form).processing
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" Email Password Reset Link ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var ForgotPassword = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    checked: {
      type: [Array, Boolean],
      default: false
    },
    value: {
      default: null
    }
  },
  emits: ["update:checked"],
  setup(__props, { emit }) {
    const props = __props;
    const proxyChecked = vue.computed({
      get() {
        return props.checked;
      },
      set(val) {
        emit("update:checked", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${serverRenderer.ssrRenderAttrs((_temp0 = vue.mergeProps({
        type: "checkbox",
        value: __props.value,
        checked: Array.isArray(vue.unref(proxyChecked)) ? serverRenderer.ssrLooseContain(vue.unref(proxyChecked), __props.value) : vue.unref(proxyChecked),
        class: "rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      }, _attrs), vue.mergeProps(_temp0, serverRenderer.ssrGetDynamicModelProps(_temp0, vue.unref(proxyChecked)))))}>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Checkbox.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: Boolean,
    status: String
  },
  setup(__props) {
    const form = inertiaVue3.useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, _attrs, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Head), { title: "Log in" }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$7, { class: "mb-4" }, null, _parent2, _scopeId));
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${serverRenderer.ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$8, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$9, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: vue.unref(form).email,
              "onUpdate:modelValue": ($event) => vue.unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$8, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$9, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: vue.unref(form).password,
              "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
              required: "",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="block mt-4"${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$4, {
              name: "remember",
              checked: vue.unref(form).remember,
              "onUpdate:checked": ($event) => vue.unref(form).remember = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-2 text-sm text-gray-600"${_scopeId}>Remember me</span></label></div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            if (__props.canResetPassword) {
              _push2(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Link), {
                href: _ctx.route("password.request"),
                class: "underline text-sm text-gray-600 hover:text-gray-900"
              }, {
                default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Forgot your password? `);
                  } else {
                    return [
                      vue.createTextVNode(" Forgot your password? ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$b, {
              class: ["ml-4", { "opacity-25": vue.unref(form).processing }],
              disabled: vue.unref(form).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log in `);
                } else {
                  return [
                    vue.createTextVNode(" Log in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              vue.createVNode(vue.unref(inertiaVue3.Head), { title: "Log in" }),
              vue.createVNode(_sfc_main$7, { class: "mb-4" }),
              __props.status ? (vue.openBlock(), vue.createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, vue.toDisplayString(__props.status), 1)) : vue.createCommentVNode("", true),
              vue.createVNode("form", {
                onSubmit: vue.withModifiers(submit, ["prevent"])
              }, [
                vue.createVNode("div", null, [
                  vue.createVNode(_sfc_main$8, {
                    for: "email",
                    value: "Email"
                  }),
                  vue.createVNode(_sfc_main$9, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: vue.unref(form).email,
                    "onUpdate:modelValue": ($event) => vue.unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "mt-4" }, [
                  vue.createVNode(_sfc_main$8, {
                    for: "password",
                    value: "Password"
                  }),
                  vue.createVNode(_sfc_main$9, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: vue.unref(form).password,
                    "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "block mt-4" }, [
                  vue.createVNode("label", { class: "flex items-center" }, [
                    vue.createVNode(_sfc_main$4, {
                      name: "remember",
                      checked: vue.unref(form).remember,
                      "onUpdate:checked": ($event) => vue.unref(form).remember = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    vue.createVNode("span", { class: "ml-2 text-sm text-gray-600" }, "Remember me")
                  ])
                ]),
                vue.createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  __props.canResetPassword ? (vue.openBlock(), vue.createBlock(vue.unref(inertiaVue3.Link), {
                    key: 0,
                    href: _ctx.route("password.request"),
                    class: "underline text-sm text-gray-600 hover:text-gray-900"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" Forgot your password? ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : vue.createCommentVNode("", true),
                  vue.createVNode(_sfc_main$b, {
                    class: ["ml-4", { "opacity-25": vue.unref(form).processing }],
                    disabled: vue.unref(form).processing
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" Log in ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var Login = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = inertiaVue3.useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      terms: false
    });
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, _attrs, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Head), { title: "Register" }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$7, { class: "mb-4" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$8, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$9, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: vue.unref(form).name,
              "onUpdate:modelValue": ($event) => vue.unref(form).name = $event,
              required: "",
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$8, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$9, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: vue.unref(form).email,
              "onUpdate:modelValue": ($event) => vue.unref(form).email = $event,
              required: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$8, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$9, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: vue.unref(form).password,
              "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$8, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$9, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: vue.unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => vue.unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Link), {
              href: _ctx.route("login"),
              class: "underline text-sm text-gray-600 hover:text-gray-900"
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Already registered? `);
                } else {
                  return [
                    vue.createTextVNode(" Already registered? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$b, {
              class: ["ml-4", { "opacity-25": vue.unref(form).processing }],
              disabled: vue.unref(form).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Register `);
                } else {
                  return [
                    vue.createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              vue.createVNode(vue.unref(inertiaVue3.Head), { title: "Register" }),
              vue.createVNode(_sfc_main$7, { class: "mb-4" }),
              vue.createVNode("form", {
                onSubmit: vue.withModifiers(submit, ["prevent"])
              }, [
                vue.createVNode("div", null, [
                  vue.createVNode(_sfc_main$8, {
                    for: "name",
                    value: "Name"
                  }),
                  vue.createVNode(_sfc_main$9, {
                    id: "name",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: vue.unref(form).name,
                    "onUpdate:modelValue": ($event) => vue.unref(form).name = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "mt-4" }, [
                  vue.createVNode(_sfc_main$8, {
                    for: "email",
                    value: "Email"
                  }),
                  vue.createVNode(_sfc_main$9, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: vue.unref(form).email,
                    "onUpdate:modelValue": ($event) => vue.unref(form).email = $event,
                    required: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "mt-4" }, [
                  vue.createVNode(_sfc_main$8, {
                    for: "password",
                    value: "Password"
                  }),
                  vue.createVNode(_sfc_main$9, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: vue.unref(form).password,
                    "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "mt-4" }, [
                  vue.createVNode(_sfc_main$8, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  vue.createVNode(_sfc_main$9, {
                    id: "password_confirmation",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: vue.unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => vue.unref(form).password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  vue.createVNode(vue.unref(inertiaVue3.Link), {
                    href: _ctx.route("login"),
                    class: "underline text-sm text-gray-600 hover:text-gray-900"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" Already registered? ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  vue.createVNode(_sfc_main$b, {
                    class: ["ml-4", { "opacity-25": vue.unref(form).processing }],
                    disabled: vue.unref(form).processing
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" Register ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Register = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: String,
    token: String
  },
  setup(__props) {
    const props = __props;
    const form = inertiaVue3.useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("password.update"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, _attrs, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Head), { title: "Reset Password" }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$7, { class: "mb-4" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$8, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$9, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: vue.unref(form).email,
              "onUpdate:modelValue": ($event) => vue.unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$8, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$9, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: vue.unref(form).password,
              "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$8, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$9, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: vue.unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => vue.unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$b, {
              class: { "opacity-25": vue.unref(form).processing },
              disabled: vue.unref(form).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reset Password `);
                } else {
                  return [
                    vue.createTextVNode(" Reset Password ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              vue.createVNode(vue.unref(inertiaVue3.Head), { title: "Reset Password" }),
              vue.createVNode(_sfc_main$7, { class: "mb-4" }),
              vue.createVNode("form", {
                onSubmit: vue.withModifiers(submit, ["prevent"])
              }, [
                vue.createVNode("div", null, [
                  vue.createVNode(_sfc_main$8, {
                    for: "email",
                    value: "Email"
                  }),
                  vue.createVNode(_sfc_main$9, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: vue.unref(form).email,
                    "onUpdate:modelValue": ($event) => vue.unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "mt-4" }, [
                  vue.createVNode(_sfc_main$8, {
                    for: "password",
                    value: "Password"
                  }),
                  vue.createVNode(_sfc_main$9, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: vue.unref(form).password,
                    "onUpdate:modelValue": ($event) => vue.unref(form).password = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "mt-4" }, [
                  vue.createVNode(_sfc_main$8, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  vue.createVNode(_sfc_main$9, {
                    id: "password_confirmation",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: vue.unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => vue.unref(form).password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                vue.createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  vue.createVNode(_sfc_main$b, {
                    class: { "opacity-25": vue.unref(form).processing },
                    disabled: vue.unref(form).processing
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" Reset Password ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var ResetPassword = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    status: String
  },
  setup(__props) {
    const props = __props;
    const form = inertiaVue3.useForm();
    const submit = () => {
      form.post(route("verification.send"));
    };
    const verificationLinkSent = vue.computed(() => props.status === "verification-link-sent");
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, _attrs, {
        default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Head), { title: "Email Verification" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
            if (vue.unref(verificationLinkSent)) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}> A new verification link has been sent to the email address you provided during registration. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div class="mt-4 flex items-center justify-between"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_sfc_main$b, {
              class: { "opacity-25": vue.unref(form).processing },
              disabled: vue.unref(form).processing
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Resend Verification Email `);
                } else {
                  return [
                    vue.createTextVNode(" Resend Verification Email ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(vue.unref(inertiaVue3.Link), {
              href: _ctx.route("logout"),
              method: "post",
              as: "button",
              class: "underline text-sm text-gray-600 hover:text-gray-900"
            }, {
              default: vue.withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Log Out`);
                } else {
                  return [
                    vue.createTextVNode("Log Out")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              vue.createVNode(vue.unref(inertiaVue3.Head), { title: "Email Verification" }),
              vue.createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. "),
              vue.unref(verificationLinkSent) ? (vue.openBlock(), vue.createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, " A new verification link has been sent to the email address you provided during registration. ")) : vue.createCommentVNode("", true),
              vue.createVNode("form", {
                onSubmit: vue.withModifiers(submit, ["prevent"])
              }, [
                vue.createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
                  vue.createVNode(_sfc_main$b, {
                    class: { "opacity-25": vue.unref(form).processing },
                    disabled: vue.unref(form).processing
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" Resend Verification Email ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"]),
                  vue.createVNode(vue.unref(inertiaVue3.Link), {
                    href: _ctx.route("logout"),
                    method: "post",
                    as: "button",
                    class: "underline text-sm text-gray-600 hover:text-gray-900"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Log Out")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var VerifyEmail = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
