import { LightningElement, api, track, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import {OmniscriptBaseMixin} from 'vlocity_ins/omniscriptBaseMixin';

export default class SimpleMapDisplay extends OmniscriptBaseMixin(LightningElement)  {
    // values from LWC Properties provided in the OS
    @api state;
    @api city;
    @api country;
    @api street;
    @api title;
    @api description;


    @api recordId;
    @api LWCTitle;
    @api mapStyles;
    @api mapHeight;

    @api simpleValue;

    @api simpleDescr;
    @api simpleIcon;
    @api mapMarkers;

    @track googleLink;

    connectedCallback(){
        this.iconField = this.simpleIcon;
        this.mapStyles = "height:" + this.mapHeight + ";";

        this.mapMarkers = [
            {
                location: {
                    Street: this.street,
                    City: this.city,
                    State: this.state,
                    Country: this.country,
                },
                title: 'Title',
                description: 'Map Description', //escape the apostrophe in the string using &#39;
            },
        ];
        this.googleLink = "https://google.com/maps/place/" + this.street +",+" + this.city + ",+" + this.street;
    }
}