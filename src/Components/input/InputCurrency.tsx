import React from "react";

import { useState } from "react";
// import InputMask from "react-currency-input-field";
import InputMask from "react-number-format";
import { setConstantValue } from "typescript";
import Preco from "../../Core/Preco/Preco";

interface InputCurrencyProps {
  value: any;
  setValue: any;
  mask: string;
}

const InputCurrency = (props: InputCurrencyProps) => {
  const inputConfig = {
    className: "form-control",
    fixedDecimalScale: true,
    decimalScale: 2,
    thousandSeparator: ".",
    decimalSeparator: ",",
    prefix: "",
  };
  if (props.mask === "dinheiro") {
    inputConfig.prefix = "R$";
  }
  if (props.mask === "porcentagem") {
    inputConfig.prefix = "% ";
  }

  return (
    <div>
      <InputMask
        {...inputConfig}
        value={props.value}
        onValueChange={(e) => {
          props.setValue(e.floatValue);
        }}
      />
    </div>
  );
};

export default InputCurrency;
