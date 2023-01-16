import {Box, Card, CardBody, CardHeader, Heading, Radio, RadioGroup, Stack, StackDivider, Text} from "@chakra-ui/react";
import houseSizes from "../data/houseSizes";
import {useFormContext} from "react-hook-form";

// @ts-ignore
export default function Description({setDisplayedImage}) {
    const {register} = useFormContext();
    return (
        <Card width="30vw" maxH="80vh">
            <CardHeader paddingBottom={0}>
                <Heading size='lg' color="blackAlpha.800">House size</Heading>
                <Text pt='2' fontSize='sm' color="blackAlpha.700">
                    You can choose from a range of different layouts for your bespoke home.
                    Select the house size you want here.
                </Text>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider/>} spacing='4'>
                    <Box>
                        <RadioGroup defaultValue='1'>
                            {houseSizes.map((houseSize) => (
                                    <Box margin="20px">
                                        <Radio key={houseSize.id}
                                               value={houseSize.id.toString()}
                                               {...register("houseSizeId")}
                                               onChange={() => setDisplayedImage(houseSize.image)}
                                        >
                                            <Heading size='xs' textTransform='uppercase' color="blackAlpha.800">
                                                {houseSize.title}
                                            </Heading>
                                        </Radio>
                                        <Box marginLeft="20px">
                                            {houseSize.description.map((description) => (
                                                <Text pt='2' fontSize='xs' color="blackAlpha.700">{description}</Text>
                                            ))}
                                            <Text pt='2' fontSize='xs'
                                                  color="blackAlpha.700">{houseSize.priceDescription}</Text>
                                        </Box>
                                    </Box>
                                )
                            )}
                        </RadioGroup>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}
