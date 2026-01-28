onload = () => {
  document.body.classList.remove("container");
  
};
function createSmallGrass() {
    const clump = document.createElement('div');
    clump.className = 'grass-clump';
    
    // Lebarkan container rumput depan agar menutupi seluruh bawah layar
    clump.style.width = '160vmin'; 
    clump.style.left = '-30vmin';

    for (let i = 0; i < 200; i++) { // Menambah helai menjadi 200 agar sangat rimbun
        const blade = document.createElement('div');
        blade.className = 'grass-small';
        
        const height = (Math.random() * 12) + 6;
        const delay = Math.random() * 2;
        
        blade.style.height = `${height}vmin`;
        blade.style.animationDelay = `${delay}s`;
        blade.style.marginRight = `-${Math.random() * 1.5}vmin`; 
        
        clump.appendChild(blade);
    }
    container.appendChild(clump);
}
function createSmallGrass() {
    const clump = document.createElement('div');
    clump.className = 'grass-clump';
    
    // Lebarkan container rumput depan agar menutupi seluruh bawah layar
    clump.style.width = '160vmin'; 
    clump.style.left = '-30vmin';

    for (let i = 0; i < 200; i++) { // Menambah helai menjadi 200 agar sangat rimbun
        const blade = document.createElement('div');
        blade.className = 'grass-small';
        
        const height = (Math.random() * 12) + 6;
        const delay = Math.random() * 2;
        
        blade.style.height = `${height}vmin`;
        blade.style.animationDelay = `${delay}s`;
        blade.style.marginRight = `-${Math.random() * 1.5}vmin`; 
        
        clump.appendChild(blade);
    }
    container.appendChild(clump);
}