<script>

let tabs = [
        { name: "About", link: "#about" },
        { name: "Projects", link: "#projects" },
        { name: "Blog", link: "#blog" },
        { name: "Contact", link: "#contact" }
    ]


</script>


<header class="flex items-center justify-center fixed top-0 text-xl z-10 w-full">

    <div class="flex justify-center items-center w-full">
    <div class="px-8">
        <img src={"images/haunter.gif"} alt="">
    </div>
    <div class="flex items-center justify-center text-center gap-x-20 py-10 px-6 mr-44">
        {#each tabs as tab, index}
            <a href={tab.link}>
                <p>{tab.name}</p>
            </a>
        {/each}      
    </div>

</header>

