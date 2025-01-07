---
Fach: "[[Wirtschaftsinformatik]]"
Semester: 2
ECTS: 3
tags:
  - Veranstaltung
Aktiv: false
Abgeschlossen: false
---
# Einführung in das Finanzmanagement und Rechnungswesen
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
