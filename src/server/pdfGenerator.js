const { jsPDF } = require("jspdf");
const path = require("path");
const fs = require("fs");
const PDFMerger = require("pdf-merger-js");

const getPdf = async (results) => {
  const logo = fs.readFileSync(
    path.join(__dirname, "../data/icons/5fed71c81cba0c290d1753da_Logo.png")
  );

  const robotoRegular = fs
    .readFileSync(
      path.join(__dirname, "../data/fonts/Roboto/Roboto-Regular.ttf")
    )
    .toString("base64");

  const robotoBold = fs
    .readFileSync(
      path.join(__dirname, "../data/fonts/Roboto/Roboto-Bold.ttf")
    )
    .toString("base64");

  const doc = new jsPDF();
  const pdfMerger = new PDFMerger();

  doc.addFileToVFS("robotoRegular.ttf", robotoRegular);
  doc.addFont("robotoRegular.ttf", "robotoRegular", "regular");

  doc.addFileToVFS("robotoBold.ttf", robotoBold);
  doc.addFont("robotoBold.ttf", "robotoBold", "bold");

  doc.setFont("robotoRegular", "regular");
  doc.setDrawColor("#8c52ff");
  doc.setLineWidth(1.6);
  doc.line(31, 0, 31, 48);
  doc.line(39, 0, 39, 24);

  doc.setFontSize(24);
  doc.text("RESULTS", 31, 120, { charSpace: 1.4 });

  doc.setFont("robotoBold", "bold");
  doc.setFontSize(46);
  doc.text(results, 31, 138);

  doc.setFillColor("#8c52ff");
  doc.circle(190, 280, 62, "F");

  doc.setFont("robotoRegular", "regular");
  doc.setFontSize(15);
  doc.setTextColor("#494c5f");
  doc.text("Streamoid Technologies", 22, 264, { charSpace: 0.6 });

  doc.addImage(logo, "PNG", 22, 270, 32, 4);

  doc.save("first page.pdf");

  await pdfMerger.add("first page.pdf");
  await pdfMerger.add(
    path.join(__dirname, "../data/pdf/FASHION SEARCH-2-18.pdf")
  );

  await pdfMerger.save("FASHION SEARCH.pdf");
};

module.exports = { getPdf };


