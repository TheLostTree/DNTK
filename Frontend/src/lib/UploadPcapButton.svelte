
<script lang="ts">
    let fileForm: HTMLInputElement;

    
    import { backendSocket } from "../main";


	function uploadFile() {
		fileForm.click();
	}
    let files: FileList;

    $: if (files) {
		// Note that `files` is of type `FileList`, not an Array:
		// https://developer.mozilla.org/en-US/docs/Web/API/FileList

		for (const file of files) {
			send(file)
		}
	}
    
    function send(thing: File){
        thing.arrayBuffer().then((buffer) => {
            backendSocket.send({
                cmd: "FileParseReq",
                //give me back node buffers rn. >:(
                data: {Type: fileForm.files[0].name, B64Data: 
                
                    btoa(
                new Uint8Array(buffer)
                    .reduce((data, byte) => data + String.fromCharCode(byte), ''))
                }
            });
        });
    }

</script>



<button title="Upload PCAP" data-icon="open-in-app" on:click={uploadFile}>Upload PCAP</button>
<input hidden type="file" bind:this={fileForm} bind:files accept=".pcap"/>


{#if files}
	<h2>Selected files:</h2>
	{#each Array.from(files) as file}
		<p>{file.name} ({file.size} bytes) </p>
	{/each}
{/if}

<style>

</style>
  