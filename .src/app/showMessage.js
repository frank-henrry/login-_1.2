export function showMessage(message, type = "success") {
    Toastify({
      text: message,
      duration: 300000,
      destination: "https://github.com/frank-henrry/trabajo1.git",
      newWindow: true,
      close: true,
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
      style: {
        background: type === "success" ? "green" : "red",
      },
    }).showToast();
  }