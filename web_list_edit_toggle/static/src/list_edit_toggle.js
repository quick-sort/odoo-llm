/** @odoo-module **/
import { ListController } from "@web/views/list/list_controller";
import { patch } from "@web/core/utils/patch";
import { useState } from "@odoo/owl";

patch(ListController.prototype, {
    setup() {
        super.setup(...arguments);
        // Store the original editable value from archInfo
        this._archEditable = this.editable;
        // Start in readonly mode; the toggle button will switch it
        this.editToggleState = useState({ active: false });
        this.editable = false;
    },

    get editable() {
        if (!this.editToggleState) {
            return this._editable;
        }
        return this.editToggleState.active ? this._archEditable : false;
    },

    set editable(value) {
        this._editable = value;
    },

    toggleEditMode() {
        this.editToggleState.active = !this.editToggleState.active;
    },
});
