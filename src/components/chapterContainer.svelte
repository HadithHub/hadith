<script lang=ts>
	export let dataPromise: Promise<any>;
	export let bookName: String;
</script>

{#await dataPromise}
	<div class="mainChapterContainer hvr-reveal">LOADING...</div>
{:then data}
	{#each Object.keys(data) as chapterNumber}
		{#if data[chapterNumber]['englishName'] != ''}
			<a class="mainChapterContainer hvr-reveal" href="./{bookName}/{chapterNumber}">
				<p style="text-align:left;">
					<span style="padding:0px 10px">{chapterNumber}</span>
					{data[chapterNumber]['englishName']}
					<span style="float:right;">
						{data[chapterNumber]['arabicName']}
					</span>
				</p>
			</a>
		{/if}
	{/each}
{:catch data}
	<div class="mainChapterContainer hvr-reveal">Error...Could Not Load chapter</div>
{/await}

<style>
	.mainChapterContainer, .mainChapterContainer:visited , .mainChapterContainer:link{
		color: black;
		text-decoration: none;
		min-height: 40px;
		border-radius: 8px;
		background-color: white;
		box-shadow: 0 0px 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075),
			0 2px 4px hsl(0deg 0% 0% / 0.075), 0 4px 8px hsl(0deg 0% 0% / 0.075),
			0 6px 16px hsl(0deg 0% 0% / 0.075);
		margin-left: 10%;
		margin-right: 10%;
		margin-top: 30px;
		margin-bottom: 30px;
		padding:10px 15px;

		display: grid;
		row-gap: 2rem;
		transition: .2s ease-in ;

	}
</style>
