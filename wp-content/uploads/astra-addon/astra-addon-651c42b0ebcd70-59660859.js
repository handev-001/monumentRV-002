/**
 * File fronend-pro.js
 *
 * Handles toggling the navigation menu for Addon widget
 *
 * @package astra-addon
 */

 astraToggleSetupPro = function( mobileHeaderType, body, menu_click_listeners ) {

	var flag = false;
	var menuToggleAllLength;

	if ( 'off-canvas' === mobileHeaderType || 'full-width' === mobileHeaderType ) {
        // comma separated selector added, if menu is outside of Off-Canvas then submenu is not clickable, it work only for Off-Canvas area with dropdown style.
        var __main_header_all = document.querySelectorAll( '#ast-mobile-popup, #ast-mobile-header' );
        if ( body.classList.contains('ast-header-break-point') ) {

            var menu_toggle_all   = document.querySelectorAll( '#ast-mobile-header .main-header-menu-toggle' );
        } else {
            menu_toggle_all   = document.querySelectorAll( '#ast-desktop-header .main-header-menu-toggle' );
		}
		menuToggleAllLength = menu_toggle_all.length;
    } else {

		if ( body.classList.contains('ast-header-break-point') ) {

			var __main_header_all = document.querySelectorAll( '#ast-mobile-header' ),
				menu_toggle_all   = document.querySelectorAll( '#ast-mobile-header .main-header-menu-toggle' );
				menuToggleAllLength = menu_toggle_all.length;
				flag = menuToggleAllLength > 0 ? false : true;
				menuToggleAllLength = flag ? 1 : menuToggleAllLength;
		} else {

			var __main_header_all = document.querySelectorAll( '#ast-desktop-header' ),
				menu_toggle_all = document.querySelectorAll('#ast-desktop-header .main-header-menu-toggle');
				menuToggleAllLength = menu_toggle_all.length;
		}
	}

	if ( menuToggleAllLength > 0 || flag ) {

        for (var i = 0; i < menuToggleAllLength; i++) {

			if ( !flag ) {
				menu_toggle_all[i].setAttribute('data-index', i);

				if (!menu_click_listeners[i]) {
					menu_click_listeners[i] = menu_toggle_all[i];
					menu_toggle_all[i].addEventListener('click', astraNavMenuToggle, false);
				}
			}

            if ('undefined' !== typeof __main_header_all[i]) {

                // To handle the comma seprated selector added above we need this loop.
                for( var mainHeaderCount =0; mainHeaderCount  < __main_header_all.length; mainHeaderCount++ ){

                    if (document.querySelector('header.site-header').classList.contains('ast-builder-menu-toggle-link')) {
                        var astra_menu_toggle = __main_header_all[mainHeaderCount].querySelectorAll('ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle');
                    } else {
                        var astra_menu_toggle = __main_header_all[mainHeaderCount].querySelectorAll('ul.main-header-menu .ast-menu-toggle');
                    }
                    // Add Eventlisteners for Submenu.
                    if (astra_menu_toggle.length > 0) {

                        for (var j = 0; j < astra_menu_toggle.length; j++) {

                            astra_menu_toggle[j].addEventListener('click', AstraToggleSubMenu, false);
                        }
                    }
                }
            }
        }
    }
}

