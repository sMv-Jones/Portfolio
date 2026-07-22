import "./about.css";

function About() {
    return (
        <section className="about-container">
            <h1 className="about-title">Hello!</h1>

            {}
            <p className="about-text">
                Hi, I'm <strong>Mohd Afzal</strong>, a full-stack developer specializing in the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js). I focus on bridging the gap between robust, scalable backend architecture and clean, highly responsive user interfaces. As an aspiring software engineer entering the tech industry, my goal is to build web applications that are not just functional, but optimized, highly secure, and intuitive for the end-user.
            </p>
            <br />

            {}
            <div className="about-mobile-hidden">
                <p className="about-text">
                    My journey into development stems from a deep curiosity about how complex digital systems function under the hood. I love taking intricate, real-world problems and breaking them down into modular, maintainable code. Whether it's designing structured database schemas in MongoDB, crafting efficient RESTful APIs with Node.js and Express, or building dynamic, state-managed frontends using React, I treat writing code as a craft. I genuinely enjoy the process of debugging and optimizing application performance, always looking for ways to write cleaner functions and minimize load times.
                </p>
                <p className="about-text">
                    When I am not sitting in front of a code editor, I like to step away from the screen and engage my analytical side with hands-on hardware engineering. I am an avid tech tinkerer who loves repairing electronic gear, building custom computers, and modifying hardware. This passion for taking physical components apart and understanding how they interact perfectly mirrors my approach to software architecture.
                </p>

                <hr className="about-divider" />
            </div>

            {}
            <div className="highlight-box">
                <p>
                    As a fresher, I bring a strong engineering mindset, a relentless hunger to learn, and a knack for hands-on problem-solving. I’m currently looking for my first full-stack role or internship. Check out my projects below, and let’s connect!
                </p>
            </div>
        </section>
    );
}

export default About;