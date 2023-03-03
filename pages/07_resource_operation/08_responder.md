---
transition: fade
---

# Responder

```php
interface ResponderInterface
{
    /**
     * Handle the response.
     */
    public function respond(mixed $data, Operation $operation, Context $context): mixed;
}

```

---
transition: fade
---

```php
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
transition: fade
---

```php {3-7}
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
transition: fade
---

```php {11}
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
transition: fade
---

```php {13-15}
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
transition: fade
---

```php {17}
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
transition: fade
---

```php {19-21}
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

```php {23}
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
transition: fade
---

```php
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

---
transition: fade
---

```php {4}
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

---
transition: fade
---

```php {6-7}
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

---
transition: fade
---

```php {9}
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

---
transition: fade
---

```php {11}
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