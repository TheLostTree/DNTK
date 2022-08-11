
<script lang="ts">
    let log = "";

    function clearLog(){
        log = "";
    }

    function addLog(msg){
        log += msg + "\n";
    }

    function onKeypress(keypress:KeyboardEvent){
        //emter
        if(keypress.key == "Enter"){
            addLog(stuff);
            stuff = "";
        }
    }
    let stuff = ""
</script>

<script lang="ts" context="module">

</script>

<textarea rows=15 cols=100 readonly>{log}</textarea> <br>

<button on:click={clearLog}>
    ClearLog
</button><br>


<input type = "text" bind:value={stuff} on:keypress={onKeypress}>
<button on:click={()=>{addLog(stuff);stuff = "";}}>Submit</button>

<style>

</style>
  