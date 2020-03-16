export default {
    name: "BootstrapModal",

    created() {
        this.toggleModal()
	},

	methods: {
		hideModal() {
			$("#" + this.id).modal("hide")
		},

		showModal() {
			this.$nextTick(() => {
				$("#" + this.id)
					.on("shown.bs.modal", () => this.$emit("open"))
					.on("hidden.bs.modal", () => this.$emit("close"))
					.modal("show")
			})
		},

		toggleModal() {
			if (this.show)
				this.showModal()
			else
				this.hideModal()
		},
	},

	updated() {
		this.toggleModal()
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
};
