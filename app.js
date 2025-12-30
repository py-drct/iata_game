
const embeddedAirlines = [
  {
    "name": "American Airlines",
    "iata": "AA"
  },
  {
    "name": "Air Canada",
    "iata": "AC"
  },
  {
    "name": "Air France",
    "iata": "AF"
  },
  {
    "name": "Air India",
    "iata": "AI"
  },
  {
    "name": "Aeromexico",
    "iata": "AM"
  },
  {
    "name": "Aerolineas Argentinas",
    "iata": "AR"
  },
  {
    "name": "Alaska Airlines",
    "iata": "AS"
  },
  {
    "name": "Royal Air Maroc",
    "iata": "AT"
  },
  {
    "name": "Finnair",
    "iata": "AY"
  },
  {
    "name": "ITA Airways",
    "iata": "AZ"
  },
  {
    "name": "British Airways",
    "iata": "BA"
  },
  {
    "name": "Flybe",
    "iata": "BE"
  },
  {
    "name": "Biman Bangladesh Airlines",
    "iata": "BG"
  },
  {
    "name": "Royal Brunei Airlines",
    "iata": "BI"
  },
  {
    "name": "Okay Airways",
    "iata": "BK"
  },
  {
    "name": "EVA Air",
    "iata": "BR"
  },
  {
    "name": "Air Baltic",
    "iata": "BT"
  },
  {
    "name": "Caribbean Airlines",
    "iata": "BW"
  },
  {
    "name": "Air China",
    "iata": "CA"
  },
  {
    "name": "China Airlines",
    "iata": "CI"
  },
  {
    "name": "Copa Airlines",
    "iata": "CM"
  },
  {
    "name": "Cathay Pacific",
    "iata": "CX"
  },
  {
    "name": "China Southern Airlines",
    "iata": "CZ"
  },
  {
    "name": "Delta Air Lines",
    "iata": "DL"
  },
  {
    "name": "easyJet Switzerland",
    "iata": "DS"
  },
  {
    "name": "TAAG Angola Airlines",
    "iata": "DT"
  },
  {
    "name": "Norwegian Air Shuttle",
    "iata": "DY"
  },
  {
    "name": "SCAT Airlines",
    "iata": "DV"
  },
  {
    "name": "Emirates",
    "iata": "EK"
  },
  {
    "name": "Ethiopian Airlines",
    "iata": "ET"
  },
  {
    "name": "Etihad Airways",
    "iata": "EY"
  },
  {
    "name": "Bulgaria Air",
    "iata": "FB"
  },
  {
    "name": "Thai AirAsia",
    "iata": "FD"
  },
  {
    "name": "Icelandair",
    "iata": "FI"
  },
  {
    "name": "Fiji Airways",
    "iata": "FJ"
  },
  {
    "name": "Shanghai Airlines",
    "iata": "FM"
  },
  {
    "name": "Flydubai",
    "iata": "FZ"
  },
  {
    "name": "Garuda Indonesia",
    "iata": "GA"
  },
  {
    "name": "Gulf Air",
    "iata": "GF"
  },
  {
    "name": "Sky Express",
    "iata": "GQ"
  },
  {
    "name": "Tianjin Airlines",
    "iata": "GS"
  },
  {
    "name": "Air Guilin",
    "iata": "GT"
  },
  {
    "name": "Air Rarotonga",
    "iata": "GZ"
  },
  {
    "name": "Hawaiian Airlines",
    "iata": "HA"
  },
  {
    "name": "Harbour Air",
    "iata": "HB"
  },
  {
    "name": "Juneyao Air",
    "iata": "HO"
  },
  {
    "name": "America West Airlines",
    "iata": "HP"
  },
  {
    "name": "Hahn Air",
    "iata": "HR"
  },
  {
    "name": "Hainan Airlines",
    "iata": "HU"
  },
  {
    "name": "Hong Kong Airlines",
    "iata": "HX"
  },
  {
    "name": "Uzbekistan Airways",
    "iata": "HY"
  },
  {
    "name": "Aurora Airlines",
    "iata": "HZ"
  },
  {
    "name": "Iberia",
    "iata": "IB"
  },
  {
    "name": "Air Italy",
    "iata": "IG"
  },
  {
    "name": "Yemenia",
    "iata": "IY"
  },
  {
    "name": "Capital Airlines",
    "iata": "JD"
  },
  {
    "name": "Jet Asia Airways",
    "iata": "JF"
  },
  {
    "name": "LATAM Brasil",
    "iata": "JJ"
  },
  {
    "name": "Japan Airlines",
    "iata": "JL"
  },
  {
    "name": "Air Jamaica",
    "iata": "JM"
  },
  {
    "name": "Adria Airways",
    "iata": "JP"
  },
  {
    "name": "Cathay Dragon",
    "iata": "KA"
  },
  {
    "name": "Air Astana",
    "iata": "KC"
  },
  {
    "name": "Korean Air",
    "iata": "KE"
  },
  {
    "name": "Blue1",
    "iata": "KF"
  },
  {
    "name": "AtlasGlobal",
    "iata": "KK"
  },
  {
    "name": "KLM",
    "iata": "KL"
  },
  {
    "name": "Air Malta",
    "iata": "KM"
  },
  {
    "name": "ASKY Airlines",
    "iata": "KP"
  },
  {
    "name": "Kenya Airways",
    "iata": "KQ"
  },
  {
    "name": "Kuwait Airways",
    "iata": "KU"
  },
  {
    "name": "Cayman Airways",
    "iata": "KX"
  },
  {
    "name": "Nippon Cargo Airlines",
    "iata": "KZ"
  },
  {
    "name": "LATAM Airlines",
    "iata": "LA"
  },
  {
    "name": "Lloyd Aéreo Boliviano",
    "iata": "LB"
  },
  {
    "name": "Luxair",
    "iata": "LG"
  },
  {
    "name": "LIAT",
    "iata": "LI"
  },
  {
    "name": "Miami Air International",
    "iata": "LL"
  },
  {
    "name": "Libyan Wings",
    "iata": "LW"
  },
  {
    "name": "LOT Polish Airlines",
    "iata": "LO"
  },
  {
    "name": "LATAM Peru",
    "iata": "LP"
  },
  {
    "name": "Avianca Costa Rica",
    "iata": "LR"
  },
  {
    "name": "Jet2.com",
    "iata": "LS"
  },
  {
    "name": "SWISS",
    "iata": "LX"
  },
  {
    "name": "El Al",
    "iata": "LY"
  },
  {
    "name": "Bulgaria Air Charter",
    "iata": "LZ"
  },
  {
    "name": "Malev Hungarian Airlines",
    "iata": "MA"
  },
  {
    "name": "MNG Airlines",
    "iata": "MB"
  },
  {
    "name": "Middle East Airlines",
    "iata": "ME"
  },
  {
    "name": "XiamenAir",
    "iata": "MF"
  },
  {
    "name": "Malaysia Airlines",
    "iata": "MH"
  },
  {
    "name": "SilkAir",
    "iata": "MI"
  },
  {
    "name": "Air Mauritius",
    "iata": "MK"
  },
  {
    "name": "Comair",
    "iata": "MN"
  },
  {
    "name": "Martinair",
    "iata": "MP"
  },
  {
    "name": "Envoy Air",
    "iata": "MQ"
  },
  {
    "name": "EgyptAir",
    "iata": "MS"
  },
  {
    "name": "Thomas Cook Airlines",
    "iata": "MT"
  },
  {
    "name": "China Eastern Airlines",
    "iata": "MU"
  },
  {
    "name": "Mokulele Airlines",
    "iata": "MW"
  },
  {
    "name": "Mexicana de Aviación",
    "iata": "MX"
  },
  {
    "name": "MASwings",
    "iata": "MY"
  },
  {
    "name": "Merpati Nusantara Airlines",
    "iata": "MZ"
  },
  {
    "name": "Air Vanuatu",
    "iata": "NF"
  },
  {
    "name": "Lauda",
    "iata": "NG"
  },
  {
    "name": "All Nippon Airways",
    "iata": "NH"
  },
  {
    "name": "Spirit Airlines",
    "iata": "NK"
  },
  {
    "name": "VIM Airlines",
    "iata": "NN"
  },
  {
    "name": "Neos",
    "iata": "NO"
  },
  {
    "name": "Nile Air",
    "iata": "NP"
  },
  {
    "name": "Air Japan",
    "iata": "NQ"
  },
  {
    "name": "Binter Canarias",
    "iata": "NT"
  },
  {
    "name": "Japan Transocean Air",
    "iata": "NU"
  },
  {
    "name": "Northwest Airlines",
    "iata": "NW"
  },
  {
    "name": "Air Macau",
    "iata": "NX"
  },
  {
    "name": "Air Iceland Connect",
    "iata": "NY"
  },
  {
    "name": "Olympic Air",
    "iata": "OA"
  },
  {
    "name": "Boliviana de Aviación",
    "iata": "OB"
  },
  {
    "name": "Batik Air Malaysia",
    "iata": "OD"
  },
  {
    "name": "Laudamotion",
    "iata": "OE"
  },
  {
    "name": "Czech Airlines",
    "iata": "OK"
  },
  {
    "name": "MIAT Mongolian Airlines",
    "iata": "OM"
  },
  {
    "name": "SkyWest Airlines",
    "iata": "OO"
  },
  {
    "name": "TUI fly Netherlands",
    "iata": "OR"
  },
  {
    "name": "Austrian Airlines",
    "iata": "OS"
  },
  {
    "name": "Croatia Airlines",
    "iata": "OU"
  },
  {
    "name": "SalamAir",
    "iata": "OV"
  },
  {
    "name": "Andes Líneas Aéreas",
    "iata": "OY"
  },
  {
    "name": "Asiana Airlines",
    "iata": "OZ"
  },
  {
    "name": "Airblue",
    "iata": "PA"
  },
  {
    "name": "PAL Airlines",
    "iata": "PB"
  },
  {
    "name": "Pegasus Airlines",
    "iata": "PC"
  },
  {
    "name": "Porter Airlines",
    "iata": "PD"
  },
  {
    "name": "Air Europe Perú",
    "iata": "PE"
  },
  {
    "name": "Bangkok Airways",
    "iata": "PG"
  },
  {
    "name": "Transavia Denmark",
    "iata": "PH"
  },
  {
    "name": "Air Saint-Pierre",
    "iata": "PJ"
  },
  {
    "name": "Pakistan International Airlines",
    "iata": "PK"
  },
  {
    "name": "West Air",
    "iata": "PN"
  },
  {
    "name": "SkyUp Airlines",
    "iata": "PQ"
  },
  {
    "name": "Philippine Airlines",
    "iata": "PR"
  },
  {
    "name": "Ukraine International Airlines",
    "iata": "PS"
  },
  {
    "name": "Red Jet Canada",
    "iata": "PT"
  },
  {
    "name": "Precision Air",
    "iata": "PW"
  },
  {
    "name": "Air Niugini",
    "iata": "PX"
  },
  {
    "name": "Surinam Airways",
    "iata": "PY"
  },
  {
    "name": "LATAM Paraguay",
    "iata": "PZ"
  },
  {
    "name": "Qantas",
    "iata": "QF"
  },
  {
    "name": "Bamboo Airways",
    "iata": "QH"
  },
  {
    "name": "Jazz Aviation",
    "iata": "QK"
  },
  {
    "name": "LASER Airlines",
    "iata": "QL"
  },
  {
    "name": "Air Malawi",
    "iata": "QM"
  },
  {
    "name": "Air Armenia",
    "iata": "QN"
  },
  {
    "name": "Origin Pacific Airways",
    "iata": "QO"
  },
  {
    "name": "Alliance Airlines",
    "iata": "QQ"
  },
  {
    "name": "Smartwings",
    "iata": "QS"
  },
  {
    "name": "Horizon Air",
    "iata": "QX"
  },
  {
    "name": "ASL Airlines Belgium",
    "iata": "QY"
  },
  {
    "name": "Indonesia AirAsia",
    "iata": "QZ"
  },
  {
    "name": "Nepal Airlines",
    "iata": "RA"
  },
  {
    "name": "Atlantic Airways",
    "iata": "RC"
  },
  {
    "name": "Royal Jordanian",
    "iata": "RJ"
  },
  {
    "name": "Ryanair UK",
    "iata": "RK"
  },
  {
    "name": "Royal Falcon",
    "iata": "RL"
  },
  {
    "name": "Air Moldova",
    "iata": "RM"
  },
  {
    "name": "Kam Air",
    "iata": "RQ"
  },
  {
    "name": "Air Seoul",
    "iata": "RS"
  },
  {
    "name": "UVT Aero",
    "iata": "RT"
  },
  {
    "name": "AirBridgeCargo Airlines",
    "iata": "RU"
  },
  {
    "name": "Air Canada Rouge",
    "iata": "RV"
  },
  {
    "name": "Republic Airways",
    "iata": "RW"
  },
  {
    "name": "Regent Airways",
    "iata": "RX"
  },
  {
    "name": "SANSA Airlines",
    "iata": "RZ"
  },
  {
    "name": "South African Airways",
    "iata": "SA"
  },
  {
    "name": "Aircalin",
    "iata": "SB"
  },
  {
    "name": "Shandong Airlines",
    "iata": "SC"
  },
  {
    "name": "Sudan Airways",
    "iata": "SD"
  },
  {
    "name": "XL Airways France",
    "iata": "SE"
  },
  {
    "name": "SpiceJet",
    "iata": "SG"
  },
  {
    "name": "Sharp Airlines",
    "iata": "SH"
  },
  {
    "name": "Blue Islands",
    "iata": "SI"
  },
  {
    "name": "Sriwijaya Air",
    "iata": "SJ"
  },
  {
    "name": "Scandinavian Airlines",
    "iata": "SK"
  },
  {
    "name": "Thai Lion Air",
    "iata": "SL"
  },
  {
    "name": "Air Cairo",
    "iata": "SM"
  },
  {
    "name": "Brussels Airlines",
    "iata": "SN"
  },
  {
    "name": "Star Air",
    "iata": "SO"
  },
  {
    "name": "SATA Air Açores",
    "iata": "SP"
  },
  {
    "name": "Singapore Airlines",
    "iata": "SQ"
  },
  {
    "name": "Swissair",
    "iata": "SR"
  },
  {
    "name": "Corsair International",
    "iata": "SS"
  },
  {
    "name": "Aeroflot",
    "iata": "SU"
  },
  {
    "name": "Saudia",
    "iata": "SV"
  },
  {
    "name": "Air Namibia",
    "iata": "SW"
  },
  {
    "name": "SkyWork Airlines",
    "iata": "SX"
  },
  {
    "name": "Sun Country Airlines",
    "iata": "SY"
  },
  {
    "name": "Somon Air",
    "iata": "SZ"
  },
  {
    "name": "TACA Airlines",
    "iata": "TA"
  },
  {
    "name": "TUI fly Belgium",
    "iata": "TB"
  },
  {
    "name": "Air Tanzania",
    "iata": "TC"
  },
  {
    "name": "Atlant-Soyuz Airlines",
    "iata": "TD"
  },
  {
    "name": "FlyLal",
    "iata": "TE"
  },
  {
    "name": "Braathens Regional Airlines",
    "iata": "TF"
  },
  {
    "name": "Thai Airways",
    "iata": "TG"
  },
  {
    "name": "Transavia Holland",
    "iata": "TH"
  },
  {
    "name": "Tailwind Airlines",
    "iata": "TI"
  },
  {
    "name": "Turkish Airlines",
    "iata": "TK"
  },
  {
    "name": "Airnorth",
    "iata": "TL"
  },
  {
    "name": "LAM Mozambique Airlines",
    "iata": "TM"
  },
  {
    "name": "Air Tahiti Nui",
    "iata": "TN"
  },
  {
    "name": "Transavia France",
    "iata": "TO"
  },
  {
    "name": "TAP Air Portugal",
    "iata": "TP"
  },
  {
    "name": "Tandem Aero",
    "iata": "TQ"
  },
  {
    "name": "Scoot",
    "iata": "TR"
  },
  {
    "name": "Air Transat",
    "iata": "TS"
  },
  {
    "name": "Tigerair Australia",
    "iata": "TT"
  },
  {
    "name": "Tunisair",
    "iata": "TU"
  },
  {
    "name": "Tibet Airlines",
    "iata": "TV"
  },
  {
    "name": "T'way Air",
    "iata": "TW"
  },
  {
    "name": "Air Caraïbes",
    "iata": "TX"
  },
  {
    "name": "Air Calédonie",
    "iata": "TY"
  },
  {
    "name": "Tsaradia",
    "iata": "TZ"
  },
  {
    "name": "United Airlines",
    "iata": "UA"
  },
  {
    "name": "Myanmar National Airlines",
    "iata": "UB"
  },
  {
    "name": "LATAM Cargo Chile",
    "iata": "UC"
  },
  {
    "name": "Hex'Air",
    "iata": "UD"
  },
  {
    "name": "Tunisair Express",
    "iata": "UG"
  },
  {
    "name": "Vistara",
    "iata": "UK"
  },
  {
    "name": "SriLankan Airlines",
    "iata": "UL"
  },
  {
    "name": "Air Zimbabwe",
    "iata": "UM"
  },
  {
    "name": "Transaero Airlines",
    "iata": "UN"
  },
  {
    "name": "HK Express",
    "iata": "UO"
  },
  {
    "name": "Bahamasair",
    "iata": "UP"
  },
  {
    "name": "Uganda Airlines",
    "iata": "UR"
  },
  {
    "name": "US Airways",
    "iata": "US"
  },
  {
    "name": "UTair Aviation",
    "iata": "UT"
  },
  {
    "name": "Air Europa",
    "iata": "UX"
  },
  {
    "name": "Camair-Co",
    "iata": "UY"
  },
  {
    "name": "Buraq Air",
    "iata": "UZ"
  },
  {
    "name": "Virgin Australia",
    "iata": "VA"
  },
  {
    "name": "VivaAerobus",
    "iata": "VB"
  },
  {
    "name": "Voyageur Airways",
    "iata": "VC"
  },
  {
    "name": "EasyFly",
    "iata": "VE"
  },
  {
    "name": "Valuair",
    "iata": "VF"
  },
  {
    "name": "VLM Airlines",
    "iata": "VG"
  },
  {
    "name": "Volga-Dnepr Airlines",
    "iata": "VI"
  },
  {
    "name": "VietJet Air",
    "iata": "VJ"
  },
  {
    "name": "Level",
    "iata": "VK"
  },
  {
    "name": "Med-View Airline",
    "iata": "VL"
  },
  {
    "name": "African Express Airways",
    "iata": "VM"
  },
  {
    "name": "Vietnam Airlines",
    "iata": "VN"
  },
  {
    "name": "Tyrolean Airways",
    "iata": "VO"
  },
  {
    "name": "Novoair",
    "iata": "VQ"
  },
  {
    "name": "Cabo Verde Airlines",
    "iata": "VR"
  },
  {
    "name": "Virgin Atlantic",
    "iata": "VS"
  },
  {
    "name": "Air Tahiti",
    "iata": "VT"
  },
  {
    "name": "Air Ivoire",
    "iata": "VU"
  },
  {
    "name": "Aerosvit Airlines",
    "iata": "VV"
  },
  {
    "name": "Aeromar",
    "iata": "VW"
  },
  {
    "name": "Virgin America",
    "iata": "VX"
  },
  {
    "name": "Vueling",
    "iata": "VY"
  },
  {
    "name": "KLM Cityhopper",
    "iata": "WA"
  },
  {
    "name": "RwandAir",
    "iata": "WB"
  },
  {
    "name": "Widerøe",
    "iata": "WF"
  },
  {
    "name": "Sunwing Airlines",
    "iata": "WG"
  },
  {
    "name": "China Northwest Airlines",
    "iata": "WH"
  },
  {
    "name": "Trade Air",
    "iata": "WI"
  },
  {
    "name": "Air Labrador",
    "iata": "WJ"
  },
  {
    "name": "Edelweiss Air",
    "iata": "WK"
  },
  {
    "name": "Aerolíneas Sosa",
    "iata": "WL"
  },
  {
    "name": "Winair",
    "iata": "WM"
  },
  {
    "name": "Southwest Airlines",
    "iata": "WN"
  },
  {
    "name": "Swoop",
    "iata": "WO"
  },
  {
    "name": "Island Air",
    "iata": "WP"
  },
  {
    "name": "Swift Air",
    "iata": "WQ"
  },
  {
    "name": "WestJet Encore",
    "iata": "WR"
  },
  {
    "name": "WestJet",
    "iata": "WS"
  },
  {
    "name": "Swiftair",
    "iata": "WT"
  },
  {
    "name": "Wuhan Airlines",
    "iata": "WU"
  },
  {
    "name": "Caribbean Sun Airlines",
    "iata": "WV"
  },
  {
    "name": "WOW Air",
    "iata": "WW"
  },
  {
    "name": "CityJet",
    "iata": "WX"
  },
  {
    "name": "Oman Air",
    "iata": "WY"
  },
  {
    "name": "Red Wings Airlines",
    "iata": "WZ"
  },
  {
    "name": "Corendon Airlines",
    "iata": "XC"
  },
  {
    "name": "ExpressJet Airlines",
    "iata": "XE"
  },
  {
    "name": "Vladivostok Air",
    "iata": "XF"
  },
  {
    "name": "SunExpress Deutschland",
    "iata": "XG"
  },
  {
    "name": "Australian airExpress",
    "iata": "XM"
  },
  {
    "name": "Corendon Airlines Europe",
    "iata": "XR"
  },
  {
    "name": "Indonesia AirAsia X",
    "iata": "XT"
  },
  {
    "name": "NokScoot",
    "iata": "XW"
  },
  {
    "name": "Flynas",
    "iata": "XY"
  },
  {
    "name": "South African Express",
    "iata": "XZ"
  },
  {
    "name": "Yamal Airlines",
    "iata": "YC"
  },
  {
    "name": "Asian Wings Airways",
    "iata": "YJ"
  },
  {
    "name": "Avia Traffic Company",
    "iata": "YK"
  },
  {
    "name": "Air Montenegro",
    "iata": "YM"
  },
  {
    "name": "Air Creebec",
    "iata": "YN"
  },
  {
    "name": "Heli Air Monaco",
    "iata": "YO"
  },
  {
    "name": "Perimeter Aviation",
    "iata": "YP"
  },
  {
    "name": "Polet Airlines",
    "iata": "YQ"
  },
  {
    "name": "Euroatlantic Airways",
    "iata": "YU"
  },
  {
    "name": "Mesa Airlines",
    "iata": "YV"
  },
  {
    "name": "Air Nostrum",
    "iata": "YW"
  },
  {
    "name": "Republic Airways Holdings",
    "iata": "YX"
  },
  {
    "name": "Bearskin Airlines",
    "iata": "YZ"
  },
  {
    "name": "Skywings Asia Airlines",
    "iata": "ZA"
  },
  {
    "name": "Monarch Airlines",
    "iata": "ZB"
  },
  {
    "name": "Ewa Air",
    "iata": "ZD"
  },
  {
    "name": "Eastar Jet",
    "iata": "ZE"
  },
  {
    "name": "Azur Air",
    "iata": "ZF"
  },
  {
    "name": "Zipair Tokyo",
    "iata": "ZG"
  },
  {
    "name": "Shenzhen Airlines",
    "iata": "ZH"
  },
  {
    "name": "Aigle Azur",
    "iata": "ZI"
  },
  {
    "name": "Great Lakes Airlines",
    "iata": "ZK"
  },
  {
    "name": "Regional Express",
    "iata": "ZL"
  },
  {
    "name": "Nesma Airlines",
    "iata": "ZN"
  },
  {
    "name": "Amaszonas Paraguay",
    "iata": "ZP"
  },
  {
    "name": "Aviacon Zitotrans",
    "iata": "ZR"
  },
  {
    "name": "Titan Airways",
    "iata": "ZT"
  },
  {
    "name": "Helios Airways",
    "iata": "ZU"
  },
  {
    "name": "V Air",
    "iata": "ZV"
  },
  {
    "name": "Air Wisconsin",
    "iata": "ZW"
  },
  {
    "name": "Air Canada Jazz",
    "iata": "ZX"
  },
  {
    "name": "Sky Airlines",
    "iata": "ZY"
  }
];
const QUESTION_COUNT = 10;
const BASE_TIME_LIMIT = 10;

