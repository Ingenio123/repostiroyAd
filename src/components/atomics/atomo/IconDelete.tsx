import { FC } from "react";
import { BsTrash } from "react-icons/bs";

interface IProps {
  size?: number;
}

const Icon: FC<IProps> = ({ size }) => {
  return <BsTrash size={size} />;
};

export default Icon;
