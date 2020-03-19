export default {
	name: "BootstrapModal",

	computed: {
		modal() {
			return $("#" + this.id)
		}
	},

	methods: {
		showModal() {
			if (!this.isVisible) return

			this.$nextTick(() => {
				this.modal.modal("show").on("hidden.bs.modal", () => this.$emit("close", false))
			})
		},
	},

	model: {
		prop: 'isVisible',
		event: 'close'
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
        isVisible: {
            type: Boolean,
            required: true
        }
	},

	watch: {
		isVisible: {
			handler: 'showModal',
			immediate: true
		}
	},
};
