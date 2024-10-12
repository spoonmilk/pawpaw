 import * as React from 'react';
 
 interface ButtonProps {
   onClick: () => void;
   children: React.ReactNode;
   disabled?: boolean;
 }
 
 const RoundedRedButton: React.FC<ButtonProps> = ({ onClick, children, disabled = false }) => {
   const [isClicked, setIsClicked] = React.useState(false);
 
   const handleClick = () => {
     setIsClicked(true);
     onClick();
     setTimeout(() => {
       setIsClicked(false);
     }, 200);
   };
 
   return (
     <button
       onClick={handleClick}
       disabled={disabled}
       style={{
         backgroundColor: isClicked ? '#660033' : '#FF0033',
         color: '#FFFFFF',
         border: 'none',
         padding: '10px 20px',
         borderRadius: '20px',
         cursor: 'pointer',
       }}
     >
       {children}
     </button>
   );
 };
 
 export default RoundedRedButton;