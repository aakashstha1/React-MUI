import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

export const MuiToggleBtn = () => {
  const [formats, setFormats] = useState([]);

  console.log(formats);

  const handleFormatChange = (event, updatedFormats) => {
    setFormats(updatedFormats);
  };

  return (
    <Stack direction={"row"}>
      <ToggleButtonGroup
        aria-label="text formatting"
        value={formats}
        onChange={handleFormatChange}
        size="small"
        orientation="vertical"
      >
        <ToggleButton value={"bold"} aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value={"italic"} aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value={"underlined"} aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};
