(function () {
  "use strict";

  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Mobile menu
  var btn = document.getElementById("menu-btn");
  var menu = document.getElementById("mobile-menu");
  if (btn && menu) {
    var setOpen = function (open) {
      menu.classList.toggle("hidden", !open);
      btn.setAttribute("aria-expanded", String(open));
      btn.querySelector(".i-open").classList.toggle("hidden", open);
      btn.querySelector(".i-close").classList.toggle("hidden", !open);
    };
    btn.addEventListener("click", function () {
      setOpen(btn.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        btn.focus();
      }
    });
    window.matchMedia("(min-width: 1024px)").addEventListener("change", function (e) {
      if (e.matches) setOpen(false);
    });
  }

  // Course filter
  var chips = document.querySelectorAll("[data-filter]");
  var cards = document.querySelectorAll("#course-grid [data-cat]");
  var status = document.getElementById("filter-status");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var f = chip.getAttribute("data-filter");
      chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
      var n = 0;
      cards.forEach(function (card) {
        var show = f === "All" || card.getAttribute("data-cat") === f;
        card.classList.toggle("hidden", !show);
        if (show) n++;
      });
      if (status) status.textContent = "Showing " + n + (n === 1 ? " course" : " courses") + (f === "All" ? "" : " in " + f);
    });
  });

  // Contact form
  var form = document.getElementById("enquiry-form");
  if (form) {
    var q = new URLSearchParams(window.location.search).get("course");
    var sel = document.getElementById("course");
    if (q && sel) {
      Array.prototype.forEach.call(sel.options, function (o) { if (o.value === q) sel.value = q; });
    }
    var setErr = function (id, msg) {
      var field = document.getElementById(id);
      var err = document.getElementById(id + "-err");
      if (!field || !err) return;
      err.textContent = msg;
      err.classList.toggle("hidden", !msg);
      field.setAttribute("aria-invalid", msg ? "true" : "false");
    };
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = function (id) { return document.getElementById(id).value.trim(); };
      var digits = v("phone").replace(/[\s\-+]/g, "").replace(/^91(?=\d{10}$)/, "");
      var errors = [];
      var name = v("name"), email = v("email"), course = v("course");
      setErr("name", name ? "" : "Please enter the student's name.");
      if (!name) errors.push("name");
      var okPhone = /^[6-9]\d{9}$/.test(digits);
      setErr("phone", okPhone ? "" : "Enter a valid 10-digit mobile number.");
      if (!okPhone) errors.push("phone");
      var okEmail = !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      setErr("email", okEmail ? "" : "Enter a valid email address, like name@example.com.");
      if (!okEmail) errors.push("email");
      setErr("course", course ? "" : "Please choose a course or plan.");
      if (!course) errors.push("course");
      var st = document.getElementById("form-status");
      if (errors.length) {
        st.classList.add("hidden");
        document.getElementById(errors[0]).focus();
        return;
      }
      // No backend: open the visitor's email app with the enquiry filled in.
      var body = "Name: " + name + "\nMobile: " + digits + "\nEmail: " + (email || "-") +
        "\nInterested in: " + course + "\nMessage: " + (v("message") || "-");
      window.location.href = "mailto:hello@brightnest.example?subject=" +
        encodeURIComponent("Free demo enquiry: " + course) + "&body=" + encodeURIComponent(body);
      st.textContent = "Thanks! Your email app should open with your enquiry ready to send. If it doesn't, call us on +91 98765 43210.";
      st.classList.remove("hidden");
    });
  }
})();
