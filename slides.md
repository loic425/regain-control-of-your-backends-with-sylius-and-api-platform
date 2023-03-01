---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: false
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
colorSchema: light
# use UnoCSS
css: unocss
---

# Retrouvez la maîtrise de vos backends

avec Sylius & API-Platform

<div align="center">
<img class="w-75" align="center" src="https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-light-1024x422.jpg">
</div>

<div align="center">
<img class="w-75" src="https://api-platform.com/logo.png">
</div>

---
layout: image-right
image: ./assets/images/akawaka.png
---

# Loïc Frémont

* Expert technique @Akawaka
* Membre de la core team @Sylius
* Créateur de Monofony

<br />

<uim-twitter class="text-3xl text-blue-400 mx-2 my--2" /> @loic_425 
<uim-github class="text-3xl text-black-400 mx-2 my--2" /> @loic425

---
layout: image
image: ./assets/images/dashboard.png
transition: fade
---

---
layout: image
image: ./assets/images/administrators.png
---

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
transition: fade
---

# Resource

```php {6}
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

```php {7}
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

```php {8}
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

```php {9}
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

```php {10}
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


---

# Générer une grid

```bash
$ bin/console make:grid
```

---
transition: fade
---

## Grid

```php
final class BookGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    public static function getName(): string
    {
        return 'app_book';
    }

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        // [...]
    }

    public function getResourceClass(): string
    {
        return Book::class;
    }
}
```

---
transition: fade
---

## Grid

```php {1}
final class BookGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    public static function getName(): string
    {
        return 'app_book';
    }

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        // [...]
    }

    public function getResourceClass(): string
    {
        return Book::class;
    }
}
```

---
transition: fade
---

## Grid

```php {3-6}
final class BookGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    public static function getName(): string
    {
        return 'app_book';
    }

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        // [...]
    }

    public function getResourceClass(): string
    {
        return Book::class;
    }
}
```

---
transition: fade
---

## Grid

```php {13-16}
final class BookGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    public static function getName(): string
    {
        return 'app_book';
    }

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        // [...]
    }

    public function getResourceClass(): string
    {
        return Book::class;
    }
}
```

---
transition: fade
---

## Grid

```php
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        ->orderBy('name')
        ->addField(
            StringField::create('name')
                ->setLabel('Name')
                ->setSortable(true)
        )
        ->addActionGroup(
            MainActionGroup::create(
                CreateAction::create(),
            )
        )
        ->addActionGroup(
            ItemActionGroup::create(
                // ShowAction::create(),
                UpdateAction::create(),
                DeleteAction::create()
            )
        )
    ;
}
```

---
transition: fade
---

## Grid

```php {4}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        ->orderBy('name')
        ->addField(
            StringField::create('name')
                ->setLabel('Name')
                ->setSortable(true)
        )
        ->addActionGroup(
            MainActionGroup::create(
                CreateAction::create(),
            )
        )
        ->addActionGroup(
            ItemActionGroup::create(
                // ShowAction::create(),
                UpdateAction::create(),
                DeleteAction::create()
            )
        )
    ;
}
```

---
transition: fade
---

## Grid

```php {5-9}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        ->orderBy('name')
        ->addField(
            StringField::create('name')
                ->setLabel('Name')
                ->setSortable(true)
        )
        ->addActionGroup(
            MainActionGroup::create(
                CreateAction::create(),
            )
        )
        ->addActionGroup(
            ItemActionGroup::create(
                // ShowAction::create(),
                UpdateAction::create(),
                DeleteAction::create()
            )
        )
    ;
}
```

---
transition: fade
---

## Grid

```php {10-14}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        ->orderBy('name')
        ->addField(
            StringField::create('name')
                ->setLabel('Name')
                ->setSortable(true)
        )
        ->addActionGroup(
            MainActionGroup::create(
                CreateAction::create(),
            )
        )
        ->addActionGroup(
            ItemActionGroup::create(
                // ShowAction::create(),
                UpdateAction::create(),
                DeleteAction::create()
            )
        )
    ;
}
```

---
transition: fade
---

## Grid

```php {15-21}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        ->orderBy('name')
        ->addField(
            StringField::create('name')
                ->setLabel('Name')
                ->setSortable(true)
        )
        ->addActionGroup(
            MainActionGroup::create(
                CreateAction::create(),
            )
        )
        ->addActionGroup(
            ItemActionGroup::create(
                // ShowAction::create(),
                UpdateAction::create(),
                DeleteAction::create()
            )
        )
    ;
}
```

---

## Grid

```php {12-16}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        // [..]
        ->addActionGroup(
            ItemActionGroup::create(
                // ShowAction::create(),
                UpdateAction::create(),
                DeleteAction::create()
            )
        )
        ->addActionGroup(
            BulkActionGroup::create(
                DeleteAction::create()
            )
        )
    ;
}
```

---
transition: fade
---

# Et ??

---
layout: image
image: ./assets/images/browsing_books.png
transition: fade
---

---
layout: image
image: ./assets/images/adding_book.png
transition: fade
---

---
layout: image
image: ./assets/images/editing_book.png
transition: fade
---

---
layout: image
image: ./assets/images/delete_confirmation.png
transition: fade
---

---
layout: image
image: ./assets/images/flash_message.png
---

---

## Grid

```php {5-8}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        ->orderBy('name')
        ->addFilter(
            StringFilter::create('search', ['name'])
                ->setLabel('Search')
        )
        ->addField(
            StringField::create('name')
                ->setLabel('Name')
                ->setSortable(true)
        )
        // [..]
    ;
}
```

---
layout: image
image: ./assets/images/search_filter.png
transition: fade
---

---
layout: image
image: ./assets/images/filter_details.png
transition: fade
---

---
layout: image
image: ./assets/images/search_value.png
transition: fade
---

---
layout: image
image: ./assets/images/filtered_books.png
---
