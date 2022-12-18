var typed = new Typed(".input", {
    strings:["dev_Max weather insights.", "Get the latest updates from trusted sources..", "Type your area name below👇"],
    typeSpeed: 160,
    backSpeed: 15,
    loop: true

})




window.jsPDF = window.jspdf.jsPDF;

// Convert HTML content to PDF
function generatePdf() {
    var doc = new jsPDF();
	
    // Source HTMLElement or a string containing HTML.
    var elementHTML = document.querySelector("#toBePdf");

    doc.html(elementHTML, {
        callback: function(doc) {
            // Save the PDF
            doc.save('14 weather predictions /Dev_Max/.pdf');
        },
        margin: [10, 10, 10, 10],
        autoPaging: 'text',
        x: 0,
        y: 0,
        width: 190, //target width in the PDF document
        windowWidth: 675 //window width in CSS pixels
    });
}