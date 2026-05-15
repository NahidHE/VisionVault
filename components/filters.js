const FILTER_FIELDS = ['type', 'annotation_type', 'modality', 'license', 'media', 'year'];

export function createFilterController({ root, onChange }) {
  const selected = new Map(FILTER_FIELDS.map((key) => [key, new Set()]));

  function render(optionsByField) {
    FILTER_FIELDS.forEach((field) => {
      const group = root.querySelector(`[data-filter-group="${field}"] [data-chip-container]`);
      if (!group) return;
      group.innerHTML = '';
      const values = optionsByField[field] || [];

      values.forEach((value) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'filter-chip';
        button.textContent = value;
        button.setAttribute('data-filter-field', field);
        button.setAttribute('data-filter-value', value);
        button.setAttribute('aria-pressed', 'false');
        button.addEventListener('click', () => {
          const set = selected.get(field);
          if (set.has(value)) {
            set.delete(value);
            button.classList.remove('is-active');
            button.setAttribute('aria-pressed', 'false');
          } else {
            set.add(value);
            button.classList.add('is-active');
            button.setAttribute('aria-pressed', 'true');
          }
          onChange(getSelected());
        });
        group.append(button);
      });
    });
  }

  function reset() {
    selected.forEach((set) => set.clear());
    root.querySelectorAll('.filter-chip.is-active').forEach((chip) => {
      chip.classList.remove('is-active');
      chip.setAttribute('aria-pressed', 'false');
    });
    onChange(getSelected());
  }

  function getSelected() {
    return Object.fromEntries(Array.from(selected.entries()).map(([key, set]) => [key, [...set]]));
  }

  return { render, reset, getSelected, fields: FILTER_FIELDS };
}
