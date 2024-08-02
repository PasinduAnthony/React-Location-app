interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "danger"; //this prop is optional & only set this prop to one of those values
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
