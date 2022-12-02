import React, { forwardRef } from "react";

const Input = (props, ref) => {
  return (
		<input
			props='true'
			{...props}
      // type={type}
      // placeholder={placeholder}
      // onKeyDown={onKeyDown}
      ref={ref}
    />
  );
};

const forwardedRef = forwardRef(Input);
//export the forwardedRef
export default forwardedRef;
