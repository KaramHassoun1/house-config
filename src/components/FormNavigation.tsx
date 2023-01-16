import {Box, Flex, Tab, TabList, Tabs} from "@chakra-ui/react";

export default function FormNavigation({tabIndex, setTabindex}: any) {

    // @ts-ignore
    const handleSliderChange = (event) => {
        setTabindex(parseInt(event.target.value, 10))
    }

    const handleTabsChange = (index: number) => {
        setTabindex(index)
    }

    return (
        <Flex position="absolute"
              bottom="20px"
              width="100%"
              marginX="auto"
              flexDirection="column"
              alignItems="center"
              justifyContent="center">
            <input
                style={{width: "300px"}}
                type='range'
                min='0'
                max='3'
                value={tabIndex}
                onChange={handleSliderChange}
            />

            <Tabs index={tabIndex} onChange={handleTabsChange}>
                <TabList>
                    <Tab>HOUSE SIZE</Tab>
                    <Tab>ROOF STYLE</Tab>
                    <Tab>BASEMENT</Tab>
                    <Tab>SUMMARY</Tab>
                </TabList>
            </Tabs>
        </Flex>
    );
}
