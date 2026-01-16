import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
            Hello, I am
          </h1>
          {/* Name */}
          <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            Abhishek Kumar
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-2 text-orange-400 leading-tight">
            <span className="text-white">I am  </span>
            <ReactTypingEffect
              text={[
                'a Fullstack Web Developer',
                'an Quality Ausurance Tester',
                // 'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-orange-400">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed text-justify">
            Software Engineer in Test (SDET) | Full Stack Developer | Java & Selenium | Playwright | MERN Stack | API Testing using Postman | MCA - 2025
            {/* Detail-oriented Full Stack Web Developer with hands-on experience in the MERN stack (React.js, Node.js, Express.js, and MongoDB). Proven ability to build scalable RESTful APIs and secure web application using JWT and Bcrypt. Strong background in manual testing and software Background in testing. */}
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1yUSybvFK-GC75ZVFUq3VR6oSQ7c1Lkce/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #f97316, #fb923c)',
              boxShadow: '0 0 2px #f97316, 0 0 2px #f97316, 0 0 40px #f97316',
            }}
          >
            DOWNLOAD CV
          </a>

        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end pl-2 sm:pl-4 md:pl-6 lg:pl-16">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-orange-400 rounded-full "
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Abhishek Kumar"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
