// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const status = document.getElementById('connectionStatus');

  const updateStatus = (text) => {
    if (status) {
      status.textContent = text;
    }
  };

  window.addEventListener('elevenlabs-convai-ready', () => {
    updateStatus('✅ Toscanita lista para conversar');
  });

  window.addEventListener('elevenlabs-convai-error', (error) => {
    console.error('Error en conexión:', error);
    updateStatus('❌ Error de conexión');
  });
});
