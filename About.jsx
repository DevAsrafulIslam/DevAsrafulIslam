import { Link } from "react-router-dom";
import about from "../../../assets/asraful.png";
const About = () => {
  return (
    <div>
      <div className="py-16 about">
        <h1 className="heading w-96 mx-auto relative">
          About <span>Me</span>
          <span
            className="animate about-head absolute "
            style={{ "--i": "1" }}
          ></span>
        </h1>
        <div className="flex flex-col  md:grid md:grid-cols-2 items-center md:justify-around  px-10 md:px-8 lg:px-16 mt-8">
          <div className="about-img relative md:ml-5 lg:ml-14 ">
            <img src={about} className="reverse" alt="" />
            <span className="circle-spin"></span>
            <span
              className="animate about-head absolute "
              style={{ "--i": "2" }}
            ></span>
          </div>

          <div className="about-content  space-y-8 text-center md:text-left mt-8">
            <h2 className=" relative  mb-4">
              Frontend Developer!{" "}
              <span
                className="animate about-head absolute "
                style={{ "--i": "3" }}
              ></span>
            </h2>
            <p className="text-base relative ">
              I am a Front-End Developer with a passion for creating captivating
              user experiences. My expertise in HTML, CSS, and JavaScript allows
              me to craft dynamic and responsive interfaces. With a keen eye for
              aesthetics and functionality, I consistently deliver clean,
              intuitive, and accessible web solutions. Keeping up with the
              latest industry trends and best practices, I am dedicated to
              continuous growth and improvement.
              <span
                className="animate about-head absolute "
                style={{ "--i": "4" }}
              ></span>{" "}
            </p>

            <div className="btn-box relative buttons cursor-pointer">
              <Link type="submit" className="button-box px-8 py-3">
                Read More
              </Link>
              <span
                className="animate about-head absolute "
                style={{ "--i": "8" }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
