// import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="px-2 py-10 md:px-0">
      <div className="mx-auto max-w-4xl">
        <div className="md:flex md:items-center md:justify-center md:space-x-14">
          <div className="relative h-48 w-48 flex-shrink-0 ">
            <img
              className="relative h-48 w-48 rounded-full object-cover hover:pointer-cursor"
              src="https://firebasestorage.googleapis.com/v0/b/mern-estate-fc99f.appspot.com/o/chandu1.jpg?alt=media&token=bb6772dc-82f8-40c1-8c51-c2bba42b986d"
              alt=""
            />
          </div>

          <div className="mt-10 md:mt-0">
            <blockquote>
              <p className="text-xl text-black">
                Experienced MERN Stack Developer with over 4 years of expertise, seamlessly navigating both frontend and backend development. Proficient in leveraging the MERN stack (MongoDB, Express.js, React, Node.js)
                to create dynamic and scalable applications. Adept at incorporating AI tools for accelerated development, ensuring efficiency and innovation in project delivery.
              </p>
            </blockquote>
            <p className="mt-7 text-lg font-semibold text-black">Poorna Chander Terala</p>

            <p className="mt-1 text-base text-gray-600">MERN Stack Developer | Full Stack Developer | ReactJs Developer at Tata Consultancy Services</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
