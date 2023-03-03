---
layout: image
image: https://api-platform.com/logo.png
---

---

# Monofony API Pack

```shell
$ composer require monofony/api-pack "^0.10"
```

<br />

* voir [l'installation détaillée dans la doc](https://docs.monofony.com/current/setup/application).

---
layout: image
image: /assets/images/api_pack.png
---

---

# Book resource

```php {all|1-3|4|5|6|7|8|9}
#[ApiResource(
    normalizationContext: ['groups' => 'book:read']
)]
#[Get]
#[GetCollection]
#[Post]
#[Put]
#[Patch]
#[Delete]
class Book implements ResourceInterface
{
    // [...]
}
```

---
layout: image
image: /assets/images/book_api_doc.png
---
