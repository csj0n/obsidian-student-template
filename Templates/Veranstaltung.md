---
Fach: "[[<% tp.file.folder(true).split("/")[0] %>]]"
Semester: 
ECTS: 5
tags:
  - Veranstaltung
Aktiv: true
Abgeschlossen: false
Dozent: 
Note:
---
# <% tp.file.title %>
## Vorlesungen
```dataview
TABLE WITHOUT ID Datum, file.link as Vorlesung
FROM #Vorlesung
WHERE Veranstaltung=this.file.link
SORT file.name
```

## Serien
```dataview
TABLE Abgabedatum
FROM #Auftrag
WHERE Veranstaltung=this.file.link
SORT Abgabedatum
```

| **Serie** | **Richtig** | **Total** | **%** |
| --------- | ----------- | --------- | ----- |
| Serie 01  |             |           |       |
| Serie 02  |             |           |       |
| Serie 03  |             |           |       |
| Serie 04  |             |           |       |
| Serie 05  |             |           |       |
| Serie 06  |             |           |       |
| Serie 07  |             |           |       |
| Serie 08  |             |           |       |
| Serie 09  |             |           |       |
| Serie 10  |             |           |       |
| **Total** |             |           |       |
<!-- TBLFM: @>$2=sum(@I..@-1) -->
<!-- TBLFM: $>=(($2/$3)*100) -->