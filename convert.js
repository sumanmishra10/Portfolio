import { PDFDocument } from 'pdf-lib';
import fs from 'fs';

async function createPdf() {
  const pdfDoc = await PDFDocument.create();
  const jpgImageBytes = fs.readFileSync('C:\\Users\\lilar\\Downloads\\Suman_CV_page-0001.jpg');
  const jpgImage = await pdfDoc.embedJpg(jpgImageBytes);
  const jpgDims = jpgImage.scale(1);
  const page = pdfDoc.addPage([jpgDims.width, jpgDims.height]);
  page.drawImage(jpgImage, {
    x: 0,
    y: 0,
    width: jpgDims.width,
    height: jpgDims.height,
  });
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('C:\\SumanPortfolio\\public\\assets\\Suman_Resume.pdf', pdfBytes);
  console.log('PDF created successfully!');
}

createPdf().catch(console.error);
