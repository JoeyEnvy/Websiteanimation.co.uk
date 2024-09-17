document.addEventListener("DOMContentLoaded", function() {
	function adjustLottieSize() {
	    var leftLottie = document.querySelector('#lottie-container dotlottie-player');
	    var rightLottie = document.querySelector('#right-lottie-container dotlottie-player');

	    if (leftLottie) {
	        leftLottie.style.width = '210px';
	        leftLottie.style.height = '100vh';
	    }

	    if (rightLottie) {
	        rightLottie.style.width = '210px';
	        rightLottie.style.height = '50vh';
	    }
	}

	// Call on load and on window resize
	adjustLottieSize();
	window.addEventListener('resize', adjustLottieSize);
});