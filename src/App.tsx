import TopNavbar from "./components/TopNavbar.tsx";
import Sidebar from "./components/Sidebar.tsx";
import { useCv } from "./hooks/useCv.ts";
import PaginatedPreview from "./components/PaginatedPreview.tsx";
import {useRef} from "react";
import {exportPdf} from "./utils/exportPdf.ts";

function App() {

    const {
        CvData,
        setPersonalInfo,
        addEducationItem,
        updateEducationItem,
        removeEducationItem,
        addExperienceItem,
        updateExperienceItem,
        removeExperienceItem,
        addLanguageItem,
        updateLanguageItem,
        removeLanguageItem,
        addSkillItem,
        updateSkillItem,
        removeSkillItem,
        addCertificationItem,
        updateCertificationItem,
        removeCertificationItem,
        addProjectItem,
        updateProjectItem,
        removeProjectItem
    } = useCv();

    const printRef = useRef(null);

    const handleDownload = () => {
        if (printRef.current) {
            exportPdf(printRef.current);
        }
    };


    return (
        <>
            <TopNavbar onDownload={handleDownload} />

            <div className="d-flex justify-content-between align-items-start w-100">
                <Sidebar
                    cvData={CvData}
                    setPersonalInfo={setPersonalInfo}
                    addEducationItem={addEducationItem}
                    updateEducationItem={updateEducationItem}
                    removeEducationItem={removeEducationItem}
                    addExperienceItem={addExperienceItem}
                    updateExperienceItem={updateExperienceItem}
                    removeExperienceItem={removeExperienceItem}
                    addLanguageItem={addLanguageItem}
                    updateLanguageItem={updateLanguageItem}
                    removeLanguageItem={removeLanguageItem}
                    addSkillItem={addSkillItem}
                    updateSkillItem={updateSkillItem}
                    removeSkillItem={removeSkillItem}
                    addCertificationItem={addCertificationItem}
                    updateCertificationItem={updateCertificationItem}
                    removeCertificationItem={removeCertificationItem}
                    addProjectItem={addProjectItem}
                    updateProjectItem={updateProjectItem}
                    removeProjectItem={removeProjectItem}
                />

                <PaginatedPreview ref={printRef} cvData={CvData} />
            </div>
        </>
    );
}

export default App;
