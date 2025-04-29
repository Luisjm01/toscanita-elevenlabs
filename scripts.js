const talkButton = document.getElementById('talk-button');

talkButton.addEventListener('click', () => {
  const convai = document.querySelector('elevenlabs-convai');
  if (convai) {
    convai.startConversation();
  } else {
    console.error("No se encontró el widget de ElevenLabs.");
  }
});
