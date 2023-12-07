import { Button } from "../button/component";

export const Tab = ({ children, onClick, className }) => {
  return (
    <Button onClick={onClick} className={className}>
      {children}
    </Button>
  );
};
