// Rendering: turns the visible deals into cards in the grid, with the
// verdict badge, prices, discount, evidence and check line on every card.
import { CHECKED } from "./deals.js";
import { discountPercent, dollarsSaved, savingsScore, verdictClass, formatPrice } from "./verdict.js";

export function renderDeals(visible, total) {
  const grid = document.getElementById("grid");
  const count = document.getElementById("count");
  const empty = document.getElementById("empty");
  grid.innerHTML = "";
  empty.hidden = visible.length !== 0;
  const newLows = visible.filter((d) => d.verdict === "NEW LOW").length;
  count.innerHTML = visible.length + " deal" + (visible.length === 1 ? "" : "s") +
    ' <span class="sub">· ' + newLows + ' new lows · of ' + total + ' checked</span>';
  for (const deal of visible) {
    const card = document.createElement("article");
    card.className = "card";
    const badge = document.createElement("span");
    badge.className = "badge " + verdictClass(deal.verdict);
    badge.textContent = deal.verdict;
    const glyph = document.createElement("div");
    glyph.className = "glyph";
    glyph.textContent = deal.glyph;
    glyph.setAttribute("aria-hidden", "true");
    const title = document.createElement("h2");
    title.textContent = deal.title;
    const meta = document.createElement("div");
    meta.className = "meta";
    const store = document.createElement("span");
    store.className = "store";
    store.textContent = deal.store;
    const cat = document.createElement("span");
    cat.textContent = deal.category;
    meta.append(store, cat);
    const prices = document.createElement("div");
    prices.className = "prices";
    const sale = document.createElement("span");
    sale.className = "sale";
    sale.textContent = formatPrice(deal.price);
    const was = document.createElement("span");
    was.className = "was";
    was.textContent = "was " + formatPrice(deal.was);
    const off = document.createElement("span");
    off.className = "off";
    off.textContent = "-" + discountPercent(deal) + "%";
    prices.append(sale, was, off);
    const verdict = document.createElement("p");
    verdict.className = "verdict-line";
    const strong = document.createElement("strong");
    strong.textContent = deal.verdict + ": ";
    verdict.append(strong, document.createTextNode(deal.evidence));
    const score = document.createElement("p");
    score.className = "score";
    score.innerHTML = "";
    score.textContent = "Savings score " + savingsScore(deal) + " · save " + formatPrice(dollarsSaved(deal));
    const checked = document.createElement("p");
    checked.className = "checked";
    checked.textContent = "Checked " + CHECKED + " · Source: " + deal.source;
    const cta = document.createElement("a");
    cta.className = "cta";
    cta.href = deal.url;
    cta.target = "_blank";
    cta.rel = "noopener";
    cta.textContent = "View at " + deal.store + " →";
    card.append(badge, glyph, title, meta, prices, verdict, score, checked, cta);
    grid.appendChild(card);
  }
}
