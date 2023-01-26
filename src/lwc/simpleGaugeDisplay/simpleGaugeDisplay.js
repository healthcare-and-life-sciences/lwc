import { LightningElement, api, track, wire } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import Gauge from '@salesforce/resourceUrl/Gauge';
import {OmniscriptBaseMixin} from 'vlocity_ins/omniscriptBaseMixin';


export default class DataQualityGauge extends OmniscriptBaseMixin(LightningElement)  {
    @api lwc_title;
    @api current_value;
    @api max_value;
    @api gauge_height;
    @api simple_icon;
    @api simple_help_text;
    @api maxValueField;
    @api zone1_color;
    @api zone1_max;
    @api zone2_color;
    @api zone2_max;
    @api zone3_color;

    @api gaugeStyles;


    gaugeInitialized = false;

    connectedCallback(){
       this.max_value = Number(this.max_value);
       this.gaugeStyles = "height:" + this.gauge_height + ";";

        loadScript(this, Gauge).then(() =>{this.initializeGauge()});
        this.gaugeInitialized = true;
    }

    initializeGauge() {
        var opts = {
            staticZones: [
                {strokeStyle: (this.zone1_color), min: 0, max: (this.max_value * (this.zone1_max/100))}, // Yellow
                {strokeStyle: (this.zone2_color), min: (this.max_value *(this.zone1_max/100)), max: (this.max_value *(this.zone2_max/100))}, // Green
                {strokeStyle: (this.zone3_color), min: (this.max_value *(this.zone2_max/100)), max: (this.max_value)}  // Red
            ],
            staticLabels: {
                font: "10px sans-serif",  // Specifies font
                labels: [0,(this.max_value *(this.zone1_max/100)),(this.max_value *(this.zone2_max/100)),(this.max_value) ],  // Print labels at these values
                color: "#000000",  // Optional: Label text color
                fractionDigits: 0  // Optional: Numerical precision. 0=round off.
              },
            angle: 0, // The span of the gauge arc
            lineWidth: 0.2, // The line thickness
            pointer: {
                length: 0.5, // // Relative to gauge radius
                strokeWidth: 0.035, // The thickness
                color: '#000000' // Fill color
            },
            limitMax: false,     // If false, max value increases automatically if value > maxValue
            limitMin: false,     // If true, the min value of the gauge will be fixed
            strokeColor: '#E0E0E0',  // to see which ones work best for you
            generateGradient: true,
            highDpiSupport: true
        };
        var canvas2 = this.template.querySelector('.gauge')// your canvas element
        var gauge = new window.Gauge(canvas2).setOptions(opts); // create sexy gauge!
        gauge.maxValue = this.max_value; // set max gauge value
        gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
        gauge.animationSpeed = 32; // set animation speed (32 is default value)
        gauge.type = 'zones'; // set to the zones type of gauge
        gauge.set(this.current_value); // set actual value
        gauge.setTextField(this.template.querySelector('.gaugeValue'));
    }


}