# The Miata Bible

A dependency-light, responsive Miata reference and build planner. It includes generation notes, original garage guidance, a live mod planner with budget math, and local build-history snapshots.

## Run locally

```bash
cd /home/ubuntu/miata-bible
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173`.

The app stores the current build and snapshots in browser `localStorage` under `miata-bible-state-v1`.

## Content note

The repair section is independently written educational guidance. It does not reproduce factory service-manual text. Always verify the exact year, trim, market, fastener specifications, fluid requirements, and safety procedure before working on a vehicle.

Miata history notes are grounded in Mazda’s official MX-5 history page: https://www.mazdausa.com/discover/mazda-mx-5-miata-fans
