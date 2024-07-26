---
Fach: 
Semester: 
ECTS: 5
tags:
  - Veranstaltung
Aktiv: true
Abgeschlossen: false
---
# {{title}}
## Aufträge
```dataview
TABLE Abgabedatum
FROM #Auftrag
WHERE Veranstaltung=this.file.link
SORT Abgabedatum
```
## Vorlesungen
```dataview
TABLE WITHOUT ID Datum, file.link as Vorlesung
FROM #Vorlesung
WHERE Veranstaltung=this.file.link
SORT file.name
```
