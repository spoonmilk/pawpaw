 import * as React from 'react';
import greet_gpt from '../../scripts/openAIFramework';
 
 interface ButtonProps {
   onClick: () => void;
   children: React.ReactNode;
   disabled?: boolean;
 }
 
 const RoundedRedButton: React.FC<ButtonProps> = ({ onClick, children, disabled = false }) => {
   const [isClicked, setIsClicked] = React.useState(false);
 
   const handleClick = () => {
     setIsClicked(!isClicked);
     greet_gpt();
     onClick();
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