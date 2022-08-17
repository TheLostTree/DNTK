
<script lang="ts">
    let fileForm: HTMLInputElement;

    
    import { backendSocket } from "../main";


	function uploadFile() {
		fileForm.click();
        fileForm.files[0]?.arrayBuffer().then((buffer) => {
            backendSocket.emit("FileParseReq", {Type: fileForm.files[0].name, B64Bytes: Buffer.from(buffer).toString("base64")});
        });
	}

</script>



<button title="Upload PCAP" data-icon="open-in-app" on:click={uploadFile}>EHEHEHEEH</button>
<input hidden type="file" bind:this={fileForm} accept=".pcap"/>




<style>

</style>
  