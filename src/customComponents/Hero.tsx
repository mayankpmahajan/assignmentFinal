import ShimmerButton from "../components/magicui/shimmer-button"
import '../styles/Hero.css'

const Hero = () => {
  return (
    <main>
      <div className="relative sm:h-[28rem] h-[24rem] bg-black overflow-hidden">
        <img
          src="./hero.jpg"
          alt="hero image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Blur Overlay with Responsive Transition */}
        <div
          className="blur-overlay absolute inset-0"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        ></div>
        <div className="absolute inset-0 text-white pt-8 px-2 md:px-8 lg:px-32">
          <div className=" z-10 flex flex-row space-x-4 sm:space-x-12">
            <div className="hero-logo-container">
              <img src="./hero/logo1.png" alt="logo" className="h-10 " />
              <div className="ml-2 hidden md:block">
                <h1 className="hero-logo-title">Zoloni</h1>
                <p className="hero-logo-subtitle">
                  Research & Development
                </p>
              </div>
            </div>

            <div className="h-10 border-s-2 w-2"></div>

            <div className="hero-logo-container">
              <img src="./hero/logo2.png" alt="logo" className="h-10 " />
              <div className="ml-2 hidden md:block">
                <h1 className="hero-logo-title">
                  Bharat Food Tech 2024
                </h1>
                <p className="hero-logo-subtitle">New Delhi, India</p>
              </div>
            </div>
          </div>

          <div className=" mt-2 sm:mt-12 text-2xl sm:text-4xl font-bold tracking-normal">
            <h1 className="">
              Welcome to Zoloni
              <br />
              Exhibiting at Bharat Food Tech 2024
            </h1>
          </div>

          <div className="info-container">
            <div className="info1-container">
              <img
                src="./icons/web.png"
                alt="web"
                className=" opacity-60 h-4"
              />
              <p>New Delhi, India</p>
            </div>

            <div className="info-separator"></div>

            <div className="info1-container">
              <img
                src="./icons/calendar.png"
                alt="web"
                className=" opacity-60 h-4"
              />
              <p>12th July 2024-15th July 2024</p>
            </div>

            <div className="info-separator"></div>

            <div className="info1-container">
              <img
                src="./icons/location.png"
                alt="web"
                className=" opacity-60 h-4"
              />
              <p>Hall-2, Booth 23</p>
            </div>
          </div>

          <ShimmerButton 
            background="rgba(123,14,240,1)"
            type="button"
            className="h-10 sm:w-80 w-full flex rounded-md border-black border-[1px] sm:mt-12 mt-6 items-center justify-center"
          >
            <h1 className="">Contact Us</h1>
          </ShimmerButton>

          


        </div>
      </div>
    </main>
  );
};

export default Hero;
