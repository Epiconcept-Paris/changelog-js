[![npm version](https://badge.fury.io/js/changelog-js.svg)](https://badge.fury.io/js/changelog-js)

# Changelog-js
Analysis of a pre-formatted markdown file to extract an exploitable array of changes.

## Exemple

### Input file
```md
---
name: 1.1.0
date: January 2019
---

- *change* [#109](https://github.com/orga/repo/issues/109) A change with image
![my body is ready](/img/danger.jpeg)
- *feature* [#186](https://github.com/orga/repo/issues/186) A feature has been made
- *feature* [#203](https://github.com/orga/repo/issues/203) A feature has been made with 2 links [#204](https://github.com/orga/repo/issues/204)
- *change* [#215](https://github.com/orga/repo/issues/215) Another change

- *bugfix* [#191](https://github.com/orga/repo/issues/191) One bugfix
- *bugfix* [#208](https://github.com/orga/repo/issues/208) One bugfix
- *bugfix* [#241](https://github.com/orga/repo/issues/241) One bugfix

---
name: 1.0.0
date: December 2017
---

- *change* [#109](https://github.com/orga/repo/issues/109) A change with image
![my body is ready](/img/danger.jpeg)
- *feature* [#186](https://github.com/orga/repo/issues/186) A feature has been made
- *feature* [#203](https://github.com/orga/repo/issues/203) A feature has been made with 2 links [#204](https://github.com/orga/repo/issues/204)
- *change* [#215](https://github.com/orga/repo/issues/215) Another change

- *bugfix* [#191](https://github.com/orga/repo/issues/191) One bugfix
- *bugfix* [#208](https://github.com/orga/repo/issues/208) One bugfix
- *bugfix* [#241](https://github.com/orga/repo/issues/241) One bugfix

---
name: 0.5.0
date: November 2016
---

- *change* [#109](https://github.com/orga/repo/issues/109) A change with image
![my body is ready](/img/danger.jpeg)
- *feature* [#186](https://github.com/orga/repo/issues/186) A feature has been made
- *feature* [#203](https://github.com/orga/repo/issues/203) A feature has been made with 2 links [#204](https://github.com/orga/repo/issues/204)
- *change* [#215](https://github.com/orga/repo/issues/215) Another change

- *bugfix* [#191](https://github.com/orga/repo/issues/191) One bugfix
- *bugfix* [#208](https://github.com/orga/repo/issues/208) One bugfix
- *bugfix* [#241](https://github.com/orga/repo/issues/241) One bugfix
````

### Output
```json
[{
  "name": "1.1.0",
  "date": "January 2019",
  "items": [{
    "type": "change",
    "content": "A change with image",
    "images": [{
      "url": "/img/danger.jpeg",
      "label": "my body is ready"
    }],
    "links": [{
      "url": "https://github.com/orga/repo/issues/109",
      "label": "#109"
    }]
  }, {
    "type": "feature",
    "content": "A feature has been made",
    "links": [{
      "url": "https://github.com/orga/repo/issues/186",
      "label": "#186"
    }]
  }, {
    "type": "feature",
    "content": "A feature has been made with 2 links",
    "links": [{
      "url": "https://github.com/orga/repo/issues/203",
      "label": "#203"
    }, {
      "url": "https://github.com/orga/repo/issues/204",
      "label": "#204"
    }]
  }, {
    "type": "change",
    "content": "Another change",
    "links": [{
      "url": "https://github.com/orga/repo/issues/215",
      "label": "#215"
    }]
  }, {
    "type": "bugfix",
    "content": "One bugfix",
    "links": [{
      "url": "https://github.com/orga/repo/issues/191",
      "label": "#191"
    }]
  }, {
    "type": "bugfix",
    "content": "One bugfix",
    "links": [{
      "url": "https://github.com/orga/repo/issues/208",
      "label": "#208"
    }]
  }, {
    "type": "bugfix",
    "content": "One bugfix",
    "links": [{
      "url": "https://github.com/orga/repo/issues/241",
      "label": "#241"
    }]
  }]
}, {
  "name": "1.0.0",
  "date": "December 2017",
  "items": [{
    "type": "change",
    "content": "A change with image",
    "images": [{
      "url": "/img/danger.jpeg",
      "label": "my body is ready"
    }],
    "links": [{
      "url": "https://github.com/orga/repo/issues/109",
      "label": "#109"
    }]
  }, {
    "type": "feature",
    "content": "A feature has been made",
    "links": [{
      "url": "https://github.com/orga/repo/issues/186",
      "label": "#186"
    }]
  }, {
    "type": "feature",
    "content": "A feature has been made with 2 links",
    "links": [{
      "url": "https://github.com/orga/repo/issues/203",
      "label": "#203"
    }, {
      "url": "https://github.com/orga/repo/issues/204",
      "label": "#204"
    }]
  }, {
    "type": "change",
    "content": "Another change",
    "links": [{
      "url": "https://github.com/orga/repo/issues/215",
      "label": "#215"
    }]
  }, {
    "type": "bugfix",
    "content": "One bugfix",
    "links": [{
      "url": "https://github.com/orga/repo/issues/191",
      "label": "#191"
    }]
  }, {
    "type": "bugfix",
    "content": "One bugfix",
    "links": [{
      "url": "https://github.com/orga/repo/issues/208",
      "label": "#208"
    }]
  }, {
    "type": "bugfix",
    "content": "One bugfix",
    "links": [{
      "url": "https://github.com/orga/repo/issues/241",
      "label": "#241"
    }]
  }]
}, {
  "name": "0.5.0",
  "date": "November 2016",
  "items": [{
    "type": "change",
    "content": "A change with image",
    "images": [{
      "url": "/img/danger.jpeg",
      "label": "my body is ready"
    }],
    "links": [{
      "url": "https://github.com/orga/repo/issues/109",
      "label": "#109"
    }]
  }, {
    "type": "feature",
    "content": "A feature has been made",
    "links": [{
      "url": "https://github.com/orga/repo/issues/186",
      "label": "#186"
    }]
  }, {
    "type": "feature",
    "content": "A feature has been made with 2 links",
    "links": [{
      "url": "https://github.com/orga/repo/issues/203",
      "label": "#203"
    }, {
      "url": "https://github.com/orga/repo/issues/204",
      "label": "#204"
    }]
  }, {
    "type": "change",
    "content": "Another change",
    "links": [{
      "url": "https://github.com/orga/repo/issues/215",
      "label": "#215"
    }]
  }, {
    "type": "bugfix",
    "content": "One bugfix",
    "links": [{
      "url": "https://github.com/orga/repo/issues/191",
      "label": "#191"
    }]
  }, {
    "type": "bugfix",
    "content": "One bugfix",
    "links": [{
      "url": "https://github.com/orga/repo/issues/208",
      "label": "#208"
    }]
  }, {
    "type": "bugfix",
    "content": "One bugfix",
    "links": [{
      "url": "https://github.com/orga/repo/issues/241",
      "label": "#241"
    }]
  }]
}]
```
