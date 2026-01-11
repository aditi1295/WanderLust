const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    category: "Beachfront",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    category: "Urban Stay",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    category: "Mountains",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    category: "Villas",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    category: "Camping",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    category: "Beachfront",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    category: "Nature",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    category: "Luxury",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    category: "Mountains",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    category: "Nature",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    category: "Iconic Cities",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    category: "Luxury",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    category: "Trending",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    category: "Iconic Cities",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    category: "Amazing Pools",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    category: "Mountains",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    category: "Urban Stay",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    category: "Villas",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    category: "Trending",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    category: "Deserts",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Cliffside Infinity Pool Retreat",
    category: "Amazing Pools",
    description:
      "Relax in a dramatic cliffside retreat featuring a private infinity pool overlooking the ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2108e",
    },
    price: 4200,
    location: "Uluwatu",
    country: "Indonesia",
  },
  {
    title: "Glass Cabin Under the Northern Lights",
    category: "Arctic",
    description:
      "Sleep beneath the aurora in a heated glass cabin surrounded by Arctic wilderness.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    },
    price: 3200,
    location: "Lapland",
    country: "Finland",
  },
  {
    title: "Jungle Canopy Eco Stay",
    category: "Nature",
    description:
      "An eco-conscious stay hidden in dense jungle canopy with breathtaking wildlife views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 900,
    location: "Tikal",
    country: "Guatemala",
  },
  {
    title: "Royal Heritage Haveli",
    category: "Trending",
    description:
      "Experience regal living in a restored heritage haveli with traditional courtyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1548013146-72479768bada",
    },
    price: 2100,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Oceanfront Bamboo Villa",
    category: "Villas",
    description:
      "A sustainable bamboo villa directly facing the ocean with open-air living spaces.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d45",
    },
    price: 2600,
    location: "Siargao",
    country: "Philippines",
  },
  {
    title: "Minimalist Studio in Seoul",
    category: "Urban Stay",
    description:
      "A sleek minimalist studio located near Seoul’s cultural and shopping districts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    },
    price: 1400,
    location: "Seoul",
    country: "South Korea",
  },
  {
    title: "Desert Dome Experience",
    category: "Deserts",
    description:
      "Stay inside a luxury dome under starry desert skies with modern comforts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 1800,
    location: "Wadi Rum",
    country: "Jordan",
  },
  {
    title: "Floating River Cabin",
    category: "Nature",
    description:
      "A unique floating cabin gently drifting along a calm river surrounded by forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 1600,
    location: "Vang Vieng",
    country: "Laos",
  },
  {
    title: "Countryside Farmhouse Escape",
    category: "Farms",
    description:
      "A peaceful farmhouse surrounded by fields, perfect for slow rural living.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1475856033578-76b4a228f5c5",
    },
    price: 1100,
    location: "Tuscany Countryside",
    country: "Italy",
  },
  {
    title: "Skyline View Serviced Room",
    category: "Rooms",
    description:
      "A modern serviced room with floor-to-ceiling windows and skyline views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    },
    price: 1300,
    location: "Singapore",
    country: "Singapore",
  },
  {
    title: "Hilltop Stone Chalet",
    category: "Mountains",
    description:
      "A stone-built chalet perched on a hilltop with panoramic mountain scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 1900,
    location: "Dolomites",
    country: "Italy",
  },
  {
    title: "Coastal Sailboat Stay",
    category: "Cruising",
    description:
      "Spend your nights aboard a luxury sailboat docked along a scenic coastline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 2400,
    location: "Split",
    country: "Croatia",
  },
  {
    title: "Old Town Rooftop Apartment",
    category: "Iconic Cities",
    description:
      "A rooftop apartment located in a historic old town with iconic city views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1460317442991-0ec209397118",
    },
    price: 1700,
    location: "Prague",
    country: "Czech Republic",
  },
  {
    title: "Rainforest Tree Pod",
    category: "Camping",
    description:
      "Sleep inside a suspended tree pod deep within a tropical rainforest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd",
    },
    price: 850,
    location: "Daintree",
    country: "Australia",
  },
  {
    title: "Ultra-Modern Sky Mansion",
    category: "Luxury",
    description:
      "An ultra-modern mansion in the sky with private elevators and luxury interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    },
    price: 9000,
    location: "Monaco",
    country: "Monaco",
  },
  {
    title: "Coral Reef Overwater Hut",
    category: "Beachfront",
    description:
      "An overwater hut positioned above vibrant coral reefs with direct sea access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    },
    price: 3800,
    location: "Bora Bora",
    country: "French Polynesia",
  },
  {
    title: "Volcanic Black Sand Villa",
    category: "Villas",
    description:
      "A striking villa set near volcanic black sand beaches with bold architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
    },
    price: 2900,
    location: "Reykjanes",
    country: "Iceland",
  },
  {
    title: "Hidden Canyon Lodge",
    category: "Nature",
    description:
      "A remote lodge hidden within a canyon offering unmatched silence and views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 2000,
    location: "Antelope Canyon",
    country: "United States",
  },
  {
    title: "Retro City Capsule Stay",
    category: "Rooms",
    description:
      "A futuristic yet retro capsule stay designed for modern city travelers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 700,
    location: "Osaka",
    country: "Japan",
  },
  {
    title: "Lakeside Nordic Sauna Cabin",
    category: "Trending",
    description:
      "A Nordic-style cabin with private sauna set beside a tranquil lake.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    },
    price: 1600,
    location: "Savonlinna",
    country: "Finland",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    category: "Beachfront",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
];

module.exports = { data: sampleListings };
