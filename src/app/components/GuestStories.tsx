'use client';
import { motion } from 'framer-motion';
import { MdOpacity } from 'react-icons/md';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const guestStories = [
  {
    id: 1,
    quote: "ONE changed how I experience travel forever. The Bali retreat healed my soul.",
    author: "Sarah K.",
    video: "bali-video.mp4",
    image: "/sarah.png"
  },
  {
    id: 2,
    quote: "Patagonia with ONE felt like a private adventure crafted just for us.",
    author: "James L.",
    video: "patagonia-video.mp4",
    image: "/james.png"
  },
  {
    id: 3,
    quote: "The Northern Lights painted the sky just for us—I'll never forget that midnight kayak.",
    author: "Emma R.",
    video: "northernLights-video.mp4",
    image: "/emma.png",
  },
  {
    id: 4,
    quote: "Our villa hovered above liquid sapphire—each morning began with rays dancing through the glass floor onto reef sharks below.",
    author: "Aisha M.",
    video: "maldives-video.mp4",
    image: "/aisha.m.png",
  },
];

// react hook that will handle the animation of the guest stories section
const GuestStories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  return (
    <section ref = {ref}
    className = "py-10 md:py-20 px-4 md:px-8 bg-amber-50/5 overflow-hidden"
    >

    {/* Animated Title */}
    <motion.h2 
    initial = {{opacity: 0, y:50}}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{duration:0.8}}
    className="text-3xl font-serif text-center mb-16">
      Lives Changed
    </motion.h2>

    {/* Horizontal Scroll Gallery */} 
    <div className='flex flex-col-1 md:flex-cols-4 lg:flex-cols-4 md:gap-6 lg:gap-10 overflow-x-auto pb-14 gap-8 px-8 no-scrollbar'>
      {guestStories.map((story, index) => (
        <StoryCard 
          key={story.id}
          story={story}
          index={index}
          inView={inView}
        />
      ))}
    </div>

    {/* Floating Scroll Hint */}
    <div className='overflow-hidden'>
    <motion.div
      animate=
        {{
          x: [-3, 3, -3] 
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }} className='text-center mt-4 text-lg text-black font-bold'
        >
      ← Swipe to explore →
    </motion.div>
    </div>
    </section>
  )
}
// Story Card Subcomponent
function StoryCard({story, index, inView} : {story: any, index: number, inView: boolean}){
  return (
    <motion.div 
      initial = {{opacity: 0, x: index % 2 ? 100 : -100 }}
      animate={inView ? {opacity : 1, x : 0} : {}}
      transition={{duration: 0.6, delay: index * 0.2}}
      whileHover={{scale: 1.03}}
      className='flex-shrink-0 w-[280px] md:w-[320px] rounded-xl overflow-hidden shadow-lg bg-white'>
      
      {/* Video/Image Toggle */}
      <div className='relative group h-48 overflow-hidden'>
        <video
        autoPlay
        loop
        muted
        playsInline
        className='w-full h-full object-cover group-hover:opacity-100 opacity-0 absolute inset-0 transition-opacity duration-500' 
        src={story.video}
        />
        <Image  
        src={story.image}
        alt={story.author}
        fill
        className="object-cover group-hover:opacity-0 transition-opacity duration-500"
        />
      </div>

      {/* Quote */}
      <div>
        <motion.p
        whileTap={{scale: 0.98}}
        className='font-serif italic text-lg mb-4'
        >
          "{story.quote}"
        </motion.p>

        <p className='text-amber-600 font-medium'>- {story.author}</p>
      </div>
    </motion.div>
  ) 
}
export default GuestStories;
