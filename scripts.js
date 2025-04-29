document.addEventListener("DOMContentLoaded", function () {
  const status = document.getElementById('connectionStatus');

  const updateStatus = (text) => {
    if (status) {
      status.textContent = text;
    }
  };

  // Crear el widget de conversación
  const widget = new ConversationWidget({
    agentId: "e5S3VkABSLxjynYS06q0", // Aquí pon tu Agent ID real de ElevenLabs
    selector: "#widget",
    theme: "light",
  });

  window.addEventListener('elevenlabs-convai-ready', () => {
    updateStatus('✅ Toscanita lista para conversar');
  });

  window.addEventListener('elevenlabs-convai-error', (error) => {
    console.error('❌ Error de conexión:', error);
    updateStatus('❌ Error de conexión');
  });
});
