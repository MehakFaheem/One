'use client'
import { FiStar, FiMap, FiZap } from "react-icons/fi";
import Image from "next/image";

const ExperienceHighlights = () => {
    return (
        <section className="relative py-20 min-h-[500px]"> {/* Fallback bg */}
            {/* Background Image */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <Image 
                    src="/noise-img.jpg" 
                    alt="Background texture"
                    fill
                    className="object-cover"
                    quality={100}
                    priority
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-8 relative z-10">
                <h2 className="text-2xl md:text-4xl font-serif text-amber-500 text-center mb-12">
                    More Than a Trip—A Transformation
                </h2>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                        <div className="text-4xl mb-4">
                            <FiStar className="text-amber-500 mx-auto" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 font-serif">
                            Tailored Itineraries
                        </h3>
                        <div className="w-12 h-0.5 bg-amber-500 mx-auto mb-4"></div>
                        <p className="text-gray-200 text-left">
                            Daily activities customized to your energy level and interests.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                        <div className="text-4xl mb-4">
                            <FiMap className="text-amber-500 mx-auto" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 font-serif">
                            Local Wisdom
                        </h3>
                        <div className="w-12 h-0.5 bg-amber-500 mx-auto mb-4"></div>
                        <p className="text-gray-200 text-left">
                            Native guides reveal hidden gems no tourist ever sees.
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                        <div className="text-4xl mb-4">
                            <FiZap className="text-amber-500 mx-auto" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 font-serif">
                            Luxury as Standard
                        </h3>
                        <div className="w-12 h-0.5 bg-amber-500 mx-auto mb-4"></div>
                        <p className="text-gray-200 text-left">
                            Private chefs, eco-lodges, and concierge-level service.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperienceHighlights;