---

# Responder 

```php {all|6}
interface ResponderInterface
{
    /**
     * Handle the response.
     */
    public function respond(mixed $data, Operation $operation, Context $context): mixed;
}

```

---

```php {all|3-7|11|13-15|17|19-21|23}
final class Responder implements ResponderInterface
{
    public function __construct(
        private ResponderInterface $htmlResponder,
        private ResponderInterface $apiResponder,
    ) {
    }

    public function respond(mixed $data, Operation $operation, Context $context): mixed
    {
        $request = $context->get(RequestOption::class)?->request();

        if (null === $request) {
            return null;
        }

        $format = $request->getRequestFormat();

        if ('html' === $format) {
            return $this->htmlResponder->respond($data, $operation, $context);
        }

        return $this->apiResponder->respond($data, $operation, $context);
    }
}

```

---

```php {all|1|4-9|11-16|18-21}
#[AsCommand(name: 'app:show-book')]
final class ShowBookCommand extends Command
{
    public function __construct(
        private readonly ProviderInterface $provider,
        private readonly ResponderInterface $responder,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('id', InputArgument::REQUIRED, 'The book id.')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        /// [...]
    }
}
```

---

```php {6|8|9-10|12|14|16-19}
#[AsCommand(name: 'app:show-book')]
final class ShowBookCommand extends Command
{
    // [...]

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $operation = new CliOperation();
        $operation = $operation->withProvider(BookItemProvider::class);
        $operation = $operation->withResponder(BookItemResponder::class);

        $context = new Context(new CliOption($this, $input, $output));

        $data = $this->provider->provide($operation, $context);

        /** @var int $response */
        $response = $this->responder->respond($data, $operation, $context);

        return $response;
    }
}
```

---

```php {all|4-6|10-13|14-17|19-22}
final class CliOption
{
    public function __construct(
        private Command $command,
        private InputInterface $input,
        private OutputInterface $output
    ) {
    }
    
    public function command(): Command
    {
        return $this->command;
    }

    public function input(): InputInterface
    {
        return $this->input;
    }

    public function output(): OutputInterface
    {
        return $this->output;
    }
}
```

---
transition: fade
---

```php {all|4|6|8|10|11}
// src/BoardGameBlog/Infrastructure/Sylius/State/Cli/Responder/BookItemResponder.php
public function respond(mixed $data, Operation $operation, Context $context): mixed
{
    $cliOption = $context->get(CliOption::class);

    Assert::notNull($cliOption);

    $ui = new SymfonyStyle($cliOption->input(), $cliOption->output());

    Assert::isInstanceOf($data, Book::class);
    $book = BookResource::fromModel($data);
    
    // [...]
}
```

---

```php {all|6|8-9|11-12|14-15|17-18|20-21|23}
// src/BoardGameBlog/Infrastructure/Sylius/State/Cli/Responder/BookItemResponder.php
public function respond(mixed $data, Operation $operation, Context $context): mixed
{    
    // [...]

    $ui->title($book->name);

    $ui->section('Id');
    $ui->writeln((string) $book->id);

    $ui->section('Author');
    $ui->writeln($book->author);

    $ui->section('Description');
    $ui->writeln($book->description);

    $ui->section('Content');
    $ui->writeln($book->content);

    $ui->section('Price');
    $ui->writeln($book->price);

    return Command::SUCCESS;
}
```

---

![Cli list output](/cli_output.png)

---
transition: fade
---

```php {all|1|5-6|14-15}
#[AsCommand(name: 'app:list-books')]
final class ListBooksCommand extends Command
{
    public function __construct(
        private readonly ProviderInterface $provider,
        private readonly ResponderInterface $responder,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption('page', null, InputOption::VALUE_REQUIRED, 'Page number.', 1)
            ->addOption('items-per-page', null, InputOption::VALUE_REQUIRED, 'Amount of items per page.', 10)
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        // [...]
    }
}
```

---

```php {all|8-10|12|14|16-19}
#[AsCommand(name: 'app:list-books')]
final class ListBooksCommand extends Command
{
    // [...]

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $operation = new CliOperation();
        $operation = $operation->withProvider(BookCollectionProvider::class);
        $operation = $operation->withResponder(BookCollectionResponder::class);

        $context = new Context(new CliOption($this, $input, $output));

        $data = $this->provider->provide($operation, $context);
        
        /** @var int $response */
        $response = $this->responder->respond($data, $operation, $context);

        return $response;
    }
}
```

---

![Cli list output](/cli_list_output.png)
