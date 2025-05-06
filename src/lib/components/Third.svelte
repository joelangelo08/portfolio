<script>
    let profilesTools = ['Svelte', 'Laravel','Yii','My SQL','Javascript','jQuery','Tailwind CSS',' Bootstrap']
    let sjcTools = ['Laravel','MS SQL','jQuery','Bootstrap','CSS'];

    let activeIndex = null;
    function toggleAccordion(index) {
    activeIndex = activeIndex === index ? null : index;
    }
</script>

<div class="flex flex-col justify-center items-center mt-16 h-full">
    <h1 class="titillium-web-bold text-5xl text-center mb-12 text-white">Professional<br>Experience</h1>

    <div class="w-2/3">

        <!-- Index 0 -->
        <div class="py-1">
            <button
                class={`w-full text-left px-6 py-4 focus:outline-none rounded-lg text-white transition-colors duration-600 shadow-md ${activeIndex === 0 ? 'bg-[#833f23]' : 'bg-[#56382D]'}`}
                on:click={() => toggleAccordion(0)}
            >
              <div class="flex items-center justify-between">
                <span class="text-lg font-bold w-[75%] titillium-web">Full-Stack Developer</span>
                <div class="flex items-center justify-end w-[25%]">
                    <span class="text-lg titillium-web text-right mr-8">2023 - Present</span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 transform transition-transform duration-300"
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
                <div class="px-7 py-6 bg-[#3a170a] text-white rounded-lg mt-4 mb-2 shadow-md">
                    <div class="flex items-center justify-between w-full">

                        <div class="flex flex-col w-[80%] mr-12">
                            <div class="flex mb-5">
                                <img src="/img/pin.png" alt="pin" class="flip w-7 h-7 rounded mr-3"/>
                                <p class="titillium-web-bold text-xl !font-bold">Profiles Asia Pacific, Inc.</p>
                            </div>
                            <p class="flex titillium-web mb-5">Involved in almost all projects inside Profiles Asia Pacific, Inc. Doing both frontend and backend.</p>
                            <div class="flex">
                                <p class="titillium-web mr-3 py-1">Tools:</p>
                                <div class="flex flex-wrap gap-2 w-full justify-start items-center">
                                    
                                    {#each profilesTools as item}
                                        <div class="px-3 py-1 rounded-3xl bg-[#c07758] border border-[#eae1dd]">
                                            <p class="titillium-web text-[#eae1dd]">{item}</p>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                        </div>

                        <div class="bg-white w-[20%] rounded">
                            <img src="/company/profiles.png" alt="profiles" class="w-full h-auto"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Index 1 -->
        <div class="py-1">
            <button
                class={`w-full text-left px-6 py-4 focus:outline-none rounded-lg text-white transition-colors duration-600 shadow-md ${activeIndex === 1 ? 'bg-[#833f23]' : 'bg-[#56382D]'}`}
                on:click={() => toggleAccordion(1)}
            >
              <div class="flex items-center justify-between">
                <span class="text-lg font-bold w-[75%] titillium-web">Software Developer</span>
                <div class="flex items-center justify-end w-[25%]">
                    <span class="text-lg titillium-web text-right mr-8">2021 - 2023</span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 transform transition-transform duration-300"
                    class:rotate-180={activeIndex === 1}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </div>
            </button>

            <div class={`overflow-hidden transition-all duration-700 ${activeIndex === 1 ? 'max-h-[500px]' : 'max-h-[0]'}`}>
                <div class="px-7 py-6 bg-[#3a170a] text-white rounded-lg mt-4 mb-2 shadow-md">
                    <div class="flex items-center justify-between w-full">

                        <div class="flex flex-col w-[80%] mr-12">
                            <div class="flex mb-5">
                                <img src="/img/pin.png" alt="pin" class="flip w-7 h-7 rounded mr-3"/>
                                <p class="titillium-web-bold text-xl !font-bold">City Government of San Juan</p>
                            </div>
                            <p class="flex titillium-web mb-5">Developed a web-based software called LegITAS (Legislative Information Tracking and Administration
                                System) using Laravel and MS SQL.</p>
                            <div class="flex">
                                <p class="titillium-web mr-3 py-1">Tools:</p>
                                <div class="flex flex-wrap gap-2 w-full justify-start items-center mr-20">
                                    {#each sjcTools as item}
                                        <div class="px-3 py-1 rounded-3xl bg-[#c07758] border border-[#eae1dd]">
                                            <p class="titillium-web text-[#eae1dd]">{item}</p>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                        </div>

                        <div class="w-[20%]">
                            <img src="/company/sjc.png" alt="sjc" class="w-full h-auto rounded"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Index 2 -->
        <div class="py-1">
            <button
                class={`w-full text-left px-6 py-4 focus:outline-none rounded-lg text-white transition-colors duration-600 ${activeIndex === 2 ? 'bg-[#833f23]' : 'bg-[#56382D]'}`}
                on:click={() => toggleAccordion(2)}
            >
              <div class="flex items-center justify-between">
                <span class="text-lg font-bold w-[75%] titillium-web">Design Engineer (QA)</span>
                <div class="flex items-center justify-end w-[25%]">
                    <span class="text-lg titillium-web text-right mr-8">2019 - 2021</span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 transform transition-transform duration-300"
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
                <div class="flex items-center justify-between px-6 py-5 bg-[#3a170a] text-white rounded-lg mt-4 mb-2 shadow-md">
                    <p class="titillium-web mr-20">Developed a web-based software called LegITAS (Legislative Information Tracking and Administration
                        System) using Laravel and MS SQL.</p>
                    <img src="/company/tsukiden.png" alt="tsukiden" class="w-[20%] h-auto rounded"/>
                </div>
            </div>
        </div>


    </div>
</div>

<style>
    .flip {
        animation-name: flip;
        animation-duration: 4s;
        animation-iteration-count: infinite; 
    }

    @keyframes flip {
        0% { transform: scaleX(1); }
        25% { transform: scaleX(-1); }
        50% { transform: scaleX(1); }
        75% { transform: scaleX(-1); }
        100% { transform: scaleX(1); }
    }
</style>