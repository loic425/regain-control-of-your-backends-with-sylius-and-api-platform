---
layout: image
image: https://ressources.mobizel.com/wp-content/uploads/2019/12/monofony-banner-mobizel-2048x707.png
---

---

# Installation

```shell
$ composer create-project monofony/skeleton project_name
```

---
layout: image
image: /dashboard.png
transition: fade
---

---
layout: image
image: /administrators.png
---

---

# Intégration continue

* Github Actions
* Circle CI

![CI](/ci.png)

---

# Behat

```gherkin
@managing_administrators
Feature: Adding a new administrator
    In order to create new administrator account
    As an Administrator
    I want to add an administrator in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new administrator
        Given I want to create a new administrator
        When I specify its email as "l.skywalker@gmail.com"
        And I specify its name as "Luke"
        And I specify its password as "lightsaber"
        And I add it
        Then I should be notified that it has been successfully created
        And the administrator "l.skywalker@gmail.com" should appear in the list

    @ui
    Scenario: Adding a new administrator and log in with its credentials
        Given I want to create a new administrator
        When I specify its email as "l.skywalker@gmail.com"
        And I specify its name as "Luke"
        And I specify its password as "lightsaber"
        And I enable it
        And I add it
        Then I should be able to log in as "l.skywalker@gmail.com" authenticated by "lightsaber" password

```

---

# Phpspec

```php
final class AdminAvatarSpec extends ObjectBehavior
{
    function it_is_initializable(): void
    {
        $this->shouldHaveType(AdminAvatar::class);
    }

    function it_is_a_file(): void
    {
        $this->shouldHaveType(File::class);
    }

    function it_has_no_file_by_default(): void
    {
        $this->getFile()->shouldReturn(null);
    }

    function its_file_is_mutable(\SplFileInfo $file): void
    {
        $this->setFile($file);

        $this->getFile()->shouldReturn($file);
    }

    function it_has_no_path_by_defaut(): void
    {
        $this->getPath()->shouldReturn(null);
    }

    function its_path_is_mutable(): void
    {
        $this->setPath('avatar.png');

        $this->getPath()->shouldReturn('avatar.png');
    }
}
```

---

# PHPUnit

```php
class ChangePasswordApiTest extends JsonApiTestCase
{
    use Factories;
    use AuthorizedHeaderTrait;
    use PurgeDatabaseTrait;

    /** @test */
    public function it_does_not_allow_to_change_password_for_non_authenticated_user(): void
    {
        TestAppUsersStory::load();

        $customer = AppUserFactory::find(['username' => 'sylius'])->getCustomer();

        $this->client->request('PATCH', '/api/customers/'.$customer->getId().'/password', [], [], ['CONTENT_TYPE' => 'application/merge-patch+json'], '{}');

        $response = $this->client->getResponse();
        $this->assertResponse($response, 'error/access_denied_response', Response::HTTP_UNAUTHORIZED);
    }

    /** @test */
    public function it_does_not_allow_to_change_password_without_required_data(): void
    {
        TestAppUsersStory::load();

        $customer = AppUserFactory::find(['username' => 'sylius'])->getCustomer();

        $this->client->request('PATCH', '/api/customers/'.$customer->getId().'/password', [], [], self::$authorizedHeaderForPatch, '{}');

        $response = $this->client->getResponse();
        $this->assertResponse($response, 'customer/change_password_validation_response', Response::HTTP_UNPROCESSABLE_ENTITY);
    }
}
```
