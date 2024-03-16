import React, { useState } from 'react';

const CertificateBuilder = () => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [date, setDate] = useState('');

  const generateCertificate = () => {
    // Logic to generate certificate
    // You can use HTML/CSS, SVG, Canvas, or any other method
    // to create the certificate template with the entered data
    // For simplicity, let's just log the data for now
    console.log(`Certificate for ${name} for completing ${course} on ${date}`);
  };

  return (
    <>
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        placeholder="Recipient's Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="course">Course:</label>
      <input
        type="text"
        placeholder="Course Title"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

    <div>
      <label htmlFor="DateofStart">Date of Start:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="DateofEnd">Date of End:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>

    <div>
      <label htmlFor="Signature">Signature:</label>
      <input
        type="file"
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
    
    <div>
      <label htmlFor="signature-holder">Signature Holder:</label>
      <input
        type="text"
        onChange={(e) => setDate(e.target.value)}
      />
    </div>

      <button onClick={generateCertificate}>Generate Certificate</button>
    </div>

    </>
  );
};

export default CertificateBuilder;
