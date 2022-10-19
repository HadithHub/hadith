<script lang=ts>
	export let allHadiths: any[] = [];
	let languageCount = allHadiths.length;
</script>

{#if allHadiths[0] == 'Loading...'}
	<div class="hadithContainer">
		<div class="hadithGroup">
			<div class="hadith">Loading...</div>
		</div>
	</div>
{:else}
	{#each { length: allHadiths[0].hadiths.length } as _, i}
		{#if allHadiths[0].hadiths[i].text}
			<div class="hadithContainer hvr-reveal">
				<div class="hadithGroup">
					{#each { length: languageCount } as _, j}
						<div class="hadith">{allHadiths[j].hadiths[i].text}</div>
					{/each}
				</div>
				<hr />
				<div class="hadithDetails">
					<p>{allHadiths[0].metadata.name} {allHadiths[0].hadiths[i].arabicnumber}</p>
					<p>
						Book {allHadiths[0].hadiths[i].reference.book}, Hadith {allHadiths[0].hadiths[i]
							.reference.hadith}
					</p>
				</div>
			</div>
		{/if}
	{/each}
{/if}

<style>
	.hadithContainer {
		min-width: 80%;
		font-size: small;
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
		padding: 10px;
		row-gap: 2rem;
		transition: 0.2s ease-in;
	}

	.hadithGroup {
		font-size: medium;

		padding: 10px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
	.hadith {
		word-wrap: break-word;
		line-height: 30px;
		border: none;
		margin: 10px;
	}
	hr {
		border: 0;
		height: 1px;
		background: #333;
		background-image: linear-gradient(to right, #ccc, #333, #ccc);
	}
	.hadithDetails {
		word-wrap: break-word;
		/* line-height: 30px; */
		border: none;
		padding: 10px;
		margin-left: 10px;
		margin-right: 10px;
	}
</style>
