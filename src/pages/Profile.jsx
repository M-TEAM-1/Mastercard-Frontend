import React from "react";
import "../index.css";

const Profile = () => {
  return (
    <>
      <div className="p-1 pb-32 text-black">
        <div className="w-full flex flex-col items-start bg-[#A594F9] p-3 rounded-lg mb-3">
          <div className="flex justify-center w-full mb-3 p-10">
            <img
              src="/src/assets/react.svg"
              alt="Profile"
              className="w-40 h-40 rounded-full ring ring-white p-2"
            />
          </div>
          <h2 className="text-lg font-bold mb-2">Name : John Doe</h2>
          <hr className="bg-black" />
          <p className="text-start mb-2">
            <span className="text-lg font-bold">About : </span> Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Minus delectus saepe,
            sed architecto odio, corrupti ratione non dolorum excepturi ad, quae
            laborum consequuntur doloribus nemo nesciunt deserunt esse
            perspiciatis libero?
          </p>
          <p className="text-start mb-2">
            <span className="text-lg font-bold ">College Details : </span>Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            aperiam adipisci dolorem, nihil atque autem accusantium quia ipsam
            placeat perspiciatis?
          </p>
          <button className="bg-[#4A47FF] hover:bg-[#4a47ff9a] px-3 py-2 rounded-lg">
            Edit Profile
          </button>
        </div>
        <div className="w-full flex flex-col items-start bg-[#A594F9] p-3 rounded-lg mb-3">
          <h2 className="text-lg font-bold mb-2">General Information</h2>
          <p className="text-start mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            delectus saepe, sed architecto odio, corrupti ratione non dolorum
            excepturi ad, quae laborum consequuntur doloribus nemo nesciunt
            deserunt esse perspiciatis libero?
          </p>
        </div>
        <div className="w-full flex flex-col items-start bg-[#A594F9] p-3 rounded-lg mb-3">
          <h2 className="text-lg font-bold mb-2">Skills</h2>
          <ul className="text-start mb-2 ml-5 font-semibold">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>REACT</li>
          </ul>
        </div>
        <div className="w-full flex flex-col items-start bg-[#A594F9] p-3 rounded-lg mb-3">
          <h2 className="text-lg font-bold mb-2">General Information</h2>
          <p className="text-start mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            delectus saepe, sed architecto odio, corrupti ratione non dolorum
            excepturi ad, quae laborum consequuntur doloribus nemo nesciunt
            deserunt esse perspiciatis libero?
          </p>
        </div>
        <div className="w-full flex flex-col items-start bg-[#A594F9] p-3 rounded-lg mb-3">
          <h2 className="text-lg font-bold mb-2">General Information</h2>
          <p className="text-start mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            delectus saepe, sed architecto odio, corrupti ratione non dolorum
            excepturi ad, quae laborum consequuntur doloribus nemo nesciunt
            deserunt esse perspiciatis libero?
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
