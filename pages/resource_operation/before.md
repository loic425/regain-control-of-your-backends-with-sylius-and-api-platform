---
transition: fade
---

# Différences

Implémentation courante

* ResourceController avec des actions

---
transition: fade
---

# Différences

Implémentation courante

* ResourceController avec des actions
    * showAction

---
transition: fade
---

# Différences

Implémentation courante

* ResourceController avec des actions
    * showAction
    * indexAction

---
transition: fade
---

# Différences

Implémentation courante

* ResourceController avec des actions
    * showAction
    * indexAction
    * createAction

---
transition: fade
---

# Différences

Implémentation courante

* ResourceController avec des actions
    * showAction
    * indexAction
    * createAction
    * updateAction

---
transition: fade
---

# Différences

Implémentation courante

* ResourceController avec des actions
    * showAction
    * indexAction
    * createAction
    * updateAction
    * deleteAction

---
transition: fade
---

# Différences

Implémentation courante

* ResourceController avec des actions
    * showAction
    * indexAction
    * createAction
    * updateAction
    * deleteAction
    * bulkDeleteAction

---
transition: fade
---

# Différences

Implémentation courante

* ResourceController avec des actions 
  * showAction
  * indexAction
  * createAction
  * updateAction  
  * deleteAction
  * bulkDeleteAction
  * applyStateMachineTransitionAction

---
transition: fade
---

# Différences

Implémentation courante

* ResourceController avec des actions
    * showAction
    * indexAction
    * createAction
    * updateAction
    * deleteAction
    * bulkDeleteAction
    * applyStateMachineTransitionAction

**582 lignes de code 😯**

---

# Différences

Implémentation courante

* ResourceController avec des actions
  * showAction
  * indexAction
  * createAction
  * updateAction
  * deleteAction
  * bulkDeleteAction
  * applyStateMachineTransitionAction

**582 lignes de code 😯**

**2808 lignes de tests pour un même service 😱**

---
transition: fade
---

```php
public function showAction(Request $request): Response
{
    $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);

    $this->isGrantedOr403($configuration, ResourceActions::SHOW);
    $resource = $this->findOr404($configuration);

    $event = $this->eventDispatcher->dispatch(ResourceActions::SHOW, $configuration, $resource);
    $eventResponse = $event->getResponse();
    if (null !== $eventResponse) {
        return $eventResponse;
    }

    if ($configuration->isHtmlRequest()) {
        return $this->render($configuration->getTemplate(ResourceActions::SHOW . '.html'), [
            'configuration' => $configuration,
            'metadata' => $this->metadata,
            'resource' => $resource,
            $this->metadata->getName() => $resource,
        ]);
    }

    return $this->createRestView($configuration, $resource);
}
```

---
transition: fade
---

```php {3}
public function showAction(Request $request): Response
{
    $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);

    $this->isGrantedOr403($configuration, ResourceActions::SHOW);
    $resource = $this->findOr404($configuration);

    $event = $this->eventDispatcher->dispatch(ResourceActions::SHOW, $configuration, $resource);
    $eventResponse = $event->getResponse();
    if (null !== $eventResponse) {
        return $eventResponse;
    }

    if ($configuration->isHtmlRequest()) {
        return $this->render($configuration->getTemplate(ResourceActions::SHOW . '.html'), [
            'configuration' => $configuration,
            'metadata' => $this->metadata,
            'resource' => $resource,
            $this->metadata->getName() => $resource,
        ]);
    }

    return $this->createRestView($configuration, $resource);
}
```

---
transition: fade
---

```php {5}
public function showAction(Request $request): Response
{
    $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);

    $this->isGrantedOr403($configuration, ResourceActions::SHOW);
    $resource = $this->findOr404($configuration);

    $event = $this->eventDispatcher->dispatch(ResourceActions::SHOW, $configuration, $resource);
    $eventResponse = $event->getResponse();
    if (null !== $eventResponse) {
        return $eventResponse;
    }

    if ($configuration->isHtmlRequest()) {
        return $this->render($configuration->getTemplate(ResourceActions::SHOW . '.html'), [
            'configuration' => $configuration,
            'metadata' => $this->metadata,
            'resource' => $resource,
            $this->metadata->getName() => $resource,
        ]);
    }

    return $this->createRestView($configuration, $resource);
}
```

---
transition: fade
---

