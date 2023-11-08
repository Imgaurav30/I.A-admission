import React, { useState } from 'react';
import ImageUploader from './ImageUploader';

const MyComponent = () => {
  const [aadharCard, setAadharCard] = useState(null);
  const [applicationForm, setApplicationForm] = useState(null);
  const [BSEBIntimationLatter , setBSEBIntimationLatter] = useState(null);
  const [markSheet10th, setMarkSheet10th] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [SLCCertificate, setSLCCertificate] = useState(null);
  const [characterCertificate, setCharacterCertificate] = useState(null);
  const [other, setOther] = useState(null);

  return (
    <div className="flex flex-wrap justify-between gap-3 w-[100%]">
      <ImageUploader
        label="Aadhar Card"
        acceptedTypes={['image/jpeg', 'image/png']}
        maxSize={200 * 1024}
        onImageSelected={(image) => setAadharCard(image)}
      />
        {/* <p className='text-4xl text-pure-greys-600'>{aadharCard}</p> */}
      <ImageUploader
        label="BSEB Common application form *"
        acceptedTypes={['image/jpeg', 'image/png']}
        maxSize={200 * 1024}
        onImageSelected={(image) => setApplicationForm(image)}
      />

      <ImageUploader
        label="BSEB Intimation Latter *"
        acceptedTypes={['image/jpeg', 'image/png']}
        maxSize={200 * 1024}
        onImageSelected={(image) => setBSEBIntimationLatter(image)}
      />

     <ImageUploader
        label="10th Marksheet *"
        acceptedTypes={['image/jpeg', 'image/png']}
        maxSize={200 * 1024}
        onImageSelected={(image) => setMarkSheet10th(image)}
      />

<ImageUploader
        label="10th Pass Certificate/Provisional Certificate *"
        acceptedTypes={['image/jpeg', 'image/png']}
        maxSize={200 * 1024}
        onImageSelected={(image) => setCertificate(image)}
      />

<ImageUploader
        label="S.L.C/T.C. 10th *"
        acceptedTypes={['image/jpeg', 'image/png']}
        maxSize={200 * 1024}
        onImageSelected={(image) => setSLCCertificate(image)}
      />
      <ImageUploader
        label="Character Certificate *"
        acceptedTypes={['image/jpeg', 'image/png']}
        maxSize={200 * 1024}
        onImageSelected={(image) => setCharacterCertificate(image)}
      />
      
      <ImageUploader
        label="Copy of Bank Pass Book - 1st Page/Account details *"
        acceptedTypes={['image/jpeg', 'image/png']}
        maxSize={200 * 1024}
        onImageSelected={(image) => setCharacterCertificate(image)}
      />
      <ImageUploader
        label="Other Certificate (If any)"
        acceptedTypes={['image/jpeg', 'image/png']}
        maxSize={200 * 1024}
        onImageSelected={(image) => setOther(image)}
      />
    </div>
  );
};

export default MyComponent;
