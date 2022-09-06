<script lang="ts">
    import logo from './assets/svelte.png'
    import {backendSocket} from "./main";
    import ConsoleWindow from "./lib/ConsoleWindow.svelte";
    import UploadPcapButton from './lib/UploadPcapButton.svelte';
    import DamageTable from './lib/DamageTable.svelte'; 

    import DownloadLog from './lib/DownloadLog.svelte';

    function testReq(){
        backendSocket.send({
            cmd: "SetWhitelistReq",
            data: ["SceneEntityAppearNotify", "SceneEntityDisappearNotify"]
        })
    }



</script>

<main>
    <h1>DNTK WIP FRONTEND</h1>
    <p>currently only by LostTree, and hopefully Algoinde eventually 👉👈</p><br>
    <p>this <i>is</i> my first svelte project so its kinda ugly and broken lol</p><br>

    <pre>Usage:

        1. Launch c# backend 
        2. Launch the frontend 
        3. Launch the game
            (it MUST be the first login of the opened client;
            close the game and reopen if you've already logged in once)

        4. Play as normal
        5. Observe the DamageTable update below
        6. Hit "DownloadLog" to download a log.dntkap file that contains all the packets you've received
        

    </pre><br>
    
    <DamageTable></DamageTable>
    
    <br>
    <DownloadLog/>

</main>

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    :global(body){
        background-color: rgba(252, 215, 196, 0.2);
    }
    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
        /* color: #FFF; */
    }
    pre {
        background-color: rgba(252, 215, 196, 0.5);
        text-align: left;
    }


    h1 {
        color: #492215;
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
