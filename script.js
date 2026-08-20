/* Tanveer's Portfolio interactions */
(function () {
	"use strict";

	const $ = (selector, parent = document) => parent.querySelector(selector);
	const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

	// Keep the copyright year current.
	$$("[data-year], #year, .current-year").forEach((element) => {
		element.textContent = new Date().getFullYear();
	});

	// Mobile navigation. Supports common button/class names without requiring them.
	const menuButton = $("[data-menu-toggle], .menu-toggle, .hamburger, #menu-toggle");
	const navigation = $("[data-navigation], nav, .navbar, .nav-links, #nav-links");

	if (menuButton && navigation) {
		menuButton.setAttribute("aria-expanded", "false");
		menuButton.addEventListener("click", () => {
			const open = navigation.classList.toggle("active");
			navigation.classList.toggle("open", open);
			menuButton.classList.toggle("active", open);
			menuButton.setAttribute("aria-expanded", String(open));
			document.body.classList.toggle("menu-open", open);
		});

		$$("a", navigation).forEach((link) => link.addEventListener("click", () => {
			navigation.classList.remove("active", "open");
			menuButton.classList.remove("active");
			menuButton.setAttribute("aria-expanded", "false");
			document.body.classList.remove("menu-open");
		}));
	}

	// Smooth scrolling for on-page links, accounting for a fixed header.
	$$('a[href^="#"]').forEach((link) => {
		link.addEventListener("click", (event) => {
			const target = document.getElementById(link.getAttribute("href").slice(1));
			if (!target) return;
			event.preventDefault();
			const header = $("header, .header, .navbar");
			const offset = header ? header.offsetHeight + 12 : 12;
			window.scrollTo({ top: target.offsetTop - offset, behavior: "smooth" });
			history.replaceState(null, "", link.getAttribute("href"));
		});
	});

	// Reveal sections as they enter the viewport.
	const revealItems = $$("[data-reveal], .reveal, .hidden");
	if ("IntersectionObserver" in window && revealItems.length) {
		const observer = new IntersectionObserver((entries, currentObserver) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible", "show", "revealed");
					currentObserver.unobserve(entry.target);
				}
			});
		}, { threshold: 0.12 });
		revealItems.forEach((item) => observer.observe(item));
	} else {
		revealItems.forEach((item) => item.classList.add("visible", "show", "revealed"));
	}

	// Highlight the navigation link for the section currently in view.
	const sections = $$('section[id], main [id]');
	const sectionLinks = $$('a[href^="#"]');
	if ("IntersectionObserver" in window && sections.length && sectionLinks.length) {
		const sectionObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				sectionLinks.forEach((link) => link.classList.toggle(
					"active",
					link.getAttribute("href") === `#${entry.target.id}`
				));
			});
		}, { rootMargin: "-35% 0px -55%" });
		sections.forEach((section) => sectionObserver.observe(section));
	}

	// Basic client-side contact form feedback.
	$$('form[data-contact], form.contact-form, form').forEach((form) => {
		form.addEventListener("submit", (event) => {
			if (!form.checkValidity()) {
				event.preventDefault();
				form.reportValidity();
				return;
			}
			const status = $("[data-form-status], .form-status", form);
			if (status) {
				event.preventDefault();
				status.textContent = "Thanks! Your message is ready to send.";
				status.classList.add("success");
				form.reset();
			}
		});
	});
})();
