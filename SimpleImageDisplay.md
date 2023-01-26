![Logo](./images/ahlsbanner.png)

# A-HLS Simple Image Display Documentation

## Overview

Displays an image based on a URL provided.  LWC Configuration includes:

- URL for the image
- Background Color
- Alignment of the image in the space provided
- Definition (%) of the width used for the image
- CSS position definition relative to the LWC placement
- Z-Index of the image (For placement on top of or behind other page elements)

![simpleImageDisplay](./images/simpleImageDisplay.png)





```
<property name="imgURL" type="String" label="URL for the image" description="Image URL must be publically available for this component to work. " />
<property name="backgroundColor" type="String" label="Background Color" default="unset" description="Color to be used for the background of the space. Enter a simple CSS color name or a hex value."/>
<property name="txtAlign" type="String" datasource="left,right,center" label="Alignment of the image in the available space. " />
<property name="percentWidth" type="Integer" default="100" max="100" min="0" label="Percent width" description="Percentage of the available space the image should fill. " />
<property name="imgHeight" type="String" label="Image height" description="define the desired height of the image, width will scale appropriately.  Please use CSS defined units eg. rem, em, px, etc. Leave blank to use the actual dimensions of the image." />
<property name="imgPosition" type="String" datasource="absolute,fixed,relative" default="" label="Image position" description="Defines the placement of the image relative to the placement on the page. " />
<property name="zIndex" type="String" label="Z-Index" default="" description="Defines the Z-Index of the image (the layer relative to other layers on the page). " />
```

![simpleImageDisplaySetup](./images/simpleImageDisplaySetup.png)



### **OmniScript Demo/SimpleImaeDisplay**

* The above OS shows how to use the LWC

  
