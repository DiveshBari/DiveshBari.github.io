/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║          RESTAURANT MENU CONFIG — Edit This File Only           ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * To create a new restaurant menu:
 * 1. Edit RESTAURANT_CONFIG below
 * 2. Open menu.html in a browser — done!
 *
 * Three ready-to-use presets are included at the bottom.
 * Uncomment one to switch themes instantly.
 */

const RESTAURANT_CONFIG = {

  // ── IDENTITY ─────────────────────────────────────────────────────
  name: "Ballel balle",
  tagline: "Tommy · Est. 2009",
  footerNote: "All prices include VAT · Gratuity at your discretion\nPlease inform your server of any allergies",

  // ── THEME ─────────────────────────────────────────────────────────
  // Controls all colors, fonts, and visual style
  theme: {
    // Background & surfaces
    colorBg:       "#0A0A0A",
    colorSurface:  "#111111",
    colorSurface2: "#181818",
    colorSurface3: "#222222",
    colorBorder:   "#1e1e1e",

    // Accent color (used for price, tabs, badges, hover states)
    colorAccent:      "#C9A84C",
    colorAccentLight: "#E8CC7A",
    colorAccentDim:   "#8B6F33",

    // Text
    colorText:      "#F0EBE0",
    colorTextMuted: "#8A8070",
    colorTextDim:   "#4A4540",

    // Fonts — any Google Font name works
    fontDisplay: "Cormorant Garamond",   // Used for dish names, headings, prices
    fontBody:    "Montserrat",           // Used for UI labels, descriptions

    // Header restaurant name style: "serif" | "sans" | "display"
    nameFont: "serif",

    // Card image layout: "left" | "top"
    cardLayout: "left",

    // Tab icon style character (one per category, in order)
    tabIcons: ["◈", "◆", "◇", "◉"],
  },

  // ── MENU CATEGORIES & ITEMS ───────────────────────────────────────
  // categories: array of { name, items[] }
  // item fields:
  //   name        (string, required)
  //   price       (string, required)   e.g. "$35" or "₹850"
  //   description (string, required)
  //   image       (string, required)   URL or relative path
  //   video       (string, optional)   URL or relative path to .mp4
  //   emoji       (string)             shown in modal when no video
  //   chefRec     (boolean)            shows "Chef's Pick" badge
  //   veg         (boolean)            shows "Vegetarian" badge
  //   spicy       (boolean)            shows "Spicy" badge
  //   origin      (string)             shown in modal subtitle
  //   allergens   (string)
  //   details: { calories, prep, pairing }

  categories: [
    {
      name: "Starters",
      items: [
        {
          name: "Seared Scallops",
          price: "$24",
          description: "Hand-dived scallops, cauliflower purée, crispy capers, brown butter emulsion with truffle oil.",
          image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",
          emoji: "🍽️", chefRec: true,
          origin: "Atlantic", allergens: "Shellfish, Dairy",
          details: { calories: "220 kcal", prep: "12 min", pairing: "Chablis" }
        },
        {
          name: "Foie Gras Torchon",
          price: "$28",
          description: "Duck foie gras torchon, Sauternes gelée, toasted brioche, micro herbs and pickled grapes.",
          image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?w=400&q=80",
          emoji: "🦆", chefRec: true,
          origin: "France", allergens: "Gluten, Dairy",
          details: { calories: "310 kcal", prep: "15 min", pairing: "Sauternes" }
        },
        {
          name: "Heirloom Carpaccio",
          price: "$18",
          description: "Thinly sliced heirloom tomatoes, stracciatella, aged balsamic, Sicilian capers, basil oil.",
          image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80",
          emoji: "🍅", veg: true,
          origin: "Italy", allergens: "Dairy",
          details: { calories: "180 kcal", prep: "8 min", pairing: "Rosé" }
        },
      ]
    },
    {
      name: "Steaks",
      items: [
        {
          name: "Wagyu Fillet A5",
          price: "$120",
          description: "Japanese A5 Wagyu fillet, roasted bone marrow butter, smoked sea salt, watercress purée.",
          image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80",
          emoji: "🥩", chefRec: true,
          origin: "Japan", allergens: "Dairy",
          details: { calories: "580 kcal", prep: "18 min", pairing: "Cabernet" }
        },
        {
          name: "Dry-Aged Côte de Bœuf",
          price: "$85",
          description: "40-day dry-aged rib on the bone, confit garlic, bone marrow gratin, peppercorn jus.",
          image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?w=400&q=80",
          emoji: "🍖",
          origin: "Scotland", allergens: "Dairy",
          details: { calories: "720 kcal", prep: "22 min", pairing: "Bordeaux" }
        },
        {
          name: "Chateaubriand",
          price: "$95",
          description: "Centre-cut tenderloin, pommes fondant, béarnaise, wild mushroom duxelles. For two.",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
          emoji: "🥩", chefRec: true,
          origin: "France", allergens: "Dairy, Egg",
          details: { calories: "640 kcal", prep: "25 min", pairing: "Burgundy" }
        },
      ]
    },
    {
      name: "Seafood",
      items: [
        {
          name: "Whole Dover Sole",
          price: "$68",
          description: "Meunière-style Dover sole, caper-lemon beurre noisette, haricots verts, preserved lemon.",
          image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80",
          emoji: "🐟",
          origin: "Channel Islands", allergens: "Dairy",
          details: { calories: "420 kcal", prep: "16 min", pairing: "Meursault" }
        },
        {
          name: "Lobster Thermidor",
          price: "$88",
          description: "Half native lobster, cognac cream sauce, gruyère gratin, saffron risotto, chervil.",
          image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&q=80",
          emoji: "🦞", chefRec: true,
          origin: "Brittany", allergens: "Shellfish, Dairy",
          details: { calories: "510 kcal", prep: "20 min", pairing: "Viognier" }
        },
        {
          name: "Grilled Sea Bass",
          price: "$52",
          description: "Line-caught sea bass, fennel confit, tomato-olive compote, tapenade and basil.",
          image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=400&q=80",
          emoji: "🐠",
          origin: "Mediterranean", allergens: "None",
          details: { calories: "360 kcal", prep: "14 min", pairing: "Vermentino" }
        },
      ]
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Valrhona Soufflé",
          price: "$18",
          description: "Warm Valrhona 70% chocolate soufflé, Tahitian vanilla ice cream, cocoa nib tuile.",
          image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
          emoji: "🍫", chefRec: true,
          origin: "France", allergens: "Dairy, Egg, Gluten",
          details: { calories: "480 kcal", prep: "20 min", pairing: "Pedro Ximénez" }
        },
        {
          name: "Tarte Tatin",
          price: "$16",
          description: "Caramelised Cox apple tarte tatin, Calvados cream, salted caramel, vanilla pod.",
          image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80",
          emoji: "🍎", veg: true,
          origin: "Normandy", allergens: "Dairy, Gluten, Egg",
          details: { calories: "520 kcal", prep: "12 min", pairing: "Calvados" }
        },
        {
          name: "Île Flottante",
          price: "$15",
          description: "Poached meringue island, crème anglaise, praline caramel lattice, crystallised violets.",
          image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
          emoji: "🍮", veg: true,
          origin: "France", allergens: "Dairy, Egg",
          details: { calories: "340 kcal", prep: "10 min", pairing: "Muscat" }
        },
      ]
    }
  ]
};


