import React, { useState } from 'react';

const ImageInputWithPreview = ({ imageType, handleImageChange, imagePreviews }) => {
  const imageIndex = imageType === 'photo' ? 0 : 1; // You can use 0 for 'photo' and 1 for 'signature'

  return (
    <div className="flex flex-col">
      <label htmlFor={imageType} className="text-base font-medium">
        {imageType === 'photo' ? 'Photo' : 'Signature'}:
      </label>
      <p className="text-[#FF004A]">(Only JPG/PNG | Max Size 200KB)</p>
      {imagePreviews[imageIndex] && (
        <div>
          <h2>Image Preview</h2>
          <img
            src={imagePreviews[imageIndex]}
            alt="Preview"
            style={{ maxWidth: '100%', maxHeight: '200px' }}
          />
        </div>
      )}
      <input
        type="file"
        name={imageType}
        id={imageType}
        className="px-1 py-1.5 border w-full rounded-lg"
        onChange={handleImageChange(imageType)}
      />
    </div>
  );
};

const YourComponent = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([null, null]);

  const handleImageChange = (imageType) => (e) => {
    const files = e.target.files;
    const imageIndex = imageType === 'photo' ? 0 : 1;

    // Clear the previous selections for the specific image type
    setSelectedImages((prevSelectedImages) => [
      ...prevSelectedImages.slice(0, imageIndex),
      ...Array(files.length).fill(null), // Clear entries for this image type
      ...prevSelectedImages.slice(imageIndex + 1),
    ]);
    setImagePreviews((prevImagePreviews) => [
      ...prevImagePreviews.slice(0, imageIndex),
      null, // Clear the preview for this image type
      ...prevImagePreviews.slice(imageIndex + 1),
    ]);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Check if the selected file is an image
      if (file.type.startsWith('image/')) {
        setSelectedImages((prevSelectedImages) => [
          ...prevSelectedImages.slice(0, imageIndex),
          file,
          ...prevSelectedImages.slice(imageIndex + 1),
        ]);

        // Read the image and create a preview URL
        const reader = new FileReader();
        reader.onload = (e) => {
          setImagePreviews((prevImagePreviews) => [
            ...prevImagePreviews.slice(0, imageIndex),
            e.target.result,
            ...prevImagePreviews.slice(imageIndex + 1),
          ]);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <div className='flex flex-wrap md:flex-nowrap gap-3 w-[100%]'>
      <ImageInputWithPreview
        imageType="photo"
        handleImageChange={handleImageChange}
        imagePreviews={imagePreviews}
      />
      <ImageInputWithPreview
        imageType="signature"
        handleImageChange={handleImageChange}
        imagePreviews={imagePreviews}
      />
    </div>
  );
};

export default YourComponent;
