(function () {
  "use strict";

  var field = document.querySelector(".particle-field");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!field || reduceMotion) return;

  var colors = [
    "rgba(55, 111, 181, .55)",
    "rgba(92, 157, 183, .48)",
    "rgba(91, 169, 153, .42)"
  ];

  for (var i = 0; i < 28; i += 1) {
    var particle = document.createElement("span");
    var size = 2 + Math.random() * 4;

    particle.className = "particle";
    particle.style.setProperty("--x", (Math.random() * 100).toFixed(2) + "%");
    particle.style.setProperty("--size", size.toFixed(2) + "px");
    particle.style.setProperty("--duration", (18 + Math.random() * 24).toFixed(2) + "s");
    particle.style.setProperty("--delay", (-Math.random() * 36).toFixed(2) + "s");
    particle.style.setProperty("--drift", (-45 + Math.random() * 90).toFixed(2) + "px");
    particle.style.setProperty("--opacity", (.16 + Math.random() * .34).toFixed(2));
    particle.style.setProperty("--color", colors[i % colors.length]);
    field.appendChild(particle);
  }
}());
