# Grid Provider

---

```php {all|11}
final class BoardGameGrid extends AbstractGrid implements ResourceAwareGridInterface
{
    public static function getName(): string
    {
        return 'app_board_game';
    }

    public function buildGrid(GridBuilderInterface $gridBuilder): void
    {
        $gridBuilder
            ->setProvider(BoardGameGridProvider::class)
            ->addField(
                StringField::create('name')
                    ->setLabel('Name'),
            )
            ->addField(
                StringField::create('shortDescription')
                    ->setLabel('Short Description'),
            )
        ;
    }

    public function getResourceClass(): string
    {
        return BoardGameResource::class;
    }
}   
```

---

```php {all|3|7|11-19|21}
final class BoardGameGridProvider implements DataProviderInterface
{
    public function __construct(private string $dataDir)
    {
    }

    public function getData(Grid $grid, Parameters $parameters): Pagerfanta
    {
        $data = [];

        foreach ($this->getFileData() as $row) {
            [$id, $name, $shortDescription] = str_getcsv($row);

            $data[] = new BoardGameResource(
                id: $id,
                name: $name,
                shortDescription: $shortDescription,
            );
        }

        return new Pagerfanta(new ArrayAdapter($data));
    }

    private function getFileData(): array
    {
        return file($this->dataDir . '/board_games.csv');
    }
}
```