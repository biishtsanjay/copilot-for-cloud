import { useEffect, useState } from "react";

export const useWidgetToggle = ({ initialValue = false }) => {
  const [isOpen, setOpen] = useState(initialValue);
  const toggleWidget = () => {
    setOpen((prev) => !prev);
  };
  useEffect(() => {
    if (!isOpen) {
      window.scrollTo({ top: window.scrollY + 200, behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.scrollY - 200, behavior: "smooth" });
    }
  }, [isOpen]);
  return [isOpen, toggleWidget];
};
