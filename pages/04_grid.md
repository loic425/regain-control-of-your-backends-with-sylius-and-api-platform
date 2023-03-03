# Générer une grid

```bash
$ bin/console make:grid
```

---
transition: fade
---

```php {all|1|3-6|13-16}
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

```php {all|4|5-9|10-14|15-21}
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
