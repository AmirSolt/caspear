<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { Bookmark } from 'lucide-svelte'
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/">
					<strong class="text-xl uppercase">Caspear</strong>
				</a>	
			</svelte:fragment>

			<svelte:fragment slot="trail">
	
		
				<a
					class="btn btn-sm variant-filled"
					href="/bookmarks"
				>
					<Bookmark />
				</a>

				
				<LightSwitch />
			</svelte:fragment>
		</AppBar>

	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
