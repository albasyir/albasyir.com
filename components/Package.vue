<style scoped>

    .label-terlaris::before {
        content: "";
        position: absolute;
        top: 0;
        left: -15px;
        width: 30px;
        height: 40px;
        background: #ffd600;
    }

    .label-terlaris::after {
        content: "";
        width: 0; 
        height: 0; 
        position: absolute;
        left: -15px;
        top: 40px;
        border-top: 20px solid #ffa000; 
        border-left: 15px solid transparent;
    }
</style>

<template>
    <div class='card shadow'>
        <div 
            class='label-terlaris text-white display-4 card-title text-center' 
            style='height: 40px; background: #ffd600;'

            v-if='label'
        >
            {{ label }}
        </div>
        <h3 
            class='display-4 mt-3 card-title text-center' 
            v-text="title" 
        />
        <div class='card-body px-3 pt-0 pb-3'>
            <div class='text-center py-4' v-if='price'>
                <span class='display-4'>
                    Rp {{ String(price).replace(/(.)(?=(\d{3})+$)/g,'$1.') }}<sub class='h6'>/bln</sub>
                </span>
            </div>
            <div v-if="buybutton" class='text-center my-4'>
                <button @click='buybutton' class='btn btn-primary'>
                    Beli / Nego
                </button>
            </div>
            <ul class='list-group list-group-flush'>
                <li 
                    v-for='list of descList' 
                    class='list-group-item py-2 px-1'
                >
                    <i 
                        class="fa fa-question-circle"
                        :title="list.desc"
                    />
                    <span class=''>
                        {{ list.name }}
                    </span>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        descList: {
            type: Array,
            required: true
        },
        itsActive: {
            type: Boolean,
            default: true
        },
        price: {
            type: [Number],
            required: true
        },
        discount: Number,
        label: String,
        buybutton: Function
    }
}
</script>