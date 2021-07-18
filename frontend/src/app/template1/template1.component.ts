import { Component, ViewChild,ElementRef,OnInit } from '@angular/core';
import pdfmake from 'pdfmake/build/pdfmake'
import vfs_fonts from 'pdfmake/build/vfs_fonts';
//import * as jspdf from 'jspdf';  
//import htmlToPdfmake from 'html-to-pdfmake';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
pdfmake.vfs = vfs_fonts.pdfMake.vfs;  

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css']
})
export class Template1Component{
  
 // @ViewChild('makepdf')  makepdf: ElementRef;
  public generatePdf()  
  {  
    var data = document.getElementById('makepdf');  
  html2canvas(data).then(canvas => {  
    // Few necessary setting options  
    var imgWidth = 208;   
    var pageHeight = 295;    
    var imgHeight = canvas.height * imgWidth / canvas.width;  
    var heightLeft = imgHeight;  

    const contentDataURL = canvas.toDataURL('image/png')  
    let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
    var position = 0;  
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
    pdf.save('MYPdf.pdf'); // Generated PDF   
  });  
}  
}  

  
    
//     let doc = new jsPDF();
//     let specialElementHandlers = {
//       '#editor': function(element , renderer){
//         return true ; 
//       }
//     };
//     let content = this.makepdf.nativeElement;
//     doc.fromHTML(content.innerHTML,15,15,{

//       'width': 190,
//       'elmentHandler':specialElementHandlers
//     });

// doc.save('test.pdf');
//   }
//   title = 'htmltopdf';
// }

// public generatePdf(){
//   console.log('pdffunction called');
//   const doc = new jsPDF();
//   //get table html
//   const pdfTable = this.pdfT.nativeElement;
  
//   //html to pdf format
//   var html = htmlToPdfmake(pdfTable.innerHTML);
//  console.log(html);
//   const documentDefinition = { content: html };
//   pdfmake.createPdf(documentDefinition).open();
  
// }
  