const elements = {
  startScreen: document.getElementById('start-screen'),
  gameScreen: document.getElementById('game-screen'),
  endScreen: document.getElementById('end-screen'),
  startForm: document.getElementById('start-form'),
  playerName: document.getElementById('player-name'),
  playerEmail: document.getElementById('player-email'),
  difficulty: document.getElementById('difficulty'),
  airlineName: document.getElementById('airline-name'),
  options: document.getElementById('options'),
  timerText: document.getElementById('timer-text'),
  timerFill: document.getElementById('timer-fill'),
  score: document.getElementById('score'),
  questionNumber: document.getElementById('question-number'),
  status: document.getElementById('status'),
  finalScore: document.getElementById('final-score'),
  finalAccuracy: document.getElementById('final-accuracy'),
  finalAvgTime: document.getElementById('final-avg-time'),
  leaderboardBody: document.getElementById('leaderboard-body'),
  clearLeaderboard: document.getElementById('clear-leaderboard'),
  leaderboardNotice: document.getElementById('leaderboard-notice'),
  startError: document.getElementById('start-error'),
};

let airlines = [];
let availableAirlines = [];
let currentAirline = null;
let questionIndex = 0;
let score = 0;
let correctCount = 0;
let totalResponseTime = 0;
let timerId = null;
let currentTimeLimit = BASE_TIME_LIMIT;
let questionStartTime = 0;
let currentDifficulty = 'Medium';
let playerEmail = '';
let hasActiveQuestion = false;

