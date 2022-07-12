import React from "react";

interface CardHeaderProps {
  children?: any;
  title: string;
}

const CardHeader = (props: CardHeaderProps) => {
  return (
    <div className="card-header">
      <h3 className="card-title">{props.title}</h3>
      {props.children}
    </div>
  );
};
export default CardHeader;
