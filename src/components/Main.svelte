<script>
    import Card from "./ProjectCard.svelte";
</script>

<main class="flex flex-col justify-center items-center w-full mt-48">
    <div class="flex flex-col text-center tracking-widest gap-y-2 text-[#A023B1]">
        <h1 class="glowingtitle font-VT text-7xl">Erikas Krikstelionis</h1>
        <p class="glowingtitle font-VT text-4xl">Computer Science Bachelors' Graduate</p>
    </div>


    <div id="about" class="flex flex-col justify-center items-center w-full mt-96 min-h-screen">
        <p class="font-VT text-transparent glowingtitle text-4xl leading-snug">
            C:>systeminfo <br>
            My name is Erikas Krikstelionis, I am a computer science graduate. <br> <br>
            I like trying to code, cars, going to the gym and video games. <br> <br>
            Currently exploring the world of web development and game development. <br><br>
            C:><span class="cursor">█</span>
        </p>
    </div>

    <div id="projects" class="">

        <div class="flex gap-x-8 mt-96">
            <Card id="{1}" projectName = {"Beauty Website"} />
            <Card id="{2}" projectName = {"E-Commerce Fashion Website"} />
            <Card id="{3}" projectName = {"Gym Progress Tracking App"} />
        </div>
    
        <div class="flex gap-x-8 mt-10">
            <Card projectName = {"Coming Soon"} />
            <Card projectName = {"Coming Soon"} />
            <Card projectName = {"Coming Soon"} />
        </div>

    </div>
    


</main>