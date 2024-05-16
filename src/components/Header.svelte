<script>

    let tabs = [
        { name: "about", link: "#about" },
        { name: "projects", link: "#projects" },
        { name: "blog", link: "#blog" },
        { name: "contact", link: "#contact" }
    ]

</script>

<header class="">
    <div class="">
        {#each tabs as tab, index}
            <a href={tab.link}>
                <p>{tab.name}</p>
            </a>
        {/each}    
    </div>        
</header>