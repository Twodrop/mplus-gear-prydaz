<script>
	import ItemBox from '$lib/item.svelte';
	import Button from '$lib/button.svelte';
	import { slotStore, stats, classStore, specStore } from '$lib/stores.js';
	import Item from '$lib/item.svelte';
	import ItemDB from '$lib/test.json';
	
	const slotArr = [
		'head',
		'shoulder',
		'chest',
		'wrist',
		'hands',
		'waist',
		'legs',
		'feet',
		'neck',
		'ring',
		'trinket',
		'back', 
        "weapon"
	];
	let statsArr = ['vers', 'haste', 'crit', 'mastery'];
	let classArr = [
		{
			druid: [
				ItemDB.leather,
				{
					guardian: [['agi_2hand'], ['tank', 'agi', 'all']],
					feral: [['agi_2hand'], ['melee_dps', 'agi', 'agi_dps', 'all']],
					resto: [
						['int_2hand', 'int_dagger', 'int_mace', 'off-hand'],
						['healing', 'int', 'all']
					],
					balance: [
						['int_2hand', 'int_dagger', 'int_mace', 'off-hand'],
						['int_dps', 'int', 'all']
					]
				}
			],
			DK: [
				ItemDB.plate,
				{
					blood: [['str_2hand'], ['tank', 'str', 'all']],
					frost: [
						['str_2hand', 'str_1hand'],
						['melee_dps', 'str', 'str_dps', 'all']
					],
					unholy: [['str_2hand'], ['melee_dps', 'str', 'str_dps', 'all']]
				}
			],
			paladin: [
				ItemDB.plate,
				{
					protection: [
						['str_1hand', 'shield'],
						['tank', 'str', 'all']
					],
					retri: [['str_2hand'], ['melee_dps', 'str', 'str_dps', 'all']],
					holy: [
						['int_mace', 'int_sword', 'shield'],
						['healing', 'int', 'all']
					]
				}
			],
			warrior: [
				ItemDB.plate,
				{
					protection: [
						['str_1hand', 'shield'],
						['tank', 'str', 'all']
					],
					fury: [
						['str_2hand', 'str_1hand'],
						['melee_dps', 'str', 'str_dps', 'all']
					],
					arms: [['str_2hand'], ['melee_dps', 'str', 'str_dps', 'all']]
				}
			],
			priest: [
				ItemDB.cloth,
				{
					disc: [
						['int_2hand', 'int_dagger', 'int_mace', 'off-hand'],
						['healing', 'int', 'all']
					],
					shadow: [
						['int_2hand', 'int_dagger', 'int_mace', 'off-hand'],
						['int_dps', 'int', 'all']
					],
					holy: [
						['int_2hand', 'int_dagger', 'int_mace', 'off-hand'],
						['healing', 'int', 'all']
					]
				}
			],
			mage: [
				ItemDB.cloth,
				{
					mage: [
						['int_2hand', 'int_dagger', 'int_mace', 'off-hand'],
						['int_dps', 'int', 'all']
					]
				}
			],
			warlock: [
				ItemDB.cloth,
				{
					warlock: [
						['int_2hand', 'int_dagger', 'int_mace', 'off-hand'],
						['int_dps', 'int', 'all']
					]
				}
			],
			hunter: [ItemDB.mail, { 'BM/MM': [['ranged'], []], survival: [['agi_2hand'], []] }],
			shaman: [
				ItemDB.mail,
				{
					resto: [
						['int_2hand', 'int_dagger', 'int_mace', 'shield'],
						['healing', 'int', 'all']
					],
					elemental: [
						['int_2hand', 'int_dagger', 'int_mace', 'shield'],
						['int_dps', 'int', 'all']
					],
					enhance: [['agi_1hand'], ['melee_dps', 'agi', 'agi_dps', 'all']]
				}
			],
			monk: [
				ItemDB.leather,
				{
					WW: [
						['agi_1hand', 'agi_2hand'],
						['melee_dps', 'agi', 'agi_dps', 'all']
					],
					MW: [
						['int_2hand', 'int_sword', 'int_mace', 'off-hand'],
						['healing', 'int', 'all']
					],
					BM: [
						['agi_1hand', 'agi_2hand'],
						['tank', 'agi', 'all']
					]
				}
			],
			DH: [
				ItemDB.leather,
				{
					vengance: [['warglaives'], ['tank', 'agi', 'all']],
					havoc: [['warglaives'], ['melee_dps', 'agi', 'agi_dps', 'all']]
				}
			],
			rogue: [
				ItemDB.leather,
				{
					sub: [['agi_dagger'], ['melee_dps', 'agi', 'agi_dps', 'all']],
					assa: [['agi_dagger'], ['melee_dps', 'agi', 'agi_dps', 'all']],
					outlaw: [
						['agi_1hand', 'agi_dagger'],
						['melee_dps', 'agi', 'agi_dps', 'all']
					]
				}
			]
		}
	];
	$: console.log($stats)
