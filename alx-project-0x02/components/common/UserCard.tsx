import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-md p-4 shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold mb-1">{name}</h2>
      <p className="text-sm text-gray-700 mb-1">📧 {email}</p>
      <p className="text-sm text-gray-600">
        🏡 {address.street}, {address.city} ({address.zipcode})
      </p>
    </div>
  );
};

export default UserCard;
