let tg = window.Telegram.WebApp;
tg.expand(); // Perluas tampilan di Telegram

// Fungsi untuk menampilkan iklan dan memberikan reward
document.getElementById("showAdBtn").addEventListener("click", function() {
    show_8943875().then(() => {
        alert('Anda telah menonton iklan dan mendapatkan reward!');
        tg.sendData("User mendapatkan reward dari iklan!"); // Kirim data ke bot
    }).catch(() => {
        alert('Iklan gagal ditampilkan. Coba lagi nanti.');
    });
});
