<script lang="ts">
    import VirtualList from "@sveltejs/svelte-virtual-list/VirtualList.svelte"
    import type { DamageInstance } from "./DamageInstance";
    import DamageView from './parts/DamageView.svelte';
    import {items} from './DamageInstance';

    let start: number;
	let end: number;
    
</script>

<div class="table">
    <div class="tr thead">
        <div class="time">Time</div>
        <div class="attacker">attacker</div>
    </div>
    <div class="tbody">
        <VirtualList items={items} let:item bind:start bind:end>
            <DamageView damageInstance={item} />
        </VirtualList>
    </div>
</div>
