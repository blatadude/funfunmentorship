
export const mpj = {
  rawData: () => ({"mpj": "{ \"usermap_location\": { \"lat\": 57.7089, \"lng\": 11.9858, \"caption\": \"Gôtt\" }, \"mentorship\": { \"seeking\": [ \"Machine Learning\", \"Data Science\", \"R\" ] } }"}),
  formattedData: () => ({
    hackable_json: "{ \"usermap_location\": { \"lat\": 57.7089, \"lng\": 11.9858, \"caption\": \"Gôtt\" }, \"mentorship\": { \"seeking\": [ \"Machine Learning\", \"Data Science\", \"R\" ] } }",
    username: 'mpj',
    url: 'https://www.funfunforum.com/u/mpj/',
    location: {
    caption: "Gôtt",
      lat: 57.7089,
      lng: 11.9858
    },
    mentorship: { 
      seeking: [ "Machine Learning", "Data Science", "R" ],
      offering: []
    }
  })
}

export const DavDavDavid = {
  rawData: () => ({ "DavDavDavid": "{ \"name\": \"David Suddjian\", \"mentorship\": { \"seeking\": [ \"golang\", \"ElasticSearch\" ], \"offering\": [\"Javascript\", \"es2016\", \"mongoDB\"] }, \"usermap_location\": {\"lat\": 36.9927, \"lng\": -122.1697, \"caption\": \"Programstinating\"} }"}),
  formattedData: () => ({
    hackable_json: "{ \"name\": \"David Suddjian\", \"mentorship\": { \"seeking\": [ \"golang\", \"ElasticSearch\" ], \"offering\": [\"Javascript\", \"es2016\", \"mongoDB\"] }, \"usermap_location\": {\"lat\": 36.9927, \"lng\": -122.1697, \"caption\": \"Programstinating\"} }",
    username: 'DavDavDavid',
    url: 'https://www.funfunforum.com/u/DavDavDavid/',
    mentorship: {
      seeking: ['golang', 'ElasticSearch'],
      offering: ['Javascript', 'es2016', 'mongoDB']
    },
    location: {
      caption: "Programstinating",
      lat: 36.9927,
      lng: -122.1697
    }
  })
}

export const igor = {
  rawData: () => ({
    "igoroctaviano": "{ \"name\": \"Igor Octaviano\", \"mentorship\": { \"seeking\": [\"Python\", \"Elasticsearch\", \"Vue.js\"], \"offering\": [\"JavaScript\", \"ES2016\", \"React\", \"React Native\"] }, \"usermap_location\": {\"lat\": -19.936238, \"lng\": -43.9322763, \"caption\": \"Division Bell T-Shirt\"} }"
  }),
  formattedData: () => ({
    username: "igoroctaviano",
    "hackable_json": "{ \"name\": \"Igor Octaviano\", \"mentorship\": { \"seeking\": [\"Python\", \"Elasticsearch\", \"Vue.js\"], \"offering\": [\"JavaScript\", \"ES2016\", \"React\", \"React Native\"] }, \"usermap_location\": {\"lat\": -19.936238, \"lng\": -43.9322763, \"caption\": \"Division Bell T-Shirt\"} }",
    url: "https://www.funfunforum.com/u/igoroctaviano/",
    mentorship: {
      seeking: [ "Python", "Elasticsearch", "Vue.js" ],
      offering: [ "JavaScript", "ES2016", "React", "React Native" ]
    },
    location: {
      caption: "Division Bell T-Shirt",
      lat: -19.936238,
      lng: -43.9322763
    }
  })
}

export const redundantDave = {
  rawData: () => ({
  "redundantDavid" : "{ \"name\": \"David Redundant Suddjian\", \"mentorship\": { \"seeking\": [ \"golang\", \"GoLang\" ], \"offering\": [ \"GOLANG\", \"goLANG\", \"growlang\" ] } }"
  }),
  formattedData: () => ({
    username: 'redundantDavid',
    "hackable_json": "{ \"name\": \"David Redundant Suddjian\", \"mentorship\": { \"seeking\": [ \"golang\", \"GoLang\" ], \"offering\": [ \"GOLANG\", \"goLANG\", \"growlang\" ] } }",
    url: 'https://www.funfunforum.com/u/redundantDavid/',
    mentorship: {
      seeking: ['golang', 'GoLang'],
      offering: ['GOLANG', 'goLANG', 'growlang']
    }
  })
}

export const bobbyTables = {
  rawData: () => ({
    "bobbyTables": "{ \"name\": \"Billy Bob Tables\", \"mentorship\": { \"offering\": [ \"<script>alert('xss!')</script>\" ] } }"
  }),
  formattedData: () => ({
    username: "bobbyTables",
    "hackable_json": "{ \"name\": \"Billy Bob Tables\", \"mentorship\": { \"offering\": [ \"<script>alert('xss!')</script>\" ] } }",
    url: 'https://www.funfunforum.com/u/bobbyTables/',
    mentorship: {
      seeking: [],
      offering: ["<script>alert('xss!')</script>"]
    },
    location: undefined
  })
}

export const jimmyPesto = {
  rawData: () => ({
    "jimmyP": "{ \"name\": \"Jimmy Pesto\", \"mentorship\": { \"offering\": [ \"invalid\", { \"malicious\": \"json\" } ], \"seeking\": { \"trouble\": true } } }"
  }),
  formattedData: () => ({
    "hackable_json": "{ \"name\": \"Jimmy Pesto\", \"mentorship\": { \"offering\": [ \"invalid\", { \"malicious\": \"json\" } ], \"seeking\": { \"trouble\": true } } }",
    username: "jimmyP",
    url: 'https://www.funfunforum.com/u/jimmyP/',
    mentorship: {
      seeking: [],
      offering: ['invalid']
    },
    location: undefined
  })
}

export const badJason = {
  rawData: () => ({
    'badJason': '{mentorship: { offering: "no quotes" }}'
  }),
  formattedData: () => ({
    username: 'badJason',
    hackable_json: '{mentorship: { offering: "no quotes" }}',
    url: 'https://www.funfunforum.com/u/badJason/',
    mentorship: undefined,
    location: undefined
  })
}
