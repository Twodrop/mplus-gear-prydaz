<script>

export let name;
export let id;
import { slotStore, stats, classStore, specStore } from '$lib/stores.js';
//
function stats_update(name) {
    let newObj = $stats;
    console.log(newObj)
    newObj[name] = newObj[name] ? false : true ;
    stats.set(newObj);
}

</script>

{#if id === "stats" }
    <button
        class:active="{$stats[name]}"
        on:click="{stats_update(name)}"
    >{name}</button>
{:else if id === "class"} 
    {#if name === "warlock" || name === "mage"}
        <button
        class:active="{$classStore === name}"
        on:click="{() => {
            classStore.set(name)
            specStore.set(name)
            return
        }}"
        >{name}</button>
    {:else}
    <button
        class:active="{$classStore === name}"
        on:click="{() => classStore.set(name)}"
    >{name}</button>
    {/if}

{:else if id === "spec"} 
    <button
        class:active="{$specStore === specStore}"
        on:click="{() => specStore.set(name)}"   
    >{name}</button>
{:else} 
    <button
        class:active="{$slotStore === name}"
        on:click="{() => slotStore.set(name)}"
    >{name}</button>
{/if}
<style>
    button{
        color: #f0326b;
        background:none;
        border-radius: 3%;
        border: 2px solid;
        width: 80px;
        height: 32px;
        text-transform: capitalize;

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

