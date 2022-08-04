<script type='ts'>
	import PacketView from './PacketView.svelte';
	import List from './List.svelte';
	import PacketList from "./PacketList"

    let a = new PacketList();
    a.onAddPackets = function(packets) {
        items = packets.map(x=>{
            return {
                component: PacketView,
                value: x.PacketData
            }
        });
    };

	let items: Array<{value: String, component: object}>= [
	];



</script>

<h1>
	Items
</h1>
<List {items} />