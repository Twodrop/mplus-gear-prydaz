<script>
    import ItemBox from '$lib/item.svelte';
    import Button from '$lib/button.svelte';
    import {typeStore, stats, miscTypeStore} from '$lib/stores.js';
    import Item from '$lib/item.svelte';
    import ItemDB from '$lib/test.json';
    let subclass = "cloth";
    
    console.log(subclass);
    console.log($typeStore)
    console.log(ItemDB)
    console.log(ItemDB[subclass])
    console.log(ItemDB.miscellaneous[0].neck)

    // stats.subscribe(value => {
	// 	stats_value = value;
    // });
    const data = [{
        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_leather_oribosdungeon_c_01.jpg',
		stats: 'Mastery / Crit',
		type: 'Chest - Leather',
		location: 'Halls of Atonement',
		name: 'Freshly Embalmed Jerkin',
        stat1: "mastery",
        stat2: "crit",
        type: "leather",
        slot: "chest",
        show: true
	}, 
    {
        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_staff_2h_oribosdungeon_c_01.jpg',
		stats: 'Haste / Crit',
		type: 'Staff - Intellect',
		location: 'The Necrotic Wake',
		name: 'Nathrian Ferula',
        stat1: "haste",
        stat2: "crit",
        type: "weapon",
        slot: "staff",
        show: true
	},
    {
        icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_shoulder_cloth_oribosdungeon_c_01.jpg',
		stats: 'Crit / Haste',
		type: 'Shoulder - Cloth',
		location: 'Mists of Tirna Scithe',
		name: 'Ingra Malochs Mantle',
        stat1: "crit",
        stat2: "haste",
        type: "cloth",
        slot: "shoulder",
        show: true
    }
    ];
    
    let armorArr = ["cloth","leather", "mail", "plate"];

    

</script>


<div class="main">
    <div class="bar">
        
    </div>
    <div class="box">
        <div class="filter">
            <div class="type">

                <button
                    class:active="{subclass === 'cloth'}"
                    on:click="{() => subclass = 'cloth'}"
                >Cloth</button>

                <button
                    class:active="{subclass === 'leather'}"
                    on:click="{() => subclass = 'leather'}"
                >Leather</button>
            
                <button
                    class:active="{subclass === 'mail'}"
                    on:click="{() => subclass = 'mail'}"
                >Mail</button>

                <button
                    class:active="{subclass === 'plate'}"
                    on:click="{() => subclass = 'plate'}"
                >Plate</button>                

                <button
                    class:active="{subclass === 'weapon'}"
                    on:click="{() => subclass = 'weapon'}"
                >Weapon</button>                
                <button
                    class:active="{subclass === 'miscellaneous'}"
                    on:click="{() => subclass = 'miscellaneous'}"
                >Misc</button>

            </div>
            <div class="slot">
                {#if armorArr.includes(subclass) }
                <Button name={"head"} id={"slot"}/>
                <Button name={"shoulder"} id={"slot"} />
                <Button name={"chest"} id={"slot"} />
                <Button name={"wrist"} id={"slot"} />
                <Button name={"hands"} id={"slot"} />
                <Button name={"waist"} id={"slot"} />
                <Button name={"legs"} id={"slot"} />
                <Button name={"feet"} id={"slot"} />


                {:else if subclass === "weapon"} 
                <Button name={"staff"} id={"slot"}/>
                <Button name={"dagger"} id={"slot"} />
                <Button name={"axe"} id={"slot"} />
                {:else if subclass === "miscellaneous"} 
                <Button name={"neck"} id={"slot"}/>
                <Button name={"ring"} id={"slot"} />
                <Button name={"trinket"} id={"slot"}/>
                <Button name={"back"} id={"slot"} />
                <Button name={"shield"} id={"slot"} />
                <Button name={"off-hand"} id={"slot"} />
            {/if}
            </div>
            <div class="stats">
                <Button name={"vers"} id={"stats"} />
                <Button name={"haste"} id={"stats"} />
                <Button name={"crit"} id={"stats"} />
                <Button name={"mastery"} id={"stats"} />

            </div>

        </div>
        
        <div class="items">
            {#if armorArr.includes(subclass) }
            {#each ItemDB[subclass][0][$typeStore] as item (item.name)}
	            <Item {...item}/>

            {/each}
            {:else if subclass === "weapon"} 
                {#each ItemDB[subclass] as item }
                <Item {...item}/>

            {/each}
            {:else if subclass === "miscellaneous"} 
            {#each ItemDB.miscellaneous[0][$miscTypeStore] as item  }
            <Item {...item}/>

        {/each}
            {/if}
            
        </div>
    </div>

</div>
<style>
    :global(body){
        background: radial-gradient(#1f2532 3px,transparent 4px),radial-gradient(#1f2532 3px,transparent 4px),linear-gradient(#151922 4px,transparent 0),linear-gradient(
        45deg,transparent 74px,transparent 75px,#1f2532 0,#1f2532 76px,transparent 77px,transparent 109px),linear-gradient(
        -45deg,transparent 75px,transparent 76px,#1f2532 0,#1f2532 77px,transparent 78px,transparent 109px),#151922;
    background-size: 109px 109px,109px 109px,100% 6px,109px 109px,109px 109px;
    background-position: 54px 55px,0 0,0 0,0 0,0 0;
    color: #f9f9f9;
    display: grid;
    place-items: center;
    min-height: 100vh;
    margin: 0;
    font-family: Titillium Web,sans-serif;
    }
    .main {
        width: 800px;
        height: 600px;
        background-color: #1f2532;
        display: flex;
        flex-direction: column;
        
    }
    .bar {
        width: 100%;
        height: 60px;
        background: linear-gradient(110deg,#f0326b,#f9633e);


    }
    .box{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    .items{
        width: 90%;
        height: 70%;
        display: flex;
        flex-wrap: wrap;
        gap: 35px;    
        align-content: flex-start;
        justify-content: space-between;
    }
    .filter{
        display: flex;
        width: 90%;
        flex-wrap: wrap;
        margin-bottom: 30px;
    }
    .type, .stats, .slot{
        display: flex;
        gap: 10px;
        margin-top: 30px;
        
    }
    .slot{
        flex-wrap: wrap
    }
    button{
        color: #f0326b;
        background:none;
        border-radius: 3%;
        border: 2px solid;
        width: 80px;
        height: 32px;

    }
    button:hover {
        color: white;
        border-color: #f0324b;
        background-color:#f0324b;
    }
    button:not(:disabled) {
    --hover: #f0324b;
    cursor: pointer;
    }
    .active {
        color: white;
        border-color: #f0324b;
        background-color:#f0324b;
    }
    
</style>



<!-- <div class="filter">
    <div class="armor">
        <Button name={"Cloth"}/>
        <Button name={"Leather"}/>
        <Button name={"Mail"}/>
        <Button name={"Plate"}/>
    </div>
    <div class="slot">
        <Button name={"Head"}/>
        <Button name={"Shoulders"}/>
        <Button name={"Back"}/>
        <Button name={"Chest"}/>
        <Button name={"Wrist"}/>
        <Button name={"Hands"}/>
        <Button name={"Waist"}/>
        <Button name={"Legs"}/>
        <Button name={"Feet"}/>
        <Button name={"Trinket"}/>
        <Button name={"Ring"}/>
        <Button name={"Weapon"}/>

    </div>
    <div class="stats">

    </div>

</div> -->