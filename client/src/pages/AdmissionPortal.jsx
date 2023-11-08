import React from "react";
import { Link } from "react-router-dom";

const AdmissionPortal = () => {
  return (
    // <div className="mt-12">
    //   <div class="flex justify-center items-center">
    //     <span class="inline-block border-4 text-4xl border-red-700 p-4">
    //     REGISTRATION & ADMISSION PORTAL
    //     </span>
    //   </div>
    //   <div className="mt-9 text-center">
    //     <Link to={"/login"}>
    //     <button className="bg-[#007bff] text-white text-2xl rounded-md p-4">
    //       I.A Admission 2023-25
    //     </button>
    //     </Link>
    //   </div>
    // </div>

    // <div className="row">
    //   <div className="col-lg-12 bg-white py-5" style={{ background: 'url()' }}>
    //     <div className="pt-2 mb-3 d-flex align-items-center justify-content-center">
    //       <h5 className="shadow-lg p-3 bg-body rounded">REGISTRATION & ADMISSION PORTAL</h5>
    //     </div>
    //     <div className="align-items-center justify-content-center shadow-lg p-3 bg-body rounded" style={{ maxWidth: '680px', margin: 'auto' }}>
    //       <div className="flex flex-wrap">

    //         <div className="px-2 my-3">
    //           <a href="admission-login.html" className="btn btn-primary" role="button">I.A. Admission (Session:2023-2026)</a>
    //         </div>
    //         <div className="px-2 my-3">
    //           <a href="javascript:void(0)" className="btn btn-primary" role="button">B.Sc. Registration (Session:2023-2026)</a>
    //         </div>
    //         {/* Additional buttons can be added here */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="w-[100%] h-[60vh] bg-my-custom-background">
    //   <div className="flex gap-2 items-center justify-center mt-28 ">
    //     <h2 className="bg-richblack-25 text-black py-3 px-5 text-center rounded-xl font-bold">
    //         REGISTRATION & ADMISSION PORTAL
    //     </h2>
    //   </div>
    //   <div className="flex gap-2 items-center justify-center mt-10">
    //     <Link to={"/login"}>
    //     <button className="bg-[#0D6BF6] text-white py-3 px-5 text-center rounded-xl font-bold">
    //         I.A. Admission(Session:2023-2026)
    //     </button>
    //     </Link>
    //     <Link to={"#"}>
    //     <button className="bg-[#0D6BF6] text-white py-3 px-5 text-center rounded-xl font-bold">
    //     B.Sc Admission(Session:2023-2026)
    //     </button>
    //     </Link>

    //   </div>
    // </div>

    <div className="bg-my-custom-background bg-cover bg-center h-[60vh]">
  <div className="flex flex-col items-center justify-center h-1/2 sm:h-1/3 lg:h-1/4 xl:h-1/5 md:mt-10">
    <h2 className="bg-richblack-25 text-black py-3 px-5 text-center rounded-xl font-bold">
      REGISTRATION & ADMISSION PORTAL
    </h2>
  </div>
  <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:mt-10">
    <a href="/login" className="text-center">
      <button className="bg-[#0D6BF6] text-white py-3 px-5 text-center rounded-xl font-bold">
        I.A. Admission(Session:2023-2026)
      </button>
    </a>
    <a href="#" className="text-center">
      <button className="bg-[#0D6BF6] text-white py-3 px-5 text-center rounded-xl font-bold">
        B.Sc Admission(Session:2023-2026)
      </button>
    </a>
  </div>
</div>

  );
};

export default AdmissionPortal;
