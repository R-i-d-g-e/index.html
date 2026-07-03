import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Baby Care",
    subs: [
      { name: "Bathing & Laundry", desc: "Baby Care, Baby Bath", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mmhg-o612IzGkOlaD-Tcowm_FNGZASsmR_0AXKZ_Qg&s=10" },
      { name: "Diapers", desc: "Leak-Free Baby Care", image: "/public/diaper bags.jpeg" },
      { name: "Grooming Kits", desc: "Baby Healthcare Essentials", image: "/public/groaming kit.webp" },
      { name: "Potty Training", desc: "Supportive & Easy", image: "/public/potty.webp" },

    ],
  },
 
  {
  name: "Clothing",
  subs: [
    { name: "Bodysuits", desc: "Soft baby bodysuits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP10diJYZSut1IYzrMP1kiwDLmoPXP0rp7_NpSD_dEoA&s=10" },


    { name: "Baby Shoes", desc: "Comfortable baby shoes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytUirqEKsa8I_qA7XHYLWAqkhNAPZNxzoK5wTnrMFHw&s=10" },

    { name: "Custom Designs", desc: "Personalized baby outfits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0gt2REcqr463HT3u7PTGEc-8D2NB3mpqXtmkgSEfYJQ&s=10" },

    { name: "Baby Bibs", desc: "Cute feeding bibs", image: "/public/baby bids.webp" },



  ],
},
  {
    name: "Feeding",
    subs: [

      { name: "Bottles", desc: "Anti-Colic & Safe", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS62w_0FISFc7LgMl5Bxh7PiagPOghq1hHvgBw5qUD7Q&s=10" },
      { name: "Breast Pumps", desc: "Comfortable & Efficient", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gYTW2WJepsovBDL09UIJXdT_BWMjlby2QEbxRdVTMg&s=10" },
      { name: "Pacifiers", desc: "For baby", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNFyWq8HwNitx8WAbhGpBq2V7LckocGIm1fw1W8eqkIA&s=10" },
      { name: "Kids furniture", desc: "Safe Mealtime Seating", image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/85/8761323/1.jpg?4527" },

     
    ],
  },
  {
    name: "Nursery",
    subs: [

      { name: "Baby Cots", desc: "Safe & Sturdy Sleep", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYnMH3aT3WK43Ipbv4T7FhbCkiJtBcr06UeP0T8k0Hmg&s=10"}, 
      { name: "Nests and Bassinets", desc: "Large enough to accomodate baby", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0MG3aPvWXRDLa0NRhX9UzUlaiuKdrlQDVYQ_iwOho7A&s=10" },
      { name: "Pillows", desc: "Soft and cosy", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhGih-M0oPiGBUg68RBQtJdkVr2fMDK5x2h5SfDoGjA&s=10" },

    
    ],
  },
  {
    name: "Playtime",
    subs: [
 
      { name: "Soft Toys", desc: "Cuddly & Safe", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMgQPgVFS17Te6rsrBGjQyhJ9NucLySdBwLHwWQAAKQ&s=10" },
      { name: "Play Mats", desc: "Soft Floor Playtime", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4vNGyWFXu33_GpCxD3S2CJtJGYgUZxsbflm-USnDGw&s=10" },
      { name: "Musical piano play mat", desc: "Sensory Development", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxB-SIsL1bLgbk1KDeK9wYRIzTV6J0ek1wSyU0rkhSvQ&s=10"},

     
  
  ],  },
  {
    name: "Travel",
    subs: [

      { name: "Strollers", desc: "Smooth & Comfortable", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROMmeKZWCdSFftCiKk6yWj5YDK7yIDnO9ZViMFT0L0qw&s=10" },
      { name: "Car Seats", desc: "Safe on Every Ride", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-3sbSUmp0ZhKuMO688K4MoTZ3TsyLnR7JhypNOapKA&s=10" },
      { name: "Baby Carriers", desc: "Hands-Free Comfort", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0gRJwugQO_rq91NngDORJIhL1ew62zVHmVzhNqR_IeQ&s=10" },
      { name: "Diaper Bags", desc: "Organised On The Go", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREARiCZ_VufpDbgQvEb0EtkX4pH0nd_IEqqdZWgRVA4w&s=10" },

    
    ],
  },
  {
    name: "Mother Care",
    subs: [
      { name: "Belts", desc: "Comfortable ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0iwbcmvYNduoin74Hytg0g7XB50oIaDDYCvZo4PfU6g&s=10" },
      { name: "Nursing Bras", desc: "Support & Comfort", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0grI8fPF1nGK8J26P4YwNcOMfDwu5q_ILoBe_5psTw&s=10" },
      { name: "Dafi Maternity pads", desc: "Comfortable and easy to use", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdhk6AMRAyy5ggB_OST9MXfO9ZujTxXGOEmekzsQ5aA&s=10" },
      { name: "African swahili maxi dera", desc: "Free size maternity Dress", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ZOA7JwAKSr-uz_e1RiZzgaMtw4iSIyrotH7tn1TRXA&s=10" },
    ],
  },
  {
    name: "Warmth & Swaddling",
    subs: [
      { name: "Swaddle Blankets", desc: "Snug & Secure", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQ9gsCcbz8IfKUB7BS0DwuWRdNthyW8HV6FdjrIZqHQ&s=10" },
      { name: "Shawls", desc: " Warm ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_1VUph1qCrkunc-1UlH4Ar1bNYNm2icMY9wks4Q26Nw&s=10" },
      { name: "Baby Hats & Mittens", desc: "Keep Extremities Warm", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIHhgnCIh1wSm0wtfi5w6W7rr3vI1QRmWeNZymIuz08g&s=10" },
    ],
  },
];

export default function CategoryNavbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  return (
    <nav style={{ background: "linear-gradient(to right, #2D3A8C, #3D4FAC, #E8C4C4)", position: "relative", zIndex: 100 }}>
      <div style={{ display: "flex", alignItems: "center", padding: "0 24px", gap: "4px", flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <div
            key={cat.name}
            style={{ position: "relative" }}
            onMouseEnter={() => setOpenMenu(cat.name)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              style={{
                background: "none", border: "none", color: "white",
                padding: "14px 12px", cursor: "pointer", fontSize: "13px",
                display: "flex", alignItems: "center", gap: "4px",
                fontWeight: openMenu === cat.name ? "600" : "400",
              }}
            >
              {cat.name} <span style={{ fontSize: "10px" }}>▾</span>
            </button>

            {openMenu === cat.name && (
              <div style={{
                position: "absolute", top: "100%", left: "0",
                background: "white", borderRadius: "8px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                padding: "16px", minWidth: "480px",
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px",
                zIndex: 200,
              }}>
                {cat.subs.map((sub) => (
                  <div
                    key={sub.name}
                    onClick={() => {
                   navigate(
  `/category/${cat.name.toLowerCase().replace(/ /g, "-").replace(/&/g, "and")}/${sub.name.toLowerCase().replace(/ /g, "-").replace(/&/g, "and")}`
);

                      setOpenMenu(null);
                    }}
                    style={{
                      display: "flex", alignItems: "center", gap: "12px",
                      padding: "10px", borderRadius: "8px", cursor: "pointer",
                      border: "1px solid #f0f0f0", transition: "background 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "#fdf0f7"}
                    onMouseLeave={e => e.currentTarget.style.background = "white"}
                  >
                    <img
                      src={sub.image}
                      alt={sub.name}
                      style={{ width: "64px", height: "64px", borderRadius: "8px", objectFit: "cover" }}
                    />
                    <div>
                      <p style={{ margin: 0, fontWeight: "600", fontSize: "14px", color: "#222" }}>{sub.name}</p>
                      <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>{sub.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

       
      </div>
    </nav>
  );
}