function validateIata(code) {
  return /^[A-Z]{2}$/.test(code || '');
}

function sanitizeAirlines(data) {
  const seen = new Set();
  const cleaned = [];
  (data || []).forEach((entry) => {
    if (!entry || !entry.name || !entry.iata) return;
    const code = String(entry.iata).toUpperCase();
    if (!validateIata(code)) return;
    if (seen.has(code)) return;
    cleaned.push({ name: String(entry.name).trim(), iata: code });
    seen.add(code);
  });
  return cleaned;
}

async function loadAirlines() {
  try {
    const response = await fetch('data/airlines.json');
    if (!response.ok) throw new Error(`Failed to load dataset: ${response.status}`);
    const json = await response.json();
    const cleaned = sanitizeAirlines(json);
    if (!cleaned.length) throw new Error('Dataset contained no valid entries');
    return cleaned;
  } catch (error) {
    console.warn('Falling back to embedded dataset due to fetch issue:', error);
    const cleaned = sanitizeAirlines(embeddedAirlines);
    elements.leaderboardNotice.textContent = 'Loaded embedded airline data (fetch may be blocked for local files).';
    return cleaned;
  }
}

function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickNextAirline() {
  if (!availableAirlines.length) {
    availableAirlines = shuffle([...airlines]);
  }
  return availableAirlines.pop();
}

