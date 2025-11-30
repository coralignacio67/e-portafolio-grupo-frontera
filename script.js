// Función para expandir o minimizar el chatbot
function toggleChatbot() {
    const chatbotContent = document.querySelector('.chatbot-content');
    if (chatbotContent.style.display === 'block') {
        chatbotContent.style.display = 'none'; // Si está abierto, lo cierra
    } else {
        chatbotContent.style.display = 'block'; // Si está cerrado, lo abre
    }
}

// Cerrar el chatbot si el usuario hace clic fuera de la ventana
window.addEventListener('click', function(event) {
    const chatbotContent = document.querySelector('.chatbot-content');
    const chatbotButton = document.querySelector('.chatbot-btn');
    
    // Si el clic no fue dentro de la ventana del chatbot ni en el botón
    if (!chatbotContent.contains(event.target) && !chatbotButton.contains(event.target)) {
        chatbotContent.style.display = 'none'; // Cierra la ventana del chatbot
    }
});
