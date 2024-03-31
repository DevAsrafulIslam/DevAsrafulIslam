import { FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  return (
    <div className="education">
      <h1 className="heading relative">
        My <span>Journey</span>
        <span
          className="animate about-head absolute "
          style={{ "--i": "1" }}
        ></span>
      </h1>
      <div className="education-row mt-9.">
        <div className="education-colum">
          <h3 className="title relative text-[#fa6001]">
            Education{" "}
            <span
              className="animate about-head absolute "
              style={{ "--i": "2" }}
            ></span>
          </h3>
          <div className="education-box relative">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaCalendarAlt />
                  2015
                </div>

                <h3 className="" title="(Junior School Certificate)">
                  JSC - Dantbhanga High School & Collage
                </h3>
                <p>
                  In 2017, I achieved a GPA of 3.50/5 in the JSC examination
                  from Dantbhanga School and College, marking a significant
                  academic accomplishment on my journey.
                </p>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaCalendarAlt />
                  2017-2018
                </div>

                <h3 title="(Junior School Certificate) ">
                  SSC - Vertex Model High School
                </h3>
                <p>
                  I proudly graduated from Vertex Model High School in 2017,
                  achieving an impressive GPA of 4.23 out of 5 in the SSC
                  examination held between 2017-2018.
                </p>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaCalendarAlt />
                  2022
                </div>

                <h3 title="(Junior School Certificate) ">
                  Diploma - Model Institute of Science and Technology
                </h3>
                <p>
                  I proudly graduated Model Institute of Science and Technology
                  in 2022, achieving an impressive CGPA of 3.84 out of 4 in the
                  Diploma examination held between 2022.
                </p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaCalendarAlt />
                  Continue Study
                </div>

                <h3 title="(Junior School Certificate) ">B.Sc in CSE</h3>
                <p>I am currently study in Uttara University.</p>
              </div>
            </div>
            <span
              className="animate about-head absolute "
              style={{ "--i": "3" }}
            ></span>
          </div>
        </div>
        <div className="education-colum">
          <h3 className="title relative text-[#fa6001]">
            Experience{" "}
            <span
              className="animate about-head absolute "
              style={{ "--i": "4" }}
            ></span>
          </h3>
          <div className="education-box relative">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaCalendarAlt />
                  2017
                </div>

                <h3>Computer Application </h3>
                <p>
                  Experience In this Section
                  <div className="text-2xl text-[#00abf0] ">
                    <span>Microsoft Office </span>{" "}
                    <span className="ml-4">Adobe Photoshop</span>
                    <span className="ml-4">Adobe Illustrator</span>
                  </div>
                </p>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaCalendarAlt />
                  2022
                </div>

                <h3>Flutter </h3>
                <p>Experience In this Section.</p>
                <div className="text-2xl text-[#00abf0] ">
                  <span className="ml-4">Android App</span>
                  <span className="ml-4">iSO App</span>
                </div>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaCalendarAlt />
                  2022
                </div>

                <h3>Web Developer </h3>
                <p>Experience In this Section .</p>
                <div className="text-2xl text-[#00abf0] ">
                  <span className="ml-4">Front End Developer</span>
                </div>
              </div>
            </div>
            <span
              className="animate about-head absolute "
              style={{ "--i": "5" }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
