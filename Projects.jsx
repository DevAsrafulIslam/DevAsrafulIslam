import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="project" className="project">
      <h1 className="heading relative">
        My <span>Projects</span>
        <span
          className="animate about-head absolute "
          style={{ "--i": "1" }}
        ></span>
      </h1>
      <div className="project-row mt-9.">
        <div className="project-colum">
          <h3 className="title relative text-[#fa6001]">
            Some Things I've Built{" "}
            <span
              className="animate about-head absolute "
              style={{ "--i": "2" }}
            ></span>
          </h3>
          <div className="project-box grid grid-cols-2 gap-4 relative">
            <div className="project-content">
              <div className="content">
                <Link
                  target="_blank"
                  to="https://devasrafulislam.github.io/bootcamp/"
                >
                  <div className="year">
                    <FaGithub />
                    GitHub
                  </div>
                  <h3 className="" title="(Junior School Certificate)">
                    Bootcamp Bootstrap
                  </h3>
                  <img
                    className="project-img"
                    src="https://i.ibb.co/tYc6L3x/Screenshot-2023-12-05-at-5-58-59-PM.png
                  "
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="project-content">
              <div className="content">
                <Link target="_blank" to="https://muslims-corner.vercel.app/">
                  <div className="year">
                    <FaGithub />
                    GitHub
                  </div>

                  <h3 className="" title="(Junior School Certificate)">
                    Muslims Corner
                  </h3>
                  <img
                    className="project-img"
                    src="https://i.ibb.co/wwSjcjk/muslims-Corner.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="project-content">
              <div className="content">
                <Link
                  target="_blank"
                  to="https://car-doctor-client-with-jwt.vercel.app/"
                >
                  <div className="year">
                    <FaGithub />
                    GitHub
                  </div>

                  <h3
                    className="project-img"
                    title="(Junior School Certificate)"
                  >
                    Car Doctor
                  </h3>
                  <img
                    className="project-img"
                    src="https://i.ibb.co/6gdjgS0/car-Doctor.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="project-content">
              <div className="content">
                <Link
                  target="_blank"
                  to="https://video-game-toy-client.vercel.app/"
                >
                  <div className="year">
                    <FaGithub />
                    GitHub
                  </div>

                  <h3 className="" title="(Junior School Certificate)">
                    Video Games
                  </h3>
                  <img
                    target="_blank"
                    className="project-img"
                    src="https://i.ibb.co/Wz4G6MQ/video-Game.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <span
              className="animate about-head absolute "
              style={{ "--i": "3" }}
            ></span>
          </div>
          <div
            className="btn-box mt-8 relative buttons cursor-pointer"
            style={{ display: "flex", margin: "auto" }}
          >
            <Link
              target="_blank"
              to="https://github.com/DevAsrafulIslam"
              type="submit"
              className="button-box px-8 py-3"
            >
              More Projects
            </Link>
            <span
              className="animate about-head absolute "
              style={{ "--i": "8" }}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