function pickWrongCodes(correctCode) {
  const pool = airlines.map((a) => a.iata).filter((code) => code !== correctCode);
  const wrong = new Set();

  let candidatePool = pool;
  if (currentDifficulty === 'Hard') {
    const similar = pool.filter((code) => code.startsWith(correctCode[0]));
    if (similar.length >= 3) {
      candidatePool = similar;
    }
  }

  const shuffled = shuffle(candidatePool);
  shuffled.forEach((code) => {
    if (wrong.size < 3 && code !== correctCode) {
      wrong.add(code);
    }
  });

  if (wrong.size < 3) {
    const fallback = shuffle(pool.filter((code) => !wrong.has(code)));
    fallback.forEach((code) => {
      if (wrong.size < 3) wrong.add(code);
    });
  }

  return [...wrong];
}

function buildOptions(correctCode) {
  const wrongOptions = pickWrongCodes(correctCode);
  const options = shuffle([...wrongOptions, correctCode]).slice(0, 4);
  if (!options.includes(correctCode)) {
    options[Math.floor(Math.random() * options.length)] = correctCode;
  }
  return options;
}

function renderOptions(options) {
  elements.options.innerHTML = '';
  options.forEach((code) => {
    const button = document.createElement('button');
    button.className = 'option-button';
    button.textContent = code;
    button.addEventListener('click', () => handleAnswer(code));
    elements.options.appendChild(button);
  });
}

