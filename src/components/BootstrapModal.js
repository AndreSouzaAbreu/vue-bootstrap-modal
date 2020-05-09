export default {
	name: "BootstrapModal",

	computed: {
		modalCssId() {
			return this.id || toKebabCase(this.title);
		},
		titleCssId() {
			return this.modalCssId + "-title";
		},
	},

	methods: {
		toggleModal() {
			if (this.show)
				$("#" + this.modalCssId).modal("show")
			else
				$("#" + this.modalCssId).modal("hide")
		},
	},

	model: {
		prop: 'show',
		event: 'close'
	},

	mounted() {
		$("#" + this.modalCssId).on("hidden.bs.modal", () => this.$emit("close", false))

		this.toggleModal()
	},

    props: {
        title: {
            type: String,
            required: true
        },
        id: {
            type: String,
        },
        show: {
            type: Boolean,
            required: true
        }
	},

	watch: {
		show: {
			handler: 'toggleModal',
			immediate: true
		}
	},
};

function toKebabCase(str) {
	return str.replace(/[\s_]+/g, "-")
			  .replace(/([a-z])([A-Z])/g, "$1-$2")
			  .replace(/-+/g, "-")
			  .replace(/-+$/, "")
			  .toLowerCase();
}
