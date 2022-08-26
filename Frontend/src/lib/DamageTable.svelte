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
        }).sort((x, y)=>x.TotalDamage <= y.TotalDamage ? 1 : -1)

        if(a.length < 4){
            return [...a, ...Array(4-a.length).fill({Name: "N/A", TotalDamage: 0, TotalHealing: 0, CritPercent: 0})]
        }
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
        cursor: default;
        display: flex;
        width: 100%;
        flex-direction: column;
        overflow: hidden;
        height: 100%;
        /* align-items: center;
        justify-content: center; */

    }

        
    .table .thead > * {
        text-align: left;
        background: rgba(81, 77, 77, 0.4);
        border: 1px solid rgba(56, 52, 52, 0.782);
        font-size: 0.8em;
    }
    .table-host {
        flex-grow: 1;
        display: flex;
        /* align-items: center; */
        /* background: rgb(256, 225, 225); */
    }

    .table .tbody {
        flex-grow: 1;
        flex-shrink: 1;
        overflow: auto;
    }



    .table :global(.tr) {
        display: flex;
    }
    .table :global(.tr > .Attacker) {
        flex-basis: 20rem;
        display: flex;
        justify-content: center;
    }

    .table :global(.tr > .Damage) {
        flex-basis: 7rem;
        display: flex;
        justify-content: center;
    }
    .table :global(.tr > .Healing) {
        flex-basis: 9rem;
        display: flex;
        justify-content: center;
    }

    .table :global(.tr > .CritPerc) {
        flex-basis: 4rem;
        display: flex;
        justify-content: center;
    }
</style>




