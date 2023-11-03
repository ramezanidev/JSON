---
title: program-example
---

```php
<?php
$myObj = new stdClass();
$myObj->name = "John";
$myObj->age = 30;
$myObj->city = "New York";

$myJSON = json_encode($myObj);

echo $myJSON; // {"name":"John","age":30,"city":"New York"}
?>
```
<br />

```python
import json

x = {
  "name": "John",
  "age": 30,
  "city": "New York"
}

y = json.dumps(x)

print(y) # {"name":"John","age":30,"city":"New York"}
```