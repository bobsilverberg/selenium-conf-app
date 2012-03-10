/**
 * This file is part of CODESTRONG Mobile.
 *
 * CODESTRONG Mobile is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * CODESTRONG Mobile is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with CODESTRONG Mobile.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The CODESTRONG mobile companion app was based off the original work done by the team
 * at palatir.net which included:
 *
 * Larry Garfield
 * Pat Teglia
 * Jen Simmons
 *
 * This code can be located at: https://github.com/palantirnet/drupalcon_mobile
 *
 * The following Appcelerator Employees also spent time answering questions via phone calls, IRC
 * and email and contributed code to the original Drupalcon Mobile application.
 *
 * Tony Guntharp
 * Chad Auld
 * Don Thorp
 * Marshall Culpepper
 * Stephen Tramer
 * Rick Blalock
 */

// Declaring variables to prevent implied global error in jslint
var Ti;
var SeConf = {};

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('#414444');

Ti.include(
  // Codestrong libraries
  '/cs/cs.js',
  '/cs/ui.js',
  '/cs/datetime.js',

  // data store
  '/datastore/datastore.js'
);


Ti.include(
  // All Codestrong windows
    '/windows/ModalActivityIndicatorWindow.js',
    '/windows/DayWindow.js',
    '/windows/TwitterWindow.js',
    '/windows/MapWindow.js',
    '/windows/AboutWindow.js',
    '/windows/TwitterDetailWindow.js',
    '/windows/PresentersWindow.js',
    '/windows/SessionsWindow.js',
    '/windows/SessionDetailWindow.js',
    '/windows/SponsorsWindow.js',
    '/windows/PresenterDetailWindow.js',
    '/windows/HtmlWindow.js',

    // Create icons based on previous custom windows and
    // load them into the main dashboard window
    '/cs/icons.js',
    '/windows/main.js'
);

// open (sponsor) URLs in the native browser, not a webview
Ti.App.addEventListener('openURL', function(e){
    Ti.Platform.openURL(e.url);
});


