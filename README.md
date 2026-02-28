# juliankasimir.github.io

Persönliche Website von Julian Kasimir – gebaut mit [Astro](https://astro.build) und deployed auf [GitHub Pages](https://pages.github.com).

🌐 **Live:** https://juliankasimir.github.io

---

## Lokale Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten (http://localhost:4321)
npm run dev

# Produktions-Build erstellen
npm run build

# Build lokal vorschauen
npm run preview
```

## Deployment

Das Deployment erfolgt automatisch via GitHub Actions bei jedem Push auf den `main`-Branch.

**Einmaliges Setup (nur beim ersten Mal):**

1. Im Repository auf **Settings → Pages** gehen
2. Unter *Source* die Option **"GitHub Actions"** auswählen
3. Speichern – ab jetzt deployt jeder Push auf `main` die Seite automatisch

Der Workflow-Status ist unter **Actions** einsehbar.

## Projektstruktur

```
src/
  pages/        # Seiten (jede .astro-Datei wird eine Route)
astro.config.mjs
.github/
  workflows/
    deploy.yml  # GitHub Actions Deployment-Workflow
```

## Geplante nächste Schritte

- [ ] Eigene Domain einrichten (z. B. `juliankasimir.de`)
- [ ] Layout-Komponente und Navigation hinzufügen
- [ ] Inhalte (About, Projekte, Kontakt) ergänzen
- [ ] Migration in die Organisation `jolution` vorbereiten
