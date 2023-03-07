---
transition: fade
---

# Et ??

---
layout: image
image: /browsing_books.png
transition: fade
---

---
layout: image
image: /adding_book.png
transition: fade
---

---
layout: image
image: /editing_book.png
transition: fade
---

---
layout: image
image: /delete_confirmation.png
transition: fade
---

---
layout: image
image: /flash_message.png
---

---

## Et un petit search input ?

```php {5-8}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        ->orderBy('name')
        ->addFilter(
            StringFilter::create(name: 'search', fields: ['name'])
                ->setLabel('Search')
        )
        ->addField(
            StringField::create('name')
                ->setLabel('Name')
                ->setSortable(true)
        )
        // [..]
    ;
}
```

---
layout: image
image: /search_filter.png
transition: fade
---

---
layout: image
image: /filter_details.png
transition: fade
---

---
layout: image
image: /search_value.png
transition: fade
---

---
layout: image
image: /filtered_books.png
---
