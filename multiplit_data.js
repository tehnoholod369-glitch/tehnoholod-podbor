/**
 * МУЛЬТИСПЛИТЫ — Данные для калькулятора подбора кондиционеров
 * Источник: прайсы EurAsia Klimat (THAICON 30.01.2026, TCL LCAC 26.05.2026, MHI 27.04.2026)
 * Остатки: Остатки 08.06.26.xlsx (поле для THAICON, TCL, MHI)
 *
 * Структура расширяемая: добавить бренд = добавить ключ в MULTIPLIT_MODELS_DATA + строку в UI фильтра
 */

const MULTIPLIT_MODELS_DATA = {
  THAICON: [
    // ========== THAICON МУЛЬТИСПЛИТ — НАСТЕННЫЕ БЛОКИ (Комплекты с наружным) ==========
    {
      code: "RWS25-MO2U40",
      series: "MULTI COMFORT SensAIR",
      btu: 9000,
      area: 27,
      price: 395130,
      stock: "в наличии",
      brand: "THAICON",
      body: "настенный",
      type: "система",
      outdoor: { model: "TL-MO2U40-FR", power: "2.5 кВт" },
      indoor: { model: "TL-ROS25-FR" },
      specs: {
        agent: "R32",
        heating: -25,
        cooling: -15,
        features: ["инвертор", "Wi-Fi", "обогрев до −25 °C", "макс трасса 90 м"]
      }
    },
    {
      code: "RWS35-MO2U40",
      series: "MULTI COMFORT SensAIR",
      btu: 12000,
      area: 35,
      price: 425440,
      stock: "в наличии",
      brand: "THAICON",
      body: "настенный",
      type: "система",
      outdoor: { model: "TL-MO2U40-FR", power: "2.5 кВт" },
      indoor: { model: "TL-ROS35-FR" },
      specs: {
        agent: "R32",
        heating: -25,
        cooling: -15,
        features: ["инвертор", "Wi-Fi", "обогрев до −25 °C", "макс трасса 90 м"]
      }
    },
    {
      code: "RWS50-MO3U60",
      series: "MULTI COMFORT SensAIR",
      btu: 18000,
      area: 53,
      price: 486680,
      stock: "в наличии",
      brand: "THAICON",
      body: "настенный",
      type: "система",
      outdoor: { model: "TL-MO3U60-FR", power: "3.6 кВт" },
      indoor: { model: "TL-ROS50-FR" },
      specs: {
        agent: "R32",
        heating: -25,
        cooling: -15,
        features: ["инвертор", "Wi-Fi", "обогрев до −25 °C", "макс трасса 90 м"]
      }
    },
    {
      code: "RWP25-MO2U40",
      series: "MULTI COMFORT Phantom",
      btu: 9000,
      area: 27,
      price: 358260,
      stock: "в наличии",
      brand: "THAICON",
      body: "настенный",
      type: "система",
      outdoor: { model: "TL-MO2U40-FR", power: "2.5 кВт" },
      indoor: { model: "TL-ROP25-VR" },
      specs: {
        agent: "R32",
        heating: -20,
        cooling: -15,
        features: ["инвертор", "Wi-Fi", "макс трасса 90 м"]
      }
    },
    {
      code: "RWP35-MO3U60",
      series: "MULTI COMFORT Phantom",
      btu: 12000,
      area: 35,
      price: 388570,
      stock: "в наличии",
      brand: "THAICON",
      body: "настенный",
      type: "система",
      outdoor: { model: "TL-MO3U60-FR", power: "3.6 кВт" },
      indoor: { model: "TL-ROP35-VR" },
      specs: {
        agent: "R32",
        heating: -20,
        cooling: -15,
        features: ["инвертор", "Wi-Fi", "макс трасса 90 м"]
      }
    },
    {
      code: "RWC25-MO2U40",
      series: "MULTI COMFORT Comfort+",
      btu: 9000,
      area: 27,
      price: 321390,
      stock: "в наличии",
      brand: "THAICON",
      body: "настенный",
      type: "система",
      outdoor: { model: "TL-MO2U40-FR", power: "2.5 кВт" },
      indoor: { model: "TL-ROC25-VR" },
      specs: {
        agent: "R32",
        heating: -20,
        cooling: -15,
        features: ["инвертор", "Wi-Fi", "макс трасса 90 м"]
      }
    },
    {
      code: "RWC35-MO3U60",
      series: "MULTI COMFORT Comfort+",
      btu: 12000,
      area: 35,
      price: 351700,
      stock: "в наличии",
      brand: "THAICON",
      body: "настенный",
      type: "система",
      outdoor: { model: "TL-MO3U60-FR", power: "3.6 кВт" },
      indoor: { model: "TL-ROC35-VR" },
      specs: {
        agent: "R32",
        heating: -20,
        cooling: -15,
        features: ["инвертор", "Wi-Fi", "макс трасса 90 м"]
      }
    },
    // ========== THAICON МУЛЬТИСПЛИТ — КАССЕТНЫЕ БЛОКИ ==========
    {
      code: "MO2U40-TL-MC25",
      series: "MULTI COMFORT Кассетный 25",
      btu: 9000,
      area: 27,
      price: 410340,
      stock: "в наличии",
      brand: "THAICON",
      body: "кассетный",
      type: "система",
      outdoor: { model: "TL-MO2U40-FR", power: "2.5 кВт" },
      indoor: { model: "TL-MC25 + панель TMCP-01" },
      specs: {
        agent: "R32",
        heating: -15,
        cooling: -15,
        features: ["инвертор", "встраивается в потолок", "макс трасса 90 м"]
      }
    },
    {
      code: "MO3U60-TL-MC35",
      series: "MULTI COMFORT Кассетный 35",
      btu: 12000,
      area: 35,
      price: 440650,
      stock: "в наличии",
      brand: "THAICON",
      body: "кассетный",
      type: "система",
      outdoor: { model: "TL-MO3U60-FR", power: "3.6 кВт" },
      indoor: { model: "TL-MC35 + панель TMCP-01" },
      specs: {
        agent: "R32",
        heating: -15,
        cooling: -15,
        features: ["инвертор", "встраивается в потолок", "макс трасса 90 м"]
      }
    },
    {
      code: "MO4U80-TL-MC50",
      series: "MULTI COMFORT Кассетный 50",
      btu: 18000,
      area: 53,
      price: 471000,
      stock: "в наличии",
      brand: "THAICON",
      body: "кассетный",
      type: "система",
      outdoor: { model: "TL-MO4U80-FR", power: "4.8 кВт" },
      indoor: { model: "TL-MC50 + панель TMCP-01" },
      specs: {
        agent: "R32",
        heating: -15,
        cooling: -15,
        features: ["инвертор", "встраивается в потолок", "макс трасса 90 м"]
      }
    },
    // ========== THAICON МУЛЬТИСПЛИТ — КАНАЛЬНЫЕ БЛОКИ ==========
    {
      code: "MO2U40-TL-MD25",
      series: "MULTI COMFORT Канальный 25",
      btu: 9000,
      area: 27,
      price: 385920,
      stock: "в наличии",
      brand: "THAICON",
      body: "канальный",
      type: "система",
      outdoor: { model: "TL-MO2U40-FR", power: "2.5 кВт" },
      indoor: { model: "TL-MD25" },
      specs: {
        agent: "R32",
        heating: -15,
        cooling: -15,
        features: ["инвертор", "воздуховоды в стене", "макс трасса 90 м"]
      }
    },
    {
      code: "MO3U60-TL-MD35",
      series: "MULTI COMFORT Канальный 35",
      btu: 12000,
      area: 35,
      price: 416230,
      stock: "в наличии",
      brand: "THAICON",
      body: "канальный",
      type: "система",
      outdoor: { model: "TL-MO3U60-FR", power: "3.6 кВт" },
      indoor: { model: "TL-MD35" },
      specs: {
        agent: "R32",
        heating: -15,
        cooling: -15,
        features: ["инвертор", "воздуховоды в стене", "макс трасса 90 м"]
      }
    },
    {
      code: "MO4U80-TL-MD50",
      series: "MULTI COMFORT Канальный 50",
      btu: 18000,
      area: 53,
      price: 446540,
      stock: "в наличии",
      brand: "THAICON",
      body: "канальный",
      type: "система",
      outdoor: { model: "TL-MO4U80-FR", power: "4.8 кВт" },
      indoor: { model: "TL-MD50" },
      specs: {
        agent: "R32",
        heating: -15,
        cooling: -15,
        features: ["инвертор", "воздуховоды в стене", "макс трасса 90 м"]
      }
    },
  ],

  TCL_LCAC: [
    // ========== TCL LCAC — КАССЕТНЫЕ КОМПАКТНЫЕ 600×600 ==========
    {
      code: "TCC-18-compact",
      series: "LCAC INVERTER Compact Cassette 18",
      btu: 5300,
      area: 16,
      price: 370930,
      stock: "в наличии",
      brand: "TCL LCAC",
      body: "кассетный_компактный",
      type: "система",
      composition: "TCC-18CHRH/DVI(05) + TCC-18HH/DVO(05) + панель MBQ8-LCFA",
      specs: {
        agent: "R32",
        heating: -30,
        cooling: -15,
        power: "5,3 / 5,6 кВт",
        features: ["инвертор", "компактный 600×600 мм", "Wi-Fi", "обогрев до −30 °C"]
      }
    },
    {
      code: "TCC-24-compact",
      series: "LCAC INVERTER Compact Cassette 24",
      btu: 7000,
      area: 21,
      price: 401240,
      stock: "в наличии",
      brand: "TCL LCAC",
      body: "кассетный_компактный",
      type: "система",
      composition: "TCC-24CHRH/DVI(05) + TCC-24HH/DVO(05) + панель MBQ8-LCFA",
      specs: {
        agent: "R32",
        heating: -30,
        cooling: -15,
        power: "7,0 / 7,4 кВт",
        features: ["инвертор", "компактный 600×600 мм", "Wi-Fi", "обогрев до −30 °C"]
      }
    },
    // ========== TCL LCAC — КАССЕТНЫЕ ПОЛНОРАЗМЕРНЫЕ ==========
    {
      code: "TCC-36-cassette",
      series: "LCAC INVERTER Cassette 36",
      btu: 10600,
      area: 31,
      price: 456820,
      stock: "в наличии",
      brand: "TCL LCAC",
      body: "кассетный",
      type: "система",
      composition: "TCC-36CHRH/DVI(D1) + TCC-36HH/DVO(D1) + панель MBQ8-LCFA",
      specs: {
        agent: "R32",
        heating: -30,
        cooling: -15,
        power: "10,6 / 11,0 кВт",
        features: ["инвертор", "полноразмерный кассетный", "Wi-Fi", "обогрев до −30 °C"]
      }
    },
    {
      code: "TCC-48-cassette",
      series: "LCAC INVERTER Cassette 48",
      btu: 14100,
      area: 42,
      price: 507130,
      stock: "в наличии",
      brand: "TCL LCAC",
      body: "кассетный",
      type: "система",
      composition: "TCC-48CHRH/DVI(D1) + TCC-48HH/DVO(D1) + панель MBQ8-LCFA",
      specs: {
        agent: "R32",
        heating: -30,
        cooling: -15,
        power: "14,1 / 14,8 кВт",
        features: ["инвертор", "полноразмерный кассетный", "Wi-Fi", "обогрев до −30 °C"]
      }
    },
    {
      code: "TCC-60-cassette",
      series: "LCAC INVERTER Cassette 60",
      btu: 17600,
      area: 53,
      price: 557440,
      stock: "в наличии",
      brand: "TCL LCAC",
      body: "кассетный",
      type: "система",
      composition: "TCC-60CHRH/DVI(D1) + TCC-60HH/DVO(D1) + панель MBQ8-LCFA",
      specs: {
        agent: "R32",
        heating: -30,
        cooling: -15,
        power: "17,6 / 18,2 кВт",
        features: ["инвертор", "полноразмерный кассетный", "Wi-Fi", "обогрев до −30 °C"]
      }
    },
    // ========== TCL LCAC — НАПОЛЬНО-ПОТОЛОЧНЫЕ ==========
    {
      code: "TCC-18-floor-ceiling",
      series: "LCAC INVERTER Floor-Ceiling 18",
      btu: 5300,
      area: 16,
      price: 386140,
      stock: "в наличии",
      brand: "TCL LCAC",
      body: "напольно_потолочный",
      type: "система",
      composition: "TCC-18D1HWH/DVI(05) + TCC-18D2HRA/DVO(05)",
      specs: {
        agent: "R32",
        heating: -30,
        cooling: -15,
        power: "5,3 / 5,6 кВт",
        features: ["инвертор", "напольно-потолочный", "Wi-Fi", "обогрев до −30 °C"]
      }
    },
    {
      code: "TCC-24-floor-ceiling",
      series: "LCAC INVERTER Floor-Ceiling 24",
      btu: 7000,
      area: 21,
      price: 416450,
      stock: "в наличии",
      brand: "TCL LCAC",
      body: "напольно_потолочный",
      type: "система",
      composition: "TCC-24D1HWH/DVI(05) + TCC-24D2HRA/DVO(05)",
      specs: {
        agent: "R32",
        heating: -30,
        cooling: -15,
        power: "7,0 / 7,4 кВт",
        features: ["инвертор", "напольно-потолочный", "Wi-Fi", "обогрев до −30 °C"]
      }
    },
    {
      code: "TCC-36-floor-ceiling",
      series: "LCAC INVERTER Floor-Ceiling 36",
      btu: 10600,
      area: 31,
      price: 472050,
      stock: "в наличии",
      brand: "TCL LCAC",
      body: "напольно_потолочный",
      type: "система",
      composition: "TCC-36D1HWH/DVI(D1) + TCC-36D2HRA/DVO(D1)",
      specs: {
        agent: "R32",
        heating: -30,
        cooling: -15,
        power: "10,6 / 11,0 кВт",
        features: ["инвертор", "напольно-потолочный", "Wi-Fi", "обогрев до −30 °C"]
      }
    },
    {
      code: "TCC-48-floor-ceiling",
      series: "LCAC INVERTER Floor-Ceiling 48",
      btu: 14100,
      area: 42,
      price: 522360,
      stock: "в наличии",
      brand: "TCL LCAC",
      body: "напольно_потолочный",
      type: "система",
      composition: "TCC-48D1HWH/DVI(D1) + TCC-48D2HRA/DVO(D1)",
      specs: {
        agent: "R32",
        heating: -30,
        cooling: -15,
        power: "14,1 / 14,8 кВт",
        features: ["инвертор", "напольно-потолочный", "Wi-Fi", "обогрев до −30 °C"]
      }
    },
    {
      code: "TCC-60-floor-ceiling",
      series: "LCAC INVERTER Floor-Ceiling 60",
      btu: 17600,
      area: 53,
      price: 572650,
      stock: "в наличии",
      brand: "TCL LCAC",
      body: "напольно_потолочный",
      type: "система",
      composition: "TCC-60D1HWH/DVI(D1) + TCC-60D2HRA/DVO(D1)",
      specs: {
        agent: "R32",
        heating: -30,
        cooling: -15,
        power: "17,6 / 18,2 кВт",
        features: ["инвертор", "напольно-потолочный", "Wi-Fi", "обогрев до −30 °C"]
      }
    },
    // ========== TCL LCAC — КАНАЛЬНЫЕ ==========
    {
      code: "TCC-18-duct",
      series: "LCAC INVERTER Duct 18",
      btu: 5300,
      area: 16,
      price: 361240,
      stock: "в наличии",
      brand: "TCL LCAC",
      body: "канальный",
      type: "система",
      composition: "TCC-18CHRA/DVI(05) + TCC-18HA/DVO(05)",
      specs: {
        agent: "R32",
        heating: -30,
        cooling: -15,
        power: "5,3 / 5,6 кВт",
        features: ["инвертор", "канальный", "воздуховоды в стене", "обогрев до −30 °C"]
      }
    },
    {
      code: "TCC-24-duct",
      series: "LCAC INVERTER Duct 24",
      btu: 7000,
      area: 21,
      price: 391550,
      stock: "в наличии",
      brand: "TCL LCAC",
      body: "канальный",
      type: "система",
      composition: "TCC-24CHRA/DVI(05) + TCC-24HA/DVO(05)",
      specs: {
        agent: "R32",
        heating: -30,
        cooling: -15,
        power: "7,0 / 7,4 кВт",
        features: ["инвертор", "канальный", "воздуховоды в стене", "обогрев до −30 °C"]
      }
    },
    {
      code: "TCC-36-duct",
      series: "LCAC INVERTER Duct 36",
      btu: 10600,
      area: 31,
      price: 447140,
      stock: "в наличии",
      brand: "TCL LCAC",
      body: "канальный",
      type: "система",
      composition: "TCC-36CHRA/DVI(D1) + TCC-36HA/DVO(D1)",
      specs: {
        agent: "R32",
        heating: -30,
        cooling: -15,
        power: "10,6 / 11,0 кВт",
        features: ["инвертор", "канальный", "воздуховоды в стене", "обогрев до −30 °C"]
      }
    },
    {
      code: "TCC-48-duct",
      series: "LCAC INVERTER Duct 48",
      btu: 14100,
      area: 42,
      price: 497450,
      stock: "в наличии",
      brand: "TCL LCAC",
      body: "канальный",
      type: "система",
      composition: "TCC-48CHRA/DVI(D1) + TCC-48HA/DVO(D1)",
      specs: {
        agent: "R32",
        heating: -30,
        cooling: -15,
        power: "14,1 / 14,8 кВт",
        features: ["инвертор", "канальный", "воздуховоды в стене", "обогрев до −30 °C"]
      }
    },
    {
      code: "TCC-60-duct",
      series: "LCAC INVERTER Duct 60",
      btu: 17600,
      area: 53,
      price: 547760,
      stock: "в наличии",
      brand: "TCL LCAC",
      body: "канальный",
      type: "система",
      composition: "TCC-60CHRA/DVI(D1) + TCC-60HA/DVO(D1)",
      specs: {
        agent: "R32",
        heating: -30,
        cooling: -15,
        power: "17,6 / 18,2 кВт",
        features: ["инвертор", "канальный", "воздуховоды в стене", "обогрев до −30 °C"]
      }
    },
    // ========== TCL LCAC — ON/OFF ВЕРСИИ (R410A) ==========
    {
      code: "TCC-18-onoff",
      series: "LCAC ON/OFF Cassette 18",
      btu: 5300,
      area: 16,
      price: 293200,
      stock: "уточнять",
      brand: "TCL LCAC",
      body: "кассетный",
      type: "система",
      composition: "TCC-18CHRA/OVI(05) + TCC-18HA/OVO(05) + панель MBQ8-LCFA",
      specs: {
        agent: "R410A",
        heating: -15,
        cooling: -15,
        power: "5,3 / 5,6 кВт",
        features: ["on/off", "кассетный", "Wi-Fi", "стандартная версия"]
      }
    },
    {
      code: "TCC-36-onoff",
      series: "LCAC ON/OFF Cassette 36",
      btu: 10600,
      area: 31,
      price: 368530,
      stock: "уточнять",
      brand: "TCL LCAC",
      body: "кассетный",
      type: "система",
      composition: "TCC-36CHRA/OVI(D1) + TCC-36HA/OVO(D1) + панель MBQ8-LCFA",
      specs: {
        agent: "R410A",
        heating: -15,
        cooling: -15,
        power: "10,6 / 11,0 кВт",
        features: ["on/off", "кассетный", "Wi-Fi", "стандартная версия"]
      }
    },
  ],

  MHI: [
    // ========== MITSUBISHI HEAVY INDUSTRIES — НАСТЕННЫЕ ==========
    {
      code: "SRK-ZTL-W20",
      series: "STANDARD PLUS SRK-ZTL-W 20",
      btu: 6800,
      area: 20,
      price: 187430,
      stock: "в наличии",
      brand: "MHI",
      body: "настенный",
      type: "система",
      composition: "SRK-ZTL-W20 + SRC-ZTL-W20",
      specs: {
        agent: "R32",
        heating: -15,
        cooling: -15,
        power: "2,0 кВт",
        noise: "19 дБ(А)",
        energyClass: "A++/A+",
        features: ["инвертор", "Wi-Fi", "SEER 6.8", "минимальный шум"]
      }
    },
    {
      code: "SRK-ZTL-W25",
      series: "STANDARD PLUS SRK-ZTL-W 25",
      btu: 8500,
      area: 25,
      price: 198750,
      stock: "в наличии",
      brand: "MHI",
      body: "настенный",
      type: "система",
      composition: "SRK-ZTL-W25 + SRC-ZTL-W25",
      specs: {
        agent: "R32",
        heating: -15,
        cooling: -15,
        power: "2,5 кВт",
        noise: "21 дБ(А)",
        energyClass: "A++/A+",
        features: ["инвертор", "Wi-Fi", "SEER 6.8"]
      }
    },
    {
      code: "SRK-ZTL-W35",
      series: "STANDARD PLUS SRK-ZTL-W 35",
      btu: 11900,
      area: 35,
      price: 221360,
      stock: "в наличии",
      brand: "MHI",
      body: "настенный",
      type: "система",
      composition: "SRK-ZTL-W35 + SRC-ZTL-W35",
      specs: {
        agent: "R32",
        heating: -15,
        cooling: -15,
        power: "3,5 кВт",
        noise: "23 дБ(А)",
        energyClass: "A++/A+",
        features: ["инвертор", "Wi-Fi", "SEER 6.8"]
      }
    },
    {
      code: "SRK-ZTL-W50",
      series: "STANDARD PLUS SRK-ZTL-W 50",
      btu: 17000,
      area: 50,
      price: 243970,
      stock: "в наличии",
      brand: "MHI",
      body: "настенный",
      type: "система",
      composition: "SRK-ZTL-W50 + SRC-ZTL-W50",
      specs: {
        agent: "R32",
        heating: -15,
        cooling: -15,
        power: "5,0 кВт",
        noise: "25 дБ(А)",
        energyClass: "A++/A+",
        features: ["инвертор", "Wi-Fi", "SEER 6.8"]
      }
    },
    {
      code: "SRK-ZTL-W63",
      series: "STANDARD PLUS SRK-ZTL-W 63",
      btu: 21400,
      area: 63,
      price: 266580,
      stock: "в наличии",
      brand: "MHI",
      body: "настенный",
      type: "система",
      composition: "SRK-ZTL-W63 + SRC-ZTL-W63",
      specs: {
        agent: "R32",
        heating: -15,
        cooling: -15,
        power: "6,3 кВт",
        noise: "26 дБ(А)",
        energyClass: "A++/A++",
        features: ["инвертор", "Wi-Fi", "SEER 6.8", "повышенная мощность"]
      }
    },
    {
      code: "SRK-ZTL-W71",
      series: "STANDARD PLUS SRK-ZTL-W 71",
      btu: 24100,
      area: 71,
      price: 288190,
      stock: "в наличии",
      brand: "MHI",
      body: "настенный",
      type: "система",
      composition: "SRK-ZTL-W71 + SRC-ZTL-W71",
      specs: {
        agent: "R32",
        heating: -15,
        cooling: -15,
        power: "7,1 кВт",
        noise: "27 дБ(А)",
        energyClass: "A++/A++",
        features: ["инвертор", "Wi-Fi", "SEER 6.8", "максимальная мощность"]
      }
    },
  ]
};

