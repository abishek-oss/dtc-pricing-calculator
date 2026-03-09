const CONFIG = {

  // ── Quantity Inputs ────────────────────────────────────────
  // These are the volume numbers displayed on the customer page.
  // Set "show: false" to hide a quantity row from the page.
  //
  quantities: [
    { key: "SKUs",     label: "SKUs",      value: 2000,  show: true  },
    { key: "First pick",     label: "Order Fee + First pick",      value: 2000,  show: true  },
    { key: "Second Pick",     label: "Second Pick",      value: 200,  show: true  },
     { key: "inserts",     label: "Inserts",      value: 0,  show: false  },
    { key: "Shipping",    label: "Shipping",            value: 2000,  show: true  },
    { key: "containers", label: "Container Destuff", value: 20,     show: true },
    { key: "Pallets", label: "Pallets", value: 0,     show: false },
    { key: "Inbound",   label: "Inbound Items",          value: 1100,     show: true },
    { key: "Supplies",     label: "Supplies",      value: 2000,  show: true  },
  ],

  // ── Line Items ─────────────────────────────────────────────
  // Each item needs:
  //   label:    name shown to the customer
  //   qtyKey:   which quantity above to multiply against
  //             must match a "key" from the quantities list above
  //   rate:     $ price per unit
  //   show:     set to false to hide this line item from customers
  //
  lineItems: [
    { label: "Order Fee and 1st Pick",        qtyKey: "First pick",     rate: 1.95,   show: true  },
    { label: "2nd+ Pick Fee",                 qtyKey: "Second Pick",     rate: 0.55,   show: true  },
    { label: "Inserts",                 qtyKey: "inserts",     rate: 0.20,   show: false  },
    { label: "Shipping",                 qtyKey: "Shipping",     rate: 8.00,  show: true  },
    { label: "Pallets Stored",           qtyKey: "Pallets",    rate: 23.50,  show: false  },
    { label: "Container Destuff (40ft)", qtyKey: "containers", rate: 600.00, show: true  },
    { label: "Supplies",          qtyKey: "Supplies",   rate: 1.00,   show: true  },
    { label: "Inbound per Item",          qtyKey: "Inbound",   rate: 0.30,   show: true  },
  ],

};
