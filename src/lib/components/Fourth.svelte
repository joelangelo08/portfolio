<script>
	import { onMount } from "svelte";
    import { blur, fade, draw, fly, scale, slide } from 'svelte/transition';

    let profilesTools = ['Svelte', 'Laravel','Yii','My SQL','Javascript','jQuery','Tailwind CSS',' Bootstrap', 'CSS']
    let sjcTools = ['Laravel','MS SQL','jQuery','Bootstrap','CSS'];

    let visible = false;
    let isSmWidth = false;

    function updateWidth() {
		isSmWidth = window.innerWidth < 640;
	}

    onMount(() => {
		updateWidth();

		window.addEventListener('resize', updateWidth);

		return () => {
			window.removeEventListener('resize', updateWidth);
		};
	});

    let activeIndex = null;
    function toggleAccordion(index) {
    activeIndex = activeIndex === index ? null : index;
    }

    function observeVisibility(node, { threshold = 0.1 } = {}) {
		const observer = new IntersectionObserver(
			([entry]) => {
				node.dispatchEvent(new CustomEvent(entry.isIntersecting ? 'enter' : 'leave'));
			},
			{ threshold }
		);

		observer.observe(node);

		return {
			destroy() {
				observer.disconnect();
			}
		};
	}
</script>

<div class="flex flex-col justify-center items-center my-14 h-full">
    <h1 class="titillium-web-bold text-4xl sm:text-4xl md:text-5xl xl:text-6xl text-center mb-12 text-white">Professional<br>
    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-300">Experience</span></h1>

    <div class="w-full max-w-4xl mx-auto"
        use:observeVisibility
        on:enter={() => (visible = true)}
        on:leave={() => (visible = false)}
    >

        {#if visible}
            <!-- Index 0 -->
            <div class="py-1" transition:slide={{ duration: 400 }}>
                <button
                    class={`w-full text-left px-6 py-4 focus:outline-none rounded-lg text-white transition-colors duration-600 shadow-lg ${activeIndex === 0 ? 'bg-[#7fb5d6b5]' : 'bg-[#a4e6d685]'}`}
                    
                    on:click={() => toggleAccordion(0)}
                >
                    <div class="flex items-center justify-between">
                        <span class="text-sm sm:text-base md:text-md xl:text-lg font-bold titillium-web">Full-Stack Developer</span>
                        <div class="flex items-center justify-end">
                            <span class="text-sm sm:text-base md:text-md xl:text-lg titillium-web text-left">2023 - Present</span>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 transform transition-transform duration-300 ml-4"
                            class:rotate-180={activeIndex === 0}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                            </svg>
                        </div>
                    </div>
                </button>

                <div class={`overflow-hidden transition-all duration-700 ${activeIndex === 0 ? 'max-h-[500px]' : 'max-h-[0]'}`}>
                    <div class="px-7 py-6 bg-[#7fb5d6b5] text-white rounded-lg mt-4 mb-2 shadow-md border border-white/20">
                        
                        {#if isSmWidth}
                            <div class="flex flex-col gap-5 w-full">
                                <div class="flex items-center">
                                    <img src="/company/profiles.png" alt="profiles" class="w-[25%] p-1 h-auto bg-white rounded-lg object-cover drop-shadow-[3px_5px_2px_rgba(0,0,0,0.33)]"/>
                                    <div class="flex ml-4">
                                        <img src="/img/pin.png" alt="pin" class="bounce w-6 h-6 rounded mr-1 object-cover drop-shadow-[3px_5px_2px_rgba(0,0,0,0.33)]"/>
                                        <p class="titillium-web-bold text-base sm:text-md md:text-lg xl:text-xl !font-bold">Profiles Asia Pacific, Inc.</p>
                                    </div>
                                </div>

                                <div class="flex flex-col gap-5">
                                    <p class="flex titillium-web text-xs sm:text-sm md:text-sm xl:text-base">Engaged in full-stack development for a range of projects at Profiles Asia Pacific, Inc., delivering solutions on both the frontend and backend.</p>
                                    <div class="flex flex-wrap gap-2 w-full justify-start items-center">
                                        {#each profilesTools as item}
                                            <div class="px-3 py-1 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm shadow-sm">
                                                <p class="titillium-web text-xs sm:text-sm md:text-sm xl:text-base text-white/90 tracking-wide">{item}</p>
                                            </div>
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        {:else}
                            <div class="flex justify-between w-full">
                                <div class="w-[80%] md:w-[75%] lg:w-[80%] mr-4 md:mr-6 lg:mr-8">
                                    <div class="flex mb-5">
                                        <img src="/img/pin.png" alt="pin" class="bounce w-6 h-6 rounded mr-2 object-cover drop-shadow-[3px_5px_2px_rgba(0,0,0,0.33)]"/>
                                        <p class="titillium-web-bold text-base sm:text-md md:text-lg xl:text-xl !font-bold">Profiles Asia Pacific, Inc.</p>
                                    </div>

                                    <div class="flex flex-col gap-5">
                                        <p class="flex titillium-web text-xs sm:text-sm md:text-sm xl:text-base">Engaged in full-stack development for a range of projects at Profiles Asia Pacific, Inc., delivering solutions on both the frontend and backend.</p>
                                        <div class="flex flex-wrap gap-2 w-full justify-start items-center">
                                            {#each profilesTools as item}
                                                <div class="px-3 py-1 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm shadow-sm">
                                                    <p class="titillium-web text-xs sm:text-sm md:text-sm xl:text-base text-white/90 tracking-wide">{item}</p>
                                                </div>
                                            {/each}
                                        </div>
                                    </div>
                                </div>
                                <div class="w-[20%] md:w-[25%] lg:w-[20%] flex items-center">
                                    <img src="/company/profiles.png" alt="profiles" class="w-full p-1 h-auto bg-white rounded-lg object-cover drop-shadow-[3px_5px_2px_rgba(0,0,0,0.33)]"/>
                                </div>
                            </div>
                        {/if}

                    </div>
                </div>

                <!-- <div class={`overflow-hidden transition-all duration-700 ${activeIndex === 0 ? 'max-h-[500px]' : 'max-h-[0]'}`}>
                    <div class="px-7 py-6 bg-[#7fb5d6b5] text-white rounded-lg mt-4 mb-2 shadow-md border border-white/20">
                        <div class="flex justify-between w-full mb-5">
                            <div class="flex flex-col mr-4 md:mr-6 lg:mr-8">
                                <div class="flex mb-5">
                                    <img src="/img/pin.png" alt="pin" class="bounce w-7 h-7 rounded mr-2 object-cover drop-shadow-[3px_5px_2px_rgba(0,0,0,0.33)]"/>
                                    <p class="titillium-web-bold text-base sm:text-md md:text-lg xl:text-xl !font-bold">Profiles Asia Pacific, Inc.</p>
                                </div>
                                <p class="flex titillium-web">Engaged in full-stack development for a range of projects at Profiles Asia Pacific, Inc., delivering solutions on both the frontend and backend.</p>
                            </div>

                            <div class="flex-shrink-0">
                                <img src="/company/profiles.png" alt="profiles" class="w-72 sm:w-60 md:w-52 lg:w-52 xl:w-40 h-auto bg-white rounded-lg object-cover drop-shadow-[3px_5px_2px_rgba(0,0,0,0.33)]"/>
                            </div>
                        </div>

                        <div class="flex flex-wrap gap-2 w-full justify-start items-center">
                            {#each profilesTools as item}
                                <div class="px-3 py-1 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm shadow-sm">
                                    w-72 sm:w-60 md:w-52 lg:w-52 xl:w-40 h-auto
                                    <p class="titillium-web text-xs sm:text-sm md:text-sm xl:text-base text-white/80 tracking-wide">{item}</p>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div> -->
            </div>

            <!-- Index 1 -->
            <div class="py-1" transition:slide={{ duration: 400 }}>
                <button
                    class={`w-full text-left px-6 py-4 focus:outline-none rounded-lg text-white transition-colors duration-600 shadow-lg ${activeIndex === 1 ? 'bg-[#7fb5d6b5]' : 'bg-[#a4e6d685]'}`}
                    on:click={() => toggleAccordion(1)}
                >
                    <div class="flex items-center justify-between">
                        <span class="text-sm sm:text-base md:text-md xl:text-lg font-bold titillium-web">Software Developer</span>
                        <div class="flex items-center justify-end ">
                            <span class="text-sm sm:text-base md:text-md xl:text-lg titillium-web text-left">2021 - 2023</span>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 transform transition-transform duration-300 ml-4"
                            class:rotate-180={activeIndex === 1}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                            </svg>
                        </div>
                    </div>
                </button>

                <div class={`overflow-hidden transition-all duration-700 ${activeIndex === 1 ? 'max-h-[500px]' : 'max-h-[0]'}`}>
                    <div class="px-7 py-6 bg-[#7fb5d6b5] text-white rounded-lg mt-4 mb-2 shadow-md">

                        {#if isSmWidth}
                            <div class="flex flex-col gap-5 w-full">
                                <div class="flex items-center">
                                    <img src="/company/sjc.png" alt="sjc" class="w-[17%] h-auto rounded object-cover drop-shadow-[3px_5px_2px_rgba(0,0,0,0.33)]"/>
                                    <div class="flex ml-4">
                                        <img src="/img/pin.png" alt="pin" class="bounce w-6 h-6 rounded mr-1 object-cover drop-shadow-[3px_5px_2px_rgba(0,0,0,0.33)]"/>
                                        <p class="titillium-web-bold text-base sm:text-md md:text-lg xl:text-xl !font-bold">City Government of San Juan</p>
                                    </div>
                                </div>

                                <div class="flex flex-col gap-5">
                                    <p class="flex titillium-web text-xs sm:text-sm md:text-sm xl:text-base">Designed and developed LegITAS, a web-based Legislative Information Tracking and Administration System.</p>
                                    <div class="flex flex-wrap gap-2 w-full justify-start items-center">
                                        {#each sjcTools as item}
                                            <div class="px-3 py-1 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm shadow-sm">
                                                <p class="titillium-web text-xs sm:text-sm md:text-sm xl:text-base text-white/90 tracking-wide">{item}</p>
                                            </div>
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        {:else}
                            <div class="flex justify-between w-full">
                                <div class="w-[80%] mr-4 md:mr-6 lg:mr-8">
                                    <div class="flex mb-5">
                                        <img src="/img/pin.png" alt="pin" class="bounce w-6 h-6 rounded mr-2 object-cover drop-shadow-[3px_5px_2px_rgba(0,0,0,0.33)]"/>
                                        <p class="titillium-web-bold text-base sm:text-md md:text-lg xl:text-xl !font-bold">City Government of San Juan</p>
                                    </div>

                                    <div class="flex flex-col gap-5">
                                        <p class="flex titillium-web text-xs sm:text-sm md:text-sm xl:text-base">Designed and developed LegITAS, a web-based Legislative Information Tracking and Administration System.</p>
                                        <div class="flex flex-wrap gap-2 w-full justify-start items-center">
                                            {#each sjcTools as item}
                                                <div class="px-3 py-1 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm shadow-sm">
                                                    <p class="titillium-web text-xs sm:text-sm md:text-sm xl:text-base text-white/90 tracking-wide">{item}</p>
                                                </div>
                                            {/each}
                                        </div>
                                    </div>
                                </div>
                                <div class="w-[20%] flex items-center justify-end">
                                    <img src="/company/sjc.png" alt="sjc" class="w-[80%] h-auto rounded object-cover drop-shadow-[3px_5px_2px_rgba(0,0,0,0.33)]"/>
                                </div>
                            </div>
                        {/if}

                        <!-- <div class="flex justify-between w-full mb-5">

                            <div class="flex flex-col mr-4 md:mr-6 lg:mr-8">
                                <div class="flex mb-5">
                                    <img src="/img/pin.png" alt="pin" class="bounce w-7 h-7 rounded mr-2 object-cover drop-shadow-[3px_5px_2px_rgba(0,0,0,0.33)]"/>
                                    <p class="titillium-web-bold text-base sm:text-md md:text-lg xl:text-xl !font-bold">City Government of San Juan</p>
                                </div>
                                <p class="flex titillium-web">Designed and developed LegITAS, a web-based Legislative Information Tracking and Administration System.</p>
                                
                            </div>

                            <div class="">
                                <img src="/company/sjc.png" alt="sjc" class="w-80 sm:w-60 md:w-44 lg:w-40 xl:w-36 h-auto rounded object-cover drop-shadow-[3px_5px_2px_rgba(0,0,0,0.33)]"/>
                            </div>
                        </div>

                        <div class="flex flex-wrap gap-2 w-full justify-start items-center">
                            {#each sjcTools as item}
                                <div class="px-3 py-1 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm shadow-sm">
                                    <p class="titillium-web text-xs sm:text-sm md:text-sm xl:text-base text-white/80 tracking-wide">{item}</p>
                                </div>
                            {/each}
                        </div> -->
                    </div>
                </div>
            </div>

            <!-- Index 2 -->
            <div class="py-1" transition:slide={{ duration: 400 }}>
                <button
                    class={`w-full text-left px-6 py-4 focus:outline-none rounded-lg text-white transition-colors duration-600 shadow-lg ${activeIndex === 2 ? 'bg-[#7fb5d6b5]' : 'bg-[#a4e6d685]'}`}
                    on:click={() => toggleAccordion(2)}
                >
                    <div class="flex items-center justify-between">
                        <span class="text-sm sm:text-base md:text-md xl:text-lg font-bold titillium-web">Design Engineer (QA)</span>
                        <div class="flex items-center justify-end">
                            <span class="text-sm sm:text-base md:text-md xl:text-lg titillium-web text-left">2019 - 2021</span>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 transform transition-transform duration-300 ml-4"
                            class:rotate-180={activeIndex === 2}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                            </svg>
                        </div>
                    </div>
                </button>

                <div class={`overflow-hidden transition-all duration-700 ${activeIndex === 2 ? 'max-h-[500px]' : 'max-h-[0]'}`}>
                    <div class="px-7 py-6 bg-[#7fb5d6b5] text-white rounded-lg mt-4 mb-2 shadow-md border border-white/20">
                        
                        {#if isSmWidth}
                            <div class="flex flex-col gap-5 w-full">
                                <div class="flex items-center">
                                    <img src="/company/tsukiden2.png" alt="tsukiden2" class="p-2 w-[25%] h-auto bg-white rounded-lg object-cover drop-shadow-[3px_5px_2px_rgba(0,0,0,0.33)]"/>
                                    <div class="flex ml-4">
                                        <img src="/img/pin.png" alt="pin" class="bounce w-6 h-6 rounded mr-1 object-cover drop-shadow-[3px_5px_2px_rgba(0,0,0,0.33)]"/>
                                        <p class="titillium-web-bold text-base sm:text-md md:text-lg xl:text-xl !font-bold">Tsukiden Global Solutions, Inc.</p>
                                    </div>
                                </div>

                                <div class="flex flex-col gap-5">
                                    <p class="flex titillium-web text-xs sm:text-sm md:text-sm xl:text-base">Conducted C language code reviews and specification-based testing of automotive parts, ensuring adherence to technical standards and quality benchmarks.</p>
                                    
                                </div>
                            </div>
                        {:else}
                            <div class="flex justify-between w-full">
                                <div class="w-[80%] mr-4 md:mr-6 lg:mr-8">
                                    <div class="flex mb-5">
                                        <img src="/img/pin.png" alt="pin" class="bounce w-6 h-6 rounded mr-2 object-cover drop-shadow-[3px_5px_2px_rgba(0,0,0,0.33)]"/>
                                        <p class="titillium-web-bold text-base sm:text-md md:text-lg xl:text-xl !font-bold">Tsukiden Global Solutions, Inc.</p>
                                    </div>

                                    <div class="flex flex-col gap-5">
                                        <p class="flex titillium-web text-xs sm:text-sm md:text-sm xl:text-base">Conducted C language code reviews and specification-based testing of automotive parts, ensuring adherence to technical standards and quality benchmarks.</p>
                                    </div>
                                </div>
                                <div class="w-[20%] flex items-center">
                                    <!-- w-72 sm:w-60 md:w-52 lg:w-52 xl:w-40 h-auto -->
                                    <img src="/company/tsukiden2.png" alt="tsukiden2" class="p-2 w-full h-auto bg-white rounded-lg object-cover drop-shadow-[3px_5px_2px_rgba(0,0,0,0.33)]"/>
                                </div>
                            </div>
                        {/if}

                        <!-- <div class="flex justify-between w-full">

                            <div class="flex flex-col mr-4 md:mr-6 lg:mr-8">
                                <div class="flex mb-5">
                                    <img src="/img/pin.png" alt="pin" class="bounce w-7 h-7 rounded mr-2 object-cover drop-shadow-[3px_5px_2px_rgba(0,0,0,0.33)]"/>
                                    <p class="titillium-web-bold text-base sm:text-md md:text-lg xl:text-xl !font-bold">Tsukiden Global Solutions, Inc.</p>
                                </div>
                                <p class="flex titillium-web">Performed C language code analysis and conducted specification testing of automotive parts to ensure compliance with technical standards and quality requirements.</p>
                                
                            </div>

                            <div class="">
                                <img src="/company/tsukiden2.png" alt="tsukiden" class="p-2 w-96 sm:w-96 md:w-80 lg:w-72 xl:w-60 h-auto bg-white rounded-lg object-cover drop-shadow-[3px_5px_2px_rgba(0,0,0,0.33)]"/>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
    .bounce {
        animation: bounce 2s infinite;
    }

    @keyframes bounce {
        0% {
            transform: translateY(0) scaleY(1);
            animation-timing-function: ease-in;
        }
        30% {
            transform: translateY(0) scaleY(0.8);
        }
        45% {
            transform: translateY(-15px) scaleY(1);
            animation-timing-function: ease-out;
        }
        50% {
            transform: translateY(0) scaleY(0.9);
            animation-timing-function: ease-in;
        }
        55% {
            transform: translateY(-8px) scaleY(1);
            animation-timing-function: ease-out;
        }
        65% {
            transform: translateY(0) scaleY(0.98);
        }
        100% {
            transform: translateY(0) scaleY(1);
        }
    }
</style>