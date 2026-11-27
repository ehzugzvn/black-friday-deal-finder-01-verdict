// Verdicts and the savings score. The score ranks deals by both the size of
// the cut and the dollars saved, so a 50% cut on a $300 item beats a 50% cut
// on a $30 one. Verdicts are recorded per deal in deals.js with evidence.
export function discountPercent(deal) {
  return Math.round(((deal.was - deal.price) / deal.was) * 100);
}

export function dollarsSaved(deal) {
  return Math.round((deal.was - deal.price) * 100) / 100;
}

export function savingsScore(deal) {
  const pct = discountPercent(deal);
  const saved = dollarsSaved(deal);
  return Math.round(pct + saved / 25);
}

export function verdictClass(verdict) {
  if (verdict === "NEW LOW") return "new-low";
  if (verdict === "STRONG") return "strong";
  return "routine";
}

export function formatPrice(n) {
  return "$" + n.toFixed(2).replace(/\.00$/, "");
}
