import {useState} from "react";
import {Box, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";

export default function FormNavigation({tabIndex, setTabindex}: any) {

    // @ts-ignore
    const handleSliderChange = (event) => {
        setTabindex(parseInt(event.target.value, 10))
    }

    const handleTabsChange = (index: number) => {
        setTabindex(index)
    }

    return (
        <Box>
            <input
                type='range'
                min='0'
                max='2'
                value={tabIndex}
                onChange={handleSliderChange}
            />

            <Tabs index={tabIndex} onChange={handleTabsChange}>
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>Click the tabs or pull the slider around</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Yeah yeah. What's up?</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Oh, hello there.</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
}
