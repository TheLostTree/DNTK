<script lang="ts">
    export let Name: string;
    export let TotalDamage: number;
    export let TotalHealing: number;
    export let CritPercent: number;
</script>

<tr>
    <td>{Name}</td>
    <td>{TotalDamage.toFixed()}</td>
    <td>{TotalHealing.toFixed()}</td>
    <td>{CritPercent}</td>
</tr>