function updateTimerDisplay(remaining) {
  elements.timerText.textContent = `${remaining.toFixed(1)}s`;
  const percent = Math.max(0, Math.min(100, (remaining / currentTimeLimit) * 100));
  elements.timerFill.style.width = `${percent}%`;
}

function startTimer() {
  clearInterval(timerId);
  const start = performance.now();
  questionStartTime = start;
  hasActiveQuestion = true;

  timerId = setInterval(() => {
    const elapsed = (performance.now() - start) / 1000;
    const remaining = Math.max(0, currentTimeLimit - elapsed);
    updateTimerDisplay(remaining);
    if (remaining <= 0) {
      clearInterval(timerId);
      handleAnswer(null);
    }
  }, 100);
}

function setDifficultyTimers() {
  if (currentDifficulty === 'Easy') currentTimeLimit = BASE_TIME_LIMIT + 2;
  else if (currentDifficulty === 'Hard') currentTimeLimit = BASE_TIME_LIMIT - 2;
  else currentTimeLimit = BASE_TIME_LIMIT;
}

function nextQuestion() {
  if (questionIndex >= QUESTION_COUNT) {
    endGame();
    return;
  }

  currentAirline = pickNextAirline();
  questionIndex += 1;
  elements.questionNumber.textContent = `${questionIndex} / ${QUESTION_COUNT}`;
  elements.airlineName.textContent = currentAirline.name;
  elements.status.textContent = '';

  const options = buildOptions(currentAirline.iata);
  renderOptions(options);
  updateTimerDisplay(currentTimeLimit);
  startTimer();
}

