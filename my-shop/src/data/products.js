const products = [

  // ═══════════════════════════════════════════════════
  // BABY CARE
  // ═══════════════════════════════════════════════════

 
 

   { id: "bc1",  name: "Complete Baby Bath Set",         category: "baby-care", subcategory: "bathing-and-laundry", price: 980,  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvB2ks0qTvZSaN8MdAq78v4Sh9Tou-DLhgBTmXrD-1dw&s=10" },
  { id: "bc2",  name: "Baby Laundry Detergent",         category: "baby-care", subcategory: "bathing-and-laundry", price: 450,  image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/6382523/1.jpg?9130" },
  { id: "bc4",  name: "Baby Bath Tub",                  category: "baby-care", subcategory: "bathing-and-laundry", price: 1200, image: "/public/Baby Bath Tub.jpeg" },
  { id: "bc5",  name: "Gentle Baby Shampoo",            category: "baby-care", subcategory: "bathing-and-laundry", price: 380,  image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/9707523/1.jpg?8527" },
  { id: "bc6",  name: "Baby Body Wash",                 category: "baby-care", subcategory: "bathing-and-laundry", price: 350,  image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/9042723/1.jpg?2309" },
  { id: "bc7",  name: "Baby Lotion 200ml",              category: "baby-care", subcategory: "bathing-and-laundry", price: 420,  image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/0125061/1.jpg?1297" },
  { id: "bc9",  name: "Baby Sponge & Brush Set",        category: "baby-care", subcategory: "bathing-and-laundry", price: 320,  image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/0256582/1.jpg?1173" },

  { id: "bc11", name: "Newborn Diapers Size 1",         category: "baby-care", subcategory: "diapers", price: 1680, image: "https://th.bing.com/th/id/OIP.0t4LZ1dQHOPI-xatlV2L_QHaHa?w=199&h=199&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
  { id: "bc12", name: "Pull-Up Diapers Size 3",         category: "baby-care", subcategory: "diapers", price: 4120, image: "/public/Pull-Up Diapers Size 3.jpeg" },
  { id: "bc19", name: "Diaper Bag Backpack",            category: "baby-care", subcategory: "diapers", price: 2800, image: "https://th.bing.com/th/id/OIP.82fPwi-jIsQIZL4ZSnGQAAHaHa?w=158&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
  { id: "bc20", name: "5 Piece Set Washable Bby Liners",           category: "baby-care", subcategory: "diapers", price: 650,  image: "https://th.bing.com/th/id/OIP.bjE7K8UVYpNZcEV8dTILlwAAAA?w=189&h=192&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },

  { id: "bc21", name: "Large Bby Care Grooming Kit",            category: "baby-care", subcategory: "grooming-kits", price: 1200,  image: "https://th.bing.com/th/id/OIP.A9FxA3FyQFDknHSDfK2k_QHaHa?w=192&h=192&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
  { id: "bc22", name: "Small Baby Care Grooming Kit",         category: "baby-care", subcategory: "grooming-kits", price: 800,  image: "https://th.bing.com/th/id/OIP.0HrcrEv4wvisHGelYUvbzwHaHI?w=182&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
  

  { id: "bc31", name: "Baby Potty Training Chair",      category: "baby-care", subcategory: "potty-training", price: 3500, image: "/public/Baby Potty Training Chair.jpg" },
  { id: "bc32", name: " Potty Seat",            category: "baby-care", subcategory: "potty-training", price: 2790,  image: "/public/potty seat.jpg" },
  { id: "bc33", name: "Potty Training Seat with Lid",    category: "baby-care", subcategory: "potty-training", price: 400,  image: "/Potty Training Seat with Lid.jpg" },
  { id: "bc36", name: "Portable Travel Potty",          category: "baby-care", subcategory: "potty-training", price: 2899,  image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/3659123/1.jpg?1053" },
 

  { id: "bc41", name: "Ultra Soft Washcloths 4-Pack",   category: "baby-care", subcategory: "bathing-and-laundry", price: 960,  image: "/public/Ultra Soft Washcloths 4-Pack.jpeg" },
  { id: "bc42", name: "6 Pcs Set Baby Washcloth",       category: "baby-care", subcategory: "bathing-and-laundry", price: 320,  image: "/public/6 Pcs Set Bbaby Washcloth.jpeg" },
  { id: "bc43", name: "Baby WashCloth 4 Piece",          category: "baby-care", subcategory: "bathing-and-laundry", price: 400,  image: "/public/Baby WashCloth 4 Piece.jpeg" },
  { id: "bc47", name: "Hooded Baby Washcloth",    category: "baby-care", subcategory: "bathing-and-laundry", price: 960,  image: "/public/Hooded Baby Washcloth.jpeg" },
  { id: "bc48", name: "Hooded Coral Towel",        category: "baby-care", subcategory: "bathing-and-laundry", price: 960,  image: "/public/Hooded Coral Towel.jpeg" },
  { id: "bc49", name: "Soft Baby Towel",        category: "baby-care", subcategory: "bathing-and-laundry", price: 560,  image: "/public/Soft Baby Towel.jpeg" },
  { id: "bc50", name: "Infant Cotton Cartoon Animal Print",        category: "baby-care", subcategory: "bathing-and-laundry", price: 560,  image: "/public/Infant Cotton Cartoon Animal Print.jpeg" },
  { id: "bc45", name: "8 Pcs Set WashCloths",      category: "baby-care", subcategory: "bathing-and-laundry", price: 320,  image: "/public/8pc set washcloths.jpeg" },

  // ═══════════════════════════════════════════════════
  // CLOTHING
  // ═══════════════════════════════════════════════════
  
  { id: "cl2",  name: "Long Sleeve Bodysuit 5-Pack",    category: "clothing", subcategory: "bodysuits", price: 1200,  image: "/public/Long Sleeve Bodysuit 5-Pack.jpeg" },
  { id: "cl3",  name: "5 Pck Newborn Baby Girls Bodysuit",           category: "clothing", subcategory: "bodysuits", price: 1200,  image: "/public/5 Pck Newborn Bbay Girls Bodysuit.jpeg" },
  { id: "cl4",  name: "5 Pieces Multicolored Cotton Bodysuit",        category: "clothing", subcategory: "bodysuits", price: 1200,  image:"/public/5 Pieces Multicolored Cotton Bodysuit.jpeg" },
  { id: "cl5",  name: "Striped Baby Bodysuit",          category: "clothing", subcategory: "bodysuits", price: 1200,  image: "/public/Striped Baby Bodysuit.jpeg" },
  { id: "cl6",  name: "Adorable Baby Onesie Vest",          category: "clothing", subcategory: "bodysuits", price: 450,  image: "/public/Adorable Baby Onesie Vest.jpeg" },
  { id: "cl7",  name: "Baby Boys One-piece Soft Cotton ",        category: "clothing", subcategory: "bodysuits", price: 450,  image: "/public/Baby Boys One-piece Soft Cotton.jpeg" },
  { id: "cl8",  name: "Baby Romper Buttoned Hooded Overall One Piece BodySuit",               category: "clothing", subcategory: "bodysuits", price: 960,  image: "/public/Baby Romper Buttoned Hooded Overall One Piece BodySuit.jpeg" },
  { id: "cl9",  name: "Branded Newborn Baby Onesies",   category: "clothing", subcategory: "bodysuits", price: 440,  image: "/public/Branded Newborn Baby Onesies.jpeg" },

  { id: "cl11", name: "3-Pack Baby Bibs",            category: "clothing", subcategory: "baby-bibs", price: 600,  image: "/public/3-Pack Baby Bibs.jpeg" },
  { id: "cl12", name: "Animal Pattern Silicone Bib",        category: "clothing", subcategory: "baby-bibs", price: 400,  image: "/public/Animal Pattern Silicone Bib.jpeg" },
  { id: "cl13", name: "Burp Clothes",     category: "clothing", subcategory: "baby-bibs", price: 480,  image:"/public/Burp Clothes.webp" },
  { id: "cl15", name: "Newborn Baby Bib",              category: "clothing", subcategory: "baby-bibs", price: 80,  image: "/public/Newborn Baby Bib.jpeg" },
 
  { id: "cl16", name: "Unisex Baby Cotton Drooler Bib",                   category: "clothing", subcategory: "baby-bibs", price: 80,  image: "/public/Unisex Baby Cotton Drooler Bib.jpeg" },

  { id: "cl24", name: "Baby Boy Crib Shoes with Soft Sole",            category: "clothing", subcategory: "baby-shoes", price: 640,  image: "/public/Baby Boy Crib Shoes with Soft Sole.jpeg" },
  { id: "cl25", name: "Baby Girl Crib Shoes with Soft Sole",     category: "clothing", subcategory: "baby-shoes", price: 640,  image: "/public/Baby Girl Crib Shoes with Soft Sole.jpeg" },

  { id: "cl31", name: "I Love Mom & Dad Pants Set",     category: "clothing", subcategory: "custom-designs", price: 1200,  image: "/public/i love mom and dad set.jpeg" },
 
  // ═══════════════════════════════════════════════════
  // FEEDING
  // ═══════════════════════════════════════════════════
  { id: "fd7",  name: "Momeasy Gift Set Bottles",              category: "feeding", subcategory: "bottles", price: 1680, image: "/public/Momeasy Gift Set Bottles.jpg" },
  { id: "fd8",  name: "Electric Baby Bottle Warmer",               category: "feeding", subcategory: "bottles", price: 2290,  image: "/public/Electric Baby Bottle Warmer.jpg" },
  { id: "fd9",  name: "Bottle Warmer",        category: "feeding", subcategory: "bottles", price: 884, image: "/public/Bottle Warmer.jpg" },

  { id: "fd11", name: "Double Wearable Breast Pump",    category: "feeding", subcategory: "breast-pumps", price: 14999, image: "/public/Double Wearable Breast Pump.jpg" },
  { id: "fd12", name: "Automatic Double Breast Pump",    category: "feeding", subcategory: "breast-pumps", price: 2000, image: "/public/Automatic Double Breast Pump.jpg" },
  { id: "fd13", name: "Manual Breast Pump",             category: "feeding", subcategory: "breast-pumps", price: 900, image: "/public/Manual Breast Pump.jpg" },
  { id: "fd14", name: "Single wearable electic pump",        category: "feeding", subcategory: "breast-pumps", price: 3000,  image: "/public/Single wearable electic pump.jpg" },


 
 
  { id: "fd31", name: "Mom easy orthodontic silicon baby pacifier",                category: "feeding", subcategory: "Pacifiers", price: 569, image: "/public/Mom easy orthodontic silicon baby pacifier.jpg" },
  { id: "fd32", name: "Soother Nipple Infant",          category: "feeding", subcategory: "Pacifiers", price: 699, image: "/public/Soother Nipple Infant.jpg" },
  { id: "fd33", name: "Baby Fruit feeder",             category: "feeding", subcategory: "Pacifiers", price: 402, image: "/public/Baby Fruit Feeder.jpg" },
  { id: "fd34", name: "Glow in the Dark Pacifier",         category: "feeding", subcategory: "Pacifiers", price: 678, image: "/public/Glow in the Dark Pacifier.jpg" },
 
  // ═══════════════════════════════════════════════════
// NURSERY
// ═══════════════════════════════════════════════════

// BABY COTS
{ id: "nu1",  name: "Wooden Baby Cot with Net",                                                category: "nursery", subcategory: "baby-cots", price: 26500, image: "/public/Wooden Baby with net.jpg" },
{ id: "nu2",  name: "Cot Sheets",                                                              category: "nursery", subcategory: "baby-cots", price: 500,  image: "/public/baby cot sheets.jpeg" },
{ id: "nu4",  name: "Multi-Function Infant Playpen",                                           category: "nursery", subcategory: "baby-cots", price: 15000,  image: "/public/Multi-Function Infant Playpen.jpg" },
{ id: "nu5",  name: "Multipurpose Baby Playpen Portable Baby Crib",                            category: "nursery", subcategory: "baby-cots", price: 20000, image: "/public/Multipurpose Baby Playpen Portable Baby Crib.jpg" },
{ id: "nu7",  name: "Cot Bumper",                                                              category: "nursery", subcategory: "baby-cots", price: 3000,  image: "/public/Cot Bumper.jpeg" },
{ id: "nu8",  name: "Baby Cot Mattress",                                                       category: "nursery", subcategory: "baby-cots", price: 2000,  image: "/public/Baby Cot Mattress.jpg" },

// NESTS & BASSINETS
{ id: "nu11", name: "3-in-1 Playpen Bassinet",                      category: "nursery", subcategory: "nests-and-bassinets", price: 27000, image: "/public/3-in-1 Playpen Bassinet.jpg" },
{ id: "nu12", name: "Baby Bassinet Cradle with Mosquito Net",        category: "nursery", subcategory: "nests-and-bassinets", price: 40000, image: "/public/Baby Bassinet Cradle with Mosquito Net.jpg" },
{ id: "nu13", name: "Baby Co-Sleeper",                              category: "nursery", subcategory: "nests-and-bassinets", price: 3000, image: "/public/Baby Co-Sleeper.jpg" },
{ id: "nu14", name: "Baby Nest with Standard Safety",               category: "nursery", subcategory: "nests-and-bassinets", price: 1300,  image: "/public/Baby Nest with Standard Safety.jpg" },
{ id: "nu15", name: "Foldable Baby Bassinet with Net and Wheels",   category: "nursery", subcategory: "nests-and-bassinets", price: 6400,  image: "/public/Foldable Baby Bassinet with Net and Wheels.jpg" },
{ id: "nu16", name: "Foldable Baby Sleeping Nest Crib",             category: "nursery", subcategory: "nests-and-bassinets", price: 3600,  image: "/public/Foldable Baby Sleeping Nest Crib.jpg" },
{ id: "nu17", name: "Luxury Velvet Baby Bassinet Stroller",         category: "nursery", subcategory: "nests-and-bassinets", price: 50000, image: "/public/Luxury Velvet Baby Bassinet Stroller.jpg" },
{ id: "nu18", name: "Portable Baby Co-Sleeper with Mosquito Net",   category: "nursery", subcategory: "nests-and-bassinets", price: 3000,  image: "/public/Portable Baby Co-Sleeper with Mosquito Net.jpg" },

// PILLOWS
{ id: "nu21", name: "Comfy Travel C-Shaped Neck Support Pillow",    category: "nursery", subcategory: "pillows", price: 800,  image: "/public/Comfy Travel C-Shaped Neck Support Pillow.jpg" },
{ id: "nu22", name: "Cuddle Bear Baby Pillow",                      category: "nursery", subcategory: "pillows", price: 3500, image: "/public/Cuddle Bear Baby Pillow.jpg" },
{ id: "nu24", name: "Nursing Pillow",                               category: "nursery", subcategory: "pillows", price: 1200,  image: "/public/Nursing Pillow.jpeg" },
{ id: "nu25", name: "Pregnancy Pillow",                             category: "nursery", subcategory: "pillows", price: 4500, image: "/public/Pregnancy Pillow.jpg" },
  // ═══════════════════════════════════════════════════
  // PLAYTIME
  // ═══════════════════════════════════════════════════
  { id: "pl1",  name: "Baby Rattles & Shakers Set",     category: "playtime", subcategory: "soft-toys", price: 1120,  image: "/public/baby ratters.webp" },
  { id: "pl2",  name: "Soft Elephant Plush",            category: "playtime", subcategory: "soft-toys", price: 32000,  image: "/public/elephant plush.webp" },
  { id: "pl3",  name: "Kids Educational Building Blocks",             category: "playtime", subcategory: "soft-toys", price: 2400, image: "/public/kids educational builing blocks.webp" },
 

  { id: "pl21", name: "Multicolored Double Sided Play Mat",          category: "playtime", subcategory: "play-mats", price: 1760, image: "/public/Multicolored Double Sided Play Mat.jpeg" },
  { id: "pl22", name: "Musical Piano Play Mat",           category: "playtime", subcategory: "play-mats", price: 2560, image: "/public/Musical Piano Play Mat.webp" },
  
  { id: "pl31", name: "Musical Piano Play Mat",         category: "playtime", subcategory: "musical-piano-play-mat", price: 1950, image: "/public/Musical Piano Play Mat.webp" },
 
  // ═══════════════════════════════════════════════════
  // TRAVEL
  // ═══════════════════════════════════════════════════
  { id: "tr1",  name: "Portable Newborn Stroller",  category: "travel", subcategory: "strollers", price: 12800, image: "https://th.bing.com/th/id/OIP.tac4s8gowi355R3hdFZ2owHaKG?w=130&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
 
  { id: "tr13", name: "Rotating and Reclining Newborn Isofix Car Seat",               category: "travel", subcategory: "car-seats", price: 17600,  image: "https://th.bing.com/th/id/OIP.Y--V7syXPW7A9w9WNwOm6wHaHa?w=198&h=198&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
  { id: "tr16", name: "Infant Car Seat Carrier with Canopy",          category: "travel", subcategory: "car-seats", price: 7200,   image: "https://th.bing.com/th/id/OIP.u723lxnt4ygH0Ao8hHK02QHaLH?w=124&h=186&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
 
  { id: "tr21", name: " Baby Carrier with Breathable Hip Seat",         category: "travel", subcategory: "baby-carriers", price: 2800, image: "/public/Baby Carrier with Breathable Hip Seat.jpg" },
  { id: "tr22", name: "Wrap Baby Carrier",              category: "travel", subcategory: "baby-carriers", price: 1500, image: "/public/Wrap Baby Carrier.jpg" },
  { id: "tr24", name: "Newborn Chicco Carrier",             category: "travel", subcategory: "baby-carriers", price: 3000, image:" /public/Newborn Chicco Carrier.jpg" },
  { id: "tr25", name: "Versatile Cozy Infant Baby Carrier",        category: "travel", subcategory: "baby-carriers", price: 1200, image: "/public/Versatile Cozy Infant Baby Carrier.jpg" },
 
  { id: "tr31", name: "3 in 1 Stylish Diaper Bag",      category: "travel", subcategory: "diaper-bags", price: 3200, image: "/public/3 in 1 diaper bag.jpeg" },
  { id: "tr15", name: "2 in 1 Diaper Bag",          category: "travel", subcategory: "diaper-bags", price: 2200, image: "/public/2 in 1 diaper bag.jpeg" },
  { id: "tr33", name: "5 in 1 Diaper Bag",        category: "travel", subcategory: "diaper-bags", price: 2200, image: "/public/5 in 1 Diaper Bag.jpg" },
  { id: "tr34", name: "5pc Set Trendy Mummy Maternity Bag",             category: "travel", subcategory: "diaper-bags", price: 2260,  image: "/public/5pc Set Trendy Mummy Maternity Bag.png" },
 
  // ═══════════════════════════════════════════════════
  // MOTHER CARE
  // ══════════════════════════════════════════════════
  { id: "mc1",  name: "3-in-1 Postpartum Belt",         category: "mother-care", subcategory: "belts", price: 1680, image: "https://th.bing.com/th/id/OIP.tL8yGx9tnMlfD9gI5qiiUQHaHa?w=189&h=189&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
  { id: "mc2",  name: "postpartum Belly Belt",         category: "mother-care", subcategory: "belts", price: 640, image: "https://th.bing.com/th/id/OIP.MbjrCtOlD5BC2KUcv8Ce0AHaHi?w=196&h=200&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
 
  { id: "mc11", name: "Padded Cotton Nursing Bra",       category: "mother-care", subcategory: "nursing-bras", price: 600, image: "/public/Padded cotton bras.jpeg" },
  { id: "mc12", name: " Nursing Bra(Non-Padded)",               category: "mother-care", subcategory: "nursing-bras", price: 500,  image: "/public/non padded bras.jpeg" },
  { id: "mc13", name: "Padded Nursing Bra",            category: "mother-care", subcategory: "nursing-bras", price: 1000, image: "/public/padded bras.jpeg" },
 
  { id: "mc21", name: "Dafi Maternity Pads",             category: "mother-care", subcategory: "dafi-maternity-pads", price:1200,  image: "/public/Dafi Maternity Pads.png" },
  { id: "mc22", name: "Sitz Bath Basin",             category: "mother-care", subcategory: "dafi-maternity-pads", price: 1500,  image: "/public/Sitz Bath Basin.jpg" },
  { id: "mc23", name: "Set of Pregnancy Pants",         category: "mother-care", subcategory: "dafi-maternity-pads", price: 300,  image: "/public/set of pregnancy pants.jpeg" },
  
  
  { id: "mc31", name: "African Swahili Maxi Dera",       category: "mother-care", subcategory: "african-swahili-maxi-dera", price: 700, image: "/public/African Swahili Maxi Dera.jpg" },
  { id: "mc32", name: "Women's Maternity Jeans",     category: "mother-care", subcategory: "african-swahili-maxi-dera", price: 2000, image: "/public/Women's Maternity Jeans.jpg" },
  { id: "mc33", name: "Anti-Burst Yoga Ball for Exercise",          category: "mother-care", subcategory: "african-swahili-maxi-dera", price: 2500, image: "/public/Anti burst yoga ball.jpg" },
 
  // ═══════════════════════════════════════════════════
  // WARMTH & SWADDLING
  // ══════════════════════════════════════════════════
  { id: "ws1",  name: "3-Way Adjustable Wearable Blanket",        category: "warmth-and-swaddling", subcategory: "swaddle-blankets", price: 2000,  image: "/public/3 way blanket.webp" },
  { id: "ws2",  name: "Baby Blankets Thick and Warm ",           category: "warmth-and-swaddling", subcategory: "swaddle-blankets", price: 1200, image: "/public/thick baby blankets.webp" },
  { id: "ws3",  name: "6 Piece cotton Flannel",             category: "warmth-and-swaddling", subcategory: "swaddle-blankets", price: 1200,  image: "/public/6 piece flannel.webp" },
  { id: "ws4",  name: "Cozy Unisex Baby Rompers Hooded Swaddle sleepsuit",          category: "warmth-and-swaddling", subcategory: "swaddle-blankets", price: 960, image: "/public/unisex rompers.webp" },
 
  { id: "ws11", name: "Soft Baby Shawl",                 category: "warmth-and-swaddling", subcategory: "shawls", price: 1440,  image: "/public/softbaby shawl.webp" },
  { id: "ws12", name: "Cozy Baby Shawl",              category: "warmth-and-swaddling", subcategory: "shawls", price: 1200,  image: "/public/cozy shawl.webp" },
  { id: "ws13", name: "Elegant Warm Fluffy Shawl",                category: "warmth-and-swaddling", subcategory: "shawls", price: 1200, image: "/public/fluffy shawl 2.webp" },
  { id: "ws14", name: "Warm Fleece Newborn Shawl",              category: "warmth-and-swaddling", subcategory: "shawls", price: 1200,  image: "/public/fleece shawl.webp" },

  { id: "ws21", name: "Cotton Baby Mittens",      category: "warmth-and-swaddling", subcategory: "baby-hats-and-mittens", price: 320,  image: "/public/cotton baby mittens.webp" },
  { id: "ws22", name: "Baby Hat Set",              category: "warmth-and-swaddling", subcategory: "baby-hats-and-mittens", price: 80,  image: "/public/babyhats and mittens.webp" },
  { id: "ws24", name: "Kid's Turban Head Wrap",                 category: "warmth-and-swaddling", subcategory: "baby-hats-and-mittens", price: 400,  image: "/public/turban wrap.webp" },
  { id: "ws25", name: "Silicon Infant mittens for teething",     category: "warmth-and-swaddling", subcategory: "baby-hats-and-mittens", price: 400,  image: "/public/silcon teething.webp" },
 
];

export default products;