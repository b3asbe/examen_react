import React, { useState } from 'react';
import { Fragment } from 'react';
function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  const logoStyles = {
    width: isHovered ? '250px' : '200px',
    transition: 'width 0.3s ease-in-out', 
  };

  return (
    <>
    <div className="logo">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwFBxvYWz-pf_xyUzeWkTIP_nwW6A3QKwdhAs-6Y4dm9-YCkd3_I_hGveW9Kh4feeizy8fa51q4zo7nY993WHmBELTmGtsqL-hcFH7Ln9L0UB1CcSibrwXRoN3TmP5V2_BATnNEf67bl9A4ZJwPeYbyYZyeFz5KQ0MfjS8c-KdhC6_hF6ZHg_s0JoH6WE/s1600/logo.jpg"
        alt="Logo Turismo"
        style={logoStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}/>
    </div>
    </>
  );
}

export default Logo;