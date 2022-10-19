<script lang=ts>
	import Topbar from '../common/topbar.svelte';
	import BookContainer from '../components/bookContainer.svelte';
	import '../common/global.css'
	// import LeftSidePanelScaffold from '../../../common/leftSidePanelScaffold.svelte';
	// import {obj} from '../../../common/constants.svelte';

	const collections = 'https://raw.githubusercontent.com/GibreelAbdullah/hadith-api/2/01-Collections/collections.min.json';

	let collectionPromise = getData(collections);

	async function getData(url: string) {
		console.log(url);
		return await fetch(url).then((response) => {
			return response.json();
		});
		// return Promise.resolve(obj);
	}
</script>

<Topbar />
<!-- <LeftSidePanelScaffold /> -->

<main>
	<BookContainer dataPromise={collectionPromise} />
</main>
