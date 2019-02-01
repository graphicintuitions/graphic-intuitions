import React from "react";

export const PageWrapper = ({ helmet, children }) => {
  return (
    <div>
      {helmet || ""}
      {children}
    </div>
  )
}