# Générer une grid

```bash
$ bin/console make:grid
```

---
transition: fade
---

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
