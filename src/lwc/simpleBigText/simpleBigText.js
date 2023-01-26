import { LightningElement, api } from 'lwc';
import {OmniscriptBaseMixin} from 'vlocity_ins/omniscriptBaseMixin';
export default class DataQualityGauge extends OmniscriptBaseMixin(LightningElement) {

    @api lwc_title;
    @api simple_icon;
    @api background_color;
    @api txt_align;
    @api percent_width;
    @api font_size;
    @api font_color;
    @api field_value_output;

    @api cardStyles;
    @api textStyles;

    connectedCallback(){
        this.cardStyles = "background-color: " + this.background_color + "; text-align: " + this.txt_align + "; width: " + this.percent_width + "%; font-size:" + this.font_size + ";";
        this.textStyles = "padding: 0 20px; color: " + this.font_color + ";";
    }
}