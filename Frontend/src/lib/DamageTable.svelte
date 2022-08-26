<script lang="ts">

    import EntityDamageView from "./EntityDamageView.svelte";

    import VirtualList from '@sveltejs/svelte-virtual-list';

    import {attackees} from "./stores";

    import {reset} from "./DamageTableTs"



    $: rows = (()=>{
        const a = $attackees.map(x=>{
            let a= x.GetRow();
            // console.log(a)
            return a
        }).sort((x, y)=>x.Damage <= y.Damage ? 1 : -1)

        console.log(a)
        return a;

    })();


    


    
</script>


<div class="table-host">
    <div class="table">
        <div class="tr thead">
            <div class="Attacker">Attacker</div>
            <div class="Damage">Damage</div>
            <div class="Healing">Healing</div>
            <div class="CritPerc">CritPerc</div>

        </div>
        <div class="tbody">
            {#each rows as row}
            <!-- <p> {JSON.stringify(row)}</p> <br> -->
            <EntityDamageView {...row}/>
            {/each}
        </div>
    </div>
</div>

<button on:click={reset}>ClearData</button>


<style>
    .table {
        width: 100%;
        min-width: 100%;
        cursor: default;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        height: 100%;
    }

        
    .table .thead > * {
        text-align: left;
        background: rgba(0,0,0,0.4);
        border-right: 1px solid rgba(255,255,255,0.1);
        font-size: 0.8em;
    }
    .table-host {
        flex-grow: 1;
        overflow: hidden;
        background: rgba(0,0,10,0.6);
    }

    .table .tbody {
        flex-grow: 1;
        flex-shrink: 1;
        overflow: auto;
    }

    .table :global(.tr) {
        display: flex;
    }
    .table :global(.tr > *) {
        padding: 0.5rem 0.6rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }
</style>




