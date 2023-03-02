---
transition: fade
---

# Et ??

---
layout: image
image: ./assets/images/browsing_books.png
transition: fade
---

---
layout: image
image: ./assets/images/adding_book.png
transition: fade
---

---
layout: image
image: ./assets/images/editing_book.png
transition: fade
---

---
layout: image
image: ./assets/images/delete_confirmation.png
transition: fade
---

---
layout: image
image: ./assets/images/flash_message.png
---

---

## Et un petit search input ?

```php {5-8}
public function buildGrid(GridBuilderInterface $gridBuilder): void
{
    $gridBuilder
        ->orderBy('name')
        ->addFilter(
            StringFilter::create('search', ['name'])
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
image: ./assets/images/search_filter.png
transition: fade
---

---
layout: image
image: ./assets/images/filter_details.png
transition: fade
---

---
layout: image
image: ./assets/images/search_value.png
transition: fade
---

---
layout: image
image: ./assets/images/filtered_books.png
---

---
layout: image
image: https://api-platform.com/logo.png
---

---
