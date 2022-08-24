<script lang="ts">

    import EntityDamageView from "./EntityDamageView.svelte";

    import VirtualList from '@sveltejs/svelte-virtual-list';

    import {attackees} from "./stores";



    $: rows = $attackees.map((attackee) => {
        return attackee.GetRow();
    });

    attackees.subscribe((af)=>{
        console.log(af)
    })
    


    
</script>


<VirtualList items={rows} let:item={row}>
    <EntityDamageView {...row}/>
</VirtualList>


