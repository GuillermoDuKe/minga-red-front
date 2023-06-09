import star from "/img/star.png";

export default function hero(){
    return(
        <div className="flex flex-col ms-5 mr-5 lg:mt-[30%]  mt-[60%] items-center">
        <h1 className="text-white flex font-roboto font-bold sm:text-4xl 2xl:text-5xl text-center">
          Your favorite comic book store{" "}
          <img className="hidden lg:inline w-8 h-8" src={star} alt="" />
        </h1>
        <p className="text-center ps-1 pr-1 mt-6 text-white font-roboto md:text-xl text-xs lg:hidden">
          From classics to novelties, we have everything you need to immerse
          yourself in your favorite universes. Explore our catalog and live
          the adventure of your life.
        </p>
        <p className="text-center hidden lg:inline ps-1 pr-1 mt-6 text-white font-roboto text-base">
          Explore our catalog to live the adventure of your life.
        </p>
        <a
          href=""
          className="mt-6 text-white lg:hidden bg-gradient-to-r from-indigo-700 to-indigo-500 w-[30%] h-[30px] sm:w-80 sm:h-16 flex flex-col justify-center text-center rounded-full text-1xl sm:text-2xl font-bold"
        >
          Started
        </a>
        <a
          href=""
          className="mt-6 hidden lg:inline-flex text-white bg-gradient-to-r from-indigo-700 to-indigo-500 w-80 h-16 flex-col justify-center text-center rounded-md text-2xl font-bold"
        >
          Let's go!
        </a>
      </div>
    )
}