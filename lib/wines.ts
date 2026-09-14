/**
 * Винная карта бутылок. СГЕНЕРИРОВАНО scripts/build-wines.mjs из
 * _data/pdf-text/vinos-lines.txt (PDF «Vinos», 06.04.2026) — руками не править.
 * Описание («производитель. регион. сорта») оставлено как в карте: это
 * собственные имена, у них нет перевода.
 */

export type Wine = {
  name: string;
  tag: "orange" | "rose" | null;
  vintage: number | null;
  price: number;
  desc: string;
};

export type WineRegion = { title: { es: string; en: string } | null; wines: Wine[] };

export type WineCategory = { id: string; es: string; en: string; regions: WineRegion[] };

export const wineCount = 166;

export const wines: WineCategory[] = [
  {
    "id": "blanco-nacional",
    "es": "Blancos de España",
    "en": "Spanish whites",
    "regions": [
      {
        "title": {
          "es": "Comunitat Valenciana",
          "en": "Valencia region"
        },
        "wines": [
          {
            "name": "Parsimonia",
            "tag": null,
            "vintage": 2023,
            "price": 20,
            "desc": "Vibe. Utiel-Requena. Tardana"
          },
          {
            "name": "Finca San Blas",
            "tag": null,
            "vintage": 2020,
            "price": 27,
            "desc": "Finca San Blas. Utiel-Requena. Merseguera, Chardonnay"
          },
          {
            "name": "El Recatí",
            "tag": null,
            "vintage": 2023,
            "price": 26.5,
            "desc": "Alberto Pedrón. Utiel-Requena. Macabeo"
          },
          {
            "name": "Las Blancas",
            "tag": null,
            "vintage": 2023,
            "price": 25.5,
            "desc": "Bruno Murciano. Utiel-Requena. Malvasía, Macabeo, Marisancho, Merseguera, Moscatel"
          },
          {
            "name": "Muda",
            "tag": "orange",
            "vintage": 2023,
            "price": 26,
            "desc": "Verónica Romero. Utiel-Requena. Tardana"
          },
          {
            "name": "Mestizaje",
            "tag": null,
            "vintage": 2023,
            "price": 22.5,
            "desc": "Mustiguillo. El Terrerazo. Merseguera, Viognier, Malvasía"
          },
          {
            "name": "Pela Roques",
            "tag": null,
            "vintage": 2022,
            "price": 34.5,
            "desc": "Mustiguillo. El Terrerazo. Merseguera, Xarel.lo"
          },
          {
            "name": "Cubet",
            "tag": null,
            "vintage": 2022,
            "price": 29,
            "desc": "Vinya Alforí. Fontanars dels Alforins. Chardonnay, Macabeo"
          },
          {
            "name": "Negre",
            "tag": "orange",
            "vintage": 2019,
            "price": 36,
            "desc": "Vinya Alforí. Fontanars dels Alforins. Macabeo"
          },
          {
            "name": "Mujer Caballo Orange Wine",
            "tag": null,
            "vintage": 2020,
            "price": 39,
            "desc": "Fil.loxera & Cia. Fontanars dels Alforins. Valencí, Moscatel Romano, Airén"
          },
          {
            "name": "Creu Pairal",
            "tag": null,
            "vintage": 2021,
            "price": 20,
            "desc": "Set Vins de Muntanya. Siete Aguas, Valencia. Macabeo"
          },
          {
            "name": "Cañada París",
            "tag": null,
            "vintage": 2023,
            "price": 24.5,
            "desc": "Baldovar 923. Alpuente, Valencia. Merseguera"
          },
          {
            "name": "Trepadell",
            "tag": null,
            "vintage": 2022,
            "price": 45.5,
            "desc": "Oscar Mestre. Xaló. Alicante. Trepadell, Merseguera"
          }
        ]
      },
      {
        "title": {
          "es": "Aragón",
          "en": "Aragon"
        },
        "wines": [
          {
            "name": "Tocando El Cielo",
            "tag": null,
            "vintage": 2021,
            "price": 30,
            "desc": "Javalambre VAM. Camarena de la Sierra, Teruel. Merseguera"
          },
          {
            "name": "Rubus Leuko",
            "tag": null,
            "vintage": 2024,
            "price": 24.5,
            "desc": "Pablo Ministro & Juanvi Alcañiz. Rubielos de Mora, Teruel. Macabeo"
          }
        ]
      },
      {
        "title": {
          "es": "Cataluña",
          "en": "Catalonia"
        },
        "wines": [
          {
            "name": "Caminante, Terra Remota",
            "tag": null,
            "vintage": 2022,
            "price": 35.5,
            "desc": "Emma y Marc Bournazeau. Cataluña. Garnacha Blanca, Chardonnay, Chenin Blanc"
          }
        ]
      },
      {
        "title": {
          "es": "Castilla-La Mancha",
          "en": "Castilla-La Mancha"
        },
        "wines": [
          {
            "name": "Aurora",
            "tag": null,
            "vintage": 2022,
            "price": 29,
            "desc": "Finca Sandoval. Ledaña, Cuenca. Albillo de la Mancha, Marisancho"
          },
          {
            "name": "Antera",
            "tag": null,
            "vintage": 2022,
            "price": 22.9,
            "desc": "Antigva Cia. Ciudad Real. Verdejo"
          }
        ]
      },
      {
        "title": {
          "es": "Castilla y León",
          "en": "Castile and León"
        },
        "wines": [
          {
            "name": "Ecléctico",
            "tag": null,
            "vintage": 2022,
            "price": 27.9,
            "desc": "El hato y el Garabato. Arribes del Duero. Puesta en Cruz"
          },
          {
            "name": "Blanco Nieva Pie Franco",
            "tag": null,
            "vintage": 2023,
            "price": 26,
            "desc": "Viñedos de Nieva. Rueda. Verdejo"
          },
          {
            "name": "Cantayano",
            "tag": null,
            "vintage": 2024,
            "price": 24.5,
            "desc": "Isaac Cantalapiedra. Verdejo"
          }
        ]
      },
      {
        "title": {
          "es": "La Rioja y País Vasco",
          "en": "La Rioja and the Basque Country"
        },
        "wines": [
          {
            "name": "Temerario",
            "tag": null,
            "vintage": 2023,
            "price": 33,
            "desc": "Alejandro Perfecto. Rioja. Viura"
          },
          {
            "name": "Finca La Emperatriz",
            "tag": null,
            "vintage": 2018,
            "price": 41,
            "desc": "Hermanos Hernáiz. Rioja. Viura"
          },
          {
            "name": "Tahón de Tobelos",
            "tag": null,
            "vintage": 2019,
            "price": 42,
            "desc": "Tobelos. Rioja. Viura y otras"
          },
          {
            "name": "Astobiza",
            "tag": null,
            "vintage": 2024,
            "price": 20,
            "desc": "Txakolí de Álava, Hondarrabi Zuri"
          },
          {
            "name": "Urtarán Cuvée",
            "tag": null,
            "vintage": 2021,
            "price": 35,
            "desc": "Bat-Gara. Txacolí de Álava. Hondarrabi Zuri, Riesling, GALICIA"
          },
          {
            "name": "Tiro al Blanco",
            "tag": null,
            "vintage": 2024,
            "price": 27,
            "desc": "O Morto Wines. Ribeiro. Godello"
          },
          {
            "name": "Bitoku",
            "tag": null,
            "vintage": 2022,
            "price": 26.5,
            "desc": "Adega Do Demo. Ribeiro. Treixadura, Loureira"
          },
          {
            "name": "Louro",
            "tag": null,
            "vintage": 2024,
            "price": 35,
            "desc": "Rafael Palacios. Valdeorras. Godello"
          },
          {
            "name": "Do Ferreiro Cepas Vellas",
            "tag": null,
            "vintage": 2023,
            "price": 59.5,
            "desc": "Gerardo Méndez. Rías Baixas. Albariño"
          },
          {
            "name": "Pedralonga",
            "tag": null,
            "vintage": 2022,
            "price": 39.5,
            "desc": "Adega Pedralonga. Rías Baixas. Albariño"
          },
          {
            "name": "Pentecostés",
            "tag": null,
            "vintage": 2022,
            "price": 29,
            "desc": "Bodegas Pentecostés. Rías Baixas. Albariño, Caiño, Loureira, Treixadura, Godello"
          },
          {
            "name": "Terras Do Sur",
            "tag": null,
            "vintage": 2023,
            "price": 27.9,
            "desc": "José Antonio Canda Gil. Rías Baixas. Albariño"
          },
          {
            "name": "Veigalobos",
            "tag": null,
            "vintage": 2021,
            "price": 60,
            "desc": "Granbazán. Rías Baixas. Albariño"
          }
        ]
      },
      {
        "title": {
          "es": "Andalucía",
          "en": "Andalusia"
        },
        "wines": [
          {
            "name": "Vidueños de Sedella",
            "tag": null,
            "vintage": 2020,
            "price": 37,
            "desc": "Sedella. Sierras de Málaga. Moscatel de Alejandría"
          },
          {
            "name": "Monticara",
            "tag": null,
            "vintage": 2020,
            "price": 36.8,
            "desc": "Victoria Ordóñez e Hijos. Sierras de Málaga. Moscatel"
          },
          {
            "name": "Muchada-Léclapart Universe",
            "tag": null,
            "vintage": 2022,
            "price": 47,
            "desc": "Muchada-Léclapart. Cádiz. Palomino Fino"
          },
          {
            "name": "Miut, El Quejigal",
            "tag": null,
            "vintage": 2021,
            "price": 35,
            "desc": "Toro Albalá. Montilla Moriles. Pedro Ximénez"
          }
        ]
      },
      {
        "title": {
          "es": "Islas Canarias",
          "en": "Canary Islands"
        },
        "wines": [
          {
            "name": "La Time",
            "tag": null,
            "vintage": 2000,
            "price": 45,
            "desc": "Llanos Negros. La Palma. Listán blanco"
          },
          {
            "name": "Artífice Vidueños",
            "tag": null,
            "vintage": 2021,
            "price": 36.5,
            "desc": "Borja Pérez. Tenerife. Albillo Criollo, Gual, Marmajuelo, Listán blanco, Forastera Gomera"
          },
          {
            "name": "Jable de Tao",
            "tag": null,
            "vintage": 2022,
            "price": 55,
            "desc": "Jable de Tao. Lanzarote. Malvasía Volcánica, Listán Blanco, Diego, Listán Negro"
          },
          {
            "name": "El Grifo Sobre Lías",
            "tag": null,
            "vintage": 2021,
            "price": 36,
            "desc": "El Grifo. Lanzarote. Malvasía Volcánica"
          }
        ]
      }
    ]
  },
  {
    "id": "blanco-internacional",
    "es": "Blancos internacionales",
    "en": "International whites",
    "regions": [
      {
        "title": {
          "es": "Francia",
          "en": "France"
        },
        "wines": [
          {
            "name": "Domaines Leflaive",
            "tag": null,
            "vintage": 2023,
            "price": 72.5,
            "desc": "Mâcon-Verzé, Côte D´Or. Chardonnay"
          },
          {
            "name": "Didier Fornerol",
            "tag": null,
            "vintage": 2023,
            "price": 59,
            "desc": "Côte De Nuits-Villages, Côte D´Or. Chardonnay"
          },
          {
            "name": "Robert Denogent-Les Tâches",
            "tag": null,
            "vintage": 2020,
            "price": 45.5,
            "desc": "Domaine Robert Denogent. Mâcon-Fuisse. Chardonnay"
          },
          {
            "name": "Corveé de l´Eglise",
            "tag": null,
            "vintage": 2020,
            "price": 37,
            "desc": "Domaine Henri Richard. Morey-Saint-Denis. Aligoté"
          },
          {
            "name": "Cuvée Émeraud",
            "tag": null,
            "vintage": 2021,
            "price": 41,
            "desc": "Agnés Gleizes. Chablis. Chardonnay"
          },
          {
            "name": "Clos Des Treilles",
            "tag": null,
            "vintage": 2022,
            "price": 43,
            "desc": "Nicolas Reau. Anjou, Loira. Chenin Blanc"
          },
          {
            "name": "Les Belles Dames",
            "tag": null,
            "vintage": 2023,
            "price": 42,
            "desc": "Gitton Père & Fils. Sancerre. Sauvignon Blanc"
          },
          {
            "name": "De Ladoucette",
            "tag": null,
            "vintage": 2021,
            "price": 49.5,
            "desc": "De Ladoucette. Pouilly-Fumé. Sauvignon Blanc"
          },
          {
            "name": "Pur Vin",
            "tag": "orange",
            "vintage": 2020,
            "price": 49,
            "desc": "Domaine Pierre Frick. Alsacia. Gewürztraminer"
          },
          {
            "name": "Château Closiot",
            "tag": null,
            "vintage": 2022,
            "price": 29.5,
            "desc": "Jean-Marie Guffens. Bordeaux. Sauvignon Blanc, Sémillon"
          },
          {
            "name": "Clos Des Lunes, Lune D´Argent",
            "tag": null,
            "vintage": 2024,
            "price": 34,
            "desc": "Domaine de Chevalier, Famille Bernard. Bordeaux. Sémillon, Sauvignon Blanc"
          }
        ]
      },
      {
        "title": {
          "es": "Alemania",
          "en": "Germany"
        },
        "wines": [
          {
            "name": "Siefersheimer Porphyr",
            "tag": null,
            "vintage": 2016,
            "price": 45,
            "desc": "Wagner Stempel. Rheinhessen. Riesling"
          },
          {
            "name": "Alte Reben",
            "tag": null,
            "vintage": 2021,
            "price": 40.5,
            "desc": "Markus Molitor. Mosel-Saar-Ruwer. Riesling"
          }
        ]
      },
      {
        "title": {
          "es": "Austria",
          "en": "Austria"
        },
        "wines": [
          {
            "name": "Wenzel Reserve",
            "tag": null,
            "vintage": 2016,
            "price": 49.5,
            "desc": "Michael Wenzel. Burgenland. Furmint"
          }
        ]
      },
      {
        "title": {
          "es": "Italia",
          "en": "Italy"
        },
        "wines": [
          {
            "name": "Versante Nord",
            "tag": null,
            "vintage": 2022,
            "price": 45,
            "desc": "Eduardo Torres. Sicilia. Minella, Grecanico, Inzolia, Catarrato"
          }
        ]
      },
      {
        "title": {
          "es": "Portugal",
          "en": "Portugal"
        },
        "wines": [
          {
            "name": "Druida Reserva",
            "tag": null,
            "vintage": 2021,
            "price": 38,
            "desc": "C20. DÃO. Encruzado"
          },
          {
            "name": "Lagar De Proventus",
            "tag": null,
            "vintage": 2020,
            "price": 28,
            "desc": "Real Companhia Velha. Douro. Alvarinho"
          }
        ]
      },
      {
        "title": {
          "es": "Grecia",
          "en": "Greece"
        },
        "wines": [
          {
            "name": "Assyrtiko",
            "tag": null,
            "vintage": 2023,
            "price": 29,
            "desc": "Kir Yianni. Naoussa, Macedonia. Assyrtiko"
          }
        ]
      }
    ]
  },
  {
    "id": "rosados",
    "es": "Rosados",
    "en": "Rosés",
    "regions": [
      {
        "title": null,
        "wines": [
          {
            "name": "Kaleidos",
            "tag": null,
            "vintage": 2024,
            "price": 20,
            "desc": "Vibe. Utiel-Requena. Bobal"
          },
          {
            "name": "Gran Caus",
            "tag": null,
            "vintage": 2022,
            "price": 38,
            "desc": "Can Ràfols dels Caus. Penedés. Merlot"
          },
          {
            "name": "Clara",
            "tag": null,
            "vintage": 2023,
            "price": 25,
            "desc": "Verónica Romero. Utiel-Requena. Bobal, Macabeo"
          },
          {
            "name": "Clarete Viña Pilar",
            "tag": null,
            "vintage": 2020,
            "price": 36.5,
            "desc": "Félix Callejo. Ribera del Duero. Tempranillo, Albillo Mayor"
          },
          {
            "name": "Analema",
            "tag": null,
            "vintage": 2020,
            "price": 30,
            "desc": "Antigva Cia. Montsant. Garnacha Peluda"
          },
          {
            "name": "Nacra",
            "tag": null,
            "vintage": 2024,
            "price": 38,
            "desc": "Mar de Vins. Alicante. Giró"
          },
          {
            "name": "Figuère Magali Signature",
            "tag": null,
            "vintage": 2023,
            "price": 31,
            "desc": "Familie Combard. Côtes de Provence. Syrah, Cabernet Sauvignon, Garnacha, Cinsault"
          }
        ]
      }
    ]
  },
  {
    "id": "espumosos",
    "es": "Espumosos",
    "en": "Sparkling",
    "regions": [
      {
        "title": {
          "es": "España",
          "en": "Spain"
        },
        "wines": [
          {
            "name": "Allegranza",
            "tag": null,
            "vintage": null,
            "price": 25,
            "desc": "Vibe. Cava. Utiel-Requena. Macabeo, Chardonnay"
          },
          {
            "name": "Calvestra Brut Nature",
            "tag": null,
            "vintage": 2018,
            "price": 45,
            "desc": "Mustiguillo. El Terrerazo. Chardonnay, Merseguera"
          },
          {
            "name": "Pigar Ancestral",
            "tag": null,
            "vintage": 2023,
            "price": 29.5,
            "desc": "Bodegas Pigar. Utiel-Requena. Royal, Bobal"
          },
          {
            "name": "Millésimé Gran Reserva",
            "tag": null,
            "vintage": null,
            "price": 28.5,
            "desc": "Antigva Cia. Penedés, Cava Reserva Superior. Macabeo, Xarel.lo, Perellada, Chardonnay"
          },
          {
            "name": "Leopardi Brut Nature",
            "tag": null,
            "vintage": 2017,
            "price": 54,
            "desc": "Llopart. Corpinnat. Xarel.lo, Macabeo, Perellada"
          }
        ]
      },
      {
        "title": {
          "es": "Francia",
          "en": "France"
        },
        "wines": [
          {
            "name": "Billecart-Salmon Le Rosé Extra Brut",
            "tag": "rose",
            "vintage": null,
            "price": 115,
            "desc": "Champagne. Mareuil-Sur-Aÿ. Chardonnay, Pinot Noir, Pinot Meunier"
          },
          {
            "name": "Baron-Fuenté Grande Réserve Brut",
            "tag": null,
            "vintage": null,
            "price": 50,
            "desc": "Champagne. Charly-Sur-Marne. Pinot Meunier, Chardonnay, Pinot Noir"
          },
          {
            "name": "Henri Giraud Esprit Nature",
            "tag": null,
            "vintage": null,
            "price": 92,
            "desc": "Champagne. Aÿ. Pinot Noir, Chardonnay"
          },
          {
            "name": "Louis Roederer Collection 244",
            "tag": null,
            "vintage": null,
            "price": 90,
            "desc": "Champagne. Reims. Pinot Noir, Pinot Meunier, Chardonnay"
          },
          {
            "name": "Assailly Grand Cru Cuvée Brut Nature",
            "tag": null,
            "vintage": null,
            "price": 83,
            "desc": "Champagne Avize. Chardonnay"
          },
          {
            "name": "Geoffroy Expression, Cumières Premier Cru",
            "tag": null,
            "vintage": null,
            "price": 82,
            "desc": "Champagne. Colombine. Pinot Noir, Pinot Meunier, Chardonnay"
          },
          {
            "name": "William Saintot Rosaire Premier Cru",
            "tag": "rose",
            "vintage": null,
            "price": 72,
            "desc": "Champagne. Avenay Val D´Or. Pinot Noir, Pinot Meunier"
          },
          {
            "name": "Roger Manceaux Brut Grande Réserve Premier Cru",
            "tag": null,
            "vintage": null,
            "price": 69,
            "desc": "Champagne. Rilly-La-Montagne. Pinot Noir, Chardonnay"
          },
          {
            "name": "Laurent Perrier La Cuvée Brut",
            "tag": null,
            "vintage": null,
            "price": 68,
            "desc": "Champagne. Sur-Marne. Chardonnay, Pinot Noir, Pinot Meunier"
          },
          {
            "name": "André Clouet Brut Grande Réserve",
            "tag": null,
            "vintage": null,
            "price": 60,
            "desc": "Champagne. Bouzy. Pinot Noir"
          },
          {
            "name": "Jean Dumangin Blanc De Blancs",
            "tag": null,
            "vintage": null,
            "price": 65,
            "desc": "Champagne. Chigny-les-Roses. Chardonnay"
          },
          {
            "name": "De Chanceny Brut Excelence 2021",
            "tag": null,
            "vintage": null,
            "price": 39,
            "desc": "Voyvray. Loira. Chenin Blanc"
          }
        ]
      }
    ]
  },
  {
    "id": "tinto-nacional",
    "es": "Tintos de España",
    "en": "Spanish reds",
    "regions": [
      {
        "title": {
          "es": "Comunitat Valenciana",
          "en": "Valencia region"
        },
        "wines": [
          {
            "name": "Parsimonia De Autor",
            "tag": null,
            "vintage": 2022,
            "price": 26,
            "desc": "Vibe. Utiel-Requena. Bobal"
          },
          {
            "name": "Sentencia",
            "tag": null,
            "vintage": 2020,
            "price": 49,
            "desc": "Alberto Pedrón. Utiel-Requena. Bobal, Garnacha"
          },
          {
            "name": "Bala Roja",
            "tag": null,
            "vintage": 2022,
            "price": 30,
            "desc": "Verónica Romero. Utiel-Requena. Bobal"
          },
          {
            "name": "Negre, Cañada De Los Moros",
            "tag": null,
            "vintage": 2021,
            "price": 32.5,
            "desc": "Set Vins de Muntanya. Siete Aguas, Valencia. Bobal"
          },
          {
            "name": "Mestizaje",
            "tag": null,
            "vintage": 2022,
            "price": 23,
            "desc": "Mustiguillo. El Terrerazo. Bobal, Garnacha, Cabernet Sauvignon"
          },
          {
            "name": "Finca Terrerazo",
            "tag": null,
            "vintage": 2022,
            "price": 43.5,
            "desc": "Mustiguillo. El Terrerazo. Bobal"
          },
          {
            "name": "Sensal",
            "tag": null,
            "vintage": 2022,
            "price": 34.5,
            "desc": "Javi Revert Viticultor. La Font de la Figuera. Garnacha, Arcos, Bonicaire"
          },
          {
            "name": "Simeta",
            "tag": null,
            "vintage": 2022,
            "price": 59,
            "desc": "Javi Revert Viticultor. La Font de la Figuera. Arcos"
          },
          {
            "name": "La Pebrella, Ferrero i Senís",
            "tag": null,
            "vintage": 2023,
            "price": 48,
            "desc": "Celler del Roure. Moixent. Arcos, Forcallá"
          },
          {
            "name": "Parotet",
            "tag": null,
            "vintage": 2021,
            "price": 42.3,
            "desc": "Celler del Roure. Moixent. Arcos, Mandó"
          },
          {
            "name": "Casa Sosegada",
            "tag": null,
            "vintage": 2022,
            "price": 29.9,
            "desc": "Rafael Cambra. Fontanars dels Alforins. Monastrell, Graciano, Tempranillo, Garnacha, Malvasía"
          },
          {
            "name": "El Cordero y las Vírgenes",
            "tag": null,
            "vintage": 2019,
            "price": 42.3,
            "desc": "Fil.loxera & Cia. Fontanars dels Alforins. Garnacha tinta, Garnacha Blanca, Monastrell, Graciano, Tempranillo, Malvasía"
          },
          {
            "name": "Clotàs Embolicaire",
            "tag": null,
            "vintage": 2023,
            "price": 31,
            "desc": "Vicente Flors y Alma Nebot. Les Useres, Castellón. Embolicaire"
          },
          {
            "name": "Mar de Vins Negre",
            "tag": null,
            "vintage": 2023,
            "price": 28,
            "desc": "Mar de Vins. La Nucía, Alicante. Monastrell, Giró"
          }
        ]
      },
      {
        "title": {
          "es": "Aragón",
          "en": "Aragon"
        },
        "wines": [
          {
            "name": "Rubus Quercus",
            "tag": null,
            "vintage": 2024,
            "price": 23,
            "desc": "Pablo Ministro & Juanvi Alcañiz. Rubielos de Mora, Teruel. Garnacha, Miguel de Arco"
          },
          {
            "name": "La Viña de Báguena",
            "tag": null,
            "vintage": 2023,
            "price": 38,
            "desc": "Pablo Ministro & Juanvi Alcañiz. Rubielos de Mora, Teruel. Garnacha"
          },
          {
            "name": "As Ladieras",
            "tag": null,
            "vintage": 2021,
            "price": 36,
            "desc": "Cuevas de Arom. Calatayud. Garnacha"
          },
          {
            "name": "Kemisió",
            "tag": null,
            "vintage": 2023,
            "price": 44,
            "desc": "Jorge Olivera. Huesca. Variedades Desconocidas"
          },
          {
            "name": "Entremón",
            "tag": null,
            "vintage": 2023,
            "price": 49,
            "desc": "Jorge Olivera. Huesca. Syrah"
          },
          {
            "name": "O Charraire",
            "tag": null,
            "vintage": 2023,
            "price": 49,
            "desc": "Jorge Olivera. Huesca. Garnacha, Syrah, Tempranillo"
          }
        ]
      },
      {
        "title": {
          "es": "Cataluña y Mallorca",
          "en": "Catalonia and Majorca"
        },
        "wines": [
          {
            "name": "Turó de les Abelles",
            "tag": null,
            "vintage": 2015,
            "price": 36.5,
            "desc": "Finca Villadellops. Penedés. Garnacha, Syrah"
          },
          {
            "name": "Salanques",
            "tag": null,
            "vintage": 2021,
            "price": 49.5,
            "desc": "Mas Doix. Priorat. Garnacha, Cariñena, Syrah"
          },
          {
            "name": "Analema",
            "tag": null,
            "vintage": 2018,
            "price": 29.9,
            "desc": "Antigva. Montsant. Garnacha Peluda"
          },
          {
            "name": "Supernova",
            "tag": null,
            "vintage": 2022,
            "price": 31,
            "desc": "Ca´n Verdura. Benissalem, Mallorca. Manto Negro"
          }
        ]
      },
      {
        "title": {
          "es": "Castilla-La Mancha y Murcia",
          "en": "Castilla-La Mancha and Murcia"
        },
        "wines": [
          {
            "name": "Albahara",
            "tag": null,
            "vintage": 2023,
            "price": 25,
            "desc": "Envínate. Almansa. Garnacha Tintorera"
          },
          {
            "name": "@rroba",
            "tag": null,
            "vintage": 2023,
            "price": 27,
            "desc": "Bodegas Gratias. Casas Ibáñez. Pintail@"
          },
          {
            "name": "Soy Caliza",
            "tag": null,
            "vintage": 2022,
            "price": 33,
            "desc": "Bodegas Gratias. Casas Ibáñez. Bobal"
          },
          {
            "name": "Ponce PF",
            "tag": null,
            "vintage": 2023,
            "price": 31,
            "desc": "Bodegas Ponce. Manchuela. Bobal"
          },
          {
            "name": "Finca Sandoval",
            "tag": null,
            "vintage": 2022,
            "price": 42,
            "desc": "Finca Sandoval. Manchuela. Syrah"
          },
          {
            "name": "La Tendida",
            "tag": null,
            "vintage": 2023,
            "price": 28,
            "desc": "Casa Castillo. Jumilla. Monastrell, Garnacha"
          },
          {
            "name": "La Servil",
            "tag": null,
            "vintage": 2022,
            "price": 41,
            "desc": "Bodegas Cerrón. Fuente Álamo. Monastrell"
          }
        ]
      },
      {
        "title": {
          "es": "Islas Canarias",
          "en": "Canary Islands"
        },
        "wines": [
          {
            "name": "Artífice",
            "tag": null,
            "vintage": 2017,
            "price": 35,
            "desc": "Borja Pérez. Tenerife. Listán Negro"
          },
          {
            "name": "Ariana",
            "tag": null,
            "vintage": 2021,
            "price": 34,
            "desc": "El Grifo. Lanzarote. Syrah, Listán Negro"
          }
        ]
      },
      {
        "title": {
          "es": "Galicia, Bierzo y Navarra",
          "en": "Galicia, Bierzo and Navarre"
        },
        "wines": [
          {
            "name": "As Xaras",
            "tag": null,
            "vintage": 2022,
            "price": 29,
            "desc": "Fedellos Do Couto. Ribeira Sacra. Mencía"
          },
          {
            "name": "Taté",
            "tag": null,
            "vintage": 2022,
            "price": 61,
            "desc": "Viña Somoza. Valdeorras. Garnacha Tintorera, Mencía, Merenzao, Brancellao"
          },
          {
            "name": "Azos Da Vila",
            "tag": null,
            "vintage": 2019,
            "price": 31,
            "desc": "Daterra Viticultores. Ribeira Sacra. Mouratón, Mencía, Gran Negro, Garnacha Tintorera, Merenzano"
          },
          {
            "name": "Dominio de Anza, El Repolao",
            "tag": null,
            "vintage": 2022,
            "price": 62.5,
            "desc": "Diego Magaña. Bierzo. Mencía"
          },
          {
            "name": "Mengoba Espanillo",
            "tag": null,
            "vintage": 2020,
            "price": 42.5,
            "desc": "Gregory Pérez. Bierzo. Mencía"
          },
          {
            "name": "Bakán",
            "tag": null,
            "vintage": 2022,
            "price": 38.5,
            "desc": "Viña Zorzal. Navarra. Mazuelo"
          }
        ]
      },
      {
        "title": {
          "es": "Ribera del Duero",
          "en": "Ribera del Duero"
        },
        "wines": [
          {
            "name": "Hacienda Solano Viñas Viejas",
            "tag": null,
            "vintage": 2022,
            "price": 39.9,
            "desc": "Toni Sarrión. La aguilera. Tempranillo"
          },
          {
            "name": "Tr3smano Vendimia",
            "tag": null,
            "vintage": 2020,
            "price": 55,
            "desc": "Lagar de Proventus. Peñafiel. Tempranillo"
          },
          {
            "name": "Pícaro Del Águila",
            "tag": null,
            "vintage": 2022,
            "price": 42,
            "desc": "Dominio Del Águila. La Aguilera. Tempranillo, Albillo, Garnacha, Bobal"
          },
          {
            "name": "AALTO",
            "tag": null,
            "vintage": 2022,
            "price": 62,
            "desc": "Aalto. Quintanilla de Arriba. Tempranillo"
          },
          {
            "name": "PSI",
            "tag": null,
            "vintage": 2021,
            "price": 80,
            "desc": "Dominio de Pingus. Quintanilla de Onésimo. Tempranillo, Garnacha"
          },
          {
            "name": "Le Fleur Vivaltus",
            "tag": null,
            "vintage": 2016,
            "price": 85,
            "desc": "Bodegas Vivaltus. Curiel de Duero. Tempranillo, Merlot, Cabernet Sauvignon"
          },
          {
            "name": "Tomás Postigo 3º Año",
            "tag": null,
            "vintage": 2021,
            "price": 59.9,
            "desc": "Tomás Postigo. Peñafiel. Tempranillo, Cabernet Sauvignon, Merlot, Malbec"
          }
        ]
      },
      {
        "title": {
          "es": "La Rioja",
          "en": "La Rioja"
        },
        "wines": [
          {
            "name": "Finca La Emperatriz",
            "tag": null,
            "vintage": 2018,
            "price": 41,
            "desc": "Hermanos Hernáiz. Rioja Alta. Tempranillo, Garnacha, Viura"
          },
          {
            "name": "Viña Tondonia",
            "tag": null,
            "vintage": 2012,
            "price": 60,
            "desc": "López de Heredia. Rioja Alta. Tempranillo, Garnacha Tinta, Graciano, Mazuelo"
          },
          {
            "name": "El Espinal",
            "tag": null,
            "vintage": 2022,
            "price": 49,
            "desc": "Exopto. Rioja Alavesa. Maturana Tinta"
          },
          {
            "name": "Ostatu Crianza",
            "tag": null,
            "vintage": 2022,
            "price": 25,
            "desc": "Bodegas Ostatu. Rioja Alavesa. Tempranillo, Graciano, Mazuelo, Garnacha"
          },
          {
            "name": "Bai Gorri de Garaje",
            "tag": null,
            "vintage": 2015,
            "price": 62,
            "desc": "Bodegas Bai Gorri. Rioja Alavesa. Tempranillo"
          },
          {
            "name": "Ángeles de Amaren",
            "tag": null,
            "vintage": 2019,
            "price": 34,
            "desc": "Bodegas Amaren. Rioja Alavesa. Tempranillo, Graciano"
          },
          {
            "name": "Senderos de Ukán",
            "tag": null,
            "vintage": 2021,
            "price": 35,
            "desc": "Koldo Eguren. Rioja Alavesa. Tempranillo"
          },
          {
            "name": "Luis Cañas Selección Familia",
            "tag": null,
            "vintage": 2019,
            "price": 39.5,
            "desc": "Bodegas Luis Cañas. Rioja Alavesa. Tempranillo, Cabernet Sauvignon"
          }
        ]
      }
    ]
  },
  {
    "id": "tinto-internacional",
    "es": "Tintos internacionales",
    "en": "International reds",
    "regions": [
      {
        "title": {
          "es": "Francia",
          "en": "France"
        },
        "wines": [
          {
            "name": "Beaujolais Villages Nouveau",
            "tag": null,
            "vintage": 2025,
            "price": 22,
            "desc": "Joseph Drouhin. Beaujolais. Gamay"
          },
          {
            "name": "Domaine Des Perdrix",
            "tag": null,
            "vintage": 2023,
            "price": 62,
            "desc": "Bourgogne. Pinot Noir"
          },
          {
            "name": "David Duband, Louis Auguste Cuvée",
            "tag": null,
            "vintage": 2023,
            "price": 60,
            "desc": "Hautes-Côtes de Nuits, Bourgogne. Pinot Noir"
          },
          {
            "name": "Domaine Génot-Boulanger 1er Cru",
            "tag": null,
            "vintage": 2021,
            "price": 85,
            "desc": "Mercurey-Sanzenay, Côte Chalonnaise, Bourgogne. Pinot Noir"
          },
          {
            "name": "Domaine Alexander Parigot 1er Cru",
            "tag": null,
            "vintage": 2020,
            "price": 75,
            "desc": "Les Vergelesses, Côte de Beaune, Bourgogne. Pinot Noir"
          },
          {
            "name": "Domaine Faiveley",
            "tag": null,
            "vintage": 2022,
            "price": 58,
            "desc": "La Framboisière Monopole, Mercurey, Côte D´Or. Pinot Noir"
          },
          {
            "name": "Domaine Pierre Guillemot",
            "tag": null,
            "vintage": 2022,
            "price": 45,
            "desc": "Côte D´Or, Bourgogne. Pinot Noir"
          },
          {
            "name": "Didier Fornerol",
            "tag": null,
            "vintage": 2020,
            "price": 48,
            "desc": "Côtes de Nuits-Villages, Côte D´Or, Bourgogne. Pinot Noir"
          },
          {
            "name": "Domaine Les Astrelles, En Riottes",
            "tag": null,
            "vintage": 2022,
            "price": 45,
            "desc": "Bourgogne, Passé Tout Grains. Pinot Noir, Gamay"
          },
          {
            "name": "Domaine des Carlines",
            "tag": null,
            "vintage": 2020,
            "price": 47,
            "desc": "Côtes du Jura. Poulsard"
          },
          {
            "name": "Pauillac",
            "tag": null,
            "vintage": 2017,
            "price": 55,
            "desc": "J.M.Cazes. Bordeaux. Cabernet Franc, Merlot, Cabernet Sauvignon"
          },
          {
            "name": "Domaine de Chevalier",
            "tag": null,
            "vintage": 2011,
            "price": 125,
            "desc": "Familie Bernard. Grand Cru Classé de Graves. Pessac-Léognan, Bordeaux. Cabernet Sauvignon, Merlot, Petit Verdot"
          },
          {
            "name": "Fugue de Nenin",
            "tag": null,
            "vintage": 2019,
            "price": 63,
            "desc": "Domaines Delon. Pomerol. Bordeaux. Merlot, Cabernet Franc"
          },
          {
            "name": "Château Ormes De Pez",
            "tag": null,
            "vintage": 2019,
            "price": 54,
            "desc": "J.M. Cazes. Saint-Estèphe. Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot"
          },
          {
            "name": "Domaine Les Bruyères Cuveé Georges",
            "tag": null,
            "vintage": 2021,
            "price": 50,
            "desc": "Crozes-Hermitage, Côtes Du Rhone. Syrah"
          }
        ]
      },
      {
        "title": {
          "es": "Alemania",
          "en": "Germany"
        },
        "wines": [
          {
            "name": "Mettenheimer Löss",
            "tag": null,
            "vintage": 2020,
            "price": 38,
            "desc": "Sander. Rheinhessen. Pinot Noir"
          }
        ]
      },
      {
        "title": {
          "es": "Portugal",
          "en": "Portugal"
        },
        "wines": [
          {
            "name": "Antonio Madeira Vinhas Velhas",
            "tag": null,
            "vintage": 2016,
            "price": 40,
            "desc": "Sierra de Astrela, Dão. Tinta Amarela, Baga, Jaén"
          },
          {
            "name": "Antonio Madeira A Centenária",
            "tag": null,
            "vintage": 2016,
            "price": 55,
            "desc": "Serra de Astrela, Dão. Jaén, Tinta Amarela, Baga, Negro Mauro, Bastardo"
          }
        ]
      },
      {
        "title": {
          "es": "Italia",
          "en": "Italy"
        },
        "wines": [
          {
            "name": "Barolo Giovanni Rosso",
            "tag": null,
            "vintage": 2020,
            "price": 60,
            "desc": "Giovanni Rosso. Serralunga d´Alba, Piamonte. Nebbiolo"
          },
          {
            "name": "Foradori Teroldego",
            "tag": null,
            "vintage": 2019,
            "price": 37,
            "desc": "Foradori. Vignetti Delle Dolomiti, Trentino. Teroldego"
          },
          {
            "name": "Franzina Nove",
            "tag": null,
            "vintage": 2022,
            "price": 29,
            "desc": "Franzina. Rosso de Valltellina. Chiavennasca"
          },
          {
            "name": "Sassella",
            "tag": null,
            "vintage": 2021,
            "price": 47,
            "desc": "Colombo Sormani. Valltellina Superiore. Chiavennasca"
          }
        ]
      },
      {
        "title": {
          "es": "Nuevo Mundo",
          "en": "New World"
        },
        "wines": [
          {
            "name": "Calixa",
            "tag": null,
            "vintage": 2016,
            "price": 29,
            "desc": "Monte Xanic. Baja California, México. Syrah"
          },
          {
            "name": "Penfolds Max´s",
            "tag": null,
            "vintage": 2016,
            "price": 38.5,
            "desc": "Penfolds. South Australia. Syrah, Cabernet Sauvignon"
          },
          {
            "name": "Domaine Nico, Grand Père",
            "tag": null,
            "vintage": 2022,
            "price": 49,
            "desc": "Laura Catena. Valle de Uco, Mendoza, Argentina. Pinot Noir"
          },
          {
            "name": "Raquis, Las Bases",
            "tag": null,
            "vintage": 2022,
            "price": 61,
            "desc": "Andrés Vignoni. Valle de Uco, Mendoza, Argentina. Malbec"
          },
          {
            "name": "Gran Tomero",
            "tag": null,
            "vintage": 2021,
            "price": 40,
            "desc": "Vistalba. Valle de Uco, Mendoza, Argentina. Malbec"
          },
          {
            "name": "EQ Cool Climate",
            "tag": null,
            "vintage": 2017,
            "price": 52,
            "desc": "Matetic. Valle de San Antonio, Chile. Syrah"
          }
        ]
      }
    ]
  }
];
