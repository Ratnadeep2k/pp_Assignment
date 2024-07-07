'use client'
import Jumbotron from "./components/Jumbotron.component";
import CountUp from 'react-countup';


const Home = () => {

  const homeTemplate = () => (
    <>
      <Jumbotron/>
      <section className="flex flex-col items-center w-full py-16 bg-gray-100 dark:text-gray-300 dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-white">Our Clients</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">We have been working with some Fortune 500+ clients</p>
        <div className="flex flex-wrap justify-center mt-8 space-x-8">
          <img src="/client.png" alt="Client Logo" className="h-10" />
          <img src="/client2.png" alt="Client Logo" className="h-10" />
          <img src="/client3.png" alt="Client Logo" className="h-10" />
          <img src="/client4.png" alt="Client Logo" className="h-10" />
          <img src="/client5.png" alt="Client Logo" className="h-10" />
          <img src="/client6.png" alt="Client Logo" className="h-10" />
        </div>
      </section>

      <section className="flex flex-col items-center w-full py-16 bg-gray-100 dark:bg-gray-800 dark:text-gray-300">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-300">
        Manage your entire community <br /> in a single system
      </h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Who is Nextcent suitable for?</p>
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3 w-full max-w-6xl px-4">
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md dark:bg-gray-700">
          <div className="flex items-center justify-center w-16 h-16 mb-4 bg-green-100 rounded-full">
            <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Membership Organisations</h3>
          <p className="mt-2 text-center text-gray-600 dark:text-gray-300">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md dark:bg-gray-700">
          <div className="flex items-center justify-center w-16 h-16 mb-4 bg-green-100 rounded-full">
            <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7h2v9h16V7h2L12 2zM5 10.18v6.82H3v-7.27l8-4.53 8 4.53V17h-2v-6.82L12 6l-7 4.18z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 ">National Associations</h3>
          <p className="mt-2 text-center text-gray-600 dark:text-gray-300">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md dark:bg-gray-700">
          <div className="flex items-center justify-center w-16 h-16 mb-4 bg-green-100 rounded-full">
            <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 12h7v2h-7v7h-2v-7H4v-2h7V5h2v7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Clubs And Groups</h3>
          <p className="mt-2 text-center text-gray-600 dark:text-gray-300">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>
      </div>
    </section>
      <section className="flex flex-col items-center w-full py-16 bg-gray-100 dark:bg-gray-800">
        <div className="flex flex-col items-center w-full max-w-4xl md:flex-row">
          <img src="/unseen.png" alt="Illustration" className="w-full max-w-xs md:w-1/2" />
          <div className="flex flex-col items-start justify-center w-full mt-8 md:mt-0 md:w-1/2 md:pl-16">
            <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-300">The unseen of spending three years at Pixelgrade</h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lobortis ipsum. Sed accumsan quam
              vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nisl massa, ultrices vitae
              porta quis, aliquet eget nibh. Mauris sit amet mi varius, varius libero eu, porta nisi. Nisl massa,
              ultrices vitae porta quis, aliquet eget nibh. Mauris sit amet mi varius.
            </p>
            <button className="px-6 py-3 mt-6 text-gray-300 bg-green-500 rounded">Learn More</button>
          </div>
        </div>
      </section>

 
      <section className="w-full  dark:bg-gray-800 ">
      <div className="bg-gray-200 p-8 left-0 dark:bg-gray-800 dark:text-gray-300">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-gray-300">
          Helping a local <span className="text-green-600 dark:text-gray-300">business reinvent itself</span>
        </h2>
        <p className="text-gray-600 mb-8 dark:text-gray-300">We reached here with our hard work and dedication</p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center">
              <img src="/image copy 2.png" alt="icon" className="w-10 h-10 mr-2" />
              <CountUp start={0} end={2245341} duration={7.5} separator="," className="text-4xl font-bold text-gray-800 dark:text-gray-300" />
            </div>
            <p className="text-gray-600 mt-2 dark:text-gray-300">Members</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center">
              <img src="/club.png" alt="icon" className="w-10 h-10 mr-2" />
              <CountUp start={0} end={46328} duration={7.5} separator="," className="text-4xl font-bold text-gray-800 dark:text-gray-300" />
            </div>
            <p className="text-gray-600 mt-2 dark:text-gray-300">Clubs</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center">
              <img src="/event.png" alt="icon" className="w-10 h-10 mr-2" />
              <CountUp start={0} end={828867} duration={7.5} separator="," className="text-4xl font-bold text-gray-800 dark:text-gray-300" />
            </div>
            <p className="text-gray-600 mt-2 dark:text-gray-300">Event Bookings</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center">
              <img src="/image.png" alt="icon" className="w-10 h-10 mr-2" />
              <CountUp start={0} end={1926436} duration={7.5} separator="," className="text-4xl font-bold text-gray-800 dark:text-gray-300" />
            </div>
            <p className="text-gray-600 mt-2">Payments</p>
          </div>
        </div>
      </div>
    </section>











      <section className="flex flex-col items-center w-full py-16 bg-gray-50 dark:bg-gray-800">
        <div className="flex flex-col items-center w-full max-w-4xl md:flex-row">
          <div className="flex flex-col items-start justify-center w-full mt-8 md:mt-0 md:w-1/2 md:pr-16">
            <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300" >How to design your site footer like we did</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Donec ac eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa
              nunc varius arcu, sit scelerisque erat erat a magna. Donec egestas erat et libero ultricies mollis. In hac
              habitasse platea dictumst. Vivamus vehicula leo id, auctor tincidunt nisl facilisis finibus. In euismod
              augue vitae nisi ultrices, non gravida est tincidunt. Integer nisi nisi, hendrerit venenatis libero.
            </p>
            <button className="px-6 py-3 mt-6 text-gray-300 bg-green-500 rounded">Learn More</button>
          </div>
          <img src="/image3.png" alt="Illustration" className="w-full max-w-xs md:w-1/2" />
        </div>
      </section>
      <section className="flex flex-col items-center w-full py-16 bg-gray-200 dark:bg-gray-800 dark:text-gray-300">
        <div className="flex flex-col items-center w-full max-w-4xl">
          <div className="flex flex-col items-center w-full md:flex-row">
            <img src="/tesla.png" alt="Illustration" className="w-full max-w-xs md:w-1/2" />
            <div className="flex flex-col items-start justify-center w-full mt-8 md:mt-0 md:w-1/2 md:pl-16">
              <p className="text-gray-600 dark:text-gray-300">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                tincidunt ullamcorper. Proin eu enim metus. Vivamus id libero urna. Integer nisi nisi, hendrerit
                venenatis libero, donec consectetur faucibus ipsum in gravida. Integer nisi nisi, hendrerit venenatis
                libero.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Tim Smith <br />
                British Dragon Boat Racing Association
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center mt-8 space-x-8 ">
            <img src="/client.png" alt="Client Logo" className="h-10" />
            <img src="/client2.png" alt="Client Logo" className="h-10" />
            <img src="/client3.png" alt="Client Logo" className="h-10" />
            <img src="/client4.png" alt="Client Logo" className="h-10" />
            <img src="/client5.png" alt="Client Logo" className="h-10" />
            <img src="/client6.png" alt="Client Logo" className="h-10" />
            <h2 className=" font-bold text-green-500 dark:text-green-500">Meet all customer →</h2>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center w-full py-16 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">Caring is the new marketing</h2>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who’s
          joining the community, read about how our community members are increasing their membership income and lot’s
          more.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
          <div className="p-6 bg-gray-100 rounded shadow dark:bg-gray-700">
            <img src="/bura.png" alt="Blog Post" className="w-80 h-60 rounded" />
            <h3 className="mt-4 text-xl font-bold text-gray-700 dark:text-gray-300">Creating Streamlined Safeguarding Processes with OneRen</h3>
            <p className="mt-2 text-green-500 dark:text-green-500">Readmore →</p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow dark:bg-gray-700">
            <img src="/laptop.png" alt="Blog Post" className="w-80 h-60 rounded" />
            <h3 className="mt-4 text-xl font-bold text-gray-700 dark:text-gray-300">
              What are your safeguarding responsibilities and how can you manage them?
            </h3>
            <p className="mt-2 text-green-500">Readmore →</p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow dark:bg-gray-700">
            <img src="/last.png" alt="Blog Post" className="w-80 h-60 rounded" />
            <h3 className="mt-4 text-xl font-bold text-gray-700 dark:text-gray-300">Revamping the Membership Model with Triathlon Australia</h3>
            <p className="mt-2 text-green-500">Readmore →</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center w-full py-16 bg-gray-200 dark:bg-gray-700">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">Pellentesque suscipit fringilla libero eu.</h2>
        <button className="px-6 py-3 mt-6 text-gray-300 bg-green-500 rounded ">Get a Demo</button>
      </section>
    </>
  );

  return(
    <>
      {homeTemplate()}
    </>
  );
};

export default Home;