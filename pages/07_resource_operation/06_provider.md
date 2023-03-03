---

# State provider

<v-clicks>

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

* Operation *(Create, Show, Index, Update, Delete, BulkDelete...)*
* Context: ArrayObject *(RequestOption, ResourceClassOption)*

</v-clicks>

---

```php {all|11}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php
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

```php {all|11-12|14|16|18}
// src/BoardGameBlog/Infrastructure/Sylius/State/Http/Provider/BoardGameItemProvider.php
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
