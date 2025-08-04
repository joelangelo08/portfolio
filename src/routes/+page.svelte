<script>
    import { onMount, onDestroy, tick } from 'svelte';
    import First from "$lib/components/First.svelte";
    import Second from "$lib/components/Second.svelte";
    import Third from "$lib/components/Third.svelte";
	import Fourth from "$lib/components/Fourth.svelte";
    import Fifth from "$lib/components/Fifth.svelte";
    
    let menu = ['ABOUT', 'SKILLS', 'PROJECTS', 'EXPERIENCE', 'CONTACTS'];
    let svg = [
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user w-4 h-4" __v0_r="0,5723,5732"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award w-4 h-4"><circle cx="12" cy="8" r="6"></circle><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-2.682-2.652L12 18.85l-1.5.383-2.682 2.652a.5.5 0 0 1-.81-.47l1.515-8.526"></path></svg></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code w-4 h-4" __v0_r="0,5723,5732"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase w-4 h-4" __v0_r="0,5723,5732"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle w-4 h-4" __v0_r="0,5723,5732"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>'
    ];

    let cursor;
    let firstSection;
    let secondSection;
    let thirdSection;
    let fourthSection;
    let fifthSection;

    let currentSection = 0;
    let isScrolled = false;

    let lastScrollY = 0;
	let scrollDirection = 'up';

    $: sectionRefs = [firstSection, secondSection, thirdSection, fourthSection, fifthSection];

    function scrollToSection(index) {
        sectionRefs[index]?.scrollIntoView({ behavior: 'smooth' });
    }

    let isScrolling = false;
	let hideTimer;
    let scrollArea;
    let customScrollbar;

    async function functionScrollbar() {
        
        await tick();
        isScrolling = true;
        const contentHeight = scrollArea.scrollHeight;
        const visibleHeight = scrollArea.clientHeight;
        const scrollTop = scrollArea.scrollTop;

        const scrollbarHeight = Math.max((visibleHeight / contentHeight) * visibleHeight, 20);
        const scrollbarTop = (scrollTop / contentHeight) * visibleHeight;

        customScrollbar.style.height = `${scrollbarHeight}px`;
        customScrollbar.style.transform = `translateY(${scrollbarTop}px)`;

        const currentY = scrollTop;
        if (currentY > lastScrollY && currentY > 200) {
            // scrolling down
            scrollDirection = 'down';
            isScrolled = true;
        } else if (currentY < lastScrollY && currentY < 200) {
            // scrolling up
            scrollDirection = 'up';
            isScrolled = false;
        }
        lastScrollY = currentY <= 0 ? 0 : currentY;

        clearTimeout(hideTimer);
        hideTimer = setTimeout(() => {
            isScrolling = false;
        }, 1000);
    }

    let isLessThanLgWidth = false;
    function updateWidth() {
		isLessThanLgWidth = window.innerWidth < 1024;
	}

    onMount(async () => {
        await tick();

        updateWidth();
		window.addEventListener('resize', updateWidth);

        const observerOptions = {
            root: scrollArea,
            threshold: 0.2
        };
        sectionRefs.forEach((section, index) => {
            if (!section) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        currentSection = index;
                    }
                },
                observerOptions
            );
            observer.observe(section);
        });

        scrollArea.addEventListener('scroll', functionScrollbar);
		window.addEventListener('resize', functionScrollbar);

        window.addEventListener("mousemove", (e) => {
            cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
        });

        const hoverTargets = document.querySelectorAll('a, button, .hover-target');
        hoverTargets.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
        });

        return () => {
			window.removeEventListener('resize', updateWidth);
		};
    });
</script>