// Плоский массив всех мультисплит моделей (для легкого поиска/фильтрации)
const MULTIPLIT_MODELS = [
  ...MULTIPLIT_MODELS_DATA.THAICON,
  ...MULTIPLIT_MODELS_DATA.TCL_LCAC,
  ...MULTIPLIT_MODELS_DATA.MHI
];

/**
 * Типы мультисплит систем (используется для фильтрации и отображения в UI)
 */
const MULTIPLIT_TYPES = {
  "настенный": "Настенный мультисплит",
  "кассетный": "Кассетный (встраивается в потолок)",
  "кассетный_компактный": "Кассетный компактный 600×600",
  "канальный": "Канальный (воздуховоды)",
  "напольно_потолочный": "Напольно-потолочный"
};

// Описание брендов для информационных целей
const MULTIPLIT_BRANDS_INFO = {
  THAICON: {
    supplier: "EurAsia Klimat (ezk.kz)",
    priceDate: "30.01.2026",
    warranty: "36 месяцев",
    notes: "Собственная марка, OEM-партнёр TCL Air Conditioner Co. LTD"
  },
  TCL_LCAC: {
    supplier: "EurAsia Klimat (ezk.kz)",
    priceDate: "26.05.2026",
    warranty: "36 месяцев",
    notes: "Полупромышленные системы кондиционирования"
  },
  MHI: {
    supplier: "EurAsia Klimat (ezk.kz)",
    priceDate: "27.04.2026",
    warranty: "36 месяцев",
    notes: "Mitsubishi Heavy Industries — японский производитель"
  }
};
