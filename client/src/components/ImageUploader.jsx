import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ImageUploader = ({ label, acceptedTypes, maxSize, onImageSelected }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (acceptedTypes.includes(file.type) && file.size <= maxSize) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImagePreview(e.target.result);
        };
        reader.readAsDataURL(file);
        onImageSelected(file);
      } else {
        // alert(`Please select a valid image (Accepted types: ${acceptedTypes.join(', ')}, Max size: ${maxSize / 1024} KB)`);
        toast(`Please select a valid image (Accepted types: ${acceptedTypes.join(', ')}, Max size: ${maxSize / 1024} KB)`);
      }
    }
  };

  return (
    <div className="flex flex-col">
        <ToastContainer/>
      <label className="text-base font-medium">{label}:</label>
      <p className="text-[#FF004A]">(Only {acceptedTypes.join('/')} | Max Size {maxSize / 1024}KB)</p>
      {imagePreview && (
        <div>
          <h2>Image Preview</h2>
          <img
            src={imagePreview}
            alt="Preview"
            style={{ maxWidth: '100%', maxHeight: '200px' }}
          />
        </div>
      )}
      <input
        type="file"
        name={label.toLowerCase()}
        id={label.toLowerCase()}
        className="px-1 py-1.5 border w-full rounded-lg"
        accept={acceptedTypes.join(',')}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageUploader;
