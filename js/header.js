@charset "UTF-8";
/*
	Minimal navbar styling, does not include font definitions or other external style dependencies.
*/
@import url("https://assets.blz-contentstack.com/v3/assets/blte73fa86c52047717/blt3de15bbfd6c3f3c5/5f9ae8766f61200bd103dbfe/navbar.css");
@import url("https://fonts.googleapis.com/css?family=Poppins");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700");
@import url("https://fonts.googleapis.com/css?family=Archivo");
@import url("https://fonts.googleapis.com/css2?family=Archivo:wght@500");
@import url("https://fonts.googleapis.com/css2?family=Archivo:wght@600");
@media (max-width: 767px) {
  body.Navbar-blockScrolling {
    overflow: hidden; } }

/**
	* Navbar-specific helper utility classes
	*/
.Navbar .is-hidden {
  display: none !important; }

.Navbar .is-displayed {
  display: block !important; }

.Navbar .is-left {
  text-align: left; }

.Navbar .is-center {
  text-align: center; }

.Navbar .is-right {
  text-align: right; }

.Navbar .is-noSelect {
  user-select: none;
  /* Non-prefixed version, currently not supported by any browser */ }

.Navbar .a11y-is-aria-invisible {
  position: absolute;
  top: -10000px;
  pointer-events: none; }

.Navbar .is-invisible {
  opacity: 0;
  pointer-events: none; }

.Navbar .animation-delay-0 {
  animation-delay: 0ms; }

.Navbar .animation-delay-1 {
  animation-delay: 50ms; }

.Navbar .animation-delay-2 {
  animation-delay: 100ms; }

.Navbar .animation-delay-3 {
  animation-delay: 150ms; }

.Navbar .animation-delay-4 {
  animation-delay: 200ms; }

.Navbar .animation-delay-5 {
  animation-delay: 250ms; }

.Navbar .animation-delay-6 {
  animation-delay: 300ms; }

.Navbar .animation-delay-7 {
  animation-delay: 350ms; }

.Navbar .animation-delay-8 {
  animation-delay: 400ms; }

.Navbar .animation-delay-9 {
  animation-delay: 450ms; }

.Navbar .animation-delay-10 {
  animation-delay: 500ms; }

.Navbar .animation-delay-11 {
  animation-delay: 550ms; }

.Navbar .animation-delay-12 {
  animation-delay: 600ms; }

.Navbar .animation-delay-13 {
  animation-delay: 650ms; }

.Navbar .animation-delay-14 {
  animation-delay: 700ms; }

.Navbar .animation-delay-15 {
  animation-delay: 750ms; }

.Navbar .animation-delay-16 {
  animation-delay: 800ms; }

.Navbar .animation-delay-17 {
  animation-delay: 850ms; }

.Navbar .animation-delay-18 {
  animation-delay: 900ms; }

.Navbar .animation-delay-19 {
  animation-delay: 950ms; }

.Navbar .animation-delay-20 {
  animation-delay: 1000ms; }

.Navbar .animation-delay-21 {
  animation-delay: 1050ms; }

.Navbar .animation-delay-22 {
  animation-delay: 1100ms; }

.Navbar .animation-delay-23 {
  animation-delay: 1150ms; }

.Navbar .animation-delay-24 {
  animation-delay: 1200ms; }

@keyframes Navbar-dropdown-fade-in {
  from {
    opacity: 0.0; }
  to {
    opacity: 1.0; } }

@keyframes Navbar-dropdown-drop-in {
  from {
    opacity: 0.0;
    transform: translateY(-20px); }
  to {
    opacity: 1.0;
    transform: translateY(0); } }

@keyframes Navbar-dropdown-drop-in-delayed {
  0% {
    opacity: 0.0;
    transform: translateY(-20px); }
  100% {
    opacity: 1.0;
    transform: translateY(0); } }

@keyframes Navbar-site-menu-in {
  from {
    transform: translateX(-100%); }
  to {
    transform: translateX(0); } }

@keyframes Navbar-site-menu-out {
  from {
    transform: translateX(0); }
  to {
    transform: translateX(-100%); } }

@keyframes Navbar-account-menu-in {
  from {
    transform: translateX(100%); }
  to {
    transform: translateX(0); } }

@keyframes Navbar-account-menu-out {
  from {
    transform: translateX(0); }
  to {
    transform: translateX(100%); } }

@keyframes Navbar-promotion-in {
  from {
    transform: translateY(110%); }
  to {
    transform: translateY(0); } }

@keyframes Navbar-promotion-out {
  from {
    opacity: 1.0; }
  to {
    opacity: 0.0; } }

/**
	* Base styling
	*/
