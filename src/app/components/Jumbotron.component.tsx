'use client'
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Jumbotron = () => {

    const jumbotronTemplate = () => (
      <section className="py-16 bg-gray-50 dark:bg-gray-800 px-8">
      <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows autoPlay>
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="flex flex-col items-center md:items-start max-w-md md:max-w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-center md:text-left text-black dark:text-white">
              Lessons and insights
              <br />
              <span className="text-green-500">from 8 years</span>
            </h1>
            <p className="mt-4 text-lg text-center md:text-left text-gray-600 dark:text-gray-300">
              Where to grow your business as a photographer: site or social media?
            </p>
            <button className="px-6 py-3 mt-6 text-white bg-green-500 rounded">
              Register
            </button>
          </div>
          <div className="flex justify-center max-w-md md:max-w-1/2">
            <Image src="/image1.png" alt="Illustration" width={500} height={500} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="flex flex-col items-center md:items-start max-w-md md:max-w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-center md:text-left text-black dark:text-white">
              More insights
              <br />
              <span className="text-green-500">from our experiences</span>
            </h1>
            <p className="mt-4 text-lg text-center md:text-left text-gray-600 dark:text-gray-300">
              Discover the best practices and tips to grow your photography business.
            </p>
            <button className="px-6 py-3 mt-6 text-white bg-green-500 rounded">
              Learn More
            </button>
          </div>
          <div className="flex justify-center max-w-md md:max-w-1/2">
            <Image src="/image1.png" alt="Illustration" width={500} height={500} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="flex flex-col items-center md:items-start max-w-md md:max-w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-center md:text-left text-black dark:text-white">
              Join us
              <br />
              <span className="text-green-500">and start your journey</span>
            </h1>
            <p className="mt-4 text-lg text-center md:text-left text-gray-600 dark:text-gray-300">
              Be a part of our community and learn from the best in the industry.
            </p>
            <button className="px-6 py-3 mt-6 text-white bg-green-500 rounded">
              Get Started
            </button>
          </div>
          <div className="flex justify-center max-w-md md:max-w-1/2">
            <Image src="/image1.png" alt="Illustration" width={500} height={500} />
          </div>
        </div>
      </Carousel>
      
    </section>
     
      
    )
    return(
        <>
            {jumbotronTemplate()}
        </>
    );
};

export default Jumbotron;