import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="px-2 py-10 md:px-0">
      <div className="mx-auto max-w-4xl">
        <div className="md:flex md:items-center md:justify-center md:space-x-14">
          <div className="relative h-48 w-48 flex-shrink-0 ">
            <img
              className="relative h-48 w-48 rounded-full object-cover "
              src="https://firebasestorage.googleapis.com/v0/b/mern-estate-fc99f.appspot.com/o/1704055274011chandu1.jpg?alt=media&token=7e83ba4e-cc6a-4513-bd52-4c5e298e35dbhttps://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
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
            <Link src="">
              <p className="mt-1 text-base text-gray-600">MERN Stack Developer | Full Stack Developer | ReactJs Developer at Tata Consultancy Services</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
