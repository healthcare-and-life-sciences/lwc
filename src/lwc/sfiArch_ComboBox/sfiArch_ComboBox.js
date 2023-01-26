/**
 * This custom LWC uses the Salesforce Combobox base LWC to provide a Single Select dropdown Vlocity LWC
 * that can send an email.
 */

import { LightningElement, track, api } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_ins/omniscriptBaseMixin';

export default class sfiArch_ComboBox extends OmniscriptBaseMixin(LightningElement) {

    @api mydata;   
    @api inboundvalue;
    @api fieldlabel;

    get options() {
        console.log(JSON.stringify(this.mydata))
        console.log();
        return this.mydata;
    }
    connectedCallback(){
        console.log('in connectedCallback ' + this.inboundvalue);
        this.value=this.inboundvalue;
   }    

    handleChange(event) {
        this.value = event.detail.value;
        let selectedItem = [];
        selectedItem.push({selectedDataNode:this.value});
        console.log(JSON.stringify(selectedItem))
        this.omniUpdateDataJson(selectedItem[0]);
    }
}