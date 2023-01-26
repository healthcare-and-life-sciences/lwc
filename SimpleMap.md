![Logo](./images/ahlsbanner.png)

# A-HLS Simple Map Documentation

## Overview

Displays a Google Map based on fields identified on the record.  Component settings allow the definition of:

- Map Height

- Fields for each location data point

- Pin Title

- Pin Description

- LWC Title and Icon

  ![simpleMap](./images/simpleMap.png)



```

property name="state" type="String" label="Field for State" description="API Name for the field on this record that holds the State for this location" />

property name="city" type="String" label="Field for City" description="API Name of the field on this record that holds the City for this location" />

property name="country" type="String" label="Field for Country" description="API Name of the field on this record that holds the Country for this location" />

property name="street" type="String" label="Field for Street" description="API Name for the field on this record that holds the Street for this location" />

```

![simpleMapSetup](./images/simpleMapSetup.png)



* * *

## Package Includes:

### **OmniScript Demo/SimpleMapDisplay**

The above Omniscirpt shows how to use the map LWC

