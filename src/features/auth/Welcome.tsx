import React from "react";
import { Link } from "react-router-dom";

const Welcome: React.FC = () => {
  const date = new Date();
  const today = new Intl.DateTimeFormat("nl-NL", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  const content = (
    <section className="welcome">
      <p className="text-gray-600 mb-4">{today}</p>

      <h1>Welcome!</h1>

      <p className="mb-4">
        <Link to="/dash/notes" className="text-blue-500 hover:underline">
          View techNotes
        </Link>
      </p>

      <p>
        <Link to="/dash/users" className="text-blue-500 hover:underline">
          View User Settings
        </Link>
      </p>
    </section>
  );

  return content;
};

export default Welcome;
