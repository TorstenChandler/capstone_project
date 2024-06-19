<script>
    let entry = {
        date: new Date().toISOString().split('T')[0]
    }
</script>
<form class="card">
    <div class="flex p-4 border-b border-surface-500">
        <span class="chip variant-filled">{entry.date}</span>
    </div>
    <textarea class="textarea rounded-none rounded-b h-full focus:outline-none" ></textarea>
</form>
<style>
    .card{
        height: calc(100vh - 110px);
    }
    textarea{
        resize: none!important;
    }
</style>