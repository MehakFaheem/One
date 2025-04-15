import { Manrope } from 'next/font/google';
const manrope = Manrope({ subsets: ['latin'] });

const Home  = () => {
  return (
    <div className={`${manrope.className}`}>
    <p className="flex justify-center font-semibold items-center h-screen w-screen text-sm absolute top-0 left-0 z-10 text-amber-50 text-shadow-medium">
      Some places exist to touch your soul — welcome to&nbsp;
      <span className="italic">one.</span></p>
    </div>
  )
}
export default Home