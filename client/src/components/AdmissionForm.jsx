import React, { useState } from "react";
import axios from "axios";
import YourComponent from "./YourComponent";
import MyComponent from "./MyComponent";

const AdmissionForm = () => {
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
  const [isDifferentlyAbled, setIsDifferentlyAbled] = useState(false);
  const [isCollegeData, setIsCollegeData] = useState(false);
  // const [image, setImage] = useState(null);
  // const [image2, setImage2] = useState(null);


  const [selectedImages, setSelectedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;

    // Clear the previous selections
    setSelectedImages([]);
    setImagePreviews([]);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Check if the selected file is an image
      if (file.type.startsWith('image/')) {
        setSelectedImages((prevSelectedImages) => [...prevSelectedImages, file]);

        // Read the image and create a preview URL
        const reader = new FileReader();
        reader.onload = (e) => {
          setImagePreviews((prevImagePreviews) => [
            ...prevImagePreviews,
            e.target.result,
          ]);
        };
        reader.readAsDataURL(file);
      }
    }
  };



  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "differently-abled") {
      setIsDifferentlyAbled(value === "yes");
    }

    if (name === "wardOfCollege") {
      setIsCollegeData(value === "yes");
    }
  };

  const personalDetail = [
    {
      label: "Enter your Id",
      type: "number",
      placeholder: "Enter your Id",
      name: "id",
      readOnly: false,
    },
    {
      label: "Candidate's Name",
      type: "text",
      placeholder: "Candidate's Name",
      name: "candidateName",
      readOnly: false,
    },
    {
      label: "Father's Name",
      type: "text",
      placeholder: "Father's Name",
      name: "fatherName",
      readOnly: false,
    },
    {
      label: "Mother's Name",
      type: "text",
      placeholder: "Mother's Name",
      name: "motherName",
      readOnly: false,
    },
    {
      label: "Candidate's Mobile No.",
      type: "number",
      placeholder: "Candidate's Mobile No.",
      name: "mobileNo",
      readOnly: false,
    },
    {
      label: "WhatsApp No",
      type: "number",
      placeholder: "----------",
      name: "whatsappNo",
      readOnly: false,
    },
    {
      label: "Parent/Guardian’s Mobile No",
      type: "number",
      placeholder: "----------",
      name: "guardianNo",
      readOnly: false,
    },
    {
      label: "Email ID",
      type: "email",
      placeholder: "Email ID",
      name: "emailId",
      readOnly: false,
    },
    {
      label: "Aadhar Number",
      type: "number",
      placeholder: "---- ---- ----",
      name: "aadhar",
      readOnly: false,
    },
    {
      label: "Date of Birth",
      type: "date",
      placeholder: "",
      name: "dob",
      readOnly: false,
    },
  ];
  const courseDetail = [
    {
      label: "Course(*)",
      type: "text",
      placeholder: "I.A.",
      name: "ia",
      readOnly: true,
    },
    {
      label: "Class(*)",
      type: "text",
      placeholder: "11th",
      name: "class",
      readOnly: true,
    },
    {
      label: "Admission Year*",
      type: "text",
      placeholder: "2023",
      name: "admission-year",
      readOnly: true,
    },
    {
      label: "Compulsory Subject 1",
      type: "text",
      placeholder: "Hindi-(100Marks)",
      name: "compulsory-subject1",
      readOnly: true,
    },
    {
      label: "Elective Subject 1",
      type: "select", // Change the type to "select"
      options: [
        "Select Subject",
        "Economics",
        "Geography",
        "History",
        "Mathematics",
        "Philosophy",
        "Political Science",
        "Psychology",
      ], // Add options for the dropdown
      name: "elective-subject1",
      readOnly: false,
    },
    {
      label: "Elective Subject 2",
      type: "select", // Change the type to "select"
      options: [
        "Select Subject",
        "Economics",
        "Geography",
        "History",
        "Mathematics",
        "Philosophy",
        "Political Science",
        "Psychology",
      ], // Add options for the dropdown
      name: "elective-subject2",
      readOnly: false,
    },
    {
      label: "Elective Subject 3",
      type: "select", // Change the type to "select"
      options: [
        "Select Subject",
        "Economics",
        "Geography",
        "History",
        "Mathematics",
        "Philosophy",
        "Political Science",
        "Psychology",
      ], // Add options for the dropdown
      name: "elective-subject3",
      readOnly: false,
    },
    {
      label: "Extra Subject (If any)",
      type: "select", // Change the type to "select"
      options: [
        "Select Subject",
        "Economics",
        "Geography",
        "History",
        "Mathematics",
        "Philosophy",
        "Political Science",
        "Psychology",
        "Computer science",
        "Multimedia & Web Tech",
        "English",
        "Urdu",
        "Mathali",
        "Maghi",
        "Bhojpuri",
      ], // Add options for the dropdown
      name: "extra",
      readOnly: false,
    },
  ];
  const selectOptions = {
    bloodGroup: [
      "Select Blood Group",
      "O +ve",
      "O -ve",
      "A +ve",
      "A -ve",
      "B +ve",
      "B -ve",
      "AB +ve",
      "AB -ve",
    ],
    gender: ["Select Gender", "Male", "Female"],
    casteCategory: [
      "Select Caste Category",
      "Gen",
      "BC",
      "EBC",
      "SC",
      "ST",
      "EWS",
    ],
    differentlyAbled: ["Select differently abled", "No", "Yes"],
    wardOfCollege: ["Select", "No", "Yes"],
    nationality: ["Select Nationality", "INDIAN", "OTHER"],
  };

  const handleChange = (e) => {
    console.log(formData);
    const { name, value } = e.target;
    let newValue = value;

    if (name === "mobileNo" || name === "whatsappNo" || name === "guardianNo") {
      // Remove any non-numeric characters from the input
      newValue = newValue.replace(/\D/g, "");

      // Ensure the length is 10 digits
      if (newValue.length >= 11) {
        return; // Do not update state if more than 10 digits
      }
    } else if (name === "aadhar") {
      // Remove any non-numeric characters from the input
      newValue = newValue.replace(/\D/g, "");

      // Insert hyphens in the Aadhar number (e.g., 732008150317 => 7320-0815-0317)
      if (newValue.length >= 13) {
        return; // Do not update state if more than 12 digits
      }
      newValue = newValue.replace(/(\d{5})(\d{5})(\d{5})/, "$1-$2-$3");
    }

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/post", formData);
      alert("Data posted successfully");
    } catch (error) {
      console.error("Error posting data:", error);
      alert("Failed to post data");
    }
  };
  // ... Your existing code ...
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     const reader = new FileReader();

  //     reader.onload = (e) => {
  //       setImage(e.target.result);
  //     };

  //     reader.readAsDataURL(file);
  //   } else {
  //     setImage(null);
  //   }
  // };
  return (
    <div className="w-[100%] mx-auto  bg-richblack-25 p-4">
      <div className="flex items-center mt-4 justify-center flex-col">
        <h3 className="text-2xl font-semibold">Admission Form</h3>
      </div>
      <p className="md:mt-10 text-center text-xl">REFERENCE ID NUMBER:</p>

      <div className=" max-w-full md:max-w-[640px] lg:max-w-[1360px] mx-auto ">
        <form
          action=""
          onSubmit={handleSubmit}
          className="mt-5 md:flex flex-wrap justify-between border rounded-lg "
        >
          <div className="md:max-w-[48%] w-full px-6 py-7 ">
            <p className="font-semibold text-base mb-5">Personal Details:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {personalDetail.map((detail, index) => (
                <div className="flex flex-col" key={index}>
                  <label
                    htmlFor={detail.name}
                    className="font-normal text-base"
                  >
                    {detail.label}
                  </label>
                  <input
                    value={formData[detail.name]}
                    required
                    type={detail.type}
                    placeholder={detail.placeholder}
                    name={detail.name}
                    readOnly={detail.readOnly}
                    className={`px-3 py-1.5 border  ${
                      detail.readOnly ? "bg-[#e9ecef]" : ""
                    }`}
                    onChange={handleChange}
                  />
                </div>
              ))}
              {/* ... Other input fields ... */}
              <div className="flex flex-col">
                <label htmlFor="bloodGroup" className="font-medium text-base">
                  Blood Group:
                </label>
                <select
                  id="bloodGroup"
                  className="px-3 py-1.5 border"
                  required
                  // onChange={handleChange}
                  // value={formData.bloodGroup}
                  // Value={formData.bloodGroup}
                >
                  {selectOptions.bloodGroup.map((option, index) => (
                    <option
                      key={index}
                      value={option.toLowerCase()}
                      disabled={index === 0}
                      selected={index === 0}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="casteCategory"
                  className="font-medium text-base"
                >
                  Caste Category:
                </label>
                <select
                  id="casteCategory"
                  className="px-3 py-1.5 border"
                  required
                >
                  {selectOptions.casteCategory.map((option, index) => (
                    <option
                      key={index}
                      value={option}
                      disabled={index === 0}
                      selected={index === 0}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="differently-abled"
                  className="font-medium text-base"
                >
                  Are you differently abled?
                </label>
                <select
                  id="differently-abled"
                  className="px-3 py-1.5 border"
                  required
                  onChange={handleSelectChange}
                  name="differently-abled"
                >
                  {selectOptions.differentlyAbled.map((option, index) => (
                    <option
                      key={index}
                      value={option.toLowerCase()}
                      disabled={index === 0}
                      selected={index === 0}
                    >
                      {option}
                    </option>
                  ))}
                </select>

                {/* Conditional rendering of the new input */}
                {isDifferentlyAbled && (
                  <div className="flex flex-col">
                    <label htmlFor="newInput" className="font-medium text-base">
                      Please specify:
                    </label>
                    <input
                      type="text"
                      id="newInput"
                      className="px-3 py-1.5 border w-[350px]"
                      placeholder="Specify your condition"
                      // You can add additional attributes or handlers here as needed
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="wardOfCollege"
                  className="font-medium text-base"
                >
                  Are you a ward of S.N. Sinha College, Warisaliganj
                </label>
                <select
                  id="wardOfCollege"
                  className="px-3 py-1.5 border"
                  required
                  name="wardOfCollege"
                  onChange={handleSelectChange}
                >
                  {selectOptions.wardOfCollege.map((option, index) => (
                    <option
                      key={index}
                      value={option.toLowerCase()}
                      disabled={index === 0}
                      selected={index === 0}
                    >
                      {option}
                    </option>
                  ))}
                </select>
                {isCollegeData && (
                  <div className="flex flex-col">
                    <label htmlFor="newInput" className="font-medium text-base">
                      Name:
                    </label>
                    <input
                      type="text"
                      id="newInput"
                      className="px-3 py-1.5 border w-[350px]"
                      placeholder="Specify your condition"
                      // You can add additional attributes or handlers here as needed
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="nationality" className="font-medium text-base">
                  Nationality
                </label>
                <select
                  id="nationality"
                  className="px-3 py-1.5 border"
                  required
                >
                  {selectOptions.nationality.map((option, index) => (
                    <option
                      key={index}
                      value={option}
                      disabled={index === 0}
                      selected={index === 0}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div class=" md:max-w-[48%] w-full px-6 py-7">
            <p class="font-semibold text-base mb-5">Present Address</p>
            <div class="flex flex-wrap gap-5 w-[100%]">
              <div class="flex flex-col w-full ">
                <label for="present-address" class="text-base font-medium">
                  Address
                </label>
                <textarea
                  name="present-address"
                  id="present-address"
                  placeholder="Enter present Address"
                  class="px-3 py-1.5 border w-full"
                  rows="3"
                ></textarea>
              </div>
              <div class=" flex flex-wrap md:flex-nowrap gap-3 w-[100%]">
                <div class="flex flex-col w-full md:w-[32%]">
                  <label for="district" class="text-base font-medium">
                    District
                  </label>
                  <input
                    type="text"
                    placeholder="District"
                    name="district"
                    id="district"
                    class="px-1 py-1.5 border w-full"
                  />
                </div>
                <div class="flex flex-col w-full md:w-[32%]">
                  <label for="state" class="text-base font-medium">
                    State
                  </label>
                  <input
                    type="text"
                    placeholder="State"
                    name="state"
                    id="state"
                    class="px-1 py-1.5 border w-full"
                  />
                </div>
                <div class="flex flex-col w-full md:w-[32%]">
                  <label for="pin-code" class="text-base font-medium">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    placeholder="PIN Code"
                    name="pin-code"
                    id="pin-code"
                    class="px-1 py-1.5 border w-full"
                  />
                </div>
              </div>
            </div>

            <p class="font-semibold text-base mb-2 mt-3">Permanent Address</p>
            <div class="mb-2 ">
              <input type="checkbox" />
              <label for="same-address">Same as Present Address</label>
            </div>
            <div class="flex flex-wrap gap-5 w-[100%]">
              <div class="flex flex-col w-full">
                <label for="permanent-address" class="text-base font-medium">
                  Address
                </label>
                <textarea
                  name="permanent-address"
                  id="permanent-address"
                  placeholder="Enter permanent Address"
                  class="px-3 py-1.5 border w-full"
                  rows="3"
                ></textarea>
              </div>
              <div class="flex flex-wrap md:flex-nowrap gap-3 w-[100%]">
                <div class="flex flex-col w-full md:w-[32%]">
                  <label for="permanent-district" class="text-base font-medium">
                    District
                  </label>
                  <input
                    type="text"
                    placeholder="District"
                    name="permanent-district"
                    id="permanent-district"
                    class="px-1 py-1.5 border w-full"
                  />
                </div>
                <div class="flex flex-col w-full md:w-[32%]">
                  <label for="permanent-state" class="text-base font-medium">
                    State
                  </label>
                  <input
                    type="text"
                    placeholder="State"
                    name="permanent-state"
                    id="permanent-state"
                    class="px-1 py-1.5 border w-full"
                  />
                </div>
                <div class="flex flex-col w-full md:w-[32%]">
                  <label for="permanent-pin-code" class="text-base font-medium">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    placeholder="PIN Code"
                    name="permanent-pin-code"
                    id="permanent-pin-code"
                    class="px-1 py-1.5 border w-full"
                  />
                </div>
              </div>
            </div>

            <p className="font-semibold text-base mb-2 mt-3">Session</p>
            <div className="flex flex-wrap md:flex-nowrap gap-3 w-[100%]">
              <div className="flex flex-col w-full md:w-[48%]">
                <label for="session-ia" className="text-base font-medium">
                  Session I.A
                </label>
                <input
                  type="text"
                  placeholder="2024-26"
                  name="session-ia"
                  id="session-ia"
                  className="px-1 py-1.5 border w-full rounded-lg"
                />
              </div>
              <div className="flex flex-col w-full md:w-[48%]">
                <label for="session-11th" className="text-base font-medium">
                  Session 11th
                </label>
                <input
                  type="text"
                  placeholder="2024-25"
                  name="session-11th"
                  id="session-11th"
                  class="px-1 py-1.5 border w-full rounded-lg"
                />
              </div>
            </div>

            <p className="font-semibold text-base mb-2 mt-3">
              Upload Photo & Signature
            </p>
            {/* <div className="flex flex-wrap md:flex-nowrap gap-3 w-[100%]">
              <div className="flex flex-col w-full md:w-[48%]">
                <label for="upload-photo" className="text-base font-medium">
                  Upload Photo
                </label>
                <p className="text-[#FF004A]">
                  (Only JPG/PNG | Max Size 200KB)
                </p>

                {imagePreviews && (
                  <div>
                    <h2>Image Preview</h2>
                    <img
                      src={imagePreviews[0]}
                      alt="Preview"
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                  </div>
                )}
                <input
                  type="file"
                  accept=".jpg, .png"
                  // placeholder="2024-26"
                  name="upload-photo"
                  id="upload-photo"
                  className="px-1 py-1.5 border w-full rounded-lg"
                  onChange={handleImageChange}
                />
                
              </div>
              <div className="flex flex-col w-full md:w-[48%]">
                <label for="upload-sign" className="text-base font-medium">
                  Upload Sign
                </label>
                <p className="text-[#FF004A]">
                  (Only JPG/PNG | Max Size 200KB)
                </p>

                {imagePreviews && (
                  <div>
                    <h2>Image Preview</h2>
                    <img
                      src={imagePreviews[1]}
                      alt="Preview"
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                  </div>
                )}
                <input
                  type="file"
                  placeholder="2024-25"
                  name="upload-sign"
                  id="upload-sign"
                  className="px-1 py-1.5 border w-full rounded-lg"
                  onChange={handleImageChange}
                />
              </div>
            </div> */}
            <YourComponent/>
          </div>
          <p className="text-richblack-25 bg-richblack-800 font-bold text-xl w-[100%] p-1 text-center rounded-sm">
            Course in which you want Admission
          </p>
          <div className="mt-5 px-6 py-7">
            <div className="flex flex-wrap  gap-3 w-[100%]">
              {courseDetail.map((course, index) => {
                return (
                  <div className="flex flex-col" key={index}>
                    <label
                      htmlFor={course.name}
                      className="text-base font-medium"
                    >
                      {course.label}
                    </label>
                    {course.type === "select" ? (
                      <select
                        name={course.name}
                        id={course.name}
                        className="px-1 py-2.5 border w-full rounded-lg"
                        readOnly={course.readOnly}
                      >
                        {course.options.map((option, optionIndex) => (
                          <option
                            key={optionIndex}
                            value={option}
                            selected={option === "Select Subject"}
                            disabled={option === "Select Subject"}
                            className="px-1 py-1.5 border w-full rounded-lg"
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={course.type}
                        placeholder={course.placeholder}
                        name={course.name}
                        id={course.name}
                        className="px-1 py-1.5 border w-full rounded-lg"
                        readOnly={course.readOnly}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-5 border-t border-richblack-700">
            <div className="px-6 py-7">
              <p className="underline font-bold text-richblack-800">
                Previous Passing Course Details
              </p>
              <div className="flex flex-wrap  gap-3 w-[100%]">
                <div className="flex flex-col">
                  <label for="courses" className="text-base font-medium">
                    Examinations Passed *
                  </label>
                  <input
                    type="text"
                    placeholder="10th"
                    readOnly
                    name="courses"
                    id="courses"
                    class="px-1 py-1.5 border w-full rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <label for="ia" className="text-base font-medium">
                    School Name with Address *
                  </label>
                  <input
                    type="text"
                    // placeholder="I.A"
                    name="ia"
                    id="ia"
                    className="px-1 py-1.5 border w-full rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <label for="session-11th" className="text-base font-medium">
                    Board(*) :
                  </label>
                  <select
                    name=""
                    id=""
                    className="px-1 py-2.5 border w-full rounded-lg"
                    readOnly=""
                  >
                    <option
                      value=""
                      selected
                      disabled
                      className="px-1 py-1.5 border w-full rounded-lg"
                    >
                      Select Board*
                    </option>
                    <option
                      value="bseb"
                      selected=""
                      disabled=""
                      className="px-1 py-1.5 border w-full rounded-lg"
                    >
                      BSEB
                    </option>
                    <option
                      value="others"
                      className="px-1 py-1.5 border w-full rounded-lg"
                    >
                      OTHERS
                    </option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label for="session-11th" className="text-base font-medium">
                    Name of Board *
                  </label>
                  <input
                    type="text"
                    // placeholder="2024-25"
                    name="session-11th"
                    id="session-11th"
                    class="px-1 py-1.5 border w-full rounded-lg"
                  />
                </div>

                <div className="flex flex-col">
                  <label for="session-11th" className="text-base font-medium">
                    Passing Year *
                  </label>
                  <input
                    type="text"
                    placeholder="2024-25"
                    name="session-11th"
                    id="session-11th"
                    class="px-1 py-1.5 border w-full rounded-lg"
                  />
                </div>

                <div className="flex flex-col">
                  <label for="session-11th" className="text-base font-medium">
                    Marks Obtained *
                  </label>
                  <input
                    type="text"
                    placeholder="2024-25"
                    name="session-11th"
                    id="session-11th"
                    class="px-1 py-1.5 border w-full rounded-lg"
                  />
                </div>

                <div className="flex flex-col">
                  <label for="session-11th" className="text-base font-medium">
                    Full Marks *
                  </label>
                  <input
                    type="text"
                    placeholder="2024-25"
                    name="session-11th"
                    id="session-11th"
                    class="px-1 py-1.5 border w-full rounded-lg"
                  />
                </div>

                <div className="flex flex-col">
                  <label for="session-11th" className="text-base font-medium">
                    Division *
                  </label>
                  <input
                    type="text"
                    placeholder="2024-25"
                    name="session-11th"
                    id="session-11th"
                    class="px-1 py-1.5 border w-full rounded-lg"
                  />
                </div>

                <div className="flex flex-col">
                  <label for="session-11th" className="text-base font-medium">
                    Percentage *
                  </label>
                  <input
                    type="text"
                    placeholder="2024-25"
                    name="session-11th"
                    id="session-11th"
                    class="px-1 py-1.5 border w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 border-t border-richblack-700">
            <div className="px-6 py-7">
              <p className="underline font-bold text-richblack-800 mb-4">
                Other Previous Passing Course Details
              </p>
              <div className="flex flex-wrap  gap-3 w-[100%]">
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Other Exam Passed (If Any)"
                    readOnly
                    name="courses"
                    id="courses"
                    class="px-1 py-1.5 border w-full rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    // placeholder="I.A"
                    name="ia"
                    id="ia"
                    className="px-1 py-1.5 border w-full rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    // placeholder="2024-25"
                    name="session-11th"
                    id="session-11th"
                    class="px-1 py-1.5 border w-full rounded-lg"
                  />
                </div>

                <div className="flex flex-col">
                  <input
                    type="text"
                    // placeholder="2024-25"
                    name="session-11th"
                    id="session-11th"
                    class="px-1 py-1.5 border w-full rounded-lg"
                  />
                </div>

                <div className="flex flex-col">
                  <input
                    type="text"
                    // placeholder="2024-25"
                    name="session-11th"
                    id="session-11th"
                    class="px-1 py-1.5 border w-full rounded-lg"
                  />
                </div>

                <div className="flex flex-col">
                  <input
                    type="text"
                    // placeholder="2024-25"
                    name="session-11th"
                    id="session-11th"
                    class="px-1 py-1.5 border w-full rounded-lg"
                  />
                </div>

                <div className="flex flex-col">
                  <input
                    type="text"
                    // placeholder="2024-25"
                    name="session-11th"
                    id="session-11th"
                    class="px-1 py-1.5 border w-full rounded-lg"
                  />
                </div>

                <div className="flex flex-col">
                  <input
                    type="text"
                    // placeholder="2024-25"
                    name="session-11th"
                    id="session-11th"
                    class="px-1 py-1.5 border w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="text-richblack-25 bg-richblack-800 font-bold text-xl w-[100%] p-1 text-center rounded-sm">
            Bank Account Details of the Candidate :
          </p>
          <div className="mt-5 px-6 py-7 w-[100%]">
            <div className="flex flex-wrap justify-between gap-3 w-[100%]">
              <div className="flex flex-col ">
                <label for="courses" className="text-base font-medium">
                  Bank Name :
                </label>
                <input
                  type="text"
                  // placeholder="10th"
                  // readOnly
                  name="courses"
                  id="courses"
                  class="px-1 py-1.5 border w-full rounded-lg"
                />
              </div>
              <div className="flex flex-col  ">
                <label for="ia" className="text-base font-medium">
                  IFSC *:
                </label>
                <input
                  type="text"
                  // placeholder="I.A"
                  name="ia"
                  id="ia"
                  className="px-1 py-1.5 border w-full rounded-lg"
                />
              </div>

              <div className="flex flex-col  ">
                <label for="session-11th" className="text-base font-medium">
                  Bank Account Number * :
                </label>
                <input
                  type="text"
                  // placeholder="2024-25"
                  name="session-11th"
                  id="session-11th"
                  class="px-1 py-1.5 border w-full rounded-lg"
                />
              </div>
              <div className="flex flex-col  ">
                <label for="session-11th" className="text-base font-medium">
                  Name as in Bank Account * :
                </label>
                <input
                  type="text"
                  // placeholder="2024-25"
                  name="session-11th"
                  id="session-11th"
                  class="px-1 py-1.5 border w-full rounded-lg"
                />
              </div>
            </div>
          </div>

          <p className="text-richblack-25 bg-richblack-800 font-bold text-xl w-[100%] p-1 text-center rounded-sm">
          Upload Documents
          </p>


          <div className="mt-5 px-6 py-7 w-[100%]">
          {/* <div className="flex flex-wrap justify-between gap-3 w-[100%]">
              <div className="flex flex-col ">
                <label for="courses" className="text-base font-medium">
                  Aadhar Card. :
                </label>
                <p className="text-[#FF004A]">
                  (Only JPG/PNG | Max Size 200KB)
                </p>
                {imagePreviews && (
                  <div>
                    <h2>Image Preview</h2>
                    <img
                      src={imagePreviews[0]}
                      alt="Preview"
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                  </div>
                )}
                <input
                  type="file"
                  // placeholder="10th"
                  // readOnly
                  name="aadhar-card"
                  id="aadhar-card"
                  class="px-1 py-1.5 border w-full rounded-lg"
                />
              </div>
              <div className="flex flex-col ">
                <label for="courses" className="text-base font-medium">
                  Aadhar Card. :
                </label>
                <p className="text-[#FF004A]">
                  (Only JPG/PNG | Max Size 200KB)
                </p>
                {imagePreviews && (
                  <div>
                    <h2>Image Preview</h2>
                    <img
                      src={imagePreviews[0]}
                      alt="Preview"
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                  </div>
                )}
                <input
                  type="file"
                  // placeholder="10th"
                  // readOnly
                  name="aadhar-card"
                  id="aadhar-card"
                  class="px-1 py-1.5 border w-full rounded-lg"
                />
              </div>

              <div className="flex flex-col ">
                <label for="courses" className="text-base font-medium">
                  Aadhar Card. :
                </label>
                <p className="text-[#FF004A]">
                  (Only JPG/PNG | Max Size 200KB)
                </p>
                {imagePreviews && (
                  <div>
                    <h2>Image Preview</h2>
                    <img
                      src={imagePreviews[0]}
                      alt="Preview"
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                  </div>
                )}
                <input
                  type="file"
                  // placeholder="10th"
                  // readOnly
                  name="aadhar-card"
                  id="aadhar-card"
                  class="px-1 py-1.5 border w-full rounded-lg"
                  onChange={handleImageChange}
                />
              </div>
              <div className="flex flex-col ">
                <label for="courses" className="text-base font-medium">
                  Aadhar Card. :
                </label>
                <p className="text-[#FF004A]">
                  (Only JPG/PNG | Max Size 200KB)
                </p>
                {imagePreviews && (
                  <div>
                    <h2>Image Preview</h2>
                    <img
                      src={imagePreviews[0]}
                      alt="Preview"
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                  </div>
                )}
                <input
                  type="file"
                  // placeholder="10th"
                  // readOnly
                  name="aadhar-card"
                  id="aadhar-card"
                  class="px-1 py-1.5 border w-full rounded-lg"
                  onChange={handleImageChange}
                />
              </div>


              <div className="flex flex-col ">
                <label for="courses" className="text-base font-medium">
                  Aadhar Card. :
                </label>
                <p className="text-[#FF004A]">
                  (Only JPG/PNG | Max Size 200KB)
                </p>
                {imagePreviews && (
                  <div>
                    <h2>Image Preview</h2>
                    <img
                      src={imagePreviews[0]}
                      alt="Preview"
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                  </div>
                )}
                <input
                  type="file"
                  // placeholder="10th"
                  // readOnly
                  name="aadhar-card"
                  id="aadhar-card"
                  class="px-1 py-1.5 border w-full rounded-lg"
                  onChange={handleImageChange}
                />
              </div>



              <div className="flex flex-col ">
                <label for="courses" className="text-base font-medium">
                  Aadhar Card. :
                </label>
                <p className="text-[#FF004A]">
                  (Only JPG/PNG | Max Size 200KB)
                </p>
                {imagePreviews && (
                  <div>
                    <h2>Image Preview</h2>
                    <img
                      src={imagePreviews[0]}
                      alt="Preview"
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                  </div>
                )}
                <input
                  type="file"
                  // placeholder="10th"
                  // readOnly
                  name="aadhar-card"
                  id="aadhar-card"
                  class="px-1 py-1.5 border w-full rounded-lg"
                  onChange={handleImageChange}
                />
              </div>



              <div className="flex flex-col ">
                <label for="courses" className="text-base font-medium">
                  Aadhar Card. :
                </label>
                <p className="text-[#FF004A]">
                  (Only JPG/PNG | Max Size 200KB)
                </p>
                {imagePreviews && (
                  <div>
                    <h2>Image Preview</h2>
                    <img
                      src={imagePreviews[0]}
                      alt="Preview"
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                  </div>
                )}
                <input
                  type="file"
                  // placeholder="10th"
                  // readOnly
                  name="aadhar-card"
                  id="aadhar-card"
                  class="px-1 py-1.5 border w-full rounded-lg"
                  onChange={handleImageChange}
                />
              </div>

              <div className="flex flex-col ">
                <label for="courses" className="text-base font-medium">
                  Aadhar Card. :
                </label>
                <p className="text-[#FF004A]">
                  (Only JPG/PNG | Max Size 200KB)
                </p>
                {imagePreviews && (
                  <div>
                    <h2>Image Preview</h2>
                    <img
                      src={imagePreviews[0]}
                      alt="Preview"
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                  </div>
                )}
                <input
                  type="file"
                  // placeholder="10th"
                  // readOnly
                  name="aadhar-card"
                  id="aadhar-card"
                  class="px-1 py-1.5 border w-full rounded-lg"
                />
              </div>
            </div> */}

            <MyComponent/>
          </div>

        </form>
        <p className="mt-4 text-lg font-extralight">Note :- Fields marked with * are mandatory</p>
        <div className=" flex items-center gap-2 text-xl ">
          <input type="checkbox"  className="w-4 h-4"/>
          <label htmlFor="">
          I hereby declare that all the information given above is true and correct to the best of my knowledge.
          </label>
        </div>
        <button className="p-5  transition ease-in-out delay-150 bg-richblack-800 text-richblack-25 rounded-xl font-bold hover:bg-richblack-900 hover:text-richblack-25 duration-300 ">Apply Now </button>
      </div>
      
    </div>
  );
};

export default AdmissionForm;
