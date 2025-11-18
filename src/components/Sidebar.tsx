import SideItem from "./SideItem.tsx";
import EducationForm from "./forms/EducationForm.tsx";
import PersonalInformationForm from "./forms/PersonalInformationForm.tsx";
import WorkExperienceForm from "./forms/WorkExperienceForm.tsx";
import LanguagesForm from "./forms/LanguagesForm.tsx";
import SkillsForm from "./forms/SkillsForm.tsx";
import CertificationsForm from "./forms/CertificationsForm.tsx";
import ProjectsForm from "./forms/ProjectsForm.tsx";



const Sidebar = () => {
    return (
        <>
            {/*Left sidebar*/}
            <div className = "d-flex flex-column ms-4 mt-3 gap-3 w-50">

                {/*Personal Information Section*/}
                <SideItem title="Personal Information" icon="bi-person-fill">
                    <PersonalInformationForm></PersonalInformationForm>
                </SideItem>

                {/*Education Section*/}
                <SideItem title="Education" icon="bi-mortarboard-fill">
                    <EducationForm></EducationForm>
                </SideItem>

                {/*Work Experience Section*/}
                <SideItem title="Work Experience" icon="bi-suitcase-lg-fill">
                    <WorkExperienceForm></WorkExperienceForm>
                </SideItem>

                {/*Languages Section*/}
                <SideItem title="Languages" icon="bi-globe-americas-fill">
                    <LanguagesForm></LanguagesForm>
                </SideItem>

                {/*Skills Section*/}
                <SideItem title="Skills" icon="bi-lightbulb-fill">
                    <SkillsForm></SkillsForm>
                </SideItem>

                {/*Certifications Section*/}
                <SideItem title="Certifications" icon="bi-file-text-fill" canDelete={true}>
                    <CertificationsForm></CertificationsForm>
                </SideItem>

                {/*Projects Section*/}
                <SideItem title="Projects" icon="bi-folder-fill" canDelete={true}>
                    <ProjectsForm></ProjectsForm>
                </SideItem>
            </div>
        </>
    )
}

export default Sidebar;