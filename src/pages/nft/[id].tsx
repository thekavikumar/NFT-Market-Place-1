import React from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

function NFTDropPage() {
  //Auth
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  console.log(address);

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* Left Side Of the page */}
      <div className="lg:col-span-4 bg-gradient-to-br from-blue-800 to-red-500">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br mt-6 from-yellow-400 to-purple-600 p-2 rounded-xl">
            <img
              className=" w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="https://mj-gallery.com/7f994435-1264-4879-822e-9bb015dfc617/grid_0_640_N.webp"
              alt=""
            />
          </div>
          <div className="text-center p-5 space-y-2">
            <h1 className="text-4xl font-bold text-white">Cyber Ninja Apes</h1>
            <h2 className="text-xl text-gray-300">
              A collection of Cyber Ninja Apes who live & breathe react
            </h2>
          </div>
        </div>
      </div>

      {/* Right Side Of the page */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-xl font-extralight sm:w-80 w-52 cursor-pointer">
            The{" "}
            <span className=" font-extrabold underline decoration-pink-600/50">
              {" "}
              Cyber Ninja
            </span>{" "}
            NFT Martket Place
          </h1>
          <button
            onClick={() => {
              address ? disconnect() : connectWithMetamask();
            }}
            className=" rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base"
          >
            {address ? "Sign Out" : "Sign In"}
          </button>
        </header>
        <hr className="my-2 border" />
        {address && (
          <p className="text-sm text-center text-rose-400">
            You're logged in with the wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}
        {/* Content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://links.papareact.com/bdy"
            alt="bannerImg"
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The Cyber Ninja Coding Club | NFT Drops
          </h1>
          <p className=" pt-2 text-xl text-green-500">13/21 NFT's claimed</p>
        </div>
        {/* Mint Button */}
        <button className="h-16 bg-red-600 w-full text-white rounded-full mt-10 font-bold">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  );
}

export default NFTDropPage;
