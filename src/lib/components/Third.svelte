<script>
    import { tooltip } from '$lib/tooltip.js';
    import { onMount, onDestroy } from "svelte";
    import emblaCarouselSvelte from 'embla-carousel-svelte';
    import { setupTweenParallax } from '$lib/parallax.js';
    // import { setupTweenOpacity } from '$lib/opacity.js'
    import 'animate.css';
    
    let cleanupFns = {};
    let options = { loop: false }

    let emblaApis = {};
	let selectedIndexes = {};
	let slideCounts = {};
	function onInit(event, projectTitle) {
		const api = event.detail;
		emblaApis[projectTitle] = api;
		slideCounts[projectTitle] = api.slideNodes().length;
		selectedIndexes[projectTitle] = api.selectedScrollSnap();

		api.on('select', () => {
			selectedIndexes[projectTitle] = api.selectedScrollSnap();
		});

        // Parallax
        cleanupFns[projectTitle] = setupTweenParallax(api);

        // Opacity
        // cleanupFns[projectTitle] = setupTweenOpacity(api)
	}

    // let websites = [
    //     {name: 'Test Creator', website: ''},
    //     {name: 'Mindwell', website: 'https://elevateminds.emovation.ph/candidate/login'},
    //     {name: 'AC', website: 'https://peopledynamics.live/app/administrator/site/login'},
    //     {name: 'Go Pick', website: ''},
    //     {name: 'Discflow Portal', website: ''},
    //     {name: 'Discflow', website: 'https://discflow.org/?candidates'},
    //     {name: 'Flow 360', website: 'https://threesixty.discflow.org/candidate/'}
    // ]

    // let legitasTools = ['Laravel','MS SQL','jQuery','Bootstrap','CSS'];
    let testCreatorTools = ['Laravel','My SQL','Svelte','Javascript','Tailwind CSS', 'Postman'];
    let mindwellTools = ['Laravel','My SQL','Svelte','Javascript','Tailwind CSS', 'Postman'];
    let acTools = ['Yii','My SQL','jQuery','Bootstrap','CSS'];
    let goPickTools = ['Yii','My SQL','jQuery','Bootstrap','CSS'];
    let portalTools = ['Yii','My SQL','jQuery','Bootstrap','CSS'];
    let discflowTools = ['PHP','My SQL','jQuery','Bootstrap','CSS'];
    let flow360Tools = ['Yii','My SQL','jQuery','Bootstrap','CSS'];
    

    function animateOnScroll(node, options = {}) {
        const delay = node.dataset.delay || '0s';
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        node.style.setProperty('--animate-delay', delay);
                        node.classList.remove('invisible', 'animate__fadeOutDown');
                        node.classList.add('animate__animated', 'animate__bounceInUp', 'visible');
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

    onDestroy(() => {
        Object.values(cleanupFns).forEach((fn) => fn && fn());
    });
</script>

<h1 class="titillium-web-bold text-4xl sm:text-4xl md:text-5xl xl:text-6xl text-center mt-8 mb-12 text-white">Projects<br></h1>
<div class="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-5">
    {#each [
        // { title: 'LegITAS', folderName: 'legitas', tools: legitasTools, images: ['website.png'], website: "" },
        { title: 'Test Creator', folderName: 'test_creator', tools: testCreatorTools, images: ['dashboard.png', 'manage_questions.png', 'create_question.png', 'create_question2.png', 'test_taking1.png', 'test_taking2.png'] },
        { title: 'Mindwell', folderName: 'mindwell', tools: mindwellTools, images: ['moodtrack.png', 'calendar.png', 'resources.png'] },
        { title: 'AC (Assessment Center)', folderName: 'ac_local', tools: acTools, images: ['dashboard.png', 'test_requirements.png', 'assessments.png', 'test_taking.png', 'test_taking2.png'] },
        { title: 'Go Pick', folderName: 'ac_intl', tools: goPickTools, images: ['login.png', 'dashboard.png', 'test_taking.png', 'test_taking2.png'] },
        { title: 'Discflow Portal', folderName: 'discflow_portal', tools: portalTools, images: ['login.png', 'login2.png', 'admin_dashboard.png', 'distributor_dashboard.png', 'trainer_materials.png'] },
        { title: 'Discflow', folderName: 'discflow', tools: discflowTools, images: ['login.png', 'dashboard.png'] },
        { title: 'Flow 360', folderName: 'flow360', tools: flow360Tools, images: ['dashboard.png', 'test_taking.png'] },
    ] as project (project.title)}
        <div class="h-full group duration-100 invisible" use:animateOnScroll data-delay="0.3s">
            <div class="flex flex-col h-full justify-between bg-white shadow-xl rounded-lg overflow-visible transform-gpu transition-all duration-300 ease-in-out group-hover:-translate-y-2">
                <!-- <div class="p-3 bg-gradient-to-br from-[#166081] to-[#6a4b94] rounded-t-lg">
                    <img src={`/img/${project.img}`} alt={project.title}
                         class="w-full h-auto rounded-lg transition-all duration-300 ease-in-out hover:scale-105"/>
                </div> -->

                <div class="py-5 bg-gradient-to-br from-[#166081] to-[#6a4b94] rounded-t-lg">
                    <div class="embla"
                        use:emblaCarouselSvelte="{{ options }}"
                        on:emblaInit={(event) => onInit(event, project.title)}
                        data-project={project.title}>
                        <div class="embla__container">
                            {#each project.images as image}
                                <div class="embla__slide px-5">
                                    <div class="embla__parallax rounded-lg">
                                        <!-- <div class="embla__slide__opacity"> -->
                                        <div class="embla__parallax__layer rounded-lg">
                                            <img
                                                src={`/img/projects/${project.folderName}/${image}`}
                                                alt={project.title}
                                                class="embla__parallax__img w-full h-auto rounded-lg transition-all duration-300 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>

                <div class="embla__dots flex justify-center gap-2 mt-4">
                    <!-- svelte-ignore a11y_consider_explicit_label -->
                    {#each Array(slideCounts[project.title]) as _, index}
                        <button
                            class="w-4 h-4 rounded-full border-4 border-[#5500b4] opacity-50 transition duration-300"
                            class:embla__dots_selected={index === selectedIndexes[project.title]}
                            on:click={() => emblaApis[project.title]?.scrollTo(index)}
                        ></button>
                    {/each}
                </div>

                <div class="py-4 px-6 pb-6">
                    <p class="titillium-web font-bold text-[#226160] text-2xl">{project.title}</p>
                    <div class="flex flex-wrap gap-1 sm:gap-2 mt-6 w-full ">
                        {#each project.tools as item}
                            <div class="px-3 py-1 rounded-3xl bg-[#2358a79e] border border-white/40">
                                <p class="titillium-web text-xs sm:text-xs md:text-sm xl:text-base text-white/90">{item}</p>
                            </div>
                        {/each}
                        <!-- {#each project.tools as item}
                            <img src={`/tools/${item}.png`} alt={item}
                                class="w-auto h-8 sm:h-9 md:h-10 rounded hover:-translate-y-1 hover:translate-x-2 hover:rotate-2 transition-all duration-300 ease-in-out drop-shadow-[4px_8px_4px_rgba(0,0,0,0.33)]"
                                title={item} use:tooltip>
                        {/each} -->
                    </div>
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
    /* Parallax */
    .embla {
        overflow: hidden;
    }
    .embla__container {
        display: flex;
    }
    .embla__slide {
        flex: 0 0 100%;
        position: relative;
    }
    .embla__parallax {
        height: 100%;
        overflow: hidden;
    }
    .embla__parallax__layer {
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .embla__parallax__img {
        max-width: none;
        flex: 0 0 calc(115% + (var(--slide-spacing) * 2));
        object-fit: cover;
    }
    
    

    /* Opacity */
    /* .embla__container {
        display: flex;
        gap: 1rem;
        scroll-snap-type: x mandatory;
    }
    .embla__slide {
        flex: 0 0 85%;
        scroll-snap-align: center;
    }
    .embla__parallax__layer {
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .embla__slide__opacity {
        transition: opacity 0.3s ease-out;
    } */




    /* Dots */
    .embla__dots {
        background-color: transparent;
        opacity: 0.70;
    }
    .embla__dots_selected {
        background-color: gray;
        opacity: 1;
        transform: scale(1.2) !important;
    }

    .animate__animated {
        --animate-duration: 0.8s;
    }
</style>