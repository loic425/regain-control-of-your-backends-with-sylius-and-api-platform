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

```php {all|4|6-7|9|11}
// src/BoardGameBlog/Infrastructure/Sylius/State/Cli/Responder/BoardGameItemResponder.php
public function respond(mixed $data, Operation $operation, Context $context): mixed
{
    Assert::isInstanceOf($data, BoardGameResource::class);
    
    $inputOption = $context->get(InputOption::class);
    $outputOption = $context->get(OutputOption::class);

    $ui = new SymfonyStyle($inputOption->input(), $outputOption->output());

    $ui->title($data->name);

    return null;
}
```
