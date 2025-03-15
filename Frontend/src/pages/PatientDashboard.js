import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PatientDashboard = () => {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    const fetchedClaims = [
      { id: 1, name: "John Doe", amount: 500, status: "Pending", date: "2024-03-10" },
      { id: 2, name: "Jane Smith", amount: 750, status: "Approved", date: "2024-03-08" },
    ];
    setClaims(fetchedClaims);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Patient Dashboard</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim) => (
            <tr key={claim.id} className="border">
              <td className="border p-2">{claim.name}</td>
              <td className="border p-2">${claim.amount}</td>
              <td className="border p-2">{claim.status}</td>
              <td className="border p-2">{claim.date}</td>
              <td className="border p-2">
                <Link to={`/claim/${claim.id}`} className="text-blue-500">View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientDashboard;
