# Changelog-js
Analysis of a pre-formatted markdown file to extract an exploitable array of changes.
[![npm version](https://badge.fury.io/js/changelog-js.svg)](https://badge.fury.io/js/changelog-js)

### Example of a markdown file

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
