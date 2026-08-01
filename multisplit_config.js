/**
 * КОНФИГУРАТОР МУЛЬТИСПЛИТОВ — компоненты free-match (общая база для клиентского и монтажницкого).
 * price = цена клиенту; dealer = цена монтажникам (закупка); rrc = РРЦ. zones = макс. блоков; maxBtu = номинал наружного, BTU.
 * Источники: AUX/AERONIK/CHERBROOKE — мастер-таблица; GREE — прайс DDC Free Match 5 R32. AERONIK zones — оценка по мощности. MIDEA — прайс МегаКлимат 15.06.2026 (Free-Match).
 */
const MULTISPLIT_CFG = {
 "MDV": {
 "outdoor": [
  {
   "code": "MD3O-18HFN8",
   "zones": 3,
   "maxBtu": 18000,
   "price": 443750,
   "dealer": 355000,
   "rrc": 443750,
   "stock": "в наличии"
  },
  {
   "code": "MD3O-21HFN8",
   "zones": 3,
   "maxBtu": 21000,
   "price": 460000,
   "dealer": 368000,
   "rrc": 460000,
   "stock": "в наличии"
  },
  {
   "code": "MD4O-28HFN8",
   "zones": 4,
   "maxBtu": 28000,
   "price": 506250,
   "dealer": 405000,
   "rrc": 506250,
   "stock": "в наличии"
  },
  {
   "code": "MD4O-36HFN8",
   "zones": 4,
   "maxBtu": 36000,
   "price": 771250,
   "dealer": 617000,
   "rrc": 771250,
   "stock": "в наличии"
  },
  {
   "code": "MD5OB-42HFN8",
   "zones": 5,
   "maxBtu": 42000,
   "price": 906250,
   "dealer": 725000,
   "rrc": 906250,
   "stock": "в наличии"
  }
 ],
 "indoor": [
  {
   "code": "MDT2II-07HWFN8",
   "body": "канальный",
   "btu": 7000,
   "area": 20,
   "price": 183750,
   "dealer": 147000,
   "rrc": 183750,
   "stock": "в наличии"
  },
  {
   "code": "MDT2II-09HWFN8",
   "body": "канальный",
   "btu": 9000,
   "area": 25,
   "price": 188750,
   "dealer": 151000,
   "rrc": 188750,
   "stock": "в наличии"
  },
  {
   "code": "MDT2II-12HWFN8",
   "body": "канальный",
   "btu": 12000,
   "area": 35,
   "price": 206250,
   "dealer": 165000,
   "rrc": 206250,
   "stock": "в наличии"
  },
  {
   "code": "MDT2II-18HWFN8",
   "body": "канальный",
   "btu": 18000,
   "area": 55,
   "price": 235000,
   "dealer": 188000,
   "rrc": 235000,
   "stock": "в наличии"
  },
  {
   "code": "MDT2II-24HWFN8",
   "body": "канальный",
   "btu": 24000,
   "area": 70,
   "price": 258750,
   "dealer": 207000,
   "rrc": 258750,
   "stock": "в наличии"
  },
  {
   "code": "MDCAC4I-07HRFN8",
   "body": "кассетный",
   "btu": 7000,
   "area": 20,
   "price": 166250,
   "dealer": 133000,
   "rrc": 166250,
   "stock": "в наличии"
  },
  {
   "code": "MDCAC4I-09HRFN8",
   "body": "кассетный",
   "btu": 9000,
   "area": 25,
   "price": 172500,
   "dealer": 138000,
   "rrc": 172500,
   "stock": "в наличии"
  },
  {
   "code": "MDCA2I-09HRFN8",
   "body": "кассетный",
   "btu": 9000,
   "area": 25,
   "price": 275000,
   "dealer": 220000,
   "rrc": 275000,
   "stock": "в наличии"
  },
  {
   "code": "MDCAC4I-12HRFN8",
   "body": "кассетный",
   "btu": 12000,
   "area": 35,
   "price": 177500,
   "dealer": 142000,
   "rrc": 177500,
   "stock": "в наличии"
  },
  {
   "code": "MDCA2I-12HRFN8",
   "body": "кассетный",
   "btu": 12000,
   "area": 35,
   "price": 281250,
   "dealer": 225000,
   "rrc": 281250,
   "stock": "в наличии"
  },
  {
   "code": "MDCAC4I-18HRFN8",
   "body": "кассетный",
   "btu": 18000,
   "area": 55,
   "price": 193750,
   "dealer": 155000,
   "rrc": 193750,
   "stock": "в наличии"
  },
  {
   "code": "MDCA2I-18HRFN8",
   "body": "кассетный",
   "btu": 18000,
   "area": 55,
   "price": 312500,
   "dealer": 250000,
   "rrc": 312500,
   "stock": "в наличии"
  },
  {
   "code": "MDCA2I-24HRFN8",
   "body": "кассетный",
   "btu": 24000,
   "area": 70,
   "price": 332500,
   "dealer": 266000,
   "rrc": 332500,
   "stock": "в наличии"
  },
  {
   "code": "MDFFI-12HRFN8",
   "body": "консольный",
   "btu": 12000,
   "area": 35,
   "price": 152500,
   "dealer": 122000,
   "rrc": 152500,
   "stock": "в наличии"
  },
  {
   "code": "MDFFI-18HRFN8",
   "body": "консольный",
   "btu": 18000,
   "area": 55,
   "price": 158750,
   "dealer": 127000,
   "rrc": 158750,
   "stock": "в наличии"
  },
  {
   "code": "MDSAI2-07HRFN8",
   "body": "настенный",
   "btu": 7000,
   "area": 20,
   "price": 55000,
   "dealer": 44000,
   "rrc": 55000,
   "stock": "в наличии"
  },
  {
   "code": "MDSBI2-07HRFN8",
   "body": "настенный",
   "btu": 7000,
   "area": 20,
   "price": 78750,
   "dealer": 63000,
   "rrc": 78750,
   "stock": "в наличии"
  },
  {
   "code": "MDSALF-09HRFN8",
   "body": "настенный",
   "btu": 9000,
   "area": 25,
   "price": 93750,
   "dealer": 75000,
   "rrc": 93750,
   "stock": "в наличии"
  },
  {
   "code": "MDSAL-09HRFN8",
   "body": "настенный",
   "btu": 9000,
   "area": 25,
   "price": 75000,
   "dealer": 60000,
   "rrc": 75000,
   "stock": "в наличии"
  },
  {
   "code": "MDSAI2-09HRFN8",
   "body": "настенный",
   "btu": 9000,
   "area": 25,
   "price": 62500,
   "dealer": 50000,
   "rrc": 62500,
   "stock": "в наличии"
  },
  {
   "code": "MDSBI2-09HRFN8",
   "body": "настенный",
   "btu": 9000,
   "area": 25,
   "price": 85000,
   "dealer": 68000,
   "rrc": 85000,
   "stock": "в наличии"
  },
  {
   "code": "MDSALF-12HRFN8",
   "body": "настенный",
   "btu": 12000,
   "area": 35,
   "price": 107500,
   "dealer": 86000,
   "rrc": 107500,
   "stock": "в наличии"
  },
  {
   "code": "MDSAL-12HRFN8",
   "body": "настенный",
   "btu": 12000,
   "area": 35,
   "price": 85000,
   "dealer": 68000,
   "rrc": 85000,
   "stock": "в наличии"
  },
  {
   "code": "MDSAI2-12HRFN8",
   "body": "настенный",
   "btu": 12000,
   "area": 35,
   "price": 81250,
   "dealer": 65000,
   "rrc": 81250,
   "stock": "в наличии"
  },
  {
   "code": "MDSBI2-12HRFN8",
   "body": "настенный",
   "btu": 12000,
   "area": 35,
   "price": 97500,
   "dealer": 78000,
   "rrc": 97500,
   "stock": "в наличии"
  },
  {
   "code": "MDSALF-18HRFN8",
   "body": "настенный",
   "btu": 18000,
   "area": 55,
   "price": 130000,
   "dealer": 104000,
   "rrc": 130000,
   "stock": "в наличии"
  },
  {
   "code": "MDSAL-18HRFN8",
   "body": "настенный",
   "btu": 18000,
   "area": 55,
   "price": 111250,
   "dealer": 89000,
   "rrc": 111250,
   "stock": "в наличии"
  },
  {
   "code": "MDSAI2-18HRFN8",
   "body": "настенный",
   "btu": 18000,
   "area": 55,
   "price": 112500,
   "dealer": 90000,
   "rrc": 112500,
   "stock": "в наличии"
  },
  {
   "code": "MDSBI2-18HRFN8",
   "body": "настенный",
   "btu": 18000,
   "area": 55,
   "price": 125000,
   "dealer": 100000,
   "rrc": 125000,
   "stock": "в наличии"
  },
  {
   "code": "MDSALF-24HRFN8",
   "body": "настенный",
   "btu": 24000,
   "area": 70,
   "price": 156250,
   "dealer": 125000,
   "rrc": 156250,
   "stock": "в наличии"
  },
  {
   "code": "MDSAL-24HRFN8",
   "body": "настенный",
   "btu": 24000,
   "area": 70,
   "price": 136250,
   "dealer": 109000,
   "rrc": 136250,
   "stock": "в наличии"
  },
  {
   "code": "MDSAI2-24HRFN8",
   "body": "настенный",
   "btu": 24000,
   "area": 70,
   "price": 140000,
   "dealer": 112000,
   "rrc": 140000,
   "stock": "в наличии"
  },
  {
   "code": "MDSBI2-24HRFN8",
   "body": "настенный",
   "btu": 24000,
   "area": 70,
   "price": 152500,
   "dealer": 122000,
   "rrc": 152500,
   "stock": "в наличии"
  }
 ]
},
 
 "AUX": {
  "outdoor": [
   {
    "code": "AM2-H14/4DR3",
    "zones": 2,
    "maxBtu": 14000,
    "price": 337739,
    "dealer": 281449,
    "rrc": 351811,
    "stock": "под заказ"
   },
   {
    "code": "AM2-H18/4DR3",
    "zones": 2,
    "maxBtu": 18000,
    "price": 367206,
    "dealer": 306005,
    "rrc": 382506,
    "stock": "в наличии"
   },
   {
    "code": "AM3-H21/4DR3",
    "zones": 3,
    "maxBtu": 21000,
    "price": 474875,
    "dealer": 395729,
    "rrc": 494661,
    "stock": "под заказ"
   },
   {
    "code": "AM3-H27/4DR3",
    "zones": 3,
    "maxBtu": 27000,
    "price": 477141,
    "dealer": 397618,
    "rrc": 497022,
    "stock": "в наличии"
   },
   {
    "code": "AM4-H36/4DR3",
    "zones": 4,
    "maxBtu": 36000,
    "price": 723079,
    "dealer": 602566,
    "rrc": 753207,
    "stock": "под заказ"
   },
   {
    "code": "AM5-H42/4DR1B",
    "zones": 5,
    "maxBtu": 42000,
    "price": 1060170,
    "dealer": 883475,
    "rrc": 1104344,
    "stock": "в наличии"
   },
   {
    "code": "AM5-H42/4DR3",
    "zones": 5,
    "maxBtu": 42000,
    "price": 1060170,
    "dealer": 883475,
    "rrc": 1104344,
    "stock": "под заказ"
   }
  ],
  "indoor": [
   {
    "code": "AMSD-H07/4R3AA",
    "body": "канальный",
    "btu": 7000,
    "area": 20,
    "price": 179070,
    "dealer": 149225,
    "rrc": 186531,
    "stock": "под заказ"
   },
   {
    "code": "AMSD-H09/4R1",
    "body": "канальный",
    "btu": 9000,
    "area": 26,
    "price": 165960,
    "dealer": 138300,
    "rrc": 172875,
    "stock": "в наличии"
   },
   {
    "code": "AMSD-H09/4R3AA",
    "body": "канальный",
    "btu": 9000,
    "area": 26,
    "price": 196069,
    "dealer": 163391,
    "rrc": 204239,
    "stock": "под заказ"
   },
   {
    "code": "AMSD-H12/4R1",
    "body": "канальный",
    "btu": 12000,
    "area": 34,
    "price": 163139,
    "dealer": 135949,
    "rrc": 169936,
    "stock": "в наличии"
   },
   {
    "code": "AUMD-H12/NDR3",
    "body": "канальный",
    "btu": 12000,
    "area": 34,
    "price": 204004,
    "dealer": 170003,
    "rrc": 212504,
    "stock": "под заказ"
   },
   {
    "code": "AUMD-H18/NDR3",
    "body": "канальный",
    "btu": 18000,
    "area": 51,
    "price": 217603,
    "dealer": 181336,
    "rrc": 226670,
    "stock": "под заказ"
   },
   {
    "code": "AUMD-H24/NDR3",
    "body": "канальный",
    "btu": 24000,
    "area": 69,
    "price": 266338,
    "dealer": 221948,
    "rrc": 277435,
    "stock": "под заказ"
   },
   {
    "code": "AMCA-H09/4R3YAA",
    "body": "кассетный",
    "btu": 9000,
    "area": 26,
    "price": 165469,
    "dealer": 137891,
    "rrc": 172364,
    "stock": "под заказ"
   },
   {
    "code": "AMCA-H12/4R1",
    "body": "кассетный",
    "btu": 12000,
    "area": 34,
    "price": 173403,
    "dealer": 144502,
    "rrc": 180628,
    "stock": "в наличии"
   },
   {
    "code": "AMCA-H12/4R3YAA",
    "body": "кассетный",
    "btu": 12000,
    "area": 34,
    "price": 173403,
    "dealer": 144502,
    "rrc": 180628,
    "stock": "под заказ"
   },
   {
    "code": "AMCA-H18/4R3YAA",
    "body": "кассетный",
    "btu": 18000,
    "area": 51,
    "price": 188136,
    "dealer": 156780,
    "rrc": 195975,
    "stock": "под заказ"
   },
   {
    "code": "AMWM-H07/4R3C(HA）",
    "body": "настенный",
    "btu": 7000,
    "area": 20,
    "price": 78202,
    "dealer": 65168,
    "rrc": 81460,
    "stock": "в наличии"
   },
   {
    "code": "AMWM-H09/4R3A(HA)",
    "body": "настенный",
    "btu": 9000,
    "area": 26,
    "price": 78698,
    "dealer": 65582,
    "rrc": 81977,
    "stock": "в наличии"
   },
   {
    "code": "AMWM-H09/4R3C(HA）",
    "body": "настенный",
    "btu": 9000,
    "area": 26,
    "price": 81601,
    "dealer": 68001,
    "rrc": 85001,
    "stock": "в наличии"
   },
   {
    "code": "AMWM-H12/4R3A(HA)",
    "body": "настенный",
    "btu": 12000,
    "area": 34,
    "price": 85145,
    "dealer": 70954,
    "rrc": 88693,
    "stock": "в наличии"
   },
   {
    "code": "AMWM-H12/4R3C(HA)",
    "body": "настенный",
    "btu": 12000,
    "area": 34,
    "price": 83868,
    "dealer": 69890,
    "rrc": 87363,
    "stock": "в наличии"
   },
   {
    "code": "AMWM-H18/4R3C(HA)",
    "body": "настенный",
    "btu": 18000,
    "area": 51,
    "price": 102002,
    "dealer": 85002,
    "rrc": 106252,
    "stock": "в наличии"
   },
   {
    "code": "AMWM-H24/4R3A(HA)",
    "body": "настенный",
    "btu": 24000,
    "area": 69,
    "price": 136002,
    "dealer": 113335,
    "rrc": 141669,
    "stock": "под заказ"
   }
  ]
 },
 "AERONIK": {
  "outdoor": [
   {
    "code": "ASO-14HMZK1(GWHD(14)NK6NO)",
    "zones": 2,
    "maxBtu": 14000,
    "price": 295492,
    "dealer": 246243,
    "rrc": 307804,
    "stock": "под заказ"
   },
   {
    "code": "ASO-18HMZK1(GWHD(18)NK6NO)",
    "zones": 2,
    "maxBtu": 18000,
    "price": 320471,
    "dealer": 267059,
    "rrc": 333824,
    "stock": "под заказ"
   },
   {
    "code": "ASO-24HMZK1(GWHD(24)NK6NO)",
    "zones": 3,
    "maxBtu": 24000,
    "price": 464257,
    "dealer": 386881,
    "rrc": 483601,
    "stock": "в наличии"
   },
   {
    "code": "ASO-28HMZK1(GWHD(28)NK6NO)",
    "zones": 3,
    "maxBtu": 28000,
    "price": 477661,
    "dealer": 398051,
    "rrc": 497564,
    "stock": "в наличии"
   },
   {
    "code": "ASO-36HMZK(GWHD(36)NK6NO)",
    "zones": 4,
    "maxBtu": 36000,
    "price": 695776,
    "dealer": 579813,
    "rrc": 724766,
    "stock": "в наличии"
   },
   {
    "code": "ASO-42HMZK(GWHD(42)NK6NO)",
    "zones": 5,
    "maxBtu": 42000,
    "price": 800569,
    "dealer": 667141,
    "rrc": 833926,
    "stock": "в наличии"
   }
  ],
  "indoor": [
   {
    "code": "ASI-09DHMZK(GFH(09)EA-K6DNA1B/I)",
    "body": "канальный",
    "btu": 9000,
    "area": 26,
    "price": 151097,
    "dealer": 125914,
    "rrc": 157392,
    "stock": "под заказ"
   },
   {
    "code": "ASI-12DHMZ",
    "body": "канальный",
    "btu": 12000,
    "area": 34,
    "price": 197400,
    "dealer": 164500,
    "rrc": 205625,
    "stock": "под заказ"
   },
   {
    "code": "ASI-18DHMZK(GFH(18)EA-K6DNA1B/I)",
    "body": "канальный",
    "btu": 18000,
    "area": 51,
    "price": 225426,
    "dealer": 187855,
    "rrc": 234819,
    "stock": "под заказ"
   },
   {
    "code": "ASI-12CHMZ",
    "body": "кассетный",
    "btu": 12000,
    "area": 34,
    "price": 201665,
    "dealer": 168054,
    "rrc": 210068,
    "stock": "под заказ"
   },
   {
    "code": "ASI-18CHMZ",
    "body": "кассетный",
    "btu": 18000,
    "area": 51,
    "price": 216288,
    "dealer": 180240,
    "rrc": 225300,
    "stock": "под заказ"
   },
   {
    "code": "ASI-09COHMZ(AEH(09)AA-K3DNA1B/I)",
    "body": "консольный",
    "btu": 9000,
    "area": 26,
    "price": 174858,
    "dealer": 145715,
    "rrc": 182144,
    "stock": "под заказ"
   },
   {
    "code": "ASI-12COHMZ(AEH(12)AA-K3DNA1B/I)",
    "body": "консольный",
    "btu": 12000,
    "area": 34,
    "price": 184606,
    "dealer": 153838,
    "rrc": 192298,
    "stock": "под заказ"
   },
   {
    "code": "ASI-18COHMZ(AEH(18)AA-K3DNA1D/I)",
    "body": "консольный",
    "btu": 18000,
    "area": 51,
    "price": 208367,
    "dealer": 173639,
    "rrc": 217049,
    "stock": "под заказ"
   },
   {
    "code": "ASI-07 ILK3",
    "body": "настенный",
    "btu": 7000,
    "area": 20,
    "price": 69456,
    "dealer": 57880,
    "rrc": 72350,
    "stock": "в наличии"
   },
   {
    "code": "ASI-09 ILK4",
    "body": "настенный",
    "btu": 9000,
    "area": 26,
    "price": 71178,
    "dealer": 59315,
    "rrc": 74144,
    "stock": "в наличии"
   },
   {
    "code": "ASI-09 ILK3",
    "body": "настенный",
    "btu": 9000,
    "area": 26,
    "price": 73721,
    "dealer": 61434,
    "rrc": 76792,
    "stock": "в наличии"
   },
   {
    "code": "ASI-12 ILK4",
    "body": "настенный",
    "btu": 12000,
    "area": 34,
    "price": 78826,
    "dealer": 65688,
    "rrc": 82110,
    "stock": "в наличии"
   },
   {
    "code": "ASI-12 ILK3",
    "body": "настенный",
    "btu": 12000,
    "area": 34,
    "price": 85906,
    "dealer": 71588,
    "rrc": 89485,
    "stock": "в наличии"
   },
   {
    "code": "ASI-18 ILK3",
    "body": "настенный",
    "btu": 18000,
    "area": 51,
    "price": 109057,
    "dealer": 90881,
    "rrc": 113601,
    "stock": "в наличии"
   },
   {
    "code": "ASI-24 ILK3",
    "body": "настенный",
    "btu": 24000,
    "area": 69,
    "price": 140740,
    "dealer": 117283,
    "rrc": 146604,
    "stock": "в наличии"
   }
  ]
 },
 "CHERBROOKE": {
  "outdoor": [
   {
    "code": "AOI2-14U4RK",
    "zones": 2,
    "maxBtu": 14000,
    "price": 290617,
    "dealer": 242181,
    "rrc": 302726,
    "stock": "под заказ"
   },
   {
    "code": "AOI2-18U4RK",
    "zones": 2,
    "maxBtu": 18000,
    "price": 306458,
    "dealer": 255382,
    "rrc": 319228,
    "stock": "под заказ"
   },
   {
    "code": "AOI3-21U4RK",
    "zones": 3,
    "maxBtu": 21000,
    "price": 438668,
    "dealer": 365557,
    "rrc": 456946,
    "stock": "под заказ"
   },
   {
    "code": "AOI4-27U4RK",
    "zones": 4,
    "maxBtu": 27000,
    "price": 494720,
    "dealer": 412267,
    "rrc": 515334,
    "stock": "под заказ"
   },
   {
    "code": "AOI5-36U4RK",
    "zones": 5,
    "maxBtu": 36000,
    "price": 650082,
    "dealer": 541735,
    "rrc": 677169,
    "stock": "под заказ"
   },
   {
    "code": "AOI5-42U4RK",
    "zones": 5,
    "maxBtu": 42000,
    "price": 882820,
    "dealer": 735683,
    "rrc": 919604,
    "stock": "под заказ"
   }
  ],
  "indoor": [
   {
    "code": "ADI-09UX4RK",
    "body": "канальный",
    "btu": 9000,
    "area": 26,
    "price": 160844,
    "dealer": 134037,
    "rrc": 167546,
    "stock": "под заказ"
   },
   {
    "code": "ADI-12UX4RK",
    "body": "канальный",
    "btu": 12000,
    "area": 34,
    "price": 180950,
    "dealer": 150792,
    "rrc": 188490,
    "stock": "под заказ"
   },
   {
    "code": "ADI-18UX4RK",
    "body": "канальный",
    "btu": 18000,
    "area": 51,
    "price": 196182,
    "dealer": 163485,
    "rrc": 204356,
    "stock": "под заказ"
   },
   {
    "code": "ACI-12UR4RK c",
    "body": "кассетный",
    "btu": 12000,
    "area": 34,
    "price": 207758,
    "dealer": 173132,
    "rrc": 216415,
    "stock": "под заказ"
   },
   {
    "code": "ACI-18UR4RK c",
    "body": "кассетный",
    "btu": 18000,
    "area": 51,
    "price": 206539,
    "dealer": 172116,
    "rrc": 215145,
    "stock": "под заказ"
   },
   {
    "code": "ACI-24UR4RK c",
    "body": "кассетный",
    "btu": 24000,
    "area": 69,
    "price": 237612,
    "dealer": 198010,
    "rrc": 247512,
    "stock": "под заказ"
   },
   {
    "code": "AMI-07UW4RK",
    "body": "настенный",
    "btu": 7000,
    "area": 20,
    "price": 75548,
    "dealer": 62957,
    "rrc": 78696,
    "stock": "под заказ"
   },
   {
    "code": "AMI-12UW4RK",
    "body": "настенный",
    "btu": 12000,
    "area": 34,
    "price": 79204,
    "dealer": 66003,
    "rrc": 82504,
    "stock": "под заказ"
   },
   {
    "code": "AMI-18UW4RK",
    "body": "настенный",
    "btu": 18000,
    "area": 51,
    "price": 101137,
    "dealer": 84281,
    "rrc": 105351,
    "stock": "под заказ"
   }
  ]
 },
 "GREE": {
  "outdoor": [
   {
    "code": "GWHD(14)NK6OO",
    "zones": 2,
    "maxBtu": 14000,
    "price": 364208,
    "dealer": 294580,
    "rrc": 364208,
    "stock": "в наличии"
   },
   {
    "code": "GWHD(21)NK6OO",
    "zones": 3,
    "maxBtu": 21000,
    "price": 471328,
    "dealer": 380276,
    "rrc": 471328,
    "stock": "в наличии"
   },
   {
    "code": "GWHD(24)NK6OO",
    "zones": 3,
    "maxBtu": 24000,
    "price": 508820,
    "dealer": 407056,
    "rrc": 508820,
    "stock": "в наличии"
   },
   {
    "code": "GWHD(36)NK6OO",
    "zones": 4,
    "maxBtu": 36000,
    "price": 723060,
    "dealer": 589160,
    "rrc": 723060,
    "stock": "уточнять"
   }
  ],
  "indoor": [
   {
    "code": "GFH(12)CA-K6DNA1B/I",
    "body": "канальный",
    "btu": 12000,
    "area": 34,
    "price": 187460,
    "dealer": 149968,
    "rrc": 187460,
    "stock": "в наличии"
   },
   {
    "code": "GFH(18)CB-K6DNA1B/I",
    "body": "канальный",
    "btu": 18000,
    "area": 51,
    "price": 200850,
    "dealer": 160680,
    "rrc": 200850,
    "stock": "в наличии"
   },
   {
    "code": "GFH(24)CC-K6DNA1B/I",
    "body": "канальный",
    "btu": 24000,
    "area": 69,
    "price": 241020,
    "dealer": 192816,
    "rrc": 241020,
    "stock": "в наличии"
   },
   {
    "code": "GKH(18)BB-K6DNA3A/I",
    "body": "кассетный",
    "btu": 18000,
    "area": 51,
    "price": 235664,
    "dealer": 192816,
    "rrc": 235664,
    "stock": "в наличии"
   },
   {
    "code": "GWH07QA-K6DNB2D/I",
    "body": "настенный",
    "btu": 7000,
    "area": 20,
    "price": 83018,
    "dealer": 66950,
    "rrc": 83018,
    "stock": "в наличии"
   },
   {
    "code": "GWH12QC-K6DNB6D/I",
    "body": "настенный",
    "btu": 12000,
    "area": 34,
    "price": 109798,
    "dealer": 88374,
    "rrc": 109798,
    "stock": "в наличии"
   },
   {
    "code": "GWH18QD-K6DNB6D/I",
    "body": "настенный",
    "btu": 18000,
    "area": 51,
    "price": 136578,
    "dealer": 109798,
    "rrc": 136578,
    "stock": "в наличии"
   },
   {
    "code": "GWH24QE-K6DNB6E/I",
    "body": "настенный",
    "btu": 24000,
    "area": 69,
    "price": 149968,
    "dealer": 120510,
    "rrc": 149968,
    "stock": "в наличии"
   }
  ]
 },
 "HAIER": {
  "outdoor": [
   {
    "code": "2U40S2SM1FA",
    "zones": 2,
    "maxBtu": 14000,
    "price": 339959,
    "dealer": 283299,
    "rrc": 354124,
    "stock": "в наличии"
   },
   {
    "code": "2U50S2SM1FA-3",
    "zones": 2,
    "maxBtu": 17000,
    "price": 409843,
    "dealer": 341536,
    "rrc": 426920,
    "stock": "в наличии"
   },
   {
    "code": "2U40S2SM2FA",
    "zones": 2,
    "maxBtu": 14000,
    "price": 339959,
    "dealer": 283299,
    "rrc": 354124,
    "stock": "в наличии"
   },
   {
    "code": "2U50S2SM2FA",
    "zones": 2,
    "maxBtu": 17000,
    "price": 409843,
    "dealer": 341536,
    "rrc": 426920,
    "stock": "в наличии"
   },
   {
    "code": "3U55S2SR5FA",
    "zones": 3,
    "maxBtu": 19000,
    "price": 501566,
    "dealer": 417972,
    "rrc": 522465,
    "stock": "в наличии"
   },
   {
    "code": "3U70S2SR5FA",
    "zones": 3,
    "maxBtu": 24000,
    "price": 554708,
    "dealer": 462257,
    "rrc": 577821,
    "stock": "в наличии"
   },
   {
    "code": "4U75S2SR5FA",
    "zones": 4,
    "maxBtu": 26000,
    "price": 630416,
    "dealer": 525347,
    "rrc": 656684,
    "stock": "в наличии"
   },
   {
    "code": "4U85S2SR5FA",
    "zones": 4,
    "maxBtu": 29000,
    "price": 644248,
    "dealer": 536873,
    "rrc": 671091,
    "stock": "в наличии"
   },
   {
    "code": "5U90S2SS5FA",
    "zones": 5,
    "maxBtu": 31000,
    "price": 672638,
    "dealer": 560532,
    "rrc": 700665,
    "stock": "в наличии"
   },
   {
    "code": "5U105S2SS5FA",
    "zones": 5,
    "maxBtu": 34000,
    "price": 754898,
    "dealer": 629082,
    "rrc": 786352,
    "stock": "в наличии"
   },
   {
    "code": "5U125S2SN1FA",
    "zones": 5,
    "maxBtu": 43000,
    "price": 954360,
    "dealer": 795300,
    "rrc": 994125,
    "stock": "в наличии"
   },
   {
    "code": "3U55S2SL5FA",
    "zones": 3,
    "maxBtu": 18000,
    "price": 512486,
    "dealer": 427072,
    "rrc": 533840,
    "stock": "в наличии"
   },
   {
    "code": "3U70S2SL5FA",
    "zones": 3,
    "maxBtu": 24000,
    "price": 565627,
    "dealer": 471356,
    "rrc": 589195,
    "stock": "в наличии"
   },
   {
    "code": "4U85S2SL5FA",
    "zones": 4,
    "maxBtu": 30000,
    "price": 666086,
    "dealer": 555072,
    "rrc": 693840,
    "stock": "в наличии"
   },
   {
    "code": "5U125S2SL1FA",
    "zones": 5,
    "maxBtu": 43000,
    "price": 974015,
    "dealer": 811679,
    "rrc": 1014599,
    "stock": "в наличии"
   }
  ],
  "indoor": [
   {
    "code": "AS20PS1HRA-M",
    "body": "настенный",
    "btu": 7000,
    "area": 20,
    "price": 90996,
    "dealer": 75830,
    "rrc": 94788,
    "stock": "в наличии"
   },
   {
    "code": "AS25PS1HRA-M",
    "body": "настенный",
    "btu": 9000,
    "area": 26,
    "price": 95363,
    "dealer": 79469,
    "rrc": 99336,
    "stock": "в наличии"
   },
   {
    "code": "AS35PS1HRA-M",
    "body": "настенный",
    "btu": 12000,
    "area": 34,
    "price": 102643,
    "dealer": 85536,
    "rrc": 106920,
    "stock": "в наличии"
   },
   {
    "code": "AS50PS1HRA-M",
    "body": "настенный",
    "btu": 17000,
    "area": 49,
    "price": 124482,
    "dealer": 103735,
    "rrc": 129669,
    "stock": "в наличии"
   },
   {
    "code": "AS70PS1HRA-M",
    "body": "настенный",
    "btu": 24000,
    "area": 69,
    "price": 165247,
    "dealer": 137706,
    "rrc": 172132,
    "stock": "в наличии"
   },
   {
    "code": "AS25S2SF3FA-W",
    "body": "настенный",
    "btu": 9000,
    "area": 26,
    "price": 126666,
    "dealer": 105555,
    "rrc": 131944,
    "stock": "в наличии"
   },
   {
    "code": "AS35S2SF3FA-W",
    "body": "настенный",
    "btu": 12000,
    "area": 34,
    "price": 145592,
    "dealer": 121327,
    "rrc": 151659,
    "stock": "в наличии"
   },
   {
    "code": "AS50S2SF3FA-W",
    "body": "настенный",
    "btu": 18000,
    "area": 51,
    "price": 200918,
    "dealer": 167432,
    "rrc": 209290,
    "stock": "в наличии"
   },
   {
    "code": "AS70S2SF3FA-W",
    "body": "настенный",
    "btu": 24000,
    "area": 69,
    "price": 309384,
    "dealer": 257820,
    "rrc": 322275,
    "stock": "в наличии"
   },
   {
    "code": "AS25S2SJ3FA-W",
    "body": "настенный",
    "btu": 9000,
    "area": 26,
    "price": 231492,
    "dealer": 192910,
    "rrc": 241138,
    "stock": "в наличии"
   },
   {
    "code": "AS35S2SJ3FA-W",
    "body": "настенный",
    "btu": 12000,
    "area": 34,
    "price": 261338,
    "dealer": 217782,
    "rrc": 272228,
    "stock": "в наличии"
   },
   {
    "code": "AS50S2SJ3FA-W",
    "body": "настенный",
    "btu": 18000,
    "area": 51,
    "price": 268619,
    "dealer": 223849,
    "rrc": 279811,
    "stock": "в наличии"
   },
   {
    "code": "AB25S2SA1FA",
    "body": "кассетный",
    "btu": 9000,
    "area": 26,
    "price": 165247,
    "dealer": 137706,
    "rrc": 172132,
    "stock": "в наличии"
   },
   {
    "code": "AB35S2SA1FA",
    "body": "кассетный",
    "btu": 12000,
    "area": 34,
    "price": 176167,
    "dealer": 146806,
    "rrc": 183508,
    "stock": "в наличии"
   },
   {
    "code": "AB50S2SA1FA",
    "body": "кассетный",
    "btu": 17000,
    "area": 49,
    "price": 203101,
    "dealer": 169251,
    "rrc": 211564,
    "stock": "в наличии"
   },
   {
    "code": "AB71S2SA1FA",
    "body": "кассетный",
    "btu": 24000,
    "area": 69,
    "price": 217661,
    "dealer": 181384,
    "rrc": 226730,
    "stock": "в наличии"
   },
   {
    "code": "AB25S2SC1FA",
    "body": "кассетный",
    "btu": 9000,
    "area": 26,
    "price": 143408,
    "dealer": 119507,
    "rrc": 149384,
    "stock": "в наличии"
   },
   {
    "code": "AB35S2SC1FA",
    "body": "кассетный",
    "btu": 12000,
    "area": 34,
    "price": 150689,
    "dealer": 125574,
    "rrc": 156968,
    "stock": "в наличии"
   },
   {
    "code": "AB50S2SC1FA",
    "body": "кассетный",
    "btu": 17000,
    "area": 49,
    "price": 154328,
    "dealer": 128607,
    "rrc": 160759,
    "stock": "в наличии"
   },
   {
    "code": "AB71S2SG1FA",
    "body": "кассетный",
    "btu": 24000,
    "area": 69,
    "price": 216205,
    "dealer": 180171,
    "rrc": 225214,
    "stock": "в наличии"
   },
   {
    "code": "AB71S2SR1FA",
    "body": "кассетный",
    "btu": 24000,
    "area": 69,
    "price": 171071,
    "dealer": 142559,
    "rrc": 178199,
    "stock": "в наличии"
   },
   {
    "code": "AB25S2SC2FA",
    "body": "кассетный",
    "btu": 9000,
    "area": 26,
    "price": 161608,
    "dealer": 134673,
    "rrc": 168341,
    "stock": "в наличии"
   },
   {
    "code": "AB35S2SC2FA",
    "body": "кассетный",
    "btu": 12000,
    "area": 34,
    "price": 163792,
    "dealer": 136493,
    "rrc": 170616,
    "stock": "в наличии"
   },
   {
    "code": "AB50S2SC2FA",
    "body": "кассетный",
    "btu": 17000,
    "area": 49,
    "price": 165976,
    "dealer": 138313,
    "rrc": 172891,
    "stock": "в наличии"
   },
   {
    "code": "AC35S2SG1FA",
    "body": "напольно-потолочный",
    "btu": 12000,
    "area": 34,
    "price": 275170,
    "dealer": 229308,
    "rrc": 286635,
    "stock": "в наличии"
   },
   {
    "code": "AC50S2SG1FA",
    "body": "напольно-потолочный",
    "btu": 17000,
    "area": 49,
    "price": 289729,
    "dealer": 241441,
    "rrc": 301801,
    "stock": "в наличии"
   },
   {
    "code": "AC71S2SG1FA",
    "body": "напольно-потолочный",
    "btu": 24000,
    "area": 69,
    "price": 322488,
    "dealer": 268740,
    "rrc": 335925,
    "stock": "в наличии"
   },
   {
    "code": "AC25S2SG2FA",
    "body": "напольно-потолочный",
    "btu": 9000,
    "area": 26,
    "price": 204558,
    "dealer": 170465,
    "rrc": 213081,
    "stock": "в наличии"
   },
   {
    "code": "AC35S2SG2FA",
    "body": "напольно-потолочный",
    "btu": 12000,
    "area": 34,
    "price": 220573,
    "dealer": 183811,
    "rrc": 229764,
    "stock": "в наличии"
   },
   {
    "code": "AC50S2SG2FA",
    "body": "напольно-потолочный",
    "btu": 17000,
    "area": 49,
    "price": 229308,
    "dealer": 191090,
    "rrc": 238862,
    "stock": "в наличии"
   },
   {
    "code": "AC71S2SG2FA",
    "body": "напольно-потолочный",
    "btu": 24000,
    "area": 69,
    "price": 247507,
    "dealer": 206256,
    "rrc": 257820,
    "stock": "в наличии"
   },
   {
    "code": "AD25S2SS1FA",
    "body": "канальный",
    "btu": 9000,
    "area": 26,
    "price": 170344,
    "dealer": 141953,
    "rrc": 177441,
    "stock": "в наличии"
   },
   {
    "code": "AD35S2SS1FA",
    "body": "канальный",
    "btu": 12000,
    "area": 34,
    "price": 173983,
    "dealer": 144986,
    "rrc": 181232,
    "stock": "в наличии"
   },
   {
    "code": "AD50S2SS1FA",
    "body": "канальный",
    "btu": 17000,
    "area": 49,
    "price": 200918,
    "dealer": 167432,
    "rrc": 209290,
    "stock": "в наличии"
   },
   {
    "code": "AD71S2SS1FA",
    "body": "канальный",
    "btu": 24000,
    "area": 69,
    "price": 224213,
    "dealer": 186844,
    "rrc": 233555,
    "stock": "в наличии"
   },
   {
    "code": "AD35S2SM3FA",
    "body": "канальный",
    "btu": 12000,
    "area": 34,
    "price": 270803,
    "dealer": 225669,
    "rrc": 282086,
    "stock": "в наличии"
   },
   {
    "code": "AD50S2SM3FA",
    "body": "канальный",
    "btu": 17000,
    "area": 49,
    "price": 295553,
    "dealer": 246294,
    "rrc": 307868,
    "stock": "в наличии"
   },
   {
    "code": "AD71S2SM3FA",
    "body": "канальный",
    "btu": 24000,
    "area": 69,
    "price": 311568,
    "dealer": 259640,
    "rrc": 324550,
    "stock": "в наличии"
   },
   {
    "code": "AD35S2SM9FA",
    "body": "канальный",
    "btu": 12000,
    "area": 34,
    "price": 185630,
    "dealer": 154692,
    "rrc": 193365,
    "stock": "в наличии"
   },
   {
    "code": "AD50S2SM9FA",
    "body": "канальный",
    "btu": 17000,
    "area": 49,
    "price": 210382,
    "dealer": 175318,
    "rrc": 219148,
    "stock": "в наличии"
   },
   {
    "code": "AD71S2SM9FA",
    "body": "канальный",
    "btu": 24000,
    "area": 69,
    "price": 231492,
    "dealer": 192910,
    "rrc": 241138,
    "stock": "в наличии"
   },
   {
    "code": "AF25S2SD1FA",
    "body": "консольный",
    "btu": 9000,
    "area": 26,
    "price": 158696,
    "dealer": 132247,
    "rrc": 165309,
    "stock": "в наличии"
   },
   {
    "code": "AF35S2SD1FA",
    "body": "консольный",
    "btu": 12000,
    "area": 34,
    "price": 159424,
    "dealer": 132853,
    "rrc": 166066,
    "stock": "в наличии"
   },
   {
    "code": "AF50S2SD1FA",
    "body": "консольный",
    "btu": 17000,
    "area": 49,
    "price": 163792,
    "dealer": 136493,
    "rrc": 170616,
    "stock": "в наличии"
   }
  ]
 },
 "DITREEX": {
  "outdoor": [
   {
    "code": "DTXM-18KD6F2/O",
    "zones": 2,
    "maxBtu": 18000,
    "price": 247200,
    "dealer": 206000,
    "rrc": 257500,
    "stock": "в наличии"
   },
   {
    "code": "DTXM-27KD6F3/O",
    "zones": 3,
    "maxBtu": 27000,
    "price": 339900,
    "dealer": 283250,
    "rrc": 354062,
    "stock": "в наличии"
   },
   {
    "code": "DTXM-32KD6F4/O",
    "zones": 4,
    "maxBtu": 32000,
    "price": 525300,
    "dealer": 437750,
    "rrc": 547188,
    "stock": "в наличии"
   }
  ],
  "indoor": [
   {
    "code": "DTXM-09K6XAC1/I",
    "body": "настенный",
    "btu": 9000,
    "area": 26,
    "price": 77250,
    "dealer": 64375,
    "rrc": 80469,
    "stock": "в наличии"
   },
   {
    "code": "DTXM-12K6XAC1/I",
    "body": "настенный",
    "btu": 12000,
    "area": 34,
    "price": 86520,
    "dealer": 72100,
    "rrc": 90125,
    "stock": "в наличии"
   },
   {
    "code": "DTXM-18K6XAC1/I",
    "body": "настенный",
    "btu": 18000,
    "area": 51,
    "price": 114330,
    "dealer": 95275,
    "rrc": 119094,
    "stock": "в наличии"
   }
  ]
 },
 "MIDEA": {
  "outdoor": [
   {
    "code": "M2OE-18HFN8-Q",
    "zones": 2,
    "maxBtu": 18000,
    "price": 395900,
    "dealer": 329900,
    "rrc": 412400,
    "stock": "в наличии"
   },
   {
    "code": "M3OG-21HFN8-Q",
    "zones": 3,
    "maxBtu": 21000,
    "price": 443900,
    "dealer": 369900,
    "rrc": 462400,
    "stock": "в наличии"
   },
   {
    "code": "M3OA-27HFN8-Q",
    "zones": 3,
    "maxBtu": 27000,
    "price": 479900,
    "dealer": 399900,
    "rrc": 499900,
    "stock": "в наличии"
   },
   {
    "code": "M4OB-36HFN8-Q",
    "zones": 4,
    "maxBtu": 36000,
    "price": 691100,
    "dealer": 575900,
    "rrc": 719900,
    "stock": "под заказ"
   },
   {
    "code": "M5OE-42HFN8-Q",
    "zones": 5,
    "maxBtu": 42000,
    "price": 803900,
    "dealer": 669900,
    "rrc": 837400,
    "stock": "под заказ"
   }
  ],
  "indoor": [
   {
    "code": "CB1-09HRFN8-I",
    "body": "настенный",
    "btu": 9000,
    "area": 25,
    "price": 107900,
    "dealer": 89900,
    "rrc": 112400,
    "stock": "в наличии"
   },
   {
    "code": "CB1-12HRFN8-I",
    "body": "настенный",
    "btu": 12000,
    "area": 35,
    "price": 113900,
    "dealer": 94900,
    "rrc": 118600,
    "stock": "под заказ"
   },
   {
    "code": "CB1-18HRFN8-I",
    "body": "настенный",
    "btu": 18000,
    "area": 50,
    "price": 143900,
    "dealer": 119900,
    "rrc": 149900,
    "stock": "в наличии"
   },
   {
    "code": "MSAX-09N8D0-C",
    "body": "настенный",
    "btu": 9000,
    "area": 25,
    "price": 86300,
    "dealer": 71900,
    "rrc": 89900,
    "stock": "под заказ"
   },
   {
    "code": "MSAX-12N8D0-C",
    "body": "настенный",
    "btu": 12000,
    "area": 35,
    "price": 105500,
    "dealer": 87900,
    "rrc": 109900,
    "stock": "в наличии"
   },
   {
    "code": "MSAX-24N8D0-C",
    "body": "настенный",
    "btu": 24000,
    "area": 65,
    "price": 166700,
    "dealer": 138900,
    "rrc": 173600,
    "stock": "под заказ"
   },
   {
    "code": "XT-12N8D6-G",
    "body": "настенный",
    "btu": 12000,
    "area": 35,
    "price": 152300,
    "dealer": 126900,
    "rrc": 158600,
    "stock": "в наличии"
   },
   {
    "code": "XT-12N8D6-BM",
    "body": "настенный",
    "btu": 12000,
    "area": 35,
    "price": 152300,
    "dealer": 126900,
    "rrc": 158600,
    "stock": "под заказ"
   },
   {
    "code": "AB-12NXD0-M",
    "body": "настенный",
    "btu": 12000,
    "area": 35,
    "price": 70700,
    "dealer": 58900,
    "rrc": 73600,
    "stock": "в наличии"
   },
   {
    "code": "MA-12N1D0",
    "body": "настенный",
    "btu": 12000,
    "area": 35,
    "price": 67100,
    "dealer": 55900,
    "rrc": 69900,
    "stock": "под заказ"
   },
   {
    "code": "MTI-12FNXD0-Q",
    "body": "канальный",
    "btu": 12000,
    "area": 35,
    "price": 171500,
    "dealer": 142900,
    "rrc": 178600,
    "stock": "под заказ"
   },
   {
    "code": "MTI-18FNXD0-Q",
    "body": "канальный",
    "btu": 18000,
    "area": 50,
    "price": 179900,
    "dealer": 149900,
    "rrc": 187400,
    "stock": "в наличии"
   }
  ]
 }
};
