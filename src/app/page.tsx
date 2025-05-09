import { Manrope } from 'next/font/google';
const manrope = Manrope({ subsets: ['latin'] });
import { Playfair_Display } from 'next/font/google';
import Destinations from './components/Destinations';
import ExperienceHighlights from './components/ExperienceHighlights ';
import GuestStories from './components/GuestStories';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const Home  = () => {
  return (
    <main className={manrope.className}>
    <div className="relative h-screen overflow-hidden">  
      {/* Video */}  
      <video autoPlay loop muted className="w-full h-full object-cover" src="bg.mp4" />  

      {/* Overlay Text */}  
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">  
        <h1 className="text-4xl font-bold md:text-shadow-amber-300 md:text-7xl text-black mb-9">  
          Some places exist to touch your soul—
        </h1>  
        <p className="text-xl text-gray-300  shadow-2xl">  
          Welcome to <span className="italic font-bold">ONE</span>  
        </p>  
      </div>  
    </div>  
    <Destinations />
    <ExperienceHighlights />
    <GuestStories />
    </main>
  )
}
export default Home