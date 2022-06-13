var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: '#d6b11b',
    fontSize: '16px'
  }
});

var siteConfig = {
  routes: {
    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      route: '/data'
    },
    literatureSearch: {
      route: '/literature'
    }
  },
  occurrence: {
    rootPredicate: {
      "type": "equals",
      "key": "publishingOrg",
      "value": "14cb4225-a2b5-47b8-849e-eb86ed93e548"
    },
    highlightedFilters: ['taxonKey', 'occurrenceStatus', 'year', 'occurrenceIssue'],
    mapSettings: {
      zoom: 0,
      lng: 0,
      lat: 0
    }
  },
  literature: {
    rootFilter: {
      predicate: {
        "type": "equals",
        "key": "publishingOrganizationKey",
        "value": "14cb4225-a2b5-47b8-849e-eb86ed93e548"
      }
    },
    // highlightedFilters: ['q', 'countriesOfResearcher', 'countriesOfCoverage', 'year'],
    includedFilters: []
  }
};
