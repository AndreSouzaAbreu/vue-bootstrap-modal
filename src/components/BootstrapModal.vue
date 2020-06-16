<template>
    <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true" :aria-labelledby="titleCssId" :id="modalCssId">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :id="titleCssId">
                        {{ title }}
                    </h5>
                    <button type="button" data-dismiss="modal" class="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./BootstrapModal.js"></script>
