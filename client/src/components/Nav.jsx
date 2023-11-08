import React, { useState } from "react";
import { Link, matchPath } from "react-router-dom";
import { NavbarLinks } from "../data/navLink";
import { useLocation } from "react-router-dom";
import { BsFillCaretDownFill, BsPencil, BsSearch } from "react-icons/bs";
import { useState } from "react";

const subLinks = [
  {
    title: "B.A.",
    path: "/courses/ba",
  },
  {
    title: "B.sc",
    path: "/courses/bsc",
  },
  {
    title: "M.A.",
    path: "/courses/ma",
  },
  {
    title: "M.sc",
    path: "/courses/msc",
  },
  {
    title: "I.A.",
    path: "/courses/ia",
  },
  {
    title: "I.sc",
    path: "/courses/isc",
  },
  {
    title: "Other Course",
    path: "/courses/othercourse",
  },
];
const servicesSubLinks = [
  {
    title: "Journal",
    path: "/services/Journal",
  },
  {
    title: "Research",
    path: "/services/research",
  },
  {
    title: "Sponsored Projects",
    path: "/services/sponsoredProjects",
  },
  {
    title: "Consulting Services",
    path: "/services/consultingServices",
  },
  {
    title: "Outreach",
    path: "/services/outreach",
  },
  {
    title: "Privacy Policy",
    path: "/services/privacyPolicy",
  },
  // Add more services as needed
];
const admissionSubLinks = [
  {
    title: "Apply online",
    path: "/admission/apply",
  },
  {
    title: "Admission Form",
    path: "/admission/form",
  },
  {
    title: "Admission Procedure",
    path: "/admission/admissionProcedure",
  },
  {
    title: "Alumni",
    path: "/admission/alumni",
  },
  {
    title: "Fee Structure",
    path: "/admission/feeStructure",
  },
  {
    title: "Scholarship policy",
    path: "/admission/scholarship",
  },
  {
    title: "Gallery",
    path: "/admission/gallery",
  },
  {
    title: "Testimonials",
    path: "/admission/testimonials",
  },
  {
    title: "Faq",
    path: "/admission/faq",
  },
];

const Nav = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className="bg-richblack-800">
      <div className="flex items-center justify-between h-14 border-b border-b-richblack-700 p-4 lg:px-10">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </Link>

        <div className="hidden lg:flex">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Courses" ? (
                  <div className="group relative flex cursor-pointer items-center gap-1">
                  <p>{link.title}</p>
                  <BsFillCaretDownFill />

                  <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px] ">
                    <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                    {subLinks.length ? (
                      subLinks.map((sublink, index) => (
                        <Link
                          to={`${sublink.path}`}
                          key={index}
                          className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                        >
                          <p>{sublink.title}</p>
                        </Link>
                      ))
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
                  // ... (Your course dropdown code)
                ) : link.title === "Services" ? (

                  <div className="group relative flex cursor-pointer items-center gap-1">
                    <p>{link.title}</p>
                    <BsFillCaretDownFill />

                    <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                      {servicesSubLinks.length ? (
                        servicesSubLinks.map((sublink, index) => (
                          <Link
                            to={sublink.path}
                            key={index}
                            className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                          >
                            <p>{sublink.title}</p>
                          </Link>
                        ))
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                  // ... (Your services dropdown code)
                ) : link.title === "Admission" ? (
                  <div className="group relative flex cursor-pointer items-center gap-1">
                    <p>{link.title}</p>
                    <BsFillCaretDownFill />

                    <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                      {admissionSubLinks.length ? (
                        admissionSubLinks.map((sublink, index) => (
                          <Link
                            to={sublink.path}
                            key={index}
                            className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                          >
                            <p>{sublink.title}</p>
                          </Link>
                        ))
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                  // ... (Your admission dropdown code)
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-richblack-25 p-2 focus:outline-none focus:bg-richblack-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {
        mobileMenuOpen && (
          <div className="lg:hidden">
            <ul className="text-richblack-25 p-4">
              {
                NavbarLinks.map((link, index)=>(
                  <li key={index}>
                    <Link to={link.path}>
                      <p className={`${matchRoute(link.path)? "text-yellow-25":"text-richblack-25"}`}>
                        {link.title}
                      </p>

                    </Link>
                  </li>
                ))
              }
            </ul>

          </div>
        )
      }
    </div>
  );
};

export default Nav;
