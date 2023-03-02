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
image: ./assets/images/api_pack.png
---

---
transition: fade
---

# Book resource

```php
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
transition: fade
---

```php {1-3}
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
transition: fade
---

```php {4}
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
transition: fade
---

```php {5}
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
transition: fade
---

```php {6}
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
transition: fade
---

```php {7}
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
transition: fade
---

```php {8}
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
transition: fade
---

```php {9}
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
image: ./assets/images/book_api_doc.png
---
