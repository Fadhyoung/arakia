import React from "react";
import clsx from "clsx";
import Stack from "./Stack";
import Typography from "./Typography";

interface LeftBorderTitleProps {
  label: string;
  borderColor?: string;
  borderWidth?: string;
  borderHeight?: string;
}

const LeftBorderTitle: React.FC<LeftBorderTitleProps> = ({
  label = "",
  borderColor = "bg-secondaryGreen", 
  borderWidth = "w-1", 
  borderHeight = "h-14", 
}) => {
  return (
    <Stack direction="row" align="center" gap={2} className="h-auto">
      <div className={clsx(borderWidth, borderHeight, borderColor, "mr-2")} />
      <Typography variant="3xl" weight="1000" color="tertiary">
        {label}
      </Typography>
    </Stack>
  );
};

export default LeftBorderTitle;
