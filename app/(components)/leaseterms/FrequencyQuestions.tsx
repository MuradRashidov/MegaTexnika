import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Container } from '@mui/material';

export default function FrequencyQuestions() {
     const questions = [
        {
            question:"Lorem Ipsum is simply dummy text of the printing and type?",
            answer:`
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
             when an unknown printer
             `
        },
        {
            question:"Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
            answer:`
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
             when an unknown printer
             `
        },
        {
            question:"Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
            answer:`
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
             when an unknown printer
             `
        },
        {
            question:"Lorem Ipsum is simply dummy text of the printing?",
            answer:`
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
             when an unknown printer
             `
        },
        {
            question:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply?",
            answer:`
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
             when an unknown printer
             `
        },
        {
            question:"Lorem Ipsum is simply dummy text of the printing and typesetting?",
            answer:`
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
             when an unknown printer
             `
        },
    ]
  return (
    <Box sx={{marginY:8}}>
     <Box sx={{marginY:4,display:"flex",justifyContent:"center"}}>
        <Typography sx={{fontWeight:700}} variant="h4">Tez-tez verilən suallar</Typography>
     </Box>
     <Container sx={{width:"80%"}}>
        {questions.map((question,index)=>{
            return(
                <Accordion key={index}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>{question.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {question.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
            )
        })}
     
     </Container>
    </Box>
  );
}