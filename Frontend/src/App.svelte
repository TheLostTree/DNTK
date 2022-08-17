<script lang="ts">
    import logo from './assets/svelte.png'
    import {backendSocket} from "./main";
    import ConsoleWindow from "./lib/ConsoleWindow.svelte";
    import UploadPcapButton from './lib/UploadPcapButton.svelte';
    import DamageWindow from './lib/DamageWindow.svelte';


    function testReq(){
        backendSocket.send({
            cmd: "SetWhitelistReq",
            data: ["SceneEntityAppearNotify", "SceneEntityDisappearNotify"]
        })
    }



</script>

<main>
    <img src={logo} alt="Svelte Logo" />
    <h1>DNTK WIP FRONTEND</h1>

    <p>currently only by LostTree, and hopefully Algoinde eventually 👉👈</p><br>

    <p>i learned html in 3rd grade and never again pls don't judge</p> <br>
    <ConsoleWindow/>

    <DamageWindow></DamageWindow>

    <UploadPcapButton/>
    <br>

    <button on:click={testReq}>test send</button>

</main>

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }

    img {
        height: 16rem;
        width: 16rem;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4rem;
        font-weight: 100;
        line-height: 1.1;
        margin: 2rem auto;
        max-width: 14rem;
    }

    p {
        max-width: 14rem;
        margin: 1rem auto;
        line-height: 1.35;
    }

    @media (min-width: 480px) {
        h1 {
            max-width: none;
        }

        p {
            max-width: none;
        }
    }
</style>
