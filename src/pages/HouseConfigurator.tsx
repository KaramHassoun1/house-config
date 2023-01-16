//Home configrator form component with react hook form and multipage form


import {useForm, FormProvider} from "react-hook-form";
import {useState} from "react";
import {Card} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import FormNavigation from "../components/FormNavigation";
import HouseSize from "../components/HouseSize";
import {RoofStyle} from "../components/RoofStyle";
import {Basement} from "../components/Basement";
import {Summary} from "../components/Summary";

export default function HouseConfigurator() {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();
    const conditionalComponent = () => {
        switch (step) {
            case 1:
                return <HouseSize/>;
            case 2:
                return <RoofStyle/>;
            case 3:
                return <Basement/>;
            default:
                return <Summary/>;
        }
    };
    const onSubmit = (data: any) => {
        navigate('/');
    };
    const formMethods = useForm();
    return (
        <Card>
            <FormProvider {...formMethods}>
                <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                    {conditionalComponent()}
                    <FormNavigation tabIndex={step} setTabindex={setStep}/>
                </form>
            </FormProvider>
        </Card>

    );

}
