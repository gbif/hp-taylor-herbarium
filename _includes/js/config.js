var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: '#d6b11b',
    fontSize: '16px'
  }
});

var siteConfig = {
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
  }
};
