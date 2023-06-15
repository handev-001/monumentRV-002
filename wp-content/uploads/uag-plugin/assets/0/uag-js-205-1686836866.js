document.addEventListener("DOMContentLoaded", function(){ window.addEventListener( 'DOMContentLoaded', function() {
	UAGBInlineNotice.init( {"c_id":null,"cookies":false,"close_cookie_days":1,"noticeDismiss":"","icon":"rectangle-xmark"}, '.uagb-block-9559e98c' );
});
jQuery(document).ready(function () {
				let scope = jQuery(".wp-block-uagb-image-gallery.uagb-block-943b42e9");
				if ( scope.length ) { 
					scope.css("visibility", "visible");
					let getSlickCarousel = scope.find(".uagb-slick-carousel");
					if( getSlickCarousel.length ) {
						getSlickCarousel.slick({"arrows":true,"dots":true,"initialSlide":0,"infinite":true,"autoplay":true,"autoplaySpeed":2000,"pauseOnHover":true,"speed":500,"slidesToShow":3,"prevArrow":"<button type='button' data-role='none' class='spectra-image-gallery__control-arrows spectra-image-gallery__control-arrows--carousel slick-prev slick-arrow' aria-label='Previous' tabindex='0' role='button'><svg xmlns='http:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' width='24' height='24'><path d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'><\/path><\/svg><\/button>","nextArrow":"<button type='button' data-role='none' class='spectra-image-gallery__control-arrows spectra-image-gallery__control-arrows--carousel slick-next slick-arrow' aria-label='Previous' tabindex='0' role='button'><svg xmlns='http:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' width='24' height='24'><path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'><\/path><\/svg><\/button>","rtl":false,"responsive":[{"breakpoint":1024,"settings":{"slidesToShow":3}},{"breakpoint":767,"settings":{"slidesToShow":2}}]});
					}
				}
			});				window.addEventListener( 'DOMContentLoaded', () => {
					const blockScope = document.querySelector( '.uagb-block-943b42e9' );
					if ( ! blockScope ) {
						return;
					}

					let lightboxSwiper = null;
					let thumbnailSwiper = null;
					const theBody = document.querySelector( 'body' );
					const updateCounter = ( curPage ) => {
						const lightbox = blockScope.nextElementSibling;
						const counter = lightbox.querySelector( '.spectra-image-gallery__control-lightbox--count-page' );
						counter.innerHTML = parseInt( curPage ) + 1;
					};

					const enableLightbox = ( goTo ) => {
						if ( ! lightboxSwiper ) {
							return;
						}
						const lightbox = blockScope.nextElementSibling;
						lightbox.style.display = '';
						lightbox.focus();
						setTimeout( () => {
							lightboxSwiper.slideTo( goTo );
						}, 100 );
						setTimeout( () => {
							lightbox.style.opacity = 1;
							theBody.style.overflow = 'hidden';
						}, 250 );
					}
										const images = blockScope.querySelectorAll( '.spectra-image-gallery__media-wrapper' );
					for ( let i = 0; i < images.length; i++ ) {
						images[ i ].style.cursor = 'pointer';
						images[ i ].addEventListener( 'click', () => enableLightbox( i ) );
					}
										let lightboxSettings = {"lazy":true,"slidesPerView":1,"navigation":{"nextEl":".uagb-block-943b42e9+.spectra-image-gallery__control-lightbox .swiper-button-next","prevEl":".uagb-block-943b42e9+.spectra-image-gallery__control-lightbox .swiper-button-prev"},"keyboard":{"enabled":true}};
															lightboxSwiper = new Swiper( ".uagb-block-943b42e9+.spectra-image-gallery__control-lightbox .spectra-image-gallery__control-lightbox--main",
						{"lazy":true,"slidesPerView":1,"navigation":{"nextEl":".uagb-block-943b42e9+.spectra-image-gallery__control-lightbox .swiper-button-next","prevEl":".uagb-block-943b42e9+.spectra-image-gallery__control-lightbox .swiper-button-prev"},"keyboard":{"enabled":true}}					);
										lightboxSwiper.on( 'activeIndexChange', ( swiperInstance ) => {
																	} );
															if ( blockScope.nextElementSibling.classList.contains( 'spectra-image-gallery__control-lightbox' ) ) {
												const lightbox = blockScope.nextElementSibling;
						lightbox.addEventListener( 'keydown', ( event ) => {
							if ( 27 === event.keyCode ) {
								theBody.style.overflow = '';
								lightbox.style.opacity = 0;
								setTimeout( () => {
									lightbox.style.display = 'none';
								}, 250 );
							}
						} );
						lightbox.style.display = 'none';
													const closeButton = lightbox.querySelector( '.spectra-image-gallery__control-lightbox--close' );
							if ( closeButton ) {
								closeButton.addEventListener( 'click', () => {
									theBody.style.overflow = '';
									lightbox.style.opacity = 0;
									setTimeout( () => {
										lightbox.style.display = 'none';
									}, 250 );
								} );
							}
																							}
				} );
			jQuery(document).ready(function () {
				let scope = jQuery(".wp-block-uagb-image-gallery.uagb-block-512e7ae4");
				if ( scope.length ) { 
					scope.css("visibility", "visible");
					let getSlickCarousel = scope.find(".uagb-slick-carousel");
					if( getSlickCarousel.length ) {
						getSlickCarousel.slick({"arrows":true,"dots":true,"initialSlide":0,"infinite":true,"autoplay":true,"autoplaySpeed":2000,"pauseOnHover":true,"speed":500,"slidesToShow":3,"prevArrow":"<button type='button' data-role='none' class='spectra-image-gallery__control-arrows spectra-image-gallery__control-arrows--carousel slick-prev slick-arrow' aria-label='Previous' tabindex='0' role='button'><svg xmlns='http:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' width='24' height='24'><path d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'><\/path><\/svg><\/button>","nextArrow":"<button type='button' data-role='none' class='spectra-image-gallery__control-arrows spectra-image-gallery__control-arrows--carousel slick-next slick-arrow' aria-label='Previous' tabindex='0' role='button'><svg xmlns='http:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' width='24' height='24'><path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'><\/path><\/svg><\/button>","rtl":false,"responsive":[{"breakpoint":1024,"settings":{"slidesToShow":3}},{"breakpoint":767,"settings":{"slidesToShow":2}}]});
					}
				}
			});				window.addEventListener( 'DOMContentLoaded', () => {
					const blockScope = document.querySelector( '.uagb-block-512e7ae4' );
					if ( ! blockScope ) {
						return;
					}

					let lightboxSwiper = null;
					let thumbnailSwiper = null;
					const theBody = document.querySelector( 'body' );
					const updateCounter = ( curPage ) => {
						const lightbox = blockScope.nextElementSibling;
						const counter = lightbox.querySelector( '.spectra-image-gallery__control-lightbox--count-page' );
						counter.innerHTML = parseInt( curPage ) + 1;
					};

					const enableLightbox = ( goTo ) => {
						if ( ! lightboxSwiper ) {
							return;
						}
						const lightbox = blockScope.nextElementSibling;
						lightbox.style.display = '';
						lightbox.focus();
						setTimeout( () => {
							lightboxSwiper.slideTo( goTo );
						}, 100 );
						setTimeout( () => {
							lightbox.style.opacity = 1;
							theBody.style.overflow = 'hidden';
						}, 250 );
					}
										const images = blockScope.querySelectorAll( '.spectra-image-gallery__media-wrapper' );
					for ( let i = 0; i < images.length; i++ ) {
						images[ i ].style.cursor = 'pointer';
						images[ i ].addEventListener( 'click', () => enableLightbox( i ) );
					}
										let lightboxSettings = {"lazy":true,"slidesPerView":1,"navigation":{"nextEl":".uagb-block-512e7ae4+.spectra-image-gallery__control-lightbox .swiper-button-next","prevEl":".uagb-block-512e7ae4+.spectra-image-gallery__control-lightbox .swiper-button-prev"},"keyboard":{"enabled":true}};
															lightboxSwiper = new Swiper( ".uagb-block-512e7ae4+.spectra-image-gallery__control-lightbox .spectra-image-gallery__control-lightbox--main",
						{"lazy":true,"slidesPerView":1,"navigation":{"nextEl":".uagb-block-512e7ae4+.spectra-image-gallery__control-lightbox .swiper-button-next","prevEl":".uagb-block-512e7ae4+.spectra-image-gallery__control-lightbox .swiper-button-prev"},"keyboard":{"enabled":true}}					);
										lightboxSwiper.on( 'activeIndexChange', ( swiperInstance ) => {
																	} );
															if ( blockScope.nextElementSibling.classList.contains( 'spectra-image-gallery__control-lightbox' ) ) {
												const lightbox = blockScope.nextElementSibling;
						lightbox.addEventListener( 'keydown', ( event ) => {
							if ( 27 === event.keyCode ) {
								theBody.style.overflow = '';
								lightbox.style.opacity = 0;
								setTimeout( () => {
									lightbox.style.display = 'none';
								}, 250 );
							}
						} );
						lightbox.style.display = 'none';
													const closeButton = lightbox.querySelector( '.spectra-image-gallery__control-lightbox--close' );
							if ( closeButton ) {
								closeButton.addEventListener( 'click', () => {
									theBody.style.overflow = '';
									lightbox.style.opacity = 0;
									setTimeout( () => {
										lightbox.style.display = 'none';
									}, 250 );
								} );
							}
																							}
				} );
			 });