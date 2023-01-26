/**
 * Generic Dual Picklist / "Shuttle applet" Lightning Web Component for OmniScript
 *
 * This works by being pointed at an input element in the OmniScript data JSON
 * and being configured as to how to present the data from that element.
 *
 * Items moved to the right list will be saved to the Omniscript node represented by the name
 * of this element.
 *
 * @author Dean Fischesser <dfischesser@vlocity.com>
 *
 **/

import {LightningElement,track,api} from 'lwc';
import {OmniscriptBaseMixin} from 'vlocity_ins/omniscriptBaseMixin';

export default class sfiArch_RichText extends OmniscriptBaseMixin(LightningElement) {

    @api richtextvalue;
    @api myVal='Enter Rich Text';

    formats = ['font', 'size', 'bold', 'italic', 'underline',
        'strike', 'list', 'indent', 'align', 'link',
        'image', 'clean', 'table', 'header', 'color'];

    connectedCallback(){
        this.myVal = this.richtextvalue;
    }

    handleBlur(evt){
        let selectedItem = [];
        selectedItem.push({enteredData:evt.target.value});
        console.log(evt.target.value);
        this.omniUpdateDataJson(selectedItem);
    }
}