// Search, filters and sorting. Reads the controls in index.html, applies
// them to the deal list, and hands the visible deals to the renderer.
import { discountPercent, savingsScore, dollarsSaved } from "./verdict.js";

export function readControls() {
  return {
    query: document.getElementById("search").value.trim().toLowerCase(),
    category: document.getElementById("category").value,
    store: document.getElementById("store").value,
    minDiscount: Number(document.getElementById("discount").value),
    sort: document.getElementById("sort").value,
  };
}

export function applyFilters(all, controls) {
  let visible = all.filter((deal) => {
    if (controls.category && deal.category !== controls.category) return false;
    if (controls.store && deal.store !== controls.store) return false;
    if (discountPercent(deal) < controls.minDiscount) return false;
    if (controls.query) {
      const hay = (deal.title + " " + deal.store + " " + deal.category + " " + deal.verdict).toLowerCase();
      if (!hay.includes(controls.query)) return false;
    }
    return true;
  });
  const by = {
    score: (a, b) => savingsScore(b) - savingsScore(a),
    discount: (a, b) => discountPercent(b) - discountPercent(a),
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
    save: (a, b) => dollarsSaved(b) - dollarsSaved(a),
  };
  visible.sort(by[controls.sort] || by.score);
  return visible;
}
