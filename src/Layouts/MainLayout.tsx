import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return <div className="mx-5">{children}</div>;
};

export default MainLayout;
