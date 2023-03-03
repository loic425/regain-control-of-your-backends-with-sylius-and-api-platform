---
transition: fade
---

# Resource

```php
use Sylius\Component\Resource\Model\ResourceInterface;

#[ORM\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
```

---
transition: fade
---

# Resource

```php {12}
use Sylius\Component\Resource\Model\ResourceInterface;

#[ORM\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
```

---
transition: fade
---

# Resource

```php {4}
use Sylius\Component\Resource\Model\ResourceInterface;

#[ORM\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
```

---
transition: fade
---

# Resource

```php {5}
use Sylius\Component\Resource\Model\ResourceInterface;

#[ORM\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
```

---

# Resource

```php {6|7|8|9|10}
use Sylius\Component\Resource\Model\ResourceInterface;

#[ORM\Entity(repositoryClass: BookRepository::class)]
#[SyliusCrudRoutes(
    alias: 'app.book',
    path: 'admin/books',
    section: 'backend',
    templates: 'backend/crud',
    grid: 'app_book',
    except: ['show'],
)]
class Book implements ResourceInterface
{
    // [..]
}
```

---

# Routes

| Name                                | Method          | Path                     |
|-------------------------------------|-----------------|--------------------------|
| app_backend_book_index              | GET             | /admin/books/            |
| app_backend_book_create             | GET, POST       | /admin/books/new         |                     
| app_backend_book_update             | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_backend_book_bulk_delete        | DELETE          | /admin/books/bulk-delete |               
| app_backend_book_delete             | DELETE          | /admin/books/{id}        |
