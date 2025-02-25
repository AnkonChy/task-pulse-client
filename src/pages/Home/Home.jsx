import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    // <div className="pt-20">
    //   <img
    //     src="https://i.ibb.co.com/sJdyvDn1/ian-dooley-DJ7b-Wa-Gwks-unsplash.jpg"
    //     alt=""
    //     className="min-h-full"
    //   />
    // </div>
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/sJdyvDn1/ian-dooley-DJ7b-Wa-Gwks-unsplash.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            {/* Welcome to <span className="font-bold">Cine Vault</span>, your go-to
          platform for exploring movies across all genres. From classics to
          blockbusters, we bring you reviews, recommendations, and everything
          a movie lover needs. Dive into the world of cinema with us! */}
            Welcome to <span className="font-bold">TaskPulse</span>, is a task
            management platform that helps users organize, track, and prioritize
            their tasks efficiently. 🚀 You have to log in first.
          </p>
          <Link to="/login">
            <button className="btn bg-yellow-500 hover:bg-yellow-600 hover:text-white">
              Get Started with TaskPulse
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
