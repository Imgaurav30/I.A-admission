import React, { useState } from "react";
// import AdmissionForm from "../components/AdmissionForm";
import Example from "../components/Example";
import AdmissionForm from "../components/AdmissionForm";
import NewComponent from "../components/NewComponent";
// 

const Form = () => {
  const [formData, setFormData] = useState({
    id: "",
    candidateName: "",
    fatherName: "",
    motherName: "",
    mobileNo: "",
    whatsappNo: "",
    guardianNo: "",
    emailId: "",
    aadhar: "",
    dob: "",
    bloodGroup: "",
  });
  return (
    <div className="bg-richblack-25">
      {/* <main className=" bg-my-custom-background-form bg-cover bg-center h-[60vh]">
        <div className="flex flex-col items-center justify-center h-1/2 sm:h-1/3 lg:h-1/4 xl:h-1/5 md:mt-10">
          <h2 className=" text-4xl text-richblack-25 py-3 px-5 text-center font-bold">
          Admission Form
          </h2>
        </div>
      </main> */}

<main className="relative bg-my-custom-background-form bg-cover bg-center h-[60vh]">
  <div className="flex flex-col items-center justify-center h-1/2 sm:h-1/3 lg:h-1/4 xl:h-1/5 ">
    <h2 className="text-4xl text-richblack-25 py-3 px-5 text-center font-bold relative z-10 md:mt-60">
      Admission Form
    </h2>
  </div>
</main>

      <AdmissionForm />
    </div>
  );
};

export default Form;