{#if isLessThanLgWidth}
    <div class={`fixed top-0 w-full backdrop-blur-md z-50 border-b border-white/10 transition-all duration-500 ${isScrolled ? 'min-h-12 py-1 bg-[#441b7799]' : 'min-h-16 sm:h-20 pt-4 pb-2 sm:py-4 bg-[#441b774d]'}`}>
        <div class={`flex flex-wrap justify-center items-center px-4 sm:px-6 md:px-8 h-full transition-all duration-500 gap-3 md:gap-5 ${isScrolled ? 'py-2' : 'py-0'}`}>
            {#each menu as item, index}
                <button
                    class={`min-w-max text-center group px-1 sm:px-3 py-2 rounded-md text-white/80 text-xs sm:text-sm md:text-base 
                        transition-colors duration-500 ease-in-out
                        ${
                            currentSection === index
                                ? 'bg-white/20'
                                : 'hover:bg-white/10'
                        }`}
                    on:click={() => scrollToSection(index)}
                >
                    <div class={`flex transition-all duration-300 ${isScrolled ? 'justify-center items-center' : 'justify-center items-center gap-1 sm:gap-2'}`}>
                        <span class="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 mr-1 sm:mr-0">{@html svg[index]}</span>
                        <p class={`titillium-web font-bold text-xs sm:text-sm md:text-base transition-all duration-800 ease-in-out
                            transform origin-left
                            ${isScrolled
                                ? 'opacity-0 scale-0 max-w-0 overflow-hidden group-hover:opacity-100 group-hover:scale-100 group-hover:min-w-max group-hover:ml-2'
                                : 'opacity-100 scale-100 inline-block mr-1'
                            }`}>
                            {item}
                        </p>
                    </div>
                </button>
            {/each}
        </div>
    </div>
{:else}
    <div class={`fixed top-0 w-full backdrop-blur-md z-50 border-b border-white/10 transition-all duration-500 ${isScrolled ? 'h-auto py-2 bg-[#441b7799]' : 'h-auto sm:h-20 py-4 sm:py-4 bg-[#441b774d]'}`}>
        <div class={`flex justify-between items-center px-4 sm:px-6 md:px-8 py-2 h-full transition-all duration-500`}>
            <!-- Logo or Title -->
            <p class={`text-white/80 titillium-web font-bold transition-all duration-500 ${isScrolled ? 'opacity-0 w-0 overflow-hidden' : 'text-sm sm:text-base md:text-lg lg:text-xl truncate'}`}>
                Joel.Milañez_
            </p>

            <!-- Menu Buttons -->
            <div class={`transition-all duration-500 absolute top-1/2 -translate-y-1/2
                ${isScrolled
                    ? 'left-1/2 -translate-x-1/2 flex items-center gap-1 sm:gap-2 w-fit'
                    : 'right-4 flex items-center gap-1 sm:gap-2'}`}>
                {#each menu as item, index}
                    <button
                        class={`min-w-max text-center group px-1 sm:px-3 py-2 rounded-md text-white/80 text-xs sm:text-sm md:text-base 
                            transition-colors duration-500 ease-in-out
                            ${
                                currentSection === index
                                    ? 'bg-white/20'
                                    : 'hover:bg-white/10'
                            }`}
                        on:click={() => scrollToSection(index)}
                    >
                        <div class={`flex transition-all duration-300 ${isScrolled ? 'justify-center items-center' : 'items-center gap-1 sm:gap-2'}`}>
                            <span class="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0">{@html svg[index]}</span>
                            <p class={`titillium-web font-bold text-xs sm:text-sm md:text-base transition-all duration-800 ease-in-out
                                transform origin-left
                                ${isScrolled
                                    ? 'opacity-0 scale-0 max-w-0 overflow-hidden group-hover:opacity-100 group-hover:scale-100 group-hover:min-w-max group-hover:ml-2'
                                    : 'opacity-100 scale-100 inline-block ml-1 md:ml-0'
                                }`}>
                                {item}
                            </p>
                        </div>
                    </button>
                {/each}
            </div>
        </div>
    </div>
{/if}
    



<div id="app">
    <div class="scroll-content" bind:this={scrollArea}>
        <!-- py-8 md:py-16 -->
        <div bind:this={firstSection} class="bg-first w-full min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 pt-36 sm:pt-28 md:pt-20 lg:pt-0">
            <First />
        </div>

        <div bind:this={secondSection} class="bg-gradient-to-br from-[#166081] to-[#6a4b94] w-full min-h-screen px-16 sm:px-28 md:px-20 lg:px-40 xl:px-64 pt-8 pb-16">
            <Second />
        </div>

        <div bind:this={thirdSection} class="bg-third w-full min-h-screen px-10 sm:px-20 md:px-20 lg:px-14 xl:px-40 py-8 md:py-16">
            <Third />
        </div>

        <div bind:this={fourthSection} class="bg-fourth w-full px-5 sm:px-5 md:px-20 lg:px-40 py-8 md:py-16 pb-20 min-h-[100vh] flex flex-col justify-center">
            <Fourth />
        </div>

        <div bind:this={fifthSection} class="bg-fifth w-full px-14 sm:px-10 md:px-10 lg:px-24 py-8 min-h-[60vh]">
            <Fifth />
        </div>

        <div class="relative z-[100]">
        <footer class="bg-footer py-4 px-4 sm:px-6 md:px-8 border-t border-white/20">
            <div class="max-w-6xl mx-auto text-center">
                <p class="text-white/60 font-bold titillium-web text-xs sm:text-sm md:text-base">
                    © 2025 Joel Angelo T. Milañez. Built using Svelte and Tailwind CSS.
                </p>
            </div>
        </footer>
        </div>
    </div>
    <div class={`custom-scrollbar ${isScrolling ? 'show' : ''}`} bind:this={customScrollbar}></div>
</div>
<div bind:this={cursor} class="custom-cursor"></div>

<style>
    /* .tooltip {
      background-color: black;
      color: white;
      padding: 5px;
      border-radius: 3px;
      font-size: 14px;
    } */

    .bg-nav {
        background: linear-gradient(to right, rgba(35, 28, 117, 0.3), rgba(119, 91, 159, 0.3));
    }

    /* .bg-first {
        background: radial-gradient(circle, rgb(96 93 128), rgb(25 17 124 / 73%));
    } */

    .bg-first {
        background: linear-gradient(to right, rgb(33 28 115 / 63%), rgb(55 79 130));
    }

    .bg-second {
        background: red;
    }

    .bg-third {
        background: rgb(72 68 136 / 73%);
    }

    .bg-fourth {
        background: rgb(105 68 159);
    }
    
    .bg-fifth {
        background: linear-gradient(to right, rgb(35 28 117), rgb(119 91 159));
    }

    .bg-footer {
        background: rgb(25 17 124 / 73%);
    }

    #app {
        position: relative;
        height: 100vh;
        overflow: hidden;
    }

    .scroll-content {
        height: 100vh;
        overflow-y: scroll;
        box-sizing: content-box;
        scrollbar-width: none; /* Firefox */
    }
    .scroll-content::-webkit-scrollbar {
        display: none; /* Chrome, Safari */
    }

    .custom-scrollbar {
        height: 100px;
        position: absolute;
        z-index: 9;
        top: 0;
        right: -10px;
        width: 8px;
        background-color: #b5fcff;
        border-radius: 10px;
        transition: right 0.5s ease;
        pointer-events: none;
    }

    .show {
        right: 6px;
    }
  </style>