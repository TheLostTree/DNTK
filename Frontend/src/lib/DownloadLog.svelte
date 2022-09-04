
<script lang="ts">
    import {log} from "../main";


    function getLog(){
        let c = log.join("█▄█\n");
        var element = document.createElement('a');
        console.log(c)
        console.log(log)
        element.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(c));

        element.setAttribute('download', "Log.dntkap");
        document.body.appendChild(element);
        element.click();
        element.remove();
    }
</script>


<button on:click={getLog}>Download!</button>