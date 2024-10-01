(function (window, document, undefined) {
	'use strict';

	/*==============================
	Header
	==============================*/
	if (document.querySelector('.header__line')) {
		document.querySelector('.header__line-close').addEventListener('click', function() {
			document.querySelector('.header__line').classList.add('hidden');
		});
	}

	if (document.querySelector('.header__nav')) {
		document.addEventListener("DOMContentLoaded", function() {
			const menuItems = document.querySelectorAll('.header__nav .menu-item > a');

			menuItems.forEach(function(item) {
				const linkText = item.textContent;
				const span1 = document.createElement('span');
				const span2 = document.createElement('span');
				span1.classList.add('hover-text');
				span1.textContent = linkText;
				span2.classList.add('hover-text-copy');
				span2.textContent = linkText;
				item.textContent = ''; 
				item.appendChild(span1);
				item.appendChild(span2);
			});
		});
	}

	if (document.querySelector('.sidebar__nav')) {
		document.addEventListener("DOMContentLoaded", function() {
			const menuParents = document.querySelectorAll('.sidebar__nav .menu-item-has-children');

			menuParents.forEach(function(item) {
				const link = item.querySelector('a');
				const arrowSpan = document.createElement('span');
				arrowSpan.className = 'arrow-toggle';
				arrowSpan.innerHTML = '';
				link.parentNode.insertBefore(arrowSpan, link.nextSibling);
				const parentWidth = item.offsetWidth;
				const linkWidth = link.offsetWidth;
				const rightOffset = (parentWidth - linkWidth) / 2;
				arrowSpan.style.position = 'absolute';
				arrowSpan.style.right = `${rightOffset}px`;
				arrowSpan.addEventListener('click', function(event) {
					event.stopPropagation();
					const subMenu = item.querySelector('.sub-menu');
					if (item.classList.contains('active')) {
						subMenu.style.height = '0';
						item.classList.remove('active');
					} else {
						document.querySelectorAll('.sidebar__nav .menu-item-has-children.active').forEach(function(activeItem) {
							const activeSubMenu = activeItem.querySelector('.sub-menu');
							activeSubMenu.style.height = '0';
							activeItem.classList.remove('active');
						});

						const subMenuHeight = subMenu.scrollHeight + 40;
						subMenu.style.height = subMenuHeight + 'px';
						item.classList.add('active');
					}
				});
			});
		});
	}

	if (document.querySelector('.header') && document.querySelector('.sidebar')) {
		const headerBtn = document.querySelector('.header__btn');
		const side = document.querySelector('.sidebar');

		function toggleHeaderMenu() {
			side.classList.toggle('sidebar--active');
			headerBtn.classList.toggle('active');
		}

		headerBtn.addEventListener('click', toggleHeaderMenu);

		document.addEventListener("DOMContentLoaded", function() {
			const sidebar = document.querySelector('.sidebar');
			const header = document.querySelector('.header');
			const headerObserver = new ResizeObserver(updateSidebarTop);

			function updateSidebarTop() {
				if (header && sidebar) {
					const headerHeight = header.offsetHeight;
					sidebar.style.top = headerHeight + 'px';
				}
			}

			updateSidebarTop();

			if (header) {
				headerObserver.observe(header);
			}

			window.addEventListener('resize', updateSidebarTop);
		});
	}

	/*==============================
	Carousel
	==============================*/
	if (document.querySelector('.section--posts')) {
		var elms = document.getElementsByClassName('section--posts');

		for ( var i = 0; i < elms.length; i++ ) {
			(function(elm) {
				var splide = new Splide(elm, {
					type: 'loop',
					perPage: 4,
					perMove: 4,
					drag: true,
					pagination: false,
					autoWidth: false,
					autoHeight: false,
					speed: 1200,
					gap: 24,
					arrows: true,
					focus: 0,
					breakpoints: {
						767: {
							perPage: 1,
							perMove: 1,
						},
						991: {
							perPage: 2,
							perMove: 2,
						},
						1399: {
							perPage: 3,
							perMove: 3,
						},
					}
				}).mount();

				function debounce(func, wait) {
					let timeout;
					return function () {
						const context = this;
						const args = arguments;
						clearTimeout(timeout);
						timeout = setTimeout(() => func.apply(context, args), wait);
					};
				}

				const debouncedRefresh = debounce(() => {
					splide.refresh();
				}, 100);

				const resizeObserver = new ResizeObserver(() => {
					splide.Components.Elements.track.style.transition = "none";
					debouncedRefresh();
					setTimeout(() => {
						splide.Components.Elements.track.style.transition = "";
					}, 150);
				});

				resizeObserver.observe(elm.parentElement);
			})(elms[i]);
		}
	}

	if (document.querySelector('.section--flyers')) {
		var elms = document.getElementsByClassName('section--flyers');

		for ( var i = 0; i < elms.length; i++ ) {
			(function(elm) {
				var splide = new Splide(elm, {
					type: 'loop',
					perPage: 4,
					perMove: 4,
					drag: true,
					pagination: true,
					autoWidth: false,
					autoHeight: false,
					speed: 1200,
					gap: 24,
					arrows: false,
					focus: 0,
					breakpoints: {
						767: {
							perPage: 1,
							perMove: 1,
						},
						991: {
							perPage: 2,
							perMove: 2,
						},
						1399: {
							perPage: 3,
							perMove: 3,
						},
					}
				}).mount();

				function debounce(func, wait) {
					let timeout;
					return function () {
						const context = this;
						const args = arguments;
						clearTimeout(timeout);
						timeout = setTimeout(() => func.apply(context, args), wait);
					};
				}

				const debouncedRefresh = debounce(() => {
					splide.refresh();
				}, 100);

				const resizeObserver = new ResizeObserver(() => {
					splide.Components.Elements.track.style.transition = "none";
					debouncedRefresh();
					setTimeout(() => {
						splide.Components.Elements.track.style.transition = "";
					}, 150);
				});

				resizeObserver.observe(elm.parentElement);
			})(elms[i]);
		}
	}

	if (document.querySelector('.section--blog')) {
		var elms = document.getElementsByClassName('section--blog');

		for ( var i = 0; i < elms.length; i++ ) {
			(function(elm) {
				var splide = new Splide(elm, {
					type: 'loop',
					perPage: 3,
					perMove: 3,
					drag: true,
					pagination: true,
					autoWidth: false,
					autoHeight: false,
					speed: 1200,
					gap: 24,
					arrows: false,
					focus: 0,
					breakpoints: {
						767: {
							perPage: 1,
							perMove: 1,
						},
						991: {
							perPage: 2,
							perMove: 2,
						},
						1399: {
							perPage: 2,
							perMove: 2,
						},
					}
				}).mount();

				function debounce(func, wait) {
					let timeout;
					return function () {
						const context = this;
						const args = arguments;
						clearTimeout(timeout);
						timeout = setTimeout(() => func.apply(context, args), wait);
					};
				}

				const debouncedRefresh = debounce(() => {
					splide.refresh();
				}, 100);

				const resizeObserver = new ResizeObserver(() => {
					splide.Components.Elements.track.style.transition = "none";
					debouncedRefresh();
					setTimeout(() => {
						splide.Components.Elements.track.style.transition = "";
					}, 150);
				});

				resizeObserver.observe(elm.parentElement);
			})(elms[i]);
		}
	}

	/*==============================
	Parallax
	==============================*/
	if (document.querySelector('.section__parallax')) {
		const parallaxImage = document.querySelector('.parallax-image');
		window.addEventListener('scroll', function() {
			const scrollY = window.pageYOffset;
			const speed = 0.3;
			const offset = -(scrollY * speed);
			parallaxImage.style.transform = `translate(-50%,${offset}px)`;
		});
	}

	/*==============================
	Select
	==============================*/
	if (document.querySelector('#filter0')) {
		new SlimSelect({
			select: '#filter0',
			settings: {
				showSearch: false,
			}
		});
	}

	if (document.querySelector('#filter1')) {
		new SlimSelect({
			select: '#filter1',
			settings: {
				showSearch: false,
			}
		});
	}

	if (document.querySelector('#filter2')) {
		new SlimSelect({
			select: '#filter2',
			settings: {
				showSearch: false,
			}
		});
	}

	/*==============================
	Search input
	==============================*/
	if (document.querySelector('.sorting__group--search')) {
		const input = document.querySelector('.sorting__input');
		const clearButton = document.querySelector('.sorting__clear');

		input.addEventListener('input', function() {
			if (input.value.length > 0) {
				clearButton.classList.add('active');
			} else {
				clearButton.classList.remove('active');
			}
		});

		clearButton.addEventListener('click', function() {
			input.value = '';
			clearButton.classList.remove('active');
		});
	}

	/*==============================
	Sortbar
	==============================*/
	if (document.querySelector('.sortbar')) {
		function adjustSortbarHeight() {
			const sortbar = document.querySelector('.sortbar');
			const blogSection = document.querySelector('.section__blog');

			if (window.innerWidth >= 992) {
				const blogHeight = blogSection.offsetHeight;
				sortbar.style.height = blogHeight + 'px';
			} else {
				sortbar.style.height = '';
			}
		}
		adjustSortbarHeight();
		window.addEventListener('resize', adjustSortbarHeight);
	}

	if (document.querySelector('.sortbar__applied')) {
		const tags = document.querySelectorAll('.sortbar__tag');
		const clearTagsButton = document.querySelector('.sortbar__clear-tags');

		tags.forEach(tag => {
			const button = tag.querySelector('button');
			if (button) {
				button.addEventListener('click', function(e) {
					e.stopPropagation();
					tag.classList.remove('active');
					// тут вызов фильтра, убираем блоки с тегом X
				});
			}
			tag.addEventListener('click', function() {
				if (!tag.classList.contains('active')) {
					tag.classList.add('active');
					// тут вызов фильра, добаляем блоки с тегом X
				}
			});
		});

		clearTagsButton.addEventListener('click', function() {
			tags.forEach(tag => {
				tag.classList.remove('active');
			});
			// тут вызов фильтра, показываем блоки без фильтрации по тегу
		});
		// p.s. повесь на .sortbar__tag дата атрибут, или как там в вп это лучше реализовать
	}

	/*==============================
	Form
	==============================*/
	if (document.querySelector('.b-form')) {
		document.querySelectorAll('.b-form__group input').forEach(input => {
			input.addEventListener('input', function() {
				if (this.value.trim() !== '') {
					this.parentNode.classList.add('filled');
				} else {
					this.parentNode.classList.remove('filled');
				}
			});

			if (input.value.trim() !== '') {
				input.parentNode.classList.add('filled');
			}
		});
	}

	if (document.querySelector('.b-form__sel--1')) {
		const selectElement1 = document.querySelector('.b-form__sel--1 select');
		if (selectElement1) {
			new SlimSelect({
				select: selectElement1,
				settings: {
					showSearch: false,
					placeholderText: 'Job Role',
				}
			});

		}
	}

	if (document.querySelector('.b-form__sel--2')) {
		const selectElement2 = document.querySelector('.b-form__sel--2 select');
		if (selectElement2) {
			new SlimSelect({
				select: selectElement2,
				settings: {
					showSearch: false,
					placeholderText: 'Job Title',
				}
			});
		}
	}

})(window, document);