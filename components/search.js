export function createSearchController({ input, suggestions, onQueryChange, onSuggestionPick }) {
  const state = { query: '', list: [] };

  input.addEventListener('input', () => {
    state.query = input.value.trim();
    onQueryChange(state.query);
  });

  input.addEventListener('focus', () => {
    if (state.list.length > 0) {
      suggestions.classList.add('is-open');
    }
  });

  input.addEventListener('blur', () => {
    setTimeout(() => suggestions.classList.remove('is-open'), 120);
  });

  function setSuggestions(list) {
    state.list = list.slice(0, 6);
    suggestions.innerHTML = '';

    if (state.query.length < 2 || state.list.length === 0) {
      suggestions.classList.remove('is-open');
      return;
    }

    state.list.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      li.tabIndex = 0;
      li.setAttribute('role', 'option');
      li.addEventListener('mousedown', () => {
        input.value = item;
        state.query = item;
        onSuggestionPick(item);
        suggestions.classList.remove('is-open');
      });
      suggestions.append(li);
    });

    suggestions.classList.add('is-open');
  }

  return { setSuggestions };
}
