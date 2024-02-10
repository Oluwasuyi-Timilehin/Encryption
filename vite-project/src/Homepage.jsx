import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Homepage = () => {
  const [showSubcontext, setShowSubcontext] = useState(false);

  const handleButtonClick = () => {
    // Only toggle the visibility of the main content
    // if the subcontent is currently hidden
    if (!showSubcontext) {
      setShowSubcontext(true);
    }
  };

  const handleBackButtonClick = () => {
    setShowSubcontext(false);
  };

  const design = {
    display: "none",
  };

  const Label = {
    color: "black",
    backgroundColor: "white",
    height: "30px",
    width: "30px",
  };

  return (
    <>
      <section className="">
        <nav className="flex justify-between top-0 sticky w-full items-center px-3 py-2 border-b border-secondary bg-white shadow lg:hidden">
          <p className="font-bold">David</p>
          <img className="h-7 w-7 rounded-full" src="./src/Images/backg.JPG" />
        </nav>
        <nav className="lg:flex lg:space-x-96">
          <nav
            id="mainContent"
            className={`px-4 py-4 h-screen md:border md:border-grey rounded-sm lg:w-96 lg:fixed ${
              showSubcontext ? "hidden lg:block" : ""
            }`}
          >
            <div className="space-y-4 container mx-auto pb-5">
              <p className="text-left text-3xl font-medium">History</p>
              <input
                type="text"
                placeholder="Search recents"
                className="w-full border-2 border-y-2 border-grey border-b-secondary rounded-lg focus:outline-none px-4 py-1"
              />
            </div>
            <div className="container mx-auto">
              <button
                className="flex px-2 space-x-3 w-full items-center border-b border-grey py-2 rounded-xl"
                onClick={handleButtonClick}
              >
                <img
                  className="h-10 w-10 rounded-full"
                  src="./src/Images/backg.JPG"
                />
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col">
                    <p className="font-medium text-left">David</p>
                    <p className="text-sm text-left">Send me your Email</p>
                  </div>
                  <p className="text-sm">yesterday</p>
                </div>
              </button>
              <button className="flex px-2 space-x-3 w-full items-center border-b border-grey py-2 rounded-xl">
                <img
                  className="h-10 w-10 rounded-full"
                  src="./src/Images/backg.JPG"
                />
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col">
                    <p className="font-medium text-left">David</p>
                    <p className="text-sm text-left">Send me your Email</p>
                  </div>
                  <p className="text-sm">yesterday</p>
                </div>
              </button>
            </div>
          </nav>
          <nav
            id="subcontent"
            className={`w-full ${showSubcontext ? "" : "hidden"}`}
          >
            <div className="bg-white top-0 sticky">
              <div className="flex items-center space-x-3 px-3 py-4">
                <AiOutlineArrowLeft
                  className="text-md lg:text-xl"
                  onClick={handleBackButtonClick}
                />
                <img
                  src="./src/Images/backg.JPG"
                  className="rounded-full h-8 w-8 lg:h-10 lg:w-10"
                />
              </div>
            </div>
            <div className="py-3 h-screen">
              <div class="p-2">
                <div class="flex items-start space-x-2">
                  <img
                    src="./src/Images/backg.JPG"
                    class="rounded-full h-8 w-8"
                  />
                  <div class="bg-secondary text-white p-3 rounded-lg">
                    <p>Hello!</p>
                    <p>How can I help you?</p>
                  </div>
                </div>
                <div class="flex items-end space-x-2 justify-end mt-4">
                  <div class="bg-primary text-white p-3 rounded-lg">
                    <p>Hi!</p>
                    <p>I need some assistance.</p>
                  </div>
                  <img
                    src="./src/Images/backg.JPG"
                    class="rounded-full h-8 w-8"
                  />
                </div>
              </div>

              <nav className="fixed bottom-2 bg-white w-full md:w-6/12 md:bg-none md:right-5 space-y-3 px-4">
                <div className="">
                  <div className="flex space-x-1 ">
                    <input
                      type="text"
                      className="border focus:outline-none px-3 py-0.5 w-8/12 md:py-1.5"
                    />
                    <button className="border px-3">Submit</button>
                  </div>
                </div>
                <div className="flex items-center justify-evenly">
                  <div className="">
                    <label
                      for="file"
                      className="border border-grey px-2 py-0.5 rounded-sm"
                      style={Label}
                    >
                      Select File
                      <input type="file" id="file" style={design} />
                    </label>
                  </div>
                  <div className=" space-x-">
                    <button className="text-sm border py-1 bg-primary text-white rounded-sm font-semibold px-2">
                      Encrypt
                    </button>
                    <button className="text-sm border py-1 bg-primary text-white rounded-sm font-semibold px-2">
                      Decrypt
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </nav>
        </nav>
      </section>
    </>
  );
};

export default Homepage;
