<style scoped>
    .listcard-key {
        position: absolute;
        top: -60px;
        left: -38px;
        font-weight: bold;
        font-size: 70pt;
        opacity: 0.5;
    }
</style>

<template>
    <div class='card shadow-lg m-3'>
        <div class='listcard-key'>
            {{ keylist }}
        </div>
        <div class='card-body py-3'>
            <div class='mb-3'>
                <span class='display-3'>
                    {{ title }}
                </span>
            </div>
            <div class='mb-3'>
                {{ desc }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        keylist: {
            type: [String],
            required: true
        },
        title: String,
        desc: String
    }
}
</script>