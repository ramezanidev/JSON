---
title: Example
clicks: 9
---

```json {all|1|11|2|3|4|5-8|9|10|12}
{
    "first_name": "Ali",
    "last_name": null,
    "age": 22,
    "address": {
        "city": "tehran",
        "id": 333
    },
    "isAive": false,
    "skills": ["programming", "swim"]
}
```

<br />
<span v-if="$slidev.nav.clicks === 9">

```json {all|1|11|2|3|4|5-8|9|10|all}
{
    "number": 33.644,
    "number_2": 336565164646848846644,
    "string": "string string \n string 😍",
    "falsy": null,
    "array": [22, "ali", null, false, [10, ["ali"]], {"name": "ali"}],
    "object": {
        "object": {
            "bool": true
        } 
    }
}
```
</span>

