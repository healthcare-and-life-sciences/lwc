import { LightningElement, api } from 'lwc';
import {OmniscriptBaseMixin} from 'vlocity_ins/omniscriptBaseMixin';
export default class ConditionalRender extends OmniscriptBaseMixin(LightningElement) {
    @api imgurl;
    @api background_color;
    @api txt_align;
    @api percent_width;
    @api img_height;
    @api img_position;


    @api imageURL;
    @api imgStyles;
    @api cardStyles;
    connectedCallback() {
        this.imageURL = this.imgurl;
        this.cardStyles = "background-color: " + this.background_color + "; text-align: " + this.txt_align + "; width: " + this.percent_width + "%;position: " + this.img_position + ";";
        this.imgStyles = "height: " + this.img_height + ";";
    }
}