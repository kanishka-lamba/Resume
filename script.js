var button = document.getElementById("create_pdf");
button.onclick = () => {
  var element = document.getElementsByTagName("body")[0];
  html2pdf(element, {
    margin: 5,
    filename: "kanishka_lamba_resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
    jsPDF: { unit: "mm", format: "a2", orientation: "portrait" },
  });
  alert("Thank you for downloading the PDF.");
};
