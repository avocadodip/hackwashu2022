<script>

// npm run dev -- --host

</script>

<body class="bg-bridge-bg">
	<div class="bg-bridge-sidebar h-36 p-5 mt-12 ml-8 rounded-lg w-[500px]">
		<textarea rows="1" class="w-full h-full" placeholder="New post..." />
	</div>
</body>

<style>
	textarea {
		background-color: transparent;
		font-size: 25px;
		resize: none;
		overflow: hidden;
	}

	textarea:focus {
		outline: none;
	}

	textarea::placeholder {
		color: var(--bridge-text);
	}
</style>
