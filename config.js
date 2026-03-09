// ============================================================
//  AMZ Prep — DTC Pricing Calculator · BACKEND CONFIG
//  Edit this file to update rates and line items.
//  Changes go live as soon as you save and push to GitHub.
// ============================================================

const CONFIG = {

  // ── Default quantities shown on page load ──────────────────
  defaults: {
    orders:     2000,   // Total Orders / SKUs
    pallets:    0,   // Pallets Stored
    containers: 20,      // Container Destuffs (40ft)
    Shipping:   2000,      // Shipping
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
    { label: "Order Fee+1st pick",        qtyKey: "orders",     rate: 1.95,   show: true },
    { label: "2nd Item+",                 qtyKey: "orders",     rate: 0.55,   show: true },
    { label: "Inserts",                 qtyKey: "orders",     rate: 0.55,   show: true },
    { label: "Shipping",                 qtyKey: "orders",     rate: 8.00,  show: true },
    { label: "Pallets Stored",           qtyKey: "pallets",    rate: 23.50,  show: true },
    { label: "Container Destuff (40ft)", qtyKey: "containers", rate: 600.00, show: true },
    { label: "Supplies",          qtyKey: "orders",   rate: 1.00,   show: true },
    { label: "Inbound Item",          qtyKey: "putaways",   rate: 0.30,   show: true },
  ],

};