astraNavMenuTogglePro = function ( event, body, mobileHeaderType, thisObj ) {

    event.preventDefault();

    var desktop_header = event.target.closest('#ast-desktop-header');

    var desktop_header_content = document.querySelector('#masthead > #ast-desktop-header .ast-desktop-header-content');

    if ( null !== desktop_header && undefined !== desktop_header && '' !== desktop_header ) {

        var desktop_toggle = desktop_header.querySelector( '.main-header-menu-toggle' );
    } else {
        var desktop_toggle = document.querySelector('#masthead > #ast-desktop-header .main-header-menu-toggle');
    }

    var desktop_menu = document.querySelector('#masthead > #ast-desktop-header .ast-desktop-header-content .main-header-bar-navigation');

    if ( 'desktop' === event.currentTarget.trigger_type ) {

        if ( null !== desktop_menu && '' !== desktop_menu && undefined !== desktop_menu ) {
            astraToggleClass(desktop_menu, 'toggle-on');
            if (desktop_menu.classList.contains('toggle-on')) {
                desktop_menu.style.display = 'block';
            } else {
                desktop_menu.style.display = '';
            }
        }
        astraToggleClass(desktop_toggle, 'toggled');
        if ( desktop_toggle.classList.contains( 'toggled' ) ) {
            body.classList.add("ast-main-header-nav-open");
            if ( 'dropdown' === mobileHeaderType ) {
                desktop_header_content.style.display = 'block';
            }
        } else {
            body.classList.remove("ast-main-header-nav-open");
            desktop_header_content.style.display = 'none';
        }
        return;
    }

    var __main_header_all = document.querySelectorAll('#masthead > #ast-mobile-header .main-header-bar-navigation');
    menu_toggle_all 	 = document.querySelectorAll( '#masthead > #ast-mobile-header .main-header-menu-toggle' )
    var event_index = '0';
    var sticky_header = false;
    if ( null !== thisObj.closest( '#ast-fixed-header' ) ) {

        __main_header_all = document.querySelectorAll('#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation');
        menu_toggle_all 	 = document.querySelectorAll( '#ast-fixed-header .main-header-menu-toggle' )

        event_index = '0';
        sticky_header = true;

    }

    if ('undefined' === typeof __main_header_all[event_index]) {
        return false;
    }
    var menuHasChildren = __main_header_all[event_index].querySelectorAll('.menu-item-has-children');
    for (var i = 0; i < menuHasChildren.length; i++) {
        menuHasChildren[i].classList.remove('ast-submenu-expanded');
        var menuHasChildrenSubMenu = menuHasChildren[i].querySelectorAll('.sub-menu');
        for (var j = 0; j < menuHasChildrenSubMenu.length; j++) {
            menuHasChildrenSubMenu[j].style.display = 'none';
        }
    }

    var menu_class = thisObj.getAttribute('class') || '';

    if ( menu_class.indexOf('main-header-menu-toggle') !== -1 ) {
        astraToggleClass(__main_header_all[event_index], 'toggle-on');
        astraToggleClass(menu_toggle_all[event_index], 'toggled');
        if ( sticky_header && 1 < menu_toggle_all.length ) {
            astraToggleClass(menu_toggle_all['1'], 'toggled');
        }
        if (__main_header_all[event_index].classList.contains('toggle-on')) {
            __main_header_all[event_index].style.display = 'block';
            body.classList.add("ast-main-header-nav-open");
        } else {
            __main_header_all[event_index].style.display = '';
            body.classList.remove("ast-main-header-nav-open");
        }
    }
}



const accountMenuToggle = function () {
    const checkAccountActionTypeCondition = astraAddon.hf_account_action_type && 'menu' === astraAddon.hf_account_action_type;
    const accountMenuClickCondition = checkAccountActionTypeCondition && astraAddon.hf_account_show_menu_on && 'click' === astraAddon.hf_account_show_menu_on;

    const headerAccountContainer = document.querySelectorAll('.ast-header-account-wrap');

    if(  headerAccountContainer ) {

        headerAccountContainer.forEach(element => {

            const accountMenu = element.querySelector('.ast-account-nav-menu');

            document.addEventListener('pointerup', function(e) {
                const condition = ( accountMenuClickCondition ) || ( checkAccountActionTypeCondition && document.querySelector('body').classList.contains('ast-header-break-point'));
                if( condition ) {
                    // if the target of the click isn't the container nor a descendant of the container
                    if (!element.contains(e.target)) {
                        accountMenu.style.right = '';
                        accountMenu.style.left = '';
                    }
                }
            });

            const headerAccountTrigger =  element.querySelector( '.ast-header-account-link' );
            if( headerAccountTrigger ) {
                headerAccountTrigger.addEventListener( 'click', function(e) {
                    const condition = ( accountMenuClickCondition ) || ( checkAccountActionTypeCondition && document.querySelector('body').classList.contains('ast-header-break-point'));
                    if( condition ) {

                        headerSelectionPosition = e.target.closest('.site-header-section');

                        if( headerSelectionPosition ) {
                            if( headerSelectionPosition.classList.contains('site-header-section-left') ) {
                                accountMenu.style.left   = accountMenu.style.left  === '' ? '-100%' : '';
                                accountMenu.style.right   = accountMenu.style.right  === '' ? 'auto' : '';
                            } else {
                                accountMenu.style.right   = accountMenu.style.right  === '' ? '-100%' : '';
                                accountMenu.style.left   = accountMenu.style.left  === '' ? 'auto' : '';
                            }
                        }
                    }
                });
            }
        });
    }
}

