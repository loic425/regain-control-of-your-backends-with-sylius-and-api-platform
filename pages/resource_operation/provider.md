---
transition: fade
---

# State provider

```php
/**
 * Retrieves data from a persistence layer.
 *
 * @experimental
 */
interface ProviderInterface
{
    public function provide(Operation $operation, Context $context): object|iterable|null;
}

```

---
transition: fade
---

# State provider

```php {8}
/**
 * Retrieves data from a persistence layer.
 *
 * @experimental
 */
interface ProviderInterface
{
    public function provide(Operation $operation, Context $context): object|iterable|null;
}

```

* Operation *(Create, Show, Index, Update, Delete, BulkDelete...)*

---

# State provider

```php {8}
/**
 * Retrieves data from a persistence layer.
 *
 * @experimental
 */
interface ProviderInterface
{
    public function provide(Operation $operation, Context $context): object|iterable|null;
}

```

* Operation *(Create, Show, Index, Update, Delete, BulkDelete...)*
* Context: ArrayObject *(RequestOption, ResourceClassOption)*

---

```php {10}
#[Resource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Show(
    template: 'board_game/show.html.twig',
    provider: BoardGameItemProvider::class,
)]
final class BoardGameResource implements ResourceInterface
```

---
transition: fade
---

```php
final class BoardGameItemProvider implements ProviderInterface
{
    public function __construct(
        private QueryBusInterface $queryBus,
    ) {
    }

    public function provide(Operation $operation, Context $context): object|iterable|null
    {
        $request = $context->get(RequestOption::class)?->request();
        Assert::notNull($request);

        $id = (string) $request->attributes->get('id');

        $model = $this->queryBus->ask(new FindBoardGameQuery(new BoardGameId(Uuid::fromString($id))));

        return null !== $model ? BoardGameResource::fromModel($model) : null;
    }
}
```

---
transition: fade
---

```php {10-11}
final class BoardGameItemProvider implements ProviderInterface
{
    public function __construct(
        private QueryBusInterface $queryBus,
    ) {
    }

    public function provide(Operation $operation, Context $context): object|iterable|null
    {
        $request = $context->get(RequestOption::class)?->request();
        Assert::notNull($request);

        $id = (string) $request->attributes->get('id');

        $model = $this->queryBus->ask(new FindBoardGameQuery(new BoardGameId(Uuid::fromString($id))));

        return null !== $model ? BoardGameResource::fromModel($model) : null;
    }
}
```

---
transition: fade
---

```php {13}
final class BoardGameItemProvider implements ProviderInterface
{
    public function __construct(
        private QueryBusInterface $queryBus,
    ) {
    }

    public function provide(Operation $operation, Context $context): object|iterable|null
    {
        $request = $context->get(RequestOption::class)?->request();
        Assert::notNull($request);

        $id = (string) $request->attributes->get('id');

        $model = $this->queryBus->ask(new FindBoardGameQuery(new BoardGameId(Uuid::fromString($id))));

        return null !== $model ? BoardGameResource::fromModel($model) : null;
    }
}
```

---
transition: fade
---

```php {15}
final class BoardGameItemProvider implements ProviderInterface
{
    public function __construct(
        private QueryBusInterface $queryBus,
    ) {
    }

    public function provide(Operation $operation, Context $context): object|iterable|null
    {
        $request = $context->get(RequestOption::class)?->request();
        Assert::notNull($request);

        $id = (string) $request->attributes->get('id');

        $model = $this->queryBus->ask(new FindBoardGameQuery(new BoardGameId(Uuid::fromString($id))));

        return null !== $model ? BoardGameResource::fromModel($model) : null;
    }
}
```

---

```php {17}
final class BoardGameItemProvider implements ProviderInterface
{
    public function __construct(
        private QueryBusInterface $queryBus,
    ) {
    }

    public function provide(Operation $operation, Context $context): object|iterable|null
    {
        $request = $context->get(RequestOption::class)?->request();
        Assert::notNull($request);

        $id = (string) $request->attributes->get('id');

        $model = $this->queryBus->ask(new FindBoardGameQuery(new BoardGameId(Uuid::fromString($id))));

        return null !== $model ? BoardGameResource::fromModel($model) : null;
    }
}
```