</script>

<div class="main">
	<div class="bar">
		<div class="infotext">
			{#if $classStore}
				{$classStore} >
			{/if}
			{#if $specStore}
				{$specStore}
			{/if}
		</div>
	</div>
	<div class="box">
		<div class="filter">
			<div class="type">
				{#if !$classStore}
					{#each Object.keys(classArr[0]) as name}
						<Button {name} id={'class'} />
					{/each}
				{:else if !$specStore}
					{#each Object.keys(classArr[0][$classStore][1]) as name}
						<Button {name} id={'spec'} />
					{/each}
				{:else}
					{#each slotArr as name}
						<Button {name} id={'slot'} />
					{/each}
					<div class="stats">
						{#each statsArr as name}
							<Button {name} id={'stats'} />
						{/each}
					</div>
				{/if}
			</div>
		</div>

		<div class="items">
			{#if $classStore && $specStore }
				{#if ['neck', 'ring', 'back'].includes($slotStore)}
					{#each ItemDB.miscellaneous[0][$slotStore] as item}
						<Item {...item} />
					{/each}
				{:else if $slotStore === 'trinket'}
					{#each classArr[0][$classStore][1][$specStore][1] as index}
						{#each ItemDB.miscellaneous[0].trinket[index] as item}
							<Item {...item} />
						{/each}
					{/each}
                {:else if $slotStore === 'weapon'}
					{#each classArr[0][$classStore][1][$specStore][0] as index}
						{#each ItemDB.weapon[index] as item}
							<Item {...item} />
						{/each}
					{/each}
				{:else}
					{#each classArr[0][$classStore][0][0][$slotStore] as item}
						<Item {...item} />
					{/each}
				{/if}
			{/if}
		</div>
	</div>
</div>

<style>
	:global(body) {
		background: radial-gradient(#1f2532 3px, transparent 4px),
			radial-gradient(#1f2532 3px, transparent 4px), linear-gradient(#151922 4px, transparent 0),
			linear-gradient(
				45deg,
				transparent 74px,
				transparent 75px,
				#1f2532 0,
				#1f2532 76px,
				transparent 77px,
				transparent 109px
			),
			linear-gradient(
				-45deg,
				transparent 75px,
				transparent 76px,
				#1f2532 0,
				#1f2532 77px,
				transparent 78px,
				transparent 109px
			),
			#151922;
		background-size: 109px 109px, 109px 109px, 100% 6px, 109px 109px, 109px 109px;
		background-position: 54px 55px, 0 0, 0 0, 0 0, 0 0;
		color: #f9f9f9;
		min-height: 100vh;
		margin: 0;
		font-family: Titillium Web, sans-serif;
	}
	.main {
		width: min(800px, 100vw);
		min-height: 500px;
		background-color: #1f2532;
		display: flex;
		flex-direction: column;
		margin-top: 100px;
	}
	.bar {
		width: 100%;
		height: 30px;
		background: linear-gradient(110deg, #f0326b, #f9633e);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.infotext {
		text-transform: capitalize;
		width: 90%;
		font-weight: bold;
		color: #1f2532;
	}
	.box {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		padding-left: 36px;
		padding-right: 36px;
		padding-bottom: 36px;
	}

	.items {
		display: flex;
		flex-wrap: wrap;
		gap: 49px;
		align-content: flex-start;
		justify-content: flex-start;
	}
	.filter {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		margin-bottom: 30px;
		justify-content: center;
	}
	.type,
	.stats {
		display: flex;
		gap: 28px;
		margin-top: 30px;
		flex-wrap: wrap;
		justify-content: center;
	}
	@media (orientation: portrait) {
		.items {
			justify-content: center;
		}
		.main {
			margin-top: 0px;
		}
	}
</style>
