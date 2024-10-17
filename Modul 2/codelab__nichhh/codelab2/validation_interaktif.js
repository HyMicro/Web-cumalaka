document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const alamat = document.getElementById('alamat').value;
    
    if (nama && email && alamat) {
        alert('Pendaftaran berhasil!');
        this.reset();
    } else {
        alert('Mohon isi semua field.');
    }
});