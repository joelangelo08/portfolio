<script>
    import { tooltip } from '$lib/tooltip.js';
    import { onMount } from "svelte";
    import 'animate.css';

    let legitasTools = ['Laravel','MS SQL','jQuery','Bootstrap','CSS'];
    let testCreatorTools = ['Laravel','My SQL','Svelte','Javascript','Tailwind CSS', 'Postman'];
    let flow360Tools = ['Yii','My SQL','jQuery','Bootstrap','CSS'];
    let maapTools = ['PHP','My SQL','jQuery','Bootstrap','CSS'];
    let portalTools = ['Yii','My SQL','jQuery','Bootstrap','CSS'];
    let acTools = ['Yii','My SQL','jQuery','Bootstrap','CSS'];
    let landbankTools = ['Yii','My SQL','jQuery','Bootstrap','CSS'];
    let acIntlTools = ['Yii','My SQL','jQuery','Bootstrap','CSS'];
    let mindwellTools = ['Laravel','My SQL','Svelte','Javascript','Tailwind CSS', 'Postman'];
    // let tools = ['','','','',''];
    
    function animateOnScroll(node, options = {}) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('animate__animated', 'animate__fadeInUp', 'visible');
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

<div class="flex flex-wrap mt-5 -mx-2">
    <div class="w-1/3 p-4 h-full group mt-20 duration-100 invisible" use:animateOnScroll>
        <div class="flex flex-col h-full bg-white shadow-xl rounded-lg overflow-visible group-hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <div class="p-5 bg-[#2B4257] rounded-t-lg">
                <img src="/img/website.png" alt="website" class="w-full h-auto rounded-lg delay-200 hover:scale-105 transition-all duration-300 ease-in-out"/>
            </div>
            <div class="p-4 pb-6">
                <p class="titillium-web-bold text-[#226160] text-xl text-center">LegITAS</p>
                <p class="titillium-web text-md mt-2 mb-3">Tools:</p>
                <div class="flex flex-wrap gap-5 w-full justify-center">
                    {#each legitasTools as item}
                        <img src="/tools/{item}.png" alt="{item}"
                        class="w-auto h-10 rounded hover:-translate-y-1 hover:translate-x-2 hover:rotate-2 transition-all duration-300 ease-in-out drop-shadow-[4px_8px_4px_rgba(0,0,0,0.33)]"
                        title="{item}" use:tooltip
                        >
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <div class="w-2/3 p-4 h-full group duration-100 invisible" use:animateOnScroll>
        <div class="flex flex-col h-full bg-white shadow-xl rounded-lg overflow-visible group-hover:-translate-x-4 transition-all duration-300 ease-in-out">
            <div class="p-5 bg-[#2B4257] rounded-t-lg">
                <img src="/img/website.png" alt="website" class="w-full h-auto rounded-lg delay-200 hover:-translate-y-2 hover:translate-x-14 hover:rotate-6 transition-all duration-300 ease-in-out"/>
            </div>
            <div class="p-4 pb-6">
                <p class="titillium-web-bold text-[#226160] text-xl text-center">Test Creator</p>
                <p class="titillium-web text-md mt-2 mb-3">Tools:</p>
                <div class="flex flex-wrap gap-5 w-full justify-center">
                    {#each testCreatorTools as item}
                        <img src="/tools/{item}.png" alt="{item}"
                        class="w-auto h-10 rounded hover:-translate-y-1 hover:translate-x-2 hover:rotate-2 transition-all duration-300 ease-in-out drop-shadow-[4px_8px_4px_rgba(0,0,0,0.33)]"
                        title="{item}" use:tooltip
                        >
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <div class="w-2/3 p-4 h-full group mt-16 duration-100 invisible" use:animateOnScroll>
        <div class="flex flex-col h-full bg-white shadow-xl rounded-lg overflow-visible group-hover:-translate-x-7 transition-all duration-300 ease-in-out">
            <div class="p-5 bg-[#2B4257] rounded-t-lg">
                <img src="/img/website.png" alt="website" class="w-full h-auto rounded-lg delay-150 hover:translate-y-3 hover:translate-x-10 hover:-rotate-2 hover:scale-105 transition-all duration-300 ease-in-out"/>
            </div>
            <div class="p-4 pb-6">
                <p class="titillium-web-bold text-[#226160] text-xl">Mindwell App</p>
                <p class="titillium-web text-md mt-2 mb-3">Tools:</p>
                <div class="flex flex-wrap gap-5 w-full justify-center">
                    {#each mindwellTools as item}
                        <img src="/tools/{item}.png" alt="{item}"
                        class="w-auto h-10 rounded hover:-translate-y-1 hover:translate-x-2 hover:rotate-2 transition-all duration-300 ease-in-out drop-shadow-[4px_8px_4px_rgba(0,0,0,0.33)]"
                        title="{item}" use:tooltip
                        >
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <div class="w-1/3 p-4 h-full mt-2">
        <div class="group duration-100 invisible" use:animateOnScroll>
            <div class="flex flex-col h-full bg-white shadow-xl rounded-lg overflow-visible group-hover:translate-y-2 group-hover:-translate-x-2 transition-all duration-300 ease-in-out">
                <div class="p-5 bg-[#2B4257] rounded-t-lg">
                    <img src="/img/website.png" alt="website" class="w-full h-auto rounded-lg delay-150 hover:-translate-y-6 hover:translate-x-6 hover:scale-110 transition-all duration-300 ease-in-out"/>
                </div>
                <div class="p-4 pb-6">
                    <p class="titillium-web-bold text-[#226160] text-xl text-center">Flow 360</p>
                    <p class="titillium-web text-md mt-2 mb-3">Tools:</p>
                    <div class="flex flex-wrap gap-5 w-full justify-center">
                        {#each flow360Tools as item}
                            <img src="/tools/{item}.png" alt="{item}"
                            class="w-auto h-10 rounded hover:-translate-y-1 hover:translate-x-2 hover:rotate-2 transition-all duration-300 ease-in-out drop-shadow-[4px_8px_4px_rgba(0,0,0,0.33)]"
                            title="{item}" use:tooltip
                            >
                        {/each}
                    </div>
                </div>
            </div>
        </div>
        <div class="group duration-100 invisible" use:animateOnScroll>
            <div class="flex flex-col h-full mt-20 bg-white shadow-xl rounded-lg overflow-visible group-hover:-translate-x-4 transition-all duration-300 ease-in-out">
                <div class="p-5 bg-[#2B4257] rounded-t-lg">
                    <img src="/img/website.png" alt="website" class="w-full h-auto rounded-lg delay-150 hover:translate-x-10 hover:scale-110 transition-all duration-300 ease-in-out"/>
                </div>
                <div class="p-4 pb-6">
                    <p class="titillium-web-bold text-[#226160] text-xl">Landbank AC</p>
                    <p class="titillium-web text-md mt-2 mb-3">Tools:</p>
                    <div class="flex flex-wrap gap-5 w-full justify-center">
                        {#each landbankTools as item}
                            <img src="/tools/{item}.png" alt="{item}"
                            class="w-auto h-10 rounded hover:-translate-y-1 hover:translate-x-2 hover:rotate-2 transition-all duration-300 ease-in-out drop-shadow-[4px_8px_4px_rgba(0,0,0,0.33)]"
                            title="{item}" use:tooltip
                            >
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-2/3 p-4 h-full group -mt-24 duration-100 invisible" use:animateOnScroll>
        <div class="flex flex-col h-full bg-white shadow-xl rounded-lg overflow-visible group-hover:-translate-y-4 transition-all duration-300 ease-in-out">
            <div class="p-5 bg-[#2B4257] rounded-t-lg">
                <img src="/img/website.png" alt="website" class="w-full h-auto rounded-lg delay-150 hover:-rotate-2 hover:scale-110 transition-all duration-300 ease-in-out"/>
            </div>
            <div class="p-4 pb-6">
                <p class="titillium-web-bold text-[#226160] text-xl">AC (ASSESSMENT CENTER)</p>
                <p class="titillium-web text-md mt-2 mb-3">Tools:</p>
                <div class="flex flex-wrap gap-5 w-full justify-center">
                    {#each landbankTools as item}
                        <img src="/tools/{item}.png" alt="{item}"
                        class="w-auto h-10 rounded hover:-translate-y-1 hover:translate-x-2 hover:rotate-2 transition-all duration-300 ease-in-out drop-shadow-[4px_8px_4px_rgba(0,0,0,0.33)]"
                        title="{item}" use:tooltip
                        >
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <div class="w-1/3 p-4 h-full group mt-4 duration-100 invisible" use:animateOnScroll>
        <div class="flex flex-col h-full bg-white shadow-xl rounded-lg overflow-visible group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-300 ease-in-out">
            <div class="p-5 bg-[#2B4257] rounded-t-lg">
                <img src="/img/website.png" alt="website" class="w-full h-auto rounded-lg delay-150 hover:translate-y-4 hover:translate-x-6 hover:scale-105 transition-all duration-300 ease-in-out"/>
            </div>
            <div class="p-4 pb-6">
                <p class="titillium-web-bold text-[#226160] text-xl">AC INTERNATIONAL</p>
                <p class="titillium-web text-md mt-2 mb-3">Tools:</p>
                <div class="flex flex-wrap gap-5 w-full justify-center">
                    {#each acIntlTools as item}
                        <img src="/tools/{item}.png" alt="{item}"
                        class="w-auto h-10 rounded hover:-translate-y-1 hover:translate-x-2 hover:rotate-2 transition-all duration-300 ease-in-out drop-shadow-[4px_8px_4px_rgba(0,0,0,0.33)]"
                        title="{item}" use:tooltip
                        >
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <div class="w-2/4 p-4 h-full group mt-24 duration-100 invisible" use:animateOnScroll>
        <div class="flex flex-col h-full bg-white shadow-xl rounded-lg overflow-visible group-hover:translate-y-2 transition-all duration-300 ease-in-out">
            <div class="p-5 bg-[#2B4257] rounded-t-lg">
                <img src="/img/website.png" alt="website" class="w-full h-auto rounded-lg delay-150 hover:-translate-y-6 hover:scale-110 transition-all duration-300 ease-in-out"/>
            </div>
            <div class="p-4 pb-6">
                <p class="titillium-web-bold text-[#226160] text-xl text-center">MAAP Info Sys</p>
                <p class="titillium-web text-md mt-2 mb-3">Tools:</p>
                <div class="flex flex-wrap gap-5 w-full justify-center">
                    {#each maapTools as item}
                        <img src="/tools/{item}.png" alt="{item}"
                        class="w-auto h-10 rounded hover:-translate-y-1 hover:translate-x-2 hover:rotate-2 transition-all duration-300 ease-in-out drop-shadow-[4px_8px_4px_rgba(0,0,0,0.33)]"
                        title="{item}" use:tooltip
                        >
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <div class="w-2/4 p-4 h-full group mt-4 duration-100 invisible" use:animateOnScroll>
        <div class="flex flex-col h-full bg-white shadow-xl rounded-lg overflow-visible group-hover:translate-x-4 transition-all duration-300 ease-in-out">
            <div class="p-5 bg-[#2B4257] rounded-t-lg">
                <img src="/img/website.png" alt="website" class="w-full h-auto rounded-lg delay-150 hover:-translate-x-8 hover:scale-105 transition-all duration-300 ease-in-out"/>
            </div>
            <div class="p-4 pb-6">
                <p class="titillium-web-bold text-[#226160] text-xl">Discflow Portal</p>
                <p class="titillium-web text-md mt-2 mb-3">Tools:</p>
                <div class="flex flex-wrap gap-5 w-full justify-center">
                    {#each portalTools as item}
                        <img src="/tools/{item}.png" alt="{item}"
                        class="w-auto h-10 rounded hover:-translate-y-1 hover:translate-x-2 hover:rotate-2 transition-all duration-300 ease-in-out drop-shadow-[4px_8px_4px_rgba(0,0,0,0.33)]"
                        title="{item}" use:tooltip
                        >
                    {/each}
                </div>
            </div>
        </div>
    </div>
    
</div>

<style>

</style>