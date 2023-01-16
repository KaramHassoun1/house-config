import {Box, Flex, Heading, Image, Text} from "@chakra-ui/react";
import {useFormContext} from "react-hook-form";
import Description from "../Description";
// @ts-ignore
import HouseSizeImg from "../../assets/HouseSize.png";
import HouseSizes from "../../data/houseSizes";
import {useState} from "react";

export default function HouseSize() {
    const [displayedImage, setDisplayedImage] = useState(HouseSizeImg);
    return (
        <Flex width="100vw" height="100vh" justifyContent="space-around" alignItems="center">
            <Image src={require("assets/" + displayedImage)} height="80vh" alignSelf="flex-start"/>
            <Description setDisplayedImage={setDisplayedImage}/>
        </Flex>);

}
