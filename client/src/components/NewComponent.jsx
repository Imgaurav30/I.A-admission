import React, { useState } from 'react';

const FormField = ({
  label,
  type,
  name,
  placeholder,
  readOnly,
  options,
  handleChange,
  selectValue,
}) => {
  if (type === 'select') {
    return (
      <div className="flex flex-col">
        <label htmlFor={name} className="text-base font-medium">
          {label}
        </label>
        <select
          name={name}
          id={name}
          className="px-1 py-2.5 border w-full rounded-lg"
          readOnly={readOnly}
          value={selectValue}
          onChange={(e) => handleChange(name, e.target.value)}
        >
          {options.map((option, optionIndex) => (
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
      </div>
    );
  } else if (type === 'file') {
    return (
      <div className="flex flex-col">
        <label htmlFor={name} className="text-base font-medium">
          {label}
        </label>
        <p className="text-[#FF004A]">(Only JPG/PNG | Max Size 200KB)</p>
        <input
          type="file"
          name={name}
          id={name}
          className="px-1 py-1.5 border w-full rounded-lg"
          accept=".jpg, .png"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file && file.size <= 200000 && (file.type === "image/jpeg" || file.type === "image/png")) {
              // Handle valid file
            } else {
              // Handle invalid file
            }
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <label htmlFor={name} className="text-base font-medium">
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          id={name}
          className="px-1 py-1.5 border w-full rounded-lg"
          readOnly={readOnly}
          onChange={(e) => handleChange(name, e.target.value)}
        />
      </div>
    );
  }
};

const PersonalDetails = ({ formData, handleChange, selectValue }) => {
    // const [formData,setFormData] = useState()
  // Define the personal detail fields and their options
  const personalDetailFields = [

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
    // Define your personal details here
    // Example: { label: "First Name", type: "text", name: "firstName", placeholder: "Enter your first name", readOnly: false },
  ];

  return (
    <div className="md:max-w-[48%] w-full px-6 py-7">
      <p className="font-semibold text-base mb-5">Personal Details:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {personalDetailFields.map((field, index) => (
          <FormField
            key={index}
            label={field.label}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            readOnly={field.readOnly}
            handleChange={handleChange}
            selectValue={selectValue}
            formData={formData}
          />
        ))}
      </div>
    </div>
  );
};

const CourseDetails = ({ formData, handleChange, selectValue }) => {
    // const [formData,setFormData] = useState()
  // Define the personal detail fields and their options
  const CourseDetailsFields = [
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

  return (
    <div className="md:max-w-[48%] w-full px-6 py-7">
      <p className="font-semibold text-base mb-5">Personal Details:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {CourseDetailsFields.map((field, index) => (
          <FormField
            key={index}
            label={field.label}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            readOnly={field.readOnly}
            handleChange={handleChange}
            selectValue={selectValue}
            formData={formData}
          />
        ))}
      </div>
    </div>
  );
};

// Define other components for address, course details, etc., following a similar structure

const NewComponent = () => {
  const [formData, setFormData] = useState();
  const [selectValue, setSelectValue] = useState({});

  const handleChange = (name, value) => {
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

  return (
    <div className="w-[100%] mx-auto bg-richblack-25 p-4">
      <div className="flex items-center mt-4 justify-center flex-col">
        <h3 className="text-2xl font-semibold">Admission Form</h3>
      </div>
      <p className="md:mt-10 text-center text-xl">REFERENCE ID NUMBER:</p>

      <div className="border max-w-full md:max-w-[640px] lg:max-w-[1360px] mx-auto rounded-lg">
        <form action="" onSubmit={handleSubmit} className="mt-5 md:flex flex-wrap justify-between">
          <PersonalDetails formData={formData} handleChange={handleChange} selectValue={selectValue} />
          <CourseDetails formData={formData} handleChange={handleChange} selectValue={selectValue}/>
          {/* Include other components for address, course details, etc. */}
        </form>
      </div>
    </div>
  );
};

export default NewComponent;
