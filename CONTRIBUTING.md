# Contributing to VisionVault

Thanks for helping grow the VisionVault archive.
This guide defines how to add and maintain datasets using a scalable contributor workflow.

## How to Add a New Dataset

1. Add a lightweight entry to `data/index.json`
2. Add a full metadata file in `data/datasets/<dataset-id>.json`
3. Add a thumbnail image under `assets/images/`
4. Verify JSON validity and run local checks
5. Open a pull request with clear references/sources

## Naming Conventions

- Dataset ID and filename must be **kebab-case**
- File path must match ID exactly:
  - `id`: `my-dataset`
  - file: `data/datasets/my-dataset.json`
- Avoid spaces and uppercase in file names

## JSON Formatting Rules

- UTF-8 encoded JSON
- 2-space indentation
- Double-quoted keys and string values
- No trailing commas
- Arrays should be compact and readable

## Required Metadata Fields

Each `data/datasets/*.json` file must include:

- `id`
- `title`
- `author`
- `year`
- `type`
- `annotation_type`
- `modality`
- `samples`
- `size`
- `license`
- `tags`
- `description`
- `thumbnail`
- `featured`
- `added_by`
- `last_updated`

## Optional Metadata Fields

- `classes`
- `formats`
- `paper`
- `github`
- `website`
- `citation`

## Lightweight Index Entry Rules

Every dataset must have a matching `data/index.json` entry with only:

- `id`
- `title`
- `type`
- `year`
- `tags`
- `thumbnail`
- `author`
- `short_description`

## Example Contribution JSON

```json
{
  "id": "example-vision-dataset",
  "title": "Example Vision Dataset",
  "author": "Example Lab",
  "year": 2026,
  "type": "Object Detection",
  "annotation_type": "Bounding Box",
  "modality": "Image",
  "classes": 42,
  "samples": 120000,
  "size": "35GB",
  "license": "CC BY 4.0",
  "formats": ["COCO JSON"],
  "tags": ["detection", "benchmark"],
  "description": "High-quality benchmark for dense urban object detection.",
  "thumbnail": "assets/images/example-vision-dataset.svg",
  "paper": "https://example.org/paper",
  "github": "https://github.com/example/dataset-tools",
  "website": "https://example.org/dataset",
  "citation": "Author et al. Example Vision Dataset, 2026.",
  "featured": false,
  "added_by": "community",
  "last_updated": "2026-05-15"
}
```

## Validation Rules

Before opening a PR, confirm:

- `id` matches filename
- `thumbnail` path exists
- `year` is numeric
- `samples` is numeric
- `tags` is a non-empty array of strings
- Required fields are present and non-empty
- Links use HTTPS when available

## Pull Request Workflow

1. Fork and create a feature branch
2. Commit with descriptive messages
3. Open a PR with:
   - Dataset source/reference links
   - Why the dataset is useful
   - Any licensing limitations
4. Address review comments
5. Merge only after checks pass

## Dataset Quality Standards

- Must be relevant to computer vision or multimodal vision-language research
- Must include trustworthy source links
- Must not violate licensing or redistribution rights
- Descriptions should be factual and concise
- Avoid duplicate IDs or near-identical entries
