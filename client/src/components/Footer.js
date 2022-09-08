import React from "react";

const Footer = () => {
  const today = new Date();

  return (
    <div>
      <footer className="text-center text-white bg-dark">
        <p>Copyright &copy; {today.getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Footer;
