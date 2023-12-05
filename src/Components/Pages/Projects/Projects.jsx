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
                <Link target="_blank" to="http://localhost:5173/">
                  <div className="year">
                    <FaGithub />
                    GitHub
                  </div>

                  <h3 className="" title="(Junior School Certificate)">
                    My Profile
                  </h3>
                  <img
                    className="project-img"
                    src="https://i.ibb.co/YW21JRL/Screenshot-2023-12-05-at-6-12-37-PM.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="project-content">
              <div className="content">
                <Link
                  target="_blank"
                  to="https://devasrafulislam.github.io/myfirst-website/"
                >
                  <div className="year">
                    <FaGithub />
                    GitHub
                  </div>

                  <h3
                    className="project-img"
                    title="(Junior School Certificate)"
                  >
                    All Thinks Are Possible If You believe
                  </h3>
                  <img
                    className="project-img"
                    src="https://i.ibb.co/P57sP0y/Screenshot-2023-12-05-at-5-59-55-PM.png
"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="project-content">
              <div className="content">
                <Link
                  target="_blank"
                  to="https://devasrafulislam.github.io/G-3-architects/"
                >
                  <div className="year">
                    <FaGithub />
                    GitHub
                  </div>

                  <h3 className="" title="(Junior School Certificate)">
                    G3 Architects
                  </h3>
                  <img
                    target="_blank"
                    className="project-img"
                    src="https://i.ibb.co/3pvz14M/Screenshot-2023-12-05-at-6-01-00-PM.png"
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
            <Link type="submit" className="button-box px-8 py-3">
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
