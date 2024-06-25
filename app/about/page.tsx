import React from "react";
import Navbar from "../components/navbar/Navbar";
import Navbar2 from "../components/navbar2/Navbar2";
import Footer from "../components/footer/Footer";

const page = () => {
  return (

<div>
<Navbar/>
<Navbar2/>

    <div className="flex flex-col items-center p-6 bg-blue-100  mt-0">
      <div className="border-2 md:w-7/12 bg-gray-300 bg-opacity-30 shadow-inner-custom">
        <img
          src="about.webp"
          alt="Profile Picture"
          className="w-auto h-auto object-cover rounded-full p-5 shadow-inner-custom"
        />

        <h1 className="text-2xl font-bold text-gray-800 mb-3 mt-9 text-center">ABOUT US</h1>
        <p className="text-black mb-9 mx-14 ">
        Welcome to our platform, designed for the global community that thrives on the excitement of random video chat. With lightning-fast connections and enhanced content moderation, we provide a secure environment for your video chat adventures. Whether you are looking to make new friends, have meaningful conversations, or simply enjoy meeting new people, our platform offers a thoughtfully curated space for secure and instantaneous connections with individuals from around the world. Join us and experience the next evolution of random video chat. Connect, chat, and explore the world from the comfort of your own screen. Welcome to the future of online interactions! Welcome to the New Omegle!
        </p>

      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default page;