// ════════════════════════════════════════════════════════════════════
//  PRESET CONFIGS — Uncomment one block to instantly switch themes
// ════════════════════════════════════════════════════════════════════

/*
// ── PRESET 1: SPICE GARDEN (Indian Restaurant — Warm Terracotta) ───
const RESTAURANT_CONFIG = {
  name: "SPICE GARDEN",
  tagline: "Authentic Indian Cuisine · Since 1995",
  footerNote: "Prices inclusive of all taxes\nPlease mention any dietary requirements",
  theme: {
    colorBg:          "#0D0805",
    colorSurface:     "#160C08",
    colorSurface2:    "#1E110A",
    colorSurface3:    "#271610",
    colorBorder:      "#2a1810",
    colorAccent:      "#E8864A",
    colorAccentLight: "#F5A875",
    colorAccentDim:   "#9E5530",
    colorText:        "#F5EEE6",
    colorTextMuted:   "#9A8070",
    colorTextDim:     "#4A3830",
    fontDisplay:      "Playfair Display",
    fontBody:         "Raleway",
    nameFont:         "serif",
    cardLayout:       "left",
    tabIcons:         ["❋", "✦", "❖", "✿"],
  },
  categories: [
    {
      name: "Snacks",
      items: [
        {
          name: "Samosa Chaat",
          price: "₹220",
          description: "Crisp golden samosas crushed over chole, tangy tamarind chutney, mint raita, sev and pomegranate.",
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
          emoji: "🥘", chefRec: true, veg: true,
          origin: "Delhi", allergens: "Gluten, Dairy",
          details: { calories: "320 kcal", prep: "10 min", pairing: "Masala Chai" }
        },
        {
          name: "Pani Puri",
          price: "₹180",
          description: "Six crisp hollow puris filled with spiced potato, served with tangy-spicy flavoured water.",
          image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&q=80",
          emoji: "🫙", veg: true, chefRec: false,
          origin: "Mumbai", allergens: "Gluten",
          details: { calories: "180 kcal", prep: "5 min", pairing: "Jaljeera" }
        },
      ]
    },
    {
      name: "Mains",
      items: [
        {
          name: "Dal Makhani",
          price: "₹380",
          description: "Slow-cooked black lentils in a rich tomato-butter sauce, finished with cream. Served with naan.",
          image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80",
          emoji: "🍛", chefRec: true, veg: true,
          origin: "Punjab", allergens: "Dairy, Gluten",
          details: { calories: "480 kcal", prep: "20 min", pairing: "Lassi" }
        },
        {
          name: "Butter Chicken",
          price: "₹450",
          description: "Tandoor-roasted chicken in a velvety tomato-cream sauce, fragrant with kasuri methi and garam masala.",
          image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80",
          emoji: "🍗", chefRec: true,
          origin: "Delhi", allergens: "Dairy",
          details: { calories: "560 kcal", prep: "18 min", pairing: "Mango Lassi" }
        },
        {
          name: "Lamb Rogan Josh",
          price: "₹520",
          description: "Slow-braised Kashmiri lamb with whole spices, caramelised onion gravy and saffron-scented rice.",
          image: "https://images.unsplash.com/photo-1545247181-516773cae754?w=400&q=80",
          emoji: "🥩", spicy: true,
          origin: "Kashmir", allergens: "None",
          details: { calories: "620 kcal", prep: "25 min", pairing: "Red Wine" }
        },
      ]
    },
    {
      name: "Breads",
      items: [
        {
          name: "Garlic Naan",
          price: "₹120",
          description: "Soft leavened bread with roasted garlic and butter, baked in a clay tandoor at 400°C.",
          image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
          emoji: "🫓", veg: true,
          origin: "India", allergens: "Gluten, Dairy",
          details: { calories: "220 kcal", prep: "6 min", pairing: "Any curry" }
        },
        {
          name: "Stuffed Paratha",
          price: "₹160",
          description: "Whole-wheat flatbread stuffed with spiced aloo, served with white butter and achaar.",
          image: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?w=400&q=80",
          emoji: "🫓", veg: true,
          origin: "Punjab", allergens: "Gluten, Dairy",
          details: { calories: "310 kcal", prep: "8 min", pairing: "Chai" }
        },
      ]
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Gulab Jamun",
          price: "₹140",
          description: "Soft milk-solids dumplings soaked in rose-cardamom sugar syrup, served warm.",
          image: "https://images.unsplash.com/photo-1666005565427-af4cb0b3e6d9?w=400&q=80",
          emoji: "🍮", veg: true, chefRec: true,
          origin: "India", allergens: "Dairy, Gluten",
          details: { calories: "380 kcal", prep: "5 min", pairing: "Rabri" }
        },
        {
          name: "Mango Kulfi",
          price: "₹160",
          description: "Dense frozen Indian ice cream made with Alphonso mango, pistachio and saffron.",
          image: "https://images.unsplash.com/photo-1570197571499-166b36435e9f?w=400&q=80",
          emoji: "🍦", veg: true,
          origin: "India", allergens: "Dairy",
          details: { calories: "280 kcal", prep: "3 min", pairing: "Falooda" }
        },
      ]
    }
  ]
};
*/

