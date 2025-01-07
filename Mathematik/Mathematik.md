---
tags:
  - Fach
ECTS: 30
---
# Mathematik
[Links]()

## Aktuelle Veranstaltungen
```dataview
TABLE WITHOUT ID Semester AS Sem, file.link AS Veranstaltung, ECTS
FROM #Veranstaltung 
WHERE Fach=this.file.link
	AND Aktiv=true
SORT Semester
```

## Alle Veranstaltungen
```dataview
TABLE WITHOUT ID Semester AS Sem, file.link AS Veranstaltung, ECTS, Note
FROM #Veranstaltung 
WHERE Fach=this.file.link
SORT Abgeschlossen, Semester
```
