// https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false
// //code.jquery.com/jquery-1.11.0.min.js

var map;

// The JSON data
var json = [{
  "LATITUDE": 49.234947,
  "LONGITUDE": -123.027254,
  "NAME": "Fountain location:\nAberdeen",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.275858,
  "LONGITUDE": -123.024141,
  "NAME": "Fountain location:\nAdanac",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.285554,
  "LONGITUDE": -123.142392,
  "NAME": "Fountain location:\nAlexandria",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.26098,
  "LONGITUDE": -123.184759,
  "NAME": "Fountain location:\nAlmond",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.278811,
  "LONGITUDE": -123.106194,
  "NAME": "Fountain location:\nAndy Livingstone",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.277951,
  "LONGITUDE": -123.103575,
  "NAME": "Fountain location:\nAndy Livingstone",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.262128,
  "LONGITUDE": -123.155318,
  "NAME": "Fountain location:\nArbutus Greenway",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.248679,
  "LONGITUDE": -123.157991,
  "NAME": "Fountain location:\nArbutus Village",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.245614,
  "LONGITUDE": -123.175342,
  "NAME": "Fountain location:\nBalaclava",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.255191,
  "LONGITUDE": -123.050071,
  "NAME": "Fountain location:\nBeaconsfield",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.215521,
  "LONGITUDE": -123.056107,
  "NAME": "Fountain location:\nBobolink",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.24745,
  "LONGITUDE": -123.066226,
  "NAME": "Fountain location:\nBrewers",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.275112,
  "LONGITUDE": -123.139769,
  "NAME": "Fountain location:\nBurrard Civic Centre",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.290415,
  "LONGITUDE": -123.050483,
  "NAME": "Fountain location:\nBurrard View",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.256926,
  "LONGITUDE": -123.172514,
  "NAME": "Fountain location:\nCarnarvon",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.237223,
  "LONGITUDE": -123.097143,
  "NAME": "Fountain location:\nCartier",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.249585,
  "LONGITUDE": -123.191688,
  "NAME": "Fountain location:\nChaldecott",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.268012,
  "LONGITUDE": -123.125901,
  "NAME": "Fountain location:\nCharleson",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.264372,
  "LONGITUDE": -123.083134,
  "NAME": "Fountain location:\nChina Creek North",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.261644,
  "LONGITUDE": -123.079061,
  "NAME": "Fountain location:\nChina Creek South",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.256746,
  "LONGITUDE": -123.073107,
  "NAME": "Fountain location:\nClark",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.270699,
  "LONGITUDE": -123.050137,
  "NAME": "Fountain location:\nClinton",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.271281,
  "LONGITUDE": -123.051686,
  "NAME": "Fountain location:\nClinton",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.289871,
  "LONGITUDE": -123.125385,
  "NAME": "Fountain location:\nCoal Harbour",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2901697,
  "LONGITUDE": -123.104505,
  "NAME": "Fountain location:\nCoal Harbour",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.236946,
  "LONGITUDE": -123.03638,
  "NAME": "Fountain location:\nCollingwood",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.231825,
  "LONGITUDE": -123.113005,
  "NAME": "Fountain location:\nColumbia",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.262869,
  "LONGITUDE": -123.159336,
  "NAME": "Fountain location:\nConnaught",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2617676,
  "LONGITUDE": -123.16143,
  "NAME": "Fountain location:\nConnaught",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.272798,
  "LONGITUDE": -123.114649,
  "NAME": "Fountain location:\nCoopers'",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2738086,
  "LONGITUDE": -123.113057,
  "NAME": "Fountain location:\nCoopers'",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.271632,
  "LONGITUDE": -123.12572,
  "NAME": "Fountain location:\nDavid Lam",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.272394,
  "LONGITUDE": -123.123289,
  "NAME": "Fountain location:\nDavid Lam",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.294985,
  "LONGITUDE": -123.136001,
  "NAME": "Fountain location:\nDevonian Harbour",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.285919,
  "LONGITUDE": -123.120939,
  "NAME": "Fountain location:\nArt Phillips Park",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.253089,
  "LONGITUDE": -123.122317,
  "NAME": "Fountain location:\nDouglas",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.251936,
  "LONGITUDE": -123.122502,
  "NAME": "Fountain location:\nDouglas",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.205406,
  "LONGITUDE": -123.132849,
  "NAME": "Fountain location:\nEbisu",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.233484,
  "LONGITUDE": -123.163401,
  "NAME": "Fountain location:\nElm",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2765359,
  "LONGITUDE": -123.124282,
  "NAME": "Fountain location:\nEmery Barnes Park ",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.276991,
  "LONGITUDE": -123.123796,
  "NAME": "Fountain location:\nEmery Barnes Dog Park",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.287419,
  "LONGITUDE": -123.142573,
  "NAME": "Fountain location:\nEnglish Bay",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.286027,
  "LONGITUDE": -123.143035,
  "NAME": "Fountain location:\nEnglish Bay",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.278896,
  "LONGITUDE": -123.13802,
  "NAME": "Fountain location:\nEnglish Bay",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2410466,
  "LONGITUDE": -123.125112,
  "NAME": "Fountain location:\nEric Hamber",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.254842,
  "LONGITUDE": -123.029979,
  "NAME": "Fountain location:\nFalaise",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.20713,
  "LONGITUDE": -123.149337,
  "NAME": "Fountain location:\nFraser River",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.20642,
  "LONGITUDE": -123.150808,
  "NAME": "Fountain location:\nFraser River",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2112962,
  "LONGITUDE": -123.042283,
  "NAME": "Fountain location:\nFraserview Golf",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2139347,
  "LONGITUDE": -123.051533,
  "NAME": "Fountain location:\nFraserview Golf",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2082106,
  "LONGITUDE": -123.045695,
  "NAME": "Fountain location:\nFraserview Golf",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2123921,
  "LONGITUDE": -123.051395,
  "NAME": "Fountain location:\nFraserview Golf",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.268389,
  "LONGITUDE": -123.058428,
  "NAME": "Fountain location:\nGarden",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.236498,
  "LONGITUDE": -123.031411,
  "NAME": "Fountain location:\nGaston",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.212417,
  "LONGITUDE": -123.093602,
  "NAME": "Fountain location:\nGeorge",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.271802,
  "LONGITUDE": -123.129793,
  "NAME": "Fountain location:\nGeorge Wainborn",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.273736,
  "LONGITUDE": -123.070126,
  "NAME": "Fountain location:\nGrandview",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2671275,
  "LONGITUDE": -123.137756,
  "NAME": "Fountain location:\nGranville Loop Park",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.240977,
  "LONGITUDE": -123.084994,
  "NAME": "Fountain location:\nGrays",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.26422,
  "LONGITUDE": -123.095575,
  "NAME": "Fountain location:\nGuelph Park",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.291228,
  "LONGITUDE": -123.12327,
  "NAME": "Fountain location:\nHarbour Green",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.290539,
  "LONGITUDE": -123.12318,
  "NAME": "Fountain location:\nHarbour Green",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.290001,
  "LONGITUDE": -123.121694,
  "NAME": "Fountain location:\nHarbour Green",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.28519,
  "LONGITUDE": -123.128045,
  "NAME": "Fountain location:\nHaro & Bute mini-park",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.282563,
  "LONGITUDE": -123.034264,
  "NAME": "Fountain location:\nHastings",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.283438,
  "LONGITUDE": -123.034108,
  "NAME": "Fountain location:\nHastings",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.283144,
  "LONGITUDE": -123.042959,
  "NAME": "Fountain location:\nHastings",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.280369,
  "LONGITUDE": -123.040624,
  "NAME": "Fountain location:\nHastings Community",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.280379,
  "LONGITUDE": -123.038221,
  "NAME": "Fountain location:\nHastings Community",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2456626,
  "LONGITUDE": -123.106969,
  "NAME": "Fountain location:\nHillcrest",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.244776,
  "LONGITUDE": -123.107665,
  "NAME": "Fountain location:\nHillcrest",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2710507,
  "LONGITUDE": -123.110206,
  "NAME": "Fountain location:\nHinge Park",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.281987,
  "LONGITUDE": -123.136052,
  "NAME": "Fountain location:\nJervis and Burnaby",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2719084,
  "LONGITUDE": -123.191736,
  "NAME": "Fountain location:\nJericho Beach",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.253929,
  "LONGITUDE": -123.061986,
  "NAME": "Fountain location:\nJohn Hendry",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.264164,
  "LONGITUDE": -123.107514,
  "NAME": "Fountain location:\nJonathan Rogers",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.263954,
  "LONGITUDE": -123.045152,
  "NAME": "Fountain location:\nKaslo",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.238138,
  "LONGITUDE": -123.07429,
  "NAME": "Fountain location:\nKensington",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.233331,
  "LONGITUDE": -123.1572,
  "NAME": "Fountain location:\nKerrisdale Centennial",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.227059,
  "LONGITUDE": -123.041882,
  "NAME": "Fountain location:\nKillarney",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.229195,
  "LONGITUDE": -123.045343,
  "NAME": "Fountain location:\nKillarney",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.247325,
  "LONGITUDE": -123.074579,
  "NAME": "Fountain location:\nKingcrest",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.274387,
  "LONGITUDE": -123.153826,
  "NAME": "Fountain location:\nKisilano",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.275753,
  "LONGITUDE": -123.152287,
  "NAME": "Fountain location:\nKitsilano",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.276739,
  "LONGITUDE": -123.151743,
  "NAME": "Fountain location:\nKitsilano",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2194057,
  "LONGITUDE": -123.106335,
  "NAME": "Fountain location:\nLangara Golf Course",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2237851,
  "LONGITUDE": -123.112543,
  "NAME": "Fountain location:\nLangara Golf Course",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2230752,
  "LONGITUDE": -123.116336,
  "NAME": "Fountain location:\nLangara Golf Course",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.274969,
  "LONGITUDE": -123.207164,
  "NAME": "Fountain location:\nLocarno",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.22997,
  "LONGITUDE": -123.098511,
  "NAME": "Fountain location:\nMacDonald",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2615753,
  "LONGITUDE": -123.107009,
  "NAME": "Fountain location:\nMajor Mathews",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.22318,
  "LONGITUDE": -123.159702,
  "NAME": "Fountain location:\nMaple Grove",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.223507,
  "LONGITUDE": -123.160831,
  "NAME": "Fountain location:\nMaple Grove",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.205624,
  "LONGITUDE": -123.138958,
  "NAME": "Fountain location:\nMarpole",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.267923,
  "LONGITUDE": -123.180134,
  "NAME": "Fountain location:\nMcBride",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.236424,
  "LONGITUDE": -123.029107,
  "NAME": "Fountain location:\nMelbourne",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.231241,
  "LONGITUDE": -123.086739,
  "NAME": "Fountain location:\nMemorial South",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2314231,
  "LONGITUDE": -123.084589,
  "NAME": "Fountain location:\nMemorial South",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.243358,
  "LONGITUDE": -123.187296,
  "NAME": "Fountain location:\nMemorial West",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2788422,
  "LONGITUDE": -123.089442,
  "NAME": "Fountain location:\nMcLean Park",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2205907,
  "LONGITUDE": -123.169628,
  "NAME": "Fountain location:\nMcLeery Golf Course",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2209551,
  "LONGITUDE": -123.167863,
  "NAME": "Fountain location:\nMcLeery Golf Course",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2203778,
  "LONGITUDE": -123.170895,
  "NAME": "Fountain location:\nMcLeery Golf Course",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.214828,
  "LONGITUDE": -123.084599,
  "NAME": "Fountain location:\nMoberly",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2153386,
  "LONGITUDE": -123.0872,
  "NAME": "Fountain location:\nMoberly",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.287429,
  "LONGITUDE": -123.142264,
  "NAME": "Fountain location:\nMorton",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.273192,
  "LONGITUDE": -123.074217,
  "NAME": "Fountain location:\nMosaic Creek",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.256865,
  "LONGITUDE": -123.106446,
  "NAME": "Fountain location:\nMount Pleasant",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.228277,
  "LONGITUDE": -123.05692,
  "NAME": "Fountain location:\nNanaimo",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.282838,
  "LONGITUDE": -123.129981,
  "NAME": "Fountain location:\nNelson",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.289431,
  "LONGITUDE": -123.038691,
  "NAME": "Fountain location:\nNew Brighton",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.289268,
  "LONGITUDE": -123.036666,
  "NAME": "Fountain location:\nNew Brighton",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.28959,
  "LONGITUDE": -123.035531,
  "NAME": "Fountain location:\nNew Brighton",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.238173,
  "LONGITUDE": -123.050828,
  "NAME": "Fountain location:\nNorquay",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.216585,
  "LONGITUDE": -123.127387,
  "NAME": "Fountain location:\nOak",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.216607,
  "LONGITUDE": -123.129122,
  "NAME": "Fountain location:\nOak",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.216882,
  "LONGITUDE": -123.128155,
  "NAME": "Fountain location:\nOak",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.282901,
  "LONGITUDE": -123.094057,
  "NAME": "Fountain location:\nOppenheimer",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.28287,
  "LONGITUDE": -123.057199,
  "NAME": "Fountain location:\nPandora Park",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2816629,
  "LONGITUDE": -123.104505,
  "NAME": "Fountain location:\nPioneer Square",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2846537,
  "LONGITUDE": -123.101821,
  "NAME": "Fountain location:\nPortside",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.242275,
  "LONGITUDE": -123.113543,
  "NAME": "Fountain location:\nQueen Elizabeth",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.239167,
  "LONGITUDE": -123.111542,
  "NAME": "Fountain location:\nQueen Elizabeth",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.23742,
  "LONGITUDE": -123.105621,
  "NAME": "Fountain location:\nQueen Elizabeth",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.24462,
  "LONGITUDE": -123.148828,
  "NAME": "Fountain location:\nQuilchena",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.25211,
  "LONGITUDE": -123.042086,
  "NAME": "Fountain location:\nRenfrew",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.205739,
  "LONGITUDE": -123.050981,
  "NAME": "Fountain location:\nRiverfront",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.205755,
  "LONGITUDE": -123.051817,
  "NAME": "Fountain location:\nRiverfront",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.257792,
  "LONGITUDE": -123.091912,
  "NAME": "Fountain location:\nRobson",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.216811,
  "LONGITUDE": -123.082434,
  "NAME": "Fountain location:\nRoss",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.216947,
  "LONGITUDE": -123.082635,
  "NAME": "Fountain location:\nRoss",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.270148,
  "LONGITUDE": -123.030627,
  "NAME": "Fountain location:\nRupert",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.273071,
  "LONGITUDE": -123.030636,
  "NAME": "Fountain location:\nRupert",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.27112,
  "LONGITUDE": -123.033079,
  "NAME": "Fountain location:\nRupert",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2751248,
  "LONGITUDE": -123.103111,
  "NAME": "Fountain location:\nSE False Creek",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.27099,
  "LONGITUDE": -123.146205,
  "NAME": "Fountain location:\nSeaforth",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.244294,
  "LONGITUDE": -123.048373,
  "NAME": "Fountain location:\nSlocan",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2582608,
  "LONGITUDE": -123.049711,
  "NAME": "Fountain location:\nSlocan Greenway",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.277484,
  "LONGITUDE": -123.222396,
  "NAME": "Fountain location:\nSpanish Banks",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.310653,
  "LONGITUDE": -123.148332,
  "NAME": "Fountain location:\nStanley Park-Prospect Point",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.292239,
  "LONGITUDE": -123.147,
  "NAME": "Fountain location:\nStanley Park- Lawn Bowling ",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.292196,
  "LONGITUDE": -123.146059,
  "NAME": "Fountain location:\nStanley Park - Tennis Courts",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.312552,
  "LONGITUDE": -123.141011,
  "NAME": "Fountain location:\nStanley Park- Shuffleboard",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.313033,
  "LONGITUDE": -123.142625,
  "NAME": "Fountain location:\nStanley",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.299111,
  "LONGITUDE": -123.134117,
  "NAME": "Fountain location:\nStanley Park- Brockton Oval",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.307347,
  "LONGITUDE": -123.155447,
  "NAME": "Fountain location:\nStanley Park- Cricket Pavillion",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.298105,
  "LONGITUDE": -123.129746,
  "NAME": "Fountain location:\nStanley Park- A  Frame Washrooms",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.299691,
  "LONGITUDE": -123.126188,
  "NAME": "Fountain location:\nStanley Park- Upper Rose Garden",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.298994,
  "LONGITUDE": -123.120676,
  "NAME": "Fountain location:\nStanley Park- Rose Garden Playground",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.306095,
  "LONGITUDE": -123.137497,
  "NAME": "Fountain location:\nStanley Park- Aviary",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.306616,
  "LONGITUDE": -123.142741,
  "NAME": "Fountain location:\nStanley Park- Brockton Point Lighthouse",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.309337,
  "LONGITUDE": -123.146245,
  "NAME": "Fountain location:\nStanley Park- Prospect Point ",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.312421,
  "LONGITUDE": -123.142755,
  "NAME": "Fountain location:\nStanley Park- Pavillion",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.303156,
  "LONGITUDE": -123.156335,
  "NAME": "Fountain location:\nStanley Park- Third Beach",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.294943,
  "LONGITUDE": -123.150223,
  "NAME": "Fountain location:\nStanley Park- Second Beach",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.29988,
  "LONGITUDE": -123.130947,
  "NAME": "Fountain location:\nStanley Park- Aquarium",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.303,
  "LONGITUDE": -123.130695,
  "NAME": "Fountain location:\nStanley Park - Lumbermen's Arch",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2936001,
  "LONGITUDE": -123.148596,
  "NAME": "Fountain location:\nStanley Park- Ceperley Washrooms",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2937891,
  "LONGITUDE": -123.149652,
  "NAME": "Fountain location:\nStanley Park- Cerperley Seawall",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.3126584,
  "LONGITUDE": -123.142367,
  "NAME": "Fountain location:\nStanley Park- Prospect Point Washrooms",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.3031665,
  "LONGITUDE": -123.156283,
  "NAME": "Fountain location:\nStanley Park- Third Beach Seawall",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.299417,
  "LONGITUDE": -123.121263,
  "NAME": "Fountain location:\nStanley Park- Totem Poles",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.3050743,
  "LONGITUDE": -123.146132,
  "NAME": "Fountain location:\nStanley Park- Bridle Path",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2984252,
  "LONGITUDE": -123.150394,
  "NAME": "Fountain location:\nStanley Park- Second Beach",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2954672,
  "LONGITUDE": -123.151056,
  "NAME": "Fountain location:\nStanley Park- Second Beach Pool",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.293007,
  "LONGITUDE": -123.146487,
  "NAME": "Fountain location:\nStanley Park- Putting Green",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2944973,
  "LONGITUDE": -123.146113,
  "NAME": "Fountain location:\nStanley Park-Pitch and Putt Course",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.3015616,
  "LONGITUDE": -123.134529,
  "NAME": "Fountain location:\nStanley Park- Pavillion Playground",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.275873,
  "LONGITUDE": -123.085478,
  "NAME": "Fountain location:\nStrathcona",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.274827,
  "LONGITUDE": -123.086689,
  "NAME": "Fountain location:\nStrathcona",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.266893,
  "LONGITUDE": -123.035669,
  "NAME": "Fountain location:\nSunrise",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.222862,
  "LONGITUDE": -123.096496,
  "NAME": "Fountain location:\nSunset",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2789007,
  "LONGITUDE": -123.137935,
  "NAME": "Fountain location:\nSunset Beach",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.269121,
  "LONGITUDE": -123.134031,
  "NAME": "Fountain location:\nSutcliffe",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.257356,
  "LONGITUDE": -123.09859,
  "NAME": "Fountain location:\nTeaswamp",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2296077,
  "LONGITUDE": -123.070191,
  "NAME": "Fountain location:\nTecumseh",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.228371,
  "LONGITUDE": -123.118266,
  "NAME": "Fountain location:\nTisdall",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.251273,
  "LONGITUDE": -123.163837,
  "NAME": "Fountain location:\nTrafalgar",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2749603,
  "LONGITUDE": -123.093122,
  "NAME": "Fountain location:\nTrillium",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.271811,
  "LONGITUDE": -123.066732,
  "NAME": "Fountain location:\nVictoria",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.281845,
  "LONGITUDE": -123.110066,
  "NAME": "Fountain location:\nVictory Square",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.263048,
  "LONGITUDE": -123.073108,
  "NAME": "Fountain location:\nW.C. Shelly",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.266021,
  "LONGITUDE": -123.205262,
  "NAME": "Fountain location:\nWest Point Grey",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.266937,
  "LONGITUDE": -123.205107,
  "NAME": "Fountain location:\nWest Point Grey",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.215839,
  "LONGITUDE": -123.113059,
  "NAME": "Fountain location:\nWinona",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.278442,
  "LONGITUDE": -123.073424,
  "NAME": "Fountain location:\nWoodland",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2386154,
  "LONGITUDE": -123.129939,
  "NAME": "Fountain location:\nVanDusen Gardens",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.2394013,
  "LONGITUDE": -123.129439,
  "NAME": "Fountain location:\nVanDusen Gardens",
  "MAINTAINER": "Parks"
}, {
  "LATITUDE": 49.245762,
  "LONGITUDE": -123.10102,
  "NAME": "Fountain location:\n28th & Main",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.234752,
  "LONGITUDE": -123.058912,
  "NAME": "Fountain location:\n39th & Nanaimo",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.26822777,
  "LONGITUDE": -123.152706,
  "NAME": "Fountain location:\n4th & Arbutus",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.219505,
  "LONGITUDE": -123.106415,
  "NAME": "Fountain location:\n56th & Ontario",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.28451988,
  "LONGITUDE": -123.1395544,
  "NAME": "Fountain location:\nCardero & Burnaby",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.29049866,
  "LONGITUDE": -123.1402252,
  "NAME": "Fountain location:\nGilford & Nelson",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.28571023,
  "LONGITUDE": -123.1333368,
  "NAME": "Fountain location:\nNelson & Broughton",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.282385,
  "LONGITUDE": -123.140508,
  "NAME": "Fountain location:\nNicola & Beach",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.28306599,
  "LONGITUDE": -123.1222905,
  "NAME": "Fountain location:\nRobson & Burrard",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.29345716,
  "LONGITUDE": -123.13827,
  "NAME": "Fountain location:\nRobson & Chilco",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.265329,
  "LONGITUDE": -123.142081,
  "NAME": "Fountain location:\n1650 W 7th",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.237587,
  "LONGITUDE": -123.127384,
  "NAME": "Fountain location:\n37th & Oak",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.237446,
  "LONGITUDE": -123.105647,
  "NAME": "Fountain location:\n37th & Ontario",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.2646599,
  "LONGITUDE": -123.112967,
  "NAME": "Fountain location:\n7th & Yukon",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.262875,
  "LONGITUDE": -123.105026,
  "NAME": "Fountain location:\nBroadway & Ontario",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.262066,
  "LONGITUDE": -123.065619,
  "NAME": "Fountain location:\nBroadway & Victoria",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.2365274,
  "LONGITUDE": -123.084037,
  "NAME": "Fountain location:\nElgin & 37th",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.2371952,
  "LONGITUDE": -123.097283,
  "NAME": "Fountain location:\n37th & Prince Edward",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.281542,
  "LONGITUDE": -123.119937,
  "NAME": "Fountain location:\nGranville & Robson",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.281386,
  "LONGITUDE": -123.097231,
  "NAME": "Fountain location:\nHastings & Gore",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.2678194,
  "LONGITUDE": -123.0693907,
  "NAME": "Fountain location:\nCommercial & 3rd",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.2187548,
  "LONGITUDE": -123.055044,
  "NAME": "Fountain location:\nAshburn & Elliot",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.2610594,
  "LONGITUDE": -123.100784,
  "NAME": "Fountain location:\nMain & 11th",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.27924755,
  "LONGITUDE": -123.1292321,
  "NAME": "Fountain location:\nBurrard & Davie",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.2867384,
  "LONGITUDE": -123.136516,
  "NAME": "Fountain location:\nComox & Cardero",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.29067407,
  "LONGITUDE": -123.1426469,
  "NAME": "Fountain location:\nComox & Chilco",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.2887857,
  "LONGITUDE": -123.13969,
  "NAME": "Fountain location:\nComox & Denman",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.28977703,
  "LONGITUDE": -123.1412866,
  "NAME": "Fountain location:\nGilford & Comox",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.2173117,
  "LONGITUDE": -123.139586,
  "NAME": "Fountain location:\nGranville & 59th",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.2775724,
  "LONGITUDE": -123.087389,
  "NAME": "Fountain location:\nUnion & Hawks",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.262294,
  "LONGITUDE": -123.114544,
  "NAME": "Fountain location: Cambie & 10th",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.26423514,
  "LONGITUDE": -123.1666474,
  "NAME": "Fountain location:\nBroadway & Stephens",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.28922483,
  "LONGITUDE": -123.1385485,
  "NAME": "Fountain location:\nDenman & Nelson",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.280998,
  "LONGITUDE": -123.054448,
  "NAME": "Fountain location:\nHastings & Kamloops",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.262628,
  "LONGITUDE": -123.089225,
  "NAME": "Fountian Location: Fraser & Broadway ",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.271674,
  "LONGITUDE": -123.167863,
  "NAME": "Fountain location:Pt.Grey & MacDonald",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.229344,
  "LONGITUDE": -123.127987,
  "NAME": "Fountain location: Oak & 46th",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.279672,
  "LONGITUDE": -123.123513,
  "NAME": "Fountain location:Nelson & Howe",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.2663411,
  "LONGITUDE": -123.125914,
  "NAME": "Bottle Filling Station location: \nCharleson Park Pumping Station",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.257924,
  "LONGITUDE": -123.041381,
  "NAME": "Bottle Filling Station location: \nGrandview Hwy Pumping Station ",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.269566,
  "LONGITUDE": -123.136177,
  "NAME": "Bottle Filling Station location: \nGranville Island Pumping Station",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.2733345,
  "LONGITUDE": -123.131579,
  "NAME": "Bottle Filling Station location: \nGranville St Pumping Station",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.2737142,
  "LONGITUDE": -123.1527806,
  "NAME": "Bottle Filling Station location: \nKitsilano Pumping Station",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.2730368,
  "LONGITUDE": -123.098886,
  "NAME": "Bottle Filling Station location: \nThornton Park Pumping Station",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.20869619,
  "LONGITUDE": -123.1402765,
  "NAME": "Temporary Fountain location:\nNortheast corner of 70th and Granville",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.26243274,
  "LONGITUDE": -123.0695524,
  "NAME": "Temporary Fountain location:\nNortheast corner of Commercial and Broadway ",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.2798072,
  "LONGITUDE": -123.110301,
  "NAME": "Temporary Fountain location:\nNortheast corner of Dunsmuir and Beatty",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.230432,
  "LONGITUDE": -123.131784,
  "NAME": "Temporary Fountain location:\nNortheast corner of Montgomery and 45th",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.2701294,
  "LONGITUDE": -123.104467,
  "NAME": "Temporary Fountain location:\nSoutheast corner of Ontario and 1st",
  "MAINTAINER": "Engineering"
}, {
  "LATITUDE": 49.281313,
  "LONGITUDE": -123.089401,
  "NAME": "Temporary Fountain location: Northeast corner of E. Hastings and Heatley",
  "MAINTAINER": "Engineering"
}];



function initialize() {

  // Giving the map som options
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(49.281313, -123.089401) //Vancouver
  };

  // Creating the map
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  console.log(json.length);

  // Looping through all the entries from the JSON data
  for (var i = 0; i < json.length; i++) {
    // Current object
    var obj = json[i];
    console.log(obj.LATITUDE, obj.LONGITUDE);

    // Adding a new marker for the object
    var marker = new google.maps.Marker({
      position: {
        lat: obj.LATITUDE,
        lng: obj.LONGITUDE
      },
      map: map,
      title: obj.NAME // this works, giving the marker a title with the correct title
    });

    // Adding a new info window for the object
    addClicker(marker, obj.NAME);

  } // end loop

  // Adding a new click event listener for the object
  function addClicker(marker, content) {
    google.maps.event.addListener(marker, 'click', function() {

      infowindow = new google.maps.InfoWindow({
        content: content
      });
      infowindow.open(map, marker);

    });
  }
    //Styles
    var styles = [
  {
    stylers: [
      { hue: "#00ffe6" },
      { saturation: -20 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];

map.setOptions({styles: styles});
    

}

// Initialize the map
google.maps.event.addDomListener(window, 'load', initialize);

