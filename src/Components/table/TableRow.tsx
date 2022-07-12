import React from "react";
interface TableRowProps {
  item: any;
  column: any;
}

const TableRow = ({ item, column }: TableRowProps) => {
  var percentage = new Intl.NumberFormat("PT-br", {
    style: "percent",
    maximumFractionDigits: 2,
  });
  var money = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return column.map((columnItem: any) => {
    // se houver um subvalor dentro de um array
    if (columnItem.subvalue) {
      return <td>{item[`${columnItem.value}`][`${columnItem.subvalue}`]}</td>;
    } else {
      switch (columnItem.mask) {
        case "percentage":
          return (
            <td key={columnItem.value}>
              {percentage.format(item[`${columnItem.value}`] / 100)}
            </td>
          );

        case "money":
          return (
            <td key={columnItem.value}>
              {money.format(item[`${columnItem.value}`])}
            </td>
          );

        default:
          return <td key={columnItem.value}>{item[`${columnItem.value}`]}</td>;
      }
    }
  });
};

export default TableRow;
