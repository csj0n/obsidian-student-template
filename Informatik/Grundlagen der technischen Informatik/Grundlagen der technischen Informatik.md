---
Fach: "[[Informatik]]"
Semester: 1
ECTS: 5
tags:
  - Veranstaltung
Aktiv: true
Abgeschlossen: false
Dozent: 
Note:
---
# Grundlagen der technischen Informatik
[Links]() | [Links]()
## Unterlagen
[Links zu PDFs]()
## Vorlesungen

```dataviewjs
const folder = app.vault.getAbstractFileByPath("Informatik/Grundlagen der technischen Informatik/Vorlesungen");

if (folder && folder.children) {
    const lecutreNotes = folder.children.filter(f => f.extension === "md")
	const pdfFiles = folder.children.filter(f => f.extension === "pdf");
	
    dv.table(
        ["Notizen", "PowerPoint", "Datum"], 
        lecutreNotes.map(f => {
	        const metadata = dv.page(f.path);
	        const lectureNumber = f.name.replace(".md", "").substring(0, 2);
	        const matchingPdf = pdfFiles.find(pdf => pdf.name.startsWith(lectureNumber));
	        
	        return [
	            dv.fileLink(f.path, false, f.name.replace(".md", "")),
				matchingPdf ? dv.fileLink(matchingPdf.path, false, "PowerPoint") : "Keine PPP",
	            metadata.datum ? metadata.datum : ""
	        ]
        })
    );
}
```


## Serien
```dataviewjs
const folder = app.vault.getAbstractFileByPath("Informatik/Grundlagen der technischen Informatik/Übungsserien");

if (folder && folder.children) {
    const pdfFiles = folder.children.filter(f => f.extension === "pdf").filter(f => !f.path.includes("gelöst") && !f.path.includes("korrigiert"))
    
    pdfFiles.sort((a, b) => { return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }); });
    
    dv.table(
        ["Serien", "Gelöst", "Korrigiert", "Xournal++"], 
        pdfFiles.map(f => [
            dv.fileLink(f.path, false, f.name.replace(".pdf", "")),
            dv.fileLink(f.path.replace(".pdf", " gelöst.pdf"), false, "Gelöst"),
            dv.fileLink(f.path.replace(".pdf", " korrigiert.pdf"), false, "korrigiert"),
            dv.fileLink(f.path.replace(".pdf", " gelöst.xopp"), false, "Edit")
        ])
    );
}
```

| **Serie** | **Richtig** | **Total** | **%** |
| --------- | ----------- | --------- | ----- |
| Serie 01  | 14          | 14        | 100   |
| Serie 02  |             |           | 0     |
| Serie 03  |             |           | 0     |
| Serie 04  |             |           | 0     |
| Serie 05  |             |           | 0     |
| Serie 06  |             |           | 0     |
| Serie 07  |             |           | 0     |
| Serie 08  |             |           | 0     |
| Serie 09  |             |           | 0     |
| Serie 10  |             |           | 0     |
| **Total** | 14          | 100       | 14    |
<!-- TBLFM: @>$2=sum(@I..@-1) -->
<!-- TBLFM: $>=(($2/$3)*100) -->