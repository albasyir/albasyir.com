<template>
    <div class='card'>
        <div class='card-body'>
            <h3 class='card-title text-center' v-text="title" />
            <ul class='list-group list-group-flush'>
                <li 
                    v-for='list of descList' 
                    class='list-group-item py-1 px-1'
                >
                    <i 
                        class="fa fa-question-circle"
                        data-container="body"
                        data-toggle="popover" 
                        data-placement="left" 
                        :data-content="list.desc"
                    />
                    {{ list.name }}
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        descList: Array,
        itsActive: Boolean
    }
}
</script>