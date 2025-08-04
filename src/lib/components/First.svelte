<script>
	import { onMount } from "svelte";

	let text = 'Full-Stack Developer';
	let displayed = '';
	let index = 0;

	let isHovered = false;

	async function typingEffect() {
		while (index < text.length) {
			const typoChance = Math.random() < 0.05;

			if (typoChance) {
				const wrongChar = String.fromCharCode(97 + Math.floor(Math.random() * 26));
				displayed += wrongChar;
				await delay(80 + Math.random() * 120);

				displayed = displayed.slice(0, -1);
				await delay(50 + Math.random() * 100);
			}

			displayed += text[index];
			index++;

			await delay(50 + Math.random() * 200);
		}
	}

	function delay(ms) {
		return new Promise(r => setTimeout(r, ms));
	}

	onMount(() => {
		typingEffect();
	});
</script>

<div class="flex flex-col lg:flex-row justify-center w-full h-auto lg:h-screen z-10 relative pb-8">
	<div class="w-full lg:w-1/2 flex justify-center items-center px-14 md:px-8 lg:pl-8 lg:pr-8 xl:pl-20 min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-screen">
        <div class="text-center lg:text-left">
			<div class="animate__animated animate__fadeIn">
				<p class="text-5xl sm:text-5xl md:text-6xl xl:text-7xl titillium-web-bold text-white/80">JOEL ANGELO</p>
				<p class="text-5xl sm:text-5xl md:text-6xl xl:text-7xl titillium-web-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">MILAÑEZ</p>
            </div>
			<p class="text-xl sm:text-2xl lg:text-3xl titillium-web font-semibold text-white/60 mt-4 mb-3">{displayed}<span class="blink">|</span></p>
        
			<div class="w-full flex flex-col lg:flex-row justiy-center items-center gap-10">
				<a
					href="/files/Resume - Joel Milañez.docx"
					class="relative overflow-hidden px-6 py-3 rounded-xl font-bold text-white backdrop-blur-sm border border-white/20 shadow-xl 
						bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-indigo-500/30 
						hover:from-pink-500/50 hover:via-purple-500/40 hover:to-indigo-500/50 
						hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] 
						transition-[background] duration-500 ease-in-out shine"
					class:shine-hover={isHovered}
					class:shine-unhover={!isHovered}
					on:mouseenter={() => (isHovered = true)}
					on:mouseleave={() => (isHovered = false)}
				>
					<span class="relative z-10 titillium-web-bold text-xs md:text-sm xl:text-base tracking-wider px-5">RESUME</span>
				</a>
			</div>
		</div>
    </div>

	<div class="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 lg:px-20 py-8 md:py-0 gap-10">
		<div class="relative">
			<div class="w-48 sm:w-48 md:w-56 lg:w-64 h-auto rounded-full p-1 photo-shadow bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
				<div class="w-full h-full rounded-full overflow-hidden border-4 border-white">
					<img src="/img/IMG_1536(2).JPG" alt="img" class="w-full h-full object-cover" />
				</div>
			</div>
		</div>

		<!-- <a
			href="/files/Resume - Joel Milañez.docx"
			class="relative overflow-hidden px-6 py-3 rounded-xl font-bold text-white backdrop-blur-sm border border-white/20 shadow-xl 
				   bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-indigo-500/30 
				   hover:from-pink-500/50 hover:via-purple-500/40 hover:to-indigo-500/50 
				   hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] 
				   transition-[background] duration-500 ease-in-out shine"
			class:shine-hover={isHovered}
			class:shine-unhover={!isHovered}
			on:mouseenter={() => (isHovered = true)}
			on:mouseleave={() => (isHovered = false)}
		>
			<span class="relative z-10 titillium-web-bold text-xs md:text-sm xl:text-base tracking-wider px-5">RESUME</span>
		</a> -->
	</div>
</div>

<style>
	.photo-shadow {
		--tw-shadow: 16px 20px 10px 11px rgb(0 0 0 / 0.25), 0 4px 6px -4px rgb(0 0 0 / 0.1);
		--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
	}

	.blink {
		animation: blink 1s step-start infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}

	.shine::before {
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		width: 50%;
		background: linear-gradient(120deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.05) 100%);
		transform: skewX(-20deg);
		z-index: 1;
	}

	.shine-hover::before {
		left: -75%;
		animation: shineRight 0.75s forwards;
	}

	.shine-unhover::before {
		left: 125%;
		animation: shineLeft 0.75s forwards;
	}

	@keyframes shineRight {
		0% {
			left: -75%;
		}
		100% {
			left: 125%;
		}
	}

	@keyframes shineLeft {
		0% {
			left: 125%;
		}
		100% {
			left: -75%;
		}
	}
</style>