.Navbar {
  position: relative;
  box-sizing: border-box;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  z-index: 1; }
  .Navbar a, .Navbar div, .Navbar img, .Navbar nav, .Navbar svg {
    box-sizing: border-box;
    vertical-align: baseline; }
  .Navbar a {
    font-weight: normal;
    text-transform: none; }
  .Navbar svg {
    width: auto;
    height: auto; }
  .Navbar button {
    border-radius: 0;
    letter-spacing: normal;
    text-transform: none; }
  .Navbar img {
    max-width: none; }
  .Navbar .Navbar-embedded {
    display: none; }
  .Navbar .Navbar-container {
    position: relative;
    max-width: 1600px;
    margin: 0 auto; }
  .Navbar .Navbar-skipLink {
    z-index: 1;
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 10px 33px;
    font-size: 16px;
    line-height: 16px;
    text-decoration: none;
    transform: translateY(-200%);
    opacity: 0;
    background-color: rgba(21, 26, 35, 0.95);
    background: radial-gradient(ellipse farthest-side at center top, #283244 0%, rgba(21, 26, 35, 0.95) 100%);
    border: solid 1px rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);
    color: #00aeff; }
    .Navbar .Navbar-skipLink:focus, .Navbar .Navbar-skipLink:active {
      transform: translateY(0);
      opacity: 1; }
  .Navbar .Navbar-modals {
    position: absolute;
    top: 0;
    left: 0;
    right: 0; }
    .Navbar .Navbar-modals .Navbar-constrained {
      position: relative;
      max-width: 1600px;
      margin: 0 auto; }
  .Navbar .Navbar-logo {
    position: relative;
    color: #009ae4; }
    .Navbar .Navbar-logo svg {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      transform: translateY(-50%);
      fill: currentColor;
      pointer-events: none; }
  .Navbar .Navbar-icon {
    position: relative;
    height: 24px;
    width: 24px; }
    .Navbar .Navbar-icon svg {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      fill: currentColor;
      pointer-events: none; }
  .Navbar .Navbar-profileItems {
    position: absolute;
    top: 0;
    right: 20px;
    bottom: 0; }
  .Navbar .Navbar-link,
  .Navbar .Navbar-dropdownToggle {
    cursor: pointer; }
  .Navbar .Navbar-errors {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 0, 0, 0.3);
    color: #f00;
    text-align: center; }
  .Navbar .Navbar-error {
    margin: 10px 20px;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 1; }
    .Navbar .Navbar-error a {
      color: #f00;
      transition: color 200ms, background-color 200ms; }
      .Navbar .Navbar-error a:hover, .Navbar .Navbar-error a:active {
        color: #fff; }
  .Navbar > .Navbar-overlay {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5); }
  .Navbar.is-focused {
    z-index: 9999; }
    .Navbar.is-focused .Navbar-overlay {
      display: block;
      animation-name: Navbar-dropdown-fade-in;
      animation-duration: 200ms; }
  .Navbar.is-error {
    z-index: 9999; }
    .Navbar.is-error .Navbar-errors {
      display: block; }
  .Navbar.is-disabled {
    display: none !important; }

/**
	* Mobile-specific styling
	*/
.Navbar .Navbar-mobile {
  position: relative;
  height: 48px;
  padding-left: 20px;
  white-space: nowrap; }
  .Navbar .Navbar-mobile .Navbar-mobileOverlay {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; }
  .Navbar .Navbar-mobile .Navbar-menu {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 48px;
    padding: 0px;
    color: #00aeff; }
    .Navbar .Navbar-mobile .Navbar-menu .Navbar-icon {
      height: 100%;
      width: 100%; }
  .Navbar .Navbar-mobile .Navbar-logo {
    position: absolute;
    top: 0;
    left: 50%;
    height: 48px;
    width: 61.82004px;
    background-size: auto 28px;
    transform: translateX(-50%); }
    .Navbar .Navbar-mobile .Navbar-logo svg {
      height: 28px; }
  .Navbar .Navbar-mobile .Navbar-customLogo {
    display: none;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%); }
    .Navbar .Navbar-mobile .Navbar-customLogo img {
      height: 48px;
      width: auto;
      image-rendering: -webkit-optimize-contrast; }
  .Navbar .Navbar-mobile .Navbar-mobileIcon {
    width: 48px;
    height: 48px;
    padding: 0px;
    color: #00aeff;
    cursor: pointer; }
  .Navbar .Navbar-mobile .Navbar-profileItems {
    right: 0; }
    .Navbar .Navbar-mobile .Navbar-profileItems .Navbar-profileIcon {
      position: relative;
      display: inline-block; }

.Navbar .Navbar-modalClose {
  position: absolute;
  top: 0;
  height: 48px;
  width: 48px;
  color: #00aeff;
  transition: color 200ms, background-color 200ms;
  cursor: pointer; }
  .Navbar .Navbar-modalClose svg {
    top: 12px;
    bottom: 12px;
    left: 12px;
    right: 12px;
    width: 24px;
    height: 24px; }
  .Navbar .Navbar-modalClose:hover {
    color: #00c6ff; }

.Navbar .Navbar-modalCloseGutter {
  position: absolute;
  top: 0;
  width: 40px;
  height: 100%; }

.Navbar .Navbar-modalLinkBase, .Navbar .Navbar-modalLink, .Navbar .Navbar-expandableToggle, .Navbar .Navbar-expandable .Navbar-expandableItem, .Navbar .Navbar-expandable .Navbar-gamePublisherLabel {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: solid 1px rgba(255, 255, 255, 0.08);
  padding: 0 20px;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  background: transparent; }
  .Navbar .Navbar-modalLinkBase:visited, .Navbar .Navbar-modalLink:visited, .Navbar .Navbar-expandableToggle:visited, .Navbar .Navbar-expandable .Navbar-expandableItem:visited, .Navbar .Navbar-expandable .Navbar-gamePublisherLabel:visited {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    background: transparent; }
  .Navbar .Navbar-modalLinkBase:hover, .Navbar .Navbar-modalLink:hover, .Navbar .Navbar-expandableToggle:hover, .Navbar .Navbar-expandable .Navbar-expandableItem:hover, .Navbar .Navbar-expandable .Navbar-gamePublisherLabel:hover, .Navbar .Navbar-modalLinkBase:focus, .Navbar .Navbar-modalLink:focus, .Navbar .Navbar-expandableToggle:focus, .Navbar .Navbar-expandable .Navbar-expandableItem:focus, .Navbar .Navbar-expandable .Navbar-gamePublisherLabel:focus, .Navbar .Navbar-modalLinkBase:active, .Navbar .Navbar-modalLink:active, .Navbar .Navbar-expandableToggle:active, .Navbar .Navbar-expandable .Navbar-expandableItem:active, .Navbar .Navbar-expandable .Navbar-gamePublisherLabel:active {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    background: transparent; }

.Navbar .Navbar-modalLinkIconBase, .Navbar .Navbar-modalLink .Navbar-modalLinkIcon, .Navbar .Navbar-expandable .Navbar-expandableItem .Navbar-expandableItemImage,
.Navbar .Navbar-expandable .Navbar-expandableItem .Navbar-expandableItemIcon {
  display: inline-block;
  color: #00aeff;
  transition: color 200ms, background-color 200ms;
  width: 1.5em;
  height: 1.5em; }

.Navbar .Navbar-modalLink .Navbar-modalLinkIcon {
  margin-right: 5px; }

.Navbar .Navbar-modalLink .Navbar-modalLinkLabel {
  display: inline-block;
  text-transform: uppercase;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: inherit; }

.Navbar .Navbar-expandableToggle {
  cursor: pointer; }
  .Navbar .Navbar-expandableToggle .Navbar-expandableIcon {
    display: inline-block;
    color: rgba(255, 255, 255, 0.3);
    transition: color 200ms, background-color 200ms;
    width: 16px;
    height: 16px;
    margin-left: 2px;
    transition: color 200ms, background-color 200ms, border-color 200ms; }
  .Navbar .Navbar-expandableToggle .Navbar-expandableLabel {
    display: inline-block;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    color: inherit; }

.Navbar .Navbar-accountModal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 360px;
  overflow: hidden;
  animation-name: Navbar-account-menu-out;
  animation-duration: 200ms;
  animation-fill-mode: forwards; }
  .Navbar .Navbar-accountModal .Navbar-modalContent {
    margin-left: 40px;
    height: 100%;
    background-color: #151a23;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch; }
  .Navbar .Navbar-accountModal .Navbar-modalClose {
    right: 0; }
  .Navbar .Navbar-accountModal .Navbar-modalCloseGutter {
    left: 0; }
  .Navbar .Navbar-accountModal.is-open {
    animation-name: Navbar-account-menu-in;
    animation-duration: 200ms;
    animation-fill-mode: forwards; }

.Navbar .Navbar-mobileModalHeader {
  height: 48px; }

.Navbar .Navbar-mobileModalLogo {
  display: none;
  height: 80px;
  color: #00aeff;
  transition: color 200ms, background-color 200ms; }
  .Navbar .Navbar-mobileModalLogo svg {
    left: 50%;
    width: auto;
    height: 40px;
    transform: translate(-50%, -50%); }

.Navbar .Navbar-expandable {
  position: relative; }
  .Navbar .Navbar-expandable .Navbar-expandableToggle {
    position: relative; }
    .Navbar .Navbar-expandable .Navbar-expandableToggle:before {
      position: absolute;
      content: ' ';
      top: 0;
      bottom: 0;
      left: 0;
      width: 5px;
      background-color: rgba(0, 174, 255, 0);
      transition: color 200ms, background-color 200ms;
      pointer-events: none; }
  .Navbar .Navbar-expandable .Navbar-expandableLabel {
    text-transform: uppercase; }
  .Navbar .Navbar-expandable .Navbar-expandableContainer {
    display: none;
    position: relative;
    border-top: solid 1px rgba(255, 255, 255, 0.08);
    transition: height 200ms;
    overflow: hidden; }
    .Navbar .Navbar-expandable .Navbar-expandableContainer:before {
      position: absolute;
      content: ' ';
      top: 0;
      bottom: 0;
      left: 0;
      width: 5px;
      background-color: rgba(0, 174, 255, 0);
      transition: color 200ms, background-color 200ms;
      pointer-events: none; }
  .Navbar .Navbar-expandable .Navbar-expandableContent {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0; }
    .Navbar .Navbar-expandable .Navbar-expandableContent .Navbar-gamePublisher {
      border-bottom: solid 1px rgba(255, 255, 255, 0.08); }
  .Navbar .Navbar-expandable .Navbar-expandableItem {
    border: 0;
    color: rgba(255, 255, 255, 0.7);
    height: 40px;
    line-height: 40px;
    display: flex;
    align-items: center; }
    .Navbar .Navbar-expandable .Navbar-expandableItem .Navbar-expandableItemImage,
    .Navbar .Navbar-expandable .Navbar-expandableItem .Navbar-expandableItemIcon {
      margin-right: 5px; }
    .Navbar .Navbar-expandable .Navbar-expandableItem .Navbar-expandableItemIcon {
      color: rgba(255, 255, 255, 0.7); }
    .Navbar .Navbar-expandable .Navbar-expandableItem .Navbar-expandableItemLabel {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-family: "Open Sans", Helvetica, Arial, sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 40px;
      color: inherit; }
  .Navbar .Navbar-expandable .Navbar-expandableSpecialItem .Navbar-expandableItemIcon {
    color: #00aeff; }
  .Navbar .Navbar-expandable .Navbar-gamePublisherLabel {
    border: 0;
    text-transform: uppercase;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
    height: auto;
    line-height: 1.4;
    margin: 10px 3px 5px; }
    .Navbar .Navbar-expandable .Navbar-gamePublisherLabel:hover {
      color: rgba(255, 255, 255, 0.5); }
  .Navbar .Navbar-expandable.is-open .Navbar-expandableToggle:before {
    background-color: #00aeff; }
  .Navbar .Navbar-expandable.is-open .Navbar-expandableLabel {
    color: #fff; }
  .Navbar .Navbar-expandable.is-open .Navbar-expandableContainer {
    display: block;
    background-color: rgba(0, 0, 0, 0.3); }
    .Navbar .Navbar-expandable.is-open .Navbar-expandableContainer:before {
      background-color: rgba(0, 174, 255, 0.1); }
  .Navbar .Navbar-expandable.is-open .Navbar-expandableIcon {
    color: rgba(255, 255, 255, 0.5);
    transform: rotate(180deg);
    transform-origin: center; }

.Navbar .Navbar-siteMenu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  max-width: 360px;
  overflow: hidden;
  animation-name: Navbar-site-menu-out;
  animation-duration: 200ms;
  animation-fill-mode: forwards; }
  .Navbar .Navbar-siteMenu .Navbar-modalContent {
    margin-right: 40px;
    height: 100%;
    background-color: #151a23;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch; }
  .Navbar .Navbar-siteMenu.is-open {
    animation-name: Navbar-site-menu-in;
    animation-duration: 200ms;
    animation-fill-mode: forwards; }
  .Navbar .Navbar-siteMenu .Navbar-mobileModalLogo {
    display: block; }
    .Navbar .Navbar-siteMenu .Navbar-mobileModalLogo svg {
      height: 50px; }
  .Navbar .Navbar-siteMenu .Navbar-modalClose {
    left: 0; }
  .Navbar .Navbar-siteMenu .Navbar-modalCloseGutter {
    right: 0; }
  .Navbar .Navbar-siteMenu .Navbar-siteMenuLogo {
    position: relative;
    height: 28px;
    width: 61.82004px;
    margin: 20px auto; }
    .Navbar .Navbar-siteMenu .Navbar-siteMenuLogo svg {
      height: 28px; }

.Navbar .Navbar-corpLinks {
  border-top: solid 1px rgba(255, 255, 255, 0.08);
  padding-top: 20px; }
  .Navbar .Navbar-corpLinks .Navbar-corpLink {
    display: block;
    padding: 0 20px;
    height: 44px;
    line-height: 44px;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none; }

.Navbar .Navbar-accountDropdownSupport .Navbar-accountDropdownCounter {
  display: none;
  background-color: #ff9000;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  font-size: 11px;
  font-weight: bold;
  line-height: 16px;
  text-shadow: 0 0 3px #000;
  text-align: center;
  color: #fff;
  margin-left: 5px; }

.Navbar.is-compact .Navbar-mobileModalHeader {
  display: none; }

.Navbar.is-compact .Navbar-mobileModalLogo {
  display: block; }

.Navbar.is-compact .Navbar-accountDropdownLoggedOut,
.Navbar.is-compact .Navbar-accountDropdownLoggedIn {
  background-color: rgba(0, 0, 0, 0.1); }

.Navbar.is-compact .Navbar-mobile {
  background-color: #0b0d12;
  background: #0b0d12;
  border-bottom: none; }
  .Navbar.is-compact .Navbar-mobile .Navbar-mobileIcon.Navbar-siteMenuIcon {
    color: #00aeff; }
    .Navbar.is-compact .Navbar-mobile .Navbar-mobileIcon.Navbar-siteMenuIcon:hover {
      color: #00c6ff; }
  .Navbar.is-compact .Navbar-mobile .Navbar-mobileIcon.Navbar-profileIcon {
    color: #00aeff; }
    .Navbar.is-compact .Navbar-mobile .Navbar-mobileIcon.Navbar-profileIcon:hover {
      color: #00c6ff; }

.Navbar.is-compact .Navbar-siteMenu .Navbar-modalContent {
  background-color: #151a23;
  background: #151a23; }

.Navbar.is-compact .Navbar-siteMenu .Navbar-modalClose {
  color: #00aeff; }
  .Navbar.is-compact .Navbar-siteMenu .Navbar-modalClose:hover {
    color: #00c6ff; }

.Navbar.is-compact.is-custom-logo .Navbar-mobile .Navbar-logo {
  display: none; }

.Navbar.is-compact.is-custom-logo .Navbar-mobile .Navbar-customLogo {
  display: block; }

.Navbar.is-login-disabled .Navbar-mobile .Navbar-account {
  display: none !important; }

.Navbar.is-site-menu-disabled .Navbar-mobile .Navbar-menu {
  display: none !important; }

.Navbar.is-support-active .Navbar-accountDropdownSupport .Navbar-accountDropdownCounter {
  display: inline-block; }

.Navbar.is-support-active .Navbar-mobileIcon.Navbar-profileIcon:after {
  content: ' ';
  position: absolute;
  right: 8px;
  bottom: 8px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ff9000;
  pointer-events: none; }

.Navbar.is-focused .Navbar-mobile {
  filter: brightness(50%); }
  .Navbar.is-focused .Navbar-mobile .Navbar-mobileOverlay {
    display: block; }

/**
	* Desktop-specific styling
	*/
.Navbar:not(.keyboardMode) a, .Navbar:not(.keyboardMode) *[tabindex] {
  outline-style: none; }

.Navbar .Navbar-desktop {
  position: relative;
  height: 60px;
  padding: 0 30px;
  white-space: nowrap; }
  .Navbar .Navbar-desktop .Navbar-desktopOverlay {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; }
  .Navbar .Navbar-desktop .Navbar-logo {
    position: relative;
    display: inline-block;
    height: 60px;
    width: 61.82004px;
    margin-right: 20px; }
    .Navbar .Navbar-desktop .Navbar-logo svg {
      height: 28px; }
    .Navbar .Navbar-desktop .Navbar-logo:hover {
      color: #00aeff; }
    @media (min-width: 960px) {
      .Navbar .Navbar-desktop .Navbar-logo {
        margin-right: 30px; } }
  .Navbar .Navbar-desktop .Navbar-item {
    position: relative;
    display: inline-block;
    height: 60px;
    padding: 0;
    font-family: "Blizzard", Helvetica, Arial, sans-serif;
    font-size: 17px;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.7);
    background: transparent;
    white-space: nowrap;
    transition: color 200ms, background-color 200ms, border-color 200ms; }
    .Navbar .Navbar-desktop .Navbar-item .Navbar-label {
      display: inline-block;
      line-height: 60px;
      height: 60px; }
      .Navbar .Navbar-desktop .Navbar-item .Navbar-label.Navbar-accountUnauthenticated {
        display: inline-block; }
      .Navbar .Navbar-desktop .Navbar-item .Navbar-label.Navbar-accountAuthenticated {
        display: none; }
    .Navbar .Navbar-desktop .Navbar-item.Navbar-modalToggle {
      cursor: pointer; }
    .Navbar .Navbar-desktop .Navbar-item .Navbar-dropdownIcon {
      display: inline-block;
      width: 16px;
      height: 1px;
      margin-left: 2px;
      color: rgba(255, 255, 255, 0.3);
      transition: color 200ms, background-color 200ms, border-color 200ms; }
      .Navbar .Navbar-desktop .Navbar-item .Navbar-dropdownIcon svg {
        height: 16px;
        top: auto;
        bottom: -.05em; }
    .Navbar .Navbar-desktop .Navbar-item.is-active .Navbar-dropdownIcon svg {
      transform: rotate(180deg);
      transform-origin: center; }
    .Navbar .Navbar-desktop .Navbar-item.is-current {
      text-shadow: 0 0 15px #fff, 0 0 30px rgba(255, 255, 255, 0.3);
      color: #fff; }
    .Navbar .Navbar-desktop .Navbar-item.is-faded {
      color: rgba(255, 255, 255, 0.3);
      text-shadow: none; }
      .Navbar .Navbar-desktop .Navbar-item.is-faded .Navbar-dropdownIcon {
        color: rgba(255, 255, 255, 0.3); }
    .Navbar .Navbar-desktop .Navbar-item:visited {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.7);
      background: transparent; }
    .Navbar .Navbar-desktop .Navbar-item:active {
      outline: 0; }
    .Navbar .Navbar-desktop .Navbar-item:hover, .Navbar .Navbar-desktop .Navbar-item:focus {
      color: #fff;
      background: transparent; }
      .Navbar .Navbar-desktop .Navbar-item:hover .Navbar-dropdownIcon, .Navbar .Navbar-desktop .Navbar-item:focus .Navbar-dropdownIcon {
        color: rgba(255, 255, 255, 0.5); }
  .Navbar .Navbar-desktop .Navbar-items, .Navbar .Navbar-desktop .Navbar-collapsedItems {
    display: inline-block;
    vertical-align: top; }
    .Navbar .Navbar-desktop .Navbar-items .Navbar-item, .Navbar .Navbar-desktop .Navbar-collapsedItems .Navbar-item {
      text-transform: uppercase;
      margin-right: 20px; }
      .Navbar .Navbar-desktop .Navbar-items .Navbar-item.Navbar-simple, .Navbar .Navbar-desktop .Navbar-collapsedItems .Navbar-item.Navbar-simple {
        display: none; }
      .Navbar .Navbar-desktop .Navbar-items .Navbar-item:last-child, .Navbar .Navbar-desktop .Navbar-collapsedItems .Navbar-item:last-child {
        margin-right: 0; }
      @media (min-width: 960px) {
        .Navbar .Navbar-desktop .Navbar-items .Navbar-item, .Navbar .Navbar-desktop .Navbar-collapsedItems .Navbar-item {
          margin-right: 30px; }
          .Navbar .Navbar-desktop .Navbar-items .Navbar-item:last-child, .Navbar .Navbar-desktop .Navbar-collapsedItems .Navbar-item:last-child {
            margin-right: 0; } }
  .Navbar .Navbar-desktop .Navbar-collapsedItems {
    position: absolute;
    margin-left: -0.750em;
    left: 111.82004px; }
    @media (min-width: 960px) {
      .Navbar .Navbar-desktop .Navbar-collapsedItems {
        left: 145.06719px; } }
    .Navbar .Navbar-desktop .Navbar-collapsedItems .Navbar-collapsedIcon {
      display: inline-block;
      width: 38px;
      height: 38px;
      cursor: pointer;
      vertical-align: top;
      margin-top: 0.65em; }
  .Navbar .Navbar-desktop .Navbar-profileItems {
    right: 30px; }
    .Navbar .Navbar-desktop .Navbar-profileItems .Navbar-item {
      margin-left: 20px;
      font-size: 15px;
      line-height: 1.4; }
      .Navbar .Navbar-desktop .Navbar-profileItems .Navbar-item:first-child {
        margin-left: 0; }
      @media (min-width: 960px) {
        .Navbar .Navbar-desktop .Navbar-profileItems .Navbar-item {
          margin-left: 30px; }
          .Navbar .Navbar-desktop .Navbar-profileItems .Navbar-item:first-child {
            margin-left: 0; } }
    .Navbar .Navbar-desktop .Navbar-profileItems .Navbar-dropdownIcon svg {
      bottom: -.15em; }
  .Navbar .Navbar-desktop .Navbar-link {
    text-decoration: none; }
  .Navbar .Navbar-desktop .Navbar-profile {
    right: 30px; }
    .Navbar .Navbar-desktop .Navbar-profile .Navbar-item {
      margin-right: 0;
      margin-left: 20px; }
      @media (min-width: 960px) {
        .Navbar .Navbar-desktop .Navbar-profile .Navbar-item {
          margin-left: 30px; } }
  .Navbar .Navbar-desktop .Navbar-employeeIcon {
    display: none;
    width: 24px;
    height: 1px;
    margin-right: 5px;
    color: #00aeff; }
    .Navbar .Navbar-desktop .Navbar-employeeIcon svg {
      height: 24px;
      top: auto;
      bottom: -.4em; }

.Navbar.is-simple .Navbar-desktop .Navbar-logo {
  margin-right: 20px; }
  @media (min-width: 960px) {
    .Navbar.is-simple .Navbar-desktop .Navbar-logo {
      margin-right: 20px; } }

.Navbar.is-simple .Navbar-desktop .Navbar-items .Navbar-item:not(.Navbar-account), .Navbar.is-simple .Navbar-desktop .Navbar-collapsedItems .Navbar-item:not(.Navbar-account),
.Navbar.is-simple .Navbar-desktop .Navbar-profileItems .Navbar-item:not(.Navbar-account) {
  display: none; }
  .Navbar.is-simple .Navbar-desktop .Navbar-items .Navbar-item:not(.Navbar-account).Navbar-simple, .Navbar.is-simple .Navbar-desktop .Navbar-collapsedItems .Navbar-item:not(.Navbar-account).Navbar-simple,
  .Navbar.is-simple .Navbar-desktop .Navbar-profileItems .Navbar-item:not(.Navbar-account).Navbar-simple {
    display: inline-block;
    color: #fff; }

.Navbar.is-login-disabled .Navbar-desktop .Navbar-account {
  display: none !important; }

.Navbar .Navbar-support .Navbar-supportCounter {
  display: none;
  background-color: #ff9000;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  font-size: 11px;
  font-weight: bold;
  line-height: 16px;
  text-shadow: 0 0 3px #000;
  text-align: center;
  color: #fff;
  margin-left: 5px; }

.Navbar.is-authenticated .Navbar-desktop .Navbar-item .Navbar-label.Navbar-accountUnauthenticated {
  display: none; }

.Navbar.is-authenticated .Navbar-desktop .Navbar-item .Navbar-label.Navbar-accountAuthenticated {
  display: inline-block; }

.Navbar.is-authenticated.is-employee .Navbar-desktop .Navbar-employeeIcon {
  display: inline-block; }

.Navbar.is-support-active .Navbar-support .Navbar-supportCounter {
  display: inline-block; }

.Navbar.is-focused .Navbar-desktop .Navbar-desktopOverlay {
  display: block; }

/**
	* High level responsive behavior
	*/
.Navbar.is-mobile {
  background-color: rgba(11, 13, 18, 0.95);
  box-shadow: none; }

.Navbar.is-desktop {
  background-color: #0b0d12; }
  .Navbar.is-desktop .Navbar-dropdown {
    top: 59px; }
  .Navbar.is-desktop .Navbar-accountDropdownLink {
    transition: color 200ms, background-color 200ms; }
    .Navbar.is-desktop .Navbar-accountDropdownLink:hover {
      color: #fff; }
      .Navbar.is-desktop .Navbar-accountDropdownLink:hover .Navbar-accountDropdownLinkIcon {
        color: #00c6ff; }
  .Navbar.is-desktop:after {
    content: ' ';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: solid 1px rgba(255, 255, 255, 0.15);
    pointer-events: none; }

@media (max-width: 767px) {
  .Navbar.is-auto {
    background-color: rgba(11, 13, 18, 0.95);
    box-shadow: none; }
    .Navbar.is-auto .Navbar-desktop {
      display: none; } }

@media (min-width: 768px) {
  .Navbar.is-auto {
    background-color: #0b0d12; }
    .Navbar.is-auto .Navbar-mobile {
      display: none; }
    .Navbar.is-auto .Navbar-dropdown {
      top: 59px; }
    .Navbar.is-auto .Navbar-accountDropdownLink {
      transition: color 200ms, background-color 200ms; }
      .Navbar.is-auto .Navbar-accountDropdownLink:hover {
        color: #fff; }
        .Navbar.is-auto .Navbar-accountDropdownLink:hover .Navbar-accountDropdownLinkIcon {
          color: #00c6ff; }
    .Navbar.is-auto:after {
      content: ' ';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-bottom: solid 1px rgba(255, 255, 255, 0.15);
      pointer-events: none; } }

@media (min-width: 960px) {
  .Navbar:not(.is-compact) .Navbar-desktop .Navbar-collapsedItems {
    left: 145.06719px; }
  .Navbar:not(.is-compact) .Navbar-desktop .Navbar-logo {
    width: 75.06719px; }
    .Navbar:not(.is-compact) .Navbar-desktop .Navbar-logo svg {
      height: 34px; } }

@media (min-width: 1200px) {
  .Navbar:not(.is-compact) .Navbar-desktop .Navbar-item {
    font-size: 20px; }
  .Navbar:not(.is-compact) .Navbar-desktop .Navbar-profileItems .Navbar-item {
    font-size: 17px; } }

@media (min-width: 960px) {
  .Navbar:not(.is-compact):not(.is-simple) .Navbar-desktop {
    padding: 0 40px; }
    .Navbar:not(.is-compact):not(.is-simple) .Navbar-desktop .Navbar-profileItems {
      right: 40px; } }

@media (min-width: 768px) {
  .Navbar.is-compact {
    background-color: #0b0d12; } }

.Navbar.is-compact .Navbar-desktop {
  height: 40px; }
  .Navbar.is-compact .Navbar-desktop .Navbar-collapsedItems {
    left: 111.82004px; }
  .Navbar.is-compact .Navbar-desktop .Navbar-logo {
    height: 40px;
    width: 61.82004px;
    background-size: auto 28px; }
  .Navbar.is-compact .Navbar-desktop .Navbar-item {
    height: 40px;
    font-size: 15px; }
    .Navbar.is-compact .Navbar-desktop .Navbar-item .Navbar-label {
      height: 40px;
      line-height: 40px; }
    .Navbar.is-compact .Navbar-desktop .Navbar-item .Navbar-dropdownIcon {
      width: 14px; }
      .Navbar.is-compact .Navbar-desktop .Navbar-item .Navbar-dropdownIcon svg {
        height: 14px;
        top: auto;
        bottom: -.05em; }
  @media (min-width: 960px) {
    .Navbar.is-compact .Navbar-desktop {
      padding: 0 40px; }
      .Navbar.is-compact .Navbar-desktop .Navbar-profileItems {
        right: 40px; } }

.Navbar.is-compact .Navbar-dropdown {
  top: 39px; }

.Navbar.is-compact .Navbar-collapsedItems .Navbar-collapsedIcon {
  margin-top: 0.05em; }

.Navbar .Navbar-button {
  display: inline-block;
  position: relative;
  background-color: #006fb2;
  border: solid 1px #00aeff;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: #fff;
  padding: 10px 50px;
  outline-offset: 2px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  overflow: visible;
  max-width: 100%;
  transition: color 200ms, background-color 200ms, border-color 200ms; }
  .Navbar .Navbar-button:hover, .Navbar .Navbar-button:focus {
    background-color: #007bc6;
    border: solid 1px #79d4ff;
    text-decoration: none;
    color: #fff; }
  .Navbar .Navbar-button:active {
    background-color: #00629E;
    border: solid 1px #007bc6;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.8); }
  .Navbar .Navbar-button:disabled, .Navbar .Navbar-button.is-disabled {
    background-color: rgba(27, 30, 39, 0.8);
    border: solid 1px rgba(27, 30, 39, 0.8);
    text-decoration: none;
    color: rgba(0, 123, 198, 0.15); }
  .Navbar .Navbar-button.is-full {
    width: 100%; }
  .Navbar .Navbar-button.is-tertiary {
    background-color: rgba(0, 0, 0, 0.2);
    border: solid 1px rgba(255, 255, 255, 0.15);
    color: #00aeff; }
    .Navbar .Navbar-button.is-tertiary:hover {
      background-color: rgba(0, 0, 0, 0.2);
      border: solid 1px rgba(255, 255, 255, 0.3);
      color: #91e4ff; }
    .Navbar .Navbar-button.is-tertiary:active {
      background-color: rgba(0, 0, 0, 0.3);
      border: solid 1px rgba(255, 255, 255, 0.15);
      color: rgba(145, 228, 255, 0.8); }
    .Navbar .Navbar-button.is-tertiary:disabled, .Navbar .Navbar-button.is-tertiary.is-disabled {
      background-color: rgba(0, 0, 0, 0.2);
      border: solid 1px rgba(255, 255, 255, 0.05);
      color: rgba(0, 174, 255, 0.15); }

.Navbar .Navbar-modal {
  display: none;
  z-index: 3; }
  .Navbar .Navbar-modal.is-open {
    display: block; }

.Navbar .Navbar-dropdown {
  position: absolute;
  top: 47px;
  background-color: rgba(21, 26, 35, 0.95);
  background: radial-gradient(ellipse farthest-side at center top, #283244 0%, rgba(21, 26, 35, 0.95) 100%);
  border: solid 1px rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);
  opacity: 0; }
  .Navbar .Navbar-dropdown.is-open {
    opacity: 1.0; }
  .Navbar .Navbar-dropdown.is-full {
    left: 0;
    right: 0;
    border-left: 0;
    border-right: 0; }
  .Navbar .Navbar-dropdown .Navbar-tick {
    position: absolute;
    left: 0;
    top: 0;
    width: 10px;
    height: 10px;
    border-top: solid 1px rgba(255, 255, 255, 0.15);
    border-right: solid 1px rgba(255, 255, 255, 0.15);
    background-color: #283244;
    opacity: 0.95;
    transform: translate(-50%, -50%) rotate(-45deg);
    transform-origin: center; }
    .Navbar .Navbar-dropdown .Navbar-tick .Navbar-tickInner {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border: solid 1px rgba(0, 0, 0, 0);
      background-color: #151a23;
      opacity: 0; }

.Navbar .Navbar-modalContent {
  z-index: 1;
  position: relative; }

.Navbar .Navbar-modalContent + .Navbar-modalClose {
  position: absolute;
  top: -10000px;
  right: 0px;
  opacity: 0;
  z-index: 1;
  flex-direction: row;
  padding: 5px;
  margin: 10px;
  height: inherit;
  width: inherit;
  cursor: pointer;
  display: inline-flex; }
  .Navbar .Navbar-modalContent + .Navbar-modalClose:focus, .Navbar .Navbar-modalContent + .Navbar-modalClose:active {
    top: 0px;
    opacity: 1; }
  .Navbar .Navbar-modalContent + .Navbar-modalClose:hover .Navbar-icon {
    color: #00c6ff;
    transition: color 0.3s; }
  .Navbar .Navbar-modalContent + .Navbar-modalClose:hover .Navbar-gameMenuItemLabel {
    transition: color 0.3s;
    opacity: 1;
    color: #fff; }
  .Navbar .Navbar-modalContent + .Navbar-modalClose .Navbar-icon {
    transition: color 0.3s;
    color: #00aeff; }
    .Navbar .Navbar-modalContent + .Navbar-modalClose .Navbar-icon svg {
      top: 0px;
      bottom: 0px;
      left: 0px;
      right: 0px; }
  .Navbar .Navbar-modalContent + .Navbar-modalClose .Navbar-gameMenuItemLabel {
    transition: color 0.3s;
    color: rgba(255, 255, 255, 0.7);
    margin-left: 5px; }

.Navbar .Navbar-modalSection {
  border-top: solid 1px rgba(255, 255, 255, 0.08);
  padding: 20px; }
  .Navbar .Navbar-modalSection:first-child {
    border-top: 0; }
  .Navbar .Navbar-modalSection.is-full {
    padding: 0; }

.Navbar .Navbar-dropdownFooter {
  height: 50px;
  padding: 0; }

.Navbar .Navbar-dropdown .Navbar-gamePublishers {
  display: table;
  position: relative;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 30px; }
  @media (min-width: 960px) {
    .Navbar .Navbar-dropdown .Navbar-gamePublishers {
      padding: 0 40px; } }
  @media (max-width: 1319px) {
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher {
      padding-right: 0; }
      .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher:not(:first-child) {
        padding-left: 11px; } }
  @media (min-width: 1320px) {
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gameLogos {
      display: none; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-posters {
      display: block; } }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns1 {
    width: 12.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns1 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns1 .Navbar-poster {
      width: calc(100% - 0px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns2 {
    width: 25%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns2 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns2 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns2 .Navbar-poster {
      width: calc(50% - 10px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns3 {
    width: 37.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns3 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns3 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns3 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns3 .Navbar-poster {
      width: calc(33.33333% - 13.33333px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns4 {
    width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns4 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 25%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns4 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns4 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 75%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns4 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns4 .Navbar-poster {
      width: calc(25% - 15px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns5 {
    width: 62.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 20%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 40%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 60%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 80%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns5 .Navbar-poster {
      width: calc(20% - 16px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns6 {
    width: 75%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 16.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 83.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns6 .Navbar-poster {
      width: calc(16.66667% - 16.66667px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns7 {
    width: 87.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 14.28571%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 28.57143%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 42.85714%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 57.14286%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 71.42857%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 85.71429%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns7 .Navbar-poster {
      width: calc(14.28571% - 17.14286px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns8 {
    width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 12.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 25%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 37.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 62.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 75%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 87.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns8 .Navbar-poster {
      width: calc(12.5% - 17.5px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns9 {
    width: 112.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 11.11111%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 22.22222%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 44.44444%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 55.55556%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 77.77778%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 88.88889%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns9 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns9 .Navbar-poster {
      width: calc(11.11111% - 17.77778px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns10 {
    width: 125%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 10%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 20%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 30%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 40%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 60%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 70%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 80%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns9 {
      min-width: 90%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns10 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns10 .Navbar-poster {
      width: calc(10% - 18px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns11 {
    width: 137.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 9.09091%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 18.18182%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 27.27273%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 36.36364%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 45.45455%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 54.54545%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 63.63636%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 72.72727%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns9 {
      min-width: 81.81818%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns10 {
      min-width: 90.90909%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns11 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns11 .Navbar-poster {
      width: calc(9.09091% - 18.18182px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns12 {
    width: 150%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 8.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 16.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 25%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 41.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 58.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns9 {
      min-width: 75%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns10 {
      min-width: 83.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns11 {
      min-width: 91.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns12 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns8 .Navbar-gamePublisher.Navbar-columns12 .Navbar-poster {
      width: calc(8.33333% - 18.33333px); }
  @media (max-width: 1474px) {
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher {
      padding-right: 0; }
      .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher:not(:first-child) {
        padding-left: 11px; } }
  @media (min-width: 1475px) {
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gameLogos {
      display: none; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-posters {
      display: block; } }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns1 {
    width: 11.11111%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns1 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns1 .Navbar-poster {
      width: calc(100% - 0px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns2 {
    width: 22.22222%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns2 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns2 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns2 .Navbar-poster {
      width: calc(50% - 10px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns3 {
    width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns3 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns3 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns3 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns3 .Navbar-poster {
      width: calc(33.33333% - 13.33333px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns4 {
    width: 44.44444%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns4 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 25%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns4 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns4 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 75%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns4 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns4 .Navbar-poster {
      width: calc(25% - 15px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns5 {
    width: 55.55556%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 20%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 40%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 60%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 80%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns5 .Navbar-poster {
      width: calc(20% - 16px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns6 {
    width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 16.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 83.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns6 .Navbar-poster {
      width: calc(16.66667% - 16.66667px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns7 {
    width: 77.77778%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 14.28571%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 28.57143%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 42.85714%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 57.14286%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 71.42857%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 85.71429%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns7 .Navbar-poster {
      width: calc(14.28571% - 17.14286px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns8 {
    width: 88.88889%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 12.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 25%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 37.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 62.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 75%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 87.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns8 .Navbar-poster {
      width: calc(12.5% - 17.5px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns9 {
    width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 11.11111%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 22.22222%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 44.44444%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 55.55556%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 77.77778%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 88.88889%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns9 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns9 .Navbar-poster {
      width: calc(11.11111% - 17.77778px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns10 {
    width: 111.11111%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 10%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 20%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 30%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 40%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 60%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 70%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 80%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns9 {
      min-width: 90%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns10 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns10 .Navbar-poster {
      width: calc(10% - 18px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns11 {
    width: 122.22222%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 9.09091%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 18.18182%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 27.27273%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 36.36364%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 45.45455%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 54.54545%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 63.63636%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 72.72727%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns9 {
      min-width: 81.81818%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns10 {
      min-width: 90.90909%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns11 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns11 .Navbar-poster {
      width: calc(9.09091% - 18.18182px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns12 {
    width: 133.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 8.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 16.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 25%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 41.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 58.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns9 {
      min-width: 75%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns10 {
      min-width: 83.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns11 {
      min-width: 91.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns12 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns9 .Navbar-gamePublisher.Navbar-columns12 .Navbar-poster {
      width: calc(8.33333% - 18.33333px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns1 {
    width: 10%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns1 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns1 .Navbar-poster {
      width: calc(100% - 0px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns2 {
    width: 20%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns2 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns2 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns2 .Navbar-poster {
      width: calc(50% - 10px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns3 {
    width: 30%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns3 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns3 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns3 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns3 .Navbar-poster {
      width: calc(33.33333% - 13.33333px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns4 {
    width: 40%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns4 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 25%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns4 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns4 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 75%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns4 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns4 .Navbar-poster {
      width: calc(25% - 15px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns5 {
    width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 20%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 40%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 60%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 80%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns5 .Navbar-poster {
      width: calc(20% - 16px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns6 {
    width: 60%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 16.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 83.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns6 .Navbar-poster {
      width: calc(16.66667% - 16.66667px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns7 {
    width: 70%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 14.28571%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 28.57143%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 42.85714%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 57.14286%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 71.42857%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 85.71429%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns7 .Navbar-poster {
      width: calc(14.28571% - 17.14286px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns8 {
    width: 80%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 12.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 25%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 37.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 62.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 75%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 87.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns8 .Navbar-poster {
      width: calc(12.5% - 17.5px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns9 {
    width: 90%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 11.11111%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 22.22222%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 44.44444%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 55.55556%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 77.77778%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 88.88889%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns9 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns9 .Navbar-poster {
      width: calc(11.11111% - 17.77778px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns10 {
    width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 10%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 20%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 30%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 40%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 60%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 70%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 80%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns9 {
      min-width: 90%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns10 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns10 .Navbar-poster {
      width: calc(10% - 18px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns11 {
    width: 110%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 9.09091%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 18.18182%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 27.27273%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 36.36364%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 45.45455%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 54.54545%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 63.63636%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 72.72727%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns9 {
      min-width: 81.81818%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns10 {
      min-width: 90.90909%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns11 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns11 .Navbar-poster {
      width: calc(9.09091% - 18.18182px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns12 {
    width: 120%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 8.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 16.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 25%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 41.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 58.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns9 {
      min-width: 75%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns10 {
      min-width: 83.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns11 {
      min-width: 91.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns12 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns10 .Navbar-gamePublisher.Navbar-columns12 .Navbar-poster {
      width: calc(8.33333% - 18.33333px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns1 {
    width: 9.09091%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns1 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns1 .Navbar-poster {
      width: calc(100% - 0px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns2 {
    width: 18.18182%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns2 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns2 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns2 .Navbar-poster {
      width: calc(50% - 10px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns3 {
    width: 27.27273%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns3 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns3 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns3 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns3 .Navbar-poster {
      width: calc(33.33333% - 13.33333px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns4 {
    width: 36.36364%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns4 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 25%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns4 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns4 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 75%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns4 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns4 .Navbar-poster {
      width: calc(25% - 15px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns5 {
    width: 45.45455%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 20%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 40%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 60%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 80%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns5 .Navbar-poster {
      width: calc(20% - 16px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns6 {
    width: 54.54545%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 16.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 83.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns6 .Navbar-poster {
      width: calc(16.66667% - 16.66667px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns7 {
    width: 63.63636%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 14.28571%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 28.57143%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 42.85714%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 57.14286%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 71.42857%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 85.71429%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns7 .Navbar-poster {
      width: calc(14.28571% - 17.14286px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns8 {
    width: 72.72727%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 12.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 25%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 37.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 62.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 75%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 87.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns8 .Navbar-poster {
      width: calc(12.5% - 17.5px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns9 {
    width: 81.81818%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 11.11111%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 22.22222%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 44.44444%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 55.55556%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 77.77778%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 88.88889%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns9 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns9 .Navbar-poster {
      width: calc(11.11111% - 17.77778px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns10 {
    width: 90.90909%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 10%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 20%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 30%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 40%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 60%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 70%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 80%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns9 {
      min-width: 90%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns10 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns10 .Navbar-poster {
      width: calc(10% - 18px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns11 {
    width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 9.09091%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 18.18182%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 27.27273%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 36.36364%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 45.45455%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 54.54545%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 63.63636%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 72.72727%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns9 {
      min-width: 81.81818%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns10 {
      min-width: 90.90909%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns11 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns11 .Navbar-poster {
      width: calc(9.09091% - 18.18182px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns12 {
    width: 109.09091%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 8.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 16.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 25%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 41.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 58.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns9 {
      min-width: 75%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns10 {
      min-width: 83.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns11 {
      min-width: 91.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns12 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns11 .Navbar-gamePublisher.Navbar-columns12 .Navbar-poster {
      width: calc(8.33333% - 18.33333px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns1 {
    width: 8.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns1 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns1 .Navbar-poster {
      width: calc(100% - 0px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns2 {
    width: 16.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns2 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns2 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns2 .Navbar-poster {
      width: calc(50% - 10px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns3 {
    width: 25%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns3 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns3 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns3 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns3 .Navbar-poster {
      width: calc(33.33333% - 13.33333px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns4 {
    width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns4 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 25%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns4 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns4 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 75%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns4 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns4 .Navbar-poster {
      width: calc(25% - 15px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns5 {
    width: 41.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 20%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 40%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 60%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 80%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns5 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns5 .Navbar-poster {
      width: calc(20% - 16px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns6 {
    width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 16.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 83.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns6 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns6 .Navbar-poster {
      width: calc(16.66667% - 16.66667px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns7 {
    width: 58.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 14.28571%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 28.57143%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 42.85714%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 57.14286%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 71.42857%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 85.71429%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns7 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns7 .Navbar-poster {
      width: calc(14.28571% - 17.14286px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns8 {
    width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 12.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 25%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 37.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 62.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 75%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 87.5%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns8 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns8 .Navbar-poster {
      width: calc(12.5% - 17.5px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns9 {
    width: 75%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 11.11111%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 22.22222%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 44.44444%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 55.55556%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 77.77778%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 88.88889%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns9 .Navbar-gameLogoBlock.Navbar-columns9 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns9 .Navbar-poster {
      width: calc(11.11111% - 17.77778px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns10 {
    width: 83.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 10%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 20%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 30%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 40%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 60%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 70%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 80%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns9 {
      min-width: 90%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns10 .Navbar-gameLogoBlock.Navbar-columns10 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns10 .Navbar-poster {
      width: calc(10% - 18px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns11 {
    width: 91.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 9.09091%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 18.18182%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 27.27273%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 36.36364%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 45.45455%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 54.54545%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 63.63636%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 72.72727%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns9 {
      min-width: 81.81818%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns10 {
      min-width: 90.90909%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns11 .Navbar-gameLogoBlock.Navbar-columns11 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns11 .Navbar-poster {
      width: calc(9.09091% - 18.18182px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns12 {
    width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns1 {
      min-width: 8.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns2 {
      min-width: 16.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns3 {
      min-width: 25%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns4 {
      min-width: 33.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns5 {
      min-width: 41.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns6 {
      min-width: 50%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns7 {
      min-width: 58.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns8 {
      min-width: 66.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns9 {
      min-width: 75%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns10 {
      min-width: 83.33333%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns11 {
      min-width: 91.66667%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns12 .Navbar-gameLogoBlock.Navbar-columns12 {
      min-width: 100%; }
    .Navbar .Navbar-dropdown .Navbar-gamePublishers.Navbar-columns12 .Navbar-gamePublisher.Navbar-columns12 .Navbar-poster {
      width: calc(8.33333% - 18.33333px); }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers .Navbar-gameLogoBlock.Navbar-columns1 .Navbar-gameLogo {
    width: 100%; }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers .Navbar-gameLogoBlock.Navbar-columns2 .Navbar-gameLogo {
    width: 50%; }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers .Navbar-gameLogoBlock.Navbar-columns3 .Navbar-gameLogo {
    width: 33.33333%; }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers .Navbar-gameLogoBlock.Navbar-columns4 .Navbar-gameLogo {
    width: 25%; }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers .Navbar-gameLogoBlock.Navbar-columns5 .Navbar-gameLogo {
    width: 20%; }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers .Navbar-gameLogoBlock.Navbar-columns6 .Navbar-gameLogo {
    width: 16.66667%; }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers .Navbar-gameLogoBlock.Navbar-columns7 .Navbar-gameLogo {
    width: 14.28571%; }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers .Navbar-gameLogoBlock.Navbar-columns8 .Navbar-gameLogo {
    width: 12.5%; }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers .Navbar-gameLogoBlock.Navbar-columns9 .Navbar-gameLogo {
    width: 11.11111%; }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers .Navbar-gameLogoBlock.Navbar-columns10 .Navbar-gameLogo {
    width: 10%; }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers .Navbar-gameLogoBlock.Navbar-columns11 .Navbar-gameLogo {
    width: 9.09091%; }
  .Navbar .Navbar-dropdown .Navbar-gamePublishers .Navbar-gameLogoBlock.Navbar-columns12 .Navbar-gameLogo {
    width: 8.33333%; }

.Navbar .Navbar-dropdown .Navbar-gamePublisher {
  display: table-cell;
  position: relative;
  vertical-align: top;
  padding: 20px 20px 15px; }
  .Navbar .Navbar-dropdown .Navbar-gamePublisher:first-child {
    padding-left: 0; }
  .Navbar .Navbar-dropdown .Navbar-gamePublisher:last-child {
    padding-right: 0; }
  @media (min-width: 1200px) {
    .Navbar .Navbar-dropdown .Navbar-gamePublisher:first-child {
      padding-left: 0; }
    .Navbar .Navbar-dropdown .Navbar-gamePublisher:last-child {
      padding-right: 0; } }
  .Navbar .Navbar-dropdown .Navbar-gamePublisher:not(:first-child) {
    padding-left: 21px; }
    .Navbar .Navbar-dropdown .Navbar-gamePublisher:not(:first-child):after {
      content: '';
      position: absolute;
      top: 20px;
      bottom: 20px;
      left: 0;
      width: 1px;
      border-left: solid 1px rgba(255, 255, 255, 0.15);
      pointer-events: none; }
  .Navbar .Navbar-dropdown .Navbar-gamePublisher:only-child {
    padding-top: 20px;
    padding-bottom: 20px; }
    .Navbar .Navbar-dropdown .Navbar-gamePublisher:only-child .Navbar-poster {
      margin-top: 15px; }
  .Navbar .Navbar-dropdown .Navbar-gamePublisher .Navbar-gamePublisherLabel {
    text-align: left;
    font-size: 13px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5); }
    @media (min-width: 1200px) {
      .Navbar .Navbar-dropdown .Navbar-gamePublisher .Navbar-gamePublisherLabel {
        margin-bottom: 10px; } }

.Navbar .Navbar-dropdown .Navbar-gameLogos {
  display: block;
  text-align: center;
  font-size: 0; }

.Navbar .Navbar-dropdown .Navbar-gameLogoBlock {
  display: inline-block;
  white-space: nowrap; }

.Navbar .Navbar-dropdown .Navbar-gameLogo {
  position: relative;
  display: inline-block;
  height: 16.145vw;
  max-height: 130px;
  min-width: 80px;
  min-height: 123.9936px;
  transform: translateZ(0); }
  .Navbar .Navbar-dropdown .Navbar-gameLogo .Navbar-gameLogoImage {
    position: absolute;
    bottom: 37.5%;
    left: 50%;
    width: 64px;
    height: 64px;
    transform: translateX(-50%);
    filter: brightness(100%) contrast(100%);
    transition: filter 200ms; }
  .Navbar .Navbar-dropdown .Navbar-gameLogo .Navbar-gameLogoLabel {
    position: absolute;
    top: 62.5%;
    left: 15%;
    right: 15%;
    text-align: center;
    font-size: 11px;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.7);
    white-space: normal;
    transition: color 200ms; }
  .Navbar .Navbar-dropdown .Navbar-gameLogo:hover .Navbar-gameLogoImage, .Navbar .Navbar-dropdown .Navbar-gameLogo:focus .Navbar-gameLogoImage {
    filter: brightness(115%) contrast(90%); }
  .Navbar .Navbar-dropdown .Navbar-gameLogo:hover .Navbar-gameLogoLabel, .Navbar .Navbar-dropdown .Navbar-gameLogo:focus .Navbar-gameLogoLabel {
    color: #fff; }

.Navbar .Navbar-dropdown .Navbar-posters {
  display: none;
  text-align: center;
  font-size: 0; }

.Navbar .Navbar-dropdown.is-open .Navbar-gamePublisherLabel {
  animation-name: Navbar-dropdown-fade-in;
  animation-duration: 200ms;
  animation-fill-mode: backwards;
  animation-timing-function: ease-out; }

.Navbar .Navbar-dropdown.is-open .Navbar-gameMenuItem {
  animation-name: Navbar-dropdown-drop-in-delayed;
  animation-duration: 200ms;
  animation-fill-mode: backwards;
  animation-timing-function: ease-out; }

.Navbar .Navbar-dropdown.is-open .Navbar-imagePanel > * {
  animation-name: Navbar-dropdown-drop-in-delayed;
  animation-duration: 200ms;
  animation-fill-mode: backwards;
  animation-timing-function: ease-out; }

.Navbar .Navbar-dropdown .Navbar-poster {
  position: relative;
  display: inline-block;
  height: 180px;
  min-width: 0;
  max-width: none;
  overflow: hidden;
  box-shadow: 0 8px 17px rgba(0, 0, 0, 0.1);
  margin: 0 20px 15px 0;
  font-size: 0;
  transition: border-color 200ms;
  transform: translateZ(0); }
  .Navbar .Navbar-dropdown .Navbar-poster:first-child {
    margin-left: 0; }
  .Navbar .Navbar-dropdown .Navbar-poster:last-child {
    margin-right: 0; }
  .Navbar .Navbar-dropdown .Navbar-poster:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: solid 1px rgba(255, 255, 255, 0.15);
    pointer-events: none; }
  .Navbar .Navbar-dropdown .Navbar-poster .Navbar-posterImage {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 180px;
    width: 216px;
    filter: brightness(100%) contrast(100%);
    transition: filter 200ms; }
  .Navbar .Navbar-dropdown .Navbar-poster:hover {
    box-shadow: 0 8px 17px rgba(0, 0, 0, 0.1); }
    .Navbar .Navbar-dropdown .Navbar-poster:hover:after {
      border: solid 1px rgba(255, 255, 255, 0.3); }
    .Navbar .Navbar-dropdown .Navbar-poster:hover .Navbar-posterImage {
      filter: brightness(115%) contrast(90%); }

.Navbar .Navbar-dropdown .Navbar-gameMenu .Navbar-gameMenuItem {
  display: inline-block;
  margin: 0 20px;
  height: 50px;
  line-height: 50px;
  font-size: 15px;
  text-decoration: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  transition: color 200ms, background-color 200ms; }
  .Navbar .Navbar-dropdown .Navbar-gameMenu .Navbar-gameMenuItem .Navbar-gameMenuItemIcon {
    display: inline-block;
    color: #00aeff;
    transition: color 200ms, background-color 200ms;
    width: 1.5em;
    height: 1.5em; }
  .Navbar .Navbar-dropdown .Navbar-gameMenu .Navbar-gameMenuItem .Navbar-gameMenuItemLabel {
    display: inline-block;
    margin-left: 5px;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.4;
    color: inherit; }
  @media (min-width: 1200px) {
    .Navbar .Navbar-dropdown .Navbar-gameMenu .Navbar-gameMenuItem {
      font-size: 16px; } }
  .Navbar .Navbar-dropdown .Navbar-gameMenu .Navbar-gameMenuItem:hover, .Navbar .Navbar-dropdown .Navbar-gameMenu .Navbar-gameMenuItem:focus {
    color: #fff; }
    .Navbar .Navbar-dropdown .Navbar-gameMenu .Navbar-gameMenuItem:hover .Navbar-gameMenuItemIcon, .Navbar .Navbar-dropdown .Navbar-gameMenu .Navbar-gameMenuItem:focus .Navbar-gameMenuItemIcon {
      color: #00c6ff; }

.Navbar .Navbar-dropdown .Navbar-esportsLogos {
  display: table;
  position: relative;
  margin: 0 auto; }
  .Navbar .Navbar-dropdown .Navbar-esportsLogos .Navbar-esport {
    display: table-cell;
    position: relative;
    vertical-align: top;
    width: 16vw;
    max-width: 192px;
    font-size: 13px;
    line-height: 1.4;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    transform: translateZ(0); }
    .Navbar .Navbar-dropdown .Navbar-esportsLogos .Navbar-esport .Navbar-esportImage {
      width: 16vw;
      max-width: 192px;
      height: 16vw;
      max-height: 192px;
      filter: brightness(100%) contrast(100%);
      transition: filter 200ms; }
    .Navbar .Navbar-dropdown .Navbar-esportsLogos .Navbar-esport .Navbar-esportLabel {
      padding: 0 5px;
      margin-bottom: 20px;
      font-family: "Open Sans", Helvetica, Arial, sans-serif;
      font-size: 13px;
      font-weight: 400;
      line-height: 1.4;
      color: inherit;
      transition: color 200ms; }
    @media (min-width: 1200px) {
      .Navbar .Navbar-dropdown .Navbar-esportsLogos .Navbar-esport {
        padding: 20px 0;
        font-size: 15px; }
        .Navbar .Navbar-dropdown .Navbar-esportsLogos .Navbar-esport .Navbar-esportLabel {
          padding: 0 20px; } }
    .Navbar .Navbar-dropdown .Navbar-esportsLogos .Navbar-esport:hover, .Navbar .Navbar-dropdown .Navbar-esportsLogos .Navbar-esport:focus {
      color: #fff; }
      .Navbar .Navbar-dropdown .Navbar-esportsLogos .Navbar-esport:hover .Navbar-esportImage, .Navbar .Navbar-dropdown .Navbar-esportsLogos .Navbar-esport:focus .Navbar-esportImage {
        filter: brightness(115%) contrast(90%); }

.Navbar .Navbar-siteMenuLogo {
  color: rgba(255, 255, 255, 0.2); }
  .Navbar .Navbar-siteMenuLogo svg {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    fill: currentColor;
    pointer-events: none; }

.Navbar .Navbar-accountDropdown {
  right: 20px;
  width: 100%;
  max-width: 20em;
  border-top: 0; }

.Navbar .Navbar-accountDropdown .Navbar-modalClose {
  top: auto;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  height: 44px;
  background: rgba(21, 26, 35, 0.95);
  bottom: -45px;
  margin: 0 auto; }
  .Navbar .Navbar-accountDropdown .Navbar-modalClose:focus, .Navbar .Navbar-accountDropdown .Navbar-modalClose:active {
    top: auto; }

.Navbar .Navbar-accountDropdownLoggedOut {
  border-top: solid 1px rgba(255, 255, 255, 0.08); }

.Navbar .Navbar-accountDropdownLoggedIn {
  display: none;
  border-top: solid 1px rgba(255, 255, 255, 0.08); }
  .Navbar .Navbar-accountDropdownLoggedIn ~ .Navbar-modalClose .Navbar-gameMenuItemLabel {
    display: none; }
  .Navbar .Navbar-accountDropdownLoggedIn .Navbar-accountDropdownProfileInfo {
    font-size: 17px;
    line-height: 1.4;
    color: #82c5ff; }
    .Navbar .Navbar-accountDropdownLoggedIn .Navbar-accountDropdownProfileInfo .Navbar-accountDropdownBattleTag {
      display: inline;
      font-family: "Open Sans", Helvetica, Arial, sans-serif;
      font-size: 17px;
      font-weight: 400;
      line-height: 1.4;
      color: inherit; }
    .Navbar .Navbar-accountDropdownLoggedIn .Navbar-accountDropdownProfileInfo .Navbar-accountDropdownBattleTagNumber {
      display: inline;
      font-family: "Open Sans", Helvetica, Arial, sans-serif;
      font-size: 17px;
      font-weight: 400;
      line-height: 1.4;
      color: rgba(255, 255, 255, 0.5); }
      .Navbar .Navbar-accountDropdownLoggedIn .Navbar-accountDropdownProfileInfo .Navbar-accountDropdownBattleTagNumber:before {
        content: ' '; }
  .Navbar .Navbar-accountDropdownLoggedIn .Navbar-accountDropdownEmail {
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.4;
    overflow-x: hidden;
    text-overflow: ellipsis;
    color: rgba(255, 255, 255, 0.5); }

.Navbar.is-authenticated .Navbar-accountDropdownLoggedOut {
  display: none; }

.Navbar.is-authenticated .Navbar-accountDropdownLoggedIn {
  display: block; }

.Navbar .Navbar-accountDropdownLink {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: solid 1px rgba(255, 255, 255, 0.08);
  padding: 0 20px;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7); }
  .Navbar .Navbar-accountDropdownLink .Navbar-accountDropdownLinkIcon {
    display: inline-block;
    color: #00aeff;
    transition: color 200ms, background-color 200ms;
    width: 1.5em;
    height: 1.5em;
    margin-right: 5px; }
  .Navbar .Navbar-accountDropdownLink .Navbar-accountDropdownLinkLabel {
    display: inline-block;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    color: inherit; }

.Navbar .Navbar-toast {
  display: none;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 5px;
  padding-top: 20px;
  background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%);
  opacity: 0.0;
  z-index: 3; }
  .Navbar .Navbar-toast .Navbar-toastContainer {
    position: relative;
    min-height: 88px;
    background: rgba(21, 26, 35, 0.95);
    background: linear-gradient(to bottom, #283244 0%, rgba(21, 26, 35, 0.95) 100%);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);
    user-select: none; }
    .Navbar .Navbar-toast .Navbar-toastContainer:after {
      content: ' ';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: solid 1px rgba(255, 255, 255, 0.15);
      pointer-events: none; }
  .Navbar .Navbar-toast .Navbar-toastImage {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 48px; }
  .Navbar .Navbar-toast .Navbar-toastContent {
    position: relative;
    padding: 20px; }
  .Navbar .Navbar-toast .Navbar-toastLabel {
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 1;
    height: 17px; }
  .Navbar .Navbar-toast .Navbar-toastText {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.4;
    margin: 10px 0; }
  .Navbar .Navbar-toast .Navbar-toastLink {
    display: block;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 1;
    height: 17px;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #00aeff;
    background: transparent; }
    .Navbar .Navbar-toast .Navbar-toastLink:visited {
      text-decoration: none;
      color: #00aeff;
      background: transparent; }
    .Navbar .Navbar-toast .Navbar-toastLink:hover, .Navbar .Navbar-toast .Navbar-toastLink:focus, .Navbar .Navbar-toast .Navbar-toastLink:active {
      text-decoration: none;
      color: #00c6ff;
      background: transparent; }
  .Navbar .Navbar-toast .Navbar-button {
    padding: 4px 20px;
    font-size: 13px; }
    .Navbar .Navbar-toast .Navbar-button.is-tertiary {
      margin-left: 10px; }
    .Navbar .Navbar-toast .Navbar-button .Navbar-icon {
      display: inline-block;
      height: 1px;
      width: 17px;
      margin-left: 5px; }
      .Navbar .Navbar-toast .Navbar-button .Navbar-icon svg {
        top: auto;
        bottom: -0.25em; }
  .Navbar .Navbar-toast .Navbar-toastClose {
    position: absolute;
    top: 0;
    right: 0;
    height: 44px;
    width: 44px;
    color: #69707c;
    cursor: pointer; }
    .Navbar .Navbar-toast .Navbar-toastClose svg {
      top: 10px;
      left: 10px;
      right: auto;
      bottom: auto;
      height: 24px;
      width: 24px; }
    .Navbar .Navbar-toast .Navbar-toastClose:hover {
      color: #fff; }
  .Navbar .Navbar-toast.is-open {
    display: block;
    opacity: 1.0;
    animation-name: Navbar-promotion-in;
    animation-duration: 200ms;
    animation-fill-mode: forwards; }
  .Navbar .Navbar-toast.is-dismissed {
    animation-name: Navbar-promotion-out;
    animation-duration: 200ms;
    animation-fill-mode: forwards; }
  @media (min-width: 768px) {
    .Navbar .Navbar-toast {
      padding: 10px;
      left: auto;
      width: 400px;
      background: transparent; } }

.Navbar .Navbar-promotion .Navbar-promotionContent {
  position: relative;
  padding: 20px;
  padding-left: 88px;
  padding-right: 44px; }

.Navbar .Navbar-promotion .Navbar-promotionLabel {
  font-size: 13px;
  height: 13px;
  text-transform: uppercase;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.5); }

.Navbar .Navbar-promotion .Navbar-promotionText {
  font-size: 17px;
  color: rgba(255, 255, 255, 0.7);
  margin: 5px 0; }

@media (min-width: 480px) {
  .Navbar .Navbar-promotion {
    padding: 10px;
    left: auto;
    width: 420px;
    background: transparent; }
    .Navbar .Navbar-promotion .Navbar-promotionContainer {
      position: relative;
      min-height: 104px; }
    .Navbar .Navbar-promotion .Navbar-promotionImage {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 64px; }
    .Navbar .Navbar-promotion .Navbar-promotionContent {
      padding-left: 104px; } }

.Navbar .Navbar-mobileOnly {
  display: block; }
  @media (min-width: 768px) {
    .Navbar .Navbar-mobileOnly {
      display: none; } }

.Navbar .Navbar-desktopOnly {
  display: none; }
  @media (min-width: 768px) {
    .Navbar .Navbar-desktopOnly {
      display: block; } }

.Navbar .Navbar-constrained .Navbar-dropdown .Navbar-modalContent {
  background: linear-gradient(to bottom, #283244 0%, rgba(21, 26, 35, 0.95) 100%); }

.Navbar .Navbar-registered {
  position: relative;
  font-size: 70%;
  line-height: inherit;
  bottom: 0.4em; }

.Navbar .Navbar-svgLogoAlternate {
  fill-rule: evenodd; }

.Navbar[data-locale=ja-jp] {
  font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .Navbar[data-locale=ja-jp] .Navbar-error {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .Navbar[data-locale=ja-jp] .Navbar-button {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .Navbar[data-locale=ja-jp] .Navbar-gameMenu .Navbar-gameMenuItem .Navbar-gameMenuItemLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .Navbar[data-locale=ja-jp] .Navbar-esportsLogos .Navbar-esport .Navbar-esportLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .Navbar[data-locale=ja-jp] .Navbar-accountDropdownLoggedIn .Navbar-accountDropdownProfileInfo .Navbar-accountDropdownBattleTag {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .Navbar[data-locale=ja-jp] .Navbar-accountDropdownLoggedIn .Navbar-accountDropdownProfileInfo .Navbar-accountDropdownBattleTagNumber {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .Navbar[data-locale=ja-jp] .Navbar-accountDropdownLoggedIn .Navbar-accountDropdownProfileInfo .Navbar-accountDropdownEmail {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .Navbar[data-locale=ja-jp] .Navbar-accountDropdownLink .Navbar-accountDropdownLinkLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .Navbar[data-locale=ja-jp] .Navbar-toast .Navbar-toastLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .Navbar[data-locale=ja-jp] .Navbar-toast .Navbar-toastText {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .Navbar[data-locale=ja-jp] .Navbar-toast .Navbar-toastLink {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .Navbar[data-locale=ja-jp] .Navbar-desktop .Navbar-item {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .Navbar[data-locale=ja-jp] .Navbar-mobile .Navbar-modalLink .Navbar-modalLinkLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .Navbar[data-locale=ja-jp] .Navbar-mobile .Navbar-expandableToggle .Navbar-expandableLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .Navbar[data-locale=ja-jp] .Navbar-mobile .Navbar-expandable .Navbar-expandableItem .Navbar-expandableItemLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }

.Navbar[data-locale=ko-kr] {
  font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .Navbar[data-locale=ko-kr] .Navbar-error {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .Navbar[data-locale=ko-kr] .Navbar-button {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .Navbar[data-locale=ko-kr] .Navbar-gameMenu .Navbar-gameMenuItem .Navbar-gameMenuItemLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .Navbar[data-locale=ko-kr] .Navbar-esportsLogos .Navbar-esport .Navbar-esportLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .Navbar[data-locale=ko-kr] .Navbar-accountDropdownLoggedIn .Navbar-accountDropdownProfileInfo .Navbar-accountDropdownBattleTag {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .Navbar[data-locale=ko-kr] .Navbar-accountDropdownLoggedIn .Navbar-accountDropdownProfileInfo .Navbar-accountDropdownBattleTagNumber {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .Navbar[data-locale=ko-kr] .Navbar-accountDropdownLoggedIn .Navbar-accountDropdownProfileInfo .Navbar-accountDropdownEmail {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .Navbar[data-locale=ko-kr] .Navbar-accountDropdownLink .Navbar-accountDropdownLinkLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .Navbar[data-locale=ko-kr] .Navbar-toast .Navbar-toastLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .Navbar[data-locale=ko-kr] .Navbar-toast .Navbar-toastText {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .Navbar[data-locale=ko-kr] .Navbar-toast .Navbar-toastLink {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .Navbar[data-locale=ko-kr] .Navbar-desktop .Navbar-item {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .Navbar[data-locale=ko-kr] .Navbar-mobile .Navbar-modalLink .Navbar-modalLinkLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .Navbar[data-locale=ko-kr] .Navbar-mobile .Navbar-expandableToggle .Navbar-expandableLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .Navbar[data-locale=ko-kr] .Navbar-mobile .Navbar-expandable .Navbar-expandableItem .Navbar-expandableItemLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }

.Navbar[data-locale=th-th] {
  font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .Navbar[data-locale=th-th] .Navbar-error {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .Navbar[data-locale=th-th] .Navbar-button {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .Navbar[data-locale=th-th] .Navbar-gameMenu .Navbar-gameMenuItem .Navbar-gameMenuItemLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .Navbar[data-locale=th-th] .Navbar-esportsLogos .Navbar-esport .Navbar-esportLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .Navbar[data-locale=th-th] .Navbar-accountDropdownLoggedIn .Navbar-accountDropdownProfileInfo .Navbar-accountDropdownBattleTag {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .Navbar[data-locale=th-th] .Navbar-accountDropdownLoggedIn .Navbar-accountDropdownProfileInfo .Navbar-accountDropdownBattleTagNumber {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .Navbar[data-locale=th-th] .Navbar-accountDropdownLoggedIn .Navbar-accountDropdownProfileInfo .Navbar-accountDropdownEmail {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .Navbar[data-locale=th-th] .Navbar-accountDropdownLink .Navbar-accountDropdownLinkLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .Navbar[data-locale=th-th] .Navbar-toast .Navbar-toastLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .Navbar[data-locale=th-th] .Navbar-toast .Navbar-toastText {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .Navbar[data-locale=th-th] .Navbar-toast .Navbar-toastLink {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .Navbar[data-locale=th-th] .Navbar-desktop .Navbar-item {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .Navbar[data-locale=th-th] .Navbar-mobile .Navbar-modalLink .Navbar-modalLinkLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .Navbar[data-locale=th-th] .Navbar-mobile .Navbar-expandableToggle .Navbar-expandableLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .Navbar[data-locale=th-th] .Navbar-mobile .Navbar-expandable .Navbar-expandableItem .Navbar-expandableItemLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }

.Navbar[data-locale=zh-cn] {
  font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .Navbar[data-locale=zh-cn] .Navbar-error {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .Navbar[data-locale=zh-cn] .Navbar-button {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .Navbar[data-locale=zh-cn] .Navbar-gameMenu .Navbar-gameMenuItem .Navbar-gameMenuItemLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .Navbar[data-locale=zh-cn] .Navbar-esportsLogos .Navbar-esport .Navbar-esportLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .Navbar[data-locale=zh-cn] .Navbar-accountDropdownLoggedIn .Navbar-accountDropdownProfileInfo .Navbar-accountDropdownBattleTag {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .Navbar[data-locale=zh-cn] .Navbar-accountDropdownLoggedIn .Navbar-accountDropdownProfileInfo .Navbar-accountDropdownBattleTagNumber {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .Navbar[data-locale=zh-cn] .Navbar-accountDropdownLoggedIn .Navbar-accountDropdownProfileInfo .Navbar-accountDropdownEmail {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .Navbar[data-locale=zh-cn] .Navbar-accountDropdownLink .Navbar-accountDropdownLinkLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .Navbar[data-locale=zh-cn] .Navbar-toast .Navbar-toastLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .Navbar[data-locale=zh-cn] .Navbar-toast .Navbar-toastText {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .Navbar[data-locale=zh-cn] .Navbar-toast .Navbar-toastLink {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .Navbar[data-locale=zh-cn] .Navbar-desktop .Navbar-item {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .Navbar[data-locale=zh-cn] .Navbar-mobile .Navbar-modalLink .Navbar-modalLinkLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .Navbar[data-locale=zh-cn] .Navbar-mobile .Navbar-expandableToggle .Navbar-expandableLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .Navbar[data-locale=zh-cn] .Navbar-mobile .Navbar-expandable .Navbar-expandableItem .Navbar-expandableItemLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }

.Navbar[data-locale=zh-tw] {
  font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .Navbar[data-locale=zh-tw] .Navbar-error {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .Navbar[data-locale=zh-tw] .Navbar-button {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .Navbar[data-locale=zh-tw] .Navbar-gameMenu .Navbar-gameMenuItem .Navbar-gameMenuItemLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .Navbar[data-locale=zh-tw] .Navbar-esportsLogos .Navbar-esport .Navbar-esportLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .Navbar[data-locale=zh-tw] .Navbar-accountDropdownLoggedIn .Navbar-accountDropdownProfileInfo .Navbar-accountDropdownBattleTag {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .Navbar[data-locale=zh-tw] .Navbar-accountDropdownLoggedIn .Navbar-accountDropdownProfileInfo .Navbar-accountDropdownBattleTagNumber {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .Navbar[data-locale=zh-tw] .Navbar-accountDropdownLoggedIn .Navbar-accountDropdownProfileInfo .Navbar-accountDropdownEmail {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .Navbar[data-locale=zh-tw] .Navbar-accountDropdownLink .Navbar-accountDropdownLinkLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .Navbar[data-locale=zh-tw] .Navbar-toast .Navbar-toastLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .Navbar[data-locale=zh-tw] .Navbar-toast .Navbar-toastText {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .Navbar[data-locale=zh-tw] .Navbar-toast .Navbar-toastLink {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .Navbar[data-locale=zh-tw] .Navbar-desktop .Navbar-item {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .Navbar[data-locale=zh-tw] .Navbar-mobile .Navbar-modalLink .Navbar-modalLinkLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .Navbar[data-locale=zh-tw] .Navbar-mobile .Navbar-expandableToggle .Navbar-expandableLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .Navbar[data-locale=zh-tw] .Navbar-mobile .Navbar-expandable .Navbar-expandableItem .Navbar-expandableItemLabel {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }

.NavbarFooter:not(.keyboardMode) * {
  outline-style: none; }

.NavbarFooter {
  position: relative;
  box-sizing: border-box;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
  color: #fff;
  margin-top: 20px;
  z-index: 0; }
  .NavbarFooter a, .NavbarFooter div, .NavbarFooter img, .NavbarFooter nav, .NavbarFooter svg {
    box-sizing: border-box;
    vertical-align: baseline; }
  .NavbarFooter a {
    font-weight: normal;
    text-transform: none; }
  .NavbarFooter svg {
    width: auto;
    height: auto; }
  .NavbarFooter .is-ariaInvisible {
    font-size: 0; }
  .NavbarFooter .a11y-is-aria-invisible {
    position: absolute;
    top: -10000px;
    pointer-events: none; }
  .NavbarFooter .NavbarFooter-icon {
    display: inline-block;
    position: relative;
    width: 24px;
    height: 24px; }
    .NavbarFooter .NavbarFooter-icon svg {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      fill: currentColor;
      pointer-events: none; }
  .NavbarFooter .NavbarFooter-overlay {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2; }
  .NavbarFooter .NavbarFooter-selector {
    position: relative;
    text-align: center; }
  .NavbarFooter .NavbarFooter-selectorToggle {
    display: inline-block;
    cursor: pointer;
    user-select: none; }
  .NavbarFooter .NavbarFooter-selectorToggleIcon {
    vertical-align: middle;
    margin-right: 5px;
    color: #00aeff;
    transition: color 200ms, background-color 200ms; }
  .NavbarFooter .NavbarFooter-selectorToggleLabel {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    margin: 0 auto;
    font-weight: 400;
    line-height: 24px;
    height: 24px;
    color: rgba(255, 255, 255, 0.7);
    transition: color 200ms, background-color 200ms; }
  .NavbarFooter .NavbarFooter-selectorToggleArrow {
    vertical-align: middle;
    margin-left: 2px;
    width: 16px;
    height: 16px;
    color: rgba(255, 255, 255, 0.5);
    transition: color 200ms, background-color 200ms; }
  .NavbarFooter .NavbarFooter-selectorToggle .is-active .NavbarFooter-selectorToggleIcon, .NavbarFooter .NavbarFooter-selectorToggle:hover .NavbarFooter-selectorToggleIcon, .NavbarFooter .NavbarFooter-selectorToggle:focus .NavbarFooter-selectorToggleIcon {
    color: #00c6ff; }
  .NavbarFooter .NavbarFooter-selectorToggle .is-active .NavbarFooter-selectorToggleLabel, .NavbarFooter .NavbarFooter-selectorToggle:hover .NavbarFooter-selectorToggleLabel, .NavbarFooter .NavbarFooter-selectorToggle:focus .NavbarFooter-selectorToggleLabel {
    color: #fff; }
  .NavbarFooter .NavbarFooter-selectorToggle .is-active .NavbarFooter-selectorToggleArrow, .NavbarFooter .NavbarFooter-selectorToggle:hover .NavbarFooter-selectorToggleArrow, .NavbarFooter .NavbarFooter-selectorToggle:focus .NavbarFooter-selectorToggleArrow {
    color: rgba(255, 255, 255, 0.7); }
  .NavbarFooter .NavbarFooter-selectorDropdown {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, #283244 0%, rgba(21, 26, 35, 0.95) 100%);
    padding: 0;
    font-size: 0;
    text-align: left;
    overflow-y: auto; }
    @media (min-width: 480px) {
      .NavbarFooter .NavbarFooter-selectorDropdown {
        position: absolute;
        top: auto;
        bottom: 100%;
        left: 50%;
        right: auto;
        width: 100%;
        max-width: 640px;
        transform: translateX(-50%);
        background: transparent;
        padding: 0 20px 5px;
        font-size: 16px;
        overflow-y: visible; } }
  .NavbarFooter .NavbarFooter-selectorRegions .Navbar-modalClose,
  .NavbarFooter .NavbarFooter-selectorLocales .Navbar-modalClose {
    position: absolute;
    top: 0px;
    width: 0px;
    right: 0px;
    fill: #00aeff;
    margin: 3px;
    padding-top: 5px;
    transition: fill .3s; }
    .NavbarFooter .NavbarFooter-selectorRegions .Navbar-modalClose:focus,
    .NavbarFooter .NavbarFooter-selectorLocales .Navbar-modalClose:focus {
      width: 20px;
      height: auto; }
    .NavbarFooter .NavbarFooter-selectorRegions .Navbar-modalClose:hover,
    .NavbarFooter .NavbarFooter-selectorLocales .Navbar-modalClose:hover {
      fill: #00c6ff;
      cursor: pointer; }
  .NavbarFooter .NavbarFooter-selectorDropdownContainer {
    position: relative;
    min-height: 100%;
    background: linear-gradient(to bottom, #283244 0%, rgba(21, 26, 35, 0.95) 100%);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2); }
    @media (min-width: 480px) {
      .NavbarFooter .NavbarFooter-selectorDropdownContainer {
        height: auto; }
        .NavbarFooter .NavbarFooter-selectorDropdownContainer:after {
          content: ' ';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: solid 1px rgba(255, 255, 255, 0.15);
          pointer-events: none; } }
  .NavbarFooter .NavbarFooter-selectorSection {
    position: relative;
    padding: 5px 30px 10px;
    white-space: nowrap; }
    @media (min-width: 768px) {
      .NavbarFooter .NavbarFooter-selectorSection {
        padding: 10px 30px 15px; } }
  .NavbarFooter .NavbarFooter-selectorSectionPage {
    display: none;
    position: relative;
    white-space: nowrap; }
    .NavbarFooter .NavbarFooter-selectorSectionPage.is-active .NavbarFooter-selectorLocale {
      color: rgba(255, 255, 255, 0.5); }
      .NavbarFooter .NavbarFooter-selectorSectionPage.is-active .NavbarFooter-selectorLocale.is-selected, .NavbarFooter .NavbarFooter-selectorSectionPage.is-active .NavbarFooter-selectorLocale:hover {
        color: #fff; }
    .NavbarFooter .NavbarFooter-selectorSectionPage.is-open {
      display: block; }
  .NavbarFooter .NavbarFooter-selectorSectionBlock {
    white-space: normal; }
  .NavbarFooter .NavbarFooter-selectorLocale {
    color: rgba(255, 255, 255, 0.7); }
    .NavbarFooter .NavbarFooter-selectorLocale.is-selected, .NavbarFooter .NavbarFooter-selectorLocale:hover {
      color: #fff; }
  .NavbarFooter .NavbarFooter-selectorRegions {
    display: none;
    position: absolute;
    top: 49px;
    bottom: 1px;
    left: 1px;
    width: 50%;
    padding: -1px;
    background: rgba(0, 0, 0, 0.2);
    border-right: solid 1px rgba(255, 255, 255, 0.15);
    white-space: normal; }
    @media (min-width: 480px) {
      .NavbarFooter .NavbarFooter-selectorRegions {
        top: 1px; } }
  .NavbarFooter .NavbarFooter-selectorRegionTick {
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 15px;
    height: 15px;
    border-bottom: solid 1px rgba(255, 255, 255, 0.15);
    border-right: solid 1px rgba(255, 255, 255, 0.15);
    background-color: #202836;
    opacity: 0.95;
    transform: translate(50%, 50%) rotate(-45deg);
    transform-origin: center;
    z-index: 1; }
    .NavbarFooter .NavbarFooter-selectorRegionTick .NavbarFooter-selectorRegionTickOverlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-bottom: solid 1px rgba(255, 255, 255, 0.15);
      border-right: solid 1px rgba(255, 255, 255, 0.15);
      background-color: #11151c;
      opacity: 0.0; }
  .NavbarFooter .NavbarFooter-selectorLocales {
    z-index: 1; }
  .NavbarFooter .NavbarFooter-selectorOption {
    display: block;
    position: relative;
    font-family: "Blizzard", Helvetica, Arial, sans-serif;
    font-size: 13px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    transition: color 200ms, background-color 200ms;
    cursor: pointer;
    padding: 3px 0; }
    @media (min-width: 480px) {
      .NavbarFooter .NavbarFooter-selectorOption {
        font-size: 15px; } }
  .NavbarFooter .NavbarFooter-selectorOptionLabel {
    display: inline-block; }
  .NavbarFooter .NavbarFooter-selectorOptionIcon {
    height: 1px;
    width: 20px;
    bottom: -5px;
    margin-left: 5px; }
    .NavbarFooter .NavbarFooter-selectorOptionIcon svg {
      top: auto;
      height: 20px; }
  .NavbarFooter .NavbarFooter-selectorOptionCheck {
    display: none;
    position: absolute;
    top: 5px;
    right: 100%;
    transform: translateX(-2px);
    width: 18px;
    height: 18px;
    color: #00aeff; }
  .NavbarFooter .NavbarFooter-selectorOption.is-selected, .NavbarFooter .NavbarFooter-selectorOption:hover {
    color: #fff;
    text-decoration: none; }
  .NavbarFooter .NavbarFooter-selectorOption.is-active .NavbarFooter-selectorOptionCheck {
    display: block; }
  .NavbarFooter .NavbarFooter-selectorLabel {
    font-family: "Blizzard", Helvetica, Arial, sans-serif;
    font-size: 13px;
    line-height: 1.5;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    margin: 10px 0; }
  .NavbarFooter .NavbarFooter-selectorCloser {
    position: relative;
    height: 48px;
    border-bottom: solid 1px rgba(255, 255, 255, 0.15);
    text-align: right; }
    @media (min-width: 480px) {
      .NavbarFooter .NavbarFooter-selectorCloser {
        display: none; } }
    .NavbarFooter .NavbarFooter-selectorCloser .NavbarFooter-icon {
      color: #00aeff; }
    .NavbarFooter .NavbarFooter-selectorCloser:hover .NavbarFooter-icon {
      color: #00c6ff; }
  .NavbarFooter .NavbarFooter-selectorCloserAnchor {
    display: inline-block;
    padding: 12px;
    cursor: pointer; }
  .NavbarFooter .NavbarFooter-selectorTick {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 10px;
    height: 10px;
    border-bottom: solid 1px rgba(255, 255, 255, 0.15);
    border-left: solid 1px rgba(255, 255, 255, 0.15);
    background-color: #151a23;
    transform: translate(-50%, 50%) rotate(-45deg);
    transform-origin: center;
    z-index: 1;
    opacity: 0; }
    @media (min-width: 480px) {
      .NavbarFooter .NavbarFooter-selectorTick {
        opacity: 0.95; } }
  .NavbarFooter .NavbarFooter-selector.is-open .NavbarFooter-selectorToggle .NavbarFooter-selectorToggleIcon {
    color: #00c6ff; }
  .NavbarFooter .NavbarFooter-selector.is-open .NavbarFooter-selectorToggle .NavbarFooter-selectorToggleLabel {
    color: #fff; }
  .NavbarFooter .NavbarFooter-selector.is-open .NavbarFooter-selectorToggle .NavbarFooter-selectorToggleArrow {
    color: rgba(255, 255, 255, 0.7); }
  .NavbarFooter .NavbarFooter-selector.is-open .NavbarFooter-selectorDropdown {
    display: block;
    z-index: 9999; }
  .NavbarFooter .NavbarFooter-logoContainer {
    margin: 30px 0;
    height: 66px; }
  .NavbarFooter .NavbarFooter-logo {
    display: block;
    position: relative;
    width: 124px;
    height: 66px;
    margin: 0 auto; }
    .NavbarFooter .NavbarFooter-logo svg {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      fill: currentColor;
      pointer-events: none;
      transition: color 200ms, background-color 200ms; }
    .NavbarFooter .NavbarFooter-logo .NavbarFooter-logoUpper {
      color: #00aeff; }
    .NavbarFooter .NavbarFooter-logo .NavbarFooter-logoLower {
      color: #fff; }
    .NavbarFooter .NavbarFooter-logo:hover .NavbarFooter-logoUpper {
      color: #00c6ff; }
  @media (min-width: 768px) {
    .NavbarFooter .NavbarFooter-linksLeft {
      display: inline-block; } }
  @media (min-width: 768px) {
    .NavbarFooter .NavbarFooter-linksRight {
      display: inline-block; }
      .NavbarFooter .NavbarFooter-linksRight:before {
        content: '';
        display: inline-block;
        height: 10px;
        width: 1px;
        background-color: rgba(255, 255, 255, 0.3);
        margin: 0 15px;
        pointer-events: none; } }
  .NavbarFooter .NavbarFooter-link {
    display: inline-block;
    font-size: 15px;
    white-space: nowrap; }
    .NavbarFooter .NavbarFooter-link:nth-child(n+2):before {
      content: '';
      display: inline-block;
      height: 10px;
      width: 1px;
      background-color: rgba(255, 255, 255, 0.3);
      margin: 0 15px;
      pointer-events: none; }
  .NavbarFooter .NavbarFooter-mainLinks {
    margin: 15px 0; }
  @media (min-width: 768px) {
    .NavbarFooter .NavbarFooter-mainLink {
      font-size: 17px; } }
  .NavbarFooter .NavbarFooter-cookies,
  .NavbarFooter .NavbarFooter-sitemap {
    display: none; }
  .NavbarFooter.has-cookies .NavbarFooter-cookies,
  .NavbarFooter.has-sitemap .NavbarFooter-sitemap {
    display: inline-block; }
  .NavbarFooter .NavbarFooter-subLink {
    font-size: 13px; }
    .NavbarFooter .NavbarFooter-subLink:nth-child(n+2):before {
      margin: 0 10px; }
  .NavbarFooter .NavbarFooter-anchor {
    font-family: "Blizzard", Helvetica, Arial, sans-serif;
    font-size: inherit;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    background: transparent;
    white-space: nowrap;
    transition: color 200ms, background-color 200ms, border-color 200ms;
    text-transform: uppercase; }
    .NavbarFooter .NavbarFooter-anchor:visited {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.7);
      background: transparent; }
    .NavbarFooter .NavbarFooter-anchor:hover, .NavbarFooter .NavbarFooter-anchor:focus, .NavbarFooter .NavbarFooter-anchor:active {
      color: #fff;
      background: transparent; }
  .NavbarFooter .NavbarFooter-doNotSell {
    display: none; }
  .NavbarFooter[data-country="US"][data-administrative-division="CALIFORNIA"] .NavbarFooter-doNotSell {
    display: block; }
  .NavbarFooter .NavbarFooter-copyright {
    text-transform: uppercase; }
  .NavbarFooter .NavbarFooter-copyright,
  .NavbarFooter .NavbarFooter-trademark {
    font-family: "Blizzard", Helvetica, Arial, sans-serif;
    font-size: 11px;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.5);
    margin: 0; }
    .NavbarFooter .NavbarFooter-copyright a,
    .NavbarFooter .NavbarFooter-trademark a {
      color: rgba(255, 255, 255, 0.7);
      font-weight: bold;
      text-decoration: none;
      transition: color .2s; }
      .NavbarFooter .NavbarFooter-copyright a:hover,
      .NavbarFooter .NavbarFooter-trademark a:hover {
        color: #fff; }
    @media (min-width: 480px) {
      .NavbarFooter .NavbarFooter-copyright,
      .NavbarFooter .NavbarFooter-trademark {
        font-size: 13px; } }
  .NavbarFooter .NavbarFooter-legalRatingDetailImage {
    width: inherit;
    margin: 0;
    max-width: 100%;
    max-height: 97px;
    vertical-align: top;
    margin-bottom: 5px; }
  .NavbarFooter .NavbarFooter-legal {
    padding: 30px 5px;
    white-space: nowrap; }
    @media (min-width: 480px) {
      .NavbarFooter .NavbarFooter-legal {
        padding: 30px 20px; } }
  .NavbarFooter .NavbarFooter-provisionalRating {
    text-transform: uppercase;
    margin-top: 5px;
    font-size: 10px;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.5); }
    @media (min-width: 480px) {
      .NavbarFooter .NavbarFooter-provisionalRating {
        font-size: 11px; } }
  .NavbarFooter .NavbarFooter-legalRatings {
    display: inline-block;
    text-align: center;
    width: inherit;
    color: rgba(255, 255, 255, 0.5); }
    .NavbarFooter .NavbarFooter-legalRatings a {
      color: rgba(255, 255, 255, 0.5); }
  .NavbarFooter .NavbarFooter-legalRatingWrapper {
    text-align: center;
    margin: 0;
    margin-top: 5px;
    white-space: normal; }
    .NavbarFooter .NavbarFooter-legalRatingWrapper:first-child {
      margin-top: 0px; }
  .NavbarFooter .NavbarFooter-legalLink {
    margin-right: 5px;
    margin-left: 5px;
    text-decoration: none;
    text-align: center; }
    @media (min-width: 480px) {
      .NavbarFooter .NavbarFooter-legalLink {
        margin-left: inherit; } }
  .NavbarFooter .NavbarFooter-esrbHR {
    background: rgba(255, 255, 255, 0.5);
    margin: 10px 0px 10px 5px;
    border: solid 1px rgba(0, 0, 0, 0.5); }
  .NavbarFooter .NavbarFooter-legalRatingDescriptorsWrapper {
    font-size: 10px;
    line-height: 1.4;
    text-align: left;
    display: inline-block;
    vertical-align: top; }
    @media (min-width: 480px) {
      .NavbarFooter .NavbarFooter-legalRatingDescriptorsWrapper {
        font-size: 11px; } }
    .NavbarFooter .NavbarFooter-legalRatingDescriptorsWrapper .NavbarFooter-esrbDescriptor {
      margin-left: 5px;
      max-width: 135px; }
  .NavbarFooter .NavbarFooter-additionalLegal {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 7px 10px 0 0;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.5);
    vertical-align: top; }
    .NavbarFooter .NavbarFooter-additionalLegal.is-inline {
      display: inline; }
    .NavbarFooter .NavbarFooter-additionalLegal.is-inline-block {
      display: inline-block; }
    .NavbarFooter .NavbarFooter-additionalLegal a {
      font-family: "Blizzard", Helvetica, Arial, sans-serif;
      font-size: inherit;
      font-weight: bold;
      line-height: 1.4;
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      background: transparent;
      white-space: nowrap;
      transition: color 200ms, background-color 200ms, border-color 200ms; }
      .NavbarFooter .NavbarFooter-additionalLegal a:visited {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.7);
        background: transparent; }
      .NavbarFooter .NavbarFooter-additionalLegal a:hover, .NavbarFooter .NavbarFooter-additionalLegal a:focus, .NavbarFooter .NavbarFooter-additionalLegal a:active {
        color: #fff;
        background: transparent; }
  .NavbarFooter .NavbarFooter-additionalLegalLine {
    font-family: "Blizzard", Helvetica, Arial, sans-serif;
    font-size: 10px;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.5);
    white-space: normal; }
    .NavbarFooter .NavbarFooter-additionalLegalLine .NavbarFooter-additionalLegalLineLow {
      color: rgba(255, 255, 255, 0.5); }
    @media (min-width: 480px) {
      .NavbarFooter .NavbarFooter-additionalLegalLine {
        display: inline-block;
        font-size: 11px; }
        .NavbarFooter .NavbarFooter-additionalLegalLine:nth-child(n+2):before {
          content: '';
          display: inline-block;
          height: 10px;
          width: 1px;
          background-color: rgba(255, 255, 255, 0.3);
          margin: 0 15px;
          pointer-events: none; } }
  .NavbarFooter .NavbarFooter-additionalLegalMargin {
    position: relative;
    margin-bottom: 30px; }
  .NavbarFooter .NavbarFooter-additionalLegalPull {
    position: relative;
    top: -20px; }
  .NavbarFooter .NavbarFooter-additionalLegalIcon {
    width: 26px;
    height: 26px;
    margin: 0 5px;
    vertical-align: top; }
  .NavbarFooter .NavbarFooter-additionalLegalEsrb {
    height: 97px;
    vertical-align: top; }
  .NavbarFooter .NavbarFooter-downloadCta {
    display: block;
    margin: 40px 0; }
    .NavbarFooter .NavbarFooter-downloadCta .NavbarFooter-downloadCta-mobile {
      display: none; }
      .NavbarFooter .NavbarFooter-downloadCta .NavbarFooter-downloadCta-mobile .NavbarFooter-downloadCta-text {
        display: block; }
      .NavbarFooter .NavbarFooter-downloadCta .NavbarFooter-downloadCta-mobile .NavbarFooter-downloadCta-link {
        display: block;
        color: rgba(255, 255, 255, 0.7);
        font-weight: 600; }
        .NavbarFooter .NavbarFooter-downloadCta .NavbarFooter-downloadCta-mobile .NavbarFooter-downloadCta-link:hover {
          color: #fff; }
    .NavbarFooter .NavbarFooter-downloadCta .NavbarFooter-downloadCta-text {
      display: inline;
      color: rgba(255, 255, 255, 0.7); }
    .NavbarFooter .NavbarFooter-downloadCta .NavbarFooter-downloadCta-link {
      display: inline;
      text-decoration: none;
      color: #00aeff; }
      .NavbarFooter .NavbarFooter-downloadCta .NavbarFooter-downloadCta-link:hover {
        color: #00c6ff; }
    .NavbarFooter .NavbarFooter-downloadCta .NavbarFooter-downloadCta-appStoreDiv {
      display: inline-block;
      overflow: hidden;
      width: 170px; }
    .NavbarFooter .NavbarFooter-downloadCta .NavbarFooter-downloadCta-appStoreImg {
      margin-top: 12px; }
    .NavbarFooter .NavbarFooter-downloadCta .NavbarFooter-downloadCta-android .NavbarFooter-downloadCta-appStoreImg {
      position: relative;
      left: -170px; }
    .NavbarFooter .NavbarFooter-downloadCta .Navbar-icon {
      display: inline-block;
      position: relative;
      height: 1.2em;
      width: 1.5em; }
      .NavbarFooter .NavbarFooter-downloadCta .Navbar-icon svg {
        fill: currentColor;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0; }
  .NavbarFooter .Navbar-errors {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 0, 0, 0.3);
    color: #f00;
    text-align: center; }
  .NavbarFooter .Navbar-error {
    margin: 10px 20px;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 1; }
    .NavbarFooter .Navbar-error a {
      color: #f00;
      transition: color 200ms, background-color 200ms; }
      .NavbarFooter .Navbar-error a:hover, .NavbarFooter .Navbar-error a:active {
        color: #fff; }
  .NavbarFooter.min-height {
    min-height: 520px; }
  .NavbarFooter.is-region-limited .NavbarFooter-selectorSection, .NavbarFooter.is-region-hybrid .NavbarFooter-selectorSection {
    min-height: 217.4px; }
  .NavbarFooter.is-region-limited .NavbarFooter-selectorRegions, .NavbarFooter.is-region-hybrid .NavbarFooter-selectorRegions {
    display: block; }
    .NavbarFooter.is-region-limited .NavbarFooter-selectorRegions .NavbarFooter-selectorRegionTick, .NavbarFooter.is-region-hybrid .NavbarFooter-selectorRegions .NavbarFooter-selectorRegionTick {
      display: block; }
  .NavbarFooter.is-region-limited .NavbarFooter-selectorLocales, .NavbarFooter.is-region-hybrid .NavbarFooter-selectorLocales {
    margin-left: 50%; }
  @media (min-width: 480px) {
    .NavbarFooter.is-region-limited .NavbarFooter-selectorDropdown {
      max-width: 440px; } }
  @media (min-width: 768px) {
    .NavbarFooter.is-region-hybrid .NavbarFooter-selectorSectionBlock {
      display: inline-block;
      vertical-align: top;
      width: 50%; }
    .NavbarFooter.is-region-hybrid .NavbarFooter-selectorRegions {
      width: 33%; }
    .NavbarFooter.is-region-hybrid .NavbarFooter-selectorLocales {
      margin-left: 33%; } }
  @media (min-width: 480px) {
    .NavbarFooter.is-regionless .NavbarFooter-selectorDropdown {
      max-width: 440px; } }
  .NavbarFooter.is-regionless .NavbarFooter-selectorSectionBlock {
    display: inline-block;
    vertical-align: top;
    margin-top: 3px;
    width: 50%; }
  .NavbarFooter.is-focused {
    z-index: 9999; }
    .NavbarFooter.is-focused .NavbarFooter-overlay {
      display: block;
      animation-name: Navbar-dropdown-fade-in;
      animation-duration: 200ms; }
    .NavbarFooter.is-focused .NavbarFooter-selector {
      z-index: 3; }
  .NavbarFooter.is-error {
    z-index: 9999; }
    .NavbarFooter.is-error .Navbar-errors {
      display: block; }

/**
	* Inverse theme for light background sites.
	*/
.NavbarFooter.is-light {
  color: #000; }
  .NavbarFooter.is-light .NavbarFooter-selectorToggleLabel {
    color: rgba(0, 0, 0, 0.7); }
  .NavbarFooter.is-light .NavbarFooter-selectorToggleArrow {
    color: rgba(0, 0, 0, 0.5); }
  .NavbarFooter.is-light .NavbarFooter-selectorToggle .is-active .NavbarFooter-selectorToggleLabel, .NavbarFooter.is-light .NavbarFooter-selectorToggle:hover .NavbarFooter-selectorToggleLabel {
    color: #000; }
  .NavbarFooter.is-light .NavbarFooter-selectorToggle .is-active .NavbarFooter-selectorToggleArrow, .NavbarFooter.is-light .NavbarFooter-selectorToggle:hover .NavbarFooter-selectorToggleArrow {
    color: rgba(0, 0, 0, 0.7); }
  .NavbarFooter.is-light .NavbarFooter-selector.is-open .NavbarFooter-selectorToggle .NavbarFooter-selectorToggleLabel {
    color: #000; }
  .NavbarFooter.is-light .NavbarFooter-selector.is-open .NavbarFooter-selectorToggle .NavbarFooter-selectorToggleArrow {
    color: rgba(0, 0, 0, 0.7); }
  .NavbarFooter.is-light .NavbarFooter-logo .NavbarFooter-logoLower {
    color: #000; }
  @media (min-width: 768px) {
    .NavbarFooter.is-light .NavbarFooter-linksRight:before {
      content: '';
      display: inline-block;
      height: 10px;
      width: 1px;
      background-color: rgba(0, 0, 0, 0.3);
      margin: 0 15px;
      pointer-events: none; } }
  .NavbarFooter.is-light .NavbarFooter-link:nth-child(n+2):before {
    content: '';
    display: inline-block;
    height: 10px;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.3);
    margin: 0 15px;
    pointer-events: none; }
  .NavbarFooter.is-light .NavbarFooter-subLink:nth-child(n+2):before {
    margin: 0 10px; }
  .NavbarFooter.is-light .NavbarFooter-anchor {
    color: rgba(0, 0, 0, 0.7); }
    .NavbarFooter.is-light .NavbarFooter-anchor:visited {
      color: rgba(0, 0, 0, 0.7); }
    .NavbarFooter.is-light .NavbarFooter-anchor:hover, .NavbarFooter.is-light .NavbarFooter-anchor:focus, .NavbarFooter.is-light .NavbarFooter-anchor:active {
      color: #000; }
  .NavbarFooter.is-light .NavbarFooter-copyright,
  .NavbarFooter.is-light .NavbarFooter-trademark {
    color: rgba(0, 0, 0, 0.5); }
    .NavbarFooter.is-light .NavbarFooter-copyright a,
    .NavbarFooter.is-light .NavbarFooter-trademark a {
      color: rgba(0, 0, 0, 0.5); }
      .NavbarFooter.is-light .NavbarFooter-copyright a:hover,
      .NavbarFooter.is-light .NavbarFooter-trademark a:hover {
        color: rgba(0, 0, 0, 0.7); }
  .NavbarFooter.is-light .NavbarFooter-legalRatings {
    color: rgba(0, 0, 0, 0.5); }
  .NavbarFooter.is-light .NavbarFooter-additionalLegal {
    color: rgba(0, 0, 0, 0.5); }
    .NavbarFooter.is-light .NavbarFooter-additionalLegal a {
      color: rgba(0, 0, 0, 0.7); }
      .NavbarFooter.is-light .NavbarFooter-additionalLegal a:visited {
        color: rgba(0, 0, 0, 0.7); }
      .NavbarFooter.is-light .NavbarFooter-additionalLegal a:hover, .NavbarFooter.is-light .NavbarFooter-additionalLegal a:focus, .NavbarFooter.is-light .NavbarFooter-additionalLegal a:active {
        color: #000; }
  .NavbarFooter.is-light .NavbarFooter-additionalLegalLine {
    color: rgba(0, 0, 0, 0.5); }
    .NavbarFooter.is-light .NavbarFooter-additionalLegalLine .NavbarFooter-additionalLegalLineLow {
      color: rgba(0, 0, 0, 0.5); }
    @media (min-width: 480px) {
      .NavbarFooter.is-light .NavbarFooter-additionalLegalLine:nth-child(n+2):before {
        content: '';
        display: inline-block;
        height: 10px;
        width: 1px;
        background-color: rgba(0, 0, 0, 0.3);
        margin: 0 15px;
        pointer-events: none; } }
  .NavbarFooter.is-light .NavbarFooter-downloadCta-text, .NavbarFooter.is-light .NavbarFooter-downloadCta-mobile .NavbarFooter-downloadCta-link {
    color: rgba(0, 0, 0, 0.7); }
  .NavbarFooter.is-light .NavbarFooter-downloadCta-mobile .NavbarFooter-downloadCta-link:hover {
    color: #000; }
  .NavbarFooter.is-light .NavbarFooter-downloadCta-desktop .NavbarFooter-downloadCta-link {
    color: #0074E0; }
  .NavbarFooter.is-light .NavbarFooter .NavbarFooter-trademark {
    color: #000; }

.NavbarFooter[data-region=kr] .NavbarFooter-anchor[data-id=privacy], .NavbarFooter[data-locale=ko-kr] .NavbarFooter-anchor[data-id=privacy] {
  font-weight: bold; }

.NavbarFooter[data-locale=ja-jp] {
  font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .NavbarFooter[data-locale=ja-jp] .NavbarFooter-selectorOption {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .NavbarFooter[data-locale=ja-jp] .NavbarFooter-selectorLabel {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .NavbarFooter[data-locale=ja-jp] .NavbarFooter-anchor {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .NavbarFooter[data-locale=ja-jp] .NavbarFooter-copyright {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .NavbarFooter[data-locale=ja-jp] .NavbarFooter-additionalLegal a {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }
  .NavbarFooter[data-locale=ja-jp] .NavbarFooter-additionalLegalLine {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif;
    word-break: keep-all; }
  .NavbarFooter[data-locale=ja-jp] .Navbar-error {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", Meiryo, "?????????????????? Pro", "Hiragino Kaku Gothic Pro", "???????????????", "Yu Gothic", sans-serif; }

.NavbarFooter[data-locale=ko-kr] {
  font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .NavbarFooter[data-locale=ko-kr] .NavbarFooter-selectorOption {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .NavbarFooter[data-locale=ko-kr] .NavbarFooter-selectorLabel {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .NavbarFooter[data-locale=ko-kr] .NavbarFooter-anchor {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .NavbarFooter[data-locale=ko-kr] .NavbarFooter-copyright {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .NavbarFooter[data-locale=ko-kr] .NavbarFooter-additionalLegal a {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }
  .NavbarFooter[data-locale=ko-kr] .NavbarFooter-additionalLegalLine {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif;
    word-break: keep-all; }
  .NavbarFooter[data-locale=ko-kr] .Navbar-error {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "?????? ??????", "Malgun Gothic", "????????????????????????", AppleSDGothicNeo, "????????????", AppleGothic, "??????", Dotum, sans-serif; }

.NavbarFooter[data-locale=th-th] {
  font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .NavbarFooter[data-locale=th-th] .NavbarFooter-selectorOption {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .NavbarFooter[data-locale=th-th] .NavbarFooter-selectorLabel {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .NavbarFooter[data-locale=th-th] .NavbarFooter-anchor {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .NavbarFooter[data-locale=th-th] .NavbarFooter-copyright {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .NavbarFooter[data-locale=th-th] .NavbarFooter-additionalLegal a {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }
  .NavbarFooter[data-locale=th-th] .NavbarFooter-additionalLegalLine {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif;
    word-break: normal; }
  .NavbarFooter[data-locale=th-th] .Navbar-error {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", Thonburi, Ayuthaya, Krungthep, sans-serif; }

.NavbarFooter[data-locale=zh-cn] {
  font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .NavbarFooter[data-locale=zh-cn] .NavbarFooter-selectorOption {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .NavbarFooter[data-locale=zh-cn] .NavbarFooter-selectorLabel {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .NavbarFooter[data-locale=zh-cn] .NavbarFooter-anchor {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .NavbarFooter[data-locale=zh-cn] .NavbarFooter-copyright {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .NavbarFooter[data-locale=zh-cn] .NavbarFooter-additionalLegal a {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }
  .NavbarFooter[data-locale=zh-cn] .NavbarFooter-additionalLegalLine {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif;
    word-break: keep-all; }
  .NavbarFooter[data-locale=zh-cn] .Navbar-error {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft YaHei", "Hei SC", sans-serif; }

.NavbarFooter[data-locale=zh-tw] {
  font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .NavbarFooter[data-locale=zh-tw] .NavbarFooter-selectorOption {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .NavbarFooter[data-locale=zh-tw] .NavbarFooter-selectorLabel {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .NavbarFooter[data-locale=zh-tw] .NavbarFooter-anchor {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .NavbarFooter[data-locale=zh-tw] .NavbarFooter-copyright {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .NavbarFooter[data-locale=zh-tw] .NavbarFooter-additionalLegal a {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }
  .NavbarFooter[data-locale=zh-tw] .NavbarFooter-additionalLegalLine {
    font-family: "Blizzard", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif;
    word-break: keep-all; }
  .NavbarFooter[data-locale=zh-tw] .Navbar-error {
    font-family: "Open Sans", Arial, Helvetica, "Segoe UI Symbol", "Segoe MDL2 Assets", "????????????", "Microsoft JhengHei", "Tei TC", sans-serif; }

html {
  --font-default: 'Archivo';
  --font-accent: 'Poppins';
  --font-accent-weight: 600; }

body {
  margin: 0 auto;
  font-family: "Archivo", sans-serif;
  color: #FFF;
  min-height: 100vh;
  background-color: #002650; }

#main-content {
  font-weight: 600; }

h1, h2, h3, .blz-heading-lg {
  font-family: "Poppins", sans-serif; }

h2, .blz-heading-lg {
  font-size: var(--font-size-900); }

h1, h2, h3, p {
  margin: 0;
  padding: 0; }

h1 + p {
  margin-top: 1.5rem; }

h2 + p {
  margin-top: 1rem; }

p + p {
  margin-top: 1rem; }

.SectionBackground ::part(image) {
  object-position: top;
  object-fit: cover; }
  @media (min-width: 720px) {
    .SectionBackground ::part(image) {
      object-fit: none; } }
  @media (min-width: 2600px) {
    .SectionBackground ::part(image) {
      object-fit: cover; } }

blz-button-group.themed {
  flex-wrap: wrap;
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  justify-content: center;
  gap: var(--resize-200); }
  @media (min-width: 960px) {
    blz-button-group.themed {
      width: auto;
      margin-top: 10px;
      justify-content: flex-start;
      margin-left: 0;
      margin-right: 0;
      flex-wrap: nowrap; } }

blz-button.themed {
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 100px;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin: 0; }
  blz-button.themed[size="large"] {
    height: 48px;
    padding: 0 var(--resize-400); }
    @media (min-width: 720px) {
      blz-button.themed[size="large"] {
        height: 72px; } }
  blz-button.themed[type="primary"] {
    background-image: linear-gradient(180deg, #1888EF 0%, #009FE9 100%); }
    blz-button.themed[type="primary"]:hover {
      background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)); }
  blz-button.themed[type="default"] {
    background: rgba(208, 233, 255, 0.2); }
    blz-button.themed[type="default"]:hover {
      background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2)); }

@supports not (aspect-ratio: auto) {
  blz-button.themed {
    margin: 10px; } }

blz-section {
  position: relative;
  padding: 10px 40px 0;
  background-size: cover; }
  @media (min-width: 960px) {
    blz-section {
      padding: 80px 40px; } }
  @media (min-width: 1200px) {
    blz-section {
      padding-left: 120px;
      padding-right: 120px; } }
  blz-section ::part(main-content) {
    padding: 0; }
