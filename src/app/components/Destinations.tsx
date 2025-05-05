import Image from "next/image";

// components/Destinations.tsx
const Destinations = () => {
    const retreats = [
      {
        id: 1,
        name: "Bali Sacred Silence",
        price: "$7,500",
        image: "/Bali.png",
        highlight: "Private jungle villas with ocean views"
      },
      {
        id: 2, 
        name: "Patagonia Glaciers",
        price: "$9,200",
        image: "/patagonia-glaciers.jpg",
        highlight: "Heli-hiking with expert guides"
      },
      {
        id: 3,
        name: "Iceland Aurora",
        price: "$8,100", 
        image: "/iceland-aurora.jpg",
        highlight: "Northern lights from geothermal lagoons"
      }
    ];
  
    return (
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-amber-500 text-center mb-12">
            Where Soul Meets Adventure
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {retreats.map((retreat) => (
              <div 
                key={retreat.id}
                className="group relative overflow-hidden rounded-xl "
              >
                {/* Image */}
                <Image
                  src={retreat.image}
                  alt={retreat.name}
                  width={500} 
                  height={500} 
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform"
                />
                
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-serif text-white">
                    {retreat.name}
                  </h3>
                  <p className="text-amber-50 mt-2">{retreat.highlight}</p>
                  <p className="text-white font-medium mt-4">{retreat.price}</p>
                  <button className="mt-4 bg-amber-500 text-black py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
export default Destinations;