![Logo](./images/ahlsbanner.png)

# A-HLS Simple Big Text Documentation

## Overview

Displays a field of information, with optional formatting.  LWC Configuration includes:

- LWC Title and Icon

- Help Text

- Background Color

- Field alignment in the LWC space

- Percentage of space used by LWC

- CSS Value for font size

- CSS Value for font color

  

  ![simpleBigText](./images/simpleBigText.png)



![simpleBigTextSetup](./images/simpleBigTextSetup.png)

```
<property name="currentValueField" type="String" label="API Name of the field containing the current value" />
<property name="LWCTitle" type="String" label="Title" default="Simple Big Text" description="Title of the component when displayed on the record page" />
<property name="simpleIcon" type="String" label="Icon Reference" default="utility:broadcast" description="Icon identifier for this component" />
<property name="simpleHelpText" type="String" label="Help Text" description="The text that shows in the help icon on the component "/>
<property name="backgroundColor" type="String" label="Background Color" default="white" description="Color to be used for the background of the space. Enter a simple CSS color name or a hex value."/>
<property name="txtAlign" type="String" datasource="left,right,center" default="center" label="Alignment of the text in the available space. " />
<property name="percentWidth" type="Integer" default="100" max="100" min="0" label="Percent width" description="Percentage of the available space the image should fill. " />
<property name="fontSize" type="String" default="1em" label="CSS value describing the desired font size" />
<property name="fontColor" type="String" default="black" label="CSS value for the font color" />
```

 

* * * *






### **OmniScript Demo/SimpleBigText**

* The above OS shows how to use the LWC
