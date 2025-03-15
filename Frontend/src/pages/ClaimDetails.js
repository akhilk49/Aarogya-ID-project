import { useParams } from "react-router-dom";

const ClaimDetails = () => {
  const { id } = useParams();
  const claim = { id, name: "John Doe", amount: 500, status: "Pending", description: "Medical bill reimbursement" };

  return (
    <div>
      <h2>Claim Details</h2>
      <p><strong>Name:</strong> {claim.name}</p>
      <p><strong>Amount:</strong> {claim.amount}</p>
      <p><strong>Status:</strong> {claim.status}</p>
      <p><strong>Description:</strong> {claim.description}</p>
    </div>
  );
};

export default ClaimDetails;