import Shadi from "../../../public/assets/images/Shadi.png";
import Image from "next/image";
import SocialButton from "../shared/SocialButton";
import Button from "../shared/Button";

const Hero = () => {
  return (
    <section className="max-w-[90%] mx-auto flex flex-col lg:flex-row justify-center items-center lg:gap-10">
      {/* Image Part */}
      <div>
        <Image
          src={Shadi}
          alt="Hero Image"
          className="w-[80%] md:w-[45%] lg:w-full max-w-[90%] z-10 mx-auto"
        />
      </div>

      {/* Text Part */}
      <div>
        <h2 className="text-4xl lg:text-5xl text-gray-200">
          Hello <span className="font-crimson-pro text-orange-500">!</span>
        </h2>

        {/* Name Part */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl">
          <span className="font-crimson-pro">I'm</span>{" "}
          <span className="text-cyan-500">
            Eftajul Islam <span className="text-orange-500">Shadi</span>
          </span>
        </h1>

        {/* Title & Social Icons Container */}
        <div className="mt-5">
          {/* Title */}
          <div className="mb-10 flex gap-5 text-2xl justify-center items-center border-4 border-cyan-500 p-4 rounded-2xl">
            <h3>MERN Stack Developer</h3>

            {/* Divider Line */}
            <div className="w-[4px] h-10 bg-cyan-500 rounded-full"></div>

            <h3>Frontend Specialist</h3>
          </div>

          {/* Social Icons */}
          <div className="relative z-20 flex flex-col gap-8 justify-center items-center">
            <SocialButton />
            <Button label="Resume" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
