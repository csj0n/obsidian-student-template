---
tags:
  - Fach
---
# Data Science Overview
## Links
[Link](https://example.com/) | 
## Aktuelle Veranstaltungen
```dataview
TABLE WITHOUT ID Semester AS Sem, file.link AS Veranstaltung, ECTS
FROM #Veranstaltung 
WHERE Fach=this.file.link
	AND Aktiv=true
```

## Alle Veranstaltungen
```dataview
TABLE WITHOUT ID Semester AS Sem, file.link AS Veranstaltung, ECTS, Abgeschlossen AS Fertig
FROM #Veranstaltung 
WHERE Fach=this.file.link
```
