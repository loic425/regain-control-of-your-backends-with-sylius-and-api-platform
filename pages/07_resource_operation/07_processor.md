---

# State processor

```php {all|11}
/**
 * Process data: send an email, persist to storage, add to queue etc.
 *
 * @experimental
 */
interface ProcessorInterface
{
    /**
     * Handle the state.
     */
    public function process(mixed $data, Operation $operation, Context $context): mixed;
}

```

---

```php {all|10|11}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php
#[Resource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Delete(
    provider: BoardGameItemProvider::class,
    processor: DeleteBoardGameProcessor::class,
)]
final class BoardGameResource implements ResourceInterface
```

---

```php {all|11|13|15}
// src/BoardGameBlog/Infrastructure/Sylius/State/Http/Processor/DeleteBoardGameProcessor.php
final class DeleteBoardGameProcessor implements ProcessorInterface
{
    public function __construct(
        private CommandBusInterface $commandBus,
    ) {
    }

    public function process(mixed $data, Operation $operation, Context $context): mixed
    {
        Assert::isInstanceOf($data, BoardGameResource::class);

        $this->commandBus->dispatch(new DeleteBoardGameCommand(new BoardGameId($data->id)));

        return null;
    }
}
```
