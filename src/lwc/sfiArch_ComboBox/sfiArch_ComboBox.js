/**
 * This custom LWC uses the Salesforce Combobox base LWC to provide a Single Select dropdown Vlocity LWC
 * that can send an email.
 *
 * @original author Dean Fischesser (dfischesser@salesforce.com)
 * label and incoming value updates: Duane
 *
 * @version 1.1
 *
 * History
 * =======
 * 1.0 - August 25, 2020 - Initial Version
 * 1.1 - Jan 14, 2022 - Added inbound label and default value, cleaned out unused getters/setters.
 */

import { LightningElement, track, api } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_ins/omniscriptBaseMixin';

export default class sfiArch_ComboBox extends OmniscriptBaseMixin(LightningElement) {

    @api mydata;   
    @api inboundvalue;
    @api fieldlabel;

    get options() {
        return this.mydata;
    }
connectedCallback(){
        console.log('in connectedCallback');
        this.value=this.inboundvalue;
        this.mylabel=this.fieldlabel;
   }    

    handleChange(event) {
        this.value = event.detail.value;
        let selectedItem = [];
        selectedItem.push({selectedDataNode:this.value});
        this.omniUpdateDataJson(selectedItem[0]);
    }
}