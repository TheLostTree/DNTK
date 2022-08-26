<script lang="ts">
    export let Name: string;
    export let TotalDamage: number;
    export let TotalHealing: number;
    export let CritPercent: number;
</script>

<div class="tr">
    <div class="attackername">{Name}</div>
    <div class="totaldmg">{TotalDamage.toFixed()}</div>
    <div class="totalhealing">{TotalHealing.toFixed()}</div>
    <div class="critperc">{(CritPercent*100).toFixed(2)}%</div>
</div>


<style>
    .tr > div{
        border: 5px solid rgba(255,255,255,0.1);
        font-size: 0.9em;
        display: flex;
    }
    .tr{
        display: flex;
    }
</style>