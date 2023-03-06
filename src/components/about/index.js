import {
  ankit_rathor_logo,
  light_bulb_icon,
  target_icon,
} from "../../assets/images.js";

import Image from "next/image";

const mission_vision = [
  {
    img: light_bulb_icon,
    title: "Our Mission",
    desc: "Transforming young minds through exciting physics journeys fueled by curiosity, creativity.",
  },
  {
    img: target_icon,
    title: "Our Vision",
    desc: "To help young minds find their inner scientist.",
  },
];

function About() {
  return (
    <div className="h-[1210px] min-h-[1210px] max-h-[1210px] lg:[770px] bg-red-200/10 lg:min-h-[770px] lg:max-h-[770px] flex justify-center px-8 lg:px-16 lg:py-16 bg-cover bg-center bg-[url('/assets/images/all-img/section-bg-8.png')]">
      <div className="max-w-[633px] w-full h-full gap-4 md:max-w-[743px] lg:max-w-[1180px] flex flex-col justify-center lg:flex-row lg:items-center lg:justify-center">
        <div className="w-full h-full max-h-[530px] overflow-hidden flex justify-center items-center">
          <Image
            className="h-full w-full p-2 object-contain"
            src={ankit_rathor_logo}
            alt=""
            height={2000}
            width={2000}
          />
        </div>
        <div className="w-full p-4 flex flex-col items-start">
          {/* About Ankit Rathor */}
          <div>
            <h4 className="text-[#39c1b1] text-1xl font-bold tracking-wide">
              About Ankit Rathore
            </h4>
          </div>

          {/* heading */}
          <div className="mt-2">
            <h1 className="about-heading font-bold capitalize">
              A Man With Strong Passion For <br />
              <span className="text-[#ff7e84] underlined-red relative">
                Physics
              </span>
            </h1>
          </div>

          {/* para */}
          <div className="mt-8">
            <p className="text-[#7b7b8a] tracking-wide">
              Meet Ankit Rathore, IIT Bombay graduate and Physics Education
              Innovator! Join his 8 year old mission to cultivate curious minds
              and transformative perspectives through interactive physics
              education!"
            </p>
          </div>

          {/* mission - vision */}
          <div className="flex flex-col w-full gap-4 py-8">
            {mission_vision.map(({ img, title, desc }) => {
              return (
                <div className="flex gap-4">
                  <div className="h-20 w-20 min-h-20 min-w-20 max-h-20 min-w-20">
                    <Image
                      className="w-full h-full"
                      src={img}
                      alt=""
                      height={1000}
                      width={1000}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <div>
                      <h1 className="text-black font-bold">{title}</h1>
                    </div>
                    <div>
                      <p className="text-[#7b7b8a]">{desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* read more button */}
          <div className="tracking-wide w-full md:w-auto md:min-w-[175px] h-[52px] bg-[#fc7e84] text-white p-2 flex justify-center items-center rounded-lg cursor-pointer ease-in  duration-200 outline outline-0 hover:outline-offset-2 hover:outline-4 outline-[#fc7e84] font-semibold">
            Read More Us
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
