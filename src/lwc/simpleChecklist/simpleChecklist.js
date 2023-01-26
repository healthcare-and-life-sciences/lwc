import {LightningElement, api} from 'lwc';
import {OmniscriptBaseMixin} from 'vlocity_ins/omniscriptBaseMixin';

export default class ConditionalRender extends OmniscriptBaseMixin(LightningElement) {

    @api enable_checkboxes;
    @api text_data;
    @api simple_checklist_title;

    connectedCallback() {
        this.checklistList = this.text_data.split('|');
        let tempArray = [];
        let listIndex = 1;

        this.checklistList?.forEach(function (acc) {
            const temp = acc.split('^');
            const torf = temp[1] == 'true' ? true : '';
            const labelData = temp[0];
            tempArray.push({label: labelData, value: torf});
            listIndex += 1;
        });
        this.items = tempArray;
    }

    get options() {
        return this.items;
    }


    checklistChecked(e) {
        console.log(JSON.stringify(e.target.name));
    }


}