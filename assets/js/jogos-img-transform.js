gsap.registerPlugin('transform');

    document.querySelectorAll('.img-fluid').forEach((imagem) => {
        const borderAnimation = gsap.to(imagem, {
            borderImageSource: 'radial-gradient(circle, #ffcc00, transparent)',
            borderImageSlice: '1',
            duration: 0.3,
            paused: true,
        });

        imagem.addEventListener('mouseenter', () => {
            gsap.to(imagem, { scale: 1, duration: 0.3 });
        });

        imagem.addEventListener('mouseleave', () => {
            gsap.to(imagem, { scale: 0.99, duration: 0.3 });
        });
    });