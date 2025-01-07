---
Fach: "[[Mathematik]]"
Semester: 1
ECTS: 8
tags:
  - Veranstaltung
Aktiv: true
Abgeschlossen: false
Dozent: 
Note:
---
# Analysis 1

## Serien
```dataviewjs
const folder = app.vault.getAbstractFileByPath("Mathematik/Analysis 1/Übungsserien");

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
| Serie 01  | 3           | 4         | 75    |
| Serie 02  |             |           | 0     |
| Serie 03  |             |           | 0     |
| Serie 04  |             |           | 0     |
| Serie 05  |             |           | 0     |
| Serie 06  |             |           | 0     |
| Serie 07  |             |           | 0     |
| Serie 08  |             |           | 0     |
| Serie 09  |             |           | 0     |
| Serie 10  |             |           | 0     |
| Serie 11  |             |           | 0     |
| Serie 12  |             |           | 0     |
| Serie 13  |             |           | 0     |
| **Total** | 3           | 4         | 75    |
<!-- TBLFM: @>$2=sum(@I..@-1) -->
<!-- TBLFM: @>$3=sum(@I..@-1) -->
<!-- TBLFM: $>=(($2/$3)*100) -->
