import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const CategoriesTab = () => {
  
    return (
        <div>
             <Tabs>
    <TabList>
      <Tab>Racing Car</Tab>
      <Tab>Tructor</Tab>
      <Tab>Music Car</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default CategoriesTab;