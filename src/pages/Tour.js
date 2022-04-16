import * as React from 'react'
import ImageLists from '../components/ImageLists'
import FAQAccordion from '../components/FAQAccordion'
import Modal from '../components/Modal'
import {
  BottomNavigation,
  Box,
  Container,
  Paper,
  Typography,
} from '@mui/material'

export default function Tour() {
  const [value, setValue] = React.useState(0)

  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{display: "flex"}}>
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          height={325}
          alt=""
        />
        <ImageLists />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolorem minima dolorum officia aliquam eaque, vel dolores dolore nisi debitis harum numquam facilis corrupti iure earum aperiam non nobis blanditiis deserunt qui! Repudiandae eveniet ea nam repellendus similique perspiciatis non.
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3}>
          Frequently asked questions
        </Typography>
        <FAQAccordion />
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation>
            <Modal />
          </BottomNavigation>
        </Paper>
      </Box>
    </Container>
  )
}
