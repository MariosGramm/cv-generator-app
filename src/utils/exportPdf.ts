import html2pdf from "html2pdf.js";

export const exportPdf = (element: HTMLElement | null) => {
    if (!element) return;

    const options = {
        margin: 0,
        filename: "cv.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak:{ mode: ['avoid-all'] }
    } as const;

    html2pdf().from(element).set(options).save();
};
