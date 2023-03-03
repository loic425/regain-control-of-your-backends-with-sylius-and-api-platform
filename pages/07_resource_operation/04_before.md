---
transition: fade
---

# Différences

<v-clicks>

Précédente implémentation

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

</v-clicks>

---

```php {all|4|6|7|9-13|15-22|24}
// vendor/sylius/resource-bundle/src/Bundle/Controller/ResourceController.php
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
