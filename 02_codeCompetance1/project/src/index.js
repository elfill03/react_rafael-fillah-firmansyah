function submitForm() {
    // Mengambil nilai input dari form
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("inputEmail").value;
    const description = document.getElementById("Description").value;

    // Menampilkan pesan alert dengan nilai yang diambil dari form
    const message = `<h1 style="font-size: 24px; text-align: center; font-weight: bold;">Submit Success!</h1><br> First Name: ${firstName} <br> Last Name: ${lastName}<br>Email: ${email}<br>Description: ${description}`;

     // Menampilkan alert
    const alertElement = document.getElementById("alert");
    alertElement.innerHTML = message;
    alertElement.removeAttribute("hidden");

}