<script>

let tabs = [
        { name: "About", link: "#about" },
        { name: "Projects", link: "#projects" },
        { name: "Blog", link: "#blog" },
        { name: "Contact", link: "#contact" }
    ]

</script>


<header class="flex items-center justify-center w-full">

    <div class="flex justify-center items-center w-full">
    <div class="px-12">
        <img class="" src={"images/haunter.gif"} alt="">
    </div>
    <div class="flex items-center justify-center text-center gap-x-20 px-12 mr-44 text-xl font-DJ">
        {#each tabs as tab, index}
            <a href={tab.link}>
                <p>{tab.name}</p>
            </a>
        {/each}      
    </div>

</header>

