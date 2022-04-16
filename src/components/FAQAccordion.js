import * as React from 'react'
import { styled } from '@mui/material/styles'
import { ArrowForwardIosSharp } from '@mui/icons-material'
import { Box } from '@mui/system'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from '@mui/material'

const FAQAccordion = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}))

const FAQAccordionSummary = styled((props) => (
  <AccordionSummary
    expandIcon={<ArrowForwardIosSharp sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .AccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .AccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}))

const FAQAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}))

export default function FAQAccordionComponent() {
  const [expanded, setExpanded] = React.useState("panel1")

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <Box
      sx={{
        marginBottom: 10,
      }}
    >
      <FAQAccordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <FAQAccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>How long is the travel?</Typography>
        </FAQAccordionSummary>
        <FAQAccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </FAQAccordionDetails>
      </FAQAccordion>
      <FAQAccordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <FAQAccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Do we need to bring food and drinks?</Typography>
        </FAQAccordionSummary>
        <FAQAccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </FAQAccordionDetails>
      </FAQAccordion>
      <FAQAccordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <FAQAccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What will we see?</Typography>
        </FAQAccordionSummary>
        <FAQAccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </FAQAccordionDetails>
      </FAQAccordion>
    </Box>
  )
}
