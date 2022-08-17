<script lang="ts">
    import type { DamageInstance } from "../DamageInstance";

	export let damageInstance:DamageInstance;

</script>

<div>
	<div class="time">{#if damageInstance.time}{damageInstance.time.toString()}{/if}</div>

	<div class="attacker">{damageInstance.hitInfo.AttackResult.AttackerId}</div>
	<!-- <div class="name">{packet.protoName}</div>
	<div class="len">{packetLength || ''}</div>
	<div class="json"><span>{packetString}</span></div> -->
</div>