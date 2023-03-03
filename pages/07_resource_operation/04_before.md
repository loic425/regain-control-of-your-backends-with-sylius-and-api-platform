---
transition: fade
---

# Différences

---
transition: fade
---

# Différences

Précédente implémentation

---
transition: fade
---

# Différences

Précédente implémentation

* ResourceController avec des actions

---
transition: fade
---

# Différences

Précédente implémentation

* ResourceController avec des actions
    * showAction

---
transition: fade
---

# Différences

Précédente implémentation

* ResourceController avec des actions
    * showAction
    * indexAction

---
transition: fade
---

# Différences

Précédente implémentation

* ResourceController avec des actions
    * showAction
    * indexAction
    * createAction

---
transition: fade
---

# Différences

Précédente implémentation

* ResourceController avec des actions
    * showAction
    * indexAction
    * createAction
    * updateAction

---
transition: fade
---

# Différences

Précédente implémentation

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

Précédente implémentation

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

Précédente implémentation

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

---

# Différences

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

---
transition: fade
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
