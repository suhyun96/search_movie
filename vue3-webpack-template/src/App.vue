<template>
    <div>
        {{ message }}
    </div>
</template>

<script>
import { registerRuntimeCompiler } from 'vue';

export default {
    data() {
        return {
            message: 'hello'
        }
    }
}
</script>