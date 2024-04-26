import { useState } from "react";

export const useWidgetToggle = ({ initialValue = false }) => {
  const [isOpen, setOpen] = useState(initialValue);
  const toggleWidget = () => {
    setOpen((prev) => !prev);
  };
  return [isOpen, toggleWidget];
};
