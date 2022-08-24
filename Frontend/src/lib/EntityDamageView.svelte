<script lang="ts">
    export let Name: string;
    export let TotalDamage: number;
    export let TotalHealing: number;
    export let CritPercent: number;
</script>

<div>{Name}</div>
<div>{TotalDamage.toFixed()}</div>
<div>{TotalHealing.toFixed()}</div>
<div>{CritPercent}</div>