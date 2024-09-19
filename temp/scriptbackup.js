document.addEventListener("DOMContentLoaded", function() {
    function adjustLottieSize() {
        var leftLottie = document.querySelector('#lottie-container dotlottie-player');
        var rightLottie = document.querySelector('#right-lottie-container dotlottie-player');
        var leftSection = document.querySelector('.left-section');
        var rightSection = document.querySelector('.right-section');

        if (leftLottie && leftSection) {
            leftLottie.style.height = '100%';
            leftLottie.style.width = 'auto';
            var lottieWidth = leftLottie.offsetWidth;
            var maxWidth = leftSection.offsetWidth;
            if (lottieWidth > maxWidth) {
                leftLottie.style.width = '100%';
                leftLottie.style.height = 'auto';
            }
        }

        if (rightLottie && rightSection) {
            rightLottie.style.height = '100%';
            rightLottie.style.width = 'auto';
            var lottieWidth = rightLottie.offsetWidth;
            var maxWidth = rightSection.offsetWidth;
            if (lottieWidth > maxWidth) {
                rightLottie.style.width = '100%';
                rightLottie.style.height = 'auto';
            }
        }
    }

    function adjustSplineViewer() {
        const container = document.querySelector('.right-section');
        const splineViewer = container.querySelector('spline-viewer');

        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const targetAspectRatio = 864 / 1080; // 16:10 aspect ratio

        let newWidth, newHeight;
        if (containerWidth / containerHeight > targetAspectRatio) {
            newHeight = containerHeight;
            newWidth = newHeight * targetAspectRatio;
        } else {
            newWidth = containerWidth;
            newHeight = newWidth / targetAspectRatio;
        }

        const scale = newWidth / 864; // 864 is the base width

        splineViewer.style.width = `${newWidth}px`;
        splineViewer.style.height = `${newHeight}px`;
        splineViewer.style.transform = `scale(${scale})`;
        splineViewer.style.transformOrigin = 'top left';
    }

    // Call on load and on window resize
    adjustLottieSize();
    adjustSplineViewer();
    window.addEventListener('resize', function() {
        adjustLottieSize();
        adjustSplineViewer();
    });
});