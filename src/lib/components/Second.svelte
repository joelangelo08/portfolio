<script>
    import { tooltip } from '$lib/tooltip.js';
    import { onMount, onDestroy } from "svelte";
    import 'animate.css';
    
    let skills = [
        { title: 'Backend', tools: ['PHP', 'Laravel', 'Yii'] },
        { title: 'Frontend', tools: ['Svelte', 'Javascript', 'jQuery', 'Tailwind CSS', 'Bootstrap2', 'CSS'] },
        { title: 'Database', tools: ['My SQL', 'MS SQL'] },
        { title: 'Others', tools: ['Postman', 'Github'] }
    ];

    function animateOnScroll(node, options = {}) {
        const delay = node.dataset.delay || '0s';
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        node.style.setProperty('--animate-delay', delay);
                        node.classList.remove('invisible', 'animate__fadeOutDown');
                        node.classList.add('animate__animated', 'animate__zoomIn', 'visible');
                    } else {
                        // node.classList.remove('animate__fadeInUp');
                        // node.classList.add('animate__animated', 'animate__fadeOutDown');
                    }
                });
            },
            {
                threshold: options.threshold || 0.2,
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

<h1 class="titillium-web-bold text-4xl sm:text-5xl lg:text-6xl text-center mt-8 mb-12 text-white">Skills</h1>
    <div class="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {#each skills as skill, index (skill.title)}
            <div
                class="h-full group invisible hover:scale-[1.02] transform transition-all duration-300 ease-out"
                use:animateOnScroll
                data-delay="0.3s"
            >
                <div
                    class="flex flex-col gap-7 h-full py-6 px-6 bg-white/25 backdrop-blur-lg rounded-xl shadow-2xl border border-white/25 transition duration-300 group-hover:shadow-[0_10px_25px_rgba(255,255,255,0.25)]"
                >
                    <p class="titillium-web text-white text-2xl sm:text-3xl font-semibold tracking-wide text-center">
                        {skill.title}
                    </p>
                    <div class="flex flex-wrap gap-5 justify-center items-center">
                        {#each skill.tools as item}
                            <img
                                src={`/tools/${item}.png`}
                                alt={item}
                                class="w-auto h-8 sm:h-9 md:h-10 lg:h-11 rounded hover:scale-110 transition-all duration-300 drop-shadow-[4px_8px_4px_rgba(0,0,0,0.3)]"
                                title={item}
                                use:tooltip
                            />
                        {/each}
                    </div>
                </div>
            </div>
        {/each}
    </div>

<style>
    .animate__animated {
        --animate-duration: 0.8s;
    }
</style>