import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return <div className="">{children}</div>;
};

export default MainLayout;
