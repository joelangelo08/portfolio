<script>
	function animateOnScroll(node, options = {}) {
        const delay = node.dataset.delay || '0s';

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    node.style.setProperty('--animate-delay', delay);
                    node.classList.add('animate__animated', 'animate__fadeInLeft', 'visible');
                    node.classList.remove('invisible');
                    observer.unobserve(entry.target); // Stop observing after animation
                }
                });
            },
            {
                threshold: options.threshold || 0.2, // Default threshold is 20%
            }
        );

        observer.observe(node);

        return {
            destroy() {
                observer.disconnect();
            },
        };
    }
</script>

<div class="max-w-4xl mx-auto my-14 px-4 sm:px-6">
	<!-- Header -->
	<div class="text-center mb-12" in:fly={{ y: 50, duration: 800 }}>
		<h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 titillium-web-bold">
			Get In <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-300">Touch</span>
		</h2>
		<div class="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
		<p class="text-base sm:text-lg text-white max-w-2xl mx-auto titillium-web">
			Feel free to reach out if you'd like to discuss new opportunities or interesting projects.
		</p>
	</div>

	<!-- Main Contact Section -->
	<div use:animateOnScroll class="flex flex-col lg:flex-row gap-12 titillium-web bg-white/5 backdrop-blur-md rounded-xl shadow-2xl p-6 sm:p-10 border border-white/20">

		<!-- Contact Info -->
		<div class="w-full lg:w-1/2 space-y-6">
			<h3 class="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">Let's Connect</h3>
			
			<div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
				<!-- Email -->
				<div use:animateOnScroll class="flex items-center gap-4 group">
					<div class="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors shadow-lg">
						<img src="/img/gmail.png" alt="gmail" class="pulse w-8 h-8 rounded min-w-100" />
					</div>
					<div class="flex-1">
						<p class="text-white font-medium">Email</p>
						<p class="text-white/70 break-words text-sm">joelangelo.milanez@gmail.com</p>
					</div>
				</div>

				<!-- Viber -->
				<div use:animateOnScroll class="flex items-center justify-center gap-4 group">
					<div class="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors shadow-lg">
						<img src="/img/viber.png" alt="viber" class="pulse w-8 h-8 rounded min-w-100" />
					</div>
					<div class="flex-1">
						<p class="text-white font-medium">Viber</p>
						<p class="text-white/70 text-sm">0946 018 3673</p>
					</div>
				</div>

				<!-- Messenger -->
				<div use:animateOnScroll class="flex items-center gap-4 group">
					<div class="p-3 bg-[#e9b46e33] rounded-lg group-hover:bg-[#e9b46e4d] transition-colors shadow-lg">
						<img src="/img/messenger.png" alt="messenger" class="pulse w-8 h-8 rounded min-w-100" />
					</div>
					<div>
						<p class="text-white font-medium">Messenger</p>
						<p class="text-white/70 text-sm"><a href="https://m.me/jelo.milanez" target="_blank" class="text-white underline hover:text-gray-300">m.me/jelo.milanez</a></p>
					</div>
				</div>

				<!-- Location -->
				<div use:animateOnScroll class="flex items-center gap-4 group">
					<div class="p-3 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors shadow-lg">
						<img src="/img/location.png" alt="location" class="pulse w-8 h-8 rounded min-w-100" />
					</div>
					<div>
						<p class="text-white font-medium">Location</p>
						<p class="text-white/70 text-sm">San Juan City, Metro Manila</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Social Media -->
		<div class="w-full lg:w-1/2 space-y-6">
			<h3 class="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">My Online Profiles</h3>

			<div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
				<!-- GitHub -->
				<div use:animateOnScroll class="flex items-center gap-4 group">
					<div class="p-3 bg-[#0bd4cd33] rounded-lg group-hover:bg-[#0bd4cd4d] transition-colors shadow-lg">
						<img src="/img/github.png" alt="github" class="pulse w-8 h-8 rounded min-w-100" />
					</div>
					<div>
						<p class="text-white font-medium">GitHub</p>
						<p class="text-white/70 text-sm break-words"><a href="https://github.com/joelangelo08" target="_blank" class="text-white underline hover:text-gray-300">github.com/joelangelo08</a></p>
					</div>
				</div>

				<!-- LinkedIn -->
				<div use:animateOnScroll class="flex items-center gap-4 group">
					<div class="p-3 bg-[#e5db3533] rounded-lg group-hover:bg-[#e5db354d] transition-colors shadow-lg">
						<img src="/img/linkedin.png" alt="linkedin" class="pulse w-8 h-8 rounded min-w-100" />
					</div>
					<div>
						<p class="text-white font-medium">LinkedIn</p>
						<p class="text-white/70 text-sm break-words"><a href="https://linkedin.com/in/joel-angelo-milañez" target="_blank" class="text-white underline hover:text-gray-300">linkedin.com/in/joel-angelo-milañez</a></p>
					</div>
				</div>

				<!-- Instagram -->
				<div use:animateOnScroll class="flex items-center gap-4 group">
					<div class="p-3 bg-[#bedd1e33] rounded-lg group-hover:bg-[#bedd1e4d] transition-colors shadow-lg">
						<img src="/img/instagram.png" alt="instagram" class="pulse w-8 h-8 rounded min-w-100" />
					</div>
					<div>
						<p class="text-white font-medium">Instagram</p>
						<p class="text-white/70 text-sm"><a href="https://www.instagram.com/jelo.milanez/" target="_blank" class="text-white underline hover:text-gray-300">@jelo.milanez</a></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.pulse {
		animation: pulse 1s infinite ease-in-out;
	}

	@keyframes pulse {
		0%, 100% {
			transform: scale(0.85);
			opacity: 1;
		}
		50% {
			transform: scale(1);
			opacity: 0.9;
		}
	}
</style>
