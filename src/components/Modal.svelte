<script>
  export let showModal = false;

</script>

{#if showModal}
  <div class="backdrop flex justify-center items-center z-50" on:click|self>
    <div class="modal p-4">
      <div class="circle-bg cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" on:click fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <slot></slot>
    </div>
  </div>
{/if}

<style>
  .backdrop{
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,0.8);
  }
  .modal{
    z-index: 0;
    border-radius: 10px;
    width: 400px;
    height: 430px;
    margin: 40% auto;
    background: white;
  }

  .circle-bg {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 35px;
		height: 35px;
		border-radius: 9999px;
		padding: 7px; 
	}

	.circle-bg:hover {
		background-color: #0000001a;
		transition: 0.2s;
	}
</style>