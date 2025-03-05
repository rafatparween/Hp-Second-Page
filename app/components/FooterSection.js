import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';


const FooterSection = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm w-full">
      {/* Upper part with links */}
      <div className="max-w-[1450px] w-[90%] mx-auto py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        
        {/* First Column */}
        <div>
          <ul>
            <li className="mb-2 text-white font-semibold">About Us</li>
            {["Contact Printer", "Careers", "Investor relations", "Sustainable impact", 
              "Diversity, Equity and Inclusion", "Press center", "The Garage", 
              "Printer Store Newsletter", "Printer Printables Newsletter"].map((item, index) => (
              <li key={index} className="mb-2 hover:text-gray-400 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Second Column */}
        <div>
          <ul>
            <li className="mb-2 text-white font-semibold">Ways to buy</li>
            {["Shop online", "Call an Printer rep", "Find a reseller", 
              "Enterprise store", "Public sector purchasing"].map((item, index) => (
              <li key={index} className="mb-2 hover:text-gray-400 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Third Column */}
        <div>
          <ul>
            <li className="mb-2 text-white font-semibold">Support</li>
            {[
              { label: "About", path: "/about" },
              { label: "Privacy Policy", path: "/privacyPolicy" },
              { label: "Disclaimer", path: "/disclaimer" },
              { label: "Terms & Conditions", path: "/termsConditions" },
            ].map((link, index) => (
              <li key={index} className="mb-2">
                <Link legacyBehavior href={link.path}>
                  <a className="hover:text-gray-400 cursor-pointer">{link.label}</a>
                </Link>
              </li>
            ))}
            {["Support & troubleshooting", "Download drivers", "Register your product",
              "Authorized service providers", "Check repair status", "Fraud alert",
              "Security Center"].map((item, index) => (
              <li key={index} className="mb-2 hover:text-gray-400 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Fourth Column */}
        <div>
          <ul>
            <li className="mb-2 text-white font-semibold">Printer Partners</li>
            {["Printer Amplify Partner Program", "Printer Partner Portal", "Developers"].map((item, index) => (
              <li key={index} className="mb-2 hover:text-gray-400 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Fifth Column: Stay Connected */}
        <div>
          <ul>
            <li className="mb-2 text-white font-semibold">Stay connected</li>
            <div className="flex space-x-4">
              {[faLinkedin, faFacebook, faInstagram, faTwitter, faYoutube, faTiktok].map((icon, index) => (
                <a key={index} href="#" className="text-white hover:text-gray-400 text-2xl">
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </ul>
        </div>
      </div>

      {/* Lower part with copyright */}
      <div className="border-t border-gray-600 py-4 text-center max-w-[1280px] w-[90%] mx-auto">
        <p className="text-xs text-gray-400">
          © Copyright, All Rights Reserved by printersolutiononline
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
