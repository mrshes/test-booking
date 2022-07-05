export default {
    methods: {
        /**
         * Translate the given key.
         */
        __(key) {
            let langStrings = this.$page.props.language.strings
            return langStrings[key] || key;
        },
    },
    computed:{
        isAuth(){
            let user = this.$page.props.auth.user
            return !!user
        },
        locale(){
            return this.$page.props.locale
        }
    }
}
