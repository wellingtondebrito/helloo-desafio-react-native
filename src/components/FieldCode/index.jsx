import React, { useState } from "react";
import P from 'prop-types'
import { Text } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import styles from "./styles";
const CELL_COUNT = 6;

const FieldCode = ({value, setValue}) => {
  
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFiledRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <Text
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  );
};

export default FieldCode;

FieldCode.propTypes ={
  code: P.node,
  setCode: P.func,
}