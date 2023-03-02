---
transition: fade
---

# Arhictecture hexagonale

---
transition: fade
---

# Arhictecture hexagonale

Model

---
transition: fade
---

# Arhictecture hexagonale

Model

```php
// src/BoardGameBlog/Domain/Model/BoardGame.php
#[ORM\Entity]
class BoardGame
{
    #[ORM\Embedded(columnPrefix: false)]
    private BoardGameId $id;

    public function __construct(
        #[ORM\Embedded(columnPrefix: false)]
        private BoardGameName $name,
    ) {
        $this->id = new BoardGameId();
    }

    public function update(
        ?BoardGameName $name = null,
    ): void {
        $this->name = $name ?? $this->name;
    }
    
    // [...]
}
```

---
transition: fade
---

# Arhictecture hexagonale

Model

```php {5-6}
// src/BoardGameBlog/Domain/Model/BoardGame.php
#[ORM\Entity]
class BoardGame
{
    #[ORM\Embedded(columnPrefix: false)]
    private BoardGameId $id;

    public function __construct(
        #[ORM\Embedded(columnPrefix: false)]
        private BoardGameName $name,
    ) {
        $this->id = new BoardGameId();
    }

    public function update(
        ?BoardGameName $name = null,
    ): void {
        $this->name = $name ?? $this->name;
    }
    
    // [...]
}
```

---
transition: fade
---

# Arhictecture hexagonale

Model

```php {8-13}
// src/BoardGameBlog/Domain/Model/BoardGame.php
#[ORM\Entity]
class BoardGame
{
    #[ORM\Embedded(columnPrefix: false)]
    private BoardGameId $id;

    public function __construct(
        #[ORM\Embedded(columnPrefix: false)]
        private BoardGameName $name,
    ) {
        $this->id = new BoardGameId();
    }

    public function update(
        ?BoardGameName $name = null,
    ): void {
        $this->name = $name ?? $this->name;
    }
    
    // [...]
}
```

---
transition: fade
---

# Arhictecture hexagonale

Model

```php {15-19}
// src/BoardGameBlog/Domain/Model/BoardGame.php
#[ORM\Entity]
class BoardGame
{
    #[ORM\Embedded(columnPrefix: false)]
    private BoardGameId $id;

    public function __construct(
        #[ORM\Embedded(columnPrefix: false)]
        private BoardGameName $name,
    ) {
        $this->id = new BoardGameId();
    }

    public function update(
        ?BoardGameName $name = null,
    ): void {
        $this->name = $name ?? $this->name;
    }
    
    // [...]
}
```

---
transition: fade
---

# Arhictecture hexagonale

Model

```php {6-15}
// src/BoardGameBlog/Domain/Model/BoardGame.php
#[ORM\Entity]
class BoardGame
{    
    // [...]
    
    public function id(): BoardGameId
    {
        return $this->id;
    }

    public function name(): BoardGameName
    {
        return $this->name;
    }
}
```

---
transition: fade
---

# Arhictecture hexagonale

---
transition: fade
---

# Arhictecture hexagonale

Resource

---
# Arhictecture hexagonale

Resource

```php
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php
#[Resource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Create(/*...*/)]
#[Update(/*...*/)]
#[Index(/*...*/)]
#[Show(/*...*/)]
#[Delete(/*...*/)]
final class BoardGameResource implements ResourceInterface
```
