---
Fach: "[[Informatik]]"
Semester: 1
ECTS: 5
tags:
  - Veranstaltung
Aktiv: true
Abgeschlossen: false
---
# Grundlagen der Technischen Informatik
## Aufträge
```dataview
TABLE Abgabedatum
FROM #Auftrag
WHERE Veranstaltung=this.file.link
AND !Fertig
SORT Abgabedatum
```

## Vorlesungen
```dataview
TABLE WITHOUT ID Datum, file.link as Vorlesung
FROM #Vorlesung
WHERE Veranstaltung=this.file.link
SORT file.name
```
