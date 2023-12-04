import { Button } from "../button/component";

export const Tab = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
