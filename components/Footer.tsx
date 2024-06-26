import React from "react";
import { FaDiscord, FaTwitter, FaLocationArrow } from "react-icons/fa6";
import "./style.css";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer: React.FC = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* Background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] mt-10 mb-10">
          Ready to take your <span className="text-purple"> tech career </span> 
          to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to us today and let&apos;s discuss how we can help you
          achieve your goals.
        </p>
        <a href="mailto:growtechie.ind@gmail.com">
          <MagicButton
            title="Contact Us"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Growtechie
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

const Joinus: React.FC = () => {
  return (
    <div
      id="joinus"
      className="reveal font-sans min-h-screen relative flex justify-center items-center"
    >
      <span className="absolute shiny-border-design top-0 right-[60%] w-[800px] h-[600px]"></span>

      <section className="mx-auto py-8 px-4 lg:p-16 rounded-lg shadow-xl bg-opacity-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between">
          <div className="md:col-span-1">
            <h1 className="main-title text-3xl lg:text-6xl font-extrabold text-[var(--primary-text)] text-center md:text-left text-gradient mt-10 mb-10">
              The Dynamic Community of Tech Enthusiasts
            </h1>

            <div className="main-description prose-lg text-[var(--secondary-text)] text-center md:text-left">
              <p>
                Being passionate about tech is exhilarating, but it can also be
                a test of innovation, finding your voice, and standing out.
              </p>
              <p>
                Join our online community to connect with fellow tech
                enthusiasts, brainstorm groundbreaking ideas, and inspire one
                another to explore, experiment, and share your tech expertise.
              </p>
            </div>

            <ul className="my-8 flex justify-center gap-4 md:justify-start">
              <li className="self-center break:self-start">
                <a
                  href="https://discord.gg/6nmQsvpZ"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDiscord />
                  Join Discord Server
                </a>
              </li>
              <li className="self-center break:self-start">
                <a
                  href="https://twitter.com/growtechie"
                  className="btn btn-twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                  Follow on Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <iframe
              src="https://discord.com/widget?id=1015348978755313764&theme=dark"
              width="100%"
              height="500"
              allowTransparency
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              className="h-[300px] md:h-[500px]"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <>
      <Joinus />
      <Footer />
    </>
  );
};

export default App;