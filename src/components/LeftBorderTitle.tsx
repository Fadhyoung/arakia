import React from "react";

interface LeftBorderTitleProps {
  borderColor?: string;
  borderWidth?: string;
  borderHeight?: string;
}

const LeftBorderTitle: React.FC<LeftBorderTitleProps> = ({
  borderColor = "rgba(0, 128, 0, 0.2)",
  borderWidth = "4px",
  borderHeight = "100%",
}) => {
  return (
    <div
      style={{
        width: borderWidth,
        height: borderHeight,
        backgroundColor: borderColor,
        marginRight: "8px",
      }}
    ></div>
  );
};

export default LeftBorderTitle;
