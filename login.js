function handleCredentialResponse(response) {
    // Kullanıcı bilgilerini JWT ile çözümleyin
    const data = jwt_decode(response.credential);
    console.log(data);
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // Buton seçenekleri
    );
    google.accounts.id.prompt(); // Otomatik oturum açma açılır penceresi
}