/*
// ── PRESET 2: SAKURA (Japanese Restaurant — Clean Minimalist) ──────
const RESTAURANT_CONFIG = {
  name: "桜  SAKURA",
  tagline: "Japanese Omakase · Shibuya",
  footerNote: "Seasonal menu changes daily · Please advise of allergies\nService charge 10% · Tax included",
  theme: {
    colorBg:          "#080808",
    colorSurface:     "#0F0F0F",
    colorSurface2:    "#161616",
    colorSurface3:    "#1C1C1C",
    colorBorder:      "#1e1e1e",
    colorAccent:      "#D4788A",
    colorAccentLight: "#E8A0AD",
    colorAccentDim:   "#8A4050",
    colorText:        "#EEECE8",
    colorTextMuted:   "#7A7268",
    colorTextDim:     "#3A3830",
    fontDisplay:      "Noto Serif JP",
    fontBody:         "DM Sans",
    nameFont:         "serif",
    cardLayout:       "left",
    tabIcons:         ["一", "二", "三", "四"],
  },
  categories: [
    {
      name: "Sakizuke",
      items: [
        {
          name: "Uni Chawanmushi",
          price: "¥1,800",
          description: "Silky steamed egg custard topped with fresh Hokkaido sea urchin, dashi jelly and yuzu zest.",
          image: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&q=80",
          emoji: "🥚", chefRec: true,
          origin: "Hokkaido", allergens: "Egg, Shellfish",
          details: { calories: "180 kcal", prep: "15 min", pairing: "Daiginjo Sake" }
        },
        {
          name: "Edamame Tofu",
          price: "¥900",
          description: "House-made silken tofu blended with edamame, served cold with shio-koji and wasabi.",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
          emoji: "🫘", veg: true,
          origin: "Kyoto", allergens: "Soy",
          details: { calories: "120 kcal", prep: "8 min", pairing: "Junmai Sake" }
        },
      ]
    },
    {
      name: "Sashimi",
      items: [
        {
          name: "Otoro Sashimi",
          price: "¥4,200",
          description: "Premium fatty bluefin tuna belly, aged 5 days, served with fresh wasabi and nikiri soy.",
          image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&q=80",
          emoji: "🐟", chefRec: true,
          origin: "Tsukiji", allergens: "Fish, Soy",
          details: { calories: "260 kcal", prep: "5 min", pairing: "Aged Sake" }
        },
        {
          name: "Hamachi Tartare",
          price: "¥2,600",
          description: "Hand-cut yellowtail with avocado, ponzu, sesame oil, tobiko and micro shiso.",
          image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80",
          emoji: "🐠",
          origin: "Kagoshima", allergens: "Fish, Soy, Sesame",
          details: { calories: "220 kcal", prep: "8 min", pairing: "Riesling" }
        },
      ]
    },
    {
      name: "Yakimono",
      items: [
        {
          name: "Wagyu Yakiniku",
          price: "¥6,800",
          description: "A5 Miyazaki wagyu short rib, grilled tableside on binchotan, tare sauce, grated daikon.",
          image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80",
          emoji: "🥩", chefRec: true,
          origin: "Miyazaki", allergens: "Soy",
          details: { calories: "480 kcal", prep: "12 min", pairing: "Bordeaux" }
        },
        {
          name: "Miso-Glazed Cod",
          price: "¥3,200",
          description: "3-day Saikyo miso-marinated black cod, broiled to caramel, pickled cucumber, sansho.",
          image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80",
          emoji: "🐟",
          origin: "Nobu-style", allergens: "Fish, Soy, Gluten",
          details: { calories: "340 kcal", prep: "16 min", pairing: "Chardonnay" }
        },
      ]
    },
    {
      name: "Mizugashi",
      items: [
        {
          name: "Matcha Parfait",
          price: "¥980",
          description: "Ceremonial-grade matcha ice cream, azuki bean paste, warabi mochi, cornflake crumble.",
          image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
          emoji: "🍵", veg: true, chefRec: true,
          origin: "Uji, Kyoto", allergens: "Dairy, Gluten",
          details: { calories: "320 kcal", prep: "5 min", pairing: "Hojicha" }
        },
        {
          name: "Yuzu Panna Cotta",
          price: "¥880",
          description: "Delicate yuzu-scented panna cotta, shiso granita, honey gel, crystallised citrus peel.",
          image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
          emoji: "🍮", veg: true,
          origin: "Kochi", allergens: "Dairy",
          details: { calories: "260 kcal", prep: "5 min", pairing: "Plum Wine" }
        },
      ]
    }
  ]
};
*/

