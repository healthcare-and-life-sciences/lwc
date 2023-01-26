![Logo](./images/ahlsbanner.png)

# A-HLS [Accelerator] Documentation 

## Overview

A collection of LWC components that can be used in Omnistudio

## LWC List

* [Dual Pick List](DualPickList.md)
* [Rich Text Field](RichTextField.md)

* [Set Value](SetValue.md)
* [Simple Checklist](SimpleChecklist.md)
* [Simple Gauge](SimpleGauge.md)
* [Simple Map](SimpleMap.md)
* [Simple Image Display](SimpleImageDisplay.md)
* [Simple Big Text](SimpleBigText.md)



------

## Business Objective

The goal of this project is to provide Omnistudio developers with LWC compoennts that can be used in Omniscript. 



## Vlcoity_Ins vs Omnistudio



SF supports two different versions of Omniscripts where these LWC's can be used. These LWC's are ready to be used in vlocity_ins but if you are using Omnistudio Core, then you need to make the follwoing change on the LWC JS file



```javascript
// import {OmniscriptBaseMixin} from 'vlocity_ins/omniscriptBaseMixin';
import {OmniscriptBaseMixin} from 'omnistudio/omniscriptBaseMixin';
```



You can find more info at https://help.salesforce.com/s/articleView?id=sf.os_differences_between_omnistudio_and_omnistudio_for_vlocity.htm&type=5 
