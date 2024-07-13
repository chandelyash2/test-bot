// app/api/telegram-webhook/route.js

import axios from "axios";

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { message } = body;
    console.log("recieved mesagae", message);
    if (message) {
      const chatId = message.chat.id;
      const userId = message.from.id;
      const userName = message.from.username;
      const firstName = message.from.first_name;
      const lastName = message.from.last_name;

      // Store user info in the database
      await axios.post("http://45.61.134.38:8000/tma/createUser", {
        userName,
        userId,
        firstName,
        lastName,
      });
      // Optionally send a response back to the user
      const responseText = `Hello, ${firstName}! Your user ID is ${userId}.`;
      //   await sendMessage(chatId, responseText);

      return new Response(JSON.stringify({ status: "ok" }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: "No message received" }), {
        status: 400,
      });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

// Function to send a message using the Telegram API
// const sendMessage = async (chatId, text) => {
//   const token = process.env.TELEGRAM_BOT_TOKEN; // Store your bot token in an environment variable

//   const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       chat_id: chatId,
//       text,
//     }),
//   });

//   const data = await response.json();
//   return data;
// };
