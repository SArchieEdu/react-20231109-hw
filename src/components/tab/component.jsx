import { NavLink } from "react-router-dom";

export const Tab = ({ children, to, className }) => {
  return (
    <NavLink to={to} className={className}>
      {children}
    </NavLink>
  );
};
