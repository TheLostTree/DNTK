<script lang="ts">
    import logo from './assets/svelte.png'
    import Counter from './lib/Counter.svelte'
    import PacketList from './lib/PacketList';
    import BackendSocket from './backendsocket';
    import type { PacketNotify } from './lib/WSPacket';
    import type { SceneEntityAppearNotify } from './messages/SceneEntityAppearNotify';
    import { ProtEntityType } from './messages/ProtEntityType';
    import ConsoleWindow, {addLog} from './lib/ConsoleWindow.svelte';

    const backendSocket = new BackendSocket("ws://127.0.0.1:40510");
    const packetList = new PacketList();

    backendSocket.on("PacketNotify", (data: PacketNotify) => {
        packetList.addPackets(data.data);
    });

    packetList.onAddPackets = (packets) => {
        let pkts: Array<SceneEntityAppearNotify> = packets.filter(x=>x.CmdId == "SceneEntityAppearNotify").map(x=>x.PacketData);
        pkts.forEach(x=>{
            x.EntityList.forEach(y=>{
                console.log("new entity:", y.EntityId, y.EntityType, y.MotionInfo);
                if(y.EntityType == ProtEntityType.PROT_ENTITY_TYPE_GADGET){
                    console.log("gadget:", y.Gadget?.GadgetId);
                }

                addLog(`new entity: ${y.EntityId} ${y.EntityType} ${y.MotionInfo}`);
            });
        })
    }

    function testReq(){
        // backendSocket.send({
        //     "cmd": "DecryptReq",
        //     data: {
        //         Type: "BuyResinRsp",
        //         B64Data: "KAVQAw=="
        //     }
        // })
        backendSocket.send({
            cmd: "SetWhitelistReq",
            data: ["SceneEntityAppearNotify", "SceneEntityDisappearNotify"]
        })
    }


  
</script>

<main>
  <img src={logo} alt="Svelte Logo" />
  <h1>DNTK WIP FRONTEND</h1>

  <ConsoleWindow />

  <br>

  <button on:click={testReq}>testo</button>

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
