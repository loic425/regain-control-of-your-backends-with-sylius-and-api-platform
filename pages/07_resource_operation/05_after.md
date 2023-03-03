# Différences

<v-clicks>

Nouvelle implémentation

PlaceHolderAction avec... 

une seule action ! ❤️

</v-clicks>

---

```php {all|9|11}

namespace Sylius\Component\Resource\Action;

final class PlaceHolderAction
{
    /**
     * @param mixed $data
     */
    public function __invoke($data = null): mixed
    {
        return $data;
    }
}

```

---
layout: image
image: /../assets/images/fake_end.png
---

---
transition: fade
---

# Kernel request events


---
transition: fade
---

# Kernel request events

| Name              | Event          | Description                                                 |                 
|-------------------|----------------|-------------------------------------------------------------|
| AddFormatListener | kernel.request | Devine le meilleure format de réponse (content-negociation). |

---
transition: fade
---

# Kernel request events

| Name              | Event          | Description                                                  |                 
|-------------------|----------------|--------------------------------------------------------------|
| AddFormatListener | kernel.request | Devine le meilleure format de réponse (content-negociation). |
| ReadListener      | kernel.request | Récupère les données en utilisant les states providers.      |

---
transition: fade
---

# Kernel request events

| Name              | Event          | Description                                                  |                 
|-------------------|----------------|--------------------------------------------------------------|
| AddFormatListener | kernel.request | Devine le meilleure format de réponse (content-negociation). |
| ReadListener      | kernel.request | Récupère les données en utilisant les states providers.      |
| FactoryListener   | kernel.request | Instancie la resource en utilisant la resource factory.      |

---

# Kernel request events

| Name                | Event          | Description                                                  |                 
|---------------------|----------------|--------------------------------------------------------------|
| AddFormatListener   | kernel.request | Devine le meilleure format de réponse (content-negociation). |
| ReadListener        | kernel.request | Récupère les données en utilisant les states providers.      |
| FactoryListener     | kernel.request | Instancie la resource en utilisant la resource factory.      |
| DeserializeListener | kernel.request | Désérialise les données dans un objet PHP.                   |

---
transition: fade
---

# Kernel view events

---
transition: fade
---

# Kernel view events

| Name              | Event       | Description                                          |                 
|-------------------|-------------|------------------------------------------------------|
| FormListener      | kernel.view | Initialise et soumet le formulaire (si format HTML). |

---
transition: fade
---

# Kernel view events

| Name              | Event       | Description                                             |                 
|-------------------|-------------|---------------------------------------------------------|
| FormListener      | kernel.view | Initialise et soumet le formulaire (si format HTML).    |
| ValidateListener  | kernel.view | Valide les donnés en utilisant les validateurs Symfony. |

---
transition: fade
---

# Kernel view events

| Name             | Event       | Description                                                  |                 
|------------------|-------------|--------------------------------------------------------------|
| FormListener     | kernel.view | Initialise et soumet le formulaire (si format HTML).         |
| ValidateListener | kernel.view | Valide les donnés en utilisant les validateurs Symfony.      |
| WriteListener    | kernel.view | Persiste les changements en utilisant les states processors. |

---
transition: fade
---

# Kernel view events

| Name              | Event       | Description                                                  |                 
|-------------------|-------------|--------------------------------------------------------------|
| FormListener      | kernel.view | Initialise et soumet le formulaire (si format HTML).         |
| ValidateListener  | kernel.view | Valide les donnés en utilisant les validateurs Symfony.      |
| WriteListener     | kernel.view | Persiste les changements en utilisant les states processors. |
| SerializeListener | kernel.view | Sérialise l'objet PHP en string.                             |

---

# Kernel view events

| Name              | Event       | Description                                                  |                 
|-------------------|-------------|--------------------------------------------------------------|
| FormListener      | kernel.view | Initialise et soumet le formulaire (si format HTML).         |
| ValidateListener  | kernel.view | Valide les donnés en utilisant les validateurs Symfony.      |
| WriteListener     | kernel.view | Persiste les changements en utilisant les states processors. |
| SerializeListener | kernel.view | Sérialise l'objet PHP en string.                             |
| RespondListener   | kernel.view | Transforme les données en une réponse Symfony.               |

