import {AiOutlineArrowLeft} from 'react-icons/ai'
const Homepage = () => {
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
        <nav className="flex justify-between w-full items-center px-3 py-2 border-b border-secondary bg-white shadow lg:hidden">
          <p className="font-bold">David</p>
          <img className="h-7 w-7 rounded-full" src="./src/Images/backg.JPG" />
        </nav>
        <nav className="lg:flex lg:space-x-72 xl:space-x-80">
          <nav className="hidden px-4 py-4 lg:block md:border md:border-grey rounded-sm lg:fixed lg:w-72 lg:h-screen xl:w-80">
            <div className="space-y-4 pb-5">
              <p className="text-left text-3xl font-medium">History</p>
              <input
                type="text"
                placeholder="Search recents"
                className="w-full border-2 border-y-2 border-grey border-b-secondary rounded-lg focus:outline-none px-4 py-1"
              />
            </div>
            <div className="flex space-x-3 w-full items-center border-b border-grey py-2 rounded-xl">
              <img
                className="h-10 w-10 rounded-full"
                src="./src/Images/backg.JPG"
              />
              <button className="flex justify-between items-center w-full">
                <div className="flex flex-col">
                  <p className="font-medium text-left">David</p>
                  <p className="text-sm text-left">Send me your Email</p>
                </div>
                <p className="text-sm">yesterday</p>
              </button>
            </div>
            <div className="flex space-x-3 w-full items-center border-b border-grey py-2 rounded-xl">
              <img
                className="h-10 w-10 rounded-full"
                src="./src/Images/backg.JPG"
              />
              <button className="flex justify-between items-center w-full">
                <div className="flex flex-col">
                  <p className="font-medium text-left">David</p>
                  <p className="text-sm text-left">Send me your Email</p>
                </div>
                <p className="text-sm">yesterday</p>
              </button>
            </div>
          </nav>
          <nav className="w-full px-4 py-6 md:px-0 md:py-0">
            <div className="bg-white hidden sticky top-0 lg:block">
              <div className="flex items-center space-x-3 px-3 py-4">
                <AiOutlineArrowLeft className='text-xl' />
                <img src="./src/Images/backg.JPG" className='rounded-full h-10 w-10' />
              </div>
            </div>
            <div className="border px-2 py-3 h-full md:h-full md:px-10 md:py-8">
              <nav className="">
                <div className="pb-20 space-y-7">
                  <p className="bg-grey text-black px-2 py-1 rounded-lg float-left font-medium md:px-4">
                    Hello there
                  </p>
                  <p className="bg-secondary text-black px-2 py-1 rounded-lg float-right font-medium md:px-4">
                    yess how are you doing
                  </p>
                </div>
                <div className="space-y-7 pb-20">
                  <p className="bg-grey text-black px-2 py-1 rounded-lg float-left font-medium md:px-4">
                    Hello there
                  </p>
                  <p className="bg-secondary text-black px-2 py-1 rounded-lg float-right font-medium md:px-4">
                    yess how are you doing
                  </p>
                </div>
                <div className="space-y-7 pb-20">
                  <p className="bg-grey text-black px-2 py-1 rounded-lg float-left font-medium md:px-4">
                    Hello there
                  </p>
                  <p className="bg-secondary text-black px-2 py-1 rounded-lg float-right font-medium md:px-4">
                    yess how are you doing
                  </p>
                </div>
                <div className="space-y-7 pb-20">
                  <p className="bg-grey text-black px-2 py-1 rounded-lg float-left font-medium md:px-4">
                    Hello there
                  </p>
                  <p className="bg-secondary text-black px-2 py-1 rounded-lg float-right font-medium md:px-4">
                    yess how are you doing
                  </p>
                </div>
                <div className="space-y-7 pb-20">
                  <p className="bg-grey text-black px-2 py-1 rounded-lg float-left font-medium md:px-4">
                    Hello there
                  </p>
                  <p className="bg-secondary text-black px-2 py-1 rounded-lg float-right font-medium md:px-4">
                    yess how are you doing
                  </p>
                </div>
                <div className="space-y-7 pb-20">
                  <p className="bg-grey text-black px-2 py-1 rounded-lg float-left font-medium md:px-4">
                    Hello there
                  </p>
                  <p className="bg-secondary text-black px-2 py-1 rounded-lg float-right font-medium md:px-4">
                    yess how are you doing
                  </p>
                </div>
                <div className="space-y-7 pb-20">
                  <p className="bg-grey text-black px-2 py-1 rounded-lg float-left font-medium md:px-4">
                    Hello there
                  </p>
                  <p className="bg-secondary text-black px-2 py-1 rounded-lg float-right font-medium md:px-4">
                    yess how are you doing
                  </p>
                </div>
                <div className="space-y-7 pb-20">
                  <p className="bg-grey text-black px-2 py-1 rounded-lg float-left font-medium md:px-4">
                    Hello there
                  </p>
                  <p className="bg-secondary text-black px-2 py-1 rounded-lg float-right font-medium md:px-4">
                    yess how are you doing
                  </p>
                </div>
              </nav>
            </div>
          </nav>

          <nav className="fixed bottom-0 bg-white w-full md:w-6/12 md:bg-none md:right-5 space-y-3 px-4">
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
        </nav>
      </section>
    </>
  );
};
export default Homepage;
