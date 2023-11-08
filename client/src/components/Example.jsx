import React, { useState } from "react";
import axios from "axios";
import RightSideForm from "./RightSideForm";

const TextInput = ({ label, type, placeholder, name, value, readOnly, onChange }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="font-normal text-base">
      {label}
    </label>
    <input
      value={value}
      required
      type={type}
      placeholder={placeholder}
      name={name}
      readOnly={readOnly}
      className={`px-3 py-1.5 border ${readOnly ? "bg-[#e9ecef]" : ""}`}
      onChange={onChange}
    />
  </div>
);

const SelectInput = ({ label, id, options, value, onChange }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="font-medium text-base">
      {label}:
    </label>
    <select id={id} className="px-3 py-1.5 border" required onChange={onChange} value={value}>
      {options.map((option, index) => (
        <option key={index} value={option} disabled={index === 0}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const ConditionalInput = ({ label, showInput, inputType, placeholder, onChange }) => (
  showInput && (
    <div className="flex flex-col">
      <label htmlFor="newInput" className="font-medium text-base">
        {label}:
      </label>
      <input
        type={inputType}
        id="newInput"
        className="px-3 py-1.5 border w-[450px]"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
);

const Example = () => {
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

  const handleSelectChange = (e) => {
    setIsDifferentlyAbled(e.target.value === "yes");
    setIsCollegeData(e.target.value === "yes");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Your validation and formatting logic

    setFormData({ ...formData, [name]: value });
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
    }
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
    // ... Other select options

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
    wardOfCollege: ["Select", "Yes", "No"],
    nationality: ["Select Nationality", "INDIAN", "OTHER"],
  };

  return (
    <div className="w-[100%] mx-auto bg-richblack-25 p-4">
      <div className="flex items-center mt-4 justify-center flex-col">
        <h3 className="text-2xl font-semibold">Admission Form</h3>
      </div>
      <p className="md:mt-10 text-center text-xl">REFERENCE ID NUMBER:</p>

      <div className="border max-w-full md:max-w-[640px] lg:max-w-[1360px] mx-auto rounded-lg">
        <form action="" onSubmit={handleSubmit} className="mt-5 md:flex flex-wrap justify-between">
          <div className="md:max-w-[48%] w-full px-6 py-7">
            <p className="font-semibold text-base mb-5">Personal Details:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {personalDetail.map((detail, index) => (
                <TextInput
                  key={index}
                  label={detail.label}
                  type={detail.type}
                  placeholder={detail.placeholder}
                  name={detail.name}
                  value={formData[detail.name]}
                  readOnly={detail.readOnly}
                  onChange={handleChange}
                />
              ))}
              {/* ... Other input fields ... */}
              <SelectInput
                label="Blood Group"
                id="bloodGroup"
                options={selectOptions.bloodGroup}
                value={formData.bloodGroup}
                onChange={handleChange}
              />
              <SelectInput
                label="Caste Category"
                id="casteCategory"
                options={selectOptions.casteCategory}
                value={formData.casteCategory}
                onChange={handleChange}
              />
              <SelectInput
                label="Are you differently abled?"
                id="differently-abled"
                options={selectOptions.differentlyAbled}
                value={formData.differentlyAbled}
                onChange={handleSelectChange}
              />
              <ConditionalInput
                label="Please specify"
                showInput={isDifferentlyAbled}
                inputType="text"
                placeholder="Specify your condition"
                onChange={handleChange}
              />
              <SelectInput
                label="Are you a ward of S.N. Sinha College, Warisaliganj"
                id="wardOfCollege"
                options={selectOptions.wardOfCollege}
                value={formData.wardOfCollege}
                onChange={handleSelectChange}
              />
              <ConditionalInput
                label="Name"
                showInput={isCollegeData}
                inputType="text"
                placeholder="Specify your condition"
                onChange={handleChange}
              />
              <SelectInput
                label="Nationality"
                id="nationality"
                options={selectOptions.nationality}
                value={formData.nationality}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* ... Other form sections ... */}
          <RightSideForm/>
        </form>
      </div>
    </div>
  );
};

export default Example;