function handleAnswer(selectedCode) {
  if (!hasActiveQuestion) return;
  hasActiveQuestion = false;
  clearInterval(timerId);

  const elapsed = Math.min(currentTimeLimit, (performance.now() - questionStartTime) / 1000);
  const remaining = Math.max(0, currentTimeLimit - elapsed);
  const isCorrect = selectedCode === currentAirline?.iata;
  const speedBonus = isCorrect ? (remaining / currentTimeLimit) * 5 : 0;

  if (isCorrect) {
    correctCount += 1;
    score += 10 + speedBonus;
    elements.status.textContent = `Correct! +10 pts${speedBonus > 0 ? ` +${speedBonus.toFixed(1)} bonus` : ''}`;
    elements.status.className = 'status success';
  } else {
    elements.status.textContent = selectedCode ? 'Incorrect.' : 'Time expired.';
    elements.status.className = 'status error';
  }

  totalResponseTime += elapsed;
  elements.score.textContent = Math.round(score);

  setTimeout(() => {
    if (questionIndex >= QUESTION_COUNT) {
      endGame();
    } else {
      nextQuestion();
    }
  }, 700);
}

function calculateAccuracy() {
  return QUESTION_COUNT ? (correctCount / QUESTION_COUNT) * 100 : 0;
}

