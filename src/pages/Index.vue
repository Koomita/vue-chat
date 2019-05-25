<template>
    <div class="index">
        <button @click="$router.push({ name: 'Chat' })">进入聊天室</button>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.index {
    text-align: center;
    padding-top: 30%;
    button {
        display: inline-block;
    }
}
</style>
