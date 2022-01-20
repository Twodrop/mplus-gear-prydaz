<script>
	export let location;
	export let name;
	export let icon;
	export let statList;
	import { stats, slotStore } from '$lib/stores.js';
	let trueArr = ['STAMINA', 'INTELLECT', 'AGILITY', 'STRENGTH'];
	let statArr = [];

	$: statList.forEach((element) => {
		if (!trueArr.includes(element[0])) {
			statArr.push(element);
		}
	});
	$: statsCount = Object.values($stats).filter((x) => x === true);
</script>

{#if $slotStore === 'trinket'}
	<div class="main">
		<div class="info">
			<p />
			<p />
			<p>{location}</p>
			<p class="name">{name}</p>
		</div>
		<div class="image">
			<img src={icon} alt="" />
		</div>
	</div>
{:else if statsCount.length === 1 && ($stats[statArr[0][0]] || $stats[statArr[1][0]])} 
	<!-- {#if $stats[statArr[0][0]] || $stats[statArr[1][0]]} -->
		<div class="main">
			<div class="info">
				<p>{statArr[0][0]}: {statArr[0][1]}</p>
				<p>{statArr[1][0]}: {statArr[1][1]}</p>
				<p>{location}</p>
				<p class="name">{name}</p>
			</div>
			<div class="image">
				<img src={icon} alt="" />
			</div>
		</div>
	<!-- {/if} -->
{:else if $stats[statArr[0][0]] && $stats[statArr[1][0]]}

	<div class="main">
		<div class="info">
			<p>{statArr[0][0]}: {statArr[0][1]}</p>
			<p>{statArr[1][0]}: {statArr[1][1]}</p>
			<p>{location}</p>
			<p class="name">{name}</p>
		</div>
		<div class="image">
			<img src={icon} alt="" />
		</div>
	</div>
{/if}

<style>
	.main {
		width: 180px;
		background-color: #364055;
		border-radius: 3px;
		display: flex;
		justify-content: space-between;
		font-size: small;
		align-items: flex-start;
		padding: 15px;
	}

	.image {
		overflow: hidden;
		width: 35px;
		height: 35px;
		display: flex;
		justify-content: center;
		border: 1px solid black;
	}
	img {
		transform: scale(1.04);
	}
	.info {
		width: 70%;
		display: flex;
		flex-direction: column;
	}
	p {
		margin: 0;
		font-family: Titillium Web, sans-serif;
		text-transform: capitalize;
		white-space: nowrap;
	}
	.name {
		font-style: italic;
		color: gray;
		overflow: hidden;
		max-width: 35ch;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.name:hover {
		overflow: visible;
	}
</style>
