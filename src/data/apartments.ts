export const apartments = [
  {
    "id": 1,
    "floor": "Prizemlje",
    "area": "63,30",
    "rooms": [
      {
        "number": 1,
        "name": "Predprostor",
        "area": "3,90"
      },
      {
        "number": 2,
        "name": "Hodnik",
        "area": "6,12"
      },
      {
        "number": 3,
        "name": "Spavaća soba",
        "area": "10,27"
      },
      {
        "number": 4,
        "name": "Spavaća soba",
        "area": "9,11"
      },
      {
        "number": 5,
        "name": "Kupaonica",
        "area": "4,30"
      },
      {
        "number": 6,
        "name": "Dnevni boravak, kuhinja i blagovaonica",
        "area": "21,46"
      },
      {
        "number": 7,
        "name": "Ostava",
        "area": "0,98"
      },
      {
        "number": 8,
        "name": "Lođa (9,55 m² × 0,75)",
        "area": "7,16"
      }
    ]
  },
  {
    "id": 2,
    "floor": "1. kat",
    "area": "62,05",
    "rooms": [
      {
        "number": 1,
        "name": "Stubište",
        "area": "2,65"
      },
      {
        "number": 2,
        "name": "Hodnik",
        "area": "6,12"
      },
      {
        "number": 3,
        "name": "Spavaća soba",
        "area": "10,27"
      },
      {
        "number": 4,
        "name": "Spavaća soba",
        "area": "9,11"
      },
      {
        "number": 5,
        "name": "Kupaonica",
        "area": "4,30"
      },
      {
        "number": 6,
        "name": "Dnevni boravak, kuhinja i blagovaonica",
        "area": "21,46"
      },
      {
        "number": 7,
        "name": "Ostava",
        "area": "0,98"
      },
      {
        "number": 8,
        "name": "Lođa (9,55 m² × 0,75)",
        "area": "7,16"
      }
    ]
  }
] as const;
export type Apartment = (typeof apartments)[number];
