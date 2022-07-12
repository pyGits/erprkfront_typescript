import React from "react";
interface TableHeaderProps {
  item: any;
  key: any;
}

const TableHeader = ({ item, key }: TableHeaderProps) => {
  return (
    <th key={key} style={{ width: item.width }}>
      {item.heading}
    </th>
  );
};

export default TableHeader;
