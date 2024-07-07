import React, { useState } from 'react';
import axios from 'axios';

const CommandForm = () => {
  const [formData, setFormData] = useState({
    application: '',
    version: '',
    function: '',
    noOfAuth: '',
    processOrValidate: 'process',
    gtsControl: '',
    username: '',
    password: '',
    company: '',
    replaceExisting: 'No',
    transactionId: '',
    messageData: '',
  });

  const [generatedCommand, setGeneratedCommand] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/generate_command/', formData);
      setGeneratedCommand(response.data.command);
    } catch (error) {
      console.error('Error generating command:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Render form inputs */}
        {/* ... */}
        <button type="submit">Generate OFS Request</button>
      </form>
      {generatedCommand && (
        <div>
          <textarea readOnly value={generatedCommand} />
          <button onClick={() => navigator.clipboard.writeText(generatedCommand)}>Click here to copy to Clipboard</button>
        </div>
      )}
    </div>
  );
};

export default CommandForm;