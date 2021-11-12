<nav class="fixed right-0 left-0 shadow z-50" style="background-color: rgba(255,255,255,0.8);">
	<div class="max-w-7xl mx-auto px-4">
		<div class="flex justify-between">
			<div class="flex space-x-4">
				<div>
					<a href="/" class="flex items-center py-5 px-2 text-black hover:text-gray-800">
						<span class="text-3xl uppercase font-montserrat font-bold">br&deg;wn&period;</span>
					</a>
				</div>
			</div>

			<div class="hidden md:flex items-center space-x-1 text-black">
				<a href="#about" class="py-5 px-3 hover:bg-white rounded-xl">about me</a>
				<a href="#portfolio" class="py-5 px-3 hover:bg-white rounded-xl">portfolio</a>
				<a href="@mailto:contact@nicholasbrown.me" class="py-5 px-3 hover:bg-white rounded-xl">contact</a>
			</div>

			<div class="md:hidden flex items-center mr-3">
				<button class="mobile-menu-button">
					<span class="material-icons text-3xl">&#xe5d2;</span>
				</button>
			</div>
		</div>
	</div>

	<!-- mobile menu -->
	<div class="mobile-menu hidden md:hidden w-full">
		<div class="w-full block px-3">
			<a href="#about" class="block py-2 px-3 text-md hover:text-gray-800 hover:bg-white hover:rounded-lg">about me</a>
			<a href="#portfolio" class="block py-2 px-3 mt-1 text-md hover:text-gray-800 hover:bg-white hover:rounded-lg">portfolio</a>
			<a
				href="@mailto:contact@nicholasbrown.me"
				class="block py-2 px-3 text-md mt-1 mb-3 hover:text-gray-800 hover:bg-white hover:rounded-lg">contact</a
			>
		</div>
	</div>
</nav>
