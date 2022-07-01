document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

function output(input) {
  

  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  if (text.match(/(hi|hello|hey|howdy)/gi)) {
    product = "Hi there! My name is Poppy. How are you?";
  } else if (text.match(/(good|happy|elated)/gi)) { 
    product = "I'm glad! You sound good to me right now. Unless you feel differently, I wouldn't recommend seeking help at the moment. If you want, type cope to get some coping mechanisms, if you'd like."
  } else if (text.match(/(bad|meh|sad|depressed|moody)/gi)) {
    product = "Aw, I hope you feel better soon. If these feelings persist, you may have to seek professional help. Have you had these feelings for a long time?"; }
    else if (text.match(/(anxious|nervous)/gi)) {
    product = "You may have anxiety. I recommend contacting NAMI, the National Alliance on Mental Illnesses. They can connect you with a therapist or psychologist who can properly understand what you're going through. You can call them at 1-800-950-NAMI (6264). Type cope to get some coping mechanisms, if you'd like."; }
      else if (text.match(/(yes|i need help)/gi)) {
        product = "You may have depression. I recommend contacting NAMI, the National Alliance on Mental Illnesses. They can connect you with a therapist or psychologist who can properly understand what you're going through. You can call them at 1-800-950-NAMI (6264). Type cope to get some coping mechanisms, if you'd like.";
    } else if (text.match(/no/gi))  {
        product = "Okay, keep a close eye on how you're feeling and if these feelings persist, don't hesitate to get the help you need. Type cope to get some coping mechanisms, if you'd like.";
    }  else if (text.match(/cope/gi)) {
        product = "You can listen to soothing and calm music, take a nap, count to 10 out loud, take a break from social media, or take a deep breath. Do what makes you feel the most relaxed!"
    } else {
    product = "Sorry, I don't understand that command.";
  }

  addChat(input, product);
}
let product;
function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}

function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="https://acloseshave.com/wp-content/uploads/2022/04/1-1.svg" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "https://images.vexels.com/media/users/3/230877/isolated/preview/4008667b2dea40a748716d55f71d5258-cute-popsicle-gradient.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);

  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;


  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000
  )

}
