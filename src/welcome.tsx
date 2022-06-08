import React from "react";
import Button from '@mui/material/Button';

export default function Welcome() {
  return (
    <div>
      <div>Welcome to my rating App</div>
      <Button variant="outlined" href="/review">Start Rating</Button>
    </div>
  );
}
