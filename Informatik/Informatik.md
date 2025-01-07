---
tags:
  - Fach
ECTS: 90
---
# Informatik Übersicht
[Links]()

## Aktuelle Veranstaltungen
```dataview
TABLE WITHOUT ID Semester AS Sem, file.link AS Veranstaltung, ECTS
FROM #Veranstaltung 
WHERE Fach=this.file.link
	AND Aktiv=true
```

## Alle Veranstaltungen
```dataview
TABLE WITHOUT ID Semester AS Sem, file.link AS Veranstaltung, ECTS, Note
FROM #Veranstaltung 
WHERE Fach=this.file.link
SORT Abgeschlossen desc, Semester
```
