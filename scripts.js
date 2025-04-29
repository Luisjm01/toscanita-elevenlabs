document.addEventListener('DOMContentLoaded', () => {
  const status = document.getElementById('connectionStatus');
  
  const updateStatus = (text) => {
    if (status) {
      status.textContent = text;
    }
  };

  // Inicializa el widget de conversación
  const widget = new ConversationWidget({
    agentId: "e5S3VkABSLxjynYS06q0", // <-- tu verdadero AGENT_ID
    selector: "#widget",
    theme: "light"
  });

  window.addEventListener('elevenlabs-convai-ready', () => {
    updateStatus('✔️ Toscanita lista para conversar');
  });

  window.addEventListener('elevenlabs-convai-error', (error) => {
    console.error('Error en conexión:', error);
    updateStatus('❌ Error de conexión');
  });
});