```php {6}
public function showAction(Request $request): Response
{
    $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);

    $this->isGrantedOr403($configuration, ResourceActions::SHOW);
    $resource = $this->findOr404($configuration);

    $event = $this->eventDispatcher->dispatch(ResourceActions::SHOW, $configuration, $resource);
    $eventResponse = $event->getResponse();
    if (null !== $eventResponse) {
        return $eventResponse;
    }

    if ($configuration->isHtmlRequest()) {
        return $this->render($configuration->getTemplate(ResourceActions::SHOW . '.html'), [
            'configuration' => $configuration,
            'metadata' => $this->metadata,
            'resource' => $resource,
            $this->metadata->getName() => $resource,
        ]);
    }

    return $this->createRestView($configuration, $resource);
}
```

---
transition: fade
---

```php {6}
public function showAction(Request $request): Response
{
    $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);

    $this->isGrantedOr403($configuration, ResourceActions::SHOW);
    $resource = $this->findOr404($configuration); // Using Doctrine

    $event = $this->eventDispatcher->dispatch(ResourceActions::SHOW, $configuration, $resource);
    $eventResponse = $event->getResponse();
    if (null !== $eventResponse) {
        return $eventResponse;
    }

    if ($configuration->isHtmlRequest()) {
        return $this->render($configuration->getTemplate(ResourceActions::SHOW . '.html'), [
            'configuration' => $configuration,
            'metadata' => $this->metadata,
            'resource' => $resource,
            $this->metadata->getName() => $resource,
        ]);
    }

    return $this->createRestView($configuration, $resource);
}
```

---
transition: fade
---

```php {8-12}
public function showAction(Request $request): Response
{
    $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);

    $this->isGrantedOr403($configuration, ResourceActions::SHOW);
    $resource = $this->findOr404($configuration);

    $event = $this->eventDispatcher->dispatch(ResourceActions::SHOW, $configuration, $resource);
    $eventResponse = $event->getResponse();
    if (null !== $eventResponse) {
        return $eventResponse;
    }

    if ($configuration->isHtmlRequest()) {
        return $this->render($configuration->getTemplate(ResourceActions::SHOW . '.html'), [
            'configuration' => $configuration,
            'metadata' => $this->metadata,
            'resource' => $resource,
            $this->metadata->getName() => $resource,
        ]);
    }

    return $this->createRestView($configuration, $resource);
}
```

---
transition: fade
---

```php {14-21}
public function showAction(Request $request): Response
{
    $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);

    $this->isGrantedOr403($configuration, ResourceActions::SHOW);
    $resource = $this->findOr404($configuration);

    $event = $this->eventDispatcher->dispatch(ResourceActions::SHOW, $configuration, $resource);
    $eventResponse = $event->getResponse();
    if (null !== $eventResponse) {
        return $eventResponse;
    }

    if ($configuration->isHtmlRequest()) {
        return $this->render($configuration->getTemplate(ResourceActions::SHOW . '.html'), [
            'configuration' => $configuration,
            'metadata' => $this->metadata,
            'resource' => $resource,
            $this->metadata->getName() => $resource,
        ]);
    }

    return $this->createRestView($configuration, $resource);
}
```

---
transition: fade
---

```php {23}
public function showAction(Request $request): Response
{
    $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);

    $this->isGrantedOr403($configuration, ResourceActions::SHOW);
    $resource = $this->findOr404($configuration);

    $event = $this->eventDispatcher->dispatch(ResourceActions::SHOW, $configuration, $resource);
    $eventResponse = $event->getResponse();
    if (null !== $eventResponse) {
        return $eventResponse;
    }

    if ($configuration->isHtmlRequest()) {
        return $this->render($configuration->getTemplate(ResourceActions::SHOW . '.html'), [
            'configuration' => $configuration,
            'metadata' => $this->metadata,
            'resource' => $resource,
            $this->metadata->getName() => $resource,
        ]);
    }

    return $this->createRestView($configuration, $resource);
}
```

---

```php {23}
public function showAction(Request $request): Response
{
    $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);

    $this->isGrantedOr403($configuration, ResourceActions::SHOW);
    $resource = $this->findOr404($configuration);

    $event = $this->eventDispatcher->dispatch(ResourceActions::SHOW, $configuration, $resource);
    $eventResponse = $event->getResponse();
    if (null !== $eventResponse) {
        return $eventResponse;
    }

    if ($configuration->isHtmlRequest()) {
        return $this->render($configuration->getTemplate(ResourceActions::SHOW . '.html'), [
            'configuration' => $configuration,
            'metadata' => $this->metadata,
            'resource' => $resource,
            $this->metadata->getName() => $resource,
        ]);
    }

    return $this->createRestView($configuration, $resource); // Using FOS Rest bundle & JMS Serializer 😱
}
```
