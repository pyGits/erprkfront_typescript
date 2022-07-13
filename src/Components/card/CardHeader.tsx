import React from "react";

interface CardHeaderProps {
  children?: any;
  title: string;
}

const CardHeader = (props: CardHeaderProps) => {
  return (
    <div className="card-header">
      <h5 className="box-title bold">{props.title}</h5>
      {props.children}
    </div>
  );
};
export default CardHeader;