function endGame() {
  clearInterval(timerId);
  hasActiveQuestion = false;
  elements.gameScreen.classList.add('hidden');
  elements.endScreen.classList.remove('hidden');

  const accuracy = calculateAccuracy();
  const avgTime = totalResponseTime / QUESTION_COUNT;

  elements.finalScore.textContent = Math.round(score);
  elements.finalAccuracy.textContent = `${accuracy.toFixed(1)}% accuracy (${correctCount}/${QUESTION_COUNT})`;
  elements.finalAvgTime.textContent = `${avgTime.toFixed(2)}s average response time`;

  saveLeaderboardEntry({
    playerEmail,
    score: Math.round(score),
    accuracy: Number(accuracy.toFixed(1)),
    dateTime: new Date().toISOString(),
  });
  renderLeaderboard();
}

function saveLeaderboardEntry(entry) {
  const leaderboard = getLeaderboard();
  leaderboard.push(entry);
  leaderboard.sort((a, b) => b.score - a.score || b.accuracy - a.accuracy || b.dateTime.localeCompare(a.dateTime));
  const trimmed = leaderboard.slice(0, 50);
  localStorage.setItem('iata-leaderboard', JSON.stringify(trimmed));
}

function getLeaderboard() {
  try {
    const raw = localStorage.getItem('iata-leaderboard');
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.warn('Leaderboard parse error', error);
    return [];
  }
}

