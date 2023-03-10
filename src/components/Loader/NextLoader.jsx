import { ThreeDots } from "react-loader-spinner";
import { NextWrapper } from "./Loader.style";

export const NextLoader = () => {
    return (
        <NextWrapper>
            <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="blue" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            />
        </NextWrapper>
    ) 
};