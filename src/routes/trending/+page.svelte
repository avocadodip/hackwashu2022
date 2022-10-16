<script>
  import FeedPost from '../../components/FeedPost.svelte';

  let textbox;
  let text;
</script>
<main class="ml-12 mb-20 mt-12" >
  <div class="form w-[500px]">
    <div class="form__textbox">
      <span class="form__submit-button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        
      </span>
      <input 
        class="form__input"
        type="text" 
        placeholder="Search Civil..."
        bind:this={textbox}
        bind:value={text}
      />
    </div>
  </div>
  <div class="flex gap-3 mt-4">
    <div class="bg-bridge-sidebar px-3 py-2 rounded-xl cursor-pointer hover:opacity-80">
      <p class="text-sm font-medium">
        WILD canceled
      </p>
    </div>
    <div class="bg-bridge-sidebar px-3 py-2 rounded-xl cursor-pointer hover:opacity-80">
      <p class="text-sm font-medium">
        Designer babies
      </p>
    </div>
    <div class="bg-bridge-sidebar px-3 py-2 rounded-xl cursor-pointer hover:opacity-80">
      <p class="text-sm font-medium">
        Super Mario Movie boycott
      </p>
    </div>
  </div>
	<FeedPost rating={4.9} profilePic={'avatar2.jpg'} likeCount={5} respectCount={6} commentCount={4}/>
	<FeedPost rating={4.9} profilePic={'avatar3.jpg'} likeCount={67} respectCount={64} commentCount={4}/>
	<FeedPost rating={4.8} profilePic={'avatar4.jpg'} likeCount={25} respectCount={41} commentCount={4}/>
</main>


<style>
  .form {

  }

  .form__textbox {
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: var(--bridge-brown);
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 50px;
    padding-left: 15px;
  }

  .form__input {
    padding-top: 2px;
    flex-grow: 2;
    border: none;
    background: transparent;
    padding-left: 20px;
  }

  input::placeholder {
		color: var(--bridge-text);
		opacity: 0.8;
	}

  .form__input:focus {
    outline: none;
  }

  .inactive, .inactive:hover {
    color: rgb(204, 204, 204);
    cursor: default;
  }

</style>