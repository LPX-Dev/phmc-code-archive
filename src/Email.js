import React from 'react';

function EmailForm({ formData, handleChange }) {
  return (
    <div>
      <h2>Email</h2>
      <form>
        <label>
          Coroner Name:
          <input
            type="text"
            name="coronerName"
            value={formData.coronerName}
            onChange={handleChange}
            placeholder="Anne Carter"
            required
          />
        </label>
        {/* Add more form fields as needed */}
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}

export default EmailForm;