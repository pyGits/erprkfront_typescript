import React from "react";
interface NavContentProps {
  active?: string;
  id: string;
  children: any;
}

const Navcontent = (props: NavContentProps) => {
  return (
    <div
      className={"tab-pane fade " + props.active}
      id={props.id}
      role="tabpanel"
    >
      {props.children}
    </div>
  );
};

export default Navcontent;
