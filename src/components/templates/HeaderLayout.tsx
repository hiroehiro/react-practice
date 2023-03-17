import { FC, memo, ReactNode } from "react";
import { Header } from "../organisms/layout/Header";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo(function HeaderLayoutfunc(props) {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
