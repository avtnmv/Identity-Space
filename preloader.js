window.onload = () => {
    const preloader = document.querySelector('.preloader');
    const mainContent = document.querySelector('.container');
    const firstPreloaderText = document.querySelector('.first-preloader-text');
    const secondPreloaderText = document.querySelector('.second-preloader-text');
    const firstPreloaderFadeIn = document.querySelector('.first-preloader-fadein');

    const animationTimings = {
        fillColorSecond: 1600,
        moveTexts: 2600,
        showContent: 3100
    };

    setTimeout(() => {
        firstPreloaderFadeIn.classList.add('fill-color');
        secondPreloaderText.classList.add('fill-color-second');
    }, animationTimings.fillColorSecond);

    setTimeout(() => {
        firstPreloaderText.style.animation = "moveRight 1.5s forwards";
        secondPreloaderText.style.animation = "moveLeft 1.5s forwards";
    }, animationTimings.moveTexts);

    setTimeout(() => {
        preloader.style.display = 'none';
        mainContent.style.opacity = 1;
    }, animationTimings.showContent);
};