document.addEventListener( 'astPartialContentRendered', function() {
    accountMenuToggle();
});

window.addEventListener( 'load', function() {
    accountMenuToggle();
} );

document.addEventListener( 'astLayoutWidthChanged', function() {
    accountMenuToggle();
} );
/**
 * Advanced Search Styling
 *
 * @package Astra Addon
 * @since 1.4.8
 */

( function() {

	function body_iphone_classes() {
		var iphone = ( navigator.userAgent.match(/iPhone/i) == 'iPhone' ) ? 'iphone' : '';
		var ipod   = ( navigator.userAgent.match(/iPod/i) == 'iPod' ) ? 'ipod' : '';

		document.body.className += ' ' + iphone;
		document.body.className += ' ' + ipod;
	}
	body_iphone_classes();

	function remove_style_class( style ) {
		var allClasses = document.body.className;
		allClasses = allClasses.replace( style, '' );
    	document.body.className = allClasses;
	}

	function add_style_class( style ) {
		document.body.className += ' ' + style;
	}

	// Helper Function.
	function fade_in( element ) {

		element.style.display = 'block';
		setTimeout(function() {
			element.style.opacity = 1;
		}, 1);
	}

	function fade_out( element ) {

		element.style.opacity = '';
		setTimeout(function() {
			element.style.display = '';
		}, 200);
	}
	
	function header_cover_form_height( current_header_cover_form ) {

		// Primary header cover search.
		if ( document.body.classList.contains('ast-header-break-point') ) {
			
			var site_navigation = document.querySelector( '.main-navigation' );
			var main_header_bar = document.querySelector( '.main-header-bar' );

			if( null !== main_header_bar && null !== site_navigation ) {

				var site_navigation_outer_height = site_navigation.offsetHeight;
				var main_header_outer_height     = main_header_bar.offsetHeight;

				// Have a navigation outer height.
				// And primary header NOT have the `No Toggle` style.
				if( site_navigation_outer_height && ( ! document.body.classList.contains('ast-no-toggle-menu-enable') ) ) {
					var search_height = parseFloat(site_navigation_outer_height) - parseFloat(main_header_outer_height);
				} else {
					var search_height = parseFloat(main_header_outer_height);
				}
				current_header_cover_form.style.maxHeight = Math.abs( search_height ) + "px";
			}
		}
	}

	function header_builder_cover_form_height( current_header_cover_form ) {

		// Primary header cover search.
		if ( document.body.classList.contains('ast-header-break-point') ) {

			var site_navigation = document.querySelector( '.main-navigation' );
			var main_header_bar = document.querySelector( '.main-header-bar' );
			var mobile_header_bar = document.querySelector( '.ast-mobile-header-wrap' );

			if( null !== main_header_bar && null !== site_navigation ) {

				var site_navigation_outer_height = site_navigation.offsetHeight;
				var main_header_outer_height     = main_header_bar.offsetHeight;
				var mobile_header_outer_height     = mobile_header_bar.offsetHeight;

				// Have a navigation outer height.
				// And primary header NOT have the `No Toggle` style.
				if( site_navigation_outer_height && ( ! document.body.classList.contains('ast-no-toggle-menu-enable') ) ) {
					var search_height = parseFloat(site_navigation_outer_height) - parseFloat(main_header_outer_height);
				} else {
					var search_height = parseFloat(main_header_outer_height);
				}
				if ( current_header_cover_form.parentNode.classList.contains( 'ast-mobile-header-wrap' ) ) {
					var search_height = parseFloat(mobile_header_outer_height);
				}

				current_header_cover_form.style.maxHeight = Math.abs( search_height ) + "px";
			}
		}
	}

	var searchIcons = document.querySelectorAll( 'a.astra-search-icon:not(.slide-search)' );

	for ( var i = 0; searchIcons.length > i; i++ ) {

			searchIcons[i].onclick = function ( evt ) {

				evt.preventDefault();

				if ( ! evt ) {
					evt = window.event;
				}

				if ( this.classList.contains( 'header-cover' ) ) {
					var header_cover = document.querySelectorAll( '.ast-search-box.header-cover' ),
						header_builder_active 	 = astraAddon.is_header_builder_active || false;

					for (var j = 0; j < header_cover.length; j++) {

						var header_cover_icon = header_cover[j].parentNode.querySelectorAll( 'a.astra-search-icon' );

						for (var k = 0; k < header_cover_icon.length; k++) {
							if ( header_cover_icon[k] == this ) {
								fade_in( header_cover[j] );
								header_cover[j].querySelector( 'input.search-field' ).focus();

								// Set header cover form height.
								if ( header_builder_active ) {
									header_builder_cover_form_height( header_cover[j] );
								} else {
									header_cover_form_height( header_cover[j] );
								}
							}
						};
					};

				} else if ( this.classList.contains( 'full-screen' ) ) {

					var fullScreen = document.getElementById( 'ast-seach-full-screen-form' );
					if ( fullScreen.classList.contains( 'full-screen' ) ) {
						fade_in( fullScreen );
						add_style_class( 'full-screen' );
						fullScreen.querySelector( 'input.search-field' ).focus();
					}
				}
			};
	};

	/* Search Header Cover & Full Screen Close */
	var closes = document.querySelectorAll( '.ast-search-box .close' );
	for (var i = 0, len = closes.length; i < len; ++i) {
		closes[i].onclick = function(evt){

			if ( ! evt) { evt = window.event;
			}
			var self = this;
			while ( 1 ) {
				if ( self.parentNode.classList.contains( 'ast-search-box' ) ) {
					fade_out( self.parentNode );
					remove_style_class( 'full-screen' );
					break;
				} else if ( self.parentNode.classList.contains( 'site-header' ) ) {
					break;
				}
				self = self.parentNode;
			}
		};
	}

	document.onkeydown = function ( evt ) {
		if ( evt.keyCode == 27 ) {
			var fullScreenForm = document.getElementById( 'ast-seach-full-screen-form' );

			if ( null != fullScreenForm ) {
				fade_out( fullScreenForm );
				remove_style_class( 'full-screen' );
			}

			var header_cover = document.querySelectorAll( '.ast-search-box.header-cover' );
			for (var j = 0; j < header_cover.length; j++) {
				fade_out( header_cover[j] );
			}
		}
	}

	window.addEventListener("resize", function() {

		if( 'BODY' !== document.activeElement.tagName ) {
			return;
		}

		// Skip resize event when keyboard display event triggers on devices. 
		if( 'INPUT' != document.activeElement.tagName ) {
			var header_cover = document.querySelectorAll( '.ast-search-box.header-cover' );
			if ( ! document.body.classList.contains( 'ast-header-break-point' ) ) {
				for (var j = 0; j < header_cover.length; j++) {
					header_cover[j].style.maxHeight = '';
					header_cover[j].style.opacity = '';
					header_cover[j].style.display = '';
				}
			}
		}
	});

} )();
