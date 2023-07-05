import { useState } from "react";
import { BsStars } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { AiFillLinkedin, AiFillFileText } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import profile from "./assets/img_port.jpg";
import logo from "./assets/logo.jpg";
import cv from "./assets/cv.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto h-full">
        <header className="px-20 py-10">
          <section className="flex">
            <div className="flex my-auto mr-2">
              <BsStars size={20} />
            </div>
            <p className="text-md font-bold">Niña Turiano</p>
          </section>
        </header>

        <main className="px-20 py-10">
          <section className="grid grid-cols-2">
            <div>
              <section className="flex my-auto mb-4">
                <div className="flex my-auto mr-2">
                  <FaMapLocationDot size={20} />
                </div>
                <p className="text-md font-bold">Cavite, Philippines</p>
              </section>
              <h1 className="text-6xl font-bold mb-2">Hello,</h1>
              <h1 className="text-6xl font-bold mb-6">I'm Niña Turiano,</h1>
              <p className="text-xl">
                I'm an Information Technology student with an emerging skillset in computer systems
                and a basic understanding of Java programming. I also possesses a genuine enthusiasm
                for technology and a desire to expand their knowledge and expertise.
              </p>

              <div className="mt-5">
                <a
                  href="https://www.linkedin.com/in/ni%C3%B1a-turiano-58810124b/"
                  className="btn mr-4"
                  target="_blank"
                >
                  <div>
                    <AiFillLinkedin size={20} />
                  </div>
                  <p>LinkedIn</p>
                </a>
                <a href="mailto:turianonina1@gmail.com" className="btn mr-4">
                  <div>
                    <MdEmail size={20} />
                  </div>
                  <p>Email</p>
                </a>
                <a href={cv} download="turiano_cv" className="btn">
                  <div>
                    <AiFillFileText size={20} />
                  </div>
                  <p>Resume</p>
                </a>
              </div>
            </div>

            <div className="m-auto">
              <div className="avatar">
                <div className="w-[60%] rounded-full mx-auto">
                  <img src={profile} alt="" />
                </div>
              </div>
            </div>
          </section>
        </main>

        <section className="p-20 mt-10 ">
          <div className="mt-4">
            <h1 className="text-4xl font-bold mb-4">TECHNOLOGIES USED</h1>
            <p className="">
              <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=java,html,css,php" />
              </a>
            </p>
          </div>
        </section>
      </div>
      <div className="px-20">
        <h1 className="text-4xl font-bold mb-4">PROJECTS</h1>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={logo} className="w-28" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Crochet Yarn!</h2>
            <p>
              A guide application on how to crochet for beginners. This system was developed to
              address the problems encountered by the beginners in crochet.
            </p>
          </div>
        </div>
      </div>
      <footer className="px-20 py-2 mt-10">
        <p className="font-bold">© Niña Turiano 2023</p>
      </footer>
    </>
  );
}

export default App;
