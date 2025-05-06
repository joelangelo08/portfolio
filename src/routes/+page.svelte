<script>
    import First from "$lib/components/First.svelte";
    import Second from "$lib/components/Second.svelte";
	import Third from "$lib/components/Third.svelte";
    import Fourth from "$lib/components/Fourth.svelte";

    let menu = ['</ABOUT>', '</PROJECTS>', '</EXPERIENCE>', '</CONTACTS>'];
</script>

<div class="container">
    <div class="fixed w-full shadow-md z-20">
        <div class="flex justify-between px-8 py-5">
            <div>
                <p class="text-white titillium-web font-bold text-xl">Joel.Milañez_</p>
            </div>
            
            <div class="flex gap-5">
                {#each menu as item}
                    <p class="text-white titillium-web">{item}</p>
                {/each}
            </div>
        </div>
    </div>
    
    <div class="first w-full h-[100vh] relative" style="background: radial-gradient(circle, #CECBC8, #22616096);">
        <First />
    </div>

    <div class="second bg-[#c1c1c1] w-full h-full p-20">
        <Second />
    </div>

    <div class="third bg-[#997b70] w-full h-full p-20 pb-40">
        <Third />
    </div>

    <div class="fourth bg-[#9ae98a] w-full h-[100vh] p-20">
        <Fourth />
    </div>

</div>

<style>
    /* .tooltip {
      background-color: black;
      color: white;
      padding: 5px;
      border-radius: 3px;
      font-size: 14px;
    } */
  </style>