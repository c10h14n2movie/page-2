SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  searchResultTemplate: '<div class="four columns card"><div class="card-body"><a href="{url}"><img class="image" width="300" height="240" src="/images/{image}" alt="{title}"></a><div class="details row"><div class="twelve columns"><p class="theme-title">{title}</p></div><div class="twelve columns"><p class="dev">Developer: <span class="name">{dev}</span></div></div><hr /><a rel="nofollow" href="https://github.com/{dev}/{title}" class="repo" target="_blank"><i class="fa fa-code" aria-hidden="true"></i> Repository</a></div></div>',
  noResultsText: 'No results found',
  json: '/search.json',
})