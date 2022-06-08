import React from "react";
import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));


export default function Welcome() {
    return (
        <div>
            <ColorButton variant="contained" href="/add">Add a Review</ColorButton>
        </div>
    )
}