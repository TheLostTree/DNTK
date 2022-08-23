<script lang="ts">

    import EntityDamageView from "./EntityDamageView.svelte";

    import { writable } from 'svelte/store';

    import {getRows, attackees} from "./DamageTableTS";

    import App from "../App.svelte";


    $: rows = $attackees.map((attackee) => {
        return attackee.GetRow();
    });

    attackees.subscribe((af)=>{
        console.log(af)
    })
    


    
</script>

<table>
    <tr>
        <th>Name</th>
        <th>Total Damage</th>
        <th>Total Healing</th>
        <th>Crit Percent</th>
    </tr>
    {#each rows as row}
        <EntityDamageView {...row}/>
    {/each}
</table>

<button on:click={getRows}>
	Add a number
</button>

