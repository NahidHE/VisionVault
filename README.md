# VisionVault

VisionVault is a futuristic, open-source Computer Vision Dataset Archive built with **HTML5 + CSS3 + Vanilla JavaScript**.
It is designed for long-term scalability where thousands of datasets and many community contributors can collaborate without a monolithic metadata bottleneck.

## Features

- Futuristic cyberpunk UI with glassmorphism, neon glow, and ambient animated gradients
- Lightweight scalable metadata architecture (`data/index.json` + `data/datasets/*.json`)
- Real-time search with live suggestions
- Multi-select filter chips
- Multiple sort modes (year, title, samples, size, recently added)
- Lazy card rendering for large archives
- Deferred dataset-detail loading
- Dataset details modal with JSON preview, metadata stats, citation, and links
- Favorites system backed by `localStorage`

## Screenshots

> Add screenshots/GIFs here once deployed:

- Archive overview
- Filter/search interactions
- Dataset details modal

## Installation

1. Clone the repository
2. Serve the root directory with any static server

```bash
# example with Python
python -m http.server 8080
```

3. Open `http://localhost:8080`

## Usage

- Use the search bar for instant lookup by title, tags, author, type, annotation, and year
- Apply multi-select filters in the filter panel
- Sort datasets using the sort dropdown
- Click **Open dossier** to fetch and inspect full dataset metadata
- Toggle favorites to build a local personal shortlist

## Folder Structure

```text
VisionVault/
├── index.html
├── style.css
├── app.js
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── LICENSE
├── data/
│   ├── index.json
│   └── datasets/
│       ├── coco-2017.json
│       ├── imagenet-1k.json
│       ├── cityscapes.json
│       ├── lvis-v1.json
│       ├── kitti.json
│       └── ego4d.json
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── search.js
│   ├── filters.js
│   └── modal.js
└── styles/
    └── animations.css
```

## JSON Architecture (Scalable by Design)

### 1) Lightweight searchable index

`data/index.json` contains only lightweight fields for fast homepage load and fast filtering/searching.

Included fields:

- `id`
- `title`
- `type`
- `year`
- `tags`
- `thumbnail`
- `author`
- `short_description`

### 2) Full metadata per dataset

`data/datasets/<dataset-id>.json` contains complete metadata and is fetched only when detailed inspection is needed.

Benefits:

- Better performance at scale
- Lower merge conflicts for contributors
- Cleaner ownership per dataset file
- Easier review of contribution PRs

## Search & Filter System

- Search is real-time and matches across indexed metadata plus hydrated detail fields
- Filters support type, annotation type, modality, license, media, and year
- Sorting supports newest, oldest, alphabetical, sample volume, dataset size, and recently updated

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for:

- Dataset JSON schema and required fields
- Naming conventions and validation rules
- Pull request workflow and quality standards

## Future Roadmap

- Dataset comparison mode
- Contributor leaderboard
- Advanced faceted indexing API
- Pagination + virtualized rendering for ultra-large archives
- Dark/light adaptive themes
- PWA offline cache mode

## Credits

- Open-source computer vision community
- Dataset authors and benchmark maintainers
- VisionVault contributors

## License

Distributed under the MIT License. See [LICENSE](./LICENSE).
