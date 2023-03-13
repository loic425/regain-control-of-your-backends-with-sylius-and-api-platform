---
transition: fade
---

# Rapid Application Development

---

# Rapid Application Development

```php {all|2|3|4|5|6|7|8-15|9|10|11|12|13|14}
#[ORM\Entity(repositoryClass: BookRepository::class)]
#[Resource(
    alias: 'app.book',
    section: 'admin',
    formType: BookType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'app_book'),
        new Create(),
        new Update(),
        new BulkDelete(),
        new Delete(),
        new Show(template: 'book/show.html.twig'),
    ],
)]
class Book implements ResourceInterface
{
    // [...]
}
```

---

# Routes

| Name                       | Method          | Path                     |
|----------------------------|-----------------|--------------------------|
| app_admin_book_index       | GET             | /admin/books/            |
| app_admin_book_create      | GET, POST       | /admin/books/new         |                     
| app_admin_book_update      | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_admin_book_bulk_delete | DELETE          | /admin/books/bulk-delete |               
| app_admin_book_delete      | DELETE          | /admin/books/{id}        |
| app_admin_book_show        | GET             | /admin/books/{id}        |


---

```php {10}
#[ORM\Entity(repositoryClass: BookRepository::class)]
#[Resource(
    alias: 'app.book',
    section: 'admin',
    formType: BookType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'app_book'),
        new Create(path: 'create'),
        new Update(),
        new BulkDelete(),
        new Delete(),
        new Show(template: 'book/show.html.twig'),
    ],
)]
class Book implements ResourceInterface
{
    // [...]
}
```

---

# Routes

| Name                       | Method          | Path                |
|----------------------------|-----------------|---------------------|
| app_admin_book_create      | GET, POST       | /admin/books/create |

---

```php {10}
#[ORM\Entity(repositoryClass: BookRepository::class)]
#[Resource(
    alias: 'app.book',
    section: 'admin',
    formType: BookType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'app_book'),
        new Create(shortName: 'register'),
        new Update(),
        new BulkDelete(),
        new Delete(),
        new Show(template: 'book/show.html.twig'),
    ],
)]
class Book implements ResourceInterface
{
    // [...]
}
```

---

# Routes

| Name                    | Method          | Path                  |
|-------------------------|-----------------|-----------------------|
| app_admin_book_register | GET, POST       | /admin/books/register |

---

```php {11}
#[ORM\Entity(repositoryClass: BookRepository::class)]
#[Resource(
    alias: 'app.book',
    section: 'admin',
    formType: BookType::class,
    templatesDir: '@SyliusAdminUi/crud',
    routePrefix: '/admin',
    operations: [
        new Index(grid: 'app_book'),
        new Create(),
        new Update(methods: ['GET', 'POST']),
        new BulkDelete(),
        new Delete(),
        new Show(template: 'book/show.html.twig'),
    ],
)]
class Book implements ResourceInterface
{
    // [...]
}
```

---

# Routes

| Name                   | Method    | Path                     |
|------------------------|-----------|--------------------------|
| app_admin_book_update  | GET, POST | /admin/books/{id}/edit   |    
