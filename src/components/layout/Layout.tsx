import React from "react";
import MainNavigation from "./MainNavigation";

import "./Layout.css";

type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <MainNavigation />
      <main className="main">{props.children}</main>
    </div>
  );
}
