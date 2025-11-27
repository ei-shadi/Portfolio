import Shadi from "../../../public/assets/images/Shadi.png";
import Image from "next/image";
import SocialButton from "../ui/SocialButton";
import Button from "../ui/Button";
import NormalButton from "../ui/NormalButton";

const Hero = () => {
  return (
    <section className="max-w-[90%] mx-auto flex flex-col lg:flex-row justify-center items-center pt-0 lg:gap-10 lg:pt-28 xl:pt-0">
      {/* Image Part */}
      <div>
        <Image
          src={Shadi}
          alt="Hero Image"
          priority
          className="w-[62%] md:w-[40%] lg:w-full max-w-[90%] z-10 mx-auto"
        />
      </div>

      {/* Text Part */}
      <div className="lg:pt-28 xl:pt-0">
        <h2 className="text-4xl lg:text-5xl text-gray-200">
          Hello <span className="font-crimson-pro text-orange-500">!</span>
        </h2>

        {/* Name Part */}
        <h1 className="text-3xl md:text-5xl xl:text-6xl whitespace-nowrap">
          <span className="font-crimson-pro">I'm</span>{" "}
          <span className="text-cyan-500">
            Eftajul Islam <span className="text-orange-500">Shadi</span>
          </span>
        </h1>

        {/* Title & Social Icons Container */}
        <div className="mt-5">
          {/* Title */}
          <div className="mb-5 lg:mb-10 flex flex-col sm:flex-row items-center sm:items-start justify-center gap-2 sm:gap-4 text-xl md:text-2xl xl:text-3xl font-semibold border-4 text-gray-200 border-cyan-500 p-3 lg:p-4 rounded-2xl whitespace-nowrap relative">
            Full Stack Developer
          </div>

          {/* Social Icons */}
          <div className="relative z-20 flex flex-col gap-5 lg:gap-8 justify-center items-center">
            <SocialButton />
            <div className="flex flex-row items-center sm:flex-row gap-2 md:gap-4">

              <Button label="Resume" actionType="download" />
              <NormalButton label="Explore Projects" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
