/**
 * Restaurant menu configuration for Nanny's Eatery (Kingsland, Auckland).
 *
 * Media fields:
 * - image: small card image
 * - modalImage: large image in popup
 * - video: optional (if present it overrides modalImage)
 *
 * To use your own media, place files in ./assets and reference like:
 * image: "./assets/item-card.jpg"
 * modalImage: "./assets/item-modal.jpg"
 */

const RESTAURANT_CONFIG = {
  name: "Nanny's Eatery",
  tagline: "Jamaican Restaurant & Rum Bar · Kingston to Kingsland",
  footerNote:
    "492 New North Road, Kingsland, Auckland 1021\nOpen for dine-in, takeaway & delivery · +64 9 282 1632",

  theme: {
    colorBg: "#0b100b",
    colorSurface: "#141b14",
    colorSurface2: "#1e2720",
    colorSurface3: "#28342a",
    colorBorder: "#3a483b",

    colorAccent: "#ffd21f",
    colorAccentLight: "#ffe783",
    colorAccentDim: "#baa21d",

    colorText: "#f5f7ef",
    colorTextMuted: "#c9d2bb",
    colorTextDim: "#89957f",

    fontDisplay: "Playfair Display",
    fontBody: "Montserrat",

    nameFont: "display",
    cardLayout: "left",
    tabIcons: ["🍗", "🥘", "🌶️", "🍟"],
  },

  categories: [
    {
      name: "Specials",
      items: [
        {
          name: "Patties",
          price: "$30.00",
          description: "Two pieces. Choose from chicken, beef or vegetarian.",
          image:
            "./assets/Patties.png",
          modalImage:
            "./assets/Patties.png",
          origin: "Nanny's specials",
          allergens: "Varies by filling",
          spicy: true,
        },
        {
          name: "Jamaican Oxtail (DF)",
          price: "$48.00",
          description: "Served with two sides. Dairy Free.",
          image:
            "./assets/Jamaican_Oxtail.png",
          modalImage:
            "./assets/Jamaican_Oxtail.png",
          origin: "Jamaican slow-cook",
          allergens: "None listed",
          chefRec: true,
        },
      ],
    },
    {
      name: "Large Plates",
      items: [
        {
          name: "Quarter Jerk Chicken (GF)(DF)",
          price: "$38.00",
          description:
            "Tender quarter chicken seasoned with jerk spices. Gluten-free and dairy-free.",
          image:
            "./assets/Quarter_Jerk_Chicken.png",
          modalImage:
            "./assets/Quarter_Jerk_Chicken.png",
          origin: "Kingston style",
          allergens: "None listed",
          spicy: true,
          chefRec: true,
        },
        {
          name: "Half Jerk Chicken (GF)(DF)",
          price: "$46.00",
          description:
            "Juicy jerk chicken, seasoned to perfection. Gluten-free and dairy-free.",
          image:
            "https://images.squarespace-cdn.com/content/v1/69281792ca7e442a3263b75b/1764235155363-3N1FRCW0N8PBFFKVGN56/504378367_1688909385069939_4762178306718475331_n.jpeg",
          modalImage:
            "https://images.squarespace-cdn.com/content/v1/69281792ca7e442a3263b75b/1764235155363-3N1FRCW0N8PBFFKVGN56/504378367_1688909385069939_4762178306718475331_n.jpeg",
          origin: "Kingston style",
          allergens: "None listed",
          spicy: true,
        },
        {
          name: "Jerk Pork Belly 250g (GF)(DF)",
          price: "$38.00",
          description: "Served as 250g. Dairy Free.",
          image:
            "https://images.squarespace-cdn.com/content/v1/69281792ca7e442a3263b75b/1764235155353-7JF4C9I46PXKH7DVVSFB/IMG_0008.jpeg",
          modalImage:
            "https://images.squarespace-cdn.com/content/v1/69281792ca7e442a3263b75b/1764235155353-7JF4C9I46PXKH7DVVSFB/IMG_0008.jpeg",
          origin: "Nanny's signature",
          allergens: "None listed",
          spicy: true,
        },
        {
          name: "Ital Coconut Curry (VG)(GF)",
          price: "$47.00",
          description:
            "Jamaican vegetable coconut curry with your choice of two sides.",
          image:
            "https://images.squarespace-cdn.com/content/v1/69281792ca7e442a3263b75b/1764235155343-H2BX7CQO6UIUGBTB8ATK/IMG_0006.jpeg",
          modalImage:
            "https://images.squarespace-cdn.com/content/v1/69281792ca7e442a3263b75b/1764235155343-H2BX7CQO6UIUGBTB8ATK/IMG_0006.jpeg",
          origin: "Ital inspired",
          allergens: "None listed",
          veg: true,
        },
      ],
    },
    {
      name: "Snacks",
      items: [
        {
          name: "Cauliflower Bites (V)(GF)",
          price: "$27.00",
          description: "Served with JP's barbecue sauce.",
          image:
            "https://images.squarespace-cdn.com/content/v1/69281792ca7e442a3263b75b/1764235155353-7JF4C9I46PXKH7DVVSFB/IMG_0008.jpeg",
          modalImage:
            "https://images.squarespace-cdn.com/content/v1/69281792ca7e442a3263b75b/1764235155353-7JF4C9I46PXKH7DVVSFB/IMG_0008.jpeg",
          veg: true,
          origin: "Bar snack",
          allergens: "None listed",
        },
        {
          name: "Popcorn Chicken (GF)(DF)",
          price: "$30.00",
          description:
            "Jamaican fried chicken thighs coated in JP's barbecue sauce with aioli and slaw.",
          image:
            "https://images.squarespace-cdn.com/content/v1/69281792ca7e442a3263b75b/1764235155353-7JF4C9I46PXKH7DVVSFB/IMG_0008.jpeg",
          modalImage:
            "https://images.squarespace-cdn.com/content/v1/69281792ca7e442a3263b75b/1764235155353-7JF4C9I46PXKH7DVVSFB/IMG_0008.jpeg",
          origin: "Nanny's bar food",
          allergens: "Egg",
        },
        {
          name: "Jalapeño Poppers (V)",
          price: "$26.00",
          description: "Cheesy jalapeño goodness with aioli.",
          image:
            "https://images.squarespace-cdn.com/content/v1/69281792ca7e442a3263b75b/1764235155343-H2BX7CQO6UIUGBTB8ATK/IMG_0006.jpeg",
          modalImage:
            "https://images.squarespace-cdn.com/content/v1/69281792ca7e442a3263b75b/1764235155343-H2BX7CQO6UIUGBTB8ATK/IMG_0006.jpeg",
          veg: true,
          spicy: true,
          origin: "Crowd favourite",
          allergens: "Dairy",
        },
      ],
    },
    {
      name: "Sides",
      items: [
        {
          name: "Macaroni and Cheese (V)",
          price: "$14.00",
          description: "Creamy five cheese macaroni and cheese.",
          image:
            "https://images.squarespace-cdn.com/content/v1/69281792ca7e442a3263b75b/1764235155343-H2BX7CQO6UIUGBTB8ATK/IMG_0006.jpeg",
          modalImage:
            "https://images.squarespace-cdn.com/content/v1/69281792ca7e442a3263b75b/1764235155343-H2BX7CQO6UIUGBTB8ATK/IMG_0006.jpeg",
          veg: true,
          origin: "House side",
          allergens: "Dairy, Gluten",
        },
        {
          name: "Rice and Peas (VG)(GF)",
          price: "$13.00",
          description: "Vegan and gluten-free rice with peas.",
          image:
            "./assets/RiceandPeas.jpg",
          modalImage:
            "./assets/RiceandPeas.jpg",
          veg: true,
          origin: "Jamaican classic",
          allergens: "None listed",
        },
        {
          name: "Slaw (GF)(DF)",
          price: "$10.00",
          description: "Comes with lime, coriander and jalapeño dressing.",
          image:
            "./assets/Slaw.jpg",
          modalImage:
            "./assets/Slaw.jpg",
          veg: true,
          origin: "Fresh side",
          allergens: "None listed",
        },
      ],
    },
  ],
};
