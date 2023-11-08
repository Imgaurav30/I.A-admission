import React, { useState } from 'react';

const RightSideForm = () => {
  const [formData, setFormData] = useState({
    presentAddress: {
      address: '',
      district: '',
      state: '',
      pinCode: '',
    },
    permanentAddress: {
      sameAsPresent: false,
      address: '',
      district: '',
      state: '',
      pinCode: '',
    },
    session: {
      sessionIA: '',
      session11th: '',
    },
    upload: {
      uploadPhoto: null,
      uploadSign: null,
    },
  });

  const handleInputChange = (section, field, value) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value,
      },
    });
  };

  return (
    <div className="md:max-w-[48%] w-full px-6 py-7">
      {Object.keys(formData).map((section) => (
        <div key={section}>
          <p className="font-semibold text-base mb-5">
            {section === 'presentAddress' ? 'Present Address' : null}
            {section === 'permanentAddress' ? 'Permanent Address' : null}
            {section === 'session' ? 'Session' : null}
            {section === 'upload' ? 'Upload Photo & Signature' : null}
          </p>
          <div className="flex flex-wrap gap-5 w-[100%]">
            {Object.keys(formData[section]).map((field) => (
              <div key={field} className="flex flex-col w-full">
                {field === 'sameAsPresent' ? (
                  <div className="mb-2">
                    <input
                      type="checkbox"
                      checked={formData[section][field]}
                      onChange={(e) =>
                        handleInputChange(section, field, e.target.checked)
                      }
                    />
                    <label htmlFor="same-address">Same as Present Address</label>
                  </div>
                ) : (
                  <>
                    <label className="text-base font-medium" htmlFor={field}>
                      {field === 'address' ? 'Address' : field}
                    </label>
                    {field === 'uploadPhoto' || field === 'uploadSign' ? (
                      <p className="text-[#FF004A]">(Only JPG/PNG | Max Size 200KB)</p>
                    ) : null}
                    {field === 'uploadPhoto' || field === 'uploadSign' ? (
                      <input
                        type="file"
                        name={field}
                        id={field}
                        className="px-1 py-1.5 border w-full rounded-lg"
                        onChange={(e) =>
                          handleInputChange(section, field, e.target.files[0])
                        }
                      />
                    ) : (
                      <textarea
                        name={field}
                        id={field}
                        placeholder={`Enter ${field === 'address' ? 'present ' : ''}${field}`}
                        className="px-3 py-1.5 border w-full"
                        rows={3}
                        value={formData[section][field]}
                        onChange={(e) => handleInputChange(section, field, e.target.value)}
                      />
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightSideForm;
