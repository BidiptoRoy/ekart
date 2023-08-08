import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Button({ children }: Props) {
  return (
    <button className="bg-yellow-500 py-1 rounded-lg border-blue-950 border hover:bg-yellow-600 font-semibold w-20">
      {children}
    </button>
  );
}
