import PaginatedPreview from "./PaginatedPreview";
import type {CvProps} from "../types.ts";


type PreviewProps = {
    cvData: CvProps;
};

const Preview = ({ cvData }: PreviewProps) => {
    return (
        <div className=" w-75 p-4 mt-3 h-auto overflow-auto">
            <PaginatedPreview cvData={cvData} />
        </div>
    );
};

export default Preview;
