import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ children, onClick }: Props) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event); // Call the provided onClick handler
    }
  };
  return (
    <button
      className="bg-yellow-500 py-1 rounded-lg border-blue-950 border hover:bg-yellow-600 font-semibold w-20"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
