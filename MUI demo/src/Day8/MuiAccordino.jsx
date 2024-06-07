import { Accordion, AccordionSummary, AccordionDetails, Typography,} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
export const MuiAccordino = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (pannel) => (event, newExpanded) => {
    setExpanded(newExpanded ? pannel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded == "pannel1"}
        onChange={handleChange("pannel1")}
      >
        <AccordionSummary
          id="pannel1-header"
          aria-controls="pannel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordino1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            autem minus sint nihil, minima exercitationem a quo sed consequatur!
            Sequi reprehenderit illum suscipit cupiditate iste totam dicta?
            Obcaecati doloribus fugiat eos expedita est, voluptatum quod
            consequuntur iusto aperiam consectetur tempora dolores ab a, iste
            facere voluptas corporis. Dolores, officia doloribus.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded == "pannel2"}
        onChange={handleChange("pannel2")}
      >
        <AccordionSummary
          id="pannel2-header"
          aria-controls="pannel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordino2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            autem minus sint nihil, minima exercitationem a quo sed consequatur!
            Sequi reprehenderit illum suscipit cupiditate iste totam dicta?
            Obcaecati doloribus fugiat eos expedita est, voluptatum quod
            consequuntur iusto aperiam consectetur tempora dolores ab a, iste
            facere voluptas corporis. Dolores, officia doloribus.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded == "pannel3"}
        onChange={handleChange("pannel3")}
      >
        <AccordionSummary
          id="pannel3-header"
          aria-controls="pannel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordino3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            autem minus sint nihil, minima exercitationem a quo sed consequatur!
            Sequi reprehenderit illum suscipit cupiditate iste totam dicta?
            Obcaecati doloribus fugiat eos expedita est, voluptatum quod
            consequuntur iusto aperiam consectetur tempora dolores ab a, iste
            facere voluptas corporis. Dolores, officia doloribus.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
