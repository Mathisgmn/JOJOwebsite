const logo = document.getElementById('jojoLogo');
logo.addEventListener('click', function() {
    
    this.style.animation = 'timeStop 2s forwards';
});

logo.addEventListener('animationend', function(e) {
    if (e.animationName === 'timeStop') {
        
        this.style.animation = 'glisseHaut 3s forwards';
    } else if (e.animationName === 'glisseHaut') {
        
        const video = document.getElementById('jojoVideo');
        video.style.display = 'block';
        video.play();
    }
});
