const CONFIG = {

  // ── Quantity Inputs ────────────────────────────────────────
  // These are the volume numbers displayed on the customer page.
  // Set "show: false" to hide a quantity row from the page.
  //
  quantities: [
    { key: "SKUs",     label: "SKUs",      value: 2000,  show: true  },
    { key: "Orders",     label: "First pick",      value: 2000,  show: true  },
    { key: "Second Picks",     label: "Second Pick",      value: 200,  show: true  },
     { key: "Inserts",     label: "inserts",      value: 0,  show: false  },
    { key: "Shipping",    label: "Orders",            value: 2000,  show: true  },
    { key: "containers", label: "Containers", value: 20,     show: true },
    { key: "Pallets", label: "pallets", value: 0,     show: false },
    { key: "Inbound Items",   label: "Inbound",          value: 1100,     show: true },
    { key: "Supplies",     label: "supplies",      value: 2000,  show: true  },
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
    { label: "Shipping",                 qtyKey: "Orders",     rate: 8.00,  show: true  },
    { label: "Pallets Stored",           qtyKey: "pallets",    rate: 23.50,  show: false  },
    { label: "Container Destuff (40ft)", qtyKey: "Containers", rate: 600.00, show: true  },
    { label: "Supplies",          qtyKey: "supplies",   rate: 1.00,   show: true  },
    { label: "Inbound per Item",          qtyKey: "Inbound",   rate: 0.30,   show: true  },
  ],

};
