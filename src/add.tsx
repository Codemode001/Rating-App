import React from "react";
import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Tab from "./tabs"
import { ChakraProvider } from "@chakra-ui/react";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

  

export default function Add() {
    return(
        <div>
        <div>
            <ColorButton variant="contained">Add a Review</ColorButton>
        </div>
        <div>
        <ChakraProvider>
        <Tab />
        </ChakraProvider>
        </div>
        </div>
    )
}