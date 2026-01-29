// Pastikan variabel container sudah didefinisikan di luar fungsi
const container = document.querySelector('.flowers'); 

window.onload = () => {
    // 1. Menghilangkan class container untuk memulai animasi bunga
    document.body.classList.remove("container");

    // 2. Memanggil fungsi pembuat rumput
    createSmallGrass();

    // 3. Mencegah scroll dan pergeseran layar di HP
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, { passive: false });
};

// Cukup tulis fungsi ini satu kali saja
function createSmallGrass() {
    const clump = document.createElement('div');
    clump.className = 'grass-clump';
    
    // Mengatur lebar rimbun rumput agar menutupi layar bawah
    clump.style.width = '160vmin'; 
    clump.style.left = '-30vmin';

    for (let i = 0; i < 200; i++) { 
        const blade = document.createElement('div');
        blade.className = 'grass-small';
        
        const height = (Math.random() * 12) + 6;
        const delay = Math.random() * 2;
        
        blade.style.height = `${height}vmin`;
        blade.style.animationDelay = `${delay}s`;
        // Membuat rumput saling menumpuk secara acak
        blade.style.marginRight = `-${Math.random() * 1.5}vmin`; 
        
        clump.appendChild(blade);
    }
    // Memasukkan rumput ke dalam container flowers
    container.appendChild(clump); 
}
