// ============================================================
//  AMZ Prep — DTC Pricing Calculator · BACKEND CONFIG
//  Edit this file to update rates and line items.
//  Changes go live as soon as you save and push to GitHub.
// ============================================================

const CONFIG = {

  // ── Default quantities shown on page load ──────────────────
  defaults: {
    orders:     7500,   // Total Orders / SKUs
    pallets:    1000,   // Pallets Stored
    containers: 0,      // Container Destuffs (40ft)
    putaways:   0,      // Pallet Put Aways
  },

  // ── Line items ─────────────────────────────────────────────
  // Each item needs:
  //   label:    name shown to the customer
  //   qtyKey:   which quantity to multiply against
  //             options: "orders" | "pallets" | "containers" | "putaways"
  //   rate:     $ price per unit
  //   show:     set to false to hide a line item from customers
  //
  lineItems: [
    { label: "Inbound Order Fee",        qtyKey: "orders",     rate: 1.48,   show: true },
    { label: "Pick Fee",                 qtyKey: "orders",     rate: 0.55,   show: true },
    { label: "Tech Fee",                 qtyKey: "orders",     rate: 0.20,   show: true },
    { label: "Shipping",                 qtyKey: "orders",     rate: 15.73,  show: true },
    { label: "Pallets Stored",           qtyKey: "pallets",    rate: 17.00,  show: true },
    { label: "Container Destuff (40ft)", qtyKey: "containers", rate: 625.00, show: true },
    { label: "Pallet Put Away",          qtyKey: "putaways",   rate: 5.50,   show: true },
  ],

};
