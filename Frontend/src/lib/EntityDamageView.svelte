<script lang="ts">
    export let Name: string;
    export let TotalDamage: number;
    export let TotalHealing: number;
    export let CritPercent: number;
</script>

<div class="tr">
    <div class="Attacker">{Name}</div>
    <div class="Damage">{TotalDamage.toFixed()}</div>
    <div class="Healing">{TotalHealing.toFixed()}</div>
    <div class="CritPerc">{(CritPercent*100).toFixed(2)}%</div>
</div>


<style>
    .tr > div{
        border: 1px solid rgba(62, 62, 62, 0.88);
        font-size: 0.9em;
        display: flex;
        float: calc(100% / 4);
    }
    .tr{
        display: flex;
    }
</style>