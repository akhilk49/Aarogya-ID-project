import { useState } from "react";

const ClaimSubmission = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Claim submitted successfully!");
  };

  return (
    <div>
      <h2>Submit a Claim</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="number" name="amount" placeholder="Claim Amount" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ClaimSubmission;