function renderLeaderboard() {
  const leaderboard = getLeaderboard().slice(0, 10);
  elements.leaderboardBody.innerHTML = '';

  if (!leaderboard.length) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 3;
    cell.textContent = 'No scores yet.';
    row.appendChild(cell);
    elements.leaderboardBody.appendChild(row);
    return;
  }

  leaderboard.forEach((entry, index) => {
    const row = document.createElement('tr');
    const rank = document.createElement('td');
    rank.textContent = index + 1;
    const email = document.createElement('td');
    email.textContent = entry.playerEmail;
    const result = document.createElement('td');
    result.textContent = `${entry.score} pts · ${entry.accuracy}%`;
    row.appendChild(rank);
    row.appendChild(email);
    row.appendChild(result);
    elements.leaderboardBody.appendChild(row);
  });
}

function clearLeaderboard() {
  localStorage.removeItem('iata-leaderboard');
  renderLeaderboard();
}

function showStartError(message) {
  elements.startError.textContent = message;
}

function resetGameState() {
  availableAirlines = shuffle([...airlines]);
  currentAirline = null;
  questionIndex = 0;
  score = 0;
  correctCount = 0;
  totalResponseTime = 0;
  elements.score.textContent = '0';
  elements.status.textContent = '';
  elements.status.className = 'status';
  elements.questionNumber.textContent = `0 / ${QUESTION_COUNT}`;
  updateTimerDisplay(currentTimeLimit);
}

function validateEmail(email) {
  return /.+@.+\..+/.test(email);
}

async function startGame(event) {
  event.preventDefault();
  const name = elements.playerName.value.trim();
  const email = elements.playerEmail.value.trim();
  currentDifficulty = elements.difficulty.value;
  elements.startError.textContent = '';

  if (!name || !email) {
    showStartError('Please enter both a player name and email.');
    return;
  }

  if (!validateEmail(email)) {
    showStartError('Please provide a valid email address.');
    return;
  }

  playerEmail = email;
  document.getElementById('player-greeting').textContent = `Player: ${name} (${currentDifficulty})`;

  setDifficultyTimers();
  resetGameState();
  elements.startScreen.classList.add('hidden');
  elements.gameScreen.classList.remove('hidden');
  renderLeaderboard();
  nextQuestion();
}

function wireEvents() {
  elements.startForm.addEventListener('submit', startGame);
  elements.clearLeaderboard.addEventListener('click', clearLeaderboard);
}

async function init() {
  wireEvents();
  airlines = await loadAirlines();
  if (!airlines.length) {
    elements.status.textContent = 'No airline data available.';
    elements.status.className = 'status error';
    return;
  }
  availableAirlines = shuffle([...airlines]);
  renderLeaderboard();
  document.getElementById('dataset-count').textContent = `${airlines.length} airlines loaded`;
}

document.addEventListener('DOMContentLoaded', init);
