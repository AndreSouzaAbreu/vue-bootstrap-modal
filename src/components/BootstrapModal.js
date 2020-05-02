export default {
	name: "BootstrapModal",

	methods: {
		showModal() {
			if (this.show)
				$("#" + this.id).modal("show")
		},
	},

	model: {
		prop: 'show',
		event: 'close'
	},

	mounted() {
		$("#" + this.id).on("hidden.bs.modal", () => this.$emit("close", false))
		this.showModal()
	},

    props: {
        title: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        show: {
            type: Boolean,
            required: true
        }
	},

	watch: {
		show: {
			handler: 'showModal',
			immediate: true
		}
	},
};
