import React from 'react';

function happywinner({ value }) {
  let winnerMessage;

  if (value === "🐭") {
    winnerMessage = "🐭 HEHEE I am the winner!";
  } else if (value === "😼") {
    winnerMessage = "😽 Meow 😸 I am the winner 🪤🐭!";
  } else {
    winnerMessage = "🐭🩷😸 Let us be friends!";
  }

  return (
    <div>
      <h1>{winnerMessage}</h1>
    </div>
  );
}

export default happywinner;
