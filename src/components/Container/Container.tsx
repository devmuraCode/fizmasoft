"use client";
import "../../styles/global.scss"; 

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container_custom">{children}</div>;
};

export default Container;
