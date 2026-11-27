// Entry point: wires the controls to the filter + render pipeline and
// renders the full board sorted by savings score on first load.
import { deals } from "./deals.js";
import { readControls, applyFilters } from "./filters.js";
import { renderDeals } from "./render.js";

function refresh() {
  renderDeals(applyFilters(deals, readControls()), deals.length);
}

for (const id of ["search", "category", "store", "discount", "sort"]) {
  document.getElementById(id).addEventListener("input", refresh);
}

refresh();
