const CertificationsPreview = () => {
    return (
       <>
           {/*Header*/}
           <h3 className="mb-2 mt-3">Certifications</h3>

           {/* Row */}
           <div className="row mb-4">

               {/*Column 1*/}
               <div className="col-6 d-flex flex-column">
                   <p className="fw-semibold">Certification 1</p>
                   <p className="fst-italic">Organization</p>
               </div>

               {/*Column 2*/}
               <div className="col-6 d-flex flex-column">
                   <p className="fw-semibold">Certification 2</p>
                   <p className="fst-italic">Organization</p>
               </div>

           </div>

       </>
    )
}

export default CertificationsPreview;