/*
// ── PRESET 3: THE SMOKEHOUSE (BBQ/Casual American — Dark Rustic) ───
const RESTAURANT_CONFIG = {
  name: "THE SMOKEHOUSE",
  tagline: "Low & Slow BBQ · Since 1987",
  footerNote: "All meats smoked on-site daily · Ask about our sauce selection\nKids eat free on Sundays",
  theme: {
    colorBg:          "#080603",
    colorSurface:     "#111008",
    colorSurface2:    "#18160C",
    colorSurface3:    "#201E12",
    colorBorder:      "#28260E",
    colorAccent:      "#D4752A",
    colorAccentLight: "#E89A5A",
    colorAccentDim:   "#8A4E18",
    colorText:        "#F0EAD8",
    colorTextMuted:   "#907A60",
    colorTextDim:     "#403A28",
    fontDisplay:      "Abril Fatface",
    fontBody:         "Nunito",
    nameFont:         "display",
    cardLayout:       "left",
    tabIcons:         ["🔥", "🍖", "🌽", "🍺"],
  },
  categories: [
    {
      name: "Starters",
      items: [
        {
          name: "Burnt Ends",
          price: "$16",
          description: "Point-cut brisket burnt ends, caramelised in house BBQ sauce, jalapeño pickles and white bread.",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
          emoji: "🍖", chefRec: true, spicy: true,
          origin: "Kansas City", allergens: "Gluten, Soy",
          details: { calories: "480 kcal", prep: "10 min", pairing: "Lager" }
        },
        {
          name: "Smoked Wings",
          price: "$14",
          description: "12-hour cold-smoked chicken wings, fried crisp, tossed in Alabama white sauce or buffalo.",
          image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&q=80",
          emoji: "🍗",
          origin: "Alabama", allergens: "Dairy, Egg",
          details: { calories: "540 kcal", prep: "12 min", pairing: "IPA" }
        },
      ]
    },
    {
      name: "Smoked Meats",
      items: [
        {
          name: "18-Hour Brisket",
          price: "$32",
          description: "Oak-smoked whole packer brisket, salt and pepper bark, rendered fat, served sliced.",
          image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?w=400&q=80",
          emoji: "🥩", chefRec: true,
          origin: "Texas", allergens: "None",
          details: { calories: "680 kcal", prep: "25 min", pairing: "Bourbon" }
        },
        {
          name: "St. Louis Ribs (Half Rack)",
          price: "$28",
          description: "Pork spare ribs, dry-rubbed and smoked 5 hours, glazed with our 30-year-old sauce.",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
          emoji: "🍖", chefRec: true, spicy: false,
          origin: "St. Louis", allergens: "Gluten, Soy",
          details: { calories: "720 kcal", prep: "20 min", pairing: "Sweet Tea" }
        },
        {
          name: "Pulled Pork Plate",
          price: "$22",
          description: "12-hour hickory smoked Boston butt, hand-pulled, Carolina vinegar sauce, slaw, pickles.",
          image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80",
          emoji: "🥩",
          origin: "Carolina", allergens: "Gluten",
          details: { calories: "590 kcal", prep: "15 min", pairing: "Pilsner" }
        },
      ]
    },
    {
      name: "Sides",
      items: [
        {
          name: "Mac & Cheese",
          price: "$9",
          description: "Five-cheese stovetop mac, crispy breadcrumb crust, smoked bacon, scallion.",
          image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?w=400&q=80",
          emoji: "🧀", veg: true,
          origin: "Southern US", allergens: "Dairy, Gluten, Egg",
          details: { calories: "420 kcal", prep: "8 min", pairing: "Any beer" }
        },
        {
          name: "Jalapeño Cornbread",
          price: "$7",
          description: "Cast-iron skillet cornbread with roasted jalapeño, honey butter, served hot.",
          image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80",
          emoji: "🌽", veg: true,
          origin: "Texas", allergens: "Dairy, Egg, Gluten",
          details: { calories: "310 kcal", prep: "5 min", pairing: "Honey" }
        },
      ]
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Peach Cobbler",
          price: "$10",
          description: "Warm skillet peach cobbler, vanilla bean ice cream, candied pecans, cinnamon sugar.",
          image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80",
          emoji: "🍑", veg: true, chefRec: true,
          origin: "Georgia", allergens: "Dairy, Gluten, Egg",
          details: { calories: "540 kcal", prep: "10 min", pairing: "Sweet Tea" }
        },
        {
          name: "Banana Pudding",
          price: "$8",
          description: "Layered Nilla wafers, pastry cream, fresh banana, topped with torched meringue.",
          image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
          emoji: "🍌", veg: true,
          origin: "Deep South", allergens: "Dairy, Egg, Gluten",
          details: { calories: "460 kcal", prep: "5 min", pairing: "Coffee" }
        },
      ]
    }
  ]
};
*/
