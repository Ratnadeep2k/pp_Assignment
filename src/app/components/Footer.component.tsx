import Link from "next/link";

const Footer = () => {

    const footerTemplate = () => (
        <footer className="flex flex-col items-center w-full py-16 bg-gray-800 text-white">
            <div className="flex flex-col items-center w-full max-w-6xl md:flex-row md:justify-between">
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center space-x-4">
                        <img src="image0.png" alt="Nexcent Logo" className="h-6" />
                        <span className="text-xl font-bold text-white dark:text-white">Nexcent</span>
                    </div>

                    <p className="mt-4 text-center md:text-left">Copyright © 2020 Nexcent ltd. All rights reserved</p>
                    <div className="flex mt-4 space-x-4">
                        <img src="/insta.png" alt="Social Icon" className="h-6" />
                        <img src="/x.png" alt="Social Icon" className="h-6" />
                        <img src="/utube.png" alt="Social Icon" className="h-6" />
                    </div>
                </div>
                <div className="flex flex-col items-center mt-8 space-y-4 md:mt-0 md:items-start">
                    <h3 className="text-lg font-bold">Company</h3>
                    <Link href="#" className="text-gray-400">
                        About us
                    </Link>
                    <Link href="#" className="text-gray-400">
                        Blog
                    </Link>
                    <Link href="#" className="text-gray-400">
                        Contact us
                    </Link>
                    <Link href="#" className="text-gray-400">
                        Pricing
                    </Link>
                    <Link href="#" className="text-gray-400">
                        Testimonials
                    </Link>
                </div>
                <div className="flex flex-col items-center mt-8 space-y-4 md:mt-0 md:items-start">
                    <h3 className="text-lg font-bold">Support</h3>
                    <Link href="#" className="text-gray-400">
                        Help center
                    </Link>
                    <Link href="#" className="text-gray-400">
                        Terms of service
                    </Link>
                    <Link href="#" className="text-gray-400">
                        Legal
                    </Link>
                    <Link href="#" className="text-gray-400">
                        Privacy policy
                    </Link>
                    <Link href="#" className="text-gray-400">
                        Status
                    </Link>
                </div>
                <div className="flex flex-col items-center mt-8 space-y-4 md:mt-0 md:items-start">
                    <h3 className="text-lg font-bold">Stay up to date</h3>
                    <div className="flex items-center space-x-2">
                        <input type="email" placeholder="Your email address" className="px-4 py-2 text-gray-800 rounded" />
                        <button className="px-4 py-2 text-white bg-green-500 rounded">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );

    return (
        <>
            {footerTemplate()}
        </>
    );
};

export default Footer;