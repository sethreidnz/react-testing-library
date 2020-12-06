import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export const generatePdf = async (element: HTMLElement) => {
  const canvas = await html2canvas(element);
  var imgData = canvas.toDataURL("image/png");
  var doc = new jsPDF("p", "mm");
  doc.addImage(imgData, "PNG", 0, 0, 10, 10);
  doc.save("download.pdf